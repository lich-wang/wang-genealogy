---
schema: wang-person/v1
id: p_KmawgdaWmb2FWvd883VXkF
status: active
merged_into: null
display_name: 王行仙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M3dCH8bE49cJEBY1mvMjCB
        subject_person_id: p_KmawgdaWmb2FWvd883VXkF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9XSESGjzt89hdhMP2MbXGX
          claim_id: c_M3dCH8bE49cJEBY1mvMjCB
          source_id: s_E7RbH6KfjmQjr6BkbHCA1e
          stance: supports
          locator: CBDB:169130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169130）
          source: &a1
            id: s_E7RbH6KfjmQjr6BkbHCA1e
            source_type: api_record
            title: 中国历代人物传记资料库：王行仙（CBDB 169130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169130&o=json
            external_identifier: CBDB:169130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.228Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6GaWGs3RCsFfPzMMcfCGJ6
        subject_person_id: p_KmawgdaWmb2FWvd883VXkF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 808年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3sNABxU2CznsVtwK4JZaJp
          claim_id: c_6GaWGs3RCsFfPzMMcfCGJ6
          source_id: s_E7RbH6KfjmQjr6BkbHCA1e
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
        id: c_QgmHA3jqjL7NWQnAEjSTL8
        subject_person_id: p_KmawgdaWmb2FWvd883VXkF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行仙（卒于808年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 169130）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9D49eD2TLLaAN063bN4Elt
          claim_id: c_QgmHA3jqjL7NWQnAEjSTL8
          source_id: s_E7RbH6KfjmQjr6BkbHCA1e
          stance: supports
          locator: CBDB:169130
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

# 王行仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行仙 | accepted |
| death.date | 808年 | accepted |
| bio.summary | 王行仙（卒于808年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 169130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行仙（CBDB 169130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169130&o=json)
