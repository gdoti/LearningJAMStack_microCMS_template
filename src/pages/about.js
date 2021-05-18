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
        <h1 className="h1-font">いそわクリニック沿革（工事中）</h1>
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
              <td>本社</td>
              <td>〒572-0062 大阪府寝屋川市高柳栄町9−５</td>
            </tr>
            <tr>
              <td>設立</td>
              <td>1996年12月8日</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>代表者</td>
              <td>磯和剛平</td>
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