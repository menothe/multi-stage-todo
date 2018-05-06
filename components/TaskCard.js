import React from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import { typeActionLookup } from '../actions/actions';


// material-ui card rendering details about task
export const TaskCard = ({ id, state, name, description, progressTask }) => (
  <Card className={'card'}>
    <CardHeader title={name} subtitle={id} />
    <CardText>{description}</CardText>
    <CardActions>
      <RaisedButton onClick={() => progressTask(id)} label={typeActionLookup[state]} primary={true} style={{ float: 'right', marginBottom: 15 }} />
    </CardActions>
  </Card>
);
