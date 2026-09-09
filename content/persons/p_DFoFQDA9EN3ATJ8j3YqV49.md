---
schema: wang-person/v1
id: p_DFoFQDA9EN3ATJ8j3YqV49
status: active
merged_into: null
display_name: 王以侢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e2fnd1E3X97B3eXQXknEDJ
        subject_person_id: p_DFoFQDA9EN3ATJ8j3YqV49
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以侢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8UptWCF2UNZLHsntjzmjSV
          claim_id: c_e2fnd1E3X97B3eXQXknEDJ
          source_id: s_xKsPk2hYzUVUd1c1KPUjgD
          stance: supports
          locator: CBDB:635912
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635912）
          source: &a1
            id: s_xKsPk2hYzUVUd1c1KPUjgD
            source_type: api_record
            title: 中国历代人物传记资料库：王以侢（CBDB 635912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635912&o=json
            external_identifier: CBDB:635912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9b4oFK5eWcBNwFH5CvDvZF
        subject_person_id: p_DFoFQDA9EN3ATJ8j3YqV49
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
        - id: cs_yckuKN5rYZpB6Kmd2pT7SZ
          claim_id: c_9b4oFK5eWcBNwFH5CvDvZF
          source_id: s_xKsPk2hYzUVUd1c1KPUjgD
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

# 王以侢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以侢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以侢（CBDB 635912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635912&o=json)
