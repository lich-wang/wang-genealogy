---
schema: wang-person/v1
id: p_zzPKfYeKZU8f95hmK5bZux
status: active
merged_into: null
display_name: 王年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PQ9EMbhepYSzDSrvnbAyia
        subject_person_id: p_zzPKfYeKZU8f95hmK5bZux
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9LyGm9U1n3p6ux5zPBxq4T
          claim_id: c_PQ9EMbhepYSzDSrvnbAyia
          source_id: s_CViMnLbyDpb3vPGEaJs52P
          stance: supports
          locator: CBDB:502160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（502160）
          source: &a1
            id: s_CViMnLbyDpb3vPGEaJs52P
            source_type: api_record
            title: 中国历代人物传记资料库：王年（CBDB 502160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502160&o=json
            external_identifier: CBDB:502160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.865Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T21WVLt7jmFAvCU7x2GQ7q
        subject_person_id: p_zzPKfYeKZU8f95hmK5bZux
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
        - id: cs_zsSJ4Vfq4nWfX3Sjqx68D7
          claim_id: c_T21WVLt7jmFAvCU7x2GQ7q
          source_id: s_CViMnLbyDpb3vPGEaJs52P
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

# 王年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王年（CBDB 502160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=502160&o=json)
