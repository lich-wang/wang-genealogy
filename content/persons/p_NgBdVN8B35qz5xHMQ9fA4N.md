---
schema: wang-person/v1
id: p_NgBdVN8B35qz5xHMQ9fA4N
status: active
merged_into: null
display_name: 王士則
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p2szTCvpGwsFcaXJA7L1Gq
        subject_person_id: p_NgBdVN8B35qz5xHMQ9fA4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士則
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MRYAKmUgvuhhsDBToBrMdM
          claim_id: c_p2szTCvpGwsFcaXJA7L1Gq
          source_id: s_gcZwvGBQe9oepKSF4AAv4R
          stance: supports
          locator: CBDB:167297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（167297）
          source: &a1
            id: s_gcZwvGBQe9oepKSF4AAv4R
            source_type: api_record
            title: 中国历代人物传记资料库：王士則（CBDB 167297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167297&o=json
            external_identifier: CBDB:167297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zKsdCbKQfzvXsYFzNw1rXv
        subject_person_id: p_NgBdVN8B35qz5xHMQ9fA4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士則，唐人物。曾任府丞。（中国历代人物传记资料库 CBDB 167297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-i7zsu14JfBB-b86AtYyy_
          claim_id: c_zKsdCbKQfzvXsYFzNw1rXv
          source_id: s_gcZwvGBQe9oepKSF4AAv4R
          stance: supports
          locator: CBDB:167297
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

# 王士則

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士則 | accepted |
| bio.summary | 王士則，唐人物。曾任府丞。（中国历代人物传记资料库 CBDB 167297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士則（CBDB 167297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=167297&o=json)
