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

    public render() {
        let items: IContextualMenuItem[] = [
            {
                key: 'sitesettingsdd',
                name: 'Site Settings',
                items: [{
                    key: 'settings',
                    name: 'Site Settings',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/settings.aspx`
                },
                {
                    key: 'peopleandgroups',
                    name: 'People and Groups',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/groups.aspx`
                },
                {
                    key: 'sitepermissions',
                    name: 'Site Permissions',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/user.aspx`
                },
                {
                    key: 'siteadmins',
                    name: 'Site Collection Administrators',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/mngsiteadmin.aspx`
                },
                {
                    key: 'sitefeatures',
                    name: 'Manage Site Features',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/ManageFeatures.aspx`
                },
                {
                    key: 'adminrecyclebin',
                    name: 'Admin Recycle Bin',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/AdminRecycleBin.aspx`
                },
                {
                    key: 'sitecolumns',
                    name: 'Site Columns',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/mngfield.aspx`
                },
                {
                    key: 'sitects',
                    name: 'Site Content Types',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/mngctype.aspx`
                },
                {
                    key: 'regionalsettings',
                    name: 'Regional Settings',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/regionalsetng.aspx`
                }],
            },
            {
                key: 'listlibsettingsdd',
                name: 'List/Library Settings',
                items: [{
                    key: 'listlibsettings',
                    name: 'List/Library Settings',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/listedit.aspx?List={${this.props.context.pageContext.list.id}}`
                },
                {
                    key: 'advancedSettings',
                    name: 'Advanced Settings',
                    href: `${this.props.context.pageContext.web.serverRelativeUrl}/_layouts/15/advsetng.aspx?List={${this.props.context.pageContext.list.id}}`
                }],
            }
        ];


        return (
            <div>
                <CommandBar items={items} />
            </div>
        );
    }
}