import React, {Fragment} from 'react';
import renderer from 'react-test-renderer';
import OutcomeDisplay from './OutcomeDisplay';

it('shows default message', () => {
    const component = renderer.create(
      <OutcomeDisplay outcome={undefined}>
        <Fragment>default</Fragment>
        <Fragment>lose</Fragment>
        <Fragment>tie</Fragment>
        <Fragment>win</Fragment>
      </OutcomeDisplay>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('shows lose message', () => {
    const component = renderer.create(
      <OutcomeDisplay outcome={-1}>
        <Fragment>default</Fragment>
        <Fragment>lose</Fragment>
        <Fragment>tie</Fragment>
        <Fragment>win</Fragment>
      </OutcomeDisplay>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('shows tie message', () => {
    const component = renderer.create(
      <OutcomeDisplay outcome={0}>
        <Fragment>default</Fragment>
        <Fragment>lose</Fragment>
        <Fragment>tie</Fragment>
        <Fragment>win</Fragment>
      </OutcomeDisplay>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

it('shows win message', () => {
    const component = renderer.create(
      <OutcomeDisplay outcome={0}>
        <Fragment>a</Fragment>
        <Fragment>b</Fragment>
        <Fragment>c</Fragment>
        <Fragment>d</Fragment>
      </OutcomeDisplay>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});