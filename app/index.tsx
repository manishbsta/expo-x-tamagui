import { Link } from "expo-router";
import React from "react";
import { Button, Text, View } from "tamagui";

const Home = () => {
  return (
    <View flex={1} padding={"$4"} gap={"$4"}>
      <Text fontSize={30}>Home Screen</Text>
      <Link href={"/two"} asChild>
        <Button>Go to Second Screen</Button>
      </Link>
    </View>
  );
};

export default Home;
