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
        <h1 className="h1-font">重要なお知らせ</h1>
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
              {/* <td></td> */}
              <td>新型コロナウイルス感染対策のため、現在発熱・感冒様症状の患者様の診察は実施不可能となっております。
                  ご了承くださいませ。
            </td>
            </tr>
            {/* <tr>
              {/* <td></td> 
              <td>2019年末に発生した新型コロナウイルス感染症は瞬く間に世界中に広がり、2021年5月現在累計１億６千万人以上に達し、死亡者は341万人にのぼっています。このウイルスは感染者の何割かは無症状で感染能力があるため、対策が非常に困難となっています。</td>
            </tr> 
            <tr>
              <td></td>
              <td></td>
            </tr> */}
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