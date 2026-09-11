---
schema: wang-person/v1
id: p_1K9o25qC7y19xFWq1B9Dvn
status: active
merged_into: null
display_name: 王慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kHkGCCyMeNda7jKPhUDBai
        subject_person_id: p_1K9o25qC7y19xFWq1B9Dvn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V7e5Kh1jaAp9UzS56J5Udn
          claim_id: c_kHkGCCyMeNda7jKPhUDBai
          source_id: s_UnqXQXkzB4hNuFGUuCukfL
          stance: supports
          locator: CBDB:477653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477653）
          source: &a1
            id: s_UnqXQXkzB4hNuFGUuCukfL
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 477653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477653&o=json
            external_identifier: CBDB:477653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mE994wcFu2ZzNbz4PQ7YNa
        subject_person_id: p_1K9o25qC7y19xFWq1B9Dvn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 477653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G0-et3ZeCIC5sCvCWxbpdK
          claim_id: c_mE994wcFu2ZzNbz4PQ7YNa
          source_id: s_UnqXQXkzB4hNuFGUuCukfL
          stance: supports
          locator: CBDB:477653
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

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | 王慶，明人物。曾任百戶。（中国历代人物传记资料库 CBDB 477653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 477653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477653&o=json)
