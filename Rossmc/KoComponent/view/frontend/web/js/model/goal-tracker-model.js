define(
    ['ko'],
    function (ko) {
        'use strict';
        var goals = ko.observableArray([
            {
                name: 'Pick up dry cleaning',
                priority: 'medium',
                date: '2018-02-01'
            }
        ]);
        return {
            goals: goals
        };
    }
);