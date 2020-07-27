import React from 'react';
import{Alert} from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { Button } from '../../../src/components';

const onPressed = () => Alert.alert('Pressed');

storiesOf('Button', module)
.add('default', () => <Button title={"Press Me"} onPress={onPressed}/>)
.add('outlined', () => <Button title={"Press Me"} onPress={onPressed} outlined/>)
.add('small filled', () => <Button title={"Press Me"} onPress={onPressed} size='sm'/>)
.add('small outlined', () => <Button title={"Press Me"} onPress={onPressed} size='sm' outlined/>);
