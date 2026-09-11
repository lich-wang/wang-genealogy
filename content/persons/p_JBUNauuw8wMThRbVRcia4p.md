---
schema: wang-person/v1
id: p_JBUNauuw8wMThRbVRcia4p
status: active
merged_into: null
display_name: 王蘭陵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_weesSjJMWuVe3GDqLPE8w2
        subject_person_id: p_JBUNauuw8wMThRbVRcia4p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘭陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y13gDdf5gLUYBKxM24Q2fB
          claim_id: c_weesSjJMWuVe3GDqLPE8w2
          source_id: s_2fXfcz1B3vF6JpffRUrtSL
          stance: supports
          locator: CBDB:640192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640192）
          source: &a1
            id: s_2fXfcz1B3vF6JpffRUrtSL
            source_type: api_record
            title: 中国历代人物传记资料库：王蘭陵（CBDB 640192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640192&o=json
            external_identifier: CBDB:640192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.180Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZykmCbhxDQY1LCXQQ7K6cS
        subject_person_id: p_JBUNauuw8wMThRbVRcia4p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王蘭陵，清人物。籍贯揚州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640192）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WmzS9anL_4aL9n79K5Iyis
          claim_id: c_ZykmCbhxDQY1LCXQQ7K6cS
          source_id: s_2fXfcz1B3vF6JpffRUrtSL
          stance: supports
          locator: CBDB:640192
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘭陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘭陵 | accepted |
| bio.summary | 王蘭陵，清人物。籍贯揚州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘭陵（CBDB 640192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640192&o=json)
