import { Button, Text, View } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
    Home: undefined;
  };
type Props = StackScreenProps<RootStackParamList, 'Home'>;

function CheckoutScreen(props: Props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Checkout!</Text>
            <Button title="Go to Home" onPress={() => props.navigation.navigate('Home')} />
        </View>
    )
}

export default CheckoutScreen;