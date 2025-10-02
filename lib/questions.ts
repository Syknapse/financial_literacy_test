export type Question = {
  id: number;
  category: 'knowledge' | 'behaviour' | 'attitude';
  question: string;
  options: string[];
  correct: number[]; // indices of acceptable answers
  explanation: string;
}

// Source: based on user's uploaded "Financial Literacy Test" document. 
// (See the project README and uploaded PDF for full methodology and source.) fileciteturn1file0

const QUESTIONS: Question[] = [
  {
    id: 1,
    category: 'knowledge',
    question: 'If prices rise by 3% per year and your income stays the same, what happens to your purchasing power?',
    options: ['It increases', 'It decreases', 'It stays the same', 'It depends on the currency'],
    correct: [1],
    explanation: 'Inflation means prices go up, so the same amount of money buys less over time. If income does not increase, purchasing power falls.'
  },
  {
    id: 2,
    category: 'knowledge',
    question: 'Would you prefer €100 today or €100 in one year?',
    options: ['€100 today', '€100 in one year', 'No difference', 'Depends on the interest rate'],
    correct: [0],
    explanation: 'Money today is worth more because you can use it, save it, or invest it to earn interest. Waiting without compensation loses value.'
  },
  {
    id: 3,
    category: 'knowledge',
    question: 'If you put €100 in a savings account at 2% simple interest per year, how much will you have after one year?',
    options: ['€100', '€102', '€104', '€110'],
    correct: [1],
    explanation: 'Simple interest is calculated on the principal only: 2% of €100 = €2, so total = €102.'
  },
  {
    id: 4,
    category: 'knowledge',
    question: 'If the same €100 earns 2% compound interest per year, how much will you have after two years (rounded)?',
    options: ['€104.00', '€104.04', '€106.00', '€110.00'],
    correct: [1],
    explanation: 'Compound interest: Year1 = €102. Year2 = 2% of €102 = €2.04 => €104.04. Compound interest earns interest on interest.'
  },
  {
    id: 5,
    category: 'knowledge',
    question: 'Which statement is most accurate?',
    options: ['Higher returns always mean lower risk', 'Higher returns usually require higher risk', 'Low risk and high return often go together', 'Risk and return are unrelated'],
    correct: [1],
    explanation: 'Higher returns generally require taking higher risk. Safer investments typically provide lower returns.'
  },
  {
    id: 6,
    category: 'knowledge',
    question: 'Why is it usually safer to invest in a mix of assets rather than a single stock?',
    options: ['It guarantees higher profit', 'It spreads the risk', 'It reduces inflation', 'It avoids taxation'],
    correct: [1],
    explanation: 'Diversification spreads risk: losses in one asset can be offset by gains in another, reducing overall volatility.'
  },
  {
    id: 7,
    category: 'knowledge',
    question: 'If you borrow €100 at 10% interest, how much do you owe after one year?',
    options: ['€100', '€105', '€110', '€120'],
    correct: [2],
    explanation: '10% of €100 is €10; you owe €100 + €10 = €110. High-interest debt grows quickly.'
  },
  {
    id: 8,
    category: 'knowledge',
    question: 'Which of the following is a secure practice when using mobile banking?',
    options: ['Writing down your PIN and keeping it in your wallet', 'Using two-factor authentication', 'Using public Wi-Fi for transactions', 'Sharing your password with family'],
    correct: [1],
    explanation: 'Two-factor authentication (2FA) adds an extra security layer (code or app). Writing down PINs or using public Wi‑Fi increases risk.'
  },
  {
    id: 9,
    category: 'knowledge',
    question: 'Why is it important to start saving for retirement early?',
    options: ['Because banks require it', 'Because compound interest increases long-term growth', 'Because inflation decreases', 'Because governments guarantee high pensions'],
    correct: [1],
    explanation: 'Starting early leverages compound interest: returns accumulate over time, growing savings significantly across decades.'
  },
  {
    id: 10,
    category: 'knowledge',
    question: 'Which of the following is a common sign of a financial scam?',
    options: ['Promises of guaranteed high returns with no risk', 'Detailed terms and conditions', 'Regulated providers', 'Secure payment methods'],
    correct: [0],
    explanation: 'Guaranteed high returns with no risk is a classic scam red flag. Real investments carry risk.'
  },
  // Behaviour 11-19
  {
    id: 11,
    category: 'behaviour',
    question: 'Do you keep track of your income and expenses regularly?',
    options: ['Yes, always', 'Sometimes', 'Rarely', 'Never'],
    correct: [0],
    explanation: 'Recording income and expenses helps you budget, spot leaks, and achieve financial goals.'
  },
  {
    id: 12,
    category: 'behaviour',
    question: 'When it comes to bills:',
    options: ['I always pay on time', 'I usually pay on time', 'I sometimes miss payments', 'I often miss payments'],
    correct: [0],
    explanation: 'Paying on time avoids fees, protects credit record, and reduces stress.'
  },
  {
    id: 13,
    category: 'behaviour',
    question: 'Do you set aside money regularly (monthly/weekly) for savings?',
    options: ['Yes, regularly', 'Sometimes', 'Rarely', 'Never'],
    correct: [0],
    explanation: 'Regular saving builds a cushion and supports long-term goals.'
  },
  {
    id: 14,
    category: 'behaviour',
    question: 'If you lost your main income, how long could you cover basic expenses with your savings?',
    options: ['Less than a week', 'About a month', '3–6 months', 'More than 6 months'],
    correct: [2,3],
    explanation: 'A financial cushion of at least 3 months is recommended for resilience; more is better.'
  },
  {
    id: 15,
    category: 'behaviour',
    question: 'When you face a shortfall, do you:',
    options: ['Use savings', 'Borrow from friends/family', 'Use credit cards or loans', 'Delay paying bills'],
    correct: [0],
    explanation: 'Using savings avoids interest and preserves financial stability; borrowing or delaying payments can create risk.'
  },
  {
    id: 16,
    category: 'behaviour',
    question: 'When choosing a financial product (loan, insurance, etc.), do you:',
    options: ['Compare several offers', 'Take the first available option', 'Rely only on advice from friends', 'Decide without checking details'],
    correct: [0],
    explanation: 'Comparing options helps find better value and avoid unfavourable terms.'
  },
  {
    id: 17,
    category: 'behaviour',
    question: 'If you use a credit card, how do you usually pay it off?',
    options: ['Pay the full balance each month', 'Pay the minimum amount', 'Carry a balance and pay interest', "I don't know"],
    correct: [0],
    explanation: 'Paying in full avoids high interest charges associated with credit card debt.'
  },
  {
    id: 18,
    category: 'behaviour',
    question: 'Do you have a plan for large future expenses (house, education, retirement)?',
    options: ['Yes, with clear goals and savings', 'Yes, somewhat', 'Not really', 'Not at all'],
    correct: [0],
    explanation: 'Clear plans and saving make large future expenses more manageable.'
  },
  {
    id: 19,
    category: 'behaviour',
    question: 'Which type of insurance is most useful for protecting your household from unexpected financial shocks?',
    options: ['Home or renter\'s insurance', 'Travel insurance only', 'Life insurance for everyone', 'Lottery tickets'],
    correct: [0],
    explanation: 'Home/renter insurance protects assets and living arrangements from accidents and theft; lottery tickets are not protection.'
  },
  // Attitudes 20-25
  {
    id: 20,
    category: 'attitude',
    question: '“I tend to live for today and let tomorrow take care of itself.”',
    options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'],
    correct: [2,3],
    explanation: 'A long-term orientation (disagreeing with the statement) tends to support savings and planning.'
  },
  {
    id: 21,
    category: 'attitude',
    question: '“I find it more satisfying to spend money than to save it.”',
    options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'],
    correct: [2,3],
    explanation: 'Preferring saving supports resilience and long-term choices.'
  },
  {
    id: 22,
    category: 'attitude',
    question: '“Money is there to be spent.”',
    options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'],
    correct: [2,3],
    explanation: 'Seeing money only as for spending makes long-term planning and cushions harder.'
  },
  {
    id: 23,
    category: 'attitude',
    question: '“I consider environmental and social impact when making financial decisions (e.g., choosing investments, products).”',
    options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'],
    correct: [0,1],
    explanation: 'Factoring sustainability is increasingly relevant; it can reduce exposure to long-term risks.'
  },
  {
    id: 24,
    category: 'attitude',
    question: 'How confident are you in handling everyday financial matters (budgeting, comparing offers, avoiding fraud)?',
    options: ['Very confident', 'Somewhat confident', 'Not very confident', 'Not confident at all'],
    correct: [0],
    explanation: 'Confidence, when backed by knowledge, helps people act and avoid poor choices. If confidence is high but unsupported by knowledge, caution is advised.'
  },
  {
    id: 25,
    category: 'attitude',
    question: '“I trust digital banking and payments as long as they are from regulated providers.”',
    options: ['Strongly agree', 'Agree', 'Disagree', 'Strongly disagree'],
    correct: [0,1],
    explanation: 'Regulated providers offer protections. Trusting only regulated services reduces fraud risk.'
  }
]

export default QUESTIONS
