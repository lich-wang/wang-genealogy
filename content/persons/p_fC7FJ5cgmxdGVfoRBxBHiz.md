---
schema: wang-person/v1
id: p_fC7FJ5cgmxdGVfoRBxBHiz
status: active
merged_into: null
display_name: 王昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QrqD8KQ6Z7Pn6g1GUwMgM5
        subject_person_id: p_fC7FJ5cgmxdGVfoRBxBHiz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RzJUht6HoKoNUeowCL9s4s
          claim_id: c_QrqD8KQ6Z7Pn6g1GUwMgM5
          source_id: s_shS3JcYkpVQYmdXpQD9U5L
          stance: supports
          locator: CBDB:38157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38157）
          source: &a1
            id: s_shS3JcYkpVQYmdXpQD9U5L
            source_type: api_record
            title: 中国历代人物传记资料库：王昭（CBDB 38157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38157&o=json
            external_identifier: CBDB:38157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jp8SZ4ckFVcoW9bE4aUf13
        subject_person_id: p_fC7FJ5cgmxdGVfoRBxBHiz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N167NesdsZYUtQuc8NuPkr
          claim_id: c_Jp8SZ4ckFVcoW9bE4aUf13
          source_id: s_shS3JcYkpVQYmdXpQD9U5L
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

# 王昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭（CBDB 38157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38157&o=json)
