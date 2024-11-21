import { useState, useEffect } from 'react';
import { ScrollView, View, Text, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fetchDonationsForDonor } from '../../api/donations'; // Adjust the path accordingly

const DonationHistory = () => {
  const [donations, setDonations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDonations = async () => {
      try {
        const donationData = await fetchDonationsForDonor(); // Call the API to fetch donations with location
        setDonations(donationData);
      } catch (error) {
        Alert.alert('Error', 'Could not fetch donations.');
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    };

    getDonations(); // Call the fetch function
  }, []);

  if (loading) {
    return <Text>Loading...</Text>; // Show loading text while fetching
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor: '#fff', alignItems: 'center', padding: 20 }}>
      <Ionicons name="person-circle" size={40} color="#000" style={{ position: 'absolute', right: 20, top: 10 }} />

      <View style={{ padding: 20, borderRadius: 10, alignItems: 'center', width: '100%' }}>
        <Text style={{ fontSize: 36, fontWeight: 'bold', textAlign: 'left', color: '#FFFFFF', padding: 15 }}>
          <Text style={{ color: '#FD0000' }}>Donation History !!!</Text>
        </Text>

        <Image source={{ uri: 'your-image-url' }} style={{ maxWidth: 380, width: '100%', height: 180 }} resizeMode="contain" />

        {donations.map((donation, index) => (
          <View
            key={index}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#ff767b',
              padding: 20,
              borderRadius: 20,
              marginVertical: 5,
              width: '100%',
              maxWidth: 500,
              justifyContent: 'space-between',
            }}
          >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={{ uri: 'your-image-url' }} style={{ width: 40, height: 40, marginRight: 10 }} resizeMode="contain" />
              <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                  {donation.date}
                </Text>
                <Text style={{ fontSize: 14, color: '#fff' }}>{donation.location}</Text>
              </View>
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#00cec9' }}>
              {donation.no_of_bottles} bottles
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default DonationHistory;
