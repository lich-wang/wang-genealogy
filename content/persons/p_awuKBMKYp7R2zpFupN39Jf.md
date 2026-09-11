---
schema: wang-person/v1
id: p_awuKBMKYp7R2zpFupN39Jf
status: active
merged_into: null
display_name: 王璠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q9NrX2aCcrhkydY6A7G9ws
        subject_person_id: p_awuKBMKYp7R2zpFupN39Jf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ACqAMigH3B17w4JoN4omxC
          claim_id: c_q9NrX2aCcrhkydY6A7G9ws
          source_id: s_RT9g87zkFMk12BmAzhkv8G
          stance: supports
          locator: CBDB:458267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458267）
          source: &a1
            id: s_RT9g87zkFMk12BmAzhkv8G
            source_type: api_record
            title: 中国历代人物传记资料库：王璠（CBDB 458267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458267&o=json
            external_identifier: CBDB:458267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RHuzZ4nhQCrNrH3GpVrz9s
        subject_person_id: p_awuKBMKYp7R2zpFupN39Jf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璠，清人物。入仕監生，曾任分巡道。（中国历代人物传记资料库 CBDB 458267）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fIuS-zgvuBVYVJWK5Re_1r
          claim_id: c_RHuzZ4nhQCrNrH3GpVrz9s
          source_id: s_RT9g87zkFMk12BmAzhkv8G
          stance: supports
          locator: CBDB:458267
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

# 王璠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璠 | accepted |
| bio.summary | 王璠，清人物。入仕監生，曾任分巡道。（中国历代人物传记资料库 CBDB 458267） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璠（CBDB 458267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458267&o=json)
