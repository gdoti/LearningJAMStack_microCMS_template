import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="会社概要" />
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
              <td><span>◯</span></td>
              <td><span>◯</span></td>
              <td><span>◯</span></td>
              <td><span>✖️</span></td>
              <td><span>◯</span></td>
              <td><span>◯</span></td>
              <td><span>✖️</span></td>
            </tr>
            <tr>
              <td>17:00-19:30</td>
              <td><span>◯</span></td>
              <td><span>◯</span></td>
              <td><span>◯</span></td>
              <td><span>✖️</span></td>
              <td><span>◯</span></td>
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
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">アクセス（工事中）</h1>
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
              <td>法人名</td>
              <td>医療法人いそわクリニック</td>
            </tr>
            <tr>
              <td>住所</td>
              <td>〒572-0062 大阪府寝屋川市高柳栄町9−５</td>
            </tr>
            <tr>
              <td>電話番号</td>
              <td>072−838−6665</td>
            </tr>
            <tr>
              <td>最寄り駅</td>
              <td>京阪電鉄　寝屋川市駅　徒歩13分　</td>
            </tr>
            <tr>
              <td></td>
              <td>京阪バス　寝屋川車庫　徒歩　1分</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
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