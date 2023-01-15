import { TabList, Tab } from '@tremor/react';
import { useApp } from '../contexts/AppContext';
import { Article, CreditCard, GitPullRequest, Textbox } from 'phosphor-react';

export function PageTabs() {
  const { activeTab, setActiveTab } = useApp();

  return (
    <div className="mb-4">
      <TabList
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={setActiveTab}
        color="purple"
        marginTop="mt-0"
      >
        <Tab text="Requests" value="requests" icon={GitPullRequest} />
        <Tab text="invoices" value="invoices" icon={CreditCard} />
        <Tab text="Form" value="form" icon={Article} />
        <Tab text="Select" value="select" icon={Textbox} />
      </TabList>
    </div>
  );
}
