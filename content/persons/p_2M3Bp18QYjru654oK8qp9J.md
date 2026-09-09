---
schema: wang-person/v1
id: p_2M3Bp18QYjru654oK8qp9J
status: active
merged_into: null
display_name: 王瀹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6MZXco42DH6jhVuuXbLGaz
        subject_person_id: p_2M3Bp18QYjru654oK8qp9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瀹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MASMPd7y2ure2BL5QE9SPw
          claim_id: c_6MZXco42DH6jhVuuXbLGaz
          source_id: s_K7a1s1KSf4be6uY4QxijWU
          stance: supports
          locator: CBDB:134187
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134187）
          source: &a1
            id: s_K7a1s1KSf4be6uY4QxijWU
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 134187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json
            external_identifier: CBDB:134187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vgDnxLEHJAyYcD7LN1z4sV
        subject_person_id: p_2M3Bp18QYjru654oK8qp9J
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
        - id: cs_JXgfNLjZHbvUywXTi1d8iE
          claim_id: c_vgDnxLEHJAyYcD7LN1z4sV
          source_id: s_K7a1s1KSf4be6uY4QxijWU
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

# 王瀹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瀹 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瀹（CBDB 134187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json)
