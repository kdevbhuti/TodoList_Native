import React from "react";
import { View, StyleSheet, Text } from "react-native"

const Task = (props) =>{
    return(
        <View>
            <Text style={styles.task}>{props.task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    task:{
        backgroundColor: "#FFFFFF",
        marginHorizontal: 20,
        marginVertical: 5,
        padding: 10,
        borderRadius: 10
    }
})

export default Task