---
schema: wang-person/v1
id: p_7XvdYNGwLHctu4cLzYQ7kr
status: active
merged_into: null
display_name: 王冕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ9d28rtBCN9b2Pg3QJEzC
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王冕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ZNLJhHHP1wFQvrG8tjpdC
          claim_id: c_YQ9d28rtBCN9b2Pg3QJEzC
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: CBDB:198620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198620）
          source: &a1
            id: s_wFAosYYDj6D1VR7Gxa42bv
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 198620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json
            external_identifier: CBDB:198620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vPX9EpPYYamnHDN8UsiFcW
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1426年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z2ip5fn2F8SWPkfKqJPFrG
          claim_id: c_vPX9EpPYYamnHDN8UsiFcW
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3ZvH76155RoPmgzAh8kPBH
        subject_person_id: p_7XvdYNGwLHctu4cLzYQ7kr
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
        - id: cs_7CAA1bgoNEwAxhXo4PTNA5
          claim_id: c_3ZvH76155RoPmgzAh8kPBH
          source_id: s_wFAosYYDj6D1VR7Gxa42bv
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

# 王冕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王冕 | accepted |
| birth.date | 1426年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王冕（CBDB 198620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198620&o=json)
