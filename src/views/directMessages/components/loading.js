// @flow
import React from 'react';
import Link from 'src/components/link';
import Icon from 'src/components/icon';
import { LoadingDM } from 'src/components/loading';
import { View, MessagesList, ComposeHeader } from '../style';

export default () => (
  <View>
    <MessagesList>
      <Link to="/new/message">
        <ComposeHeader>
          <Icon glyph="message-new" />
        </ComposeHeader>
      </Link>
      <div>
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
        <LoadingDM />
      </div>
    </MessagesList>
  </View>
);
