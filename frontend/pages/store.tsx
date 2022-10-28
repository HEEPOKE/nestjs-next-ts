import { Container, Card, Table, Button } from "react-bootstrap";
import Link from "next/link";
import NavbarMenu from "../components/navbarMenu";

export default function Store() {
  return (
    <>
      <NavbarMenu />
      <h2 className="text-dark text-center mt-2">Store</h2>
      <Container>
        <Card>
          <Card.Body>
            <Link href="/Create">
              <Button className="mt-2 mb-2 float-end">create</Button>
            </Link>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr className="text-center">
                  <th>#</th>
                  <th>Name</th>
                  <th>detail</th>
                  <th>images</th>
                  <th>manage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>
                    <Button variant="warning" className="mx-2">
                      edit
                    </Button>
                    <Button variant="danger">delete</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
