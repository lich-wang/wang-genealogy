---
schema: wang-person/v1
id: p_mp6D1x4C9AxDfSPq96Syoj
status: active
merged_into: null
display_name: 王有功
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vfhtzsbjHBDhKAnvM3d961
        subject_person_id: p_mp6D1x4C9AxDfSPq96Syoj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有功
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6G3a6DMAq48LCnFCv8ZpN
          claim_id: c_vfhtzsbjHBDhKAnvM3d961
          source_id: s_Jm2PGtHc2WhQLKzKvNGXNS
          stance: supports
          locator: CBDB:455311
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（455311）
          source: &a1
            id: s_Jm2PGtHc2WhQLKzKvNGXNS
            source_type: api_record
            title: 中国历代人物传记资料库：王有功（CBDB 455311）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455311&o=json
            external_identifier: CBDB:455311
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a8sw7CRknEBYNAYjichC5b
        subject_person_id: p_mp6D1x4C9AxDfSPq96Syoj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有功，清人物。曾任左哨哨官。（中国历代人物传记资料库 CBDB 455311）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_r35gwQ7COKTMqdtC8xLfFp
          claim_id: c_a8sw7CRknEBYNAYjichC5b
          source_id: s_Jm2PGtHc2WhQLKzKvNGXNS
          stance: supports
          locator: CBDB:455311
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

# 王有功

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有功 | accepted |
| bio.summary | 王有功，清人物。曾任左哨哨官。（中国历代人物传记资料库 CBDB 455311） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有功（CBDB 455311）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=455311&o=json)
