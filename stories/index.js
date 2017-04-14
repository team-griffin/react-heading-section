import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { HeadingRoot, HeadingSection, Heading, HeadingMatrix, H } from '../src';

storiesOf('H', module)
  .add('h1-6', () => {
    return (
      <HeadingRoot>
        <HeadingSection>
          <div>
            <Heading component={<H>This is an h1</H>}/>
            <HeadingSection>
              <div>
                <Heading component={<H>This is an h2</H>}/>
                <HeadingSection>
                  <div>
                    <Heading component={<H>This is an h3</H>}/>
                    <HeadingSection>
                      <div>
                        <Heading component={<H>This is an h4</H>}/>
                        <HeadingSection>
                          <div>
                            <Heading component={<H>This is an h5</H>}/>
                            <HeadingSection>
                              <div>
                                <Heading component={<H>This is an h6</H>}/>
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
  });

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