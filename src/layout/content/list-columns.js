import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AUlinkList from '../../_auds/layout/link-list';
import AnchorTitle from '../anchor-title';


/**
 * The partial component
 */
const ListColumns = ({ lists, _body }) => (
	<Fragment>

		{ _body }

		<div className="row listcolumns">
			{
				lists.map( ( list, i ) => (
					<div className="col-xs-12 col-sm-6 col-md-3" key={ i }>
						<AnchorTitle heading={ list.heading } headingSize={ 3 } />
						<AUlinkList items={
							list.links.map( list => {
								return {
									text: list.text,
									link: list.link,
									className: list.icon ? `icon icon--${ list.icon }` : ''
								}
							})
						}/>
					</div>
				))
			}
		</div>

	</Fragment>
);

ListColumns.propTypes = {
	/**
	 * lists:
   *  - heading: Help with design
   *    links:
   *      - text: Request a component
   *        link: /
   *      - text: Improve documentation
   *        link: /
   *      - text: -! Test longer list floating !-
   *        link: /
   *  - heading: Help with planning
   *    links:
   *      - text: Community discussions
   *        link: /
   *      - text: Roadmap discussions
   *        link: /
   *  - heading: Help with code
   *    links:
   *      - text: Code contribution guide
   *        link: /
   *        icon: github
   *      - text: Report an issue
   *        link: /
   *        icon: github
	 */
	lists: PropTypes.arrayOf(
		PropTypes.shape({
			heading: PropTypes.string,
			links: PropTypes.arrayOf(
				PropTypes.shape({
					text: PropTypes.string,
					link: PropTypes.string,
					icon: PropTypes.string,
				})
			),
		})
	)
};

ListColumns.defaultProps = {};

export default ListColumns;
