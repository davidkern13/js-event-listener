import { addEventListener, removeEventListener, removeAllEventListener, emitEvent} from '../index';

describe('Js event listener tests', () => {
    
    const _addEventListener = (name = 'test', func = () => {}) => {
        return addEventListener(name, func);
    }

    test('test _addEventListener are added properly', () => {
        const id = _addEventListener();
        expect(id).toBe(1);
    });

    test('test _addEventListener not to be added', () => {
        const id = _addEventListener(1);
        expect(id).toBe(false);
    });

    test('test emitEvent work properly', () => {
        const myMockFn = jest.fn();
        
        let mockdata = {value: ['test']};
        myMockFn(mockdata);

        _addEventListener('test1', myMockFn);

        emitEvent('test1', mockdata);
        expect(myMockFn).toHaveBeenCalledWith(mockdata);
    });

    test('test removeEventListener remove event properly', () => {
        let id = _addEventListener();

        let removerId = removeEventListener(id);
        expect(removerId).toBe(true);
    });

    test('test removeEventListener not removed event', () => {
        let removedId = removeEventListener({});
        expect(removedId).toBe(false);
    });

    test('test removeAllEventListener remove all events properly', () => {
        _addEventListener();

        let removedEvents = removeAllEventListener();
        expect(removedEvents).toBe(true);
    });

});

