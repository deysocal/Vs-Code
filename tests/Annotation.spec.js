import {test, expect, firefox} from '@playwright/test'
//Skip Annotation
test.skip ('Annotation-skip' , async ({page})=> {
})
// Fail- Annotation
test ('Annotation-fail' , async ({page})=> {
    test.fail()
})
// Fixme- Annotation

test.fixme ('Annotation-Fixme' , async ({page})=> {
    
})            
//Slow- Anotation - make 3times of execution time what is given in config file
test ('Annotation-slow ', async ({page})=> {
    test.slow();
})

// Only- Annotation
// test.only ('Annotation-only ', async ({page})=> {
//     test.slow();
// })

// Conditionally skip- Annotation -- Skip for any specifi browser like firefox
test ('Annotation-Conditionally skip ', async ({page, browserName})=> {
    test.skip(browserName==='firefox', 'still working on it');
})
// @tag
test ('Tag @Smoke', async ({page}) => {
console.log ("Tag test")

})

// Skip the test with certain @tag
test ('Tag1 @Smoke', async ({page}) => {
    console.log ("Tag test")
    
    })


