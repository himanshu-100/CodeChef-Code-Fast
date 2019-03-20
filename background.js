// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var rule2={
	conditions: [
		new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'codechef'},

        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'codeforces'},

        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'google'},

        }),
        new chrome.declarativeContent.PageStateMatcher({
          pageUrl: {hostContains: 'hackerrank'},

        })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#000000'}, function() {
    console.log("The color is white.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([rule2]);
    });
});
