import { StatusBar, StyleSheet } from "react-native";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        // height: 18*vh,
        height: 12 * vh + StatusBar.currentHeight,
        backgroundColor: theme.colors.primaryColor,
        borderBottomLeftRadius: 5 * vh,
        borderBottomRightRadius: 5 * vh,
        justifyContent: 'center',
    },
    headingText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 3 * vh,
        // backgroundColor: 'red',
        flex: 1,
        marginRight: 5*vw + 4*vh,
    },
    headingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 5*vw,
    },
    backArrow: {
        height: 4*vh,
        width: 4*vh
    },
    headingText2: {
        color: 'black',
        fontSize: 2.5 * vh,
    },
    headingText3: {
        color: 'black',
        fontSize: 2.5 * vh,
        marginVertical: 1*vh
    },
    logoImage: {
        height: 10 * vh, //20
        width: 10 * vh, //20
        resizeMode: 'contain'
    },
    mainContainer:{
        marginHorizontal: 5*vw,
        paddingTop: 2*vh,
        flex: 1
    },
    row: {
        flexDirection: 'row',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    column:{
        alignItems: 'flex-start'
    },  
    column2:{
        alignItems: 'flex-end'
    },  
    textBold: {
        fontSize: 1.8*vh
    }
})

export default styles