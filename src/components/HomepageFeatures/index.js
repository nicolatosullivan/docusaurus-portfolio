import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Procedural Writing',
    description: (
      <>
Procedural writing samples demonstrating clear, step-by-step instructions and user-focused communication.
      </>
    ),
  },
  {
    title: 'Release Notes',
    description: (
      <>
       Samples of release notes and processes showing clear communication and easy-to-follow instructions.
      </>
    ),
  },
  {
    title: 'Summary Writing',
    description: (
      <>
       Summary writing sample demonstrating my ability to simplify complex information.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
