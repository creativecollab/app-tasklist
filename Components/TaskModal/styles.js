import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BtnClose = styled.TouchableOpacity`
  position: absolute;
  top: 64;
  right: 32;
`;

export const Wrapper = styled.View`
  align-self: stretch;
  margin-left: 32px;
  margin-right: 32px;
`;
export const Title = styled.Text`
  font-weight: 800;
  font-size: 28px;
  color: #2d3036;
  align-self: center;
  margin-bottom: 16px;
`;
export const Input = styled.TextInput`
  border-width: 2px;
  border-color: #24a6d9;
  border-radius: 6px;
  height: 50px;
  margin-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: 18px;
`;

export const BtnCreate = styled.TouchableOpacity`
  height: 50px;
  margin-top: 24px;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const BtnCreateText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 24px;
`;

export const ColorsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Colors = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 4px;
`;
