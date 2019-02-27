import React from "react";
import styled from "styled-components";

const Course = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Logo source={props.logo} resizeMode="contain" />
      <Subtitle>{props.subtitle}</Subtitle>
      <Title>{props.title}</Title>
    </Cover>
    <Content>
      <Avatar source={props.avatar} />
      <Wrapper>
        <Caption>{props.caption}</Caption>
        <Author>Taught by {props.author}</Author>
      </Wrapper>
    </Content>
  </Container>
);

export default Course;

const Container = styled.View`
  background: white;
  margin: 30px 20px;
  border-radius: 14px;
  width: 335px;
  height: 335px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const Content = styled.View`
  justify-content: center;
  padding-left: 62px;
  height: 75px;
`;

const Cover = styled.View`
  width: 100%;
  height: 260px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
  justify-content: flex-end;
`;

const Image = styled.Image`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Logo = styled.Image`
  width: 48px;
  height: 48px;
  margin-top: 30px;
  align-self: center;
`;

const Author = styled.Text`
  color: #b8bece;
  font-size: 13px;
`;

const Title = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 200px;
`;

const Avatar = styled.Image`
  width: 32px;
  height: 32px;
  background: red;
  border-radius: 16px;
  position: absolute;
  left: 20px;
`;

const Wrapper = styled.View`
  margin-left: 10px;
  align-content: center;
`;

const Caption = styled.Text`
  color: #3c4560;
  font-size: 13px;
  font-weight: 600;
  width: 250;
  overflow: hidden;
`;

const Subtitle = styled.Text`
  font-size: 15px;
  text-transform: uppercase;
  color: #b8bece;
  font-weight: 600;
  margin-top: 80px;
  margin-left: 20px;
`;
