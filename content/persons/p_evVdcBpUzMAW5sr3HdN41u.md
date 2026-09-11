---
schema: wang-person/v1
id: p_evVdcBpUzMAW5sr3HdN41u
status: active
merged_into: null
display_name: 毛秀惠
revision: 1
cbdb_id: 55969
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9ucFBAtJxJMZhaJ_frLjmF
        subject_person_id: p_evVdcBpUzMAW5sr3HdN41u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毛秀惠（1736—1795），清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 55969）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TuiF1I-o2MAE-2oFQr9i9j
          claim_id: c_9ucFBAtJxJMZhaJ_frLjmF
          source_id: s_aikCGrc5m9jvWcA-8y0TpI
          stance: supports
          locator: CBDB:55969
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_aikCGrc5m9jvWcA-8y0TpI
            source_type: api_record
            title: 中国历代人物传记资料库：毛秀惠（CBDB 55969）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55969&o=json
            external_identifier: CBDB:55969
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_e7ZpzGPaCWQt4PwD7DMr4E
        subject_person_id: p_evVdcBpUzMAW5sr3HdN41u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 毛秀惠
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JUwsdMwP-XpC4hOLWc5H72
          claim_id: c_e7ZpzGPaCWQt4PwD7DMr4E
          source_id: s_aikCGrc5m9jvWcA-8y0TpI
          stance: supports
          locator: CBDB:55969
          quotation: null
          interpretation_note: CBDB 明确记录的王愫配偶
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
        id: c_cTtm4KoWH2f99flbs3mujO
        subject_person_id: p_KADXczJu2XoRuXfmpoNaHr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_evVdcBpUzMAW5sr3HdN41u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sabOkF2JDuiODO4Hr6eWwq
          claim_id: c_cTtm4KoWH2f99flbs3mujO
          source_id: s_aikCGrc5m9jvWcA-8y0TpI
          stance: supports
          locator: CBDB 双向互证（妻子 毛秀惠）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_KADXczJu2XoRuXfmpoNaHr
        status: active
        display_name: 王愫
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 毛秀惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 毛秀惠（1736—1795），清人物。籍贯太倉直隸州，身份为畫家。（中国历代人物传记资料库 CBDB 55969） | accepted |
| name.primary | 毛秀惠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KADXczJu2XoRuXfmpoNaHr | 王愫 | accepted |

## 外部来源

- [中国历代人物传记资料库：毛秀惠（CBDB 55969）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55969&o=json)
