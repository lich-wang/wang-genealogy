---
schema: wang-person/v1
id: p_m4z1awijVaS8ZTMKtEVuWF
status: active
merged_into: null
display_name: 王衍榯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h7t6ov4vgdJGQM8i7dobK7
        subject_person_id: p_m4z1awijVaS8ZTMKtEVuWF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍榯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GiSb32noW5JWjDbY86jo7X
          claim_id: c_h7t6ov4vgdJGQM8i7dobK7
          source_id: s_QVR8n8gAWbCtzC9QNKDsFp
          stance: supports
          locator: CBDB:640203
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640203）
          source: &a1
            id: s_QVR8n8gAWbCtzC9QNKDsFp
            source_type: api_record
            title: 中国历代人物传记资料库：王衍榯（CBDB 640203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640203&o=json
            external_identifier: CBDB:640203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NgZPXHQiF2cfbJw9L8tfrt
        subject_person_id: p_m4z1awijVaS8ZTMKtEVuWF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍榯，清人物。籍贯會稽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 640203）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5lYz0opc1fUOGgPP88lwpl
          claim_id: c_NgZPXHQiF2cfbJw9L8tfrt
          source_id: s_QVR8n8gAWbCtzC9QNKDsFp
          stance: supports
          locator: CBDB:640203
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

# 王衍榯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍榯 | accepted |
| bio.summary | 王衍榯，清人物。籍贯會稽，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 640203） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衍榯（CBDB 640203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640203&o=json)
