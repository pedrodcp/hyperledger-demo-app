/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { AngularTestPage } from './app.po';
import { ExpectedConditions, browser, element, by } from 'protractor';
import {} from 'jasmine';


describe('Starting tests for demo-app', function() {
  let page: AngularTestPage;

  beforeEach(() => {
    page = new AngularTestPage();
  });

  it('website title should be demo-app', () => {
    page.navigateTo('/');
    return browser.getTitle().then((result)=>{
      expect(result).toBe('demo-app');
    })
  });

  it('network-name should be demo-network@0.0.1',() => {
    element(by.css('.network-name')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('demo-network@0.0.1.bna');
    });
  });

  it('navbar-brand should be demo-app',() => {
    element(by.css('.navbar-brand')).getWebElement()
    .then((webElement) => {
      return webElement.getText();
    })
    .then((txt) => {
      expect(txt).toBe('demo-app');
    });
  });

  
    it('ProductAsset component should be loadable',() => {
      page.navigateTo('/ProductAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ProductAsset');
      });
    });

    it('ProductAsset table should have 5 columns',() => {
      page.navigateTo('/ProductAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(5); // Addition of 1 for 'Action' column
      });
    });
  
    it('ConfidenceAsset component should be loadable',() => {
      page.navigateTo('/ConfidenceAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ConfidenceAsset');
      });
    });

    it('ConfidenceAsset table should have 4 columns',() => {
      page.navigateTo('/ConfidenceAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  
    it('CredibilityAsset component should be loadable',() => {
      page.navigateTo('/CredibilityAsset');
      browser.findElement(by.id('assetName'))
      .then((assetName) => {
        return assetName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('CredibilityAsset');
      });
    });

    it('CredibilityAsset table should have 4 columns',() => {
      page.navigateTo('/CredibilityAsset');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(4); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('NetworkParticipant component should be loadable',() => {
      page.navigateTo('/NetworkParticipant');
      browser.findElement(by.id('participantName'))
      .then((participantName) => {
        return participantName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('NetworkParticipant');
      });
    });

    it('NetworkParticipant table should have 3 columns',() => {
      page.navigateTo('/NetworkParticipant');
      element.all(by.css('.thead-cols th')).then(function(arr) {
        expect(arr.length).toEqual(3); // Addition of 1 for 'Action' column
      });
    });
  

  
    it('SampleTransaction component should be loadable',() => {
      page.navigateTo('/SampleTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('SampleTransaction');
      });
    });
  
    it('ProductTransaction component should be loadable',() => {
      page.navigateTo('/ProductTransaction');
      browser.findElement(by.id('transactionName'))
      .then((transactionName) => {
        return transactionName.getText();
      })
      .then((txt) => {
        expect(txt).toBe('ProductTransaction');
      });
    });
  

});