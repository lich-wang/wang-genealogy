---
schema: wang-person/v1
id: p_qTUAEU7P8pw2Fo9bieA4Zx
status: active
merged_into: null
display_name: 王佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G1Xe7cikRPwLg14fHuDWk3
        subject_person_id: p_qTUAEU7P8pw2Fo9bieA4Zx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JpDFaEL8j1TdYTJ2NLF7HA
          claim_id: c_G1Xe7cikRPwLg14fHuDWk3
          source_id: s_vfdjyGG4G5qm22BTPy9NZ9
          stance: supports
          locator: CBDB:342297
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342297）
          source: &a1
            id: s_vfdjyGG4G5qm22BTPy9NZ9
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 342297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342297&o=json
            external_identifier: CBDB:342297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2y7xaKuehm4P9gbYyADJzU
        subject_person_id: p_qTUAEU7P8pw2Fo9bieA4Zx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。明清進士進士，籍贯寧陽，入仕進士。（中国历代人物传记资料库 CBDB 342297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bhxXqnCsRTrIfFZslLNjTI
          claim_id: c_2y7xaKuehm4P9gbYyADJzU
          source_id: s_vfdjyGG4G5qm22BTPy9NZ9
          stance: supports
          locator: CBDB:342297
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

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。明清進士進士，籍贯寧陽，入仕進士。（中国历代人物传记资料库 CBDB 342297） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 342297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342297&o=json)
