import React,{Component} from 'react'
import Link from 'gatsby-link'
import SelectLanguage from './SelectLanguage';
import { intlShape, injectIntl } from "react-intl";
import { FormattedMessage } from 'react-intl';

class Header extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const intl = this.props.intl;

        return (

          <nav>
            <ul>
              <li>
                  <a href="/">        <FormattedMessage id="menuhome" />
    </a>
              </li>
              <li>

                  <a href={'https://omarbenchbana.fi'}><FormattedMessage id="menuabout" /></a>
              </li>


            </ul>
          </nav>
)

    }

}

Header.propTypes = {
    intl: intlShape.isRequired
};
export default injectIntl(Header);
