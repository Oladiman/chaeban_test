import React, { useState } from "react";
import "../css/styles.css";
import {Link} from "react-router-dom";
import TextEditor from "../components/TextEditor";
import {
  Layout,
  Menu,
  Breadcrumb,
  Row,
  Col,
  Card,
  DatePicker,
  Form,
  Radio,
  Button,
} from "antd";

const { Header, Content, Footer } = Layout;

export default function InputPage({chooseColor}) {

  const [values, setValues] = useState({
    selectedDate: "",
    text: "<p>Your text goes here ...</p>",
    color: "#FF00FF",
  });

  function resetState(){
    setValues({...values, selectedDate:"", text: "Your text goes here ...", color:"#d9363e"})
}

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
    setValues({ ...values, selectedDate: dateString });
  };
  const handleRadio = (e) => {

    setValues({ ...values, color: e.target.value });
  };

  const handleOnSubmit = () => {
    // console.log({ values })
    chooseColor(values.color)

    localStorage.setItem("theme date", values.selectedDate);
    localStorage.setItem("theme text", values.text);
    resetState();
  };
  const [form] = Form.useForm();
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Generator</Menu.Item>
        </Menu> */}
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Link to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Link>
          <Breadcrumb.Item>Edit Theme</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">
          <Row gutter={3}>
            <Col className="gutter-row" flex="auto">
              <h4>Theme setting</h4>
              <Card>
                <Form
                  form={form}
                  labelCol={{
                    span: 4,
                  }}
                  wrapperCol={{
                    span: 14,
                  }}
                  layout="horizontal"
                >
                  <Form.Item label="Date Picker">
                    <DatePicker onChange={onChange} />
                  </Form.Item>
                  <Form.Item label="Text Area">
                    <TextEditor values={values} setValues={setValues}/>
                  </Form.Item>
                  <Form.Item label="Theme Color">
                    <Radio.Group
                      className="radiogroup"
                      defaultValue={"#FF00FF"}
                      onChange={handleRadio}
                    >
                      <Radio value={"#d9363e"} className="color_selector">
                        {" "}
                        <div
                          className="color_block"
                          style={{ background: "#d9363e" }}
                        />
                      </Radio>
                      <Radio value={"#ffb92d"} className="color_selector">
                        <div
                          className="color_block"
                          style={{ background: "#ffb92d" }}
                        />
                      </Radio>
                      <Radio value={"#FF00FF" } className="color_selector">
                        <div
                          className="color_block"
                          style={{ background: "#FF00FF" }}
                        />
                      </Radio>
                      
                      <Radio value={"#1f305e" } className="color_selector">
                      <div
                          className="color_block"
                          style={{ background: "#1f305e" }}
                        />
                      </Radio>
                    </Radio.Group>
                  </Form.Item>
                  <Form.Item className="submit-button" onClick={handleOnSubmit}>
                    <Link to="/theme">
                    <Button type="primary" htmlType="submit">
                      Generate
                    </Button>
                    </Link>
                  </Form.Item>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}> By Oluwadamilola</Footer>
    </Layout>
  );
}

// background-color: #4158D0;
// background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);

// delft blue #1F305E
