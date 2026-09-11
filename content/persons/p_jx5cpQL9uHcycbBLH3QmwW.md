---
schema: wang-person/v1
id: p_jx5cpQL9uHcycbBLH3QmwW
status: active
merged_into: null
display_name: 王興明
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mTNDDgSLpozpbEzGSaGPaF
        subject_person_id: p_jx5cpQL9uHcycbBLH3QmwW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HPku9Dq8cadBAba5mfX7Gi
          claim_id: c_mTNDDgSLpozpbEzGSaGPaF
          source_id: s_w2RAg2xQUAN2xkf5GA9HVT
          stance: supports
          locator: CBDB:640034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640034）
          source: &a1
            id: s_w2RAg2xQUAN2xkf5GA9HVT
            source_type: api_record
            title: 中国历代人物传记资料库：王興明（CBDB 640034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640034&o=json
            external_identifier: CBDB:640034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xPACETWzTufdaT4KmxHjcn
        subject_person_id: p_jx5cpQL9uHcycbBLH3QmwW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興明，清人物。籍贯黃梅，入仕軍功補授(軍功)，曾任都司、守備。（中国历代人物传记资料库 CBDB 640034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qASS1Wi8VbEud4Ask9Ef8y
          claim_id: c_xPACETWzTufdaT4KmxHjcn
          source_id: s_w2RAg2xQUAN2xkf5GA9HVT
          stance: supports
          locator: CBDB:640034
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

# 王興明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興明 | accepted |
| bio.summary | 王興明，清人物。籍贯黃梅，入仕軍功補授(軍功)，曾任都司、守備。（中国历代人物传记资料库 CBDB 640034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王興明（CBDB 640034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640034&o=json)
