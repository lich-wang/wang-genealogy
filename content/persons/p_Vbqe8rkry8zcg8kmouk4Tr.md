---
schema: wang-person/v1
id: p_Vbqe8rkry8zcg8kmouk4Tr
status: active
merged_into: null
display_name: 王以儒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2K2bbRx4W3LyzjMLCtMUM
        subject_person_id: p_Vbqe8rkry8zcg8kmouk4Tr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKZA4DMc2gyykCyjHQ9ZnK
          claim_id: c_m2K2bbRx4W3LyzjMLCtMUM
          source_id: s_J3YM2B6Vi7ZBAFxgC8yCRq
          stance: supports
          locator: CBDB:635914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635914）
          source: &a1
            id: s_J3YM2B6Vi7ZBAFxgC8yCRq
            source_type: api_record
            title: 中国历代人物传记资料库：王以儒（CBDB 635914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635914&o=json
            external_identifier: CBDB:635914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.828Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_caGTYcdGyx39J8B9DS3Hkp
        subject_person_id: p_Vbqe8rkry8zcg8kmouk4Tr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以儒，清人物。籍贯金華，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635914）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kSimNwxlcp4da8Fxia4wBV
          claim_id: c_caGTYcdGyx39J8B9DS3Hkp
          source_id: s_J3YM2B6Vi7ZBAFxgC8yCRq
          stance: supports
          locator: CBDB:635914
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

# 王以儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以儒 | accepted |
| bio.summary | 王以儒，清人物。籍贯金華，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 635914） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王以儒（CBDB 635914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635914&o=json)
