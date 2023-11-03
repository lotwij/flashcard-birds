import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Card, Title } from 'react-native-paper';

type Props = {
    title:string
}


const FlipCard: React.FC <Props> = ( {title} ) => {
    return (
    <Card style={styles.card}>
        <Card.Content>
            <Title> {title} </Title>
            <TextInput/>
        </Card.Content>
        </Card>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
    }
})

export default FlipCard;