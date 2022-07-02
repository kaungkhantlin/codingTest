import {Text, View, StyleSheet, Dimensions} from 'react-native';
import React, {Component} from 'react';
import configs from '../utils/configs';

class FirstScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'NULL',
      age: 'NULL',
    };
  }

  componentDidUpdate(prevProps) {
    const {inputName, inputAge} = this.props;
    if (prevProps !== this.props) {
      this.setState({
        name: inputName,
        age: inputAge,
      });
    }
  }
  render() {
    let {name, age} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.viewBox}>
          <View style={[styles.viewItem, {paddingTop: 10}]}>
            <Text style={styles.labelText}>Name : </Text>
            <Text style={styles.valueText}>{name}</Text>
          </View>
          <View style={styles.viewItem}>
            <Text style={styles.labelText}>AGE : </Text>
            <Text style={styles.valueText}>{age}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBox: {
    borderWidth: 1,
    borderColor: configs.colors.black,
    borderRadius: configs.globalStyle.borderRadius,
    height: 200,
    width: 300,
  },
  viewItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  labelText: {
    color: configs.colors.label,
    fontSize: configs.fontSize.extraLarge,
  },
  valueText: {
    color: configs.colors.text,
    fontSize: configs.fontSize.extraLarge,
  },
});
export default FirstScreen;
