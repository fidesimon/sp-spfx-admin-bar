import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dialog } from '@microsoft/sp-dialog';
import { SPPermission } from '@microsoft/sp-page-context';
import AdminQuickBar from './components/AdminQuickBar';

import * as strings from 'AdminQuickBarApplicationCustomizerStrings';

const LOG_SOURCE: string = 'AdminQuickBarApplicationCustomizer';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAdminQuickBarApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class AdminQuickBarApplicationCustomizer
  extends BaseApplicationCustomizer<IAdminQuickBarApplicationCustomizerProperties> {
  private static _topPlaceholder?: PlaceholderContent;

  @override
  public onInit(): Promise<void> {
    if (this.context.pageContext.web.permissions.hasPermission(SPPermission.manageWeb)) {
      this.context.application.navigatedEvent.add(this, this._render);

      return Promise.resolve();
    } else {
      return;
    }
  }

  private _render(): void {
    if (AdminQuickBarApplicationCustomizer._topPlaceholder) {
      AdminQuickBarApplicationCustomizer._topPlaceholder.dispose();
      AdminQuickBarApplicationCustomizer._topPlaceholder = null;
    }

    if (!AdminQuickBarApplicationCustomizer._topPlaceholder) {
      AdminQuickBarApplicationCustomizer._topPlaceholder = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top, { onDispose: this._handleDispose });
    }

    ReactDOM.render(React.createElement(AdminQuickBar, { context: this.context }), AdminQuickBarApplicationCustomizer._topPlaceholder.domElement);
  }

  private _handleDispose() {

  }
}
