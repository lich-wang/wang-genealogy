---
schema: wang-person/v1
id: p_9sENsBypge8N9vbRsfEP9r
status: active
merged_into: null
display_name: 王仲元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMeoz1QmtuMUFiydukrMqH
        subject_person_id: p_9sENsBypge8N9vbRsfEP9r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81KJQ1SeLMMac7vv2C5z3X
          claim_id: c_eMeoz1QmtuMUFiydukrMqH
          source_id: s_VB3U2PXUMMn38UKj3UKJqJ
          stance: supports
          locator: CBDB:101138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101138）
          source: &a1
            id: s_VB3U2PXUMMn38UKj3UKJqJ
            source_type: api_record
            title: 中国历代人物传记资料库：王仲元（CBDB 101138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101138&o=json
            external_identifier: CBDB:101138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nAvBUZg3gKQ3gAVgZMs4Xm
        subject_person_id: p_9sENsBypge8N9vbRsfEP9r
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲元，元人物。身份为畫家。（中国历代人物传记资料库 CBDB 101138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3GEjelRJCF932ctPN8ZRZm
          claim_id: c_nAvBUZg3gKQ3gAVgZMs4Xm
          source_id: s_VB3U2PXUMMn38UKj3UKJqJ
          stance: supports
          locator: CBDB:101138
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

# 王仲元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲元 | accepted |
| bio.summary | 王仲元，元人物。身份为畫家。（中国历代人物传记资料库 CBDB 101138） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲元（CBDB 101138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101138&o=json)
