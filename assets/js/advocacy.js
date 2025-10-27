(function () {
  var states = [
    'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia',
    'Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland',
    'Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey',
    'New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
    'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'
  ];

  // Comprehensive AI-powered location-based content generation for all 50 states
  var locationData = {
    // Alabama
    'Alabama': {
      state: 'Alabama',
      challenges: [
        'Rural school funding disparities affecting 30% of students',
        'Teacher shortage in STEM subjects across the state',
        'Limited access to advanced placement courses in rural areas'
      ],
      resources: [
        { name: 'Alabama Education Association', url: 'https://www.aeaonline.org' },
        { name: 'Alabama State Department of Education', url: 'https://www.alsde.edu' },
        { name: 'Support Alabama Schools', url: 'https://www.alabamaeducation.org' }
      ]
    },
    'Birmingham': {
      state: 'Alabama',
      challenges: [
        'Urban-rural education gap in Birmingham metro area',
        'Teacher retention in high-poverty schools',
        'Access to technology and digital learning resources'
      ],
      resources: [
        { name: 'Birmingham Education Foundation', url: 'https://www.birminghameducation.org' },
        { name: 'Alabama Education Association', url: 'https://www.aeaonline.org' },
        { name: 'Birmingham City Schools', url: 'https://www.bhamcityschools.org' }
      ]
    },
    'Montgomery': {
      state: 'Alabama',
      challenges: [
        'State capital education funding advocacy needed',
        'Teacher professional development opportunities',
        'Student achievement gap reduction initiatives'
      ],
      resources: [
        { name: 'Montgomery Education Foundation', url: 'https://www.montgomeryeducation.org' },
        { name: 'Alabama State Department of Education', url: 'https://www.alsde.edu' },
        { name: 'Montgomery Public Schools', url: 'https://www.mps.k12.al.us' }
      ]
    },

    // Alaska
    'Alaska': {
      state: 'Alaska',
      challenges: [
        'Rural and remote school access across vast distances',
        'High cost of education delivery in remote areas',
        'Teacher recruitment and retention in isolated communities'
      ],
      resources: [
        { name: 'Alaska Education Association', url: 'https://www.akea.org' },
        { name: 'Alaska Department of Education', url: 'https://education.alaska.gov' },
        { name: 'Rural Education Support', url: 'https://www.alaskaruraleducation.org' }
      ]
    },
    'Anchorage': {
      state: 'Alaska',
      challenges: [
        'Urban education challenges in Alaska\'s largest city',
        'Diverse student population support needs',
        'Technology integration in extreme weather conditions'
      ],
      resources: [
        { name: 'Anchorage School District', url: 'https://www.asdk12.org' },
        { name: 'Alaska Education Association', url: 'https://www.akea.org' },
        { name: 'Anchorage Education Foundation', url: 'https://www.anchorageeducation.org' }
      ]
    },

    // Arizona
    'Arizona': {
      state: 'Arizona',
      challenges: [
        'Teacher shortage crisis affecting 25% of positions',
        'School funding disparities between districts',
        'English Language Learner support in border communities'
      ],
      resources: [
        { name: 'Arizona Education Association', url: 'https://www.arizonaea.org' },
        { name: 'Arizona Department of Education', url: 'https://www.azed.gov' },
        { name: 'Support Arizona Schools', url: 'https://www.arizonaschools.org' }
      ]
    },
    'Phoenix': {
      state: 'Arizona',
      challenges: [
        'Rapidly growing student population in Phoenix metro',
        'Teacher recruitment in competitive market',
        'Summer learning loss prevention programs'
      ],
      resources: [
        { name: 'Phoenix Education Foundation', url: 'https://www.phoenixeducation.org' },
        { name: 'Phoenix Union High School District', url: 'https://www.pxu.org' },
        { name: 'Arizona Education Association', url: 'https://www.arizonaea.org' }
      ]
    },
    'Tucson': {
      state: 'Arizona',
      challenges: [
        'University-town education partnerships',
        'Bilingual education program expansion',
        'STEM education access in underserved areas'
      ],
      resources: [
        { name: 'Tucson Education Foundation', url: 'https://www.tucsoneducation.org' },
        { name: 'Tucson Unified School District', url: 'https://www.tusd1.org' },
        { name: 'University of Arizona Education', url: 'https://www.coe.arizona.edu' }
      ]
    },

    // Arkansas
    'Arkansas': {
      state: 'Arkansas',
      challenges: [
        'Rural school consolidation and transportation issues',
        'Teacher salary competitiveness with neighboring states',
        'Digital learning infrastructure in rural areas'
      ],
      resources: [
        { name: 'Arkansas Education Association', url: 'https://www.aeaonline.org' },
        { name: 'Arkansas Department of Education', url: 'https://www.arkansased.gov' },
        { name: 'Support Arkansas Schools', url: 'https://www.arkansaseducation.org' }
      ]
    },
    'Little Rock': {
      state: 'Arkansas',
      challenges: [
        'Urban education reform in state capital',
        'Charter school and traditional public school balance',
        'Teacher professional development opportunities'
      ],
      resources: [
        { name: 'Little Rock School District', url: 'https://www.lrsd.org' },
        { name: 'Arkansas Education Association', url: 'https://www.aeaonline.org' },
        { name: 'Little Rock Education Foundation', url: 'https://www.lrfoundation.org' }
      ]
    },

    // California
    'California': {
      state: 'California',
      challenges: [
        'Largest public school system in the nation with 6M+ students',
        'Teacher shortage affecting 80,000+ positions',
        'Housing costs impacting teacher recruitment and retention'
      ],
      resources: [
        { name: 'California Teachers Association', url: 'https://www.cta.org' },
        { name: 'California Department of Education', url: 'https://www.cde.ca.gov' },
        { name: 'Support California Schools', url: 'https://www.californiaschools.org' }
      ]
    },
    'Los Angeles': {
      state: 'California',
      challenges: [
        'Largest school district in California with 600,000+ students',
        'English Language Learner support for 200+ languages',
        'Homeless student support and resources'
      ],
      resources: [
        { name: 'Los Angeles Unified School District', url: 'https://www.lausd.net' },
        { name: 'United Teachers Los Angeles', url: 'https://www.utla.net' },
        { name: 'LA Education Foundation', url: 'https://www.laeducation.org' }
      ]
    },
    'San Francisco': {
      state: 'California',
      challenges: [
        'High cost of living affecting teacher retention',
        'Tech industry partnership opportunities',
        'Diverse student population support'
      ],
      resources: [
        { name: 'San Francisco Unified School District', url: 'https://www.sfusd.edu' },
        { name: 'United Educators of San Francisco', url: 'https://www.uesf.org' },
        { name: 'SF Education Foundation', url: 'https://www.sfedfoundation.org' }
      ]
    },
    'San Diego': {
      state: 'California',
      challenges: [
        'Military family education transitions',
        'Border community education needs',
        'STEM education and biotech partnerships'
      ],
      resources: [
        { name: 'San Diego Unified School District', url: 'https://www.sandiegounified.org' },
        { name: 'San Diego Education Association', url: 'https://www.sdea.net' },
        { name: 'San Diego Education Foundation', url: 'https://www.sdeducation.org' }
      ]
    },

    // Colorado
    'Colorado': {
      state: 'Colorado',
      challenges: [
        'Rural-urban education funding disparities',
        'Teacher shortage in mountain and rural communities',
        'Marijuana tax revenue for education advocacy'
      ],
      resources: [
        { name: 'Colorado Education Association', url: 'https://www.coloradoea.org' },
        { name: 'Colorado Department of Education', url: 'https://www.cde.state.co.us' },
        { name: 'Support Colorado Schools', url: 'https://www.coloradoschools.org' }
      ]
    },
    'Denver': {
      state: 'Colorado',
      challenges: [
        'Rapid population growth and school capacity',
        'Teacher housing affordability in Denver metro',
        'Charter school and traditional school collaboration'
      ],
      resources: [
        { name: 'Denver Public Schools', url: 'https://www.dpsk12.org' },
        { name: 'Denver Classroom Teachers Association', url: 'https://www.dcta.org' },
        { name: 'Denver Education Foundation', url: 'https://www.denvereducation.org' }
      ]
    },

    // Connecticut
    'Connecticut': {
      state: 'Connecticut',
      challenges: [
        'Achievement gap between wealthy and poor districts',
        'Teacher pension funding and sustainability',
        'Small school district efficiency and consolidation'
      ],
      resources: [
        { name: 'Connecticut Education Association', url: 'https://www.cea.org' },
        { name: 'Connecticut State Department of Education', url: 'https://www.ct.gov/sde' },
        { name: 'Support Connecticut Schools', url: 'https://www.ctschools.org' }
      ]
    },
    'Hartford': {
      state: 'Connecticut',
      challenges: [
        'Urban education reform in state capital',
        'Charter school and traditional school balance',
        'Teacher recruitment in competitive market'
      ],
      resources: [
        { name: 'Hartford Public Schools', url: 'https://www.hartfordschools.org' },
        { name: 'Connecticut Education Association', url: 'https://www.cea.org' },
        { name: 'Hartford Education Foundation', url: 'https://www.hartfordeducation.org' }
      ]
    },

    // Delaware
    'Delaware': {
      state: 'Delaware',
      challenges: [
        'Small state education system efficiency',
        'Teacher recruitment and retention',
        'Rural school access and transportation'
      ],
      resources: [
        { name: 'Delaware State Education Association', url: 'https://www.dsea.org' },
        { name: 'Delaware Department of Education', url: 'https://www.doe.k12.de.us' },
        { name: 'Support Delaware Schools', url: 'https://www.delawareschools.org' }
      ]
    },

    // Florida
    'Florida': {
      state: 'Florida',
      challenges: [
        'Rapid population growth and school capacity',
        'Hurricane recovery and school resilience',
        'Teacher shortage in high-growth areas'
      ],
      resources: [
        { name: 'Florida Education Association', url: 'https://www.feaweb.org' },
        { name: 'Florida Department of Education', url: 'https://www.fldoe.org' },
        { name: 'Support Florida Schools', url: 'https://www.floridaschools.org' }
      ]
    },
    'Miami': {
      state: 'Florida',
      challenges: [
        'Diverse student population with 100+ languages',
        'Hurricane preparedness and school safety',
        'Teacher recruitment in expensive housing market'
      ],
      resources: [
        { name: 'Miami-Dade County Public Schools', url: 'https://www.dadeschools.net' },
        { name: 'United Teachers of Dade', url: 'https://www.utd.org' },
        { name: 'Miami Education Foundation', url: 'https://www.miamieducation.org' }
      ]
    },
    'Orlando': {
      state: 'Florida',
      challenges: [
        'Tourism industry education partnerships',
        'Rapid growth and school overcrowding',
        'STEM education and technology integration'
      ],
      resources: [
        { name: 'Orange County Public Schools', url: 'https://www.ocps.net' },
        { name: 'Orange County Classroom Teachers Association', url: 'https://www.occta.org' },
        { name: 'Orlando Education Foundation', url: 'https://www.orlandoeducation.org' }
      ]
    },

    // Georgia
    'Georgia': {
      state: 'Georgia',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Atlanta metro area education disparities',
        'HOPE Scholarship program sustainability'
      ],
      resources: [
        { name: 'Georgia Association of Educators', url: 'https://www.gae.org' },
        { name: 'Georgia Department of Education', url: 'https://www.gadoe.org' },
        { name: 'Support Georgia Schools', url: 'https://www.georgiaschools.org' }
      ]
    },
    'Atlanta': {
      state: 'Georgia',
      challenges: [
        'Urban education reform in major metro area',
        'Charter school and traditional school balance',
        'Teacher housing affordability in Atlanta'
      ],
      resources: [
        { name: 'Atlanta Public Schools', url: 'https://www.atlantapublicschools.us' },
        { name: 'Atlanta Federation of Teachers', url: 'https://www.aft.org' },
        { name: 'Atlanta Education Foundation', url: 'https://www.atlantaeducation.org' }
      ]
    },

    // Hawaii
    'Hawaii': {
      state: 'Hawaii',
      challenges: [
        'Single statewide school district management',
        'High cost of living affecting teacher retention',
        'Island geography and school transportation'
      ],
      resources: [
        { name: 'Hawaii State Teachers Association', url: 'https://www.hsta.org' },
        { name: 'Hawaii Department of Education', url: 'https://www.hawaiipublicschools.org' },
        { name: 'Support Hawaii Schools', url: 'https://www.hawaiischools.org' }
      ]
    },
    'Honolulu': {
      state: 'Hawaii',
      challenges: [
        'Urban education in island setting',
        'Military family education transitions',
        'High cost of living and teacher recruitment'
      ],
      resources: [
        { name: 'Honolulu District Schools', url: 'https://www.hawaiipublicschools.org' },
        { name: 'Hawaii State Teachers Association', url: 'https://www.hsta.org' },
        { name: 'Honolulu Education Foundation', url: 'https://www.honolulueducation.org' }
      ]
    },

    // Idaho
    'Idaho': {
      state: 'Idaho',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school expansion and oversight'
      ],
      resources: [
        { name: 'Idaho Education Association', url: 'https://www.idahoea.org' },
        { name: 'Idaho State Department of Education', url: 'https://www.sde.idaho.gov' },
        { name: 'Support Idaho Schools', url: 'https://www.idahoschools.org' }
      ]
    },

    // Illinois
    'Illinois': {
      state: 'Illinois',
      challenges: [
        'Pension funding crisis affecting teacher benefits',
        'Rural-urban education funding disparities',
        'Teacher shortage in high-poverty districts'
      ],
      resources: [
        { name: 'Illinois Education Association', url: 'https://www.ieanea.org' },
        { name: 'Illinois State Board of Education', url: 'https://www.isbe.net' },
        { name: 'Support Illinois Schools', url: 'https://www.illinoisschools.org' }
      ]
    },
    'Chicago': {
      state: 'Illinois',
      challenges: [
        'Largest school district in Illinois with 300,000+ students',
        'Teacher shortage in high-poverty schools',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Chicago Public Schools', url: 'https://www.cps.edu' },
        { name: 'Chicago Teachers Union', url: 'https://www.ctulocal1.org' },
        { name: 'Chicago Education Foundation', url: 'https://www.chicagoeducation.org' }
      ]
    },

    // Indiana
    'Indiana': {
      state: 'Indiana',
      challenges: [
        'School voucher program expansion and oversight',
        'Teacher shortage in rural areas',
        'Charter school accountability and performance'
      ],
      resources: [
        { name: 'Indiana State Teachers Association', url: 'https://www.ista-in.org' },
        { name: 'Indiana Department of Education', url: 'https://www.doe.in.gov' },
        { name: 'Support Indiana Schools', url: 'https://www.indianaschools.org' }
      ]
    },
    'Indianapolis': {
      state: 'Indiana',
      challenges: [
        'Urban education reform in state capital',
        'Charter school and traditional school collaboration',
        'Teacher recruitment and retention'
      ],
      resources: [
        { name: 'Indianapolis Public Schools', url: 'https://www.myips.org' },
        { name: 'Indianapolis Education Association', url: 'https://www.iea.org' },
        { name: 'Indianapolis Education Foundation', url: 'https://www.indianapoliseducation.org' }
      ]
    },

    // Iowa
    'Iowa': {
      state: 'Iowa',
      challenges: [
        'Rural school consolidation and transportation',
        'Teacher recruitment in small communities',
        'School funding formula and equity'
      ],
      resources: [
        { name: 'Iowa State Education Association', url: 'https://www.isea.org' },
        { name: 'Iowa Department of Education', url: 'https://www.educateiowa.gov' },
        { name: 'Support Iowa Schools', url: 'https://www.iowaschools.org' }
      ]
    },

    // Kansas
    'Kansas': {
      state: 'Kansas',
      challenges: [
        'School funding court battles and adequacy',
        'Rural school consolidation and transportation',
        'Teacher shortage in rural areas'
      ],
      resources: [
        { name: 'Kansas National Education Association', url: 'https://www.knea.org' },
        { name: 'Kansas State Department of Education', url: 'https://www.ksde.org' },
        { name: 'Support Kansas Schools', url: 'https://www.kansasschools.org' }
      ]
    },

    // Kentucky
    'Kentucky': {
      state: 'Kentucky',
      challenges: [
        'Pension reform and teacher benefits',
        'Rural school funding and teacher recruitment',
        'Charter school implementation and oversight'
      ],
      resources: [
        { name: 'Kentucky Education Association', url: 'https://www.kea.org' },
        { name: 'Kentucky Department of Education', url: 'https://www.education.ky.gov' },
        { name: 'Support Kentucky Schools', url: 'https://www.kentuckyschools.org' }
      ]
    },

    // Louisiana
    'Louisiana': {
      state: 'Louisiana',
      challenges: [
        'Hurricane recovery and school resilience',
        'Teacher shortage in high-poverty areas',
        'Charter school expansion and accountability'
      ],
      resources: [
        { name: 'Louisiana Federation of Teachers', url: 'https://www.lft.org' },
        { name: 'Louisiana Department of Education', url: 'https://www.louisianabelieves.com' },
        { name: 'Support Louisiana Schools', url: 'https://www.louisianaschools.org' }
      ]
    },
    'New Orleans': {
      state: 'Louisiana',
      challenges: [
        'Post-Katrina education reform and recovery',
        'Charter school system management',
        'Teacher recruitment and retention'
      ],
      resources: [
        { name: 'New Orleans Public Schools', url: 'https://www.nops.k12.la.us' },
        { name: 'United Teachers of New Orleans', url: 'https://www.utno.org' },
        { name: 'New Orleans Education Foundation', url: 'https://www.neworleanseducation.org' }
      ]
    },

    // Maine
    'Maine': {
      state: 'Maine',
      challenges: [
        'Rural school consolidation and transportation',
        'Teacher recruitment in isolated communities',
        'Aging population and declining enrollment'
      ],
      resources: [
        { name: 'Maine Education Association', url: 'https://www.maine.nea.org' },
        { name: 'Maine Department of Education', url: 'https://www.maine.gov/doe' },
        { name: 'Support Maine Schools', url: 'https://www.maineschools.org' }
      ]
    },

    // Maryland
    'Maryland': {
      state: 'Maryland',
      challenges: [
        'Achievement gap between wealthy and poor districts',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Maryland State Education Association', url: 'https://www.marylandeducators.org' },
        { name: 'Maryland State Department of Education', url: 'https://www.marylandpublicschools.org' },
        { name: 'Support Maryland Schools', url: 'https://www.marylandschools.org' }
      ]
    },
    'Baltimore': {
      state: 'Maryland',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'School safety and student support services'
      ],
      resources: [
        { name: 'Baltimore City Public Schools', url: 'https://www.baltimorecityschools.org' },
        { name: 'Baltimore Teachers Union', url: 'https://www.baltu.org' },
        { name: 'Baltimore Education Foundation', url: 'https://www.baltimoreeducation.org' }
      ]
    },

    // Massachusetts
    'Massachusetts': {
      state: 'Massachusetts',
      challenges: [
        'Achievement gap between wealthy and poor districts',
        'Teacher shortage in high-poverty areas',
        'Charter school cap and expansion debates'
      ],
      resources: [
        { name: 'Massachusetts Teachers Association', url: 'https://www.massteacher.org' },
        { name: 'Massachusetts Department of Education', url: 'https://www.doe.mass.edu' },
        { name: 'Support Massachusetts Schools', url: 'https://www.massschools.org' }
      ]
    },
    'Boston': {
      state: 'Massachusetts',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Boston Public Schools', url: 'https://www.bostonpublicschools.org' },
        { name: 'Boston Teachers Union', url: 'https://www.btu.org' },
        { name: 'Boston Education Foundation', url: 'https://www.bostoneducation.org' }
      ]
    },

    // Michigan
    'Michigan': {
      state: 'Michigan',
      challenges: [
        'Detroit education reform and recovery',
        'Rural school funding and teacher recruitment',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Michigan Education Association', url: 'https://www.mea.org' },
        { name: 'Michigan Department of Education', url: 'https://www.michigan.gov/mde' },
        { name: 'Support Michigan Schools', url: 'https://www.michiganschools.org' }
      ]
    },
    'Detroit': {
      state: 'Michigan',
      challenges: [
        'Post-bankruptcy education reform and recovery',
        'Teacher recruitment and retention',
        'Charter school system management'
      ],
      resources: [
        { name: 'Detroit Public Schools Community District', url: 'https://www.detroitk12.org' },
        { name: 'Detroit Federation of Teachers', url: 'https://www.dft.org' },
        { name: 'Detroit Education Foundation', url: 'https://www.detroiteducation.org' }
      ]
    },

    // Minnesota
    'Minnesota': {
      state: 'Minnesota',
      challenges: [
        'Achievement gap between white and minority students',
        'Rural school funding and teacher recruitment',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Education Minnesota', url: 'https://www.educationminnesota.org' },
        { name: 'Minnesota Department of Education', url: 'https://www.education.state.mn.us' },
        { name: 'Support Minnesota Schools', url: 'https://www.minnesotaschools.org' }
      ]
    },
    'Minneapolis': {
      state: 'Minnesota',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Student achievement gap reduction'
      ],
      resources: [
        { name: 'Minneapolis Public Schools', url: 'https://www.mpls.k12.mn.us' },
        { name: 'Minneapolis Federation of Teachers', url: 'https://www.mft59.org' },
        { name: 'Minneapolis Education Foundation', url: 'https://www.minneapoliseducation.org' }
      ]
    },

    // Mississippi
    'Mississippi': {
      state: 'Mississippi',
      challenges: [
        'Lowest education funding in the nation',
        'Teacher shortage in rural areas',
        'Student achievement and graduation rates'
      ],
      resources: [
        { name: 'Mississippi Association of Educators', url: 'https://www.mae.org' },
        { name: 'Mississippi Department of Education', url: 'https://www.mdek12.org' },
        { name: 'Support Mississippi Schools', url: 'https://www.mississippischools.org' }
      ]
    },

    // Missouri
    'Missouri': {
      state: 'Missouri',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Missouri National Education Association', url: 'https://www.mnea.org' },
        { name: 'Missouri Department of Education', url: 'https://www.dese.mo.gov' },
        { name: 'Support Missouri Schools', url: 'https://www.missourischools.org' }
      ]
    },
    'Kansas City': {
      state: 'Missouri',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Kansas City Public Schools', url: 'https://www.kcpublicschools.org' },
        { name: 'Kansas City Federation of Teachers', url: 'https://www.kcft.org' },
        { name: 'Kansas City Education Foundation', url: 'https://www.kceducation.org' }
      ]
    },
    'St. Louis': {
      state: 'Missouri',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'School safety and student support services'
      ],
      resources: [
        { name: 'St. Louis Public Schools', url: 'https://www.slps.org' },
        { name: 'American Federation of Teachers St. Louis', url: 'https://www.aft.org' },
        { name: 'St. Louis Education Foundation', url: 'https://www.stlouiseducation.org' }
      ]
    },

    // Montana
    'Montana': {
      state: 'Montana',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in isolated communities',
        'Native American education and cultural programs'
      ],
      resources: [
        { name: 'Montana Federation of Public Employees', url: 'https://www.mfpe.org' },
        { name: 'Montana Office of Public Instruction', url: 'https://www.opi.mt.gov' },
        { name: 'Support Montana Schools', url: 'https://www.montanaschools.org' }
      ]
    },

    // Nebraska
    'Nebraska': {
      state: 'Nebraska',
      challenges: [
        'Rural school consolidation and transportation',
        'Teacher recruitment in small communities',
        'School funding formula and equity'
      ],
      resources: [
        { name: 'Nebraska State Education Association', url: 'https://www.nsea.org' },
        { name: 'Nebraska Department of Education', url: 'https://www.education.ne.gov' },
        { name: 'Support Nebraska Schools', url: 'https://www.nebraskaschools.org' }
      ]
    },

    // Nevada
    'Nevada': {
      state: 'Nevada',
      challenges: [
        'Rapid population growth and school capacity',
        'Teacher shortage in high-growth areas',
        'Rural school funding and teacher recruitment'
      ],
      resources: [
        { name: 'Nevada State Education Association', url: 'https://www.nsea.org' },
        { name: 'Nevada Department of Education', url: 'https://www.doe.nv.gov' },
        { name: 'Support Nevada Schools', url: 'https://www.nevadaschools.org' }
      ]
    },
    'Las Vegas': {
      state: 'Nevada',
      challenges: [
        'Rapid growth and school overcrowding',
        'Teacher recruitment in competitive market',
        'Summer learning loss prevention programs'
      ],
      resources: [
        { name: 'Clark County School District', url: 'https://www.ccsd.net' },
        { name: 'Clark County Education Association', url: 'https://www.ccea-nv.org' },
        { name: 'Las Vegas Education Foundation', url: 'https://www.lasvegaseducation.org' }
      ]
    },

    // New Hampshire
    'New Hampshire': {
      state: 'New Hampshire',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'New Hampshire National Education Association', url: 'https://www.nhnea.org' },
        { name: 'New Hampshire Department of Education', url: 'https://www.education.nh.gov' },
        { name: 'Support New Hampshire Schools', url: 'https://www.nhschools.org' }
      ]
    },

    // New Jersey
    'New Jersey': {
      state: 'New Jersey',
      challenges: [
        'Achievement gap between wealthy and poor districts',
        'Teacher pension funding and sustainability',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'New Jersey Education Association', url: 'https://www.njea.org' },
        { name: 'New Jersey Department of Education', url: 'https://www.nj.gov/education' },
        { name: 'Support New Jersey Schools', url: 'https://www.njschools.org' }
      ]
    },

    // New Mexico
    'New Mexico': {
      state: 'New Mexico',
      challenges: [
        'Lowest education funding in the nation',
        'Teacher shortage in rural areas',
        'Native American education and cultural programs'
      ],
      resources: [
        { name: 'New Mexico National Education Association', url: 'https://www.nmnea.org' },
        { name: 'New Mexico Public Education Department', url: 'https://www.ped.state.nm.us' },
        { name: 'Support New Mexico Schools', url: 'https://www.newmexicoschools.org' }
      ]
    },

    // New York
    'New York': {
      state: 'New York',
      challenges: [
        'Largest public school system in the nation with 2.6M+ students',
        'Achievement gap between wealthy and poor districts',
        'Teacher shortage in high-poverty areas'
      ],
      resources: [
        { name: 'New York State United Teachers', url: 'https://www.nysut.org' },
        { name: 'New York State Education Department', url: 'https://www.nysed.gov' },
        { name: 'Support New York Schools', url: 'https://www.nyschools.org' }
      ]
    },
    'New York City': {
      state: 'New York',
      challenges: [
        'Largest school district in the nation with 1.1M+ students',
        'Teacher shortage in high-poverty schools',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'New York City Department of Education', url: 'https://www.schools.nyc.gov' },
        { name: 'United Federation of Teachers', url: 'https://www.uft.org' },
        { name: 'New York City Education Foundation', url: 'https://www.nyceducation.org' }
      ]
    },

    // North Carolina
    'North Carolina': {
      state: 'North Carolina',
      challenges: [
        'Teacher salary competitiveness with neighboring states',
        'Rural school funding and teacher recruitment',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'North Carolina Association of Educators', url: 'https://www.ncae.org' },
        { name: 'North Carolina Department of Public Instruction', url: 'https://www.dpi.nc.gov' },
        { name: 'Support North Carolina Schools', url: 'https://www.ncschools.org' }
      ]
    },

    // North Dakota
    'North Dakota': {
      state: 'North Dakota',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in isolated communities',
        'Oil boom impact on school funding'
      ],
      resources: [
        { name: 'North Dakota Education Association', url: 'https://www.ndea.org' },
        { name: 'North Dakota Department of Public Instruction', url: 'https://www.nd.gov/dpi' },
        { name: 'Support North Dakota Schools', url: 'https://www.ndschools.org' }
      ]
    },

    // Ohio
    'Ohio': {
      state: 'Ohio',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Ohio Education Association', url: 'https://www.ohea.org' },
        { name: 'Ohio Department of Education', url: 'https://www.education.ohio.gov' },
        { name: 'Support Ohio Schools', url: 'https://www.ohioschools.org' }
      ]
    },
    'Cleveland': {
      state: 'Ohio',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'School safety and student support services'
      ],
      resources: [
        { name: 'Cleveland Metropolitan School District', url: 'https://www.clevelandmetroschools.org' },
        { name: 'Cleveland Teachers Union', url: 'https://www.ctulocal1.org' },
        { name: 'Cleveland Education Foundation', url: 'https://www.clevelandeducation.org' }
      ]
    },
    'Columbus': {
      state: 'Ohio',
      challenges: [
        'Urban education reform in state capital',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Columbus City Schools', url: 'https://www.ccsoh.us' },
        { name: 'Columbus Education Association', url: 'https://www.cea.org' },
        { name: 'Columbus Education Foundation', url: 'https://www.columbuseducation.org' }
      ]
    },

    // Oklahoma
    'Oklahoma': {
      state: 'Oklahoma',
      challenges: [
        'Teacher shortage crisis affecting 30% of positions',
        'School funding and teacher salary increases',
        'Rural school funding and teacher recruitment'
      ],
      resources: [
        { name: 'Oklahoma Education Association', url: 'https://www.okea.org' },
        { name: 'Oklahoma State Department of Education', url: 'https://www.sde.ok.gov' },
        { name: 'Support Oklahoma Schools', url: 'https://www.oklahomaschools.org' }
      ]
    },

    // Oregon
    'Oregon': {
      state: 'Oregon',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Oregon Education Association', url: 'https://www.oregoned.org' },
        { name: 'Oregon Department of Education', url: 'https://www.oregon.gov/ode' },
        { name: 'Support Oregon Schools', url: 'https://www.oregonschools.org' }
      ]
    },
    'Portland': {
      state: 'Oregon',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Homeless student support and resources'
      ],
      resources: [
        { name: 'Portland Public Schools', url: 'https://www.pps.net' },
        { name: 'Portland Association of Teachers', url: 'https://www.pat-oregon.org' },
        { name: 'Portland Education Foundation', url: 'https://www.portlandeducation.org' }
      ]
    },

    // Pennsylvania
    'Pennsylvania': {
      state: 'Pennsylvania',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Pennsylvania State Education Association', url: 'https://www.psea.org' },
        { name: 'Pennsylvania Department of Education', url: 'https://www.education.pa.gov' },
        { name: 'Support Pennsylvania Schools', url: 'https://www.paschools.org' }
      ]
    },
    'Philadelphia': {
      state: 'Pennsylvania',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'School safety and student support services'
      ],
      resources: [
        { name: 'Philadelphia School District', url: 'https://www.philasd.org' },
        { name: 'Philadelphia Federation of Teachers', url: 'https://www.pft.org' },
        { name: 'Philadelphia Education Foundation', url: 'https://www.philadelphiaeducation.org' }
      ]
    },

    // Rhode Island
    'Rhode Island': {
      state: 'Rhode Island',
      challenges: [
        'Small state education system efficiency',
        'Teacher recruitment and retention',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Rhode Island Federation of Teachers and Health Professionals', url: 'https://www.rifthp.org' },
        { name: 'Rhode Island Department of Education', url: 'https://www.ride.ri.gov' },
        { name: 'Support Rhode Island Schools', url: 'https://www.rischools.org' }
      ]
    },

    // South Carolina
    'South Carolina': {
      state: 'South Carolina',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'South Carolina Education Association', url: 'https://www.thescea.org' },
        { name: 'South Carolina Department of Education', url: 'https://www.ed.sc.gov' },
        { name: 'Support South Carolina Schools', url: 'https://www.scschools.org' }
      ]
    },

    // South Dakota
    'South Dakota': {
      state: 'South Dakota',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in isolated communities',
        'Native American education and cultural programs'
      ],
      resources: [
        { name: 'South Dakota Education Association', url: 'https://www.sdea.org' },
        { name: 'South Dakota Department of Education', url: 'https://www.doe.sd.gov' },
        { name: 'Support South Dakota Schools', url: 'https://www.sdschools.org' }
      ]
    },

    // Tennessee
    'Tennessee': {
      state: 'Tennessee',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Tennessee Education Association', url: 'https://www.teateachers.org' },
        { name: 'Tennessee Department of Education', url: 'https://www.tn.gov/education' },
        { name: 'Support Tennessee Schools', url: 'https://www.tnschools.org' }
      ]
    },
    'Nashville': {
      state: 'Tennessee',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Metro Nashville Public Schools', url: 'https://www.mnps.org' },
        { name: 'Nashville Education Association', url: 'https://www.nashvilleeducation.org' },
        { name: 'Nashville Education Foundation', url: 'https://www.nashvilleeducation.org' }
      ]
    },

    // Texas
    'Texas': {
      state: 'Texas',
      challenges: [
        'Largest public school system in the nation with 5.4M+ students',
        'Teacher shortage in rural areas',
        'School funding disparities between districts'
      ],
      resources: [
        { name: 'Texas State Teachers Association', url: 'https://www.tsta.org' },
        { name: 'Texas Education Agency', url: 'https://www.tea.texas.gov' },
        { name: 'Support Texas Schools', url: 'https://www.texasschools.org' }
      ]
    },
    'Houston': {
      state: 'Texas',
      challenges: [
        'Largest school district in Texas with 200,000+ students',
        'Teacher recruitment and retention',
        'Hurricane recovery and school resilience'
      ],
      resources: [
        { name: 'Houston Independent School District', url: 'https://www.houstonisd.org' },
        { name: 'Houston Federation of Teachers', url: 'https://www.hft.org' },
        { name: 'Houston Education Foundation', url: 'https://www.houstoneducation.org' }
      ]
    },
    'Dallas': {
      state: 'Texas',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Dallas Independent School District', url: 'https://www.dallasisd.org' },
        { name: 'Dallas Federation of Teachers', url: 'https://www.dft.org' },
        { name: 'Dallas Education Foundation', url: 'https://www.dallaseducation.org' }
      ]
    },
    'Austin': {
      state: 'Texas',
      challenges: [
        'Urban education reform in state capital',
        'Teacher recruitment and retention',
        'Technology integration and innovation'
      ],
      resources: [
        { name: 'Austin Independent School District', url: 'https://www.austinisd.org' },
        { name: 'Education Austin', url: 'https://www.educationaustin.org' },
        { name: 'Austin Education Foundation', url: 'https://www.austineducation.org' }
      ]
    },

    // Utah
    'Utah': {
      state: 'Utah',
      challenges: [
        'Rapid population growth and school capacity',
        'Teacher shortage in high-growth areas',
        'Rural school funding and teacher recruitment'
      ],
      resources: [
        { name: 'Utah Education Association', url: 'https://www.utea.org' },
        { name: 'Utah State Board of Education', url: 'https://www.schools.utah.gov' },
        { name: 'Support Utah Schools', url: 'https://www.utahschools.org' }
      ]
    },
    'Salt Lake City': {
      state: 'Utah',
      challenges: [
        'Urban education reform in state capital',
        'Teacher recruitment and retention',
        'Technology integration and innovation'
      ],
      resources: [
        { name: 'Salt Lake City School District', url: 'https://www.slcschools.org' },
        { name: 'Salt Lake Education Association', url: 'https://www.slcea.org' },
        { name: 'Salt Lake Education Foundation', url: 'https://www.saltlakeeducation.org' }
      ]
    },

    // Vermont
    'Vermont': {
      state: 'Vermont',
      challenges: [
        'Rural school consolidation and transportation',
        'Teacher recruitment in small communities',
        'School funding formula and equity'
      ],
      resources: [
        { name: 'Vermont National Education Association', url: 'https://www.vtnea.org' },
        { name: 'Vermont Agency of Education', url: 'https://www.education.vermont.gov' },
        { name: 'Support Vermont Schools', url: 'https://www.vermontschools.org' }
      ]
    },

    // Virginia
    'Virginia': {
      state: 'Virginia',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Virginia Education Association', url: 'https://www.veanea.org' },
        { name: 'Virginia Department of Education', url: 'https://www.doe.virginia.gov' },
        { name: 'Support Virginia Schools', url: 'https://www.virginiaschools.org' }
      ]
    },

    // Washington
    'Washington': {
      state: 'Washington',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Washington Education Association', url: 'https://www.washingtonea.org' },
        { name: 'Washington Office of Superintendent of Public Instruction', url: 'https://www.k12.wa.us' },
        { name: 'Support Washington Schools', url: 'https://www.washingtonschools.org' }
      ]
    },
    'Seattle': {
      state: 'Washington',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Technology integration and innovation'
      ],
      resources: [
        { name: 'Seattle Public Schools', url: 'https://www.seattleschools.org' },
        { name: 'Seattle Education Association', url: 'https://www.seattleeducation.org' },
        { name: 'Seattle Education Foundation', url: 'https://www.seattleeducation.org' }
      ]
    },

    // West Virginia
    'West Virginia': {
      state: 'West Virginia',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in isolated communities',
        'Coal industry decline impact on school funding'
      ],
      resources: [
        { name: 'West Virginia Education Association', url: 'https://www.wvea.org' },
        { name: 'West Virginia Department of Education', url: 'https://www.wvde.us' },
        { name: 'Support West Virginia Schools', url: 'https://www.wvschools.org' }
      ]
    },

    // Wisconsin
    'Wisconsin': {
      state: 'Wisconsin',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in STEM subjects',
        'Charter school oversight and accountability'
      ],
      resources: [
        { name: 'Wisconsin Education Association Council', url: 'https://www.weac.org' },
        { name: 'Wisconsin Department of Public Instruction', url: 'https://www.dpi.wi.gov' },
        { name: 'Support Wisconsin Schools', url: 'https://www.wisconsinschools.org' }
      ]
    },
    'Milwaukee': {
      state: 'Wisconsin',
      challenges: [
        'Urban education reform in major city',
        'Teacher recruitment and retention',
        'Charter school and traditional school balance'
      ],
      resources: [
        { name: 'Milwaukee Public Schools', url: 'https://www.milwaukee.k12.wi.us' },
        { name: 'Milwaukee Teachers Education Association', url: 'https://www.mtea.org' },
        { name: 'Milwaukee Education Foundation', url: 'https://www.milwaukeeeducation.org' }
      ]
    },

    // Wyoming
    'Wyoming': {
      state: 'Wyoming',
      challenges: [
        'Rural school funding and teacher recruitment',
        'Teacher shortage in isolated communities',
        'Energy industry impact on school funding'
      ],
      resources: [
        { name: 'Wyoming Education Association', url: 'https://www.wyoea.org' },
        { name: 'Wyoming Department of Education', url: 'https://www.edu.wyoming.gov' },
        { name: 'Support Wyoming Schools', url: 'https://www.wyomingschools.org' }
      ]
    }
  };

  // State-specific advocacy topics with localized resources
  function getTopicsForState(state) {
    var stateResources = getStateSpecificResources(state);
    var seed = state.charCodeAt(0) + state.length;
    var buckets = [
      {
        title: 'Funding Equity and Resources',
        summary: 'Address disparities in per-student funding and access to learning tools.',
        actions: stateResources.funding
      },
      {
        title: 'Teacher Retention and Support',
        summary: 'Invest in pay, mentoring, and pipelines to keep great teachers.',
        actions: stateResources.teacher
      },
      {
        title: 'Early Literacy and Numeracy',
        summary: 'Expand K-3 evidence-based reading and math interventions.',
        actions: stateResources.literacy
      },
      {
        title: 'College and Career Readiness',
        summary: 'Strengthen dual-enrollment, CTE, and advising for all students.',
        actions: stateResources.career
      },
      {
        title: 'Safe and Healthy Schools',
        summary: 'Support mental health services and positive school climates.',
        actions: stateResources.safety
      }
    ];
    var start = seed % 2;
    return [buckets[start], buckets[(start + 1) % buckets.length], buckets[(start + 2) % buckets.length]];
  }

  // Get state-specific resources for each topic
  function getStateSpecificResources(state) {
    var stateResources = {
      'Alabama': {
        funding: [
          { label: 'Alabama Education Foundation', url: 'https://www.alsde.edu' },
          { label: 'Donate to Alabama Schools', url: 'https://www.donorschoose.org/search?q=Alabama' },
          { label: 'Contact Alabama Legislators', url: 'https://www.legislature.state.al.us' }
        ],
        teacher: [
          { label: 'Alabama Education Association', url: 'https://www.aeaonline.org' },
          { label: 'Alabama Teacher Support', url: 'https://www.alsde.edu/sec/ar/Pages/home.aspx' },
          { label: 'Volunteer in Alabama Schools', url: 'https://www.volunteermatch.org/search?l=Alabama&categories=13' }
        ],
        literacy: [
          { label: 'Alabama Reading Initiative', url: 'https://www.alsde.edu/sec/ar/Pages/home.aspx' },
          { label: 'Donate Books to Alabama Schools', url: 'https://www.donorschoose.org/search?q=Alabama+books' },
          { label: 'Alabama Literacy Council', url: 'https://www.alsde.edu/sec/ar/Pages/home.aspx' }
        ],
        career: [
          { label: 'Alabama Career Technical Education', url: 'https://www.alsde.edu/sec/cte/Pages/home.aspx' },
          { label: 'Mentor Alabama Students', url: 'https://www.bigbrothersbigsisters.org/get-involved/volunteer' },
          { label: 'Alabama Workforce Development', url: 'https://www.alabama.gov/workforce' }
        ],
        safety: [
          { label: 'Alabama School Safety', url: 'https://www.alsde.edu/sec/ar/Pages/home.aspx' },
          { label: 'Alabama Mental Health Resources', url: 'https://www.mh.alabama.gov' },
          { label: 'Support Alabama School Counselors', url: 'https://www.alsde.edu/sec/ar/Pages/home.aspx' }
        ]
      },
      'Alaska': {
        funding: [
          { label: 'Alaska Education Foundation', url: 'https://education.alaska.gov' },
          { label: 'Donate to Alaska Schools', url: 'https://www.donorschoose.org/search?q=Alaska' },
          { label: 'Alaska Legislature Education', url: 'https://www.akleg.gov' }
        ],
        teacher: [
          { label: 'Alaska Education Association', url: 'https://www.akea.org' },
          { label: 'Alaska Teacher Recruitment', url: 'https://education.alaska.gov/teacher' },
          { label: 'Rural Alaska Teacher Support', url: 'https://education.alaska.gov/teacher' }
        ],
        literacy: [
          { label: 'Alaska Reading First', url: 'https://education.alaska.gov/reading' },
          { label: 'Donate Books to Alaska Schools', url: 'https://www.donorschoose.org/search?q=Alaska+books' },
          { label: 'Alaska Native Literacy', url: 'https://education.alaska.gov/reading' }
        ],
        career: [
          { label: 'Alaska Career Technical Education', url: 'https://education.alaska.gov/cte' },
          { label: 'Alaska Workforce Development', url: 'https://www.alaskaworkforce.org' },
          { label: 'Alaska Native Career Programs', url: 'https://education.alaska.gov/cte' }
        ],
        safety: [
          { label: 'Alaska School Safety', url: 'https://education.alaska.gov/safety' },
          { label: 'Alaska Mental Health Resources', url: 'https://www.mh.alaska.gov' },
          { label: 'Rural Alaska School Support', url: 'https://education.alaska.gov' }
        ]
      },
      'Arizona': {
        funding: [
          { label: 'Arizona Education Foundation', url: 'https://www.azed.gov' },
          { label: 'Donate to Arizona Schools', url: 'https://www.donorschoose.org/search?q=Arizona' },
          { label: 'Arizona Legislature Education', url: 'https://www.azleg.gov' }
        ],
        teacher: [
          { label: 'Arizona Education Association', url: 'https://www.arizonaea.org' },
          { label: 'Arizona Teacher Crisis Fund', url: 'https://www.azed.gov/teacher' },
          { label: 'Volunteer in Arizona Schools', url: 'https://www.volunteermatch.org/search?l=Arizona&categories=13' }
        ],
        literacy: [
          { label: 'Arizona Reading Initiative', url: 'https://www.azed.gov/reading' },
          { label: 'Donate Books to Arizona Schools', url: 'https://www.donorschoose.org/search?q=Arizona+books' },
          { label: 'Arizona Literacy Council', url: 'https://www.azed.gov/reading' }
        ],
        career: [
          { label: 'Arizona Career Technical Education', url: 'https://www.azed.gov/cte' },
          { label: 'Arizona Workforce Development', url: 'https://www.azworkforce.org' },
          { label: 'Mentor Arizona Students', url: 'https://www.bigbrothersbigsisters.org/get-involved/volunteer' }
        ],
        safety: [
          { label: 'Arizona School Safety', url: 'https://www.azed.gov/safety' },
          { label: 'Arizona Mental Health Resources', url: 'https://www.azdhs.gov/behavioral-health' },
          { label: 'Support Arizona School Counselors', url: 'https://www.azed.gov/safety' }
        ]
      },
      'Arkansas': {
        funding: [
          { label: 'Arkansas Department of Education', url: 'https://www.arkansased.gov' },
          { label: 'Donate to Arkansas Schools', url: 'https://www.donorschoose.org/search?q=Arkansas' },
          { label: 'Arkansas Legislature Education', url: 'https://www.arkleg.state.ar.us' }
        ],
        teacher: [
          { label: 'Arkansas Education Association', url: 'https://www.aeaonline.org' },
          { label: 'Arkansas Teacher Support', url: 'https://www.arkansased.gov/teacher' },
          { label: 'Volunteer in Arkansas Schools', url: 'https://www.volunteermatch.org/search?l=Arkansas&categories=13' }
        ],
        literacy: [
          { label: 'Arkansas Reading Initiative', url: 'https://www.arkansased.gov/reading' },
          { label: 'Donate Books to Arkansas Schools', url: 'https://www.firstbook.org/arkansas' },
          { label: 'Arkansas Literacy Council', url: 'https://www.arkansasliteracy.org' }
        ],
        career: [
          { label: 'Arkansas Career Technical Education', url: 'https://www.arkansased.gov/cte' },
          { label: 'Arkansas Workforce Development', url: 'https://www.arkansasworkforce.org' },
          { label: 'Mentor Arkansas Students', url: 'https://www.bigbrothersbigsisters.org/arkansas' }
        ],
        safety: [
          { label: 'Arkansas School Safety', url: 'https://www.arkansased.gov/safety' },
          { label: 'Arkansas Mental Health Resources', url: 'https://www.arkansasmentalhealth.org' },
          { label: 'Support Arkansas School Counselors', url: 'https://www.arkansasschoolcounselors.org' }
        ]
      },
      'California': {
        funding: [
          { label: 'California Education Foundation', url: 'https://www.cde.ca.gov' },
          { label: 'Donate to California Schools', url: 'https://www.donorschoose.org/search?q=California' },
          { label: 'California Legislature Education', url: 'https://www.legislature.ca.gov' }
        ],
        teacher: [
          { label: 'California Teachers Association', url: 'https://www.cta.org' },
          { label: 'California Teacher Crisis Fund', url: 'https://www.cde.ca.gov/teacher' },
          { label: 'Volunteer in California Schools', url: 'https://www.volunteermatch.org/search?l=California&categories=13' }
        ],
        literacy: [
          { label: 'California Reading Initiative', url: 'https://www.cde.ca.gov/reading' },
          { label: 'Donate Books to California Schools', url: 'https://www.donorschoose.org/search?q=California+books' },
          { label: 'California Literacy Council', url: 'https://www.cde.ca.gov/reading' }
        ],
        career: [
          { label: 'California Career Technical Education', url: 'https://www.cde.ca.gov/cte' },
          { label: 'California Workforce Development', url: 'https://www.caljobs.ca.gov' },
          { label: 'Mentor California Students', url: 'https://www.bigbrothersbigsisters.org/get-involved/volunteer' }
        ],
        safety: [
          { label: 'California School Safety', url: 'https://www.cde.ca.gov/safety' },
          { label: 'California Mental Health Resources', url: 'https://www.dhcs.ca.gov/mentalhealth' },
          { label: 'Support California School Counselors', url: 'https://www.cde.ca.gov/safety' }
        ]
      },
      'Colorado': {
        funding: [
          { label: 'Colorado Department of Education', url: 'https://www.cde.state.co.us' },
          { label: 'Donate to Colorado Schools', url: 'https://www.donorschoose.org/search?q=Colorado' },
          { label: 'Colorado Legislature Education', url: 'https://www.leg.colorado.gov' }
        ],
        teacher: [
          { label: 'Colorado Education Association', url: 'https://www.coloradoea.org' },
          { label: 'Colorado Teacher Support', url: 'https://www.coloradoteachers.org' },
          { label: 'Volunteer in Colorado Schools', url: 'https://www.volunteermatch.org/search?l=Colorado&categories=13' }
        ],
        literacy: [
          { label: 'Colorado Reading Initiative', url: 'https://www.cde.state.co.us/reading' },
          { label: 'Donate Books to Colorado Schools', url: 'https://www.firstbook.org/colorado' },
          { label: 'Colorado Literacy Council', url: 'https://www.coloradoliteracy.org' }
        ],
        career: [
          { label: 'Colorado Career Technical Education', url: 'https://www.cde.state.co.us/cte' },
          { label: 'Colorado Workforce Development', url: 'https://www.coloradoworkforce.org' },
          { label: 'Mentor Colorado Students', url: 'https://www.bigbrothersbigsisters.org/colorado' }
        ],
        safety: [
          { label: 'Colorado School Safety', url: 'https://www.cde.state.co.us/safety' },
          { label: 'Colorado Mental Health Resources', url: 'https://www.coloradomentalhealth.org' },
          { label: 'Support Colorado School Counselors', url: 'https://www.coloradoschoolcounselors.org' }
        ]
      },
      'Connecticut': {
        funding: [
          { label: 'Connecticut Education Foundation', url: 'https://www.connecticuteducation.org' },
          { label: 'Donate to Connecticut Schools', url: 'https://www.donorschoose.org/search?q=Connecticut' },
          { label: 'Connecticut Legislature Education', url: 'https://www.cga.ct.gov' }
        ],
        teacher: [
          { label: 'Connecticut Education Association', url: 'https://www.cea.org' },
          { label: 'Connecticut Teacher Support', url: 'https://www.connecticutteachers.org' },
          { label: 'Volunteer in Connecticut Schools', url: 'https://www.volunteermatch.org/search?l=Connecticut&categories=13' }
        ],
        literacy: [
          { label: 'Connecticut Reading Initiative', url: 'https://www.ct.gov/sde/reading' },
          { label: 'Donate Books to Connecticut Schools', url: 'https://www.firstbook.org/connecticut' },
          { label: 'Connecticut Literacy Council', url: 'https://www.connecticutliteracy.org' }
        ],
        career: [
          { label: 'Connecticut Career Technical Education', url: 'https://www.ct.gov/sde/cte' },
          { label: 'Connecticut Workforce Development', url: 'https://www.connecticutworkforce.org' },
          { label: 'Mentor Connecticut Students', url: 'https://www.bigbrothersbigsisters.org/connecticut' }
        ],
        safety: [
          { label: 'Connecticut School Safety', url: 'https://www.ct.gov/sde/safety' },
          { label: 'Connecticut Mental Health Resources', url: 'https://www.connecticutmentalhealth.org' },
          { label: 'Support Connecticut School Counselors', url: 'https://www.connecticutschoolcounselors.org' }
        ]
      },
      'Delaware': {
        funding: [
          { label: 'Delaware Education Foundation', url: 'https://www.delawareeducation.org' },
          { label: 'Donate to Delaware Schools', url: 'https://www.donorschoose.org/search?q=Delaware' },
          { label: 'Delaware Legislature Education', url: 'https://www.legis.delaware.gov' }
        ],
        teacher: [
          { label: 'Delaware State Education Association', url: 'https://www.dsea.org' },
          { label: 'Delaware Teacher Support', url: 'https://www.delawareteachers.org' },
          { label: 'Volunteer in Delaware Schools', url: 'https://www.volunteermatch.org/search?l=Delaware&categories=13' }
        ],
        literacy: [
          { label: 'Delaware Reading Initiative', url: 'https://www.doe.k12.de.us/reading' },
          { label: 'Donate Books to Delaware Schools', url: 'https://www.firstbook.org/delaware' },
          { label: 'Delaware Literacy Council', url: 'https://www.delawareliteracy.org' }
        ],
        career: [
          { label: 'Delaware Career Technical Education', url: 'https://www.doe.k12.de.us/cte' },
          { label: 'Delaware Workforce Development', url: 'https://www.delawareworkforce.org' },
          { label: 'Mentor Delaware Students', url: 'https://www.bigbrothersbigsisters.org/delaware' }
        ],
        safety: [
          { label: 'Delaware School Safety', url: 'https://www.doe.k12.de.us/safety' },
          { label: 'Delaware Mental Health Resources', url: 'https://www.delawarementalhealth.org' },
          { label: 'Support Delaware School Counselors', url: 'https://www.delawareschoolcounselors.org' }
        ]
      },
      'Florida': {
        funding: [
          { label: 'Florida Department of Education', url: 'https://www.fldoe.org' },
          { label: 'Donate to Florida Schools', url: 'https://www.donorschoose.org/search?q=Florida' },
          { label: 'Florida Legislature Education', url: 'https://www.flsenate.gov' }
        ],
        teacher: [
          { label: 'Florida Education Association', url: 'https://www.feaweb.org' },
          { label: 'Florida Teacher Support', url: 'https://www.floridateachers.org' },
          { label: 'Volunteer in Florida Schools', url: 'https://www.volunteermatch.org/search?l=Florida&categories=13' }
        ],
        literacy: [
          { label: 'Florida Reading Initiative', url: 'https://www.fldoe.org/reading' },
          { label: 'Donate Books to Florida Schools', url: 'https://www.firstbook.org/florida' },
          { label: 'Florida Literacy Council', url: 'https://www.floridaliteracy.org' }
        ],
        career: [
          { label: 'Florida Career Technical Education', url: 'https://www.fldoe.org/cte' },
          { label: 'Florida Workforce Development', url: 'https://www.floridaworkforce.org' },
          { label: 'Mentor Florida Students', url: 'https://www.bigbrothersbigsisters.org/florida' }
        ],
        safety: [
          { label: 'Florida School Safety', url: 'https://www.fldoe.org/safety' },
          { label: 'Florida Mental Health Resources', url: 'https://www.floridamentalhealth.org' },
          { label: 'Support Florida School Counselors', url: 'https://www.floridaschoolcounselors.org' }
        ]
      },
      'Georgia': {
        funding: [
          { label: 'Georgia Department of Education', url: 'https://www.gadoe.org' },
          { label: 'Donate to Georgia Schools', url: 'https://www.donorschoose.org/search?q=Georgia' },
          { label: 'Georgia Legislature Education', url: 'https://www.legis.ga.gov' }
        ],
        teacher: [
          { label: 'Georgia Association of Educators', url: 'https://www.gae.org' },
          { label: 'Georgia Teacher Support', url: 'https://www.georgiateachers.org' },
          { label: 'Volunteer in Georgia Schools', url: 'https://www.volunteermatch.org/search?l=Georgia&categories=13' }
        ],
        literacy: [
          { label: 'Georgia Reading Initiative', url: 'https://www.gadoe.org/reading' },
          { label: 'Donate Books to Georgia Schools', url: 'https://www.firstbook.org/georgia' },
          { label: 'Georgia Literacy Council', url: 'https://www.georgialiteracy.org' }
        ],
        career: [
          { label: 'Georgia Career Technical Education', url: 'https://www.gadoe.org/cte' },
          { label: 'Georgia Workforce Development', url: 'https://www.georgiaworkforce.org' },
          { label: 'Mentor Georgia Students', url: 'https://www.bigbrothersbigsisters.org/georgia' }
        ],
        safety: [
          { label: 'Georgia School Safety', url: 'https://www.gadoe.org/safety' },
          { label: 'Georgia Mental Health Resources', url: 'https://www.georgiamentalhealth.org' },
          { label: 'Support Georgia School Counselors', url: 'https://www.georgiaschoolcounselors.org' }
        ]
      },
      'Hawaii': {
        funding: [
          { label: 'Hawaii Education Foundation', url: 'https://www.hawaiieducation.org' },
          { label: 'Donate to Hawaii Schools', url: 'https://www.donorschoose.org/search?q=Hawaii' },
          { label: 'Hawaii Legislature Education', url: 'https://www.capitol.hawaii.gov' }
        ],
        teacher: [
          { label: 'Hawaii State Teachers Association', url: 'https://www.hsta.org' },
          { label: 'Hawaii Teacher Support', url: 'https://www.hawaiiteachers.org' },
          { label: 'Volunteer in Hawaii Schools', url: 'https://www.volunteermatch.org/search?l=Hawaii&categories=13' }
        ],
        literacy: [
          { label: 'Hawaii Reading Initiative', url: 'https://www.hawaiipublicschools.org/reading' },
          { label: 'Donate Books to Hawaii Schools', url: 'https://www.firstbook.org/hawaii' },
          { label: 'Hawaii Literacy Council', url: 'https://www.hawaiiliteracy.org' }
        ],
        career: [
          { label: 'Hawaii Career Technical Education', url: 'https://www.hawaiipublicschools.org/cte' },
          { label: 'Hawaii Workforce Development', url: 'https://www.hawaiiworkforce.org' },
          { label: 'Mentor Hawaii Students', url: 'https://www.bigbrothersbigsisters.org/hawaii' }
        ],
        safety: [
          { label: 'Hawaii School Safety', url: 'https://www.hawaiipublicschools.org/safety' },
          { label: 'Hawaii Mental Health Resources', url: 'https://www.hawaiimentalhealth.org' },
          { label: 'Support Hawaii School Counselors', url: 'https://www.hawaiischoolcounselors.org' }
        ]
      },
      'Idaho': {
        funding: [
          { label: 'Idaho Education Foundation', url: 'https://www.idahoeducation.org' },
          { label: 'Donate to Idaho Schools', url: 'https://www.donorschoose.org/search?q=Idaho' },
          { label: 'Idaho Legislature Education', url: 'https://www.legislature.idaho.gov' }
        ],
        teacher: [
          { label: 'Idaho Education Association', url: 'https://www.idahoea.org' },
          { label: 'Idaho Teacher Support', url: 'https://www.idahoteachers.org' },
          { label: 'Volunteer in Idaho Schools', url: 'https://www.volunteermatch.org/search?l=Idaho&categories=13' }
        ],
        literacy: [
          { label: 'Idaho Reading Initiative', url: 'https://www.sde.idaho.gov/reading' },
          { label: 'Donate Books to Idaho Schools', url: 'https://www.firstbook.org/idaho' },
          { label: 'Idaho Literacy Council', url: 'https://www.idaholiteracy.org' }
        ],
        career: [
          { label: 'Idaho Career Technical Education', url: 'https://www.sde.idaho.gov/cte' },
          { label: 'Idaho Workforce Development', url: 'https://www.idahoworkforce.org' },
          { label: 'Mentor Idaho Students', url: 'https://www.bigbrothersbigsisters.org/idaho' }
        ],
        safety: [
          { label: 'Idaho School Safety', url: 'https://www.sde.idaho.gov/safety' },
          { label: 'Idaho Mental Health Resources', url: 'https://www.idahomentalhealth.org' },
          { label: 'Support Idaho School Counselors', url: 'https://www.idahoschoolcounselors.org' }
        ]
      },
      'Illinois': {
        funding: [
          { label: 'Illinois State Board of Education', url: 'https://www.isbe.net' },
          { label: 'Donate to Illinois Schools', url: 'https://www.donorschoose.org/search?q=Illinois' },
          { label: 'Illinois Legislature Education', url: 'https://www.ilga.gov' }
        ],
        teacher: [
          { label: 'Illinois Education Association', url: 'https://www.ieanea.org' },
          { label: 'Illinois Teacher Support', url: 'https://www.illinoisteachers.org' },
          { label: 'Volunteer in Illinois Schools', url: 'https://www.volunteermatch.org/search?l=Illinois&categories=13' }
        ],
        literacy: [
          { label: 'Illinois Reading Initiative', url: 'https://www.isbe.net/reading' },
          { label: 'Donate Books to Illinois Schools', url: 'https://www.firstbook.org/illinois' },
          { label: 'Illinois Literacy Council', url: 'https://www.illinoisliteracy.org' }
        ],
        career: [
          { label: 'Illinois Career Technical Education', url: 'https://www.isbe.net/cte' },
          { label: 'Illinois Workforce Development', url: 'https://www.illinoisworkforce.org' },
          { label: 'Mentor Illinois Students', url: 'https://www.bigbrothersbigsisters.org/illinois' }
        ],
        safety: [
          { label: 'Illinois School Safety', url: 'https://www.isbe.net/safety' },
          { label: 'Illinois Mental Health Resources', url: 'https://www.illinoismentalhealth.org' },
          { label: 'Support Illinois School Counselors', url: 'https://www.illinoisschoolcounselors.org' }
        ]
      },
      'Indiana': {
        funding: [
          { label: 'Indiana Education Foundation', url: 'https://www.indianaeducation.org' },
          { label: 'Donate to Indiana Schools', url: 'https://www.donorschoose.org/search?q=Indiana' },
          { label: 'Indiana Legislature Education', url: 'https://www.iga.in.gov' }
        ],
        teacher: [
          { label: 'Indiana State Teachers Association', url: 'https://www.ista-in.org' },
          { label: 'Indiana Teacher Support', url: 'https://www.indianateachers.org' },
          { label: 'Volunteer in Indiana Schools', url: 'https://www.volunteermatch.org/search?l=Indiana&categories=13' }
        ],
        literacy: [
          { label: 'Indiana Reading Initiative', url: 'https://www.doe.in.gov/reading' },
          { label: 'Donate Books to Indiana Schools', url: 'https://www.firstbook.org/indiana' },
          { label: 'Indiana Literacy Council', url: 'https://www.indianaliteracy.org' }
        ],
        career: [
          { label: 'Indiana Career Technical Education', url: 'https://www.doe.in.gov/cte' },
          { label: 'Indiana Workforce Development', url: 'https://www.indianaworkforce.org' },
          { label: 'Mentor Indiana Students', url: 'https://www.bigbrothersbigsisters.org/indiana' }
        ],
        safety: [
          { label: 'Indiana School Safety', url: 'https://www.doe.in.gov/safety' },
          { label: 'Indiana Mental Health Resources', url: 'https://www.indianamentalhealth.org' },
          { label: 'Support Indiana School Counselors', url: 'https://www.indianaschoolcounselors.org' }
        ]
      },
      'Iowa': {
        funding: [
          { label: 'Iowa Education Foundation', url: 'https://www.iowaeducation.org' },
          { label: 'Donate to Iowa Schools', url: 'https://www.donorschoose.org/search?q=Iowa' },
          { label: 'Iowa Legislature Education', url: 'https://www.legis.iowa.gov' }
        ],
        teacher: [
          { label: 'Iowa State Education Association', url: 'https://www.isea.org' },
          { label: 'Iowa Teacher Support', url: 'https://www.iowateachers.org' },
          { label: 'Volunteer in Iowa Schools', url: 'https://www.volunteermatch.org/search?l=Iowa&categories=13' }
        ],
        literacy: [
          { label: 'Iowa Reading Initiative', url: 'https://www.educateiowa.gov/reading' },
          { label: 'Donate Books to Iowa Schools', url: 'https://www.firstbook.org/iowa' },
          { label: 'Iowa Literacy Council', url: 'https://www.iowaliteracy.org' }
        ],
        career: [
          { label: 'Iowa Career Technical Education', url: 'https://www.educateiowa.gov/cte' },
          { label: 'Iowa Workforce Development', url: 'https://www.iowaworkforce.org' },
          { label: 'Mentor Iowa Students', url: 'https://www.bigbrothersbigsisters.org/iowa' }
        ],
        safety: [
          { label: 'Iowa School Safety', url: 'https://www.educateiowa.gov/safety' },
          { label: 'Iowa Mental Health Resources', url: 'https://www.iowamentalhealth.org' },
          { label: 'Support Iowa School Counselors', url: 'https://www.iowaschoolcounselors.org' }
        ]
      },
      'Kansas': {
        funding: [
          { label: 'Kansas Education Foundation', url: 'https://www.kansaseducation.org' },
          { label: 'Donate to Kansas Schools', url: 'https://www.donorschoose.org/search?q=Kansas' },
          { label: 'Kansas Legislature Education', url: 'https://www.kslegislature.gov' }
        ],
        teacher: [
          { label: 'Kansas National Education Association', url: 'https://www.knea.org' },
          { label: 'Kansas Teacher Support', url: 'https://www.kansasteachers.org' },
          { label: 'Volunteer in Kansas Schools', url: 'https://www.volunteermatch.org/search?l=Kansas&categories=13' }
        ],
        literacy: [
          { label: 'Kansas Reading Initiative', url: 'https://www.ksde.org/reading' },
          { label: 'Donate Books to Kansas Schools', url: 'https://www.firstbook.org/kansas' },
          { label: 'Kansas Literacy Council', url: 'https://www.kansasliteracy.org' }
        ],
        career: [
          { label: 'Kansas Career Technical Education', url: 'https://www.ksde.org/cte' },
          { label: 'Kansas Workforce Development', url: 'https://www.kansasworkforce.org' },
          { label: 'Mentor Kansas Students', url: 'https://www.bigbrothersbigsisters.org/kansas' }
        ],
        safety: [
          { label: 'Kansas School Safety', url: 'https://www.ksde.org/safety' },
          { label: 'Kansas Mental Health Resources', url: 'https://www.kansasmentalhealth.org' },
          { label: 'Support Kansas School Counselors', url: 'https://www.kansasschoolcounselors.org' }
        ]
      },
      'Kentucky': {
        funding: [
          { label: 'Kentucky Education Foundation', url: 'https://www.kentuckyeducation.org' },
          { label: 'Donate to Kentucky Schools', url: 'https://www.donorschoose.org/search?q=Kentucky' },
          { label: 'Kentucky Legislature Education', url: 'https://www.legislature.ky.gov' }
        ],
        teacher: [
          { label: 'Kentucky Education Association', url: 'https://www.kea.org' },
          { label: 'Kentucky Teacher Support', url: 'https://www.kentuckyteachers.org' },
          { label: 'Volunteer in Kentucky Schools', url: 'https://www.volunteermatch.org/search?l=Kentucky&categories=13' }
        ],
        literacy: [
          { label: 'Kentucky Reading Initiative', url: 'https://www.education.ky.gov/reading' },
          { label: 'Donate Books to Kentucky Schools', url: 'https://www.firstbook.org/kentucky' },
          { label: 'Kentucky Literacy Council', url: 'https://www.kentuckyliteracy.org' }
        ],
        career: [
          { label: 'Kentucky Career Technical Education', url: 'https://www.education.ky.gov/cte' },
          { label: 'Kentucky Workforce Development', url: 'https://www.kentuckyworkforce.org' },
          { label: 'Mentor Kentucky Students', url: 'https://www.bigbrothersbigsisters.org/kentucky' }
        ],
        safety: [
          { label: 'Kentucky School Safety', url: 'https://www.education.ky.gov/safety' },
          { label: 'Kentucky Mental Health Resources', url: 'https://www.kentuckymentalhealth.org' },
          { label: 'Support Kentucky School Counselors', url: 'https://www.kentuckyschoolcounselors.org' }
        ]
      },
      'Louisiana': {
        funding: [
          { label: 'Louisiana Education Foundation', url: 'https://www.louisianaeducation.org' },
          { label: 'Donate to Louisiana Schools', url: 'https://www.donorschoose.org/search?q=Louisiana' },
          { label: 'Louisiana Legislature Education', url: 'https://www.legis.la.gov' }
        ],
        teacher: [
          { label: 'Louisiana Federation of Teachers', url: 'https://www.lft.org' },
          { label: 'Louisiana Teacher Support', url: 'https://www.louisianateachers.org' },
          { label: 'Volunteer in Louisiana Schools', url: 'https://www.volunteermatch.org/search?l=Louisiana&categories=13' }
        ],
        literacy: [
          { label: 'Louisiana Reading Initiative', url: 'https://www.louisianabelieves.com/reading' },
          { label: 'Donate Books to Louisiana Schools', url: 'https://www.firstbook.org/louisiana' },
          { label: 'Louisiana Literacy Council', url: 'https://www.louisianaliteracy.org' }
        ],
        career: [
          { label: 'Louisiana Career Technical Education', url: 'https://www.louisianabelieves.com/cte' },
          { label: 'Louisiana Workforce Development', url: 'https://www.louisianaworkforce.org' },
          { label: 'Mentor Louisiana Students', url: 'https://www.bigbrothersbigsisters.org/louisiana' }
        ],
        safety: [
          { label: 'Louisiana School Safety', url: 'https://www.louisianabelieves.com/safety' },
          { label: 'Louisiana Mental Health Resources', url: 'https://www.louisianamentalhealth.org' },
          { label: 'Support Louisiana School Counselors', url: 'https://www.louisianaschoolcounselors.org' }
        ]
      },
      'Maine': {
        funding: [
          { label: 'Maine Education Foundation', url: 'https://www.maineeducation.org' },
          { label: 'Donate to Maine Schools', url: 'https://www.donorschoose.org/search?q=Maine' },
          { label: 'Maine Legislature Education', url: 'https://www.legislature.maine.gov' }
        ],
        teacher: [
          { label: 'Maine Education Association', url: 'https://www.maine.nea.org' },
          { label: 'Maine Teacher Support', url: 'https://www.maineteachers.org' },
          { label: 'Volunteer in Maine Schools', url: 'https://www.volunteermatch.org/search?l=Maine&categories=13' }
        ],
        literacy: [
          { label: 'Maine Reading Initiative', url: 'https://www.maine.gov/doe/reading' },
          { label: 'Donate Books to Maine Schools', url: 'https://www.firstbook.org/maine' },
          { label: 'Maine Literacy Council', url: 'https://www.maineliteracy.org' }
        ],
        career: [
          { label: 'Maine Career Technical Education', url: 'https://www.maine.gov/doe/cte' },
          { label: 'Maine Workforce Development', url: 'https://www.maineworkforce.org' },
          { label: 'Mentor Maine Students', url: 'https://www.bigbrothersbigsisters.org/maine' }
        ],
        safety: [
          { label: 'Maine School Safety', url: 'https://www.maine.gov/doe/safety' },
          { label: 'Maine Mental Health Resources', url: 'https://www.mainementalhealth.org' },
          { label: 'Support Maine School Counselors', url: 'https://www.maineschoolcounselors.org' }
        ]
      },
      'Maryland': {
        funding: [
          { label: 'Maryland Education Foundation', url: 'https://www.marylandeducation.org' },
          { label: 'Donate to Maryland Schools', url: 'https://www.donorschoose.org/search?q=Maryland' },
          { label: 'Maryland Legislature Education', url: 'https://www.mgaleg.maryland.gov' }
        ],
        teacher: [
          { label: 'Maryland State Education Association', url: 'https://www.marylandeducators.org' },
          { label: 'Maryland Teacher Support', url: 'https://www.marylandteachers.org' },
          { label: 'Volunteer in Maryland Schools', url: 'https://www.volunteermatch.org/search?l=Maryland&categories=13' }
        ],
        literacy: [
          { label: 'Maryland Reading Initiative', url: 'https://www.marylandpublicschools.org/reading' },
          { label: 'Donate Books to Maryland Schools', url: 'https://www.firstbook.org/maryland' },
          { label: 'Maryland Literacy Council', url: 'https://www.marylandliteracy.org' }
        ],
        career: [
          { label: 'Maryland Career Technical Education', url: 'https://www.marylandpublicschools.org/cte' },
          { label: 'Maryland Workforce Development', url: 'https://www.marylandworkforce.org' },
          { label: 'Mentor Maryland Students', url: 'https://www.bigbrothersbigsisters.org/maryland' }
        ],
        safety: [
          { label: 'Maryland School Safety', url: 'https://www.marylandpublicschools.org/safety' },
          { label: 'Maryland Mental Health Resources', url: 'https://www.marylandmentalhealth.org' },
          { label: 'Support Maryland School Counselors', url: 'https://www.marylandschoolcounselors.org' }
        ]
      },
      'Massachusetts': {
        funding: [
          { label: 'Massachusetts Education Foundation', url: 'https://www.massachusettseducation.org' },
          { label: 'Donate to Massachusetts Schools', url: 'https://www.donorschoose.org/search?q=Massachusetts' },
          { label: 'Massachusetts Legislature Education', url: 'https://www.malegislature.gov' }
        ],
        teacher: [
          { label: 'Massachusetts Teachers Association', url: 'https://www.massteacher.org' },
          { label: 'Massachusetts Teacher Support', url: 'https://www.massachusettsteachers.org' },
          { label: 'Volunteer in Massachusetts Schools', url: 'https://www.volunteermatch.org/search?l=Massachusetts&categories=13' }
        ],
        literacy: [
          { label: 'Massachusetts Reading Initiative', url: 'https://www.doe.mass.edu/reading' },
          { label: 'Donate Books to Massachusetts Schools', url: 'https://www.firstbook.org/massachusetts' },
          { label: 'Massachusetts Literacy Council', url: 'https://www.massachusettsliteracy.org' }
        ],
        career: [
          { label: 'Massachusetts Career Technical Education', url: 'https://www.doe.mass.edu/cte' },
          { label: 'Massachusetts Workforce Development', url: 'https://www.massachusettsworkforce.org' },
          { label: 'Mentor Massachusetts Students', url: 'https://www.bigbrothersbigsisters.org/massachusetts' }
        ],
        safety: [
          { label: 'Massachusetts School Safety', url: 'https://www.doe.mass.edu/safety' },
          { label: 'Massachusetts Mental Health Resources', url: 'https://www.massachusettsmentalhealth.org' },
          { label: 'Support Massachusetts School Counselors', url: 'https://www.massachusettsschoolcounselors.org' }
        ]
      },
      'Michigan': {
        funding: [
          { label: 'Michigan Department of Education', url: 'https://www.michigan.gov/mde' },
          { label: 'Donate to Michigan Schools', url: 'https://www.donorschoose.org/search?q=Michigan' },
          { label: 'Michigan Legislature Education', url: 'https://www.legislature.mi.gov' }
        ],
        teacher: [
          { label: 'Michigan Education Association', url: 'https://www.mea.org' },
          { label: 'Michigan Teacher Support', url: 'https://www.michiganteachers.org' },
          { label: 'Volunteer in Michigan Schools', url: 'https://www.volunteermatch.org/search?l=Michigan&categories=13' }
        ],
        literacy: [
          { label: 'Michigan Reading Initiative', url: 'https://www.michigan.gov/mde/reading' },
          { label: 'Donate Books to Michigan Schools', url: 'https://www.firstbook.org/michigan' },
          { label: 'Michigan Literacy Council', url: 'https://www.michiganliteracy.org' }
        ],
        career: [
          { label: 'Michigan Career Technical Education', url: 'https://www.michigan.gov/mde/cte' },
          { label: 'Michigan Workforce Development', url: 'https://www.michiganworkforce.org' },
          { label: 'Mentor Michigan Students', url: 'https://www.bigbrothersbigsisters.org/michigan' }
        ],
        safety: [
          { label: 'Michigan School Safety', url: 'https://www.michigan.gov/mde/safety' },
          { label: 'Michigan Mental Health Resources', url: 'https://www.michiganmentalhealth.org' },
          { label: 'Support Michigan School Counselors', url: 'https://www.michiganschoolcounselors.org' }
        ]
      },
      'Minnesota': {
        funding: [
          { label: 'Minnesota Education Foundation', url: 'https://www.minnesotaeducation.org' },
          { label: 'Donate to Minnesota Schools', url: 'https://www.donorschoose.org/search?q=Minnesota' },
          { label: 'Minnesota Legislature Education', url: 'https://www.leg.mn.gov' }
        ],
        teacher: [
          { label: 'Education Minnesota', url: 'https://www.educationminnesota.org' },
          { label: 'Minnesota Teacher Support', url: 'https://www.minnesotateachers.org' },
          { label: 'Volunteer in Minnesota Schools', url: 'https://www.volunteermatch.org/search?l=Minnesota&categories=13' }
        ],
        literacy: [
          { label: 'Minnesota Reading Initiative', url: 'https://www.education.state.mn.us/reading' },
          { label: 'Donate Books to Minnesota Schools', url: 'https://www.firstbook.org/minnesota' },
          { label: 'Minnesota Literacy Council', url: 'https://www.minnesotaliteracy.org' }
        ],
        career: [
          { label: 'Minnesota Career Technical Education', url: 'https://www.education.state.mn.us/cte' },
          { label: 'Minnesota Workforce Development', url: 'https://www.minnesotaworkforce.org' },
          { label: 'Mentor Minnesota Students', url: 'https://www.bigbrothersbigsisters.org/minnesota' }
        ],
        safety: [
          { label: 'Minnesota School Safety', url: 'https://www.education.state.mn.us/safety' },
          { label: 'Minnesota Mental Health Resources', url: 'https://www.minnesotamentalhealth.org' },
          { label: 'Support Minnesota School Counselors', url: 'https://www.minnesotaschoolcounselors.org' }
        ]
      },
      'Mississippi': {
        funding: [
          { label: 'Mississippi Education Foundation', url: 'https://www.mississippieducation.org' },
          { label: 'Donate to Mississippi Schools', url: 'https://www.donorschoose.org/search?q=Mississippi' },
          { label: 'Mississippi Legislature Education', url: 'https://www.legislature.ms.gov' }
        ],
        teacher: [
          { label: 'Mississippi Association of Educators', url: 'https://www.mae.org' },
          { label: 'Mississippi Teacher Support', url: 'https://www.mississippiteachers.org' },
          { label: 'Volunteer in Mississippi Schools', url: 'https://www.volunteermatch.org/search?l=Mississippi&categories=13' }
        ],
        literacy: [
          { label: 'Mississippi Reading Initiative', url: 'https://www.mdek12.org/reading' },
          { label: 'Donate Books to Mississippi Schools', url: 'https://www.firstbook.org/mississippi' },
          { label: 'Mississippi Literacy Council', url: 'https://www.mississippiliteracy.org' }
        ],
        career: [
          { label: 'Mississippi Career Technical Education', url: 'https://www.mdek12.org/cte' },
          { label: 'Mississippi Workforce Development', url: 'https://www.mississippiworkforce.org' },
          { label: 'Mentor Mississippi Students', url: 'https://www.bigbrothersbigsisters.org/mississippi' }
        ],
        safety: [
          { label: 'Mississippi School Safety', url: 'https://www.mdek12.org/safety' },
          { label: 'Mississippi Mental Health Resources', url: 'https://www.mississippimentalhealth.org' },
          { label: 'Support Mississippi School Counselors', url: 'https://www.mississippischoolcounselors.org' }
        ]
      },
      'Missouri': {
        funding: [
          { label: 'Missouri Education Foundation', url: 'https://www.missourieducation.org' },
          { label: 'Donate to Missouri Schools', url: 'https://www.donorschoose.org/search?q=Missouri' },
          { label: 'Missouri Legislature Education', url: 'https://www.senate.mo.gov' }
        ],
        teacher: [
          { label: 'Missouri National Education Association', url: 'https://www.mnea.org' },
          { label: 'Missouri Teacher Support', url: 'https://www.missouriteachers.org' },
          { label: 'Volunteer in Missouri Schools', url: 'https://www.volunteermatch.org/search?l=Missouri&categories=13' }
        ],
        literacy: [
          { label: 'Missouri Reading Initiative', url: 'https://www.dese.mo.gov/reading' },
          { label: 'Donate Books to Missouri Schools', url: 'https://www.firstbook.org/missouri' },
          { label: 'Missouri Literacy Council', url: 'https://www.missouriliteracy.org' }
        ],
        career: [
          { label: 'Missouri Career Technical Education', url: 'https://www.dese.mo.gov/cte' },
          { label: 'Missouri Workforce Development', url: 'https://www.missouriworkforce.org' },
          { label: 'Mentor Missouri Students', url: 'https://www.bigbrothersbigsisters.org/missouri' }
        ],
        safety: [
          { label: 'Missouri School Safety', url: 'https://www.dese.mo.gov/safety' },
          { label: 'Missouri Mental Health Resources', url: 'https://www.missourimentalhealth.org' },
          { label: 'Support Missouri School Counselors', url: 'https://www.missourischoolcounselors.org' }
        ]
      },
      'Montana': {
        funding: [
          { label: 'Montana Education Foundation', url: 'https://www.montanaeducation.org' },
          { label: 'Donate to Montana Schools', url: 'https://www.donorschoose.org/search?q=Montana' },
          { label: 'Montana Legislature Education', url: 'https://www.leg.mt.gov' }
        ],
        teacher: [
          { label: 'Montana Federation of Public Employees', url: 'https://www.mfpe.org' },
          { label: 'Montana Teacher Support', url: 'https://www.montanateachers.org' },
          { label: 'Volunteer in Montana Schools', url: 'https://www.volunteermatch.org/search?l=Montana&categories=13' }
        ],
        literacy: [
          { label: 'Montana Reading Initiative', url: 'https://www.opi.mt.gov/reading' },
          { label: 'Donate Books to Montana Schools', url: 'https://www.firstbook.org/montana' },
          { label: 'Montana Literacy Council', url: 'https://www.montanaliteracy.org' }
        ],
        career: [
          { label: 'Montana Career Technical Education', url: 'https://www.opi.mt.gov/cte' },
          { label: 'Montana Workforce Development', url: 'https://www.montanaworkforce.org' },
          { label: 'Mentor Montana Students', url: 'https://www.bigbrothersbigsisters.org/montana' }
        ],
        safety: [
          { label: 'Montana School Safety', url: 'https://www.opi.mt.gov/safety' },
          { label: 'Montana Mental Health Resources', url: 'https://www.montanamentalhealth.org' },
          { label: 'Support Montana School Counselors', url: 'https://www.montanaschoolcounselors.org' }
        ]
      },
      'Nebraska': {
        funding: [
          { label: 'Nebraska Education Foundation', url: 'https://www.nebraskaeducation.org' },
          { label: 'Donate to Nebraska Schools', url: 'https://www.donorschoose.org/search?q=Nebraska' },
          { label: 'Nebraska Legislature Education', url: 'https://www.nebraskalegislature.gov' }
        ],
        teacher: [
          { label: 'Nebraska State Education Association', url: 'https://www.nsea.org' },
          { label: 'Nebraska Teacher Support', url: 'https://www.nebraskateachers.org' },
          { label: 'Volunteer in Nebraska Schools', url: 'https://www.volunteermatch.org/search?l=Nebraska&categories=13' }
        ],
        literacy: [
          { label: 'Nebraska Reading Initiative', url: 'https://www.education.ne.gov/reading' },
          { label: 'Donate Books to Nebraska Schools', url: 'https://www.firstbook.org/nebraska' },
          { label: 'Nebraska Literacy Council', url: 'https://www.nebraskaliteracy.org' }
        ],
        career: [
          { label: 'Nebraska Career Technical Education', url: 'https://www.education.ne.gov/cte' },
          { label: 'Nebraska Workforce Development', url: 'https://www.nebraskaworkforce.org' },
          { label: 'Mentor Nebraska Students', url: 'https://www.bigbrothersbigsisters.org/nebraska' }
        ],
        safety: [
          { label: 'Nebraska School Safety', url: 'https://www.education.ne.gov/safety' },
          { label: 'Nebraska Mental Health Resources', url: 'https://www.nebraskamentalhealth.org' },
          { label: 'Support Nebraska School Counselors', url: 'https://www.nebraskaschoolcounselors.org' }
        ]
      },
      'Nevada': {
        funding: [
          { label: 'Nevada Education Foundation', url: 'https://www.nevadaeducation.org' },
          { label: 'Donate to Nevada Schools', url: 'https://www.donorschoose.org/search?q=Nevada' },
          { label: 'Nevada Legislature Education', url: 'https://www.leg.state.nv.us' }
        ],
        teacher: [
          { label: 'Nevada State Education Association', url: 'https://www.nsea.org' },
          { label: 'Nevada Teacher Support', url: 'https://www.nevadateachers.org' },
          { label: 'Volunteer in Nevada Schools', url: 'https://www.volunteermatch.org/search?l=Nevada&categories=13' }
        ],
        literacy: [
          { label: 'Nevada Reading Initiative', url: 'https://www.doe.nv.gov/reading' },
          { label: 'Donate Books to Nevada Schools', url: 'https://www.firstbook.org/nevada' },
          { label: 'Nevada Literacy Council', url: 'https://www.nevadaliteracy.org' }
        ],
        career: [
          { label: 'Nevada Career Technical Education', url: 'https://www.doe.nv.gov/cte' },
          { label: 'Nevada Workforce Development', url: 'https://www.nevadaworkforce.org' },
          { label: 'Mentor Nevada Students', url: 'https://www.bigbrothersbigsisters.org/nevada' }
        ],
        safety: [
          { label: 'Nevada School Safety', url: 'https://www.doe.nv.gov/safety' },
          { label: 'Nevada Mental Health Resources', url: 'https://www.nevadamentalhealth.org' },
          { label: 'Support Nevada School Counselors', url: 'https://www.nevadaschoolcounselors.org' }
        ]
      },
      'New Hampshire': {
        funding: [
          { label: 'New Hampshire Education Foundation', url: 'https://www.newhampshireeducation.org' },
          { label: 'Donate to New Hampshire Schools', url: 'https://www.donorschoose.org/search?q=New+Hampshire' },
          { label: 'New Hampshire Legislature Education', url: 'https://www.gencourt.state.nh.us' }
        ],
        teacher: [
          { label: 'New Hampshire National Education Association', url: 'https://www.nhnea.org' },
          { label: 'New Hampshire Teacher Support', url: 'https://www.newhampshireteachers.org' },
          { label: 'Volunteer in New Hampshire Schools', url: 'https://www.volunteermatch.org/search?l=New+Hampshire&categories=13' }
        ],
        literacy: [
          { label: 'New Hampshire Reading Initiative', url: 'https://www.education.nh.gov/reading' },
          { label: 'Donate Books to New Hampshire Schools', url: 'https://www.firstbook.org/newhampshire' },
          { label: 'New Hampshire Literacy Council', url: 'https://www.newhampshireliteracy.org' }
        ],
        career: [
          { label: 'New Hampshire Career Technical Education', url: 'https://www.education.nh.gov/cte' },
          { label: 'New Hampshire Workforce Development', url: 'https://www.newhampshireworkforce.org' },
          { label: 'Mentor New Hampshire Students', url: 'https://www.bigbrothersbigsisters.org/newhampshire' }
        ],
        safety: [
          { label: 'New Hampshire School Safety', url: 'https://www.education.nh.gov/safety' },
          { label: 'New Hampshire Mental Health Resources', url: 'https://www.newhampshirementalhealth.org' },
          { label: 'Support New Hampshire School Counselors', url: 'https://www.newhampshireschoolcounselors.org' }
        ]
      },
      'New Jersey': {
        funding: [
          { label: 'New Jersey Education Foundation', url: 'https://www.newjerseyeducation.org' },
          { label: 'Donate to New Jersey Schools', url: 'https://www.donorschoose.org/search?q=New+Jersey' },
          { label: 'New Jersey Legislature Education', url: 'https://www.njleg.state.nj.us' }
        ],
        teacher: [
          { label: 'New Jersey Education Association', url: 'https://www.njea.org' },
          { label: 'New Jersey Teacher Support', url: 'https://www.newjerseyteachers.org' },
          { label: 'Volunteer in New Jersey Schools', url: 'https://www.volunteermatch.org/search?l=New+Jersey&categories=13' }
        ],
        literacy: [
          { label: 'New Jersey Reading Initiative', url: 'https://www.nj.gov/education/reading' },
          { label: 'Donate Books to New Jersey Schools', url: 'https://www.firstbook.org/newjersey' },
          { label: 'New Jersey Literacy Council', url: 'https://www.newjerseyliteracy.org' }
        ],
        career: [
          { label: 'New Jersey Career Technical Education', url: 'https://www.nj.gov/education/cte' },
          { label: 'New Jersey Workforce Development', url: 'https://www.newjerseyworkforce.org' },
          { label: 'Mentor New Jersey Students', url: 'https://www.bigbrothersbigsisters.org/newjersey' }
        ],
        safety: [
          { label: 'New Jersey School Safety', url: 'https://www.nj.gov/education/safety' },
          { label: 'New Jersey Mental Health Resources', url: 'https://www.newjerseymentalhealth.org' },
          { label: 'Support New Jersey School Counselors', url: 'https://www.newjerseyschoolcounselors.org' }
        ]
      },
      'New Mexico': {
        funding: [
          { label: 'New Mexico Education Foundation', url: 'https://www.newmexicoeducation.org' },
          { label: 'Donate to New Mexico Schools', url: 'https://www.donorschoose.org/search?q=New+Mexico' },
          { label: 'New Mexico Legislature Education', url: 'https://www.nmlegis.gov' }
        ],
        teacher: [
          { label: 'New Mexico National Education Association', url: 'https://www.nmnea.org' },
          { label: 'New Mexico Teacher Support', url: 'https://www.newmexicoteachers.org' },
          { label: 'Volunteer in New Mexico Schools', url: 'https://www.volunteermatch.org/search?l=New+Mexico&categories=13' }
        ],
        literacy: [
          { label: 'New Mexico Reading Initiative', url: 'https://www.ped.state.nm.us/reading' },
          { label: 'Donate Books to New Mexico Schools', url: 'https://www.firstbook.org/newmexico' },
          { label: 'New Mexico Literacy Council', url: 'https://www.newmexicoliteracy.org' }
        ],
        career: [
          { label: 'New Mexico Career Technical Education', url: 'https://www.ped.state.nm.us/cte' },
          { label: 'New Mexico Workforce Development', url: 'https://www.newmexicoworkforce.org' },
          { label: 'Mentor New Mexico Students', url: 'https://www.bigbrothersbigsisters.org/newmexico' }
        ],
        safety: [
          { label: 'New Mexico School Safety', url: 'https://www.ped.state.nm.us/safety' },
          { label: 'New Mexico Mental Health Resources', url: 'https://www.newmexicomentalhealth.org' },
          { label: 'Support New Mexico School Counselors', url: 'https://www.newmexicoschoolcounselors.org' }
        ]
      },
      'New York': {
        funding: [
          { label: 'New York Education Foundation', url: 'https://www.nysed.gov' },
          { label: 'Donate to New York Schools', url: 'https://www.donorschoose.org/search?q=New+York' },
          { label: 'New York Legislature Education', url: 'https://www.nyassembly.gov' }
        ],
        teacher: [
          { label: 'New York State United Teachers', url: 'https://www.nysut.org' },
          { label: 'New York Teacher Support', url: 'https://www.nysed.gov/teacher' },
          { label: 'Volunteer in New York Schools', url: 'https://www.volunteermatch.org/search?l=New+York&categories=13' }
        ],
        literacy: [
          { label: 'New York Reading Initiative', url: 'https://www.nysed.gov/reading' },
          { label: 'Donate Books to New York Schools', url: 'https://www.donorschoose.org/search?q=New+York+books' },
          { label: 'New York Literacy Council', url: 'https://www.nysed.gov/reading' }
        ],
        career: [
          { label: 'New York Career Technical Education', url: 'https://www.nysed.gov/cte' },
          { label: 'New York Workforce Development', url: 'https://www.labor.ny.gov' },
          { label: 'Mentor New York Students', url: 'https://www.bigbrothersbigsisters.org/get-involved/volunteer' }
        ],
        safety: [
          { label: 'New York School Safety', url: 'https://www.nysed.gov/safety' },
          { label: 'New York Mental Health Resources', url: 'https://www.omh.ny.gov' },
          { label: 'Support New York School Counselors', url: 'https://www.nysed.gov/safety' }
        ]
      },
      'North Carolina': {
        funding: [
          { label: 'North Carolina Education Foundation', url: 'https://www.northcarolinaeducation.org' },
          { label: 'Donate to North Carolina Schools', url: 'https://www.donorschoose.org/search?q=North+Carolina' },
          { label: 'North Carolina Legislature Education', url: 'https://www.ncleg.gov' }
        ],
        teacher: [
          { label: 'North Carolina Association of Educators', url: 'https://www.ncae.org' },
          { label: 'North Carolina Teacher Support', url: 'https://www.northcarolinateachers.org' },
          { label: 'Volunteer in North Carolina Schools', url: 'https://www.volunteermatch.org/search?l=North+Carolina&categories=13' }
        ],
        literacy: [
          { label: 'North Carolina Reading Initiative', url: 'https://www.dpi.nc.gov/reading' },
          { label: 'Donate Books to North Carolina Schools', url: 'https://www.firstbook.org/northcarolina' },
          { label: 'North Carolina Literacy Council', url: 'https://www.northcarolinaliteracy.org' }
        ],
        career: [
          { label: 'North Carolina Career Technical Education', url: 'https://www.dpi.nc.gov/cte' },
          { label: 'North Carolina Workforce Development', url: 'https://www.northcarolinaworkforce.org' },
          { label: 'Mentor North Carolina Students', url: 'https://www.bigbrothersbigsisters.org/northcarolina' }
        ],
        safety: [
          { label: 'North Carolina School Safety', url: 'https://www.dpi.nc.gov/safety' },
          { label: 'North Carolina Mental Health Resources', url: 'https://www.northcarolinamentalhealth.org' },
          { label: 'Support North Carolina School Counselors', url: 'https://www.northcarolinaschoolcounselors.org' }
        ]
      },
      'North Dakota': {
        funding: [
          { label: 'North Dakota Education Foundation', url: 'https://www.northdakotaeducation.org' },
          { label: 'Donate to North Dakota Schools', url: 'https://www.donorschoose.org/search?q=North+Dakota' },
          { label: 'North Dakota Legislature Education', url: 'https://www.legis.nd.gov' }
        ],
        teacher: [
          { label: 'North Dakota Education Association', url: 'https://www.ndea.org' },
          { label: 'North Dakota Teacher Support', url: 'https://www.northdakotateachers.org' },
          { label: 'Volunteer in North Dakota Schools', url: 'https://www.volunteermatch.org/search?l=North+Dakota&categories=13' }
        ],
        literacy: [
          { label: 'North Dakota Reading Initiative', url: 'https://www.nd.gov/dpi/reading' },
          { label: 'Donate Books to North Dakota Schools', url: 'https://www.firstbook.org/northdakota' },
          { label: 'North Dakota Literacy Council', url: 'https://www.northdakotaliteracy.org' }
        ],
        career: [
          { label: 'North Dakota Career Technical Education', url: 'https://www.nd.gov/dpi/cte' },
          { label: 'North Dakota Workforce Development', url: 'https://www.northdakotaworkforce.org' },
          { label: 'Mentor North Dakota Students', url: 'https://www.bigbrothersbigsisters.org/northdakota' }
        ],
        safety: [
          { label: 'North Dakota School Safety', url: 'https://www.nd.gov/dpi/safety' },
          { label: 'North Dakota Mental Health Resources', url: 'https://www.northdakotamentalhealth.org' },
          { label: 'Support North Dakota School Counselors', url: 'https://www.northdakotaschoolcounselors.org' }
        ]
      },
      'Ohio': {
        funding: [
          { label: 'Ohio Department of Education', url: 'https://www.education.ohio.gov' },
          { label: 'Donate to Ohio Schools', url: 'https://www.donorschoose.org/search?q=Ohio' },
          { label: 'Ohio Legislature Education', url: 'https://www.legislature.ohio.gov' }
        ],
        teacher: [
          { label: 'Ohio Education Association', url: 'https://www.ohea.org' },
          { label: 'Ohio Teacher Support', url: 'https://www.ohioteachers.org' },
          { label: 'Volunteer in Ohio Schools', url: 'https://www.volunteermatch.org/search?l=Ohio&categories=13' }
        ],
        literacy: [
          { label: 'Ohio Reading Initiative', url: 'https://www.education.ohio.gov/reading' },
          { label: 'Donate Books to Ohio Schools', url: 'https://www.firstbook.org/ohio' },
          { label: 'Ohio Literacy Council', url: 'https://www.ohioliteracy.org' }
        ],
        career: [
          { label: 'Ohio Career Technical Education', url: 'https://www.education.ohio.gov/cte' },
          { label: 'Ohio Workforce Development', url: 'https://www.ohioworkforce.org' },
          { label: 'Mentor Ohio Students', url: 'https://www.bigbrothersbigsisters.org/ohio' }
        ],
        safety: [
          { label: 'Ohio School Safety', url: 'https://www.education.ohio.gov/safety' },
          { label: 'Ohio Mental Health Resources', url: 'https://www.ohiomentalhealth.org' },
          { label: 'Support Ohio School Counselors', url: 'https://www.ohioschoolcounselors.org' }
        ]
      },
      'Oklahoma': {
        funding: [
          { label: 'Oklahoma Education Foundation', url: 'https://www.oklahomaeducation.org' },
          { label: 'Donate to Oklahoma Schools', url: 'https://www.donorschoose.org/search?q=Oklahoma' },
          { label: 'Oklahoma Legislature Education', url: 'https://www.oklegislature.gov' }
        ],
        teacher: [
          { label: 'Oklahoma Education Association', url: 'https://www.okea.org' },
          { label: 'Oklahoma Teacher Support', url: 'https://www.oklahomateachers.org' },
          { label: 'Volunteer in Oklahoma Schools', url: 'https://www.volunteermatch.org/search?l=Oklahoma&categories=13' }
        ],
        literacy: [
          { label: 'Oklahoma Reading Initiative', url: 'https://www.sde.ok.gov/reading' },
          { label: 'Donate Books to Oklahoma Schools', url: 'https://www.firstbook.org/oklahoma' },
          { label: 'Oklahoma Literacy Council', url: 'https://www.oklahomaliteracy.org' }
        ],
        career: [
          { label: 'Oklahoma Career Technical Education', url: 'https://www.sde.ok.gov/cte' },
          { label: 'Oklahoma Workforce Development', url: 'https://www.oklahomaworkforce.org' },
          { label: 'Mentor Oklahoma Students', url: 'https://www.bigbrothersbigsisters.org/oklahoma' }
        ],
        safety: [
          { label: 'Oklahoma School Safety', url: 'https://www.sde.ok.gov/safety' },
          { label: 'Oklahoma Mental Health Resources', url: 'https://www.oklahomamentalhealth.org' },
          { label: 'Support Oklahoma School Counselors', url: 'https://www.oklahomaschoolcounselors.org' }
        ]
      },
      'Oregon': {
        funding: [
          { label: 'Oregon Education Foundation', url: 'https://www.oregoneducation.org' },
          { label: 'Donate to Oregon Schools', url: 'https://www.donorschoose.org/search?q=Oregon' },
          { label: 'Oregon Legislature Education', url: 'https://www.oregonlegislature.gov' }
        ],
        teacher: [
          { label: 'Oregon Education Association', url: 'https://www.oregoned.org' },
          { label: 'Oregon Teacher Support', url: 'https://www.oregontteachers.org' },
          { label: 'Volunteer in Oregon Schools', url: 'https://www.volunteermatch.org/search?l=Oregon&categories=13' }
        ],
        literacy: [
          { label: 'Oregon Reading Initiative', url: 'https://www.oregon.gov/ode/reading' },
          { label: 'Donate Books to Oregon Schools', url: 'https://www.firstbook.org/oregon' },
          { label: 'Oregon Literacy Council', url: 'https://www.oregonliteracy.org' }
        ],
        career: [
          { label: 'Oregon Career Technical Education', url: 'https://www.oregon.gov/ode/cte' },
          { label: 'Oregon Workforce Development', url: 'https://www.oregonworkforce.org' },
          { label: 'Mentor Oregon Students', url: 'https://www.bigbrothersbigsisters.org/oregon' }
        ],
        safety: [
          { label: 'Oregon School Safety', url: 'https://www.oregon.gov/ode/safety' },
          { label: 'Oregon Mental Health Resources', url: 'https://www.oregonmentalhealth.org' },
          { label: 'Support Oregon School Counselors', url: 'https://www.oregonschoolcounselors.org' }
        ]
      },
      'Pennsylvania': {
        funding: [
          { label: 'Pennsylvania Education Foundation', url: 'https://www.pennsylvaniaeducation.org' },
          { label: 'Donate to Pennsylvania Schools', url: 'https://www.donorschoose.org/search?q=Pennsylvania' },
          { label: 'Pennsylvania Legislature Education', url: 'https://www.legis.state.pa.us' }
        ],
        teacher: [
          { label: 'Pennsylvania State Education Association', url: 'https://www.psea.org' },
          { label: 'Pennsylvania Teacher Support', url: 'https://www.pennsylvaniateachers.org' },
          { label: 'Volunteer in Pennsylvania Schools', url: 'https://www.volunteermatch.org/search?l=Pennsylvania&categories=13' }
        ],
        literacy: [
          { label: 'Pennsylvania Reading Initiative', url: 'https://www.education.pa.gov/reading' },
          { label: 'Donate Books to Pennsylvania Schools', url: 'https://www.firstbook.org/pennsylvania' },
          { label: 'Pennsylvania Literacy Council', url: 'https://www.pennsylvanialiteracy.org' }
        ],
        career: [
          { label: 'Pennsylvania Career Technical Education', url: 'https://www.education.pa.gov/cte' },
          { label: 'Pennsylvania Workforce Development', url: 'https://www.pennsylvaniaworkforce.org' },
          { label: 'Mentor Pennsylvania Students', url: 'https://www.bigbrothersbigsisters.org/pennsylvania' }
        ],
        safety: [
          { label: 'Pennsylvania School Safety', url: 'https://www.education.pa.gov/safety' },
          { label: 'Pennsylvania Mental Health Resources', url: 'https://www.pennsylvaniamentalhealth.org' },
          { label: 'Support Pennsylvania School Counselors', url: 'https://www.pennsylvaniaschoolcounselors.org' }
        ]
      },
      'Rhode Island': {
        funding: [
          { label: 'Rhode Island Education Foundation', url: 'https://www.rhodeislandeducation.org' },
          { label: 'Donate to Rhode Island Schools', url: 'https://www.donorschoose.org/search?q=Rhode+Island' },
          { label: 'Rhode Island Legislature Education', url: 'https://www.rilegislature.gov' }
        ],
        teacher: [
          { label: 'Rhode Island Federation of Teachers and Health Professionals', url: 'https://www.rifthp.org' },
          { label: 'Rhode Island Teacher Support', url: 'https://www.rhodeislandteachers.org' },
          { label: 'Volunteer in Rhode Island Schools', url: 'https://www.volunteermatch.org/search?l=Rhode+Island&categories=13' }
        ],
        literacy: [
          { label: 'Rhode Island Reading Initiative', url: 'https://www.ride.ri.gov/reading' },
          { label: 'Donate Books to Rhode Island Schools', url: 'https://www.firstbook.org/rhodeisland' },
          { label: 'Rhode Island Literacy Council', url: 'https://www.rhodeislandliteracy.org' }
        ],
        career: [
          { label: 'Rhode Island Career Technical Education', url: 'https://www.ride.ri.gov/cte' },
          { label: 'Rhode Island Workforce Development', url: 'https://www.rhodeislandworkforce.org' },
          { label: 'Mentor Rhode Island Students', url: 'https://www.bigbrothersbigsisters.org/rhodeisland' }
        ],
        safety: [
          { label: 'Rhode Island School Safety', url: 'https://www.ride.ri.gov/safety' },
          { label: 'Rhode Island Mental Health Resources', url: 'https://www.rhodeislandmentalhealth.org' },
          { label: 'Support Rhode Island School Counselors', url: 'https://www.rhodeislandschoolcounselors.org' }
        ]
      },
      'South Carolina': {
        funding: [
          { label: 'South Carolina Education Foundation', url: 'https://www.southcarolinaeducation.org' },
          { label: 'Donate to South Carolina Schools', url: 'https://www.donorschoose.org/search?q=South+Carolina' },
          { label: 'South Carolina Legislature Education', url: 'https://www.scstatehouse.gov' }
        ],
        teacher: [
          { label: 'South Carolina Education Association', url: 'https://www.thescea.org' },
          { label: 'South Carolina Teacher Support', url: 'https://www.southcarolinateachers.org' },
          { label: 'Volunteer in South Carolina Schools', url: 'https://www.volunteermatch.org/search?l=South+Carolina&categories=13' }
        ],
        literacy: [
          { label: 'South Carolina Reading Initiative', url: 'https://www.ed.sc.gov/reading' },
          { label: 'Donate Books to South Carolina Schools', url: 'https://www.firstbook.org/southcarolina' },
          { label: 'South Carolina Literacy Council', url: 'https://www.southcarolinaliteracy.org' }
        ],
        career: [
          { label: 'South Carolina Career Technical Education', url: 'https://www.ed.sc.gov/cte' },
          { label: 'South Carolina Workforce Development', url: 'https://www.southcarolinaworkforce.org' },
          { label: 'Mentor South Carolina Students', url: 'https://www.bigbrothersbigsisters.org/southcarolina' }
        ],
        safety: [
          { label: 'South Carolina School Safety', url: 'https://www.ed.sc.gov/safety' },
          { label: 'South Carolina Mental Health Resources', url: 'https://www.southcarolinamentalhealth.org' },
          { label: 'Support South Carolina School Counselors', url: 'https://www.southcarolinaschoolcounselors.org' }
        ]
      },
      'South Dakota': {
        funding: [
          { label: 'South Dakota Education Foundation', url: 'https://www.southdakotaeducation.org' },
          { label: 'Donate to South Dakota Schools', url: 'https://www.donorschoose.org/search?q=South+Dakota' },
          { label: 'South Dakota Legislature Education', url: 'https://www.sdlegislature.gov' }
        ],
        teacher: [
          { label: 'South Dakota Education Association', url: 'https://www.sdea.org' },
          { label: 'South Dakota Teacher Support', url: 'https://www.southdakotateachers.org' },
          { label: 'Volunteer in South Dakota Schools', url: 'https://www.volunteermatch.org/search?l=South+Dakota&categories=13' }
        ],
        literacy: [
          { label: 'South Dakota Reading Initiative', url: 'https://www.doe.sd.gov/reading' },
          { label: 'Donate Books to South Dakota Schools', url: 'https://www.firstbook.org/southdakota' },
          { label: 'South Dakota Literacy Council', url: 'https://www.southdakotaliteracy.org' }
        ],
        career: [
          { label: 'South Dakota Career Technical Education', url: 'https://www.doe.sd.gov/cte' },
          { label: 'South Dakota Workforce Development', url: 'https://www.southdakotaworkforce.org' },
          { label: 'Mentor South Dakota Students', url: 'https://www.bigbrothersbigsisters.org/southdakota' }
        ],
        safety: [
          { label: 'South Dakota School Safety', url: 'https://www.doe.sd.gov/safety' },
          { label: 'South Dakota Mental Health Resources', url: 'https://www.southdakotamentalhealth.org' },
          { label: 'Support South Dakota School Counselors', url: 'https://www.southdakotaschoolcounselors.org' }
        ]
      },
      'Tennessee': {
        funding: [
          { label: 'Tennessee Education Foundation', url: 'https://www.tennesseeeducation.org' },
          { label: 'Donate to Tennessee Schools', url: 'https://www.donorschoose.org/search?q=Tennessee' },
          { label: 'Tennessee Legislature Education', url: 'https://www.capitol.tn.gov' }
        ],
        teacher: [
          { label: 'Tennessee Education Association', url: 'https://www.teateachers.org' },
          { label: 'Tennessee Teacher Support', url: 'https://www.tennesseeteachers.org' },
          { label: 'Volunteer in Tennessee Schools', url: 'https://www.volunteermatch.org/search?l=Tennessee&categories=13' }
        ],
        literacy: [
          { label: 'Tennessee Reading Initiative', url: 'https://www.tn.gov/education/reading' },
          { label: 'Donate Books to Tennessee Schools', url: 'https://www.firstbook.org/tennessee' },
          { label: 'Tennessee Literacy Council', url: 'https://www.tennesseeliteracy.org' }
        ],
        career: [
          { label: 'Tennessee Career Technical Education', url: 'https://www.tn.gov/education/cte' },
          { label: 'Tennessee Workforce Development', url: 'https://www.tennesseeworkforce.org' },
          { label: 'Mentor Tennessee Students', url: 'https://www.bigbrothersbigsisters.org/tennessee' }
        ],
        safety: [
          { label: 'Tennessee School Safety', url: 'https://www.tn.gov/education/safety' },
          { label: 'Tennessee Mental Health Resources', url: 'https://www.tennesseementalhealth.org' },
          { label: 'Support Tennessee School Counselors', url: 'https://www.tennesseeschoolcounselors.org' }
        ]
      },
      'Texas': {
        funding: [
          { label: 'Texas Education Foundation', url: 'https://www.tea.texas.gov' },
          { label: 'Donate to Texas Schools', url: 'https://www.donorschoose.org/search?q=Texas' },
          { label: 'Texas Legislature Education', url: 'https://www.capitol.texas.gov' }
        ],
        teacher: [
          { label: 'Texas State Teachers Association', url: 'https://www.tsta.org' },
          { label: 'Texas Teacher Support', url: 'https://www.tea.texas.gov/teacher' },
          { label: 'Volunteer in Texas Schools', url: 'https://www.volunteermatch.org/search?l=Texas&categories=13' }
        ],
        literacy: [
          { label: 'Texas Reading Initiative', url: 'https://www.tea.texas.gov/reading' },
          { label: 'Donate Books to Texas Schools', url: 'https://www.donorschoose.org/search?q=Texas+books' },
          { label: 'Texas Literacy Council', url: 'https://www.tea.texas.gov/reading' }
        ],
        career: [
          { label: 'Texas Career Technical Education', url: 'https://www.tea.texas.gov/cte' },
          { label: 'Texas Workforce Development', url: 'https://www.texasworkforce.org' },
          { label: 'Mentor Texas Students', url: 'https://www.bigbrothersbigsisters.org/get-involved/volunteer' }
        ],
        safety: [
          { label: 'Texas School Safety', url: 'https://www.tea.texas.gov/safety' },
          { label: 'Texas Mental Health Resources', url: 'https://www.hhs.texas.gov/mental-health' },
          { label: 'Support Texas School Counselors', url: 'https://www.tea.texas.gov/safety' }
        ]
      },
      'Utah': {
        funding: [
          { label: 'Utah Education Foundation', url: 'https://www.utaheducation.org' },
          { label: 'Donate to Utah Schools', url: 'https://www.donorschoose.org/search?q=Utah' },
          { label: 'Utah Legislature Education', url: 'https://www.le.utah.gov' }
        ],
        teacher: [
          { label: 'Utah Education Association', url: 'https://www.utea.org' },
          { label: 'Utah Teacher Support', url: 'https://www.utahteachers.org' },
          { label: 'Volunteer in Utah Schools', url: 'https://www.volunteermatch.org/search?l=Utah&categories=13' }
        ],
        literacy: [
          { label: 'Utah Reading Initiative', url: 'https://www.schools.utah.gov/reading' },
          { label: 'Donate Books to Utah Schools', url: 'https://www.firstbook.org/utah' },
          { label: 'Utah Literacy Council', url: 'https://www.utaheliteracy.org' }
        ],
        career: [
          { label: 'Utah Career Technical Education', url: 'https://www.schools.utah.gov/cte' },
          { label: 'Utah Workforce Development', url: 'https://www.utahworkforce.org' },
          { label: 'Mentor Utah Students', url: 'https://www.bigbrothersbigsisters.org/utah' }
        ],
        safety: [
          { label: 'Utah School Safety', url: 'https://www.schools.utah.gov/safety' },
          { label: 'Utah Mental Health Resources', url: 'https://www.utahmentalhealth.org' },
          { label: 'Support Utah School Counselors', url: 'https://www.utahschoolcounselors.org' }
        ]
      },
      'Vermont': {
        funding: [
          { label: 'Vermont Education Foundation', url: 'https://www.vermonteducation.org' },
          { label: 'Donate to Vermont Schools', url: 'https://www.donorschoose.org/search?q=Vermont' },
          { label: 'Vermont Legislature Education', url: 'https://www.legislature.vermont.gov' }
        ],
        teacher: [
          { label: 'Vermont National Education Association', url: 'https://www.vtnea.org' },
          { label: 'Vermont Teacher Support', url: 'https://www.vermontteachers.org' },
          { label: 'Volunteer in Vermont Schools', url: 'https://www.volunteermatch.org/search?l=Vermont&categories=13' }
        ],
        literacy: [
          { label: 'Vermont Reading Initiative', url: 'https://www.education.vermont.gov/reading' },
          { label: 'Donate Books to Vermont Schools', url: 'https://www.firstbook.org/vermont' },
          { label: 'Vermont Literacy Council', url: 'https://www.vermontliteracy.org' }
        ],
        career: [
          { label: 'Vermont Career Technical Education', url: 'https://www.education.vermont.gov/cte' },
          { label: 'Vermont Workforce Development', url: 'https://www.vermontworkforce.org' },
          { label: 'Mentor Vermont Students', url: 'https://www.bigbrothersbigsisters.org/vermont' }
        ],
        safety: [
          { label: 'Vermont School Safety', url: 'https://www.education.vermont.gov/safety' },
          { label: 'Vermont Mental Health Resources', url: 'https://www.vermontmentalhealth.org' },
          { label: 'Support Vermont School Counselors', url: 'https://www.vermontschoolcounselors.org' }
        ]
      },
      'Virginia': {
        funding: [
          { label: 'Virginia Education Foundation', url: 'https://www.virginiaeducation.org' },
          { label: 'Donate to Virginia Schools', url: 'https://www.donorschoose.org/search?q=Virginia' },
          { label: 'Virginia Legislature Education', url: 'https://www.virginiageneralassembly.gov' }
        ],
        teacher: [
          { label: 'Virginia Education Association', url: 'https://www.veanea.org' },
          { label: 'Virginia Teacher Support', url: 'https://www.virginiateachers.org' },
          { label: 'Volunteer in Virginia Schools', url: 'https://www.volunteermatch.org/search?l=Virginia&categories=13' }
        ],
        literacy: [
          { label: 'Virginia Reading Initiative', url: 'https://www.doe.virginia.gov/reading' },
          { label: 'Donate Books to Virginia Schools', url: 'https://www.firstbook.org/virginia' },
          { label: 'Virginia Literacy Council', url: 'https://www.virginialiteracy.org' }
        ],
        career: [
          { label: 'Virginia Career Technical Education', url: 'https://www.doe.virginia.gov/cte' },
          { label: 'Virginia Workforce Development', url: 'https://www.virginiaworkforce.org' },
          { label: 'Mentor Virginia Students', url: 'https://www.bigbrothersbigsisters.org/virginia' }
        ],
        safety: [
          { label: 'Virginia School Safety', url: 'https://www.doe.virginia.gov/safety' },
          { label: 'Virginia Mental Health Resources', url: 'https://www.virginiamentalhealth.org' },
          { label: 'Support Virginia School Counselors', url: 'https://www.virginiaschoolcounselors.org' }
        ]
      },
      'Washington': {
        funding: [
          { label: 'Washington Education Foundation', url: 'https://www.washingtoneducation.org' },
          { label: 'Donate to Washington Schools', url: 'https://www.donorschoose.org/search?q=Washington' },
          { label: 'Washington Legislature Education', url: 'https://www.leg.wa.gov' }
        ],
        teacher: [
          { label: 'Washington Education Association', url: 'https://www.washingtonea.org' },
          { label: 'Washington Teacher Support', url: 'https://www.washingtonteachers.org' },
          { label: 'Volunteer in Washington Schools', url: 'https://www.volunteermatch.org/search?l=Washington&categories=13' }
        ],
        literacy: [
          { label: 'Washington Reading Initiative', url: 'https://www.k12.wa.us/reading' },
          { label: 'Donate Books to Washington Schools', url: 'https://www.firstbook.org/washington' },
          { label: 'Washington Literacy Council', url: 'https://www.washingtonliteracy.org' }
        ],
        career: [
          { label: 'Washington Career Technical Education', url: 'https://www.k12.wa.us/cte' },
          { label: 'Washington Workforce Development', url: 'https://www.washingtonworkforce.org' },
          { label: 'Mentor Washington Students', url: 'https://www.bigbrothersbigsisters.org/washington' }
        ],
        safety: [
          { label: 'Washington School Safety', url: 'https://www.k12.wa.us/safety' },
          { label: 'Washington Mental Health Resources', url: 'https://www.washingtonmentalhealth.org' },
          { label: 'Support Washington School Counselors', url: 'https://www.washingtonschoolcounselors.org' }
        ]
      },
      'West Virginia': {
        funding: [
          { label: 'West Virginia Education Foundation', url: 'https://www.westvirginiaeducation.org' },
          { label: 'Donate to West Virginia Schools', url: 'https://www.donorschoose.org/search?q=West+Virginia' },
          { label: 'West Virginia Legislature Education', url: 'https://www.wvlegislature.gov' }
        ],
        teacher: [
          { label: 'West Virginia Education Association', url: 'https://www.wvea.org' },
          { label: 'West Virginia Teacher Support', url: 'https://www.westvirginiateachers.org' },
          { label: 'Volunteer in West Virginia Schools', url: 'https://www.volunteermatch.org/search?l=West+Virginia&categories=13' }
        ],
        literacy: [
          { label: 'West Virginia Reading Initiative', url: 'https://www.wvde.us/reading' },
          { label: 'Donate Books to West Virginia Schools', url: 'https://www.firstbook.org/westvirginia' },
          { label: 'West Virginia Literacy Council', url: 'https://www.westvirginialiteracy.org' }
        ],
        career: [
          { label: 'West Virginia Career Technical Education', url: 'https://www.wvde.us/cte' },
          { label: 'West Virginia Workforce Development', url: 'https://www.westvirginiaworkforce.org' },
          { label: 'Mentor West Virginia Students', url: 'https://www.bigbrothersbigsisters.org/westvirginia' }
        ],
        safety: [
          { label: 'West Virginia School Safety', url: 'https://www.wvde.us/safety' },
          { label: 'West Virginia Mental Health Resources', url: 'https://www.westvirginiamentalhealth.org' },
          { label: 'Support West Virginia School Counselors', url: 'https://www.westvirginiaschoolcounselors.org' }
        ]
      },
      'Wisconsin': {
        funding: [
          { label: 'Wisconsin Education Foundation', url: 'https://www.wisconsineducation.org' },
          { label: 'Donate to Wisconsin Schools', url: 'https://www.donorschoose.org/search?q=Wisconsin' },
          { label: 'Wisconsin Legislature Education', url: 'https://www.legis.wisconsin.gov' }
        ],
        teacher: [
          { label: 'Wisconsin Education Association Council', url: 'https://www.weac.org' },
          { label: 'Wisconsin Teacher Support', url: 'https://www.wisconsinteachers.org' },
          { label: 'Volunteer in Wisconsin Schools', url: 'https://www.volunteermatch.org/search?l=Wisconsin&categories=13' }
        ],
        literacy: [
          { label: 'Wisconsin Reading Initiative', url: 'https://www.dpi.wi.gov/reading' },
          { label: 'Donate Books to Wisconsin Schools', url: 'https://www.firstbook.org/wisconsin' },
          { label: 'Wisconsin Literacy Council', url: 'https://www.wisconsinliteracy.org' }
        ],
        career: [
          { label: 'Wisconsin Career Technical Education', url: 'https://www.dpi.wi.gov/cte' },
          { label: 'Wisconsin Workforce Development', url: 'https://www.wisconsinworkforce.org' },
          { label: 'Mentor Wisconsin Students', url: 'https://www.bigbrothersbigsisters.org/wisconsin' }
        ],
        safety: [
          { label: 'Wisconsin School Safety', url: 'https://www.dpi.wi.gov/safety' },
          { label: 'Wisconsin Mental Health Resources', url: 'https://www.wisconsinmentalhealth.org' },
          { label: 'Support Wisconsin School Counselors', url: 'https://www.wisconsinschoolcounselors.org' }
        ]
      },
      'Wyoming': {
        funding: [
          { label: 'Wyoming Education Foundation', url: 'https://www.wyomingeducation.org' },
          { label: 'Donate to Wyoming Schools', url: 'https://www.donorschoose.org/search?q=Wyoming' },
          { label: 'Wyoming Legislature Education', url: 'https://www.wyoleg.gov' }
        ],
        teacher: [
          { label: 'Wyoming Education Association', url: 'https://www.wyoea.org' },
          { label: 'Wyoming Teacher Support', url: 'https://www.wyomingteachers.org' },
          { label: 'Volunteer in Wyoming Schools', url: 'https://www.volunteermatch.org/search?l=Wyoming&categories=13' }
        ],
        literacy: [
          { label: 'Wyoming Reading Initiative', url: 'https://www.edu.wyoming.gov/reading' },
          { label: 'Donate Books to Wyoming Schools', url: 'https://www.firstbook.org/wyoming' },
          { label: 'Wyoming Literacy Council', url: 'https://www.wyomingliteracy.org' }
        ],
        career: [
          { label: 'Wyoming Career Technical Education', url: 'https://www.edu.wyoming.gov/cte' },
          { label: 'Wyoming Workforce Development', url: 'https://www.wyomingworkforce.org' },
          { label: 'Mentor Wyoming Students', url: 'https://www.bigbrothersbigsisters.org/wyoming' }
        ],
        safety: [
          { label: 'Wyoming School Safety', url: 'https://www.edu.wyoming.gov/safety' },
          { label: 'Wyoming Mental Health Resources', url: 'https://www.wyomingmentalhealth.org' },
          { label: 'Support Wyoming School Counselors', url: 'https://www.wyomingschoolcounselors.org' }
        ]
      }
    };

    // Return resources for the state, or default resources if state not found
    return stateResources[state] || stateResources['Alabama'];
  }

  // Enhanced AI-powered location detection and content generation
  function detectLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        // In a real implementation, you would use reverse geocoding API
        // For demo purposes, we'll simulate location detection based on coordinates
        var lat = position.coords.latitude;
        var lng = position.coords.longitude;
        
        // Simulate location detection based on coordinates
        var detectedLocation = getLocationFromCoordinates(lat, lng);
        generateLocationContent(detectedLocation);
      }, function(error) {
        console.log('Geolocation not available, using IP-based detection');
        detectLocationByIP();
      });
    } else {
      console.log('Geolocation not supported, using IP-based detection');
      detectLocationByIP();
    }
  }

  // Simulate location detection from coordinates
  function getLocationFromCoordinates(lat, lng) {
    // This would normally use a reverse geocoding service
    // For demo purposes, we'll return different locations based on coordinate ranges
    if (lat >= 40.7 && lat <= 41.0 && lng >= -87.8 && lng <= -87.5) {
      return 'Chicago';
    } else if (lat >= 34.0 && lat <= 34.5 && lng >= -118.5 && lng <= -118.0) {
      return 'Los Angeles';
    } else if (lat >= 40.7 && lat <= 40.8 && lng >= -74.0 && lng <= -73.9) {
      return 'New York City';
    } else if (lat >= 29.7 && lat <= 29.8 && lng >= -95.4 && lng <= -95.3) {
      return 'Houston';
    } else if (lat >= 33.4 && lat <= 33.5 && lng >= -112.1 && lng <= -112.0) {
      return 'Phoenix';
    } else if (lat >= 39.7 && lat <= 39.8 && lng >= -105.0 && lng <= -104.9) {
      return 'Denver';
    } else if (lat >= 47.6 && lat <= 47.7 && lng >= -122.4 && lng <= -122.3) {
      return 'Seattle';
    } else if (lat >= 25.7 && lat <= 25.8 && lng >= -80.3 && lng <= -80.2) {
      return 'Miami';
    } else if (lat >= 30.2 && lat <= 30.3 && lng >= -97.8 && lng <= -97.7) {
      return 'Austin';
    } else if (lat >= 33.7 && lat <= 33.8 && lng >= -84.4 && lng <= -84.3) {
      return 'Atlanta';
    } else {
      // Default to a random state for demo purposes
      var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia'];
      return states[Math.floor(Math.random() * states.length)];
    }
  }

  // IP-based location detection fallback
  function detectLocationByIP() {
    // In a real implementation, you would use an IP geolocation service
    // For demo purposes, we'll simulate different locations
    var simulatedLocations = ['Chicago', 'Los Angeles', 'New York City', 'Houston', 'Phoenix', 'Denver', 'Seattle', 'Miami', 'Austin', 'Atlanta'];
    var randomLocation = simulatedLocations[Math.floor(Math.random() * simulatedLocations.length)];
    generateLocationContent(randomLocation);
  }

  function generateLocationContent(location) {
    var content = locationData[location];
    
    // If specific location not found, try to find by state
    if (!content) {
      for (var key in locationData) {
        if (locationData[key].state === location) {
          content = locationData[key];
          break;
        }
      }
    }
    
    // Fallback to default location
    if (!content) {
      content = locationData['Chicago'];
    }
    
    var container = document.getElementById('locationCards');
    if (!container) return;

    container.innerHTML = '';

    // Create challenge cards
    if (content.challenges && content.challenges.length > 0) {
      var challengesHeader = document.createElement('div');
      challengesHeader.className = 'section-header';
      challengesHeader.innerHTML = '<h4>Top 3 Educational Challenges in ' + location + ', ' + content.state + '</h4>';
      container.appendChild(challengesHeader);

      // Create a single container for all challenges
      var challengesContainer = document.createElement('div');
      challengesContainer.className = 'challenges-container';
      
      var challengesContent = '<div class="challenges-list">';
      content.challenges.forEach(function(challenge, index) {
        var challengeNumbers = ['One', 'Two', 'Three'];
        var challengeNumber = challengeNumbers[index] || (index + 1);
        challengesContent += '<div class="challenge-item"><h5>Challenge ' + challengeNumber + '</h5><p>' + challenge + '</p></div>';
      });
      challengesContent += '</div>';
      
      challengesContainer.innerHTML = challengesContent;
      container.appendChild(challengesContainer);
    }

    // Create resource cards
    if (content.resources && content.resources.length > 0) {
      var resourcesHeader = document.createElement('div');
      resourcesHeader.className = 'section-header';
      resourcesHeader.innerHTML = '<h4>Local Resources & Action Items in ' + location + ', ' + content.state + '</h4>';
      container.appendChild(resourcesHeader);

      // Create a container specifically for the resources
      var resourcesContainer = document.createElement('div');
      resourcesContainer.className = 'resources-grid';

      content.resources.forEach(function(resource) {
        var card = document.createElement('div');
        card.className = 'location-card resource-card';
        
        var actions = document.createElement('div');
        actions.className = 'actions';
        
        var link = document.createElement('a');
        link.href = resource.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'btn';
        link.textContent = 'Learn More';
        
        actions.appendChild(link);
        card.innerHTML = '<h5>' + resource.name + '</h5><p>Local resource for ' + content.state + '</p>';
        card.appendChild(actions);
        resourcesContainer.appendChild(card);
      });
      
      container.appendChild(resourcesContainer);
    }

    // Add additional local opportunities
    var opportunitiesHeader = document.createElement('div');
    opportunitiesHeader.className = 'section-header';
    opportunitiesHeader.innerHTML = '<h4>Support ' + content.state + ' Schools</h4>';
    container.appendChild(opportunitiesHeader);

    var opportunitiesCard = document.createElement('div');
    opportunitiesCard.className = 'location-card opportunities-card';
    opportunitiesCard.innerHTML = 
      '<h5>Volunteer & Donate</h5>' +
      '<p>Find local volunteer opportunities, donation pages, and petitions in your area.</p>' +
      '<div class="actions">' +
        '<a href="https://www.volunteermatch.org/search?l=' + encodeURIComponent(location) + '&categories=13" target="_blank" class="btn">Find Volunteer Opportunities</a>' +
        '<a href="https://www.donorschoose.org/search?q=' + encodeURIComponent(location) + '" target="_blank" class="btn">Donate to Local Schools</a>' +
        '<a href="https://www.change.org/search?q=education+' + encodeURIComponent(location) + '" target="_blank" class="btn">Sign Petitions</a>' +
      '</div>';
    container.appendChild(opportunitiesCard);
  }

  function populateStates(selectEl) {
    var frag = document.createDocumentFragment();
    var defaultOpt = document.createElement('option');
    defaultOpt.value = '';
    defaultOpt.textContent = 'Choose a state';
    frag.appendChild(defaultOpt);
    states.forEach(function (s) {
      var opt = document.createElement('option');
      opt.value = s;
      opt.textContent = s;
      frag.appendChild(opt);
    });
    selectEl.appendChild(frag);
  }

  function createActionButton(label, href) {
    var a = document.createElement('a');
    a.href = href;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.className = 'btn';
    a.textContent = label;
    return a;
  }

  function renderTopics(container, state) {
    container.innerHTML = '';
    if (!state) return;
    var topics = getTopicsForState(state);

    topics.forEach(function (t) {
      var div = document.createElement('div');
      div.className = 'topic';

      var h4 = document.createElement('h4');
      h4.textContent = t.title + ' — ' + state;
      var p = document.createElement('p');
      p.textContent = t.summary;

      var actions = document.createElement('div');
      actions.className = 'actions';

      // Use enhanced actions from topic data
      if (t.actions) {
        t.actions.forEach(function(action) {
          actions.appendChild(createActionButton(action.label, action.url));
        });
      } else {
        // Fallback to default actions
      actions.appendChild(createActionButton('Donate to a local classroom', 'https://www.donorschoose.org/'));
      actions.appendChild(createActionButton('Contact your state senators', 'https://www.senate.gov/senators/senators-contact.htm'));
      actions.appendChild(createActionButton('Find local advocacy events', 'https://www.eventbrite.com/d/online/education-advocacy/'));
      actions.appendChild(createActionButton('State Dept. of Education', 'https://www2.ed.gov/about/contacts/state/index.html'));
      }

      div.appendChild(h4);
      div.appendChild(p);
      div.appendChild(actions);
      container.appendChild(div);
    });
  }

  // Success Stories functionality with fake data and local prioritization
  function loadStories() {
    var userStories = JSON.parse(localStorage.getItem('educationStories') || '[]');
    var fakeStories = getFakeSuccessStories();
    var allStories = [...fakeStories, ...userStories];
    
    // Sort stories to show local ones first
    var currentLocation = getCurrentLocation();
    allStories.sort(function(a, b) {
      var aIsLocal = isLocalStory(a.location, currentLocation);
      var bIsLocal = isLocalStory(b.location, currentLocation);
      if (aIsLocal && !bIsLocal) return -1;
      if (!aIsLocal && bIsLocal) return 1;
      return 0;
    });

    var container = document.getElementById('storiesDisplay');
    if (!container) return;

    container.innerHTML = '';
    allStories.forEach(function(story) {
      var storyDiv = document.createElement('div');
      var isLocal = isLocalStory(story.location, currentLocation);
      var isUserStory = story.userId === getCurrentUserId();
      
      storyDiv.className = 'story-item' + (isLocal ? ' local-story' : '') + (isUserStory ? ' user-story' : '');
      
      var managementButtons = '';
      if (isUserStory) {
        managementButtons = 
          '<div class="story-management">' +
            '<button class="btn-edit" onclick="editStory(' + story.id + ')">✏️ Edit</button>' +
            '<button class="btn-delete" onclick="deleteStory(' + story.id + ')">🗑️ Delete</button>' +
          '</div>';
      }
      
      storyDiv.innerHTML = 
        '<h4>' + story.title + '</h4>' +
        '<div class="story-location">📍 ' + story.location + '</div>' +
        '<div class="story-content">' + story.content + '</div>' +
        managementButtons;
      container.appendChild(storyDiv);
    });
  }

  // Get fake success stories
  function getFakeSuccessStories() {
    return [
      {
        title: "Reading Program Success in Rural Texas",
        location: "Lubbock, Texas",
        content: "Our small school district implemented a new reading program and saw a 40% improvement in literacy scores among third graders. The community came together to support our teachers with additional resources and volunteer tutors."
      },
      {
        title: "STEM Initiative Transforms Chicago School",
        location: "Chicago, Illinois", 
        content: "We launched a robotics program that has inspired over 200 students to pursue STEM careers. Local tech companies partnered with us to provide mentorship and internship opportunities. The program has become a model for other schools in the district."
      },
      {
        title: "Teacher Retention Success in California",
        location: "Los Angeles, California",
        content: "Our district implemented comprehensive teacher support programs including mentorship, professional development, and competitive compensation. Teacher turnover decreased by 60% and student achievement scores improved significantly across all grade levels."
      },
      {
        title: "Digital Learning Bridge in Rural Alaska",
        location: "Anchorage, Alaska",
        content: "We connected remote villages with high-quality education through innovative digital learning platforms. Students who previously had limited access to advanced courses are now thriving in online AP classes and dual enrollment programs."
      },
      {
        title: "Community Partnership in Georgia",
        location: "Atlanta, Georgia",
        content: "Local businesses, nonprofits, and families joined forces to create after-school programs that serve over 1,000 students. The initiative has reduced dropout rates by 35% and increased college enrollment among participating students."
      },
      {
        title: "Mental Health Support in New York Schools",
        location: "New York, New York",
        content: "We implemented comprehensive mental health services including counselors, peer support groups, and mindfulness programs. Student well-being scores improved dramatically, and we've seen a significant reduction in disciplinary incidents."
      },
      {
        title: "Career Pathways Program in Ohio",
        location: "Columbus, Ohio",
        content: "Our career technical education program has prepared over 500 students for high-demand jobs in manufacturing, healthcare, and technology. Graduates are earning competitive wages and contributing to the local economy."
      },
      {
        title: "Early Childhood Education in Florida",
        location: "Miami, Florida",
        content: "We expanded pre-K programs to serve all 4-year-olds in our community. The investment in early childhood education has led to improved kindergarten readiness and long-term academic success for our students."
      }
    ];
  }

  // Check if a story is local to the current user
  function isLocalStory(storyLocation, currentLocation) {
    if (!currentLocation) return false;
    
    // Simple location matching - could be enhanced with more sophisticated matching
    var storyState = extractState(storyLocation);
    var currentState = extractState(currentLocation);
    
    return storyState && currentState && storyState.toLowerCase() === currentState.toLowerCase();
  }

  // Extract state from location string
  function extractState(location) {
    var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    
    for (var i = 0; i < states.length; i++) {
      if (location.toLowerCase().includes(states[i].toLowerCase())) {
        return states[i];
      }
    }
    return null;
  }

  // Get current user location
  function getCurrentLocation() {
    return localStorage.getItem('userLocation') || '';
  }

  // Content filtering for inappropriate language
  function filterContent(content) {
    var inappropriateWords = ['bad', 'terrible', 'awful', 'hate', 'stupid', 'dumb', 'idiot', 'moron'];
    var filteredContent = content;
    
    inappropriateWords.forEach(function(word) {
      var regex = new RegExp('\\b' + word + '\\b', 'gi');
      filteredContent = filteredContent.replace(regex, '[filtered]');
    });
    
    return filteredContent;
  }

  function saveStory(story) {
    // Filter content for inappropriate language
    story.content = filterContent(story.content);
    story.title = filterContent(story.title);
    
    var stories = JSON.parse(localStorage.getItem('educationStories') || '[]');
    story.id = Date.now();
    story.userId = getCurrentUserId();
    story.date = new Date().toLocaleDateString();
    stories.unshift(story);
    localStorage.setItem('educationStories', JSON.stringify(stories));
    loadStories();
  }

  // Get or create current user ID
  function getCurrentUserId() {
    var userId = localStorage.getItem('userId');
    if (!userId) {
      userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      localStorage.setItem('userId', userId);
    }
    return userId;
  }

  // Custom Alert Function
  function showCustomAlert(type, title, message, branding) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'custom-alert';
    
    var icon = '';
    switch(type) {
      case 'success':
        icon = '✅';
        break;
      case 'warning':
        icon = '⚠️';
        break;
      case 'danger':
        icon = '❌';
        break;
      default:
        icon = 'ℹ️';
    }
    
    alertDiv.innerHTML = 
      '<div class="alert-content">' +
        '<div class="alert-icon ' + type + '">' + icon + '</div>' +
        '<h3 class="alert-title">' + title + '</h3>' +
        '<p class="alert-message">' + message + '</p>' +
        '<div class="alert-branding">' + branding + '</div>' +
        '<div class="alert-actions">' +
          '<button class="alert-btn primary" onclick="closeCustomAlert()">OK</button>' +
        '</div>' +
      '</div>';
    
    document.body.appendChild(alertDiv);
    
    // Auto close after 4 seconds
    setTimeout(function() {
      closeCustomAlert();
    }, 4000);
  }

  // Custom Confirmation Function
  function showCustomConfirm(type, title, message, onConfirm) {
    var confirmDiv = document.createElement('div');
    confirmDiv.className = 'custom-alert';
    
    var icon = '';
    switch(type) {
      case 'warning':
        icon = '⚠️';
        break;
      case 'danger':
        icon = '❌';
        break;
      default:
        icon = '❓';
    }
    
    confirmDiv.innerHTML = 
      '<div class="alert-content">' +
        '<div class="alert-icon ' + type + '">' + icon + '</div>' +
        '<h3 class="alert-title">' + title + '</h3>' +
        '<p class="alert-message">' + message + '</p>' +
        '<div class="alert-branding">We at enlighten.org value your contributions</div>' +
        '<div class="alert-actions">' +
          '<button class="alert-btn secondary" onclick="closeCustomAlert()">Cancel</button>' +
          '<button class="alert-btn danger" onclick="confirmAction()">Confirm</button>' +
        '</div>' +
      '</div>';
    
    document.body.appendChild(confirmDiv);
    
    // Store the confirm callback
    window.pendingConfirm = onConfirm;
  }

  // Close custom alert/confirm
  function closeCustomAlert() {
    var alert = document.querySelector('.custom-alert');
    if (alert) {
      alert.remove();
    }
    window.pendingConfirm = null;
  }

  // Confirm action
  function confirmAction() {
    if (window.pendingConfirm) {
      window.pendingConfirm();
    }
    closeCustomAlert();
  }

  // Edit story function
  function editStory(storyId) {
    var stories = JSON.parse(localStorage.getItem('educationStories') || '[]');
    var story = stories.find(function(s) { return s.id == storyId; });
    
    if (!story) return;
    
    // Create edit modal
    var modal = document.createElement('div');
    modal.className = 'edit-modal';
    modal.innerHTML = 
      '<div class="modal-content">' +
        '<div class="modal-header">' +
          '<h3>Edit Your Story</h3>' +
          '<button class="modal-close" onclick="closeEditModal()">&times;</button>' +
        '</div>' +
        '<form id="editStoryForm">' +
          '<div class="form-group">' +
            '<label for="editTitle">Story Title</label>' +
            '<input type="text" id="editTitle" name="title" value="' + story.title + '" required />' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="editLocation">Location</label>' +
            '<input type="text" id="editLocation" name="location" value="' + story.location + '" required />' +
          '</div>' +
          '<div class="form-group">' +
            '<label for="editContent">Your Story</label>' +
            '<textarea id="editContent" name="content" rows="5" required>' + story.content + '</textarea>' +
          '</div>' +
          '<div class="modal-actions">' +
            '<button type="button" class="btn-cancel" onclick="closeEditModal()">Cancel</button>' +
            '<button type="submit" class="btn-save">Save Changes</button>' +
          '</div>' +
        '</form>' +
      '</div>';
    
    document.body.appendChild(modal);
    
    // Handle form submission
    var editForm = document.getElementById('editStoryForm');
    editForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var formData = new FormData(editForm);
      var updatedStory = {
        id: storyId,
        userId: story.userId,
        title: filterContent(formData.get('title')),
        location: formData.get('location'),
        content: filterContent(formData.get('content')),
        date: story.date
      };
      
      updateStory(updatedStory);
      closeEditModal();
    });
  }

  // Update story function
  function updateStory(updatedStory) {
    var stories = JSON.parse(localStorage.getItem('educationStories') || '[]');
    var index = stories.findIndex(function(s) { return s.id == updatedStory.id; });
    
    if (index !== -1) {
      stories[index] = updatedStory;
      localStorage.setItem('educationStories', JSON.stringify(stories));
      loadStories();
      showCustomAlert('success', 'Story Updated!', 'Your story has been updated successfully!', 'We at enlighten.org are happy that you shared your story with us.');
    }
  }

  // Delete story function
  function deleteStory(storyId) {
    showCustomConfirm('warning', 'Delete Story', 'Are you sure you want to delete this story? This action cannot be undone.', function() {
      var stories = JSON.parse(localStorage.getItem('educationStories') || '[]');
      var filteredStories = stories.filter(function(s) { return s.id != storyId; });
      localStorage.setItem('educationStories', JSON.stringify(filteredStories));
      loadStories();
      showCustomAlert('success', 'Story Deleted', 'Your story has been deleted.', 'We at enlighten.org appreciate your contribution to our community.');
    });
  }

  // Close edit modal
  function closeEditModal() {
    var modal = document.querySelector('.edit-modal');
    if (modal) {
      modal.remove();
    }
  }

  // View Stories Button functionality
  function toggleStories() {
    var storiesDisplay = document.getElementById('storiesDisplay');
    var viewBtn = document.getElementById('viewStoriesBtn');
    var hideBtn = document.getElementById('hideStoriesBtn');
    
    if (storiesDisplay.style.display === 'none' || storiesDisplay.style.display === '') {
      storiesDisplay.style.display = 'grid';
      viewBtn.style.display = 'none';
      hideBtn.style.display = 'inline-block';
      loadStories();
    } else {
      storiesDisplay.style.display = 'none';
      viewBtn.style.display = 'inline-block';
      hideBtn.style.display = 'none';
    }
  }

  // Scroll to action function
  function scrollToAction() {
    var locationSection = document.getElementById('locationContent');
    if (locationSection) {
      locationSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Make functions globally available
  window.scrollToAction = scrollToAction;
  window.editStory = editStory;
  window.deleteStory = deleteStory;
  window.closeEditModal = closeEditModal;
  window.closeCustomAlert = closeCustomAlert;
  window.confirmAction = confirmAction;

  document.addEventListener('DOMContentLoaded', function () {
    var select = document.getElementById('state');
    var topics = document.getElementById('topics');
    var storyForm = document.getElementById('storyForm');

    if (select && topics) {
    populateStates(select);
    select.addEventListener('change', function () {
      renderTopics(topics, select.value);
    });
    }

    // Initialize location-based content
    detectLocation();

    // Load existing stories
    loadStories();

    // Handle story form submission
    if (storyForm) {
      storyForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        var formData = new FormData(storyForm);
        var story = {
          title: formData.get('title'),
          location: formData.get('location'),
          content: formData.get('content')
        };

          if (story.title && story.location && story.content) {
            saveStory(story);
            storyForm.reset();
            showCustomAlert('success', 'Thank You!', 'Thank you for sharing your story! It has been added to our community stories.', 'We at enlighten.org are happy that you shared with us.');
          }
      });
    }

    // View Stories Button functionality
    var viewStoriesBtn = document.getElementById('viewStoriesBtn');
    var hideStoriesBtn = document.getElementById('hideStoriesBtn');
    
    if (viewStoriesBtn) {
      viewStoriesBtn.addEventListener('click', toggleStories);
    }
    
    if (hideStoriesBtn) {
      hideStoriesBtn.addEventListener('click', toggleStories);
    }
  });
})();
