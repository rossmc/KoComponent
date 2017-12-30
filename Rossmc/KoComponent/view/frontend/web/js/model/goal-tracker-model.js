define(
    ['ko'],
    function (ko) {
        'use strict';
        var goals = ko.observableArray([
            {
                name: 'Pick up dry cleaning',
                priority: 'medium',
                date: '1981-02-14'
            }
        ]);
        return {
            goals: goals
        };
    }
);