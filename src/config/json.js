export const json = {
  locale: 'sv',
  title: {
    sv: 'LINKUP',
  },
  description: 'LINKUP',
  logoPosition: 'right',
  pages: [
    {
      name: 'page1',
      elements: [
        {
          type: 'radiogroup',
          name: 'question1',
          title: 'Följer du influencers på sociala medier?',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'JA',
            },
            {
              value: 'Item 2',
              text: 'NEJ',
            },
            {
              value: 'Item 3',
              text: 'VET INTE',
            },
          ],
        },
      ],
    },
    {
      name: 'page2',
      elements: [
        {
          type: 'radiogroup',
          name: 'question2',
          title:
            'Följer du fler manliga, kvinnliga eller lika många influencers?',
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: 'MANLIGA',
            },
            {
              value: 'Item 2',
              text: 'KVINNLIGA',
            },
            {
              value: 'Item 3',
              text: 'LIKA MÅNGA',
            },
          ],
        },
      ],
    },
    {
      name: 'page3',
      elements: [
        {
          type: 'text',
          name: 'question3',
          title: 'Vilka typer av influencers följer du på sociala medier? ',
          isRequired: true,
          placeholder: 'Mode, skönhet, fitness, teknik osv.',
        },
      ],
    },
    {
      name: 'page4',
      elements: [
        {
          type: 'boolean',
          name: 'question4',
          title:
            'Har du någonsin försökt att kontakta en influencer direkt på sociala medier? Om ja, varför?',
          isRequired: true,
          showCommentArea: true,
          swapOrder: true,
        },
      ],
    },
    {
      name: 'page5',
      elements: [
        {
          type: 'radiogroup',
          name: 'question5',
          title: {
            sv: 'Skulle du vilja komma i kontakt med influencers?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page6',
      elements: [
        {
          type: 'radiogroup',
          name: 'question6',
          title: {
            sv: 'Finns det någon speciell person du skulle vilja ha kontakt med?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page7',
      elements: [
        {
          type: 'comment',
          name: 'question7',
          title: {
            sv: 'Vad är din huvudsakliga anledning till att vilja komma i kontakt med influencers eller profiler inom din bransch? ',
          },
          isRequired: true,
          placeholder: {
            sv: 'JAG VILL HA SVAR PÅ EN FRÅGA-JAG VILL GE BERÖM- FÖLJA TILLBAKA-ANSWER FREELY',
          },
        },
      ],
    },
    {
      name: 'page8',
      elements: [
        {
          type: 'radiogroup',
          name: 'question8',
          title: {
            sv: 'Skulle du vilja komma i kontakt med personer inom din bransch som inte nödvändigtvis har stora sociala mediekonton?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page9',
      elements: [
        {
          type: 'comment',
          name: 'question9',
          title: {
            sv: 'Vad skulle vara den största fördelen för dig om du kunde få kontakt med influencers eller experter inom din bransch?',
          },
          isRequired: true,
          placeholder: {
            sv: 'RÅD OCH TIPS-ETABLERA EN KONTAKT-FÖLJA TILLBAKA-ANSWER FREELY',
          },
        },
      ],
    },
    {
      name: 'page10',
      elements: [
        {
          type: 'comment',
          name: 'question10',
          title: {
            sv: 'Vilka hinder eller svårigheter ser du när det gäller att kommunicera med influencers eller experter?',
          },
          isRequired: true,
          placeholder: {
            sv: 'FÅR ADLRIG SVAR-VÅGAR INTE-VET INTE',
          },
        },
      ],
    },
    {
      name: 'page11',
      elements: [
        {
          type: 'radiogroup',
          name: 'question11',
          title: {
            sv: 'Önskar du att du hade fler kontakter för att kunna förverkliga din dröm?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'VEN INTE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page12',
      elements: [
        {
          type: 'radiogroup',
          name: 'question12',
          title: {
            sv: 'Önskar du att du kunde komma i kontakt med någon som skulle kunna inspirera dig?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANKSE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page13',
      elements: [
        {
          type: 'radiogroup',
          name: 'question13',
          title: {
            sv: 'Får du inspiration av andra människor som du anser har nått framgång i din bransch eller annan bransch?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page14',
      elements: [
        {
          type: 'radiogroup',
          name: 'question14',
          title: {
            sv: 'Skulle du kunna tänka dig att betala för att komma i kontakt med en framgångsrik person, influenser eller expert?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page15',
      elements: [
        {
          type: 'radiogroup',
          name: 'question15',
          title: {
            sv: 'Hur länge skulle du vilja prata med personen?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: '15 MINUER',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: '30 MINUTER',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: '60 MINUTER ELLER MER',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page16',
      elements: [
        {
          type: 'radiogroup',
          name: 'question16',
          title: {
            sv: 'Vilket kommunikationsformat skulle du föredra för att prata med personen?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'FACETIME',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'TEXMEDDELANDE',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'TELEFONSAMTAL',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page17',
      elements: [
        {
          type: 'radiogroup',
          name: 'question17',
          title: {
            sv: 'Har du tidigare skrivit till någon med ett stort antal följare(50tusen följare eller fler)?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'VET INTE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page18',
      elements: [
        {
          type: 'radiogroup',
          name: 'question19',
          title: {
            sv: 'Har du fått svar från någon med ett stort antal följare(50tusen följare eller mer)?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'VET INTE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page19',
      elements: [
        {
          type: 'radiogroup',
          name: 'question22',
          title: {
            sv: 'Har du tidigare skrivit till någon profil/expert inom din bransch?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page20',
      elements: [
        {
          type: 'radiogroup',
          name: 'question18',
          title: {
            sv: 'Har du fått svar från någon profil/expert?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: 'JA',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: 'NEJ',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: 'KANSKE',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page21',
      elements: [
        {
          type: 'radiogroup',
          name: 'question20',
          title: {
            sv: 'Vad kulle du vara villig att betala för ett telefonsamtal med en framgångsrik person, influenser eller expert?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: '100KR',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: '500KR',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: '1000KR ELLER MER',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page22',
      elements: [
        {
          type: 'radiogroup',
          name: 'question21',
          title: {
            sv: 'Vad skulle du betala för ett FaceTime-samtal med en framgångsrik person, influenser eller expert?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: '100KR',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: '500KR',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: '1000KR ELLER MER',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page23',
      elements: [
        {
          type: 'radiogroup',
          name: 'question23',
          title: {
            sv: 'Vad skulle du betala för ett textsamtal med en framgångsrik person, influenser eller expert?',
          },
          isRequired: true,
          choices: [
            {
              value: 'Item 1',
              text: {
                sv: '100KR',
              },
            },
            {
              value: 'Item 2',
              text: {
                sv: '500KR',
              },
            },
            {
              value: 'Item 3',
              text: {
                sv: '1000KR ELLER MER',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'page24',
      elements: [
        {
          type: 'comment',
          name: 'question24',
          title: {
            sv: 'Vem skulle du vilja prata med som du har försökt komma i kontakt med?',
          },
          isRequired: true,
        },
      ],
    },
  ],
};
