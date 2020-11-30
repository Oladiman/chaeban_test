import React from "react";
import "../css/styles.css";
import { Layout, Breadcrumb, Typography,Button } from "antd";
import { useHistory } from "react-router-dom";

import { Row, Col } from "antd";

const { Header, Content, Footer } = Layout;

export default function OutputPage({ themeColor, other, colorName }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Theme Generator</Breadcrumb.Item>
        </Breadcrumb>
        <GeneratedTheme
          themeColor={themeColor}
          other={other}
          colorName={colorName}
        />
      </Content>
      <Footer style={{ textAlign: "center" }} />
    </Layout>
  );
}

const GeneratedTheme = ({ themeColor, other, colorName }) => {
  let history = useHistory();
  const themeText = localStorage.getItem("theme text");
  const themeDate = localStorage.getItem("theme date");

  function textHtmlMarkup(){
    return{__html:themeText}
  }

  function handleClick(){
    history.push("/");
  }


  return (
    <div className="container theme_container">
      <Row>
        <Col span={8} style={{ background: themeColor }}>
          <img
            src="https://source.unsplash.com/random"
            alt="cover_art"
            style={{borderRadius:"5px"}}
            className="image_holder"
          />
        </Col>
        <Col span={16} style={{ background: other }} className="other_div">
          <Col span="50%" className="center_div">
            <Typography className="date_holder" style={{ color: themeColor }}>
              {themeDate}
            </Typography>
            <Typography className="theme_name">{` ${colorName} theme`}</Typography>
          </Col>
          <Col span="50%" className="right_div">
            <div  dangerouslySetInnerHTML={textHtmlMarkup()} className="formatted_text" />
          </Col>
        </Col>
      </Row>
      <Button type="primary" style={{marginTop:"30px"}}onClick={handleClick} >Back</Button>
    </div>
  );
};
