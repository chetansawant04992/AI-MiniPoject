/**
 * AI & DATA SCIENCE DEPARTMENT PORTAL & IRIS CHATBOT ENGINE
 * Comprehensive Interactive Controller & Knowledge Base
 */

// --- Department Knowledge Base for RAG Assistant ---
const AIDS_KNOWLEDGE_BASE = {
  curriculum: `
    <strong>AI & Data Science Curriculum (B.Tech 4-Year Track):</strong><br>
    • <strong>Semester V:</strong> Foundation of Machine Learning (4 credits), Deep Neural Networks (4 credits), Database Engineering (3 credits), Probability & Linear Algebra (3 credits).<br>
    • <strong>Semester VI:</strong> Natural Language Processing & Transformers (4 credits), Computer Vision Systems (4 credits), MLOps & Distributed Training (3 credits), Cloud Architecture (3 credits).<br>
    • <strong>Semester VII (Current Term):</strong> LLM Reasoning & Multi-Agent Frameworks, Generative Diffusion Models, Capstone Literature Review & Prototyping (6 credits), AI Ethics & Governance.<br>
    • <strong>Semester VIII:</strong> Full-Semester Industrial Placement / Research Internship & Capstone Defense (12 credits).
  `,
  faculty: `
    <strong>AI&DS Core Faculty & Office Hours (Tech Block IV):</strong><br>
    • <strong>Dr. Elena Vance (Head of Department):</strong> AI Governance & Graph Neural Nets | Cabin 401 | Office Hours: Tue/Thu 02:00 PM – 04:00 PM (elena.vance@university.edu)<br>
    • <strong>Prof. Marcus Sterling:</strong> Deep Learning & High-Performance Computing | Cabin 403 | Office Hours: Mon/Wed 10:00 AM – 12:00 PM (marcus.s@university.edu)<br>
    • <strong>Dr. Samantha Chen:</strong> Multimodal Vision & Embodied AI | Vision Lab 408 | Office Hours: Wed/Fri 03:00 PM – 05:00 PM (s.chen@university.edu)<br>
    • <strong>Prof. David K.:</strong> Applied NLP & LLM Systems | Cabin 405 | Office Hours: Daily 11:00 AM – 01:00 PM (david.k@university.edu)
  `,
  timetable: `
    <strong>Fall 2026 Academic Timetable (Sem VII - Section A & B):</strong><br>
    • <strong>Monday:</strong> 09:00 AM - 11:00 AM: Advanced LLMs (Hall 201) | 01:30 PM - 04:30 PM: DGX GPU Lab (Lab 4B)<br>
    • <strong>Tuesday:</strong> 10:00 AM - 12:00 PM: Multimodal Vision | 02:00 PM - 04:00 PM: AI Ethics & Law<br>
    • <strong>Wednesday:</strong> 09:00 AM - 12:00 PM: Capstone Project Mentorship & Slurm Queue review<br>
    • <strong>Thursday:</strong> 11:00 AM - 01:00 PM: Reinforcement Learning Systems | 02:00 PM - 04:00 PM: Seminar Series<br>
    • <strong>Friday:</strong> 09:30 AM - 01:30 PM: Distributed MLOps Lab (Kubernetes / Ray cluster)
  `,
  examinations: `
    <strong>Fall 2026 Mid-Semester Examination Directive:</strong><br>
    • <strong>Examination Period:</strong> November 03 to November 10, 2026.<br>
    • <strong>Paper Pattern:</strong> 60% Conceptual & Theoretical, 40% Live Coding / Model Architecture design.<br>
    • <strong>Hall Tickets:</strong> Downloadable from the Department ERP Portal starting October 20, 2026.<br>
    • <strong>Capstone Phase-I Literature Review:</strong> Mandatory submission due Friday, Oct 16 at 11:59 PM via Git Classroom.
  `,
  placements: `
    <strong>Career & Placement Statistics (Class of 2025/2026):</strong><br>
    • <strong>Overall Placement Rate:</strong> 96.4%<br>
    • <strong>Median / Average CTC:</strong> $118,500 / annum (+14% increase Year-over-Year).<br>
    • <strong>Highest International Offer:</strong> $240,000 / annum (Applied AI Research Lab).<br>
    • <strong>Top Recruiting Partners:</strong> Google DeepMind, Microsoft Azure AI, OpenAI, Databricks, Amazon AWS, Snowflake, Meta, and NVIDIA.
  `,
  gpu: `
    <strong>NVIDIA DGX Station A100 & H100 Reservation Guide:</strong><br>
    • <strong>Compute Capacity:</strong> 8x NVIDIA H100 SXM5 (80GB VRAM each) + 16x A100 Tensor Cores with 640GB unified HBM2e memory.<br>
    • <strong>Job Scheduler:</strong> Managed via Slurm Workload Manager.<br>
    • <strong>Standard Job Command:</strong> <code>sbatch --gres=gpu:a100:2 --mem=64G train_model.sh</code><br>
    • <strong>Quota:</strong> 120 GPU compute hours per student per term. Use the "Request Compute Allocation" button on the right sidebar to book slots!
  `,
  events: `
    <strong>Upcoming Department Events & Datathons (Q4 2026):</strong><br>
    • <strong>Oct 12-14:</strong> Hands-on Generative AI & Transformer Workshop (Auditorium 2).<br>
    • <strong>Oct 25-27:</strong> Algorand-26 Annual 48-Hour AI Hackathon ($15,000 grant pool).<br>
    • <strong>Nov 18:</strong> International Symposium on Foundation Models in Healthcare.<br>
    • <strong>Dec 04:</strong> Annual Capstone Demo Day & Tech Industry Showcase.
  `,
  notices: `
    <strong>Recent Department Notices & Bulletins (October 2026):</strong><br>
    • <strong>Ref: AI-EX-26/10:</strong> Internal Examination Schedule & Room Allocations Released.<br>
    • <strong>Ref: AI-FAC-26/08:</strong> PyTorch 2.5 CUDA 12.4 Sandbox Upgrade complete across Lab 4A & 4B.<br>
    • <strong>Ref: AI-PL-26/04:</strong> Campus Placement Phase 1 schedule initiated with 45+ recruiters.<br>
    • <strong>Ref: AI-RES-26/02:</strong> Seed research grants for Capstone AI teams open until Oct 31.
  `
};

// --- News Database for News & Updates Portal ---
const NEWS_ARTICLES = [
  {
    id: 1,
    category: 'announcements',
    badge: 'Announcement',
    badgeClass: 'announcement-badge',
    ref: 'NOTICE REF: AI-EX-26/10',
    title: 'Internal Examination Schedule Released',
    date: '07 October 2026',
    meta: '3 min read',
    summary: 'The department has released the schedule for the upcoming internal examinations. Review dates, assigned lab modules, and invigilation slots.',
    content: `
      <p>The Department of Artificial Intelligence & Data Science has published the official schedule for the Fall 2026 Internal Examinations.</p>
      <h4>Key Details:</h4>
      <ul>
        <li><strong>Exam Dates:</strong> November 03, 2026 – November 10, 2026</li>
        <li><strong>Exam Mode:</strong> Hybrid (Theoretical assessment + Lab-based practical evaluation)</li>
        <li><strong>Reporting Time:</strong> 08:30 AM sharp in Tech Block IV Exam Halls 401-408</li>
      </ul>
      <p>Students must carry their university RFID smart cards. Calculators and sanctioned IDE sandbox environments will be provided.</p>
    `
  },
  {
    id: 2,
    category: 'events',
    badge: 'Event',
    badgeClass: 'event-badge',
    ref: 'SYMPOSIUM SERIES #04',
    title: 'AI & Data Science Workshop',
    date: '05 October 2026',
    meta: 'Limited Seats',
    summary: 'A hands-on workshop on Generative AI and Machine Learning will be conducted for students, featuring live tensor model fine-tuning and API integration.',
    content: `
      <p>Join us for an intensive 3-day workshop organized by the AI&DS Research Cell featuring engineers from leading AI labs.</p>
      <h4>Workshop Agenda:</h4>
      <ul>
        <li>Day 1: Fine-tuning Open LLMs with LoRA/QLoRA on NVIDIA DGX A100.</li>
        <li>Day 2: Multi-agent orchestration using LangChain, AutoGen, and Vector DBs.</li>
        <li>Day 3: Deploying real-time inference microservices on Kubernetes.</li>
      </ul>
      <p>Certificate of Excellence and GPU credits provided to all participants.</p>
    `
  },
  {
    id: 3,
    category: 'achievements',
    badge: 'Achievement',
    badgeClass: 'achievement-badge',
    ref: 'SPOTLIGHT STORY',
    title: 'Students Selected for Internship Program',
    date: '02 October 2026',
    meta: '12 Placements',
    summary: 'AI&DS students have successfully secured internship opportunities with leading technology companies, specializing in NLP and autonomous vision systems.',
    content: `
      <p>We are delighted to congratulate 12 of our final-year and pre-final year students who have accepted prestigious research and engineering internship offers for Spring 2027.</p>
      <h4>Recruiting Organizations:</h4>
      <ul>
        <li><strong>Google DeepMind:</strong> 3 Research Interns (Multimodal AI)</li>
        <li><strong>Microsoft Research:</strong> 4 NLP Software Engineers</li>
        <li><strong>OpenAI & Databricks:</strong> 5 Distributed Systems & LLM Interns</li>
      </ul>
      <p>Average internship stipend: $8,500 / month with housing stipend.</p>
    `
  },
  {
    id: 4,
    category: 'placement',
    badge: 'Placement',
    badgeClass: 'placement-badge',
    ref: 'RECRUITMENT ROUND 2026-27',
    title: 'Campus Placement Drive',
    date: '30 September 2026',
    meta: '45+ Companies',
    summary: 'A placement drive for final-year AI & Data Science students will be conducted soon. Eligible candidates are advised to verify their resume repository.',
    content: `
      <p>The Departmental Placement Cell announces the commencement of Phase 1 Campus Recruitment for the Class of 2026/2027.</p>
      <h4>Eligibility & Verification:</h4>
      <ul>
        <li>Minimum CGPA requirement: 7.5 with zero active backlogs.</li>
        <li>Submission of verified GitHub portfolio and published Capstone artifacts.</li>
        <li>Over 45 Global Tech Giants participating in On-Campus interviews.</li>
      </ul>
      <p>Pre-placement orientation webinar will be held on October 10 at 06:00 PM via MS Teams.</p>
    `
  },
  {
    id: 5,
    category: 'academic',
    badge: 'Academic',
    badgeClass: 'academic-badge',
    ref: 'CURRICULUM REVISION',
    title: 'New AI & ML Laboratory Activities',
    date: '28 September 2026',
    meta: 'Hands-on Lab',
    summary: 'New practical activities have been introduced for Artificial Intelligence and Machine Learning courses, with emphasis on transformers and diffusion pipelines.',
    content: `
      <p>As part of our continuous curriculum evolution, the Department Academic Council has upgraded all laboratory assignments to PyTorch 2.5 and FlashAttention-3.</p>
      <h4>New Practical Modules:</h4>
      <ul>
        <li><strong>Lab Module 5:</strong> Vision Transformers (ViT) & Diffusion Denoising implementations from scratch.</li>
        <li><strong>Lab Module 6:</strong> Graph Neural Networks for Drug Discovery datasets.</li>
        <li><strong>Lab Module 7:</strong> Quantization and ONNX Runtime deployment on edge devices.</li>
      </ul>
      <p>Jupyter sandbox templates are now live on the departmental student hub.</p>
    `
  },
  {
    id: 6,
    category: 'events',
    badge: 'Event',
    badgeClass: 'event-badge',
    ref: 'FLAGSHIP SPRINT',
    title: 'Algorand-26 Annual Hackathon',
    date: '25 September 2026',
    meta: '$15k Pool',
    summary: 'Registrations now open for the 48-hour AI innovation sprint with industry mentorship, rapid prototyping, and startup seed grants.',
    content: `
      <p>Gear up for the flagship AI innovation sprint of the year! Algorand-26 brings together the brightest minds in machine learning, robotics, and generative AI.</p>
      <h4>Hackathon Tracks:</h4>
      <ul>
        <li>Autonomous Agents & Reasoning Systems</li>
        <li>AI for Climate Resilience & Smart Cities</li>
        <li>Decentralized AI & Secure Verifiable Compute</li>
      </ul>
      <p><strong>Prizes:</strong> $15,000 total prize pool + fast-track angel incubation + cloud GPU credits!</p>
    `
  }
];

// --- State Variables ---
let isTtsEnabled = false;
let isVoiceListening = false;
let currentNewsCategory = 'all';

// --- DOM Initializations ---
document.addEventListener('DOMContentLoaded', () => {
  setupNavigation();
  setupChatbot();
  setupSidebarWidgets();
  setupNewsView();
  setupModals();
  setupIrisOrb();
  simulateComputeFluctuations();
});

// ==========================================================================
// 1. NAVIGATION SYSTEM (SWITCH BETWEEN CHATBOT & NEWS PORTAL)
// ==========================================================================
function setupNavigation() {
  const homeView = document.getElementById('homeView');
  const newsView = document.getElementById('newsView');
  const navHome = document.getElementById('navHome');
  const navUpdatesBtn = document.getElementById('navUpdatesBtn');
  const tickerLinkBtn = document.getElementById('tickerLinkBtn');
  const backToChatbotBtn = document.getElementById('backToChatbotBtn');
  const brandLogo = document.getElementById('brandLogo');

  function switchToHome() {
    homeView.style.display = 'flex';
    newsView.style.display = 'none';
    navHome.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function switchToNews() {
    homeView.style.display = 'none';
    newsView.style.display = 'block';
    navHome.classList.remove('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderNewsCards();
  }

  navHome.addEventListener('click', switchToHome);
  brandLogo.addEventListener('click', switchToHome);
  backToChatbotBtn.addEventListener('click', switchToHome);

  navUpdatesBtn?.addEventListener('click', switchToNews);
  tickerLinkBtn?.addEventListener('click', switchToNews);

  // User profile
  document.getElementById('userProfileBtn')?.addEventListener('click', () => {
    showToast('Logged in as: Student ID #2026-AIDS-409 (B.Tech Sem VII)');
  });
}

// ==========================================================================
// 2. CHATBOT ENGINE & RAG KNOWLEDGE SEARCH
// ==========================================================================
function setupChatbot() {
  const chatForm = document.getElementById('chatForm');
  const chatInputField = document.getElementById('chatInputField');
  const dynamicMessagesArea = document.getElementById('dynamicMessagesArea');
  const chatMessagesViewport = document.getElementById('chatMessagesViewport');
  const typingIndicator = document.getElementById('typingIndicator');
  const quickPills = document.querySelectorAll('.quick-pill-card');
  const ttsToggleBtn = document.getElementById('ttsToggleBtn');
  const resetChatBtn = document.getElementById('resetChatBtn');
  const languageBtn = document.getElementById('languageBtn');
  const voiceInputBtn = document.getElementById('voiceInputBtn');
  const attachFileBtn = document.getElementById('attachFileBtn');

  // Recommendation Card Buttons
  document.getElementById('viewExamsBtn')?.addEventListener('click', () => {
    handleUserMessage("Tell me the exact details for the Mid-Term Exam schedule and subjects.");
  });

  document.getElementById('downloadRubricsBtn')?.addEventListener('click', () => {
    showToast('Downloading Capstone_Phase1_Rubrics_2026.pdf...');
    setTimeout(() => {
      showToast('Capstone Rubrics PDF downloaded successfully! Check your downloads.');
    }, 800);
  });

  // Quick Query Pills
  quickPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const query = pill.getAttribute('data-query');
      if (query) {
        handleUserMessage(query);
      }
    });
  });

  // Form Submit
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = chatInputField.value.trim();
    if (!query) return;
    chatInputField.value = '';
    handleUserMessage(query);
  });

  // TTS Toggle
  ttsToggleBtn.addEventListener('click', () => {
    isTtsEnabled = !isTtsEnabled;
    ttsToggleBtn.classList.toggle('active', isTtsEnabled);
    if (isTtsEnabled) {
      showToast('Voice Text-to-Speech enabled.');
      speakText("Voice Assistant Activated. How may I help you?");
    } else {
      window.speechSynthesis?.cancel();
      showToast('Voice Text-to-Speech disabled.');
    }
  });

  // Reset Chat
  resetChatBtn.addEventListener('click', () => {
    dynamicMessagesArea.innerHTML = '';
    showToast('Chat history cleared. Session renewed.');
  });

  // Language switch
  languageBtn.addEventListener('click', () => {
    showToast('Current Knowledge Locale: English (US Academic v4.2)');
  });

  // Attach File
  attachFileBtn.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.ipynb,.pdf,.py,.csv,.zip';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        showToast(`Uploaded ${file.name} for AI code review.`);
        handleUserMessage(`I have attached notebook: ${file.name}. Can you analyze my training architecture?`);
      }
    };
    input.click();
  });

  // Voice Input (Speech Recognition)
  voiceInputBtn.addEventListener('click', () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      showToast('Speech Recognition not supported in this browser. Please type your query.');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    if (!isVoiceListening) {
      recognition.start();
      isVoiceListening = true;
      voiceInputBtn.style.color = '#ef4444';
      showToast('Listening... Speak now.');
    }

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      chatInputField.value = transcript;
      isVoiceListening = false;
      voiceInputBtn.style.color = '';
      handleUserMessage(transcript);
    };

    recognition.onerror = () => {
      isVoiceListening = false;
      voiceInputBtn.style.color = '';
    };

    recognition.onend = () => {
      isVoiceListening = false;
      voiceInputBtn.style.color = '';
    };
  });
}

// User Message Handler
function handleUserMessage(queryText) {
  const dynamicMessagesArea = document.getElementById('dynamicMessagesArea');
  const chatMessagesViewport = document.getElementById('chatMessagesViewport');
  const typingIndicator = document.getElementById('typingIndicator');

  // Append User Bubble
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const userMsgEl = document.createElement('div');
  userMsgEl.className = 'chat-msg user-msg animate-pop';
  userMsgEl.innerHTML = `
    <div class="msg-avatar"><i class="fa-solid fa-user"></i></div>
    <div class="msg-content-wrapper">
      <div class="msg-bubble user-bubble">${escapeHtml(queryText)}</div>
      <div class="msg-timestamp">${timeStr} • You</div>
    </div>
  `;
  dynamicMessagesArea.appendChild(userMsgEl);
  chatMessagesViewport.scrollTop = chatMessagesViewport.scrollHeight;

  // Show Typing Indicator
  typingIndicator.style.display = 'flex';
  chatMessagesViewport.scrollTop = chatMessagesViewport.scrollHeight;

  // Generate Assistant Response after slight delay
  setTimeout(() => {
    typingIndicator.style.display = 'none';
    const answerHtml = generateAssistantResponse(queryText);
    
    const botMsgEl = document.createElement('div');
    botMsgEl.className = 'chat-msg bot-msg animate-pop';
    botMsgEl.innerHTML = `
      <div class="msg-avatar"><i class="fa-solid fa-robot"></i></div>
      <div class="msg-content-wrapper">
        <div class="msg-bubble bot-bubble">${answerHtml}</div>
        <div class="msg-timestamp">${timeStr} • AI&DS Knowledge Engine</div>
      </div>
    `;
    dynamicMessagesArea.appendChild(botMsgEl);
    chatMessagesViewport.scrollTop = chatMessagesViewport.scrollHeight;

    // TTS if enabled
    if (isTtsEnabled) {
      const plainText = botMsgEl.querySelector('.bot-bubble').innerText;
      speakText(plainText);
    }
  }, 450);
}

// RAG Response Router
function generateAssistantResponse(query) {
  const q = query.toLowerCase();

  if (q.includes('curriculum') || q.includes('syllabus') || q.includes('credit') || q.includes('subject') || q.includes('semester') || q.includes('sem')) {
    return `Here is the verified course curriculum and credit distribution for the AI & Data Science program:<br><br>${AIDS_KNOWLEDGE_BASE.curriculum}`;
  }
  if (q.includes('faculty') || q.includes('office hour') || q.includes('cabin') || q.includes('professor') || q.includes('hod') || q.includes('elena') || q.includes('teacher')) {
    return `Here are the AI&DS Department faculty coordinates, research labs, and weekly office hours:<br><br>${AIDS_KNOWLEDGE_BASE.faculty}`;
  }
  if (q.includes('timetable') || q.includes('schedule') || q.includes('lecture') || q.includes('class') || q.includes('period')) {
    return `Here is the current Fall 2026 weekly lecture and lab timetable for your batch:<br><br>${AIDS_KNOWLEDGE_BASE.timetable}`;
  }
  if (q.includes('exam') || q.includes('mid-term') || q.includes('mid term') || q.includes('test') || q.includes('hall ticket') || q.includes('date')) {
    return `Here is the official notice regarding upcoming examinations and evaluation rubrics:<br><br>${AIDS_KNOWLEDGE_BASE.examinations}`;
  }
  if (q.includes('placement') || q.includes('ctc') || q.includes('salary') || q.includes('package') || q.includes('recruiter') || q.includes('internship') || q.includes('job')) {
    return `Here is the comprehensive AI&DS career and campus placement snapshot:<br><br>${AIDS_KNOWLEDGE_BASE.placements}`;
  }
  if (q.includes('gpu') || q.includes('cluster') || q.includes('nvidia') || q.includes('dgx') || q.includes('h100') || q.includes('a100') || q.includes('slurm') || q.includes('compute')) {
    return `Here are the reservation guidelines and Slurm submission commands for the DGX Supercluster:<br><br>${AIDS_KNOWLEDGE_BASE.gpu}`;
  }
  if (q.includes('event') || q.includes('hackathon') || q.includes('datathon') || q.includes('workshop') || q.includes('symposium') || q.includes('algorand')) {
    return `Here are the upcoming AI&DS hackathons, workshops, and flagship conferences:<br><br>${AIDS_KNOWLEDGE_BASE.events}`;
  }
  if (q.includes('notice') || q.includes('circular') || q.includes('bulletin') || q.includes('october') || q.includes('news')) {
    return `Here are the key departmental dispatches and circulars for this month:<br><br>${AIDS_KNOWLEDGE_BASE.notices}`;
  }
  if (q.includes('notebook') || q.includes('attached') || q.includes('.ipynb')) {
    return `I have reviewed your attached Jupyter Notebook. Model layers and CUDA memory tensors look optimal. You can now queue it on Node 02 using <code>sbatch run_train.sh</code>!`;
  }

  // Fallback intelligent answer
  return `
    Thank you for your query regarding: <em>"${escapeHtml(query)}"</em>.<br><br>
    Based on the <strong>AI&DS Academic Knowledge Base (Fall 2026)</strong>, please check the common categories below or specify whether you need help with:
    <ul>
      <li>Curriculum credits & elective syllabi</li>
      <li>Faculty appointments & office hours</li>
      <li>NVIDIA DGX GPU cluster reservations</li>
      <li>Mid-term examinations & placement bulletins</li>
    </ul>
    You can also visit Tech Block IV, Room 402 or email <code>aids-support@university.edu</code>.
  `;
}

// Text-to-Speech Helper
function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.rate = 1.05;
  utterance.pitch = 1.0;
  window.speechSynthesis.speak(utterance);
}

// ==========================================================================
// 3. NEWS PORTAL: SEARCH, CATEGORY FILTERS, & MODAL PREVIEWS
// ==========================================================================
function setupNewsView() {
  const searchInput = document.getElementById('newsSearchInput');
  const clearSearchBtn = document.getElementById('clearNewsSearchBtn');
  const filterTabs = document.querySelectorAll('.filter-tab');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentNewsCategory = tab.getAttribute('data-category');
      renderNewsCards();
    });
  });

  searchInput.addEventListener('input', () => {
    clearSearchBtn.style.display = searchInput.value ? 'block' : 'none';
    renderNewsCards();
  });

  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    clearSearchBtn.style.display = 'none';
    renderNewsCards();
  });
}

function renderNewsCards() {
  const searchInput = document.getElementById('newsSearchInput');
  const newsCardsGrid = document.getElementById('newsCardsGrid');
  const countBadge = document.getElementById('newsCountBadge');
  const term = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const cards = newsCardsGrid.querySelectorAll('.news-card');
  let visibleCount = 0;

  cards.forEach(card => {
    const category = card.getAttribute('data-category');
    const title = card.querySelector('.card-heading').innerText.toLowerCase();
    const summary = card.querySelector('.card-summary').innerText.toLowerCase();
    const ref = card.querySelector('.card-reference-tag')?.innerText.toLowerCase() || '';

    const matchesCategory = (currentNewsCategory === 'all' || category === currentNewsCategory);
    const matchesSearch = (!term || title.includes(term) || summary.includes(term) || ref.includes(term));

    if (matchesCategory && matchesSearch) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (countBadge) {
    countBadge.innerText = visibleCount;
  }
}

// Global modal opener for News
window.openNewsModal = function(articleId) {
  const article = NEWS_ARTICLES.find(a => a.id === articleId);
  if (!article) return;

  const modal = document.getElementById('newsArticleModal');
  const badge = document.getElementById('articleModalBadge');
  const title = document.getElementById('articleModalTitle');
  const body = document.getElementById('articleModalBody');
  const askBtn = document.getElementById('askAssistantAboutArticleBtn');

  badge.className = `card-badge ${article.badgeClass}`;
  badge.innerText = article.badge;
  title.innerText = article.title;
  body.innerHTML = `
    <div style="margin-bottom: 0.85rem; color: var(--slate-500); font-size: 0.8rem; font-weight: 700;">
      <span>${article.ref}</span> • <span>${article.date}</span>
    </div>
    ${article.content}
    <div style="margin-top: 1.5rem; padding: 1rem; background: var(--slate-50); border: 1px dashed var(--slate-300); border-radius: 8px;">
      <strong>Official Circular Document:</strong> 
      <a href="javascript:void(0)" onclick="showToast('Official Circular PDF Downloaded!')" style="color: var(--primary-600); margin-left: 0.5rem; text-decoration: underline;">
        Download Verified Notice Copy (PDF)
      </a>
    </div>
  `;

  askBtn.onclick = () => {
    modal.style.display = 'none';
    const homeView = document.getElementById('homeView');
    const newsView = document.getElementById('newsView');
    const navHome = document.getElementById('navHome');
    if (homeView) homeView.style.display = 'flex';
    if (newsView) newsView.style.display = 'none';
    if (navHome) navHome.classList.add('active');
    handleUserMessage(`Explain the details and student instructions for: "${article.title}" (${article.ref})`);
  };

  modal.style.display = 'flex';
};

// ==========================================================================
// 4. SIDEBAR WIDGETS & MODAL INTERACTIONS
// ==========================================================================
function setupSidebarWidgets() {
  // GPU Compute Request
  const requestComputeBtn = document.getElementById('requestComputeBtn');
  const computeModal = document.getElementById('computeModal');
  const closeComputeModalBtn = document.getElementById('closeComputeModalBtn');
  const cancelComputeBtn = document.getElementById('cancelComputeBtn');
  const computeRequestForm = document.getElementById('computeRequestForm');

  if (requestComputeBtn && computeModal) {
    requestComputeBtn.addEventListener('click', () => {
      computeModal.style.display = 'flex';
    });

    [closeComputeModalBtn, cancelComputeBtn].forEach(btn => {
      btn?.addEventListener('click', () => {
        computeModal.style.display = 'none';
      });
    });

    computeRequestForm?.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('projectTitleInput').value;
      const gpu = document.getElementById('gpuTargetSelect').value;
      computeModal.style.display = 'none';
      showToast(`Slurm Job Queued: "${title}" assigned to ${gpu} cluster! Job ID #SLURM-88941.`);
      computeRequestForm.reset();
    });
  }

  // Career Analytics Modal
  const downloadPlacementBtn = document.getElementById('downloadPlacementBtn');
  const placementModal = document.getElementById('placementModal');
  const closePlacementModalBtn = document.getElementById('closePlacementModalBtn');
  const closePlacementBtn2 = document.getElementById('closePlacementBtn2');
  const downloadReportPdfBtn = document.getElementById('downloadReportPdfBtn');

  if (downloadPlacementBtn && placementModal) {
    downloadPlacementBtn.addEventListener('click', () => {
      placementModal.style.display = 'flex';
    });

    [closePlacementModalBtn, closePlacementBtn2].forEach(btn => {
      btn?.addEventListener('click', () => {
        placementModal.style.display = 'none';
      });
    });

    downloadReportPdfBtn?.addEventListener('click', () => {
      showToast('Generating AI&DS_Placement_Annual_Report_2026.pdf...');
      setTimeout(() => {
        placementModal.style.display = 'none';
        showToast('Placement Report PDF (12 Pages) Downloaded Successfully!');
      }, 1000);
    });
  }

  // Tech Block IV Office Hour booking
  document.getElementById('openHelpdeskModalBtn')?.addEventListener('click', () => {
    openDepartmentModal('contact');
  });
}

// ==========================================================================
// 5. DEPARTMENT INFORMATION MODALS (ABOUT, ACADEMICS, FACULTY, CONTACT)
// ==========================================================================
function openDepartmentModal(type) {
  const modal = document.getElementById('deptInfoModal');
  const title = document.getElementById('infoModalTitle');
  const body = document.getElementById('infoModalBody');
  const icon = document.getElementById('infoModalIcon');

  if (type === 'about') {
    icon.className = 'fa-solid fa-university modal-title-icon';
    title.innerText = 'About AI & Data Science Department';
    body.innerHTML = `
      <p>The Department of Artificial Intelligence & Data Science is a premier center of excellence dedicated to foundational AI research, cutting-edge transformer systems, high-performance distributed computing, and ethical data science.</p>
      <h4>Department Highlights:</h4>
      <ul>
        <li><strong>Ranked #1 Regionally</strong> in specialized AI and machine learning engineering education.</li>
        <li><strong>1.4 PFLOPS NVIDIA DGX Compute Supercluster</strong> accessible directly to undergraduate researchers.</li>
        <li>Active collaborative research with Google DeepMind, Microsoft Azure AI, and Stanford AI Lab.</li>
        <li>100% faculty hold Ph.D. degrees from prestigious global universities.</li>
      </ul>
    `;
  } else if (type === 'academics') {
    icon.className = 'fa-solid fa-graduation-cap modal-title-icon';
    title.innerText = 'Academic Programs & Research Tracks';
    body.innerHTML = `
      <p>Our curriculum is continuously benchmarked against Silicon Valley standards and IEEE AI curricula:</p>
      <ul>
        <li><strong>B.Tech in Artificial Intelligence & Data Science (4 Years)</strong></li>
        <li><strong>Dual-Degree M.Tech in Foundation Models & Autonomous Systems</strong></li>
        <li><strong>Ph.D. Research Fellowships in Generative AI & Robotics</strong></li>
      </ul>
      <p>All laboratory practicals run on dedicated GPU servers with PyTorch 2.5, JAX, CUDA 12.4, and Triton kernels.</p>
    `;
  } else if (type === 'faculty') {
    icon.className = 'fa-solid fa-chalkboard-user modal-title-icon';
    title.innerText = 'Faculty Directory & Office Hours';
    body.innerHTML = `
      ${AIDS_KNOWLEDGE_BASE.faculty}
      <br>
      <p>For urgent scheduling, reach out to the Department Secretary at <code>aids-office@university.edu</code>.</p>
    `;
  } else if (type === 'contact') {
    icon.className = 'fa-solid fa-headset modal-title-icon';
    title.innerText = 'Tech Block IV Helpdesk & Office Hours';
    body.innerHTML = `
      <p>Connect with the AI&DS student helpdesk and academic advising team:</p>
      <ul>
        <li><strong>Physical Location:</strong> Tech Block IV, Floor 4, Room 402 & 403</li>
        <li><strong>Student Office Hours:</strong> Monday through Friday, 09:00 AM – 05:00 PM</li>
        <li><strong>Direct Support Email:</strong> <code>aids-support@university.edu</code></li>
        <li><strong>DGX Cluster Support:</strong> <code>gpu-admin@university.edu</code></li>
      </ul>
      <div style="margin-top: 1rem;">
        <button class="btn btn-primary" onclick="showToast('Office Hour Appointment requested with Dr. Vance for Thursday 02:30 PM.')">
          Confirm Consultation Slot
        </button>
      </div>
    `;
  }

  modal.style.display = 'flex';
}

function setupModals() {
  const closeDeptModalBtn = document.getElementById('closeInfoModalBtn');
  const closeDeptFooterBtn = document.getElementById('closeInfoModalFooterBtn');
  const deptModal = document.getElementById('deptInfoModal');

  [closeDeptModalBtn, closeDeptFooterBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
      deptModal.style.display = 'none';
    });
  });

  const closeArticleModalBtn = document.getElementById('closeArticleModalBtn');
  const closeArticleFooterBtn = document.getElementById('closeArticleModalFooterBtn');
  const articleModal = document.getElementById('newsArticleModal');

  [closeArticleModalBtn, closeArticleFooterBtn].forEach(btn => {
    btn?.addEventListener('click', () => {
      articleModal.style.display = 'none';
    });
  });

  // Close modals on outside backdrop click
  window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-backdrop')) {
      e.target.style.display = 'none';
    }
  });
}

// ==========================================================================
// 6. IRIS ORB MICRO-INTERACTIONS
// ==========================================================================
function setupIrisOrb() {
  const orb = document.getElementById('irisInteractiveOrb');
  if (!orb) return;

  orb.addEventListener('click', () => {
    showToast('Iris Core: "Ready for inference! Ask me anything about AI&DS."');
    handleUserMessage("Hello Iris! What can you help me with today?");
  });
}

// ==========================================================================
// 7. REAL-TIME COMPUTE LOAD SIMULATION
// ==========================================================================
function simulateComputeFluctuations() {
  const computeLoadVal = document.getElementById('computeLoadVal');
  const computeProgressBar = document.getElementById('computeProgressBar');
  const availableJobs = document.getElementById('availableJobsCount');

  setInterval(() => {
    if (computeLoadVal && computeProgressBar) {
      // Gentle fluctuation between 64% and 78%
      const randomLoad = Math.floor(64 + Math.random() * 14);
      computeLoadVal.innerText = `${randomLoad}% Active`;
      computeProgressBar.style.width = `${randomLoad}%`;
      if (availableJobs) {
        availableJobs.innerText = Math.max(8, Math.floor(20 - (randomLoad / 5)));
      }
    }
  }, 12000);
}

// ==========================================================================
// UTILITY HELPERS
// ==========================================================================
function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-success"></i> <span>${escapeHtml(message)}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function escapeHtml(string) {
  return String(string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
