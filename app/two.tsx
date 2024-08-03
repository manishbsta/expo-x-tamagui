import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "tamagui";

const SecondScreen = () => {
  return (
    <View flex={1} padding={"$4"} gap={"$4"}>
      <Text fontSize={30}>Second Screen</Text>
      <Link href={"/"} asChild>
        <Button>Go to Home</Button>
      </Link>
    </View>
  );
};

export default SecondScreen;
