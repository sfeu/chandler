import {connect} from 'react-redux';

import {back} from '@redux/router';
import {getTasksByContact} from '@redux/tasks';
import {Tasks} from './Tasks';

export const mapStateToProps = (state, {navigation}) => {
  const contact = state.contacts[navigation.state.params];
  return {
    tasks: (contact.tasks || []).map(taskId => state.tasks[taskId]),
    isFetching: state.getTasksByContact.isFetching,
  };
};

export const mapDispatchToProps = (dispatch, {navigation}) => ({
  back: () => dispatch(back()),
  getTasksByContact: () => dispatch(getTasksByContact(navigation.state.params)),
});

export const TasksScreen = connect(mapStateToProps, mapDispatchToProps)(Tasks);
