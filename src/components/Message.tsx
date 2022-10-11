import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { ColorContext } from '../shared/ColorContext';


type MessageType = 'sender' | 'receiver';

type MessageProps = {
  message: string;
  time: String;
  type?: MessageType;
}

// TODO
const Message = ({
  message,
  time,
  type = 'receiver'
}: MessageProps) =>{
  const styles = useStyles(type);

  return(
    <View style={styles.view}>
       <Text style={styles.text}>
        {message}
        </Text>
      <Text style={styles.textTime}>{time}</Text>
    </View>
  )
}

export default Message

const useStyles = (type: MessageType) => {
  const {
    senderColorMessage,
    receiverColorMessage,
    textColorMessage
  } = useContext(ColorContext);

  return StyleSheet.create({
    view: {
      margin: 10, 
      marginTop: 10,
      padding: 10, 
      borderRadius: 5, 
      paddingBottom: 10,
      backgroundColor: type == 'sender' ? senderColorMessage : receiverColorMessage,
    },
    text: {
      color: textColorMessage,
      fontSize: 18,
      textAlign:'justify',
      marginRight:51
    },
    textTime: {
      color: textColorMessage,
      fontWeight: '600',
      fontSize: 12,
      alignSelf: 'flex-end',
      marginBottom: -5,
      marginTop: -14
    }
  });
}
