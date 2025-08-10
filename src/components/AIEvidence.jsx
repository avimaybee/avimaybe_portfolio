import { useState } from 'react';

const AIEvidence = ({ evidence }) => {
  const [activeTab, setActiveTab] = useState('beforeAfter');

  const tabClasses = (tabName) => (
    `py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 ` +
    `${activeTab === tabName ? 'bg-deep-sky-blue text-comet-white shadow-md' : 'text-desaturated-gray hover:text-deep-sky-blue'}`
  );

  return (
    <div className="mt-6 border-t border-desaturated-gray pt-6">
      <h3 className="text-xl font-header font-bold text-deep-sky-blue mb-4">AI Evidence</h3>
      <div className="flex space-x-2 mb-4">
        {evidence.beforeAfter && evidence.beforeAfter.length > 0 && (
          <button onClick={() => setActiveTab('beforeAfter')} className={tabClasses('beforeAfter')}>Before/After</button>
        )}
        {evidence.codeGens && evidence.codeGens.length > 0 && (
          <button onClick={() => setActiveTab('codeGens')} className={tabClasses('codeGens')}>Code Generation</button>
        )}
        {evidence.prompts && evidence.prompts.length > 0 && (
          <button onClick={() => setActiveTab('prompts')} className={tabClasses('prompts')}>Prompts</button>
        )}
      </div>
      <div className="py-4 bg-neutral-off-white rounded-lg p-4 shadow-inner">
        {activeTab === 'beforeAfter' && (
          <div>
            {evidence.beforeAfter && evidence.beforeAfter.length > 0 ? (
              evidence.beforeAfter.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  {item.description && <p className="text-deep-sky-blue text-sm mb-2">{item.description}</p>}
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <p className="text-desaturated-gray text-xs mb-1">Before</p>
                      <img src={item.before} alt="Before" className="w-full h-auto object-cover rounded-md shadow-sm" />
                    </div>
                    <div className="flex-1">
                      <p className="text-desaturated-gray text-xs mb-1">After</p>
                      <img src={item.after} alt="After" className="w-full h-auto object-cover rounded-md shadow-sm" />
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No before/after evidence available.</p>
            )}
          </div>
        )}
        {activeTab === 'codeGens' && (
          <div>
            {evidence.codeGens && evidence.codeGens.length > 0 ? (
              evidence.codeGens.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-deep-sky-blue mb-2">{item.title}</h4>
                  {item.description && <p className="text-desaturated-gray text-sm mb-2">{item.description}</p>}
                  <pre className="bg-deep-sky-blue p-4 rounded-md text-comet-white text-sm overflow-x-auto shadow-inner"><code>{item.code}</code></pre>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No code generation evidence available.</p>
            )}
          </div>
        )}
        {activeTab === 'prompts' && (
          <div>
            {evidence.prompts && evidence.prompts.length > 0 ? (
              evidence.prompts.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-deep-sky-blue mb-2">{item.title}</h4>
                  <p className="text-desaturated-gray text-sm mb-2">Prompt:</p>
                  <p className="bg-deep-sky-blue p-4 rounded-md text-comet-white text-sm italic shadow-inner">{item.prompt}</p>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No prompt evidence available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIEvidence;
