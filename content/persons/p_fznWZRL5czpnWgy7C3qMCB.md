---
schema: wang-person/v1
id: p_fznWZRL5czpnWgy7C3qMCB
status: active
merged_into: null
display_name: 王迪
revision: 2
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
          text: 王迪，明人物。嘉靖三十五年進士，曾任壽官。（中国历代人物传记资料库 CBDB 319422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pR70BYv2NnpizV40d9mweB
          claim_id: c_YGJ4yD3mq5uNmbFs3hdNg2
          source_id: s_ndNjsut8yMkEQ26BZa4gDx
          stance: supports
          locator: CBDB:319422
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
  descendants:
    - claim:
        id: c_f-a1feiV8l7SEqj7o0UtD1
        subject_person_id: p_fznWZRL5czpnWgy7C3qMCB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RFP8uQh7mfvwWjCYzUDpGk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AVPgK-IFdkL6Z4LUgBP0lJ
          claim_id: c_f-a1feiV8l7SEqj7o0UtD1
          source_id: s_ndNjsut8yMkEQ26BZa4gDx
          stance: supports
          locator: 嘉靖三十五年進士登科錄:一卷，第二甲第三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RFP8uQh7mfvwWjCYzUDpGk
        status: active
        display_name: 王凝
        merged_into_person_id: null
  other: []
---

# 王迪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王迪 | accepted |
| bio.summary | 王迪，明人物。嘉靖三十五年進士，曾任壽官。（中国历代人物传记资料库 CBDB 319422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RFP8uQh7mfvwWjCYzUDpGk | 王凝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 319422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=319422&o=json)
