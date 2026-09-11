---
schema: wang-person/v1
id: p_Fu2nGKGKuSjVDrQQJBuNhE
status: active
merged_into: null
display_name: 王鉞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ET9tGDeZyAVwkR3E85z5fY
        subject_person_id: p_Fu2nGKGKuSjVDrQQJBuNhE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1FvKxJAMvDDWyiiP4s3Zah
          claim_id: c_ET9tGDeZyAVwkR3E85z5fY
          source_id: s_ycztzBHh87CjZicwsZfJ3p
          stance: supports
          locator: CBDB:491445
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491445）
          source: &a1
            id: s_ycztzBHh87CjZicwsZfJ3p
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 491445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491445&o=json
            external_identifier: CBDB:491445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxSei5rb9AJ6aFatDJoA61
        subject_person_id: p_Fu2nGKGKuSjVDrQQJBuNhE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。曾任稅課局大使。（中国历代人物传记资料库 CBDB 491445）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xrqbi10GPW7WjHt6ZPTrCO
          claim_id: c_BxSei5rb9AJ6aFatDJoA61
          source_id: s_ycztzBHh87CjZicwsZfJ3p
          stance: supports
          locator: CBDB:491445
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

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。曾任稅課局大使。（中国历代人物传记资料库 CBDB 491445） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 491445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491445&o=json)
