XOR Cipher
=========

A simple XOR cipher in 95 bytes.

"In cryptography, the simple XOR cipher is a type of additive cipher... a string of text can be encrypted by applying the bitwise XOR operator to every character using a given key. To decrypt the output, merely reapplying the XOR function with the key will remove the cipher."

[Wikipedia](http://http://en.wikipedia.org/wiki/XOR_cipher)

Source
------
```javascript
var xor = function(a,b){return a.replace(/./g,function(a){return String.fromCharCode(a.charCodeAt()^b)})}
```

For more information
--------------------

See the [140byt.es](http://140byt.es) site for a showcase of entries (built itself using 140-byte entries!), and follow [@140bytes](http://twitter.com/140bytes) on Twitter.

To learn about byte-saving hacks for your own code, or to contribute what you've learned, head to [the wiki](https://github.com/jed/140bytes/wiki/Byte-saving-techniques).

140byt.es is brought to you by [Jed Schmidt](http://jed.is), with help from Alex Kloss. It was inspired by work from [Thomas Fuchs](http://mir.aculo.us) and [Dustin Diaz](http://www.dustindiaz.com/).