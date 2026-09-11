---
schema: wang-person/v1
id: p_TGP8EmeGcvV3mmQK9Y9EVR
status: active
merged_into: null
display_name: 王道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aGZrfKpoh4LDjx2caw3YuN
        subject_person_id: p_TGP8EmeGcvV3mmQK9Y9EVR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vojyfhbqEiV5EsMhCtYdAj
          claim_id: c_aGZrfKpoh4LDjx2caw3YuN
          source_id: s_nVuvoL2jCnSTRx2h5gRWCJ
          stance: supports
          locator: CBDB:497921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497921）
          source: &a1
            id: s_nVuvoL2jCnSTRx2h5gRWCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 497921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497921&o=json
            external_identifier: CBDB:497921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8GDmG9df2BJ4MsQzWXKbMc
        subject_person_id: p_TGP8EmeGcvV3mmQK9Y9EVR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 497921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DK63EpQ1yL__WTe5f1oLzY
          claim_id: c_8GDmG9df2BJ4MsQzWXKbMc
          source_id: s_nVuvoL2jCnSTRx2h5gRWCJ
          stance: supports
          locator: CBDB:497921
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

# 王道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道 | accepted |
| bio.summary | 王道，清人物。曾任司巡檢。（中国历代人物传记资料库 CBDB 497921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 497921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497921&o=json)
