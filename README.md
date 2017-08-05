![](A_to_Z_Sass_handouts/headings/1.1.png)

Hello and welcome to **A to Z Sass** and to a brand new video series. Over the next 26 episodes, we're going to be diving into the CSS pre-processor, **Sass**, and looking at a different topic, or a different concept, or a different feature or tool.

In this lesson let's talk about the Sass ampersand character `&`. This single character is a powerful part of the Sass language and has a number of different uses. In this episode, you'll also learn about nesting and the Sass parents selector, the reverse parent selector and the double ampersand selector.

**Nesting** is a popular feature in Sass, but it's something to do infrequently and something to do carefully to avoid unnecessarily high specificity in your selectors when they're compiled into CSS. Nesting allows us to write a shorter syntax, which is then compiled into normal CSS.

```css
.site-nav {
	ul {
		li {
		}
	}
}
```

Here, the `ul` and `li` are indented inside the braces of the `.site-nav` class. And when compiled, this would produce the following CSS:

```css
.site-nav ul {
}

.site-nav  ul li {
}
```

There is also a way to reference the parent selector within Sass nesting, and we do that with the ampersand character. The ampersand is a bit like a special variable that always holds the value of the current selector's parent. While nesting is a useful way to avoid typing out repetitive selectors, it should be used with caution. Try to limit yourself to only nesting with pseudo selectors where possible. But at most, try to not go more than three levels deep to avoid these overly specific selectors.

```css
.site-nav {
	ul {
		li {
		}
	}

	a {
		&:hover {
			color: red;
		}
	}
}
```

This will make all hovered links inside the `.site-nav` red.

The ampersand character has another use in something that I call the **reverse parent selector**. Imagine a project which has got multiple color schemes that are all switched via a class on the `body` tag. Now, imagine that each of these color schemes or themes have different colored links and different colored buttons.

So we could setup some default styles as follows. And then, to change these styles for each theme, we can use the Sass ampersand as follows. Here, the ampersand appears at the end of the selector, but it still serves the same purpose, which is to output whatever the value of the parent selector is in its place.

So with this reverse parent selector in place, this is what our compiled CSS would look like. This use of the ampersand is really handy for situations where a parent class is used to overwrite styles. And using it in this way helps us to keep all the related styles together, making the code more compact and easier to read without scrolling up and down the file.

One final use of the Sass ampersand is the **double ampersand selector**. Here's an example of what that might look like in practice. This uses an adjacent sibling selector shown by the plus character and would compile as follows. So this selector will match any button class that immediately follows another button class.

But how is that useful? Well, if we think of a series of buttons that layout horizontally, we may want to space them out a little bit with some margin. But we'd always end up having to remove some margin from the first one. Or remove some margin from the last one using first child or last child.

Instead, we can use this double ampersand to only add margin left to buttons that are adjacent to other buttons. It may look a little odd to begin with, but the end result is much less code and removes the need for overriding stars that have already been declared. And this is the real power of Sass, which for us to write less and have it do more.


# Index for the A To Z Sass course

* [Lesson 1-1](A_to_Z_Sass_handouts/lesson1-1.md)
* [Lesson 1-2](A_to_Z_Sass_handouts/lesson1-2.md)
* [Lesson 1-3](A_to_Z_Sass_handouts/lesson1-3.md)
* [Lesson 1-4](A_to_Z_Sass_handouts/lesson1-4.md)
* [Lesson 1-5](A_to_Z_Sass_handouts/lesson1-5.md)
* [Lesson 1-6](A_to_Z_Sass_handouts/lesson1-6.md)
* [Lesson 1-7](A_to_Z_Sass_handouts/lesson1-7.md)
* [Lesson 1-8](A_to_Z_Sass_handouts/lesson1-8.md)
* [Lesson 1-9](A_to_Z_Sass_handouts/lesson1-9.md)
* [Lesson 1-10](A_to_Z_Sass_handouts/lesson1-10.md)
* [Lesson 1-11](A_to_Z_Sass_handouts/lesson1-11.md)
* [Lesson 1-12](A_to_Z_Sass_handouts/lesson1-12.md)
* [Lesson 1-13](A_to_Z_Sass_handouts/lesson1-13.md)
* [Lesson 1-14](A_to_Z_Sass_handouts/lesson1-14.md)
* [Lesson 1-15](A_to_Z_Sass_handouts/lesson1-15.md)
* [Lesson 1-16](A_to_Z_Sass_handouts/lesson1-16.md)
* [Lesson 1-17](A_to_Z_Sass_handouts/lesson1-17.md)
* [Lesson 1-18](A_to_Z_Sass_handouts/lesson1-18.md)
* [Lesson 1-19](A_to_Z_Sass_handouts/lesson1-19.md)
* [Lesson 1-20](A_to_Z_Sass_handouts/lesson1-20.md)
* [Lesson 1-21](A_to_Z_Sass_handouts/lesson1-21.md)
* [Lesson 1-22](A_to_Z_Sass_handouts/lesson1-22.md)
* [Lesson 1-23](A_to_Z_Sass_handouts/lesson1-23.md)
* [Lesson 1-24](A_to_Z_Sass_handouts/lesson1-24.md)
* [Lesson 1-25](A_to_Z_Sass_handouts/lesson1-25.md)
* [Lesson 1-26](A_to_Z_Sass_handouts/lesson1-26.md)

