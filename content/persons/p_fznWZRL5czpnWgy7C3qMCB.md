---
schema: wang-person/v1
id: p_fznWZRL5czpnWgy7C3qMCB
status: active
merged_into: null
display_name: 王迪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63qZ13krAjG8CmHkYAbG39
        subject_person_id: p_fznWZRL5czpnWgy7C3qMCB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bsAXCtVdxY56xf6dk4uv2U
          claim_id: c_63qZ13krAjG8CmHkYAbG39
          source_id: s_ndNjsut8yMkEQ26BZa4gDx
          stance: supports
          locator: CBDB:319422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（319422）
          source: &a1
            id: s_ndNjsut8yMkEQ26BZa4gDx
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 319422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319422&o=json
            external_identifier: CBDB:319422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.039Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YGJ4yD3mq5uNmbFs3hdNg2
        subject_person_id: p_fznWZRL5czpnWgy7C3qMCB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U36SeKLiWui5xdv3KJL2MM
          claim_id: c_YGJ4yD3mq5uNmbFs3hdNg2
          source_id: s_ndNjsut8yMkEQ26BZa4gDx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 319422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319422&o=json)
