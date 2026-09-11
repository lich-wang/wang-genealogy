---
schema: wang-person/v1
id: p_HxdzZZQTC18B3ERPY2ChWR
status: active
merged_into: null
display_name: 王衍晉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xcwzk2DrmRx2XPqjEF8XCP
        subject_person_id: p_HxdzZZQTC18B3ERPY2ChWR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍晉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1vt7R4Q9dDhEfREmL8DMnG
          claim_id: c_Xcwzk2DrmRx2XPqjEF8XCP
          source_id: s_nXGDNN2ZB4sVHrA9uapBtH
          stance: supports
          locator: CBDB:640201
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640201）
          source: &a1
            id: s_nXGDNN2ZB4sVHrA9uapBtH
            source_type: api_record
            title: 中国历代人物传记资料库：王衍晉（CBDB 640201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640201&o=json
            external_identifier: CBDB:640201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YkBNp4ESJ6kgMDLAA6nabk
        subject_person_id: p_HxdzZZQTC18B3ERPY2ChWR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王衍晉，清人物。籍贯曹州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640201）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_saY7osWVszrt5zvWTgxV8m
          claim_id: c_YkBNp4ESJ6kgMDLAA6nabk
          source_id: s_nXGDNN2ZB4sVHrA9uapBtH
          stance: supports
          locator: CBDB:640201
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

# 王衍晉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍晉 | accepted |
| bio.summary | 王衍晉，清人物。籍贯曹州府，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任復設訓導。（中国历代人物传记资料库 CBDB 640201） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍晉（CBDB 640201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640201&o=json)
