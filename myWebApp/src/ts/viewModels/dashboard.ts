/**
 * @license
 * Copyright (c) 2014, 2024, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import * as ko from 'knockout';
import 'ojs/ojinputtext';
import 'ojs/ojknockout';
import 'ojs/ojformlayout';
import 'ojs/ojinputtext';
import 'ojs/ojlabel';
import 'ojs/ojlabelvalue';
import 'ojs/ojprogress-bar';
import 'ojs/ojradioset';
import 'ojs/ojcheckboxset';
import Message = require('ojs/ojmessaging');
import { ojDatePicker } from 'ojs/ojdatetimepicker';
import 'ojs/ojknockout';
import 'ojs/ojdatetimepicker';
import 'ojs/ojlabel';
import 'ojs/ojpopup';
import { ojPopup } from 'ojs/ojpopup';
import 'ojs/ojformlayout';
class DashboardViewModel {
  value: ko.Observable<string>;
  pwd:ko.Observable<string>;
  tarik: ko.Observable<string>;
  readonly progressValue = ko.observable(20);
  readonly indeterminate = ko.observableArray();
  public openListener() {
    let popup = document.getElementById('popup1') as ojPopup;
    popup.open('#btnGo');
  }
  constructor() {
    this.value = ko.observable('');
    this.pwd=ko.observable('');
    this.tarik=ko.observable('2022-12-20T10:00:00Z');
    
  }
}

export = DashboardViewModel;
