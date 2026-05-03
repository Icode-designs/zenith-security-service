import { getSupabase } from './client';
import { SERVICETYPE } from '@/utils/data';

/** Fetch all services ordered by name */
export async function getServices(): Promise<SERVICETYPE[]> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('status', 'active')
    .order('name', { ascending: true });

  if (error) throw new Error(`Failed to fetch services: ${error.message}`);
  
  return (data ?? []).map((row: any) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    url: row.url ?? [],
    intro: row.intro ?? { title: '', description: '' },
    questioniar: row.questioniar ?? { question: '', answer: '' },
    offer: row.offer ?? { title: '', description: '' },
    FAQ: row.faq ?? [],
  }));
}

/** Fetch a single service by id */
export async function getServiceById(id: string): Promise<SERVICETYPE | null> {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('id', id)
    .eq('status', 'active')
    .single();

  if (error) {
    if (error.code === 'PGRST116') return null; // Not found
    throw new Error(`Failed to fetch service: ${error.message}`);
  }
  
  if (!data) return null;

  const row = data as any;

  return {
    id: row.id,
    name: row.name,
    description: row.description,
    url: row.url ?? [],
    intro: row.intro ?? { title: '', description: '' },
    questioniar: row.questioniar ?? { question: '', answer: '' },
    offer: row.offer ?? { title: '', description: '' },
    FAQ: row.faq ?? [],
  };
}
