import { getSupabase } from "./client";

export type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  location: string | null;
  service: string;
  message: string;
  status: "new" | "reviewed" | "contacted" | "closed";
  submittedAt: string;
};

/** Maps a raw Supabase row → app type */
function mapRow(row: any): Submission {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    phone: row.phone,
    company: row.company ?? null,
    location: row.location ?? null,
    service: row.service,
    message: row.message,
    status: row.status,
    submittedAt: row.submitted_at,
  };
}

/**
 * Create a new form submission
 * @param data Submission data without id and submittedAt (auto-generated)
 */
export async function createSubmission(
  data: Omit<Submission, "id" | "submittedAt">,
): Promise<void> {
  const supabase = getSupabase() as any;

  // Insert only — no .select() afterwards. Anonymous visitors are allowed to
  // INSERT but not SELECT (RLS), so reading the row back makes Supabase reject
  // and roll back the whole insert.
  const { error } = await supabase.from("form_submissions").insert({
    name: data.name,
    email: data.email,
    phone: data.phone,
    company: data.company,
    location: data.location,
    service: data.service,
    message: data.message,
    status: data.status,
    submitted_at: new Date().toISOString(),
  });

  if (error) {
    throw new Error(`Failed to create submission: ${error.message}`);
  }
}

/** Fetch all submissions ordered newest first */
export async function getSubmissions(): Promise<Submission[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from("form_submissions")
    .select("*")
    .order("submitted_at", { ascending: false });

  if (error) throw new Error(`Failed to fetch submissions: ${error.message}`);
  return (data ?? []).map(mapRow);
}

/** Update the status of a submission */
export async function updateSubmissionStatus(
  id: string,
  status: Submission["status"],
): Promise<Submission> {
  const supabase = getSupabase() as any;
  const { data, error } = await supabase
    .from("form_submissions")
    .update({ status })
    .eq("id", id)
    .select()
    .single();

  if (error)
    throw new Error(`Failed to update submission status: ${error.message}`);
  return mapRow(data);
}
