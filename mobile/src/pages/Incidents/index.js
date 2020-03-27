import React from 'react';
import {View, Text, Image, TouchableOpacity,FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Feather} from '@expo/vector-icons';


import logoHero from '../../assets/logo.png';
import styles from './style';

export default function Incidents(){

    const navigation = useNavigation();

    function navigateToDetail(){
        //Precisa ser o mesmo nome do campo NAME no arquivos rotas
        navigation.navigate('Detail');
    }
    return( 
        <View style={styles.container}>
            <View style={styles.header}>
            <Image source={logoHero}/>
            <Text style={styles.headerText}>
                    Total de <Text style={styles.headerTextBold}>
                                0 casos
                            </Text>. 
                </Text> 
            </View>
            <Text style={styles.title}> Bem-vindo!!</Text>
            <Text style={styles.description}> 
                Escolha um dos casos abaixo e salve o dia.
            </Text>
        
        <FlatList
            data={[1,2,4,5]}
            style={styles.incidents}
            keyExtractor={incident=> String(incident)}
            showsVerticalScrollIndicator={false}
            renderItem={()=>(
                <View style={ styles.incident}>
                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <Text style={styles.incidentProperty}>ONG</Text>
                    <Text style={styles.incidentValue}>APAD</Text>

                    <TouchableOpacity 
                    style={styles.detailsButton} 
                    onPress={navigateToDetail}>
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