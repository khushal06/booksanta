import React from 'react';
import {createDrawerNavigator} from "react-navigation-drawer";
import {AppTabNavigator} from "./Apptabnavigator";
import CustomSideBarMenu from "./CustonSideBarMenu";

export const AppDrawerNavigator = createDrawerNavigator({

 Home    : {screen : AppTabNavigator},


}
,
{

contentComponent : CustomSideBarMenu

},
{

    initialRouteName :"Home"

}


)