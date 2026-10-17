import { getSupabase } from "./client";

// The public site only ever INSERTS leads. Reading or updating submissions is
// an admin task: do it from the CMS with a signed-in admin account (RLS only
// lets is_admin users read them), never from this public site.

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
