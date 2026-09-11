---
schema: wang-person/v1
id: p_FcSJzQY6XAD3AoYTrkAypz
status: active
merged_into: null
display_name: 王曄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZB8PLPtMHd9jgV7AKAHD9p
        subject_person_id: p_FcSJzQY6XAD3AoYTrkAypz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EbU6ny7MXNXyFyCdo9ZVBB
          claim_id: c_ZB8PLPtMHd9jgV7AKAHD9p
          source_id: s_nShNQpu8k39QBvpdQFW6a4
          stance: supports
          locator: CBDB:68469
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68469）
          source: &a1
            id: s_nShNQpu8k39QBvpdQFW6a4
            source_type: api_record
            title: 中国历代人物传记资料库：王曄（CBDB 68469）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68469&o=json
            external_identifier: CBDB:68469
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5j5GNMzQXk6abMhBAnWRWA
        subject_person_id: p_FcSJzQY6XAD3AoYTrkAypz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曄，明人物。籍贯金壇，入仕進士，曾任兵備道、吏科給事中、提刑按察使司僉事。（中国历代人物传记资料库 CBDB 68469）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nhoMRpa5qV40vGJ-i0J56
          claim_id: c_5j5GNMzQXk6abMhBAnWRWA
          source_id: s_nShNQpu8k39QBvpdQFW6a4
          stance: supports
          locator: CBDB:68469
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

# 王曄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曄 | accepted |
| bio.summary | 王曄，明人物。籍贯金壇，入仕進士，曾任兵備道、吏科給事中、提刑按察使司僉事。（中国历代人物传记资料库 CBDB 68469） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王曄（CBDB 68469）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68469&o=json)
