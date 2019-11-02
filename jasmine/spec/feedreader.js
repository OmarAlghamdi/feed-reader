/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has non-empty url', () => {
            const urls = allFeeds.filter(feed => feed.url !== null)
            expect(urls.length).toBe(allFeeds.length)
        })


        /* a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has non-empty name', () => {
            const names = allFeeds.filter(feed => feed.name !== null)
            expect(names.length).toBe(allFeeds.length)
        })
    });


    
    describe('The menu', () => {
        /* a test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden', () => {
            const isHidden = $('body').attr('class').match('menu-hidden').length == 1
            expect(isHidden).toBe(true)
        })
         /* a test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
                
        it('changes', () => {
            let isHidden = $('body').attr('class').match('menu-hidden').length == 1
            const hidden = true, shown = false
            if (isHidden) {
                $('.icon-list').click(() => {
                    expect(isHidden).toBe(shown)
                })
            } else {
                $('.icon-list').click(() => {
                    expect(isHidden).toBe(hidden)
                })
            }
            
        })
    })
        

        

    
    describe('Initial Entries', () => {
        beforeEach((done) => {
            loadFeed(0, () => {
                done()
            })
        })
        /* a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        it('has result', (done) => {
            const children = $('.feed').children()
            expect(children.length).not.toBe(0)
            done()
        })
    })
        

    
    describe('New Feed Selection', () => {
        beforeEach((done => {
            loadFeed(0, () => {
                done()
            })
        }))
        /* a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('content changes', (done) => {
            const before = $('body')
            done()
            expect($('body')).not.toBe(before)
        })
    })

        
}());
