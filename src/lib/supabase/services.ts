import { cache } from 'react';
import { getSupabase } from './client';
import { SERVICETYPE } from '@/utils/data';

/** Maps a raw Supabase row to the app type */
function mapRow(row: any): SERVICETYPE {
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

/**
 * Fetch all active services ordered by name.
 * Wrapped in React cache() so the layout and the page share one request per render.
 * Throws on error; the root layout catches it so an outage can't take down every page.
 */
export const getServices = cache(async (): Promise<SERVICETYPE[]> => {
  const supabase = getSupabase();
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('status', 'active')
    .order('name', { ascending: true });

  if (error) throw new Error(`Failed to fetch services: ${error.message}`);
  return (data ?? []).map(mapRow);
});

/**
 * Same as getServices, but returns [] if Supabase is unreachable, so a page
 * still renders (with an empty services list) instead of failing outright.
 */
export async function getServicesSafe(): Promise<SERVICETYPE[]> {
  try {
    return await getServices();
  } catch (error) {
    console.error('[services] Could not load services:', error);
    return [];
  }
}

/** Fetch a single active service by id (cached per render: metadata + page share it) */
export const getServiceById = cache(
  async (id: string): Promise<SERVICETYPE | null> => {
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

    return data ? mapRow(data) : null;
  },
);
