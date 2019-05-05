// @flow
import * as React from 'react';
import Nav from './components/nav';
import Support from './support';
import Features from './features';
import Home from './home';
import Terms from './terms';
import Privacy from './privacy';
import Faq from './faq';
import Apps from './apps';
import { RELATIVE_ROOT } from 'shared/constants';
import { StyledViewGrid } from './style';

type Props = {
  match: Object,
};

class Pages extends React.Component<Props> {
  renderPage = () => {
    switch (this.props.match.path) {
      case `${RELATIVE_ROOT}/support`: {
        return <Support {...this.props} />;
      }
      case `${RELATIVE_ROOT}/features`: {
        return <Features {...this.props} />;
      }
      case `${RELATIVE_ROOT}/terms`:
      case `${RELATIVE_ROOT}/terms.html`: {
        return <Terms {...this.props} />;
      }
      case `${RELATIVE_ROOT}/privacy`:
      case `${RELATIVE_ROOT}/privacy.html`: {
        return <Privacy {...this.props} />;
      }
      case `${RELATIVE_ROOT}/faq`: {
        return <Faq {...this.props} />;
      }
      case `${RELATIVE_ROOT}/apps`: {
        return <Apps {...this.props} />;
      }
      case `${RELATIVE_ROOT}/`:
      case `${RELATIVE_ROOT}/about`:
      default: {
        return <Home {...this.props} />;
      }
    }
  };

  render() {
    const {
      match: { path },
    } = this.props;
    const dark =
      path === `${RELATIVE_ROOT || '/'}` || path === `${RELATIVE_ROOT}/about`;

    return (
      <StyledViewGrid>
        <div style={{ position: 'relative' }}>
          <Nav
            dark={dark ? 'true' : undefined}
            location={this.props.match.path.substr(1)}
          />
          {this.renderPage()}
        </div>
      </StyledViewGrid>
    );
  }
}

export default Pages;
