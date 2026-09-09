---
schema: wang-person/v1
id: p_VUQ1TS2xbw5LrqDN3rFv1V
status: active
merged_into: null
display_name: 王汝寧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4v11GBkKFxJXrkNTWAbpC
        subject_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EiZASjv6Mqga7FUMKMokQ4
          claim_id: c_L4v11GBkKFxJXrkNTWAbpC
          source_id: s_zfZJPtMqrJqYz5ksc3J6TK
          stance: supports
          locator: CBDB:313771
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313771）
          source: &a1
            id: s_zfZJPtMqrJqYz5ksc3J6TK
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寧（CBDB 313771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json
            external_identifier: CBDB:313771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZdoxHTfVhaJjTXe6e3zKNd
        subject_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kKqtL9LX8WNP8Tt2PWzNad
          claim_id: c_ZdoxHTfVhaJjTXe6e3zKNd
          source_id: s_zfZJPtMqrJqYz5ksc3J6TK
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

# 王汝寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝寧（CBDB 313771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json)
