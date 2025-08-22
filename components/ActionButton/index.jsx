import { Dimensions, Pressable, StyleSheet, Text } from "react-native";

const screenWidth = Dimensions.get('window').width;
const dynamicFontSize = screenWidth * 0.025;

export const ActionButton = ({ active, onPress, display }) => {
  return (
    <Pressable
      style={active ? styles.contextButtonActive : null}
      onPress={onPress}
    >
      <Text style={styles.contextButtonText}>
        {display}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  contextButtonText: {
    fontSize: dynamicFontSize,
    color: '#FFF',
    padding: 8
  },
  contextButtonActive: {
    backgroundColor: '#144480',
    borderRadius: 8
  }
})