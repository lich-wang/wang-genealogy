---
schema: wang-person/v1
id: p_xTfgwP195usJ93B9R8xhUq
status: active
merged_into: null
display_name: 王補
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mP9u6cegvxYMoSH44Gynxu
        subject_person_id: p_xTfgwP195usJ93B9R8xhUq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVFA9FXFKtL1aMuS43yNAK
          claim_id: c_mP9u6cegvxYMoSH44Gynxu
          source_id: s_Ft7hivWaJG1rR3XkV2HdVo
          stance: supports
          locator: CBDB:28107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（28107）
          source: &a1
            id: s_Ft7hivWaJG1rR3XkV2HdVo
            source_type: api_record
            title: 中国历代人物传记资料库：王補（CBDB 28107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json
            external_identifier: CBDB:28107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_43jfrssy562713V2KG8FdR
        subject_person_id: p_xTfgwP195usJ93B9R8xhUq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王補，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sSLdhSpnUB_OhdCVk8Qwy9
          claim_id: c_43jfrssy562713V2KG8FdR
          source_id: s_Ft7hivWaJG1rR3XkV2HdVo
          stance: supports
          locator: CBDB:28107
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

# 王補

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王補 | accepted |
| bio.summary | 王補，明人物。籍贯義烏。（中国历代人物传记资料库 CBDB 28107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王補（CBDB 28107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=28107&o=json)
