---
schema: wang-person/v1
id: p_6s5MnNcEXRxbLsbSMLdn16
status: active
merged_into: null
display_name: 王圖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fuhMG5EYferi4rwhA5QLjw
        subject_person_id: p_6s5MnNcEXRxbLsbSMLdn16
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王圖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bViTTRaCJkP3p71JEnJN98
          claim_id: c_fuhMG5EYferi4rwhA5QLjw
          source_id: s_ed5oz3t9PukXXch4xJeL6r
          stance: supports
          locator: CBDB:343482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343482）
          source: &a1
            id: s_ed5oz3t9PukXXch4xJeL6r
            source_type: api_record
            title: 中国历代人物传记资料库：王圖（CBDB 343482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343482&o=json
            external_identifier: CBDB:343482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oR29GN5oVJP7adAB2Jtu7W
        subject_person_id: p_6s5MnNcEXRxbLsbSMLdn16
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
        - id: cs_7wxpXQcnBEaYXRM29DpScg
          claim_id: c_oR29GN5oVJP7adAB2Jtu7W
          source_id: s_ed5oz3t9PukXXch4xJeL6r
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

# 王圖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王圖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王圖（CBDB 343482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343482&o=json)
