import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe('ProfileStatus component', () => {
    test('status from props sjould be in state', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe('testing status')
    })

    test('after creation <span> should be displayed', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span).not.toBeNull();
    })

    test('after creation <span> should should contains correct status', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const root = component.root;
        let span = root.findByType('span')
        expect(span.children[0]).toBe('testing status')
    })

    test('after creation <input> should not be displayed', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType('input')
        }).toThrow();
    })

    test('input should be displayed in editMode instead of span', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        let input = root.findByType('input');

        expect(input.props.value).toBe('testing status');
    })

    test('span should not be displayed in editMode', () => {
        const component = create (<ProfileStatus status = 'testing status'/>);
        const root = component.root;
        let span = root.findByType('span');
        span.props.onDoubleClick();
        expect(() => {
            let span = root.findByType('span')
        }).toThrow();
    })

    test('callback should be called', () => {
        const mockCallback = jest.fn(); //шпион который отслеживает вызов callback
        const component = create(<ProfileStatus status='testing status' updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    })
})