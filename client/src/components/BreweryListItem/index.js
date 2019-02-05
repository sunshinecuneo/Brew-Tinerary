import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import styled from "styled-components";

// const Link = styled.a`
//     color: #fb3f00;
//    text-decoration: none;`

const Name = styled.span`
    color: black;
    font-size: 18px;
    margin-right: 8px
`;

const Address = styled.span`
    margin-top: 0px;
    margin-left: 8px;
    margin-right: 8px
`;

const BreweryListItem = (props) => {
  return (
   
        <Card body key={props.id}>
          <CardTitle><Name>{props.name}</Name> <input type="checkbox" id={props.id}  onClick={props.checkedBox(props.id)}/></CardTitle>
          <CardText><Name>{props.status}</Name></CardText>
          <CardText><Address>{props.street}</Address></CardText>
          <CardText><Address>{props.city} {props.state}</Address></CardText>
          <Button color="warning" href={"https://www." + props.url} target="_blank">Brewery Website</Button> 
        </Card>
      

  );
};

export default BreweryListItem;