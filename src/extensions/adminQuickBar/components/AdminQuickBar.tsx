import * as React from 'react';
import { CommandBar } from 'office-ui-fabric-react/lib/CommandBar';
import { ApplicationCustomizerContext } from '@microsoft/sp-application-base';

export interface IAdminQuickBarProps {
    context: ApplicationCustomizerContext;
}

export default class AdminQuickBar extends React.Component<IAdminQuickBarProps>{
    constructor(props: IAdminQuickBarProps) {
        super(props);

    }

    render(){
        return(
            <CommandBar items={[]} />
        );
    }
}