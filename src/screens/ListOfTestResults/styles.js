import { StatusBar, StyleSheet } from "react-native";
import theme from "../../utils/units/theme";
import vh from "../../utils/units/vh";
import vw from "../../utils/units/vw";

export default StyleSheet.create({
    container: {
        // backgroundColor: 'red',
        flex: 1,
        // height: 100*vh
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
        // marginRight: 5*vw + 4*vh,
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
    text: {
        fontSize: 2*vh,
        marginVertical: 2*vh,
    },
    listingContainer:{
        marginHorizontal: 5*vw,
        flex: 1
    },
    listContainer:{
        // backgroundColor: 'red',
        flex: 1,
    },
})

// export default styles