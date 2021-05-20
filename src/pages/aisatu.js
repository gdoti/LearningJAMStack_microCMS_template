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
        <h1 className="h1-font">院長あいさつ</h1>
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
              <td>2019年末に発生した新型コロナウイルス感染症は瞬く間に世界中に広がり、2021年5月現在累計１億６千万人以上に達し、死亡者は341万人にのぼっています。このウイルスは感染者の何割かは無症状で感染能力があるため、</td>
            </tr>
            <tr>
              <td></td>
              <td>1996年にいそわクリニックを開業し今年で２５目を迎えました。地域住民の皆様、患者様、関係各位、スタッフの皆様そして協力していただいている家族・友人に感謝したします。今後も引き続き、地域医療・学校保健・医師会等を通じて日本の医療のために貢献できるよう精進していく所存でございます。何卒よろしくお願い申し上げます。                  </td>
            </tr>
            {/* <tr>
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