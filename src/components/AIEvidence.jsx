import { ReactCompareSlider, ReactCompareSliderHandle } from 'react-compare-slider';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/tabs'; // Import Shadcn Tabs

const AIEvidence = ({ evidence }) => {
  const hasBeforeAfter = evidence.beforeAfter && evidence.beforeAfter.length > 0;
  const hasCodeGens = evidence.codeGens && evidence.codeGens.length > 0;
  const hasPrompts = evidence.prompts && evidence.prompts.length > 0;

  // Determine default value for Tabs
  let defaultValue = 'beforeAfter';
  if (!hasBeforeAfter && hasCodeGens) {
    defaultValue = 'codeGens';
  } else if (!hasBeforeAfter && !hasCodeGens && hasPrompts) {
    defaultValue = 'prompts';
  }

  return (
    <div className="mt-6 border-t border-desaturated-gray pt-6">
      <h3 className="text-xl font-header font-bold text-comet-white mb-4">AI Evidence</h3>
      <Tabs defaultValue={defaultValue} className="w-full">
        <TabsList className="flex space-x-2 mb-4 glass-sm p-1 rounded-full">
          {hasBeforeAfter && (
            <TabsTrigger value="beforeAfter" className="py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-deep-sky-blue data-[state=active]:text-comet-white data-[state=active]:shadow-md data-[state=active]:shadow-comet-pink-peach/20 text-desaturated-gray hover:text-comet-white">Before/After</TabsTrigger>
          )}
          {hasCodeGens && (
            <TabsTrigger value="codeGens" className="py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-deep-sky-blue data-[state=active]:text-comet-white data-[state=active]:shadow-md data-[state=active]:shadow-comet-pink-peach/20 text-desaturated-gray hover:text-comet-white">Code Generation</TabsTrigger>
          )}
          {hasPrompts && (
            <TabsTrigger value="prompts" className="py-2 px-4 rounded-full text-sm font-medium transition-all duration-300 data-[state=active]:bg-deep-sky-blue data-[state=active]:text-comet-white data-[state=active]:shadow-md data-[state=active]:shadow-comet-pink-peach/20 text-desaturated-gray hover:text-comet-white">Prompts</TabsTrigger>
          )}
        </TabsList>

        {hasBeforeAfter && (
          <TabsContent value="beforeAfter" className="py-4 glass-sm rounded-lg p-4 shadow-inner">
            {evidence.beforeAfter.length > 0 ? (
              evidence.beforeAfter.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0 relative group">
                  {item.description && <p className="text-comet-white text-sm mb-2">AI-Assisted Image Edit: {item.description}</p>}
                  <ReactCompareSlider
                    itemOne={<img src={item.before} alt="Before" className="w-full h-auto object-cover rounded-md shadow-sm" />}
                    itemTwo={<img src={item.after} alt="After" className="w-full h-auto object-cover rounded-md shadow-sm" />}
                    handle={
                      <ReactCompareSliderHandle
                        linesStyle={{ opacity: 0.5, borderColor: '#ecd7cf' }} // Comet Pink/Peach
                        buttonStyle={{
                          border: '1px solid #ecd7cf',
                          background: '#20406a',
                          boxShadow: '0 0 10px rgba(236, 215, 207, 0.5)',
                          borderRadius: '9999px',
                        }}
                      />
                    }
                    className="rounded-md overflow-hidden"
                  />
                  <div className="absolute top-2 left-2 bg-deep-sky-blue text-comet-white text-xs px-2 py-1 rounded-full opacity-80 group-hover:opacity-0 transition-opacity duration-300">Before</div>
                  <div className="absolute top-2 right-2 bg-deep-sky-blue text-comet-white text-xs px-2 py-1 rounded-full opacity-80 group-hover:opacity-0 transition-opacity duration-300">After</div>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No before/after evidence available.</p>
            )}
          </TabsContent>
        )}

        {hasCodeGens && (
          <TabsContent value="codeGens" className="py-4 glass-sm rounded-lg p-4 shadow-inner">
            {evidence.codeGens.length > 0 ? (
              evidence.codeGens.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-comet-white mb-2">AI-Generated Code: {item.title}</h4>
                  {item.description && <p className="text-desaturated-gray text-sm mb-2">{item.description}</p>}
                  <SyntaxHighlighter language="jsx" style={atomOneDark} customStyle={{ background: '#20406a', padding: '1rem', borderRadius: '0.5rem', fontSize: '0.875rem', overflowX: 'auto' }}>
                    {item.code}
                  </SyntaxHighlighter>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No code generation evidence available.</p>
            )}
          </TabsContent>
        )}

        {hasPrompts && (
          <TabsContent value="prompts" className="py-4 glass-sm rounded-lg p-4 shadow-inner">
            {evidence.prompts.length > 0 ? (
              evidence.prompts.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <h4 className="font-semibold text-comet-white mb-2">AI Prompt: {item.title}</h4>
                  <p className="text-desaturated-gray text-sm mb-2">Prompt:</p>
                  <p className="bg-deep-sky-blue p-4 rounded-md text-comet-white text-sm italic shadow-inner">{item.prompt}</p>
                </div>
              ))
            ) : (
              <p className="text-desaturated-gray">No prompt evidence available.</p>
            )}
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
};

export default AIEvidence;
