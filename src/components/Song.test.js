import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Song from './Song';


configure({ adapter: new Adapter() })
describe("Song", () => {
    it("should render a component", () => {
        const wrapper = shallow(<Song />)
        expect(wrapper.find('image'))
    })
})
