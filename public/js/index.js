// Generated by js_of_ocaml 2.8.2
(function(m){"use strict";var
aS=254,aD=2147483647,aE=224,aJ="Sys_error",aR="Invalid_argument",aC=250,w=1024,aQ="jsError",aI=57343,D=512,aP="End_of_file",aO="Failure",ax="Undefined_recursive_module",aB="Stack_overflow",c="",f=128,aw=56320,R=" : file already exists",aG=240,aH=2048,e=248,aA="Not_found",au="Assert_failure",av="/",aM="Sys_blocked_io",aN="fd ",aF="Out_of_memory",az="Match_failure",aK=">",aL="Division_by_zero",ay=1e3;function
Y(d,e,c){var
b=new
Array(c);for(var
a=0;a<c;a++)b[a]=d[e+a];return b}function
X(b,d,a){var
e=String.fromCharCode;if(d==0&&a<=4096&&a==b.length)return e.apply(null,b);var
f=c;for(;0<a;d+=w,a-=w)f+=e.apply(null,Y(b,d,Math.min(a,w)));return f}function
T(b){if(m.Uint8Array)var
c=new(m.Uint8Array)(b.l);else
var
c=new
Array(b.l);var
e=b.c,d=e.length,a=0;for(;a<d;a++)c[a]=e.charCodeAt(a);for(d=b.l;a<d;a++)c[a]=0;b.c=c;b.t=4;return c}function
r(d,e,b,f,c){if(c==0)return 0;if(f==0&&(c>=b.l||b.t==2&&c>=b.c.length)){b.c=d.t==4?X(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else
if(b.t==2&&f==b.c.length){b.c+=d.t==4?X(d.c,e,c):e==0&&d.c.length==c?d.c:d.c.substr(e,c);b.t=b.c.length==b.l?0:2}else{if(b.t!=4)T(b);var
g=d.c,h=b.c;if(d.t==4)if(f<=e)for(var
a=0;a<c;a++)h[f+a]=g[e+a];else
for(var
a=c-1;a>=0;a--)h[f+a]=g[e+a];else{var
i=Math.min(c,g.length-e);for(var
a=0;a<i;a++)h[f+a]=g.charCodeAt(e+a);for(;a<c;a++)h[f+a]=0}}return 0}function
b5(c,e){var
d=c.length,b=new
Array(d+1),a=0;for(;a<d;a++)b[a]=c[a];b[a]=e;return b}function
x(b,a){if(b.fun)return x(b.fun,a);var
c=b.length,d=a.length,e=c-d;if(e==0)return b.apply(null,a);else
if(e<0)return x(b.apply(null,Y(a,0,c)),Y(a,c,d-c));else
return function(c){return x(b,b5(a,c))}}function
aZ(b,a){if(a.repeat)return a.repeat(b);var
d=c,e=0;if(b==0)return d;for(;;){if(b&1)d+=a;b>>=1;if(b==0)return d;a+=a;e++;if(e==9)a.slice(0,1)}}function
E(a){if(a.t==2)a.c+=aZ(a.l-a.c.length,"\0");else
a.c=X(a.c,0,a.c.length);a.t=0}function
aT(a){if(a.length<24){for(var
b=0;b<a.length;b++)if(a.charCodeAt(b)>127)return false;return true}else
return!/[^\x00-\x7f]/.test(a)}function
b1(g){for(var
l=c,d=c,i,h,j,a,b=0,k=g.length;b<k;b++){h=g.charCodeAt(b);if(h<f){for(var
e=b+1;e<k&&(h=g.charCodeAt(e))<f;e++);if(e-b>D){d.substr(0,1);l+=d;d=c;l+=g.slice(b,e)}else
d+=g.slice(b,e);if(e==k)break;b=e}a=1;if(++b<k&&((j=g.charCodeAt(b))&-64)==f){i=j+(h<<6);if(h<aE){a=i-12416;if(a<f)a=1}else{a=2;if(++b<k&&((j=g.charCodeAt(b))&-64)==f){i=j+(i<<6);if(h<aG){a=i-925824;if(a<aH||a>=55295&&a<57344)a=2}else{a=3;if(++b<k&&((j=g.charCodeAt(b))&-64)==f&&h<245){a=j-63447168+(i<<6);if(a<65536||a>1114111)a=3}}}}}if(a<4){b-=a;d+="\ufffd"}else
if(a>65535)d+=String.fromCharCode(55232+(a>>10),aw+(a&1023));else
d+=String.fromCharCode(a);if(d.length>w){d.substr(0,1);l+=d;d=c}}return l+d}function
b0(a){switch(a.t){case
9:return a.c;default:E(a);case
0:if(aT(a.c)){a.t=9;return a.c}a.t=8;case
8:return b1(a.c)}}function
i(c,a,b){this.t=c;this.c=a;this.l=b}i.prototype.toString=function(){return b0(this)};function
bS(b,a){throw[0,b,a]}function
b(a){return new
i(0,a,a.length)}function
aX(c,a){bS(c,b(a))}var
d=[0];function
F(a){aX(d.Invalid_argument,a)}function
k(a){if(a<0)F("String.create");return new
i(a?2:9,c,a)}function
bF(a,d,b,e){if(b>0)if(d==0&&(b>=a.l||a.t==2&&b>=a.c.length))if(e==0){a.c=c;a.t=2}else{a.c=aZ(b,String.fromCharCode(e));a.t=b==a.l?0:2}else{if(a.t!=4)T(a);for(b+=d;d<b;d++)a.c[d]=e}return 0}var
bR=0;function
s(){return bR++}function
bI(a,b){var
c=a[3]<<16,d=b[3]<<16;if(c>d)return 1;if(c<d)return-1;if(a[2]>b[2])return 1;if(a[2]<b[2])return-1;if(a[1]>b[1])return 1;if(a[1]<b[1])return-1;return 0}function
bJ(a,b){if(a<b)return-1;if(a==b)return 0;return 1}function
bV(a,b){a.t&6&&E(a);b.t&6&&E(b);return a.c<b.c?-1:a.c>b.c?1:0}function
S(a,b,h){var
d=[];for(;;){if(!(h&&a===b))if(a
instanceof
i)if(b
instanceof
i){if(a!==b){var
c=bV(a,b);if(c!=0)return c}}else
return 1;else
if(a
instanceof
Array&&a[0]===(a[0]|0)){var
e=a[0];if(e===aS)e=0;if(e===aC){a=a[1];continue}else
if(b
instanceof
Array&&b[0]===(b[0]|0)){var
f=b[0];if(f===aS)f=0;if(f===aC){b=b[1];continue}else
if(e!=f)return e<f?-1:1;else
switch(e){case
248:var
c=bJ(a[2],b[2]);if(c!=0)return c;break;case
251:F("equal: abstract value");case
255:var
c=bI(a,b);if(c!=0)return c;break;default:if(a.length!=b.length)return a.length<b.length?-1:1;if(a.length>1)d.push(a,b,1)}}else
return 1}else
if(b
instanceof
i||b
instanceof
Array&&b[0]===(b[0]|0))return-1;else
if(typeof
a!="number"&&a&&a.compare)return a.compare(b,h);else
if(typeof
a=="function")F("equal: functional value");else{if(a<b)return-1;if(a>b)return 1;if(a!=b){if(!h)return NaN;if(a==a)return 1;if(b==b)return-1}}if(d.length==0)return 0;var
g=d.pop();b=d.pop();a=d.pop();if(g+1<a.length)d.push(a,b,g+1);a=a[g];b=b[g]}}function
bH(a,b){return+(S(a,b,false)>=0)}function
b2(g){for(var
h=c,b=h,a,j,d=0,i=g.length;d<i;d++){a=g.charCodeAt(d);if(a<f){for(var
e=d+1;e<i&&(a=g.charCodeAt(e))<f;e++);if(e-d>D){b.substr(0,1);h+=b;b=c;h+=g.slice(d,e)}else
b+=g.slice(d,e);if(e==i)break;d=e}if(a<aH){b+=String.fromCharCode(192|a>>6);b+=String.fromCharCode(f|a&63)}else
if(a<55296||a>=aI)b+=String.fromCharCode(aE|a>>12,f|a>>6&63,f|a&63);else
if(a>=56319||d+1==i||(j=g.charCodeAt(d+1))<aw||j>aI)b+="\xef\xbf\xbd";else{d++;a=(a<<10)+j-56613888;b+=String.fromCharCode(aG|a>>18,f|a>>12&63,f|a>>6&63,f|a&63)}if(b.length>w){b.substr(0,1);h+=b;b=c}}return h+b}function
V(a){var
b=9;if(!aT(a))b=8,a=b2(a);return new
i(b,a,a.length)}function
bK(a,b){return+(S(a,b,false)<=0)}function
bL(a,b){return+(S(a,b,false)<0)}function
l(a){aX(d.Sys_error,a)}function
W(a){if(!a.opened)l("Cannot flush a closed channel");if(a.buffer==c)return 0;if(a.output)switch(a.output.length){case
2:a.output(a,a.buffer);break;default:a.output(a.buffer)}a.buffer=c;return 0}var
a1=0;function
b6(){return new
Date().getTime()/ay}function
Z(){return Math.floor(b6())}function
o(b){this.data=b;this.inode=a1++;var
a=Z();this.atime=a;this.mtime=a;this.ctime=a}o.prototype={truncate:function(){this.data=k(0);this.modified()},modified:function(){var
a=Z();this.atime=a;this.mtime=a}};function
g(a){return a.l}function
aW(a){a=a
instanceof
i?a.toString():a;l(a+": No such file or directory")}var
bE=av;function
G(a){a=a
instanceof
i?a.toString():a;if(a.charCodeAt(0)!=47)a=bE+a;var
e=a.split(av),b=[];for(var
d=0;d<e.length;d++)switch(e[d]){case"..":if(b.length>1)b.pop();break;case".":break;case"":if(b.length==0)b.push(c);break;default:b.push(e[d]);break}b.orig=a;return b}function
q(){this.content={};this.inode=a1++;var
a=Z();this.atime=a;this.mtime=a;this.ctime=a}q.prototype={exists:function(a){return this.content[a]?1:0},mk:function(b,a){this.content[b]=a},get:function(a){return this.content[a]},list:function(){var
a=[];for(var
b
in
this.content)a.push(b);return a},remove:function(a){delete
this.content[a]}};var
H=new
q();H.mk(c,new
q());function
U(c){var
a=H;for(var
b=0;b<c.length;b++){if(!(a.exists&&a.exists(c[b])))aW(c.orig);a=a.get(c[b])}return a}function
bZ(b){var
c=G(b),a=U(c);return a
instanceof
q?1:0}function
bW(a){return new
i(4,a,a.length)}function
b7(a){if(a.t!=4)T(a);return a.c}function
bG(h,c){var
e=G(h),a=H;for(var
f=0;f<e.length-1;f++){var
d=e[f];if(!a.exists(d))a.mk(d,new
q());a=a.get(d);if(!(a
instanceof
q))l(e.orig+R)}var
d=e[e.length-1];if(a.exists(d))l(e.orig+R);if(c
instanceof
q)a.mk(d,c);else
if(c
instanceof
o)a.mk(d,c);else
if(c
instanceof
i)a.mk(d,new
o(c));else
if(c
instanceof
Array)a.mk(d,new
o(bW(c)));else
if(c.toString){var
g=b(c.toString());a.mk(d,new
o(g))}else
F("caml_fs_register");return 0}function
bY(f){var
a=H,c=G(f),d,e;for(var
b=0;b<c.length;b++){if(a.auto){d=a.auto;e=b}if(!(a.exists&&a.exists(c[b])))return d?d(c,e):0;a=a.get(c[b])}return 1}function
z(c,e,a){if(d.fds===undefined)d.fds=new
Array();a=a?a:{};var
b={};b.file=e;b.offset=a.append?g(e.data):0;b.flags=a;d.fds[c]=b;d.fd_last_idx=c;return c}function
b8(b,e,i){var
a={};while(e){switch(e[1]){case
0:a.rdonly=1;break;case
1:a.wronly=1;break;case
2:a.append=1;break;case
3:a.create=1;break;case
4:a.truncate=1;break;case
5:a.excl=1;break;case
6:a.binary=1;break;case
7:a.text=1;break;case
8:a.nonblock=1;break}e=e[2]}var
f=b.toString(),h=G(b);if(a.rdonly&&a.wronly)l(f+" : flags Open_rdonly and Open_wronly are not compatible");if(a.text&&a.binary)l(f+" : flags Open_text and Open_binary are not compatible");if(bY(b)){if(bZ(b))l(f+" : is a directory");if(a.create&&a.excl)l(f+R);var
g=d.fd_last_idx?d.fd_last_idx:0,c=U(h);if(a.truncate)c.truncate();return z(g+1,c,a)}else
if(a.create){var
g=d.fd_last_idx?d.fd_last_idx:0;bG(b,k(0));var
c=U(h);return z(g+1,c,a)}else
aW(b)}z(0,new
o(k(0)));z(1,new
o(k(0)));z(2,new
o(k(0)));function
bM(b){var
a=d.fds[b];if(a.flags.wronly)l(aN+b+" is writeonly");return{file:a.file,offset:a.offset,fd:b,opened:true,refill:null}}function
b3(a){var
b=m;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stderr.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.error&&c.error(a)}}function
b4(a){var
b=m;if(b.process&&b.process.stdout&&b.process.stdout.write)b.process.stdout.write(a);else{if(a.charCodeAt(a.length-1)==10)a=a.substr(0,a.length-1);var
c=b.console;c&&c.log&&c.log(a)}}var
y=new
Array();function
bU(a,i){var
h=b(i),c=g(h),f=g(a.file.data),e=a.offset;if(e+c>=f){var
d=k(e+c);r(a.file.data,0,d,0,f);r(h,0,d,e,c);a.file.data=d}a.offset+=c;a.file.modified();return 0}function
aU(a){var
b;switch(a){case
1:b=b4;break;case
2:b=b3;break;default:b=bU}var
f=d.fds[a];if(f.flags.rdonly)l(aN+a+" is readonly");var
e={file:f.file,offset:f.offset,fd:a,opened:true,buffer:c,output:b};y[e.fd]=e;return e}function
bN(){var
b=0;for(var
a=0;a<y.length;a++)if(y[a]&&y[a].opened)b=[0,y[a],b];return b}function
bO(a,d,h,f){if(!a.opened)l("Cannot output to a closed channel");var
c;if(h==0&&g(d)==f)c=d;else{c=k(f);r(d,h,c,0,f)}var
b=c.toString(),e=b.lastIndexOf("\n");if(e<0)a.buffer+=b;else{a.buffer+=b.substr(0,e+1);W(a);a.buffer+=b.substr(e+1)}return 0}function
bQ(a){return a
instanceof
Array?a[0]:a
instanceof
i?252:ay}function
j(c,b,a){d[c+1]=b;if(a)d[a]=b}var
aV={};function
bD(a){if((a.t&6)!=0)E(a);return a.c}function
bT(a,b){aV[bD(a)]=b;return 0}function
bX(){return aD/4|0}function
aY(a){return a}function
bP(a){return aV[a]}function
a0(a){if(a
instanceof
Array)return a;if(m.RangeError&&a
instanceof
m.RangeError&&a.message&&a.message.match(/maximum call stack/i))return aY(d.Stack_overflow);if(m.InternalError&&a
instanceof
m.InternalError&&a.message&&a.message.match(/too much recursion/i))return aY(d.Stack_overflow);if(a
instanceof
m.Error)return[0,bP(aQ),a];return[0,d.Failure,V(String(a))]}function
n(a,b){return a.length==1?a(b):x(a,[b])}function
C(a,b,c,d){return a.length==3?a(b,c,d):x(a,[b,c,d])}var
_=[e,b(aO),-3],$=[e,b(aR),-4],J=[e,b(aA),-7],aa=[e,b(au),-11];j(11,[e,b(ax),-12],ax);j(10,aa,au);j(9,[e,b(aM),-10],aM);j(8,[e,b(aB),-9],aB);j(7,[e,b(az),-8],az);j(6,J,aA);j(5,[e,b(aL),-6],aL);j(4,[e,b(aP),-5],aP);j(3,$,aR);j(2,_,aO);j(1,[e,b(aJ),-2],aJ);j(0,[e,b(aF),-1],aF);var
a5=b("output_substring"),a8=b("String.blit / Bytes.blit_string"),a7=b("Bytes.blit"),a_=b("Buffer.add_substring/add_subbytes"),a9=b("Buffer.add: cannot grow buffer"),bo=[3,0,3],bp=b("."),bk=b(aK),bl=b("</"),bh=b(aK),bi=b("<"),bf=b("\n"),a$=b("Format.Empty_queue"),be=[0,b(c)],bw=b("Js.Error"),bB=b("btn_join"),bC=b("btn_create"),by=[0,b("index.ml"),5,21];function
A(a){throw[0,$,a]}s(0);var
a2=aD;function
B(d,c){var
a=g(d),e=g(c),b=k(a+e|0);r(d,0,b,0,a);r(c,0,b,a,e);return b}bM(0);var
a3=aU(1),a4=aU(2),I=[0,function(b){function
a(b){var
a=b;for(;;){if(a){var
c=a[2],d=a[1];try{W(d)}catch(a){}var
a=c;continue}return 0}}return a(bN(0))}],v=(4*bX(0)|0)-1|0;s(0);s(0);s(0);var
ad=[0,0];function
ae(a){ad[1]=[0,a,ad[1]];return 0}function
af(d,a){var
b=[0,[0,d,0]],c=a[1];if(c){var
e=c[1];a[1]=b;e[2]=b;return 0}a[1]=b;a[2]=b;return 0}var
L=[e,a$,s(0)];function
ag(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1];a[2]=d;if(0===d)a[1]=0;return e}throw L}function
M(a,b){a[13]=a[13]+b[3]|0;return af(b,a[27])}var
ah=1000000010;function
N(b,a){return C(b[17],a,0,g(a))}function
O(a){return n(a[19],0)}function
ai(b,a){return n(b[20],a)}function
p(a,e,d){O(a);a[11]=1;var
b=(a[6]-d|0)+e|0,c=a[8],f=bK(c,b)?c:b;a[10]=f;a[9]=a[6]-a[10]|0;return ai(a,a[10])}function
aj(b,a){return p(b,0,a)}function
t(a,b){a[9]=a[9]-b|0;return ai(a,b)}function
ba(a){var
b=a[2];if(b){var
c=b[1],d=c[2],e=c[1],f=a[9]<d?1:0;if(f){if(0!==e)return 5<=e?0:aj(a,d);var
g=0}else
var
g=f;return g}return O(a)}function
bb(a){var
b=ag(a[27]),c=b[1];a[12]=a[12]-b[3]|0;a[9]=a[9]+c|0;return 0}function
bc(a,f,b){if(typeof
b==="number")switch(b){case
0:var
j=a[3];if(j){var
k=j[1][1],l=function(b,a){if(a){var
c=a[1],d=a[2];return bL(b,c)?[0,b,a]:[0,c,l(b,d)]}return[0,b,0]};k[1]=l(a[6]-a[9]|0,k[1]);return 0}return 0;case
1:var
m=a[2];return m?(a[2]=m[2],0):0;case
2:var
o=a[3];return o?(a[3]=o[2],0):0;case
3:var
q=a[2];return q?aj(a,q[1][2]):O(a);case
4:var
r=a[10]!==(a[6]-a[9]|0)?1:0;return r?bb(a):r;default:var
g=a[5];if(g){var
C=g[2];N(a,n(a[24],g[1]));a[5]=C;return 0}return 0}else
switch(b[0]){case
0:var
D=b[1];a[9]=a[9]-f|0;N(a,D);a[11]=0;return 0;case
1:var
c=b[2],e=b[1],s=a[2];if(s){var
u=s[1],d=u[2];switch(u[1]){case
0:return t(a,e);case
1:return p(a,c,d);case
2:return p(a,c,d);case
3:return a[9]<f?p(a,c,d):t(a,e);case
4:return a[11]?t(a,e):a[9]<f?p(a,c,d):((a[6]-d|0)+c|0)<a[10]?p(a,c,d):t(a,e);default:return t(a,e)}}return 0;case
2:var
h=a[6]-a[9]|0,v=a[3],E=b[2],F=b[1];if(v){var
w=v[1][1],G=function(d,c){var
a=c;for(;;){if(a){var
b=a[1],e=a[2];if(bH(b,d))return b;var
a=e;continue}throw J}},x=w[1];if(x){var
H=x[1];try{var
I=G(h,w[1]),y=I}catch(a){a=a0(a);if(a!==J)throw a;var
y=H}var
i=y}else
var
i=h;var
z=i-h|0;return 0<=z?t(a,z+F|0):p(a,i+E|0,a[6])}return 0;case
3:var
A=b[2],K=b[1];if(a[8]<(a[6]-a[9]|0))ba(a);var
L=a[9]-K|0,M=1===A?1:a[9]<f?A:5;a[2]=[0,[0,M,L],a[2]];return 0;case
4:a[3]=[0,b[1],a[3]];return 0;default:var
B=b[1];N(a,n(a[23],B));a[5]=[0,B,a[5]];return 0}}function
bd(a){for(;;){var
d=a[27][2];if(d){var
b=d[1][1],c=b[1],e=c<0?1:0,g=b[3],h=b[2],i=e?(a[13]-a[12]|0)<a[9]?1:0:e,f=1-i;if(f){ag(a[27]);var
j=0<=c?c:ah;bc(a,j,h);a[12]=g+a[12]|0;continue}return f}throw L}}function
ak(a){try{var
b=bd(a);return b}catch(a){a=a0(a);if(a===L)return 0;throw a}}var
al=[0,[0,-1,[0,-1,be,0]],0];function
am(a){a[1]=al;return 0}function
an(a,c){var
d=a[1];if(d){var
e=d[1],b=e[2],f=b[1],g=d[2],h=b[2];if(e[1]<a[12])return am(a);if(typeof
h!=="number")switch(h[0]){case
3:var
i=1-c,k=i?(b[1]=a[13]+f|0,a[1]=g,0):i;return k;case
1:case
2:var
j=c?(b[1]=a[13]+f|0,a[1]=g,0):c;return j}return 0}return 0}var
K=k(80);bF(K,0,80,32);function
bg(a){return B(bi,B(a,bh))}function
bj(a){return B(bl,B(a,bk))}function
bm(a){return 0}function
bn(a){return 0}function
ao(e,d){function
f(a){return 0}var
b=[0,0,0],c=[0,-1,bo,0];function
g(a){return 0}af(c,b);var
a=[0,[0,[0,1,c],al],0,0,0,0,78,10,68,78,0,1,1,1,1,a2,bp,e,d,g,f,0,0,bg,bj,bm,bn,b];a[19]=function(b){return C(a[17],bf,0,1)};a[20]=function(d){var
b=d;for(;;){var
c=0<b?1:0;if(c){if(80<b){C(a[17],K,0,80);var
b=b-80|0;continue}return C(a[17],K,0,b)}return c}};return a}function
ap(c){function
a(a){return W(c)}return ao(function(d,a,b){if(0<=a)if(0<=b)if(!((g(d)-b|0)<a))return bO(c,d,a,b);return A(a5)},a)}var
br=D,ab=v<D?v:br,ac=k(ab),h=[0,ac,0,ab,ac],a=ap(a3);ap(a4);function
bq(a){return 0}ao(function(i,c,a){var
l=c<0?1:0;if(l)var
m=l;else
var
p=a<0?1:0,m=p||(g(i)<(c+a|0)?1:0);if(m)A(a_);var
n=h[2]+a|0;if(h[3]<n){var
b=[0,h[3]];for(;;){if(b[1]<(h[2]+a|0)){b[1]=2*b[1]|0;continue}if(v<b[1]){if(!((h[2]+a|0)<=v))throw[0,_,a9];b[1]=v}var
e=k(b[1]),d=h[2],j=h[1],q=0<=d?(g(j)-d|0)<0?0:(g(e)-d|0)<0?0:(r(j,0,e,0,d),1):0;if(!q)A(a7);h[1]=e;h[3]=b[1];break}}var
f=h[2],o=h[1],s=0<=a?0<=c?(g(i)-a|0)<c?0:0<=f?(g(o)-a|0)<f?0:(r(i,c,o,f,a),1):0:0:0;if(!s)A(a8);h[2]=n;return 0},bq);var
a6=I[1];I[1]=function(i){for(;;){if(1<a[14]){if(1<a[14]){if(a[14]<a[15]){M(a,[0,0,1,0]);an(a,1);an(a,0)}a[14]=a[14]-1|0}continue}a[13]=ah;ak(a);a[12]=1;a[13]=1;var
b=a[27];b[1]=0;b[2]=0;am(a);a[2]=0;a[3]=0;a[4]=0;a[5]=0;a[10]=0;a[14]=0;a[9]=a[6];a[14]=a[14]+1|0;var
f=3,h=0;if(a[14]<a[15]){var
d=[0,-a[13]|0,[3,h,f],0];M(a,d);a[1]=[0,[0,a[13],d],a[1]]}else
if(a[14]===a[15]){var
e=a[16],c=g(e);M(a,[0,c,[0,e],c]);ak(a)}n(a[18],0);return n(a6,0)}};var
u=m,aq=null,ar=true,bv=u.Array,as=[e,bw,s(0)],P=[0,as,{}],bt=undefined,bu=false,bs=bQ(P)===e?P:P[1];bT(b(aQ),bs);(function(a){throw a});ae(function(a){return a[1]===as?[0,V(a[2].toString())]:0});ae(function(a){return a
instanceof
bv?0:[0,V(a.toString())]});function
Q(c){return function(a){if(1-(a==aq?1:0)){var
d=n(c,a);if(!(d|0))a.preventDefault();return d}var
e=event,b=n(c,e);if(!(b|0))e.returnValue=b;return b}}var
bx=u.document;s(0);u.HTMLElement===bt;function
at(b){var
a=bx.getElementById(b.toString());if(a==aq)throw[0,aa,by];return a}function
bz(a){u.alert("JOIN");return ar}function
bA(a){u.alert("CREATE");return ar}u.onload=Q(function(c){var
a=at(bB),b=at(bC);a.onclick=Q(bz);b.onclick=Q(bA);return bu});n(I[1],0);return}(function(){return this}()));
