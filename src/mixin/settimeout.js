/**
 * Created by meesam on 26/3/17.
 */
import React from 'react';

var SetTimeoutMixin = {
  componentWillMount: function() {
    this.timeouts = [];
  },
  setTimeout: function() {
    this.timeouts.push(setTimeout.apply(null, arguments));
  },

  clearTimeouts: function() {
    this.timeouts.forEach(clearTimeout);
  },

  componentWillUnmount: function() {
    this.clearTimeouts();
  }
};

export default SetTimeoutMixin;
