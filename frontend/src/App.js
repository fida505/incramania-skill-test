import React, { useState, useRef } from "react";

// --- START OF INLINED ICONS ---
const TwitterIcon = ({ className }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>);
const MessageIcon = ({ className = "w-7 h-7" }) => (<svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193l-3.72-3.72a1.5 1.5 0 0 1 0-2.122l3.72-3.72ZM15.75 11.25l-3.72-3.72a1.5 1.5 0 0 1 0 2.122l3.72 3.72a1.5 1.5 0 0 1 0 2.122l-3.72 3.72a1.5 1.5 0 0 1-2.122 0l-3.72-3.72a1.5 1.5 0 0 1 0-2.122l3.72-3.72a1.5 1.5 0 0 1 2.122 0Z" /></svg>);
const RedFlagIcon = ({ className = "w-7 h-7" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>);
const GreenFlagIcon = ({ className = "w-7 h-7" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
const HideIcon = ({ className = "w-5 h-5" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.243 4.243L6.228 6.228" /></svg>);
// --- END OF ICONS ---

// --- START OF INLINED COMPONENTS ---
const StatCard = ({ title, count, icon, color }) => (
  <div className={`flex-1 p-5 bg-slate-800/50 rounded-2xl border border-slate-700/80 flex items-center justify-between backdrop-blur-sm shadow-lg`}>
    <div>
      <p className="text-slate-400 text-sm">{title}</p>
      <p className="text-3xl font-bold text-white">{count}</p>
    </div>
    <div className={`p-3 rounded-full ${color}`}>
      {icon}
    </div>
  </div>
);

const CommentCard = ({ comment }) => {
  const charCount = comment.text.length;
  const isRedFlag = charCount > 10;
  const borderColor = isRedFlag ? 'border-red-500/20 hover:border-red-500/40' : 'border-green-500/20 hover:border-green-500/40';

  return (
    <div className={`p-4 bg-slate-800/40 rounded-2xl border ${borderColor} flex gap-4 backdrop-blur-sm transition-all duration-300 shadow-md`}>
      <div className="flex-shrink-0">
        <img src={comment.avatarUrl} alt={comment.username} className="w-10 h-10 rounded-full" />
      </div>
      <div className="flex-grow">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-white">{comment.username}</span>
          <span className="text-slate-400 text-sm">@{comment.handle}</span>
          <span className="text-slate-500 text-sm">· {comment.timestamp}</span>
        </div>
        <p className="mt-2 text-slate-300">{comment.text}</p>
        <p className="mt-2 text-xs text-slate-500">{charCount} character{charCount !== 1 ? 's' : ''}</p>
      </div>
    </div>
  );
};

const SkeletonLoader = () => (
    <div className="animate-pulse w-full max-w-5xl mx-auto mt-10">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="h-24 bg-slate-700/50 rounded-2xl flex-1"></div>
            <div className="h-24 bg-slate-700/50 rounded-2xl flex-1"></div>
            <div className="h-24 bg-slate-700/50 rounded-2xl flex-1"></div>
        </div>
        <div className="space-y-6"><div className="h-12 bg-slate-700/50 rounded-lg w-1/3"></div><div className="h-24 bg-slate-700/50 rounded-xl"></div><div className="h-24 bg-slate-700/50 rounded-xl"></div><div className="h-24 bg-slate-700/50 rounded-xl"></div></div>
    </div>
);
// --- END OF COMPONENTS ---

function App() {
  const [tweetUrl, setTweetUrl] = useState('');
  const [redFlags, setRedFlags] = useState([]);
  const [greenFlags, setGreenFlags] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [hideRedFlags, setHideRedFlags] = useState(false);

  const resultsRef = useRef(null);

  const handleFetchComments = async (e) => {
    e.preventDefault();
    if (!tweetUrl) { setError("Please paste a Tweet URL."); return; }
    try { new URL(tweetUrl); } catch (_) { setError("Please enter a valid URL."); return; }
    
    setShowResults(true);
    setIsLoading(true);
    setError(null);
    setRedFlags([]);
    setGreenFlags([]);
    setHideRedFlags(false);
    
    setTimeout(() => resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay
      const res = await fetch("http://127.0.0.1:5000/comments");
      if (!res.ok) throw new Error('Network response was not ok');
      const data = await res.json();
      setRedFlags(data.red_flag || []);
      setGreenFlags(data.green_flag || []);
    } catch (err) {
      setError("Failed to fetch comments. Please ensure the backend is running.");
      console.error("Fetch error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleHideRedFlags = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5000/hide", { method: "POST" });
      if (!res.ok) throw new Error('Hide API call failed');
      setHideRedFlags(true);
    } catch (err) {
      setError("Failed to hide comments. Please check the backend.");
      console.error("Hide error:", err);
    }
  };

  const totalComments = redFlags.length + greenFlags.length;
  const displayedRedFlags = hideRedFlags ? [] : redFlags;

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <div className="relative isolate min-h-screen flex flex-col items-center p-4 sm:p-8 pt-16">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true"><div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#34d399] to-[#22d3ee] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'}}></div></div>
        
        <header className="text-center w-full max-w-2xl mx-auto z-10">
          <div className="flex justify-center mb-6"><div className="bg-slate-800/50 p-4 rounded-2xl shadow-lg backdrop-blur-sm border border-slate-700/80"><TwitterIcon className="w-10 h-10 text-sky-400" /></div></div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">Tweet Comment Classifier</h1>
          <p className="mt-4 text-lg text-green-200">Analyze Tweet Comments by Length</p>
        </header>

        <form onSubmit={handleFetchComments} className="mt-8 w-full max-w-xl flex flex-col sm:flex-row items-center gap-3 z-10">
          <input type="text" value={tweetUrl} onChange={(e) => { setTweetUrl(e.target.value); setError(null); }} placeholder="Paste Tweet URL..." className="flex-grow w-full px-5 py-3 bg-slate-800/50 border border-slate-700/80 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all duration-300" />
          <button type="submit" disabled={isLoading} className="w-full sm:w-auto px-8 py-3 bg-green-500 text-slate-900 font-semibold rounded-lg hover:bg-green-600 transition-colors duration-300 disabled:bg-green-800 disabled:cursor-not-allowed shadow-lg">{isLoading ? 'Fetching...' : 'Fetch Comments'}</button>
        </form>
        {error && <p className="mt-4 text-red-400 bg-red-500/10 px-4 py-2 rounded-lg z-10">{error}</p>}
        
        <div ref={resultsRef} className="w-full">
          {showResults && (
            isLoading ? <SkeletonLoader /> : (
              <main className="w-full max-w-5xl mx-auto mt-10 z-10">
                  {totalComments > 0 && (
                    <>
                      <section className="flex flex-col md:flex-row gap-4 mb-8">
                          <StatCard title="Total Comments" count={totalComments} icon={<MessageIcon />} color="bg-sky-500/20 text-sky-300" />
                          <StatCard title="Red Flags" count={redFlags.length} icon={<RedFlagIcon />} color="bg-red-500/20 text-red-300" />
                          <StatCard title="Green Flags" count={greenFlags.length} icon={<GreenFlagIcon />} color="bg-green-500/20 text-green-300" />
                      </section>
                      
                      <section className="mb-8 scroll-mt-20">
                        <div className="flex justify-between items-center mb-4 flex-wrap gap-2">
                          <h2 className="text-2xl font-bold text-white flex items-center gap-3"><span className="text-red-400">🚩</span> Red Flags <span className="text-sm text-slate-400">(Length &gt; 10)</span></h2>
                          <button onClick={handleHideRedFlags} disabled={hideRedFlags || redFlags.length === 0} className="flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-800/80 border border-slate-700/80 rounded-md hover:border-red-400/50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><HideIcon /> Hide All</button>
                        </div>
                        <div className="space-y-4">
                          {displayedRedFlags.length > 0 ? (
                            displayedRedFlags.map((c, i) => <CommentCard key={`red-${i}`} comment={c} />)
                          ) : (
                            <p className="text-slate-400 text-center py-4">{hideRedFlags ? "Red flag comments are hidden." : "No red flag comments found."}</p>
                          )}
                        </div>
                      </section>
                      
                      <section className="scroll-mt-20">
                        <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3"><span className="text-green-400">✅</span> Green Flags <span className="text-sm text-slate-400">(Length ≤ 10)</span></h2>
                        <div className="space-y-4">{greenFlags.map((c, i) => <CommentCard key={`green-${i}`} comment={c} />)}</div>
                      </section>
                    </>
                  )}
              </main>
            )
          )}
        </div>

        <footer className="w-full text-center text-slate-500 mt-16 pb-8"><p>&copy; {new Date().getFullYear()} Tweet Comment Classifier. All rights reserved.</p></footer>
      </div>
    </div>
  );
}

export default App;