---
schema: wang-person/v1
id: p_fG7PF1vYfdALCYJcjjnYMV
status: active
merged_into: null
display_name: 王者銓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZGvWV9S1mFKsc4f1waviKF
        subject_person_id: p_fG7PF1vYfdALCYJcjjnYMV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者銓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Tqbh18Z4U2SGK8RXGADWKs
          claim_id: c_ZGvWV9S1mFKsc4f1waviKF
          source_id: s_N9duvW1KN2BpTbACg9rk9o
          stance: supports
          locator: CBDB:639930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639930）
          source: &a1
            id: s_N9duvW1KN2BpTbACg9rk9o
            source_type: api_record
            title: 中国历代人物传记资料库：王者銓（CBDB 639930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639930&o=json
            external_identifier: CBDB:639930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AfqGMZ8JnsvhTXPFQmNMUM
        subject_person_id: p_fG7PF1vYfdALCYJcjjnYMV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v62QjEvG5v5RCRnVbYjeQn
          claim_id: c_AfqGMZ8JnsvhTXPFQmNMUM
          source_id: s_N9duvW1KN2BpTbACg9rk9o
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王者銓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者銓 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者銓（CBDB 639930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639930&o=json)
