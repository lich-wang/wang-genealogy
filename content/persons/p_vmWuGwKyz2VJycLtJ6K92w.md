---
schema: wang-person/v1
id: p_vmWuGwKyz2VJycLtJ6K92w
status: active
merged_into: null
display_name: 王裕鍂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vC28sPWoQ19xfSGCyMuepn
        subject_person_id: p_vmWuGwKyz2VJycLtJ6K92w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕鍂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExT7Q8NhT8TZ72iLGmnhHg
          claim_id: c_vC28sPWoQ19xfSGCyMuepn
          source_id: s_v4shEHDLZXF1ygNr5n7iLz
          stance: supports
          locator: CBDB:640223
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640223）
          source: &a1
            id: s_v4shEHDLZXF1ygNr5n7iLz
            source_type: api_record
            title: 中国历代人物传记资料库：王裕鍂（CBDB 640223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640223&o=json
            external_identifier: CBDB:640223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1HqSsjLimBXfXM6fTgLUdk
        subject_person_id: p_vmWuGwKyz2VJycLtJ6K92w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕鍂，清人物。籍贯合肥，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 640223）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LPededINEmng1-ssyzNz7a
          claim_id: c_1HqSsjLimBXfXM6fTgLUdk
          source_id: s_v4shEHDLZXF1ygNr5n7iLz
          stance: supports
          locator: CBDB:640223
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

# 王裕鍂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕鍂 | accepted |
| bio.summary | 王裕鍂，清人物。籍贯合肥，入仕監生，曾任同知。（中国历代人物传记资料库 CBDB 640223） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕鍂（CBDB 640223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640223&o=json)
