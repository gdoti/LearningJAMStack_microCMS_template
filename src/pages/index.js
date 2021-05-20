import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link, graphql} from "gatsby";
import homeImg from "../images/home.jpg"
import jigyo1Img from "../images/jigyo1.jpg"
import jigyo2Img from "../images/jigyo2.jpg"
import jigyo3Img from "../images/jigyo3.jpg"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Row style={{maxWidth:`960px`}}> 
        <img src={homeImg} style={{width:`100%`,marginBottom:`2rem`}} />
    </Row>
    <Row>
      < Col xs={12} md={8} style={{maxWidth:`480px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`}}>
            <Link to="/information" style={{color:`white`}}>インフォメーション</Link></Col>
        </Row>
        {data.allMicrocmsInformation.edges.map(({node})=>(
          <Row>
            <Col style={{padding:`0.5rem`}}>
              <Link to ={`/information/${node.id}`}>
                {node.date}
                {node.category.category}{`    `}
                {node.title}
              </Link>
            </Col>
          </Row>
        ))}
      </Col>
      <Col xs={12} md={4} style={{maxWidth:`480px`}}> 
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`,color:`white`, padding:`0.5rem`}}>　</Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}> </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>
            <Link to = "/aisatu">
              院長あいさつ
            </Link></Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>
            <Link to = "/osirase">
              重要なお知らせ
            </Link> </Col>
        </Row>
        <Row>
          <Col style={{padding:`0.5rem`}}>  </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{backgroundColor:`cornflowerblue`,color:`white`,padding:`0.5rem`,maxWidth:`960px`,marginTop:`2rem`}}>事業内容</Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`}}>
        <Row>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo1Img} alt={`軌道上デブリ除去`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>一般内科疾患</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo2Img} alt={`テレポーテーションゲート開設`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>消化器内科</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={6} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyo3Img} alt={`業子力学による量子コントロール`} />
              <Card.Body>
                <Card.Title style={{fontSize:`1rem`}}>感染症</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`, paddingTop:`3rem`}}></Col>
    </Row>
  </Layout>
);

export default IndexPage;

export const quety = graphql`
query{
  allMicrocmsInformation(limit:4,
    sort:{fields:date,order:DESC}){
      edges{
        node{
          id
          date(formatString:"YYYY-MM-DD")
          title
          category{
            category
          }
        }
      }
    }
}`

