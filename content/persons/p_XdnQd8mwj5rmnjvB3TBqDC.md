---
schema: wang-person/v1
id: p_XdnQd8mwj5rmnjvB3TBqDC
status: active
merged_into: null
display_name: 胡氏
revision: 1
cbdb_id: 692900
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oYYtdacTxYGOJEtASFe4X6
        subject_person_id: p_XdnQd8mwj5rmnjvB3TBqDC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏，明人物。籍贯固始，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 692900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_cNT2Btt1VuUKNakmVa52
          claim_id: c_oYYtdacTxYGOJEtASFe4X6
          source_id: s_78cN23CZ12ff1Y9uhkq6A2
          stance: supports
          locator: CBDB:692900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_78cN23CZ12ff1Y9uhkq6A2
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(王儒妻)（CBDB 692900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692900&o=json
            external_identifier: CBDB:692900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CB1orhdsaoeSteUB3Ty0dU
        subject_person_id: p_XdnQd8mwj5rmnjvB3TBqDC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j-kVijzIMGVGY0372ymmuB
          claim_id: c_CB1orhdsaoeSteUB3Ty0dU
          source_id: s_78cN23CZ12ff1Y9uhkq6A2
          stance: supports
          locator: CBDB:692900
          quotation: null
          interpretation_note: CBDB 明确记录的王儒配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_R5wc9s9yMeL_yrq1nBJwI7
        subject_person_id: p_b9JMKecb8TmxHZXm7Ad88p
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_XdnQd8mwj5rmnjvB3TBqDC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sDh7UxhC_SOrEZWMD-1u8S
          claim_id: c_R5wc9s9yMeL_yrq1nBJwI7
          source_id: s_78cN23CZ12ff1Y9uhkq6A2
          stance: supports
          locator: (康熙)固始縣志，lgid=871481：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b9JMKecb8TmxHZXm7Ad88p
        status: active
        display_name: 王儒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 胡氏，明人物。籍贯固始，身份为貞婦/節婦。（中国历代人物传记资料库 CBDB 692900） | accepted |
| name.primary | 胡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_b9JMKecb8TmxHZXm7Ad88p | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王儒妻)（CBDB 692900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=692900&o=json)
