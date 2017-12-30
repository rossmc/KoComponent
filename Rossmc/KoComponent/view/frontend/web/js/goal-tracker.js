define([
        'jquery',
        'uiComponent',
        'ko',
        'Rossmc_KoComponent/js/model/goal-tracker-model'
], function ($, Component, ko, gtModel) {
        'use strict';

        var self;
        return Component.extend({
            goals: gtModel.goals,
            priorityOptions: ko.observableArray(['Low','Medium','High']),
            inputName: ko.observable(),
            inputPriority: ko.observable(),
            inputDate: ko.observable(),
            selectedGoals: ko.observableArray(),
            initialize: function () {
                self = this;
                self._super();
                self.canEdit =  ko.computed(function () {
                    return self.selectedGoals().length > 0;
                });
            },
            addGoal: function () {
                self.goals.push({
                    name: this.inputName(),
                    priority: this.inputPriority(),
                    date: this.inputDate()
                });
            },
            deleteSelected: function () {
                self.goals.removeAll(self.selectedGoals());
                self.selectedGoals.removeAll();
            }
        });
    }
);