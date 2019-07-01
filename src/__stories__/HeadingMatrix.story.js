import React from 'react';
import { storiesOf } from '@storybook/react';
import { HeadingRoot, HeadingSection, Heading, HeadingMatrix } from '../';

storiesOf('Heading Matrix')
  .add('h1-6', () => {
    const headingMatrix = (
      <HeadingMatrix
        h1={<h1>This is an h1</h1>}
        h2={<h2>This is an h2</h2>}
        h3={<h3>This is an h3</h3>}
        h4={<h4>This is an h4</h4>}
        h5={<h5>This is an h5</h5>}
        h6={<h6>This is an h6</h6>}
      />
    );

    return (
      <HeadingRoot>
        <HeadingSection>
          <div>
            <Heading component={headingMatrix}/>
            <HeadingSection>
              <div>
                <Heading component={headingMatrix}/>
                <HeadingSection>
                  <div>
                    <Heading component={headingMatrix}/>
                    <HeadingSection>
                      <div>
                        <Heading component={headingMatrix}/>
                        <HeadingSection>
                          <div>
                            <Heading component={headingMatrix}/>
                            <HeadingSection>
                              <div>
                                <Heading component={headingMatrix}/>
                              </div>
                            </HeadingSection>
                          </div>
                        </HeadingSection>
                      </div>
                    </HeadingSection>
                  </div>
                </HeadingSection>
              </div>
            </HeadingSection>
          </div>
        </HeadingSection>
      </HeadingRoot>
    );
  })
