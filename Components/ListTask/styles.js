import styled from "styled-components/native";
import colors from "./../../config/Colors";

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 64;
  right: 32;
  z-index: 10;
`;

export const Section = styled.View`
  flex: 1;
  align-self: stretch;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-size: 30px;
  font-weight: 800;
  color: ${colors.black};
`;

export const Count = styled.Text`
  margin-bottom: 12px;
  margin-top: 12px;
  font-weight: 600;
  color: ${colors.gray};
`;

export const Footer = styled.KeyboardAvoidingView`
  flex: 1;
  align-self: stretch;
  flex-direction: row;
  align-items: center;
`;

export const Input = styled.TextInput`
  flex: 1;
  border-width: 3px;
  height: 48px;
  margin-right: 10px;
  border-radius: 12px;
  padding-left: 2px;
  padding-right: 2px;
`;
