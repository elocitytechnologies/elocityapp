import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: (
	<a href="/docs/UserGuide/Introduction" target="_self" rel="noopener noreferrer">
<div className="title">User Guide</div>
	</a>
	),
    Svg: require('@site/static/img/sps.svg').default,	
    description: (
    <div className="description">  <>
        <a href="/docs/UserGuide/Introduction" target="_self" rel="noopener noreferrer">
          Click here
        </a> to read the documents that offer guidance on platform setup, user management, billing, customer support, etc.</>
	</div>
	   
    ),
  },
  {
    title: (
	<a href="/docs/FAQs" target="_self" rel="noopener noreferrer">
	<div className="title">FAQs</div>
	</a>
	),
    Svg: require('@site/static/img/sbs.svg').default,
    description: (
      <div className="description"> <>
       <a href="/docs/FAQs" target="_self" rel="noopener noreferrer">
          Click here
        </a> to all the frequently asked questions.
      </>
		</div>

    ),
  },
  {
    title: (
	<a href="/docs/ReleaseNotes/intro" target="_self" rel="noopener noreferrer">
	<div className="title">Release Notes</div>
	</a>
	),
    Svg: require('@site/static/img/rn.svg').default,
	
    
	description: (
      <div className="description"> <>
        <a href="/docs/ReleaseNotes/intro" target="_self" rel="noopener noreferrer">
          Click here 
        </a> to learn about the new features, enhancements, known issues, and bugs in all the releases till date.
      </>
	  </div>
    ),
  },
  
  /* {
    title: 'API Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  }, 
  */
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
