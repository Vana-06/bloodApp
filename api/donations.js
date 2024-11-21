import { supabase } from "../app/lib/supabase";

// Function to fetch donations for a specific donor using donorId
export const fetchDonationsForDonor = async (donorId) => {
  try {
    if (!donorId) {
      throw new Error('No donor ID provided');
    }

    // Query the donor_donations table and join with blood_camp table based on camp_id
    const { data, error } = await supabase
      .from('donor_donations')
      .select('date, no_of_bottles, blood_camp(location)')
      .eq('donor_id', donorId); // Filter by donorId (passed as an argument)

    if (error) {
      throw error;
    }

    return data; // Return the donation data along with the camp location
  } catch (error) {
    console.error('Error fetching donations:', error.message);
    throw error;
  }
};
