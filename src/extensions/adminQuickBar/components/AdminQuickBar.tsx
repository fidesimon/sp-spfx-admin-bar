import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';
import { IContextualMenuItem, ContextualMenu, ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export interface IAdminQuickBarProps {
    context: ApplicationCustomizerContext;
}

export default class AdminQuickBar extends React.Component<IAdminQuickBarProps>{
    constructor(props: IAdminQuickBarProps) {
        super(props);

    }

    render() {
        let items: IContextualMenuItem[] = [{
            key: 'newItem',
            name: 'Site Settings',
            items: [{
                key: 'settings',
                name: 'Site Settings',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/settings.aspx`,
                onClick: () => console.log('Rename clicked')
            },
            {
                key: 'sitefeatures',
                name: 'Manage Site Features',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/ManageFeatures.aspx`,
                onClick: () => console.log('Edit clicked')
            },
            {
                key: 'adminrecyclebin',
                name: 'Admin Recycle Bin',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/AdminRecycleBin.aspx`,
                onClick: () => console.log('Edit clicked')
            },
            {
                key: 'sitecolumns',
                name: 'Site Columns',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/mngfield.aspx`,
                onClick: () => console.log('Edit clicked')
            },
            {
                key: 'sitects',
                name: 'Site Content Types',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/mngctype.aspx`,
                onClick: () => console.log('Edit clicked')
            },
            {
                key: 'regionalsettings',
                name: 'Regional Settings',
                href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/regionalsetng.aspx`,
                onClick: () => console.log('Properties clicked')
            }],
            onClick: () => console.log('New clicked')
        }
        ];


        return (
            <div>
                <CommandBar items={items} />
            </div>
        );
    }
}