---
schema: wang-person/v1
id: p_iTbmjF7kf7EdcXk8KjA8ms
status: active
merged_into: null
display_name: 王奐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpyM8grdhhC721DRtS4jYf
        subject_person_id: p_iTbmjF7kf7EdcXk8KjA8ms
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8qfkJTtWT16GYfdHpQwUo6
          claim_id: c_dpyM8grdhhC721DRtS4jYf
          source_id: s_XpiV12C5C7f9HZuczAr7DD
          stance: supports
          locator: CBDB:497227
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497227）
          source: &a1
            id: s_XpiV12C5C7f9HZuczAr7DD
            source_type: api_record
            title: 中国历代人物传记资料库：王奐（CBDB 497227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497227&o=json
            external_identifier: CBDB:497227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GW2dgKS3fL6udaoNDJqtHT
        subject_person_id: p_iTbmjF7kf7EdcXk8KjA8ms
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南齊人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2DSKFLKeHhiWJZT5V5H7H
          claim_id: c_GW2dgKS3fL6udaoNDJqtHT
          source_id: s_XpiV12C5C7f9HZuczAr7DD
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

# 王奐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奐 | accepted |
| bio.summary | CBDB 记载为南齊人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奐（CBDB 497227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497227&o=json)
