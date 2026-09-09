---
schema: wang-person/v1
id: p_6ZmQTehPgSVuPQLPBruSZF
status: active
merged_into: null
display_name: 王發
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cA2KFS3jPaxpCXN6nd3GYb
        subject_person_id: p_6ZmQTehPgSVuPQLPBruSZF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sDBJnxhYG26cFt4i6mGf25
          claim_id: c_cA2KFS3jPaxpCXN6nd3GYb
          source_id: s_vajXQ6NkT3aZ8s71pC5zfN
          stance: supports
          locator: CBDB:97975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97975）
          source: &a1
            id: s_vajXQ6NkT3aZ8s71pC5zfN
            source_type: api_record
            title: 中国历代人物传记资料库：王發（CBDB 97975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97975&o=json
            external_identifier: CBDB:97975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NRP9aLFYUqfEws952oLbzA
        subject_person_id: p_6ZmQTehPgSVuPQLPBruSZF
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
        - id: cs_ejsNK8K7iGsLWva65add4S
          claim_id: c_NRP9aLFYUqfEws952oLbzA
          source_id: s_vajXQ6NkT3aZ8s71pC5zfN
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

# 王發

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發（CBDB 97975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97975&o=json)
