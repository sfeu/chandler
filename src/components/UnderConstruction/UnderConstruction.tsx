import React, {PureComponent} from 'react';
import {Image, Text, View} from 'react-native';

import {I18n} from '@i18n';
import {commonStyles} from '@theme';
import {styles} from './UnderConstruction.styles';

export class UnderConstruction extends PureComponent<{}, {}> {
  public render() {
    return (
      <View style={styles.flexCentered}>
        <View style={commonStyles.flex} />
        <Image source={require('./images/under-construction.png')} />
        <Text style={styles.text}>{I18n.t('common:underConstruction')}</Text>
        <View style={commonStyles.flex} />
      </View>
    );
  }
}
