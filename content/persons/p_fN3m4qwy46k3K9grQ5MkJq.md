---
schema: wang-person/v1
id: p_fN3m4qwy46k3K9grQ5MkJq
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94kL4QhTBN72c1SMAKme3d
        subject_person_id: p_fN3m4qwy46k3K9grQ5MkJq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DQj5QqstPjdRV8q4s8f4gB
          claim_id: c_94kL4QhTBN72c1SMAKme3d
          source_id: s_KSohmKJYw1ucpY257DJBdS
          stance: supports
          locator: CBDB:56103
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56103）
          source: &a1
            id: s_KSohmKJYw1ucpY257DJBdS
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 56103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56103&o=json
            external_identifier: CBDB:56103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3gkNL2CyY9Uy4qA5vHW8xq
        subject_person_id: p_fN3m4qwy46k3K9grQ5MkJq
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
        - id: cs_hxKtz4iHUpCf5pVZ7fnjYG
          claim_id: c_3gkNL2CyY9Uy4qA5vHW8xq
          source_id: s_KSohmKJYw1ucpY257DJBdS
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

# 王豫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豫 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 56103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56103&o=json)
