---
schema: wang-person/v1
id: p_pqzzh1X3bxvH2Jo1JoVnaj
status: active
merged_into: null
display_name: 王豫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9bvtw1Gk4P2FqNDXHn4j7B
        subject_person_id: p_pqzzh1X3bxvH2Jo1JoVnaj
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
        - id: cs_uyD9EaHGdoFyQBgeVv3w2J
          claim_id: c_9bvtw1Gk4P2FqNDXHn4j7B
          source_id: s_2WMbjDPP1wcKp3JgGafYZD
          stance: supports
          locator: CBDB:153384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153384）
          source: &a1
            id: s_2WMbjDPP1wcKp3JgGafYZD
            source_type: api_record
            title: 中国历代人物传记资料库：王豫（CBDB 153384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153384&o=json
            external_identifier: CBDB:153384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RUtRnEMWRskXkxTCZ6gUw3
        subject_person_id: p_pqzzh1X3bxvH2Jo1JoVnaj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_74a8B4uYdvDE7vYtzvJMhY
          claim_id: c_RUtRnEMWRskXkxTCZ6gUw3
          source_id: s_2WMbjDPP1wcKp3JgGafYZD
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
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王豫（CBDB 153384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153384&o=json)
