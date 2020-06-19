import * as React from "react"
import { Image, ImageStyle, Platform, TextStyle, View, ViewStyle, Text, Alert } from "react-native"
import { TextField, Button } from "../../components";
import { color } from "../../theme";
import { useStores } from '../../models/root-store/root-store-context'
import { observer } from 'mobx-react-lite'




// https://api.nasa.gov/planetary/apod?api_key=xDgLheJsv5r5x7bZm76VKgcws9rzWIPsTmP020Tf


const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
    backgroundColor: "white",
}


export interface ScreenAsteroidInputScreenProps {
}

export const AsteroidInputScreen: React.FunctionComponent<ScreenAsteroidInputScreenProps> = observer(props => {
    const goBack = React.useMemo(() => () => props.navigation.goBack(), [props.navigation])

    const rootStore = useStores()


    React.useEffect(() => {

    }, []);


    function onSubmitPress() {
        rootStore.asteroidStore.getAsteroidData();
        props.navigation.navigate('asteroidDetailsScreen')
    }

    function onRandomAstPress() {
        rootStore.asteroidStore.getRandomAsteroidData();
    }


    return (
        <View style={FULL}>
            <TextField
                onChangeText={(value) => {
                    rootStore.asteroidStore.onChnageAst(value)
                }}
                inputStyle={{ color: "black" }}
                placeholder={'Enter Asteroid ID'}
                value={rootStore.asteroidStore.astId}

            />

            <Button
                text={'Random Asteroid'} onPress={onRandomAstPress}
                textStyle={{ fontSize: 20, color: "white" }}
                style={{ height: 35, marginTop: 30, backgroundColor: "blue" }} />
            <Button
                textStyle={{ fontSize: 20, color: "white" }}
                style={{ height: 35, marginTop: 30, backgroundColor:rootStore.asteroidStore.astId? "blue":"gray" }}
                text={'submit'} disabled={rootStore.asteroidStore.astId ? false : true} onPress={onSubmitPress} />
        </View>
    )
})
