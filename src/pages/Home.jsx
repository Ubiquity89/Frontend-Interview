import { useState } from 'react';
import { BlogList } from '../components/BlogList';
import { BlogDetails } from '../components/BlogDetails';
import { Navbar } from '../components/Navbar';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

// Mock data for testing layout
const mockBlogs = [
  {
    id: '1',
    title: 'Future of Fintech',
    category: ['FINANCE', 'TECH'],
    description: 'Exploring how AI and blockchain are reshaping financial services',
    date: '2026-01-11T09:12:45.120Z',
    coverImage: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg',
    content: `The financial technology sector is undergoing a revolutionary transformation, driven by the convergence of artificial intelligence and blockchain technologies. This paradigm shift is fundamentally altering how financial institutions operate, serve customers, and manage risk in an increasingly digital world.

Artificial intelligence has emerged as the cornerstone of modern fintech innovation. Machine learning algorithms now power everything from credit scoring and fraud detection to personalized investment advice and automated customer service. These AI systems can analyze vast amounts of financial data in real-time, identifying patterns and insights that would be impossible for human analysts to detect. For consumers, this means more accurate credit assessments, faster loan approvals, and highly personalized financial products tailored to their specific needs and circumstances.

Blockchain technology, on the other hand, is revolutionizing the underlying infrastructure of financial services. By providing a decentralized, immutable ledger system, blockchain enables unprecedented levels of transparency, security, and efficiency in financial transactions. Smart contracts are automating complex financial agreements, reducing the need for intermediaries and significantly lowering transaction costs. This technology is particularly transformative in areas like cross-border payments, where traditional systems have been slow and expensive for decades.

The synergy between AI and blockchain is creating new possibilities that were previously unimaginable. AI-powered decentralized finance (DeFi) platforms are offering sophisticated financial services without traditional banking infrastructure, while blockchain-based AI systems are ensuring data integrity and auditability in machine learning models. This convergence is democratizing access to financial services, particularly in underserved regions where traditional banking has been limited.

Looking ahead, the integration of quantum computing with these technologies promises even more profound changes. Quantum algorithms could potentially break current encryption methods while simultaneously enabling more powerful AI models. Financial institutions that adapt to these technological shifts will thrive, while those that resist change risk becoming obsolete in an increasingly competitive and innovative landscape.`
  },
  {
    id: '2',
    title: 'CA Finals Preparation Guide',
    category: ['EDUCATION', 'CAREER'],
    description: 'Complete strategy for acing your CA final examinations',
    date: '2026-01-10T14:30:22.456Z',
    coverImage: 'https://images.pexels.com/photos/714699/pexels-photo-714699.jpeg',
    content: `Preparing for CA final examinations requires a strategic approach that combines comprehensive subject knowledge with effective time management and psychological preparation. The journey to becoming a Chartered Accountant is challenging, but with the right strategy and mindset, success becomes not just possible, but probable.

The foundation of CA exam success lies in mastering the core subjects with conceptual clarity rather than rote memorization. Financial Reporting, Strategic Financial Management, Advanced Auditing, and Direct Taxes each require different study approaches. For Financial Reporting, focus on understanding the principles behind accounting standards and their practical applications. Strategic Financial Management demands practice with numerical problems and understanding of business contexts. Advanced Auditing requires knowledge of standards and their implementation in real-world scenarios, while Direct Taxes needs regular updates on tax laws and their interpretations.

Time management is perhaps the most critical factor in CA exam success. With limited time and vast syllabus, creating a structured study schedule is essential. Allocate time based on subject weightage and your personal strengths and weaknesses. The 80:20 rule applies here – focus 80% of your time on the 20% of topics that carry maximum marks. Regular mock tests under exam conditions help identify weak areas and improve speed and accuracy.

The psychological aspect of CA exam preparation cannot be overstated. Exam stress and anxiety can derail months of preparation if not managed properly. Develop a routine that includes adequate sleep, regular exercise, and stress-reduction techniques like meditation or deep breathing exercises. Remember that CA exams are marathons, not sprints – maintaining consistency throughout the preparation period is more important than short bursts of intense study.

Finally, leverage technology and resources effectively. Online classes, study materials, and peer groups can provide different perspectives and clarify doubts. However, avoid the trap of resource overloading – select quality materials and stick to them. Regular revision of previously studied topics is crucial, as the CA syllabus is cumulative and forgetting earlier concepts can jeopardize understanding of advanced topics.`
  },
  {
    id: '3',
    title: 'Tax Planning Strategies 2026',
    category: ['TAX', 'FINANCE'],
    description: 'Latest tax-saving strategies for individuals and businesses',
    date: '2026-01-09T11:45:33.789Z',
    coverImage: 'https://images.pexels.com/photos/4386332/pexels-photo-4386332.jpeg',
    content: `Tax planning has evolved significantly in 2026, with new regulations and opportunities requiring both individuals and businesses to reassess their financial strategies. The landscape has become increasingly complex, but with complexity comes opportunity for those who understand the system and plan accordingly.

For individual taxpayers, the focus has shifted towards long-term wealth building through tax-advantaged investment vehicles. The new tax brackets have created opportunities for strategic income realization and investment timing. Retirement accounts continue to offer powerful tax deferral benefits, while education savings accounts provide tax-free growth for qualified expenses. Real estate investments, particularly through REITs and opportunity zones, offer significant tax advantages that many investors overlook.

Business tax planning has become even more sophisticated with the introduction of new digital economy regulations. Companies engaged in e-commerce, digital services, and remote work arrangements face unique compliance challenges and opportunities. The key is to structure operations in a way that maximizes legitimate deductions while maintaining full compliance with reporting requirements. Transfer pricing rules have become stricter, making documentation and proper valuation more important than ever.

International tax planning requires navigating an increasingly complex web of treaties and regulations. The global minimum tax has changed how multinational corporations structure their operations, but opportunities still exist for strategic location planning and intellectual property management. Digital nomads and remote workers face unique tax situations that require careful planning and professional guidance.

The future of tax planning will be increasingly data-driven and automated. AI-powered tax software can now identify optimization opportunities that were previously missed by human advisors. However, technology should complement, not replace, professional judgment. The most effective tax strategies combine sophisticated tools with human expertise to create comprehensive, compliant, and optimized tax positions that stand up to regulatory scrutiny.`
  },
  {
    id: '4',
    title: 'Digital Banking Revolution',
    category: ['BANKING', 'TECH'],
    description: 'How digital transformation is reshaping the banking industry',
    date: '2026-01-08T16:20:15.345Z',
    coverImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
    content: `The banking industry is experiencing its most profound transformation since the advent of ATMs, driven by digital technologies that are fundamentally redefining how financial services are delivered and consumed. This revolution is not just about technology; it's about changing the very nature of banking relationships and customer expectations.

Digital banking has evolved from simple online banking to comprehensive financial ecosystems that integrate payments, investments, loans, and financial planning in seamless mobile experiences. Artificial intelligence is powering personalized product recommendations, while machine learning algorithms detect fraud in real-time with unprecedented accuracy. The traditional bank branch is being replaced by digital touchpoints that are available 24/7, meeting customers where they are rather than requiring them to visit physical locations.

The rise of neobanks and fintech startups has created intense competition that benefits consumers through lower fees, better rates, and innovative features. These digital-native banks operate with cost structures that allow them to offer services that traditional banks cannot match profitably. However, established banks are fighting back with their own digital transformations, leveraging their brand trust, regulatory expertise, and existing customer relationships to maintain market share.

Blockchain and cryptocurrency integration represent the next frontier of digital banking. Central bank digital currencies (CBDCs) are being piloted worldwide, potentially revolutionizing how money moves through the economy. Decentralized finance (DeFi) platforms are offering banking services without traditional intermediaries, while stablecoins are bridging the gap between crypto and traditional finance. Banks that successfully integrate these technologies will have significant competitive advantages.

The human element in banking is changing but not disappearing. While routine transactions are becoming fully automated, complex financial decisions still require human expertise and judgment. The successful bank of the future will combine cutting-edge technology with human advisors who can provide sophisticated advice for major life decisions like mortgages, business loans, and investment strategies. The challenge is finding the right balance between automation efficiency and human touch.`
  },
  {
    id: '5',
    title: 'Investment Strategies for Beginners',
    category: ['INVESTING', 'EDUCATION'],
    description: 'Essential investment principles for starting your wealth journey',
    date: '2026-01-07T09:15:48.672Z',
    coverImage: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg',
    content: `Starting your investment journey can feel overwhelming, but understanding a few fundamental principles can transform anxiety into confidence and uncertainty into strategic action. The world of investing has become more accessible than ever, yet the basic rules of building wealth remain remarkably consistent across time and market conditions.

The foundation of successful investing lies in understanding the relationship between risk and return. Higher returns always come with higher risk, but the key is managing risk rather than avoiding it entirely. Diversification is the most powerful tool for risk management – spreading investments across different asset classes, industries, and geographic regions reduces the impact of any single investment's poor performance. For beginners, low-cost index funds and ETFs provide instant diversification that would be expensive and time-consuming to achieve through individual stock selection.

Time is the most powerful force in investing, thanks to compound interest. The earlier you start investing, the more time your money has to grow exponentially. A person who starts investing $500 monthly at age 25 will have significantly more at retirement than someone who starts at age 35, even if the latter invests more money each month. This mathematical reality makes starting early more important than starting big when it comes to building long-term wealth.

Emotional discipline separates successful investors from those who struggle with market volatility. The natural human tendency is to buy when markets are euphoric and sell when markets are fearful – exactly the opposite of what creates long-term wealth. Developing a systematic investment plan and sticking to it regardless of market conditions is crucial. Dollar-cost averaging, where you invest fixed amounts regularly, automatically enforces this discipline by buying more shares when prices are low and fewer when prices are high.

The investment landscape continues to evolve with new opportunities and challenges. Environmental, Social, and Governance (ESG) investing has moved from niche to mainstream, allowing investors to align their portfolios with their values. Cryptocurrency and digital assets offer new diversification opportunities but come with unique risks and require careful consideration. Robo-advisors make sophisticated investment strategies accessible to beginners with small amounts of capital, while educational resources and investment communities provide support and learning opportunities.`
  }
];

export const Home = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogSelect = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Navigation Bar */}
      <Navbar />
      
      {/* Header Section */}
      <Header />

      {/* Main Content */}
      <main className="w-full overflow-x-hidden">
        <section className="mt-20">
          <div className="mx-auto max-w-[1200px] px-2">
            <div className="grid grid-cols-12 gap-4 items-start">
            {/* Left Panel - Article List */}
            <aside className="col-span-4">
              <BlogList 
                blogs={mockBlogs} 
                onBlogSelect={handleBlogSelect}
                selectedBlogId={selectedBlog?.id}
              />
            </aside>

            {/* Right Panel - Blog Reader */}
            <main className="col-span-8">
              {selectedBlog ? (
                <BlogDetails
                  blog={selectedBlog}
                />
              ) : (
                <div className="flex items-center justify-center h-96 text-muted-foreground">
                  <div className="text-center">
                    <h3 className="text-lg font-medium mb-2">Select an article to read</h3>
                    <p>Choose from the latest articles on the left</p>
                  </div>
                </div>
              )}
            </main>
          </div>
        </div>
        </section>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
