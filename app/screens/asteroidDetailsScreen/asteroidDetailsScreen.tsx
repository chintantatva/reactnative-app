import * as React from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle, Text, Alert } from "react-native"
import { TextField, Button } from "../../components";
import { color } from "../../theme";
import { observer } from 'mobx-react-lite'
import { useStores } from '../../models/root-store/root-store-context'




const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
    backgroundColor: "white",
}


export interface AsteroidDetailsScreenProps {
}

export const AsteroidDetailsScreen: React.FunctionComponent<AsteroidDetailsScreenProps> = observer(props => {
    const goBack = React.useMemo(() => () =>{
        rootStore.asteroidStore.onChnageAst('')
         props.navigation.goBack()}, [props.navigation])

    // React.useEffect(())

    const rootStore = useStores()

    return (
        <View style={FULL}>
            <View style={style.containeStyle}>
                <Text>name:- </Text>
                <Text>{rootStore.asteroidStore.astData ? rootStore.asteroidStore.astData.name : "-"}</Text>
            </View>
            <View style={style.containeStyle}>
                <Text>nasa_jpl_url:- </Text>
                <Text>{rootStore.asteroidStore.astData ? rootStore.asteroidStore.astData.nasa_jpl_url : "-"}</Text>
            </View>
            <View style={style.containeStyle}>
                <Text>is_potentially_hazardous_asteroid:- </Text>
                <Text>{rootStore.asteroidStore.astData ? (rootStore.asteroidStore.astData.is_potentially_hazardous_asteroid ? 'yes' : 'no') : "-"}</Text>
            </View>
        </View>
    )
})

const style={
    containeStyle:{
        marginTop:20,
        flexDirection:"row",
        height:50,
    }

}
