/* eslint-disable */
import asyncLoader from '../../../phet-core/js/asyncLoader.js';

const mipmaps = [
  {
    "width": 150,
    "height": 196,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 75,
    "height": 98,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABiCAYAAAAY7S4UAAAAAklEQVR4AewaftIAABOMSURBVO3BCXBchWHw8f87dvftpd2VVrta3ZdlWTa+ZGNiMOaygOKEfN8QCIlD2kmvpJ200zYkLS21IJC2NE2YHJ2GdJo2/iDgHBBu2xj4bAeELd+WbcmWkGUdXh17X2/37VY7wYNQJUteXUxHvx+LFi1atGjRokWLFi1atGjRokWLFi1atGjR9AnMv+XAWmAlv3Uc6AQO8DEnMHc+KUvSH9tteeWKopSJgmBOqKrXHwwWe1wu9HodWVpKQ0unUZPJiC8QOBSLxX8A7ORjSGD23ZNntXzdYbetMxuNiILAWClNY8QfIN9uR5ZExkpnMkSiUYZGfPsj0VgzsIePEYFZJIrCfxQXubflWSyyKAhMJp3JMOzzk2+3IYki42npDIFQMNI34P0O8Hd8TEjMDo/ZZHyjorTkLovRKAqCwJUIgoBBb8Dn92M2GRlPFASMiqI3mYw3BsNhVybDK3wMSMycx2Gz7fUUuVbpZZmJZIBoLI4uo7K6vIBSh0I0FmUoFCWlaVQ4FJaX5tM1MExaEJFEkSy9ToeiGNYEgqEksJ8FJjBDZpOxpbTYc61OkpiIlk7j0Gf44pZGajwFjKVpabR0Gr1OJisSV9nd2s4rx7oxKQqXDY6MeC8NDq8G+llAEjMgisKPKkpKPqXXyUzGJCZ58DM34cnPYzxRFJAkkcv0skR9uQuHUebQ+QF0skyWXqcz+wKBkkyGX7CAJHLXWOx2P2kxm2QmEUsk+KOmtZQV2rka5S4HFp3I0fe96GQZSRQRRbEoHIn+GIizQERyJEvSw1aLReEKtGSSpaUucnHz6lo2Ly0ipWlkmUxGJ/DnLCCRHBXkO9bKksiV1BXZkCSRXN29cQWSppJlNBiwWsxbWEAiubnGqCilTKGqyMHVar84yE92HWTHG62ktDRfuGUViWSSLLstbz3QwAIRyc2tkiQyFVkSuRpef5hIXOV3m9az7dZGbGaFlVUeRC1JlmIwyMBXWCAiuamSJImplBfauUxNpjjR1Y/XH2YyLruFNbUljKXXyayrKSLLoNNhtZjXsUBEcrNML8tMxR+JkxWKJvjl/hPkmQzkmQxMx57DHXT1D5NVaDNzmd2WtwJQWAAic2gkFCXLH4lx57XLqHDno+h1TMdzbx/h4f96jbiapNiZR0rTyJIl2Qw0sQBEcqOmMxmmq6zQjs2skBWMxpmOW9fU0T8SoqN3iJICG7FEgiy9TmbUnSwAkdzsU5NJrtbxrn4++9hPOdc7xFRuWlWDJ9+KKAi4HVbqXBaydLKMLEm1LACR3LyUSmlcrXQ6jZrSeOrVd5mK22Hlp1//PMsri8i6ZVUtSU0jS1EMBhaASG5OxeLx80yhuiifscpdDvSyRGvHRXzhKBOJq0n+//FOjnf1M5Yn34qqqmQpBoORBSCSI38w1J1hcql0GkEUGCvfauLvv9DEmpoSjHodE/n1O20sq3DRNxRgrNJCO6TTZMmybGcByOQokUjsisUTt5gUAxNRVRWr0cB4G+or2FBfwUQu+UJUe/IptFnYsraO8YrtCoEkSKKoZwGI5O7JYCjcwySMUobqogKuhtthZV1dGVmSJDKeyaBjIYnkLj40MvJMLKEyVlLTSKhJ7tu0AkkS+d9EZGa+Pjg8fEhLZ0hnMlTadXzppgbu2VDDhqXl5ErT0hxq7+GX+08wVuelIFmalo6zAGRmKBgK/7HRGHjNYjI6mxpX0FBRxNXaf7KLYDSO226hdziImkyxZkkp6+rKuOySL0RakMiKxuNDLACZmWu95B38csxq+ddEUnOSgxtWVHFZIxM7+f4AimIgnckQDIW8LACR2fHzdEZ/8sWDF1GTKWabLxzjmX1tSKJIPJFg1AssAJFZ4nSWWMir4+X3TjNWLJFkJjQtzVOvvItiNJIVi8d9wM9YACKzxOcbCOv1Ro6NFPH03qN09A7SNxzgn3e+xcBIiFxoWpqd+45HdrWefTyZSqGlMwwOjewH4iwAiVmSSESHZVl3l8XiUCJiMS3nQ7R0xRkIqIGnd7/18vq68oaCPBPT5QvHePbtowP/ufvgHwG/sJrNf6aqatofDH4V6CQHmUzGsX379u9v37492tzc3MlVkpk9/ZFQj/lirJ+YCoWuGmRZR3f3qec0LfmH//js3n1PfuXTN5gVPVPZd6Iz9dM3Wt/o7B/+CtDJqHAk2haJxYaAPVylTCbjAJ4A7r4U8zvdRnsVsIerJDFL9HrdU0WFhfWKQY9J0RGNDHH6zJE/zWTSDzPKH4n1rKoufqDEaWMqf/uTV9/sGfQ3AT4+EIvHN2ma9k9AD9OUyWSqt2/f/h3gey19p2548N1/M32v7Vc8UNdU9s3mR99pbm7u5CrIzI6tbqfzdlkSuSydTjNqLx/a0947eGb90rJ6riASV7nkj9QCtwF7+NDnmaZMJlMNPAbc2dJ3yvbt48+yc6SNy97oapHvqt3018AeroLEzCm2POsvnfkOlyAIXBaJxQOhcPiv+IAk6X4UTki33nVtrcgVDAXCdIZddkUxbfb7vXsBM+BjGjKZTPX27dt/CPxzS9+pdX9x4PvKX5zeSVtskLHOjpzngbqmsm82P/pmc3PzBaZJZoZ0Ot0v3E7nUlEQGCsYDp/iQ5uuuebGPxBFCU1LI0kikwlGEyiKmcLCigqXq+SYxWInGg0OX7zYcfbixXPvAg8BccbJZDJu4PDRS+22x4/sYOdIG5NpjQ3xRleLfFftpm8AW5kmiRkQReEHFaXFn1MMesZSUyn6B7z7ZFn3wNKl6x5yu8t+12zOtxgMJoIjXVS6HciSxHhqMsWuw+dI6EpQ1TguVwlOZzH5+W5TZWVDWUXFsk9IkrxtaKj3PNDOGM3NzZHt27d/+q0Lh0of6XqdqZwdOc8X6prKv9n86GvNzc39TINMjkRR2FFZVvp5k6IwXiwWZ926LfdWVtbLBoMJv38Qr/cSNpuT4z6J/T8/T5HBT0WhCVmScNlNdA74OdUvYM6vQlF0JBJRjEYLY9lsBaxceX2lJEn/evLkO61APx/17TtrNz1X3fYMnWqYK2mNDbHv/ValqeYTzcBWpkHi6jVYzObXy0uLm4wGA+PFEgnKKtdTU3ONKMs6shTFzMWLHSiKBUUxYbHkg7EYf7qQEa2AnkgeYcGFyepClvVEowEymSQuVynjiaKEzVaQ19PTsVRV488wRnNzc9u3Hn3sTjfG0l8MHGYqA8E+7l9yW/kjzc2vNTc39zMFkavzjSJX4dtlxUVrDDod46U0Dau9ivLypYy3fPl6gsEBvN5uwmE/sViYWCxMLBYmFgsTiQTw+S7R29tBMhmhtnYVkzEaLTQ23noH8Bn+p2/fXrMRh6hnKntC3ezrOaIAzUyDyDSJovCfFaUl33I67E5JFJlIKJpkyZI1TESW9dTXr6OqaikmkwGdTkCnE9DpBHQ6AUXRU1joYsWK9dTUrEQURa7E46mUXa7yv2QcQRB2OgzWlieW3ctUHq7YQrW9hFFLmAaZqXnMJuMzHrdrs6LXM5l4QqV+2fXo9QauxGi0YDRamClJkmlouHaD13thC7Cbj/r23Utvfu5rp5/Dl1YZ7+GKLWxbvpUl9pIO4EXgIaZB4Mo8Dpttr6uwoF4nSVyJP6yy6cZ7EUWR+ZJKqbz++o5dfv/g7YyTyWRa//3Y82t//9QOshRB5LHaT/GZZbdTZinsAHYIgvAIV0HmCswm4wvuQme9LIlMJgMMjozQsPxmRFFkPsmynuXLr7vxwIEXG4A2PurHdy+9+YcPnv05D1XdwWeW3U6ZpbAD2CEIwiPkQGBy2yrLSn9qMRmZTEpLM+zz9akpof+OOx5olGU98yUaDWEyWYnFwvz61z/6WSqVvJ9xMpnMUb8aWWXXmzuAHYIgPMIMyExClqTPmYwKk4nE4gx4B9+JxeNfu+GGu/fIsp75NDzcj8lkxWi0sGbNzXcePLirGujko35g15tNgiA8ySwQmERhQf4Jt7NgBWOkMxli8Tj+YKjD5w/8F/BNg8G4s7Z29T1LlqzGbM5jPE1LIUkys+3MmUPU168jkYhy7Nh+OjtP/EzTUvczh2QmEYvF+8PR6Ao1mepLaalgPK6OhCNhbzqdeQ54ht9yVFev2eLx1NHZeRqj0UhJSTVGo4XL2tuPsGzZemabpqUIhfycPn2I8vIVBALDN3u9F5hLMpMIR6NN4WiUKVwfj4e9odCwzeOpIZlM0Nl5mnRaxeUqx2q1YzAYmQt+/yDptEB5eQPd3W0pr/fC3zHHRGbmpa6u4/evKhhEChwhFBrG6SzH41lKNBrj1KmDOBwu5oIsGzAaLeSnTnPfeocMGJhjMjP3ezesqKa4II8LXh8HTp3lUJ8Bu6OITCaNw+FiLtQ7U3zqOiPVnnVoWpo9Ryq2tZzp/j5zSGaGGmtLVxcX5JFV7nJQ7nKwNZrgaGcvu1Q3c6XEmUe1p4AsSRL55HUNG1rOdG8BdjO1BuDB65dX1a2s9hSaDXr9vpOdl1rOXLgb6GcSMjOj3La2bgXjWE0GnHlmLBYTc6U438JYq2uKqSrK/0bXwMhuJrYe8JgM+q1/8qnrP9e4pNTstJnJeu/MBXoGA8eBfq5AZmbu8RRYbUyg+5IvEI2mDIDCLFPVBIpNx1iKXse2WxtvfPT/7W4EWvlQw+aV1T+5Y92y9SaDjjyTQpnLTlYgEueVljbvv7/+3neAf2AKMjNg1OvuqS12MpG9RzuODSZM+srKhuuYZfF4BNkhMt66ujK5xlPQfL5/eCsfaKwtffKrn75xvc2sMNZQMMLjT+85cryr/x6gk2mQmYGt1zUsUfQ6xusbDnL4XO8hwB2PR69TFBOzSVXjmBQ9l4WiCd48dg5fOMbGhsrbNy6vPHHmgjcYjCWkUpdtg82sMN6x832R4139twI+pkkmdw2ra0oamMCAL8ionwGFweDw5xXFxGxKpVTyrUayLnj9vNP2Pr9z7TKsJgOjZGDFW8fOsbTMhSc/j4lUewrMy8rdvxoYCWqbV9XkPX/g5FvA17gCmdx9schhYSIdvUPngYOAkkjE4oDCLEomVQYDSQRBoLWjh/tuWs14PYMBblpVy0Q0LY0vHOW6ZRWbmxrrKLRZOH6+P9g5MMyViOSoodx9XYU7n4nsOdzezW/Fh4f7zzHLVDV+Yc/hjo79J7u4c309E3E7LEzknbb32fFGK267FS2dptBm4WyPl86B4V1MQSRHTY111zCBC14fXQMjLXygr69rkFkmipL5+d+c+MmRc70oeh0TCcdVLvOFo6jJFFmfaKjki03rKXHaUFMampbm6Pm+AeBJpiCTm/9T7s53MIHhYJRRv+IDPt8lfyqlIst6ZouimAqAx89eHLxXTaZW6XUy440Eo2Sd7OpnMBChdzjAtlsb6R0KUOK0oWlp2i8Onr/9b37UCewE4kxBJjefrXLnM5FLvtAwcJAPnU8k4siyntkiCCKj1nn9oR+f6xv6XkNFEePdtmYJvzpwggFfiC9v3Uhb9wDff2F/5PnfnHx564aG+qSWTh/uuPgY8HOmSSYHZYV2tzcQRhQFzIqesY539bUzxwwGI6NuAL772qEzX22oKFrCOFomgy8UG3DbLXZAqXDn8/xvTu4C7nuppY1cyFydx++/ec1n19SWVMUSSVrbexgKRllW7qLc5cCs6Dl4tifCHLNa7Yy6EfjuK++d+eHyCs8Tm1dWy1o6Q9fAMO+c7u559q2jO4GHPnfL2iN9w4F6rz/MqNPMgMz0KJ6CvBf+9v7bmpaWuRgrria54PXz5rFzFFhN+MKxBHNMlvWUldW5e3raGfXdJ3a+2fvEzje/CESAF4EdfODpvYd//+m9hz8NDAH/yAzITEOVO/+1x7/0O5sLbRbGU/Q66koLqSstZO/RDkad5qOWGQwKs624uLq2p6edD+wEdjKxA8ABZoHM1P7vlz+5cXMwEqf94mB8V2t7x+81rb+msiifkVCUN450oJMkbBaFSFxF0csb42qKMfSyrGe2WSx2F7ABaGGeyEztzQd//NLLwHvAU0D/phVVQw6rqWB3azt3b1yOKAg8+/Yx7tu8CrfduvFv/uOVa4GHgRccDrfEHDCbbYy6F2hhnshMzQdsZYyUlo7YzErBPZtWIkkir7x3mqbGOvQ6mUhCTVW6Hf/yT3/wyev/7eV3Cs54M0nmgNVqx+ksXjs01Md8EclBTE2SJUkip94fwG234HZY8YVj9A4F5L/fdvv1+VYToiiQl5dvZo5UVjbUMo9EcvDqe6fbuy+N8O7pbk6+P0BjXRmXfCFeevcU92xaSZnLztvHz7O7tf1Fm63AyRyx2ZylwHrmiUwOOgdG7v3Svzz3Z8Bpk0HfdK5vaMW7Z7rPxRLJWN9IcPlIMKq2dlx8FfiuopgfY46YzTZGfRY4yDyQyY0P2M6oaEJ99s1j57hsd2s7Y1wvyzrmitVqx24vXOv3DzIfRObWDQaDkblUVbW8jHkiModkWXej1epgLjkc7hqgmnkgModcrrKlmpZiLmlaklE3Mw8k5lAo5Otua2sRI5FAOJPJOBKJmD6dTmMwGMmVqibw+bwMDvbGjx17++CJEweeAZ4C4swxgfmjALcAd1gstgaXq8xkt7sKzeY8j06nNwuCyEQymTTJpBoJBkd6vN6Lg/39nf3Aq8ALgI95JPDx4ADKmFgP4ONj4L8BIqluhXnOc0IAAAAASUVORK5CYII="
  },
  {
    "width": 38,
    "height": 49,
    "url": "data:image/png;base64,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"
  },
  {
    "width": 19,
    "height": 25,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAZCAYAAADTyxWqAAAAAklEQVR4AewaftIAAAOFSURBVO3BW2hbdQAH4N//ci5Jc2vSNCepvSQ2zXrZFgTrqNCOishkbC2KOino5ibiBZwKPvggqQ9jY+IQC+qmCAURFIdidStVRIpsXcdgyC4ttutM13ZN2yRNmuvJMYUIp2UN+u734X//GUN5DwMgAGL4Fwg28Siug2aj4W1CiDevqiJnLKeq6oXJW7dfAnANZTDouBz2HpvV8imn1HOou431PNSEztZaxgjqo1kSWI7GBlEGhY7ZbH6BE2q2yBxBnxtOqwlOqwld2xvQ6LJ0AGhFGRQ6lBIFRRaDiEQqA1UtgBKCTDaP1toqY22N+1mUQaGjado8iigBRIHj2u0FrOOMotHjgCQIPpRBoZNYS/1AiKYGfS5IAsd2rxuFggazUYK1QgYhkFAGhc7cwt1P/Er1SGebF5qmYV06mwMBQTgSQz6vzqEMhs0M7l1TC8mdZlH9o9pmUgTOEE+mpwaGxn6ZnAl/pAF3NE0zHHj1ueMvv/Xa7oGTH/6MEoaNWhwWsT8SX1majEi3OrfZmyghOHtpcY072v4CyNVI5E77Z+PfDPVf+eIxWYX/pzNnT4dCoQyKOEoUp/Npq7niGGOszhfYrXEuNb0/sgiZadAkV43N5niypaW9BUB3PLsqjOZWwGZ/Vw4k9/UDeB1FDEVKtbOv0mr+mFGmVDqbcoriZaIowWSuhGyyQ5aNWMcYd546NXD3lSPPLwVgrD/c2vO1v6r+g1AotIQijiKDJD5YKBRm0rnsuEu29mYyKRtjDJyL0EulktA09AY9zU8FPc3vEUJmoEOwET3zxjOLN+dz9ln4QAiFnpMuYacrMXHw5FcBAO4Th/ceTWWywruDw0dRxKFzZM+uF2urLPaCFvszPK/dTwg2qDYRyAL3Hzv0+Hdexd5FCcXn5y+8gxIKnfZtdY8wRpHP53/N5bIJbHJzbnXBajKQRk/VPlkUrCuJNVNPx45HUcJR8uYTXX0Cox3Lq2s4P37jCvfU7AVggk4MtunleDyZzOSi0cSaODR2/cRvV6cGUcJR4nFY9oic8XgyhTpX5QNzBBI2YUyo7Tv+5X3YAkPJ8OWJb7uDjc2JdDZfWWGQZ9N2P2OcYSPTzMz10Ww2PY17YND5cezG98OXJ06PT8fTDQ0t+xnjAiEE/1DVvCpJxolweHIU90CwtSqfb0dvXV3AR4uSyVj04sVzIwAuYQt/A1KMLo69s1khAAAAAElFTkSuQmCC"
  },
  {
    "width": 10,
    "height": 13,
    "url": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAANCAYAAACQN/8FAAAAAklEQVR4AewaftIAAAFnSURBVK3BOy9DYQAG4Pe7cHrXijutVnJSlWowIBJCDOwSl5gZrEaD1CTp2OioiWCpuMaA4A/gB0gEjSBtKYce2jo9vqFDY/Y8+HcERbLbtQBCBgiQuL69nweQQAkGocXlnDUbpNDSVL/cIzcEXtWfmvhzahclKATGqGyVOIcO2M0G9Hkbu/AHhfChqrHhgDtttxjBGYPNJHH8wSB8ZtR8lljH/E7H948GbF4o0dBheKB3emj5aHVvPRgMary2uqrDYbNu2Gq8rdvXFRR6AU3N/nnl/X3zLvPUnMqkRwDsc5NU7tQ0bd9XXeZJ6EYjpRRM+zI9RHe0FgubiWxMEgj09uHxYG60825Q5kld1zUIZl7ItdVL43UWGjNIZS4IHILNKE0k3j5Suu6oApjpNV+uqNncbjyZvllcO45A4BC+c/kV5Ss7CCAAgRBaGT5Pbl1dnR2hiKCEx9Pe7Xb72hXlJX55eXqCEr+0cX8PyPCXjQAAAABJRU5ErkJggg=="
  }
];
mipmaps.forEach( mipmap => {
  mipmap.img = new Image();
  const unlock = asyncLoader.createLock( mipmap.img );
  mipmap.img.onload = unlock;
  mipmap.img.src = mipmap.url; // trigger the loading of the image for its level
  mipmap.canvas = document.createElement( 'canvas' );
  mipmap.canvas.width = mipmap.width;
  mipmap.canvas.height = mipmap.height;
  const context = mipmap.canvas.getContext( '2d' );
  mipmap.updateCanvas = () => {
    if ( mipmap.img.complete && ( typeof mipmap.img.naturalWidth === 'undefined' || mipmap.img.naturalWidth > 0 ) ) {
      context.drawImage( mipmap.img, 0, 0 );
      delete mipmap.updateCanvas;
    }
  };
} );
export default mipmaps;