import { SelectTab } from './components/Select';
import { PageTabs } from './components/Tabs';
import { useApp } from './contexts/AppContext';
import { Requests } from './components/Requests';

import '@tremor/react/dist/esm/tremor.css';
import './styles/global.css';

function App() {
  const { activeTab } = useApp();

  return (
    <div className="w-full h-full">
      <div
        className="bg-[#eff0f18b] w-full max-w-[900px] h-[700px] mx-auto
			mt-[100px] p-4 rounded-lg"
      >
        <PageTabs />
        {activeTab === 'requests' && <Requests />}
        {activeTab === 'select' && <SelectTab />}
      </div>
    </div>
  );
}

export default App;
