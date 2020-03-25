import styled from "styled-components/native";

export const Container = styled.View``;

export const TaskContainer = styled.TouchableOpacity`
  padding-right: 16px;
  padding-left: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-radius: 20px;
  align-items: center;
  margin-left: 16px;
  margin-right: 16px;
  width: 200px;
`;

export const TaskTitle = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 16px;
`;

export const TaskWrapper = styled.View``;

export const TaskColumn = styled.View`
  align-items: center;
`;

export const TaskSubtitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

export const TaskCount = styled.Text`
  font-size: 48px;
  font-weight: 200;
  color: #fff;
`;
