import React from 'react';
import {View, Text, Image,TouchableOpacity, Linking} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather} from '@expo/vector-icons';
import * as MailComposer from 'expo-mail-composer';

import logoHero from '../../assets/logo.png';
import styles from './style';

export default function Detail(){

    const navigation = useNavigation();
    const route = useRoute();
    /*O nome depois do parametro será exatamente o mesmo que foi colocado na função que o chamou
    neste exemplo, a função esta no index.js da pasta Incidents na função navigateToDetail(incident)
    */
    const incident = route.params.incident;
    const message = `Entrando em contato sobre o(a) ${incident.description}`;
    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: `Título do incidente: ${incident.title}`,
            recipients:[ incident.email],
            body:message
        });
    }

    function sendWhatsapp(){
        Linking.openURL( `whatsapp://send?phone=${incident.whatsapp}=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoHero}/>
                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e82041"/>
               </TouchableOpacity>
            </View> 
            <View style={ styles.incident}>
                <Text style={[styles.incidentProperty,{marginTop:0}]}>ONG</Text>
                <Text style={styles.incidentValue}>
                    {incident.name} de {incident.city}/{incident.uf}
                </Text>

                <Text style={styles.incidentProperty}>CASO</Text>
                <Text style={styles.incidentValue}>{incident.title}</Text>

                <Text style={styles.incidentProperty}>VALOR:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',
                     {style:'currency', currency:'BRL'}).format(incident.values)}</Text>   
            </View>   
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o dia!</Text>
                <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
                <Text style={styles.heroDescription}>Entre em contato:</Text>

                <View style={ styles.actions}>
                    <TouchableOpacity style={ styles.action} onPress={sendWhatsapp}>
                        <Text style={ styles.actionText}>WhatsApp</Text>
                    </TouchableOpacity>                    
                
                    <TouchableOpacity style={ styles.action} onPress={sendMail}>
                        <Text style={ styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
