import React from "react";
import styled from "styled-components";
import constants from "../../constants";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Image = styled.Image`
  width: ${constants.width / 3};
  margin-bottom: 20px;
`;

const ButtonContaniner = styled.TouchableOpacity``;
const Button = styled.View`
  width: ${constants.width / 2};
  padding: 10px;
  margin: 0 50px;
  background-color: ${props => props.theme.blueColor};
  border-radius: 4px;
`;
const ButtonText = styled.Text`
  color: white;
  text-align: center;
  font-weight: 600;
`;

export default ({ navigation }) => (
  <View>
    <Image resizeMode={"contain"} source={require("../../assets/logo.png")} />
    <ButtonContaniner onPress={() => navigation.navigate("Signup")}>
      <Button>
        <ButtonText>Create New Account</ButtonText>
      </Button>
    </ButtonContaniner>
  </View>
);
