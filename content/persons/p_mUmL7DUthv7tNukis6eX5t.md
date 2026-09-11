---
schema: wang-person/v1
id: p_mUmL7DUthv7tNukis6eX5t
status: active
merged_into: null
display_name: 王煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_moHLXhixi37LaiULzrR4Vd
        subject_person_id: p_mUmL7DUthv7tNukis6eX5t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TDTDurWHNfZ6bK5uWCFd9K
          claim_id: c_moHLXhixi37LaiULzrR4Vd
          source_id: s_HdJjmPxfxCQjNLZCK1qBnB
          stance: supports
          locator: CBDB:328403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328403）
          source: &a1
            id: s_HdJjmPxfxCQjNLZCK1qBnB
            source_type: api_record
            title: 中国历代人物传记资料库：王煒（CBDB 328403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json
            external_identifier: CBDB:328403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.299Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YHf566iDz4pk2o6h166Gwu
        subject_person_id: p_mUmL7DUthv7tNukis6eX5t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煒，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328403）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eqwh2JbWchspbLtGWEy-6A
          claim_id: c_YHf566iDz4pk2o6h166Gwu
          source_id: s_HdJjmPxfxCQjNLZCK1qBnB
          stance: supports
          locator: CBDB:328403
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

# 王煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煒 | accepted |
| bio.summary | 王煒，明人物。嘉靖四十一年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 328403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煒（CBDB 328403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328403&o=json)
