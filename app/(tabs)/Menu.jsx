import { StatusBar } from 'expo-status-bar';
import { ScrollView, View, Text, Image,Icon, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../constants';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import {icons} from '../../constants';
import { Ionicons } from '@expo/vector-icons';



const Menu= () => {
    const [form, setForm] = useState({
        username:'',
        email: '',
        password: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const submit =  () => {
        
    };

    return (
        <LinearGradient
            colors={['#FFFFFF', '#FD0000', '#FFFFFF', '#FD0000', '#FFFFFF', '#FFFFFF']} // Gradient colors
            locations={[0.4, 0.8, 1, 0.2, 0.3, 0.5]} // Color stop locations
            style={{ flex: 1 }}
        >
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={{ height: '100%' }}>
                <Ionicons name="person-circle" size={40} color="#000"
                                style={{
                                    position: 'absolute',
                                    right: 20,
                                    top: 10,
                                }}
                            />
                        </ScrollView>
                <StatusBar backgroundColor='#FFFFFF' style='dark' />
            </SafeAreaView>
        </LinearGradient>
    );
}
export default Menu;
