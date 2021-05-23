import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const JigyoPage = () => (
  <Layout>
    <SEO title="診療内容" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">診療内容</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
          <Col md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo1Img} />
              <Card.Body>
                <Card.Title>一般内科</Card.Title>
                <Card.Text>
                    生活習慣病（高血圧症、糖尿病、脂質異常症などいわゆるメタボリック症候群）、肥満、喘息、肺気腫（COPD）、甲状腺機能亢進症、甲状腺機能低下症、骨粗鬆症、ロコモティブ症候群、フレイル、
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo2Img} />
              <Card.Body>
                <Card.Title>消化器内科疾患</Card.Title>
                <Card.Text>
                    胃がん胃潰瘍十二指腸潰瘍、潰瘍性大腸炎、消化器がん、過敏性腸症候群、ウイルス肝炎、脂肪肝（NASH ,NAFLD),慢性膵炎、膵嚢胞性腫瘍（IPMN）
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo3Img} />
              <Card.Body>
                <Card.Title>オンライン診療</Card.Title>
                <Card.Text>
                  　オンライン診療の拡充に取り組んでおります。
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo3Img} />
              <Card.Body>
                <Card.Title>オンライン診療</Card.Title>
                <Card.Text>
                  　オンライン診療の拡充に取り組んでおります。
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default JigyoPage;