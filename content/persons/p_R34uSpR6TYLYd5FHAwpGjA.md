---
schema: wang-person/v1
id: p_R34uSpR6TYLYd5FHAwpGjA
status: active
merged_into: null
display_name: 王本宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8o6CkWgPuLV94Bgt9BMepb
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7GRM8XCtLkj6dW6kmbcBCj
          claim_id: c_8o6CkWgPuLV94Bgt9BMepb
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
          stance: supports
          locator: CBDB:237431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237431）
          source: &a1
            id: s_XZLb3Kmv4Cy4oZTJXxYEyb
            source_type: api_record
            title: 中国历代人物传记资料库：王本宗（CBDB 237431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json
            external_identifier: CBDB:237431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zCuHkBumFoGSxK65Vy5sGp
        subject_person_id: p_R34uSpR6TYLYd5FHAwpGjA
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
        - id: cs_PWSw8GXcSGGoyRQ7VDsHiV
          claim_id: c_zCuHkBumFoGSxK65Vy5sGp
          source_id: s_XZLb3Kmv4Cy4oZTJXxYEyb
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

# 王本宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本宗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本宗（CBDB 237431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237431&o=json)
