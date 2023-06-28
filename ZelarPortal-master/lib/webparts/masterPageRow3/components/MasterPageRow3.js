import * as React from 'react';
import './MasterPageRow3.scss';
import MyTrainings from './Trainings';
import Tasks from './Tasks';
import OpinionPoll from './Opinion Poll';
const MasterPageRow3 = (props) => {
    return (React.createElement("div", { className: "Containers3" },
        React.createElement("div", null,
            React.createElement(MyTrainings, { description: props.description, isDarkTheme: props.isDarkTheme, environmentMessage: props.environmentMessage, hasTeamsContext: props.hasTeamsContext, userDisplayName: props.userDisplayName, context: props.context })),
        React.createElement("div", null,
            React.createElement(Tasks, null)),
        React.createElement("div", null,
            React.createElement(OpinionPoll, { description: props.description, isDarkTheme: props.isDarkTheme, environmentMessage: props.environmentMessage, hasTeamsContext: props.hasTeamsContext, userDisplayName: props.userDisplayName, context: props.context }))));
};
export default MasterPageRow3;
//# sourceMappingURL=MasterPageRow3.js.map