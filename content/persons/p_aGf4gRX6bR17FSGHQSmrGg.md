---
schema: wang-person/v1
id: p_aGf4gRX6bR17FSGHQSmrGg
status: active
merged_into: null
display_name: 王學何
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z52LvsqSHm9q9VT8mZyJHE
        subject_person_id: p_aGf4gRX6bR17FSGHQSmrGg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學何
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kNW1ikMAGAsQYxKevxjBhm
          claim_id: c_Z52LvsqSHm9q9VT8mZyJHE
          source_id: s_rTaBo7d4vHH8pyAFtpvMDq
          stance: supports
          locator: CBDB:637019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637019）
          source: &a1
            id: s_rTaBo7d4vHH8pyAFtpvMDq
            source_type: api_record
            title: 中国历代人物传记资料库：王學何（CBDB 637019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637019&o=json
            external_identifier: CBDB:637019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q8x24Ur8UNP4HcvJCGZ1b4
        subject_person_id: p_aGf4gRX6bR17FSGHQSmrGg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學何，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 637019）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qGItPZS3jSzRFZx-LFbhRu
          claim_id: c_q8x24Ur8UNP4HcvJCGZ1b4
          source_id: s_rTaBo7d4vHH8pyAFtpvMDq
          stance: supports
          locator: CBDB:637019
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

# 王學何

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學何 | accepted |
| bio.summary | 王學何，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 637019） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學何（CBDB 637019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637019&o=json)
