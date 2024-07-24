import { Col, Container, Row } from "react-bootstrap"
import Item from "../components/Item"

const items = [
    {
        id: 1,
        name: 'Pen',
        description: "It's a pen",
        price: "RM10"
    },
    {
        id: 2,
        name: 'Laptop',
        description: "I think it's a laptop",
        price: "RM1200"
    },
    {
        id: 3,
        name: 'iPhone 2',
        description: "Might be an iPhone 3",
        price: "RM30"
    },
    {
        id: 4,
        name: 'Notebook',
        description: "Not a laptop",
        price: "RM15"
    },
    {
        id: 5,
        name: 'Macbook',
        description: "Laptop but Apple",
        price: "RM4500"
    },
]

export default function Home() {
    return (
        <Container className="my-5">
            <h1>Items</h1>
            <Row>
                {items.map((item) => (
                    <Col key={item.id} lg={3} md={4} xs={6}>
                        <Item item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}