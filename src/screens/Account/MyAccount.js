import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import UserLoged from "./UserLoged";
import UserGuest from "./UserGuest";
export default function MyAccount() {
  const [loged, setloged] = useState(null);

//   return loged ? <UserLoged /> : <UserGuest />;
  if(loged){
      return <UserLoged/>
  }else{
      return <UserGuest/>
  }
}
