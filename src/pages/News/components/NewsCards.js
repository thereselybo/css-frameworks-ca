import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import News1 from "../assets/img/news-1.png";
import News2 from "../assets/img/news-2.png";
import News3 from "../assets/img/news-3.png";
import News4 from "../assets/img/news-4.png";
import News5 from "../assets/img/news-5.png";
import News6 from "../assets/img/news-6.png";
import News7 from "../assets/img/news-7.png";
import News8 from "../assets/img/news-8.png";

function NewsCards() {
  return (
    <>
      <Row className="news-cards">
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News1} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News2} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News3} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News4} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="news-cards">
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News5} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News6} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News7} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="my-3">
            <Card.Img variant="top" src={News8} />
            <Card.Body>
              <Card.Title>Nunc porttitor vel</Card.Title>
              <Card.Text>Nunc malesuada eget est fringilla dapibus.</Card.Text>
              <Button variant="primary">More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default NewsCards;
