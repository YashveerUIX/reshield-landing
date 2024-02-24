export const fonts = {
  HEADLINE_1: { fontSize: 56, fontWeight: 600 },
  HEADLINE_2: { fontSize: 40, fontWeight: 600 },
  HEADLINE_3: { fontSize: 32, fontWeight: 600 },
  HEADLINE_4: { fontSize: 32, fontWeight: 400 },
  SUBHEAD_1: { fontSize: 20, fontWeight: 700 },
  SUBHEAD_2: { fontSize: 14, fontWeight: 700 },
  BODY_1: { fontSize: 18, fontWeight: 400 },
  BODY_2: { fontSize: 14, fontWeight: 400 },
  BUTTON_1: { fontSize: 12, fontWeight: 600 },
};

export type Font = keyof typeof fonts;
