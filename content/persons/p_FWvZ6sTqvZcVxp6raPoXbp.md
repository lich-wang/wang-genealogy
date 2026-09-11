---
schema: wang-person/v1
id: p_FWvZ6sTqvZcVxp6raPoXbp
status: active
merged_into: null
display_name: 王仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_noxnexDXHrJHtrBjBm6u1M
        subject_person_id: p_FWvZ6sTqvZcVxp6raPoXbp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XnDJmGKPKtd92xRUts9of4
          claim_id: c_noxnexDXHrJHtrBjBm6u1M
          source_id: s_JX4xEDCA4DHW74zWk1DVxA
          stance: supports
          locator: CBDB:245208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245208）
          source: &a1
            id: s_JX4xEDCA4DHW74zWk1DVxA
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 245208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json
            external_identifier: CBDB:245208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PxhNoFB45G31D9JZ3n6bCn
        subject_person_id: p_FWvZ6sTqvZcVxp6raPoXbp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245208）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oyI4qhW6YyMGNTShs_ZWQK
          claim_id: c_PxhNoFB45G31D9JZ3n6bCn
          source_id: s_JX4xEDCA4DHW74zWk1DVxA
          stance: supports
          locator: CBDB:245208
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

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。景泰二年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 245208） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 245208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245208&o=json)
