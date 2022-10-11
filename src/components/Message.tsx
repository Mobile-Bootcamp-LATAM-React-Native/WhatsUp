import { StyleSheet, Text, View } from 'react-native'
import React, {useContext} from 'react';
import { ColorContext } from '../shared/ColorContext';

type MessageType = 'sender' | 'receiver';

type MessageProps = {
  message: string;
  time: String;
  type: MessageType;
}

const Message = ({
  message,
  time,
  type,
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
      paddingBottom: 0,
      backgroundColor: type == 'sender' ? senderColorMessage : receiverColorMessage,
    },
    text: {
      color: textColorMessage,
      fontSize: 18,
      textAlign:'justify',
      marginRight:52
    },
    textTime: {
      color: textColorMessage,
      fontWeight: '600',
      fontSize: 12,
      position:'relative',
      bottom:15,
      right:0,
      alignSelf: 'flex-end'
    }
  });
}
