import React,{useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';

import api from '../../service/api';
import logoHero from '../../assets/logo.png';
import styles from './style';

export default function Incidents(){

    const navigation = useNavigation();
    const [incidents,setIncidents] = useState(0);
    const [total,setTotal] = useState([]);

    function navigateToDetail(incident){
        //Precisa ser o mesmo nome do campo NAME no arquivos rotas
        navigation.navigate('Detail',{incident});
    }

    async function loadIncidents(){
        const response = await api.get('incidents');
        setIncidents(response.data);
        setTotal(response.headers['x-total-counts']);
    }

    useEffect(() =>{
        loadIncidents();
    },[]);

    return( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoHero}/>
            <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>
                                {total} casos
                            </Text>. 
                </Text> 
            </View>
            <Text style={styles.title}> Bem-vindo!!</Text>
            <Text style={styles.description}> 
                Escolha um dos casos abaixo e salve o dia.
            </Text>
        
        <FlatList
            data={incidents}
            style={styles.incidents}
            keyExtractor={incident=> String(incident.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item:incident})=>(
                <View style={ styles.incident}>
                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>{incident.name}</Text>

                    <Text style={styles.incidentProperty}>CASO</Text>
                    <Text style={styles.incidentValue}>{incident.title}</Text>

                    <Text style={styles.incidentProperty}>VALOR:</Text>
                    <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR',
                     {style:'currency', currency:'BRL'}).format(incident.values)}</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={()=>navigateToDetail(incident)}>
                        <Text style={styles.detailsButtonText}>
                            Ver mais detalhes
                        </Text>
                    <Feather name="arrow-right" size={16} color="#e02041"/>
                    </TouchableOpacity>
                </View>
            )}
        />
        </View>    

    )
}