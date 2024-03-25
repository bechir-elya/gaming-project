import Articles from "./Articles"
import { dataList } from '../data/dataList'
import Slider from "./Carousel"
import Container from "react-bootstrap/esm/Container"
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useState } from "react";

export default function Main() {

  const [searchProduct, setSearchProduct] = useState('');
  const [category, setCategory] = useState('all')

  const filteredProducts = dataList.filter((data) => data.name.toLowerCase().includes(searchProduct)).filter((option) => option.category == category || category == "all")

  return (
    <>
      <main className="shopPage">
        <Container className="pt-4">
          <Slider />
          <Row className="mt-4 mb-5">
            <Col lg='4'>
              <Form.Select aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                <option value={'all'}>All</option>
                <option value="GAMER PC">Gamer PC</option>
                <option value="Casque">Casque</option>
                <option value="Screen">Screen</option>
                <option value="Chair">Chair</option>
                <option value="Mouse">Mouse</option>
                <option value="Mouse Pad">Mouse Pad</option>
              </Form.Select>
            </Col>
            <Col lg='8' className="d-flex">
              <Form.Control
                type="search"
                onChange={(e) => setSearchProduct(e.target.value)}
                placeholder="Search" />
              <Button variant="outline-success">Search</Button>
            </Col>
          </Row>

          <Row>

            {filteredProducts.map((item, index) => (
              <Articles key={index} item={item} />
            ))}

          </Row>
        </Container>
      </main>
    </>
  )
}
