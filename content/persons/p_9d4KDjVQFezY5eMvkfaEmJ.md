---
schema: wang-person/v1
id: p_9d4KDjVQFezY5eMvkfaEmJ
status: active
merged_into: null
display_name: 王雋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nLZCC4qWXwGLJmAN5trHTQ
        subject_person_id: p_9d4KDjVQFezY5eMvkfaEmJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z14Np6KP6XoEU6aisGEi8S
          claim_id: c_nLZCC4qWXwGLJmAN5trHTQ
          source_id: s_V59G1VB2WbsUFqdVNWiMMf
          stance: supports
          locator: CBDB:438395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（438395）
          source: &a1
            id: s_V59G1VB2WbsUFqdVNWiMMf
            source_type: api_record
            title: 中国历代人物传记资料库：王雋（CBDB 438395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438395&o=json
            external_identifier: CBDB:438395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k9JPQeaJCRXLno2G8MdADt
        subject_person_id: p_9d4KDjVQFezY5eMvkfaEmJ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1787年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7mETGZp8H7TgYp3e3Ajx9K
          claim_id: c_k9JPQeaJCRXLno2G8MdADt
          source_id: s_V59G1VB2WbsUFqdVNWiMMf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KWc6kCVE8JhxFHA5jBVqcT
        subject_person_id: p_9d4KDjVQFezY5eMvkfaEmJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雋（卒于1787年），清人物。籍贯仁和，入仕鄉貢舉人，曾任同知、縣知縣。（中国历代人物传记资料库 CBDB 438395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mX-q1cGG1_xGxlJsIozZO1
          claim_id: c_KWc6kCVE8JhxFHA5jBVqcT
          source_id: s_V59G1VB2WbsUFqdVNWiMMf
          stance: supports
          locator: CBDB:438395
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

# 王雋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雋 | accepted |
| death.date | 1787年 | accepted |
| bio.summary | 王雋（卒于1787年），清人物。籍贯仁和，入仕鄉貢舉人，曾任同知、縣知縣。（中国历代人物传记资料库 CBDB 438395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雋（CBDB 438395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=438395&o=json)
