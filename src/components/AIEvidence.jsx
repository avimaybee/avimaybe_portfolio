import { useState } from 'react';

const AIEvidence = ({ evidence }) => {
  const [activeTab, setActiveTab] = useState('beforeAfter');

  return (
    <div className="mt-4">
      <div className="flex border-b border-desaturated-gray">
        <button onClick={() => setActiveTab('beforeAfter')} className={`py-2 px-4 ${activeTab === 'beforeAfter' ? 'text-comet-pink-peach' : 'text-comet-white'}`}>Before/After</button>
        <button onClick={() => setActiveTab('codeGens')} className={`py-2 px-4 ${activeTab === 'codeGens' ? 'text-comet-pink-peach' : 'text-comet-white'}`}>Code</button>
        <button onClick={() => setActiveTab('prompts')} className={`py-2 px-4 ${activeTab === 'prompts' ? 'text-comet-pink-peach' : 'text-comet-white'}`}>Prompts</button>
      </div>
      <div className="py-4">
        {activeTab === 'beforeAfter' && (
          <div>
            {evidence.beforeAfter.map((item, index) => (
              <div key={index} className="flex">
                <img src={item.before} alt="Before" className="w-1/2" />
                <img src={item.after} alt="After" className="w-1/2" />
              </div>
            ))}
          </div>
        )}
        {activeTab === 'codeGens' && (
          <div>
            {evidence.codeGens.map((item, index) => (
              <div key={index}>
                <h4 className="font-bold text-comet-white">{item.title}</h4>
                <pre className="bg-primary-deep-sky-blue p-2 rounded text-comet-white"><code>{item.code}</code></pre>
              </div>
            ))}
          </div>
        )}
        {activeTab === 'prompts' && (
          <div>
            {evidence.prompts.map((item, index) => (
              <div key={index}>
                <h4 className="font-bold text-comet-white">{item.title}</h4>
                <p className="text-comet-white">{item.prompt}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIEvidence;
