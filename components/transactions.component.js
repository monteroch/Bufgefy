import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

export const TransactionsComponent = () => {

    const transactions = [
        {
            name: "Hamburguer",
            date: "Just now",
            amount: 27.99
        },{
            name: "Chicken Wings",
            date: "05/29/2020",
            amount: 15.00
        },{
            name: "Movie theater",
            date: "05/28/2020",
            amount: 20.50
        }
    ];

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.title}><Text style={styles.titleText}>Transaction</Text></View>
                <View style={styles.options}><Text style={styles.optionsText}>See all</Text></View>
            </View>
            {
                 (transactions)?(
                    transactions.map((transaction) => (
                        <View style={styles.body}>
                            <View style={styles.conceptContainer}>
                                <FontAwesome style={styles.icon} name="dollar" size={24} color="black" />
                                <View style={styles.concept}>
                                    <View>
                                        <Text style={styles.product}>{transaction.name}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.date}>{transaction.date}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.costContainer}>
                                <Text style={styles.cost}>{transaction.amount}</Text>
                            </View>
                        </View>
                    ))
                ):(
                    <Text>No transactions...</Text>
                )
            }
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#d3dbe6',
    },
    header: {
        flexDirection: 'row',
        marginBottom: 20
    },
    title:{
        flex: 1,
    },
    options: {
        flex: 1,
        alignItems: 'flex-end'
    },
    titleText: {

    },
    optionsText: {
        color: '#cc5500'
    },
    body: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    conceptContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    costContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    concept: {
        flexDirection: 'column'
    },
    icon: {
        alignSelf: 'center',
        marginRight: 20
    },
    product: {
        fontSize: 20
    },
    date: {
        fontSize: 13,
        color: "#9c9c9c"
    },
    cost: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#d71868'
    }
});