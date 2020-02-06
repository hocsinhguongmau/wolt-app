import React, {Component} from 'react';
import restaurants from '../json/restaurants.json';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircle} from '@fortawesome/free-solid-svg-icons'
import {
  Container,
  Card,
  Row,
  Col,
  Dropdown,
  DropdownButton
} from 'react-bootstrap';

class Restaurant extends Component {

  constructor(props) {
    super(props)
    this.state = {
      restaurants
    }
    this.sortAsc = this.sortAsc.bind(this);
    this.sortDesc = this.sortDesc.bind(this);
    console.log(this.state.restaurants)
  }

  sortAsc() {
    let restaurants = this.state.restaurants;
    restaurants.restaurants.sort((a, b) => a.description.localeCompare(b.description))
    this.setState({restaurants});

  }

  sortDesc() {
    let restaurants = this.state.restaurants;
    restaurants.restaurants.sort((b, a) => a.description.localeCompare(b.description))
    this.setState({restaurants});
  }

  render() {
    return (<Container>
      <Row>
        <Col lg="12">
          <div className="dropDown">
            <DropdownButton id="dropdown-basic-button" title="Sort by name">
              <Dropdown.Item onClick={this.sortAsc}>A to Z</Dropdown.Item>
              <Dropdown.Item onClick={this.sortDesc}>Z to A</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
      <Row>{
          this.state.restaurants.restaurants.map((restaurant, index) => <Col key={index} lg="4" md="6" sm="12">
            <Card className="cardItem">
              <Card.Img variant="top" src={restaurant.image} width="18rem"/>
              <Card.Body>
                <Card.Title className="cardTitle">{restaurant.description}</Card.Title>
                <Card.Text>

                  Location: {restaurant.city}
                  <br></br>
                  Delivery Price: {restaurant.delivery_price / 100}
                  {restaurant.currency}
                  <br></br>
                  Status: {
                    restaurant.online
                      ? <FontAwesomeIcon className="green" icon={faCircle}/>
                      : <FontAwesomeIcon className="grey" icon={faCircle}/>
                  }
                  <br></br>
                  #{restaurant.tags}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>)
        }</Row>
    </Container>)
  }

}

export default Restaurant;
