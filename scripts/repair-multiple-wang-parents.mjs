#!/usr/bin/env node

/**
 * Apply the reviewed multiple-Wang-parent audit as one set-based API repair.
 * Anonymous claim reads are served from the public snapshot (zero D1 reads);
 * the authenticated write is one bulk request and one D1 batch.
 *
 * Usage:
 *   node scripts/repair-multiple-wang-parents.mjs          # review only
 *   node scripts/repair-multiple-wang-parents.mjs --apply  # write once
 *
 * Environment for --apply: API_BASE, IMPORTER_EMAIL, IMPORTER_PASSWORD
 */

const API = (process.env.API_BASE ?? 'https://wang-genealogy-api.lich-wang8718.workers.dev').replace(/\/+$/, '');
const apply = process.argv.includes('--apply');

const P = {
  wangGen: 'p_M4cUFQ28ZfkPom4Qrxw6Qk', wangFu: 'p_kAReoCDn6RQWsd52VHYHX8',
  wangHao: 'p_7hYGg2HEWoVWy98Ce12JpB', wangTian: 'p_H7xedNgXo2vDg7amAnfbo9',
  wangJi: 'p_V3ckafsQzHkyBukJRd6n5v', wangZhi: 'p_jLiWepWyuCmhBbQ3b2FAR9',
  wangJun: 'p_PyPYdgPJF9TEybjfkDt91f', wangLin: 'p_PMHDEn49o8y5aW5qiXbb15',
  wangJunVariant: 'p_JAyUE9xd2x2nYyMDH61YDq', wangZhao: 'p_g2bWmBWwoSBq13dEZGzzn8', wangXia: 'p_DN9vJcRSTQJV5P2trKyYjm',
  wangKe: 'p_R5j1wizb6egtoUUCeeZr8r', wangQi: 'p_tspct375EUYDVViDW6ahMw', wangJing: 'p_8K9NqM2aq3i4UpXoqF8NYJ',
  wangMao: 'p_F3A2LfaZNs8ryznksG7eQn', wangShi: 'p_SbPTtcJZJ9LtBZtu6YdCLo',
  wangPan: 'p_N2DicW23Hfs8faLrNtQ5S9', wangXi: 'p_2BM82qbWR6RUQ3iPHoiGyM',
  wangQiNew: 'p_g2sQw7oP694pyJYYDNMCo3', wangGong: 'p_XJ584hRRgmwC1emz21vE1F',
  wangQuan: 'p_cHtNMDSwmNv3KVwwrUz5on', wangShouzhen: 'p_BmJFZYzc1KhyXwV2LTrGiy', wangShiChild: 'p_69CU6cTNvx8xt28kJB3Tt6',
  wangShang: 'p_FqRJZ4FbxNLE8WDCkdUSH2', wangWu: 'p_76gr6oGxYKhGFKezCL69QV',
  wangShiTang: 'p_bK5L8kQGojpPS4vq64Eeqb', wangXiTang: 'p_muf5LSh6aGkW56UNfBDJFd',
  wangShuang: 'p_KDHyoyPThS4k5UPMDPZAU5', wangHuan: 'p_DHbqGXMHDUDbi5qvE74UDS',
  wangTi: 'p_p5VRgM5CRYbvtxNdaeEn7i', wangQiao: 'p_U2Fggori7BCBLtrGmDkhHG',
  wangXian: 'p_oAKHo8wPH3ABR8Zfv9PTYD', wangBa: 'p_kwTRKQmf7R3P5UCpdETJsM',
  wangXin: 'p_N6bQh9pnDkScrvHDXa2Wts', wangZhong: 'p_PrxK1oesAe8vKYM7JnTjFg',
  wangYan: 'p_kr9VdqKtFAJT7rCj4iNxGQ', wangLan: 'p_FLFcPPEXByru3j5c6vxzPG',
  wangZong: 'p_eJggnSoGH5ETKvaEZqE886', wangDan: 'p_JDNX3z8pfGtKBk9YQzJ1Ab', wangSu: 'p_udgWwPwKC6bGidgWpDBAMB',
  wangHui: 'p_6BGpHVeAskUR9fTGucB7Sw', wangLi: 'p_LcvEMX4D7m7ekEF1UEAFZB', wangWenhe: 'p_as7rj7RQYTVLb4ojEhF2Vx',
  wangGuan: 'p_LNfZ5qzHVynGTRpmH784JC', wangMi: 'p_4DPX9WczBMafdh2C9FWaf3',
  wangLu: 'p_6sxCAiUpHCGj4Gf87B7FRN',
  wangTan: 'p_A3jqrz5MCP94kKUqSaDLU1', wangXinAncestor: 'p_GbQy8jfgKbMEuvvPBZA4FY',
  wangXinGiven: 'p_f4HMpBBbSKyMnBCWcM6B3J', wangLunzhi: 'p_ECnFVPUvYxpzMpJfxqvQHK',
};

const splits = [
  ['wanggen_chart', '王根', 'c_72vF46KwVcmHQdEs9TvUgs', '西汉王根与琅邪世系中王馥之子同名'],
  ['wanghao_chart', '王浩', 'c_wEPx96E3gFbVn9n5SVXKQf', '唐代王浩与东晋王恬之子同名'],
  ['wangji_chart', '王緝', 'c_EBj2u21c8mibPijEPaD7K5', '王愉之子王緝与琅邪世系中王志之子同名'],
  ['wangjun_general', '王晙', 'c_YqV8kpY1AXPC51aiu3dZMP', '王方庆少子王晙与《旧唐书》所载将领王晙同名，现有外部记录混合了两支'],
  ['wangjun_variant', '王俊', 'c_UJ27QT1V81qgLzLM1wTjJk', '世系原文作王俊，不是另一支的王儁'],
  ['wangke_chart', '王恪', 'c_4UjXkPjvXn63pfYcVJcJPa', '唐代王源植之子与琅邪世系中王禥之子同名'],
  ['wangmao_xintang', '王懋', 'c_DKwaHaYvyJjBphE5Mb1P7F', '王偃之子王懋与《新唐书》王寔之子同名'],
  ['wangpan_yuan', '王磐', 'c_9KQtLpAr55bf1QzWRp3Fka', '东汉王磐与《元史》王禧之子跨千年同名'],
  ['wangqi_wanggong', '王奇', 'c_6uWhFrk8HnZ7nUiNJpQiEW', '新朝王商之子与后世王鞏之子同名'],
  ['wangquan_chart', '王佺', 'c_NXCWksNFx8PFV1boYmWX2b', '唐代王𬀩之子与琅邪世系中王守真之子同名'],
  ['wangshang_wangwu', '王商', 'c_PqcdWEr6C1qsU6VCoB4nWj', '王禁之子王商与王武之子王商同名'],
  ['wangshi_chart', '王湜', 'c_yjemWmdNqr6UXMt3exae8m', '卒于783年的王湜与卒于857年的王锡之子不可能是同一人'],
  ['wangshuang_nanqi', '王爽', 'c_DCFnMpD4GP1zZu54DP7Guv', '东晋王蘊之子王爽与南齐王奂之子同名'],
  ['wangti_ming', '王悌', 'c_xg3hPcRybCMiiXKDgXMjiR', '唐代墓志所见王悌与明代王侨之子同名'],
  ['wangxian_wangba', '王咸', 'c_GVTzgP1MXU5oqP22gNrjxf', '西汉宜春侯一支王咸与《新唐书》王霸之子同名'],
  ['wangxin_han', '王信', 'c_vwNVJQpKRX7WDCB9KBCd5E', '唐代王子杰之子与西汉王仲之子同名'],
  ['wangyan_jin', '王彦', 'c_jmQPXzCZoyQBpkK7TAHsCp', '外部数据库王虬之子与晋代王览之子同名'],
  ['wangzong_chart', '王宗', 'c_xJnNQfPK58Lyxq8rZ5JPjp', '新朝王宇之子与琅邪世系中王淡之子同名'],
  ['wanghui_wangli', '王惠', 'c_KoGSxQjBKibjqD8oE2Scmk', '《南史》王默之子与琅邪世系中王理之子同名'],
  ['wangguan_chart', '王瓘', 'c_N5VF4e926vdzrhZ6JLqTNV', '王郁之子与琅邪世系中王謐之子同名'],
  ['wanglu_chart', '王履', 'c_237fntGaQyHBbu4aSX6iX4', '东晋王蘊之子与琅邪世系中王瓘之子同名'],
  ['wangtan_wangxin', '王谭', 'c_BagLBhGt45F4CpAJkuJ4XS', '王禁之子王谭与王訢之子王谭同名'],
  ['wangxin_wanglunzhi', '王昕', 'c_NGnNG7BSrnsswG4Jzp8Rd4', '唐代王方庆之子与王伦之之子同名'],
].map(([key, text, evidence_claim_id, reason]) => ({ key, name: { text, language: 'zh-Hans' }, evidence_claim_id, reason }));

const moves = [
  ['c_72vF46KwVcmHQdEs9TvUgs', P.wangFu, P.wangGen, P.wangFu, 'split:wanggen_chart', '王馥 → 王根（琅邪世系）'],
  ['c_wEPx96E3gFbVn9n5SVXKQf', P.wangTian, P.wangHao, P.wangTian, 'split:wanghao_chart', '王恬 → 王浩（琅邪世系）'],
  ['c_EBj2u21c8mibPijEPaD7K5', P.wangZhi, P.wangJi, P.wangZhi, 'split:wangji_chart', '王志 → 王緝（琅邪世系）'],
  ['c_YqV8kpY1AXPC51aiu3dZMP', P.wangLin, P.wangJun, P.wangLin, 'split:wangjun_general', '王琳 → 王晙（唐代将领）'],
  ['c_UJ27QT1V81qgLzLM1wTjJk', P.wangZhao, P.wangJunVariant, P.wangZhao, 'split:wangjun_variant', '王肇 → 王俊'],
  ['c_r8VUY5KQpWewnt7zRMGtaw', P.wangJunVariant, P.wangXia, 'split:wangjun_variant', P.wangXia, '王俊 → 王遐'],
  ['c_4UjXkPjvXn63pfYcVJcJPa', P.wangQi, P.wangKe, P.wangQi, 'split:wangke_chart', '王禥 → 王恪'],
  ['c_1w2iN5Wbs4QX3yDdviFfEf', P.wangKe, P.wangJing, 'split:wangke_chart', P.wangJing, '王恪 → 王靖'],
  ['c_DKwaHaYvyJjBphE5Mb1P7F', P.wangShi, P.wangMao, P.wangShi, 'split:wangmao_xintang', '王寔 → 王懋'],
  ['c_9KQtLpAr55bf1QzWRp3Fka', P.wangXi, P.wangPan, P.wangXi, 'split:wangpan_yuan', '王禧 → 王磐（元代）'],
  ['c_6uWhFrk8HnZ7nUiNJpQiEW', P.wangGong, P.wangQiNew, P.wangGong, 'split:wangqi_wanggong', '王鞏 → 王奇'],
  ['c_NXCWksNFx8PFV1boYmWX2b', P.wangShouzhen, P.wangQuan, P.wangShouzhen, 'split:wangquan_chart', '王守真 → 王佺'],
  ['c_7tG3hnv4xjEF9Jj8x7EdSB', P.wangQuan, P.wangShiChild, 'split:wangquan_chart', P.wangShiChild, '王佺 → 王峕'],
  ['c_PqcdWEr6C1qsU6VCoB4nWj', P.wangWu, P.wangShang, P.wangWu, 'split:wangshang_wangwu', '王武 → 王商'],
  ['c_yjemWmdNqr6UXMt3exae8m', P.wangXiTang, P.wangShiTang, P.wangXiTang, 'split:wangshi_chart', '王锡 → 王湜'],
  ['c_DCFnMpD4GP1zZu54DP7Guv', P.wangHuan, P.wangShuang, P.wangHuan, 'split:wangshuang_nanqi', '王奂 → 王爽（南齐）'],
  ['c_xg3hPcRybCMiiXKDgXMjiR', P.wangQiao, P.wangTi, P.wangQiao, 'split:wangti_ming', '王侨 → 王悌（明代）'],
  ['c_GVTzgP1MXU5oqP22gNrjxf', P.wangBa, P.wangXian, P.wangBa, 'split:wangxian_wangba', '王霸 → 王咸'],
  ['c_vwNVJQpKRX7WDCB9KBCd5E', P.wangZhong, P.wangXin, P.wangZhong, 'split:wangxin_han', '王仲 → 王信（西汉）'],
  ['c_jmQPXzCZoyQBpkK7TAHsCp', P.wangLan, P.wangYan, P.wangLan, 'split:wangyan_jin', '王览 → 王彦（晋代）'],
  ['c_xJnNQfPK58Lyxq8rZ5JPjp', P.wangDan, P.wangZong, P.wangDan, 'split:wangzong_chart', '王淡 → 王宗'],
  ['c_eZq9F8wDh32sGpt23bq3X6', P.wangZong, P.wangSu, 'split:wangzong_chart', P.wangSu, '王宗 → 王素'],
  ['c_KoGSxQjBKibjqD8oE2Scmk', P.wangLi, P.wangHui, P.wangLi, 'split:wanghui_wangli', '王理 → 王惠'],
  ['c_RBtoykmxaP98Jkz3KwaySc', P.wangHui, P.wangWenhe, 'split:wanghui_wangli', P.wangWenhe, '王惠 → 王文合'],
  ['c_N5VF4e926vdzrhZ6JLqTNV', P.wangMi, P.wangGuan, P.wangMi, 'split:wangguan_chart', '王謐 → 王瓘'],
  ['c_237fntGaQyHBbu4aSX6iX4', P.wangGuan, P.wangLu, 'split:wangguan_chart', 'split:wanglu_chart', '王瓘 → 王履'],
  ['c_BagLBhGt45F4CpAJkuJ4XS', P.wangXinAncestor, P.wangTan, P.wangXinAncestor, 'split:wangtan_wangxin', '王訢 → 王谭'],
  ['c_gmSzwwzLuv5MUBtQ4Y6ynz', P.wangTan, P.wangXian, 'split:wangtan_wangxin', P.wangXian, '王谭 → 王咸（宜春侯一支）'],
  ['c_NGnNG7BSrnsswG4Jzp8Rd4', P.wangLunzhi, P.wangXinGiven, P.wangLunzhi, 'split:wangxin_wanglunzhi', '王伦之 → 王昕'],
].map(([claimId, oldSubject, oldObject, subject, object, label]) => ({ claimId, oldSubject, oldObject, subject, object, label }));

const removals = [
  ['c_qRDMQZTNrE8r2riY7Y7wde', 'p_zgWjAeM1N1EqCXTXQW9HkX', 'p_acKqaubEQQzaaYDjdFQ4eL', '《明史》说王先通是王承勋弟弟之子，不是王承勋之子；保留世系图明确记录的父亲王承恩'],
  ['c_QXAZ8G7fEUPv3dftMui6su', 'p_HcLcok4Km76wcGcxiwtaL6', 'p_mN6xwY4N1ZxQsniBvsAB7c', '原文说王终是王薈玄孙，导入方向倒置'],
  ['c_qvAjT5zf3Krz3ECyNRqRoq', 'p_YzT6HhE387kd7ePqohxr7u', 'p_boXUQkMyfs89398G3m7gdq', '来源只出现王琨姓名，缩进推断不足以证明王悦为父'],
  ['c_XJvY7se4Pf92LBrFvd36CW', 'p_48wsFe4LYNQDpaxaA2d7C9', 'p_b2HpS1yMZuN469vnGZ64c2', '原文说王敞承爵、王舜另封，未说王舜是王奉光之子'],
  ['c_AjKypAxMuwAQ7MrdxRvbMN', 'p_vB7BznQuWMDE4M9YeCyE1s', 'p_PcarY3s2HbN5X2amcQ3Lxq', '原文作王鉷之子王准，导入时把王准误识为王繇'],
  ['c_H2DfyfSFLpsRfoCxqY2v7v', 'p_qQBKqxPLCKmZ1zh7Gr5SRe', 'p_txEz4hCDRU7QsamZGm536K', '原文只比较王光与王宇年龄并同日娶妻，不是父子关系'],
  ['c_3jXojs32D74wd42qBwZY3G', 'p_ftTmaf71Kwzdeaet16S991', 'p_oAKHo8wPH3ABR8Zfv9PTYD', '原文说王咸之女嫁王莽，不是王咸本人嫁王莽'],
].map(([claimId, oldSubject, oldObject, reason]) => ({ claimId, oldSubject, oldObject, reason }));

const reclassifications = [
  {
    claimId: 'c_huSKSEr2xMe8WJ6FDdjHb5', oldSubject: 'p_8HcdTp6omF8z3tjYeyQCFC', oldObject: P.wangHuan,
    predicate: 'kinship.adoptive_father_of',
    reason: '《全齐文》与《南史》均记王奂出继王球：王粹为生父，王球应标为养父',
  },
];

async function api(method, path, body, token) {
  const response = await fetch(`${API}/api/v1${path}`, {
    method,
    headers: { 'content-type': 'application/json', ...(token ? { authorization: `Bearer ${token}` } : {}) },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await response.text();
  const json = text ? JSON.parse(text) : {};
  if (!response.ok) throw new Error(`${method} ${path} -> ${response.status} ${JSON.stringify(json)}`);
  return { json, d1: response.headers.get('x-wang-d1-access') };
}

const claimIds = [...new Set([
  ...moves.map((item) => item.claimId), ...removals.map((item) => item.claimId),
  ...reclassifications.map((item) => item.claimId), ...splits.map((item) => item.evidence_claim_id),
])];
const claimEntries = await Promise.all(claimIds.map(async (id) => [id, (await api('GET', `/claims/${id}`)).json.claim]));
const claims = new Map(claimEntries);
const assertPair = (item) => {
  const claim = claims.get(item.claimId);
  if (!claim || claim.subject_person_id !== item.oldSubject || claim.object_person_id !== item.oldObject) {
    throw new Error(`计划端点已变化：${item.claimId}`);
  }
  if (claim.status === 'retracted') throw new Error(`主张已撤回：${item.claimId}`);
  return claim;
};

const retractionById = new Map();
for (const item of moves) {
  const claim = assertPair(item);
  retractionById.set(item.claimId, {
    claim_id: item.claimId, expected_revision: claim.current_revision,
    expect: { predicate: claim.predicate, subject: item.oldSubject, object: item.oldObject },
    reason: `同名异人拆分：${item.label}`,
  });
}
for (const item of removals) {
  const claim = assertPair(item);
  retractionById.set(item.claimId, {
    claim_id: item.claimId, expected_revision: claim.current_revision,
    expect: { predicate: claim.predicate, subject: item.oldSubject, object: item.oldObject }, reason: item.reason,
  });
}

const plan = {
  summary: '全量核对30名多王姓父母人物：拆分同名异人、撤回误读关系、标明养父',
  retractions: [...retractionById.values()],
  splits,
  relinks: moves.map((item) => ({ source_claim_id: item.claimId, subject: item.subject, object: item.object, label: item.label })),
  reclassifications: reclassifications.map((item) => {
    const claim = assertPair(item);
    return {
      claim_id: item.claimId, expected_revision: claim.current_revision,
      expect: { predicate: claim.predicate, subject: item.oldSubject, object: item.oldObject },
      predicate: item.predicate, reason: item.reason,
    };
  }),
};

console.log(`核对 ${claimIds.length} 条主张；撤回 ${plan.retractions.length}，拆分 ${splits.length} 人，改挂 ${moves.length}，重分类 ${plan.reclassifications.length}`);
if (!apply) {
  console.log(JSON.stringify(plan, null, 2));
  process.exit(0);
}
if (!process.env.IMPORTER_EMAIL || !process.env.IMPORTER_PASSWORD) {
  throw new Error('--apply 需要 IMPORTER_EMAIL 和 IMPORTER_PASSWORD');
}
const login = await api('POST', '/auth/login', { email: process.env.IMPORTER_EMAIL, password: process.env.IMPORTER_PASSWORD });
const result = await api('POST', '/claims/bulk-kinship-repairs', plan, login.json.token);
console.log(JSON.stringify(result.json, null, 2));
