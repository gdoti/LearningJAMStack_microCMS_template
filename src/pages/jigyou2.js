import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="isowa" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">診察時間</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col>
        <Table striped bordered hover>
          <tbody>
            <tr>
              <td></td>
              <td>月</td>
              <td>火</td>
              <td>水</td>
              <td>木</td>
              <td>金</td>
              <td>土</td>
              <td>日・祝</td>
            </tr> 
            <tr>
              <td>9:30-12:30</td>
              <td>◯</td>
              <td>◯</td>
              <td>◯</td>
              <td><span>✖️</span></td>
              <td>◯</td>
              <td>◯</td>
              <td><span>✖️</span></td>
            </tr>
            <tr>
              <td>17:00-19:30</td>
              <td>◯</td>
              <td>◯</td>
              <td>◯ </td>
              <td><span>✖️</span></td>
              <td>◯ </td>
              <td><span>✖️</span></td>
              <td><span>✖️</span></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default AboutPage;