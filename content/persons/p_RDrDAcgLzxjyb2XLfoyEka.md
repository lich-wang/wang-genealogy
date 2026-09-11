---
schema: wang-person/v1
id: p_RDrDAcgLzxjyb2XLfoyEka
status: active
merged_into: null
display_name: 王稌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gqsiG1nD6u4SAg1BhkRckL
        subject_person_id: p_RDrDAcgLzxjyb2XLfoyEka
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R3ZEX6DVNFMHY97RzHsJk3
          claim_id: c_gqsiG1nD6u4SAg1BhkRckL
          source_id: s_bU294rg6v74jopCcv6ZKPA
          stance: supports
          locator: CBDB:506824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506824）
          source: &a1
            id: s_bU294rg6v74jopCcv6ZKPA
            source_type: api_record
            title: 中国历代人物传记资料库：王稌（CBDB 506824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506824&o=json
            external_identifier: CBDB:506824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fMzNadCA4d8GeNc6475Gjq
        subject_person_id: p_RDrDAcgLzxjyb2XLfoyEka
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稌，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 506824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xjWMrIT2mpnepr80KGTzoY
          claim_id: c_fMzNadCA4d8GeNc6475Gjq
          source_id: s_bU294rg6v74jopCcv6ZKPA
          stance: supports
          locator: CBDB:506824
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

# 王稌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王稌 | accepted |
| bio.summary | 王稌，明人物。曾任教諭。（中国历代人物传记资料库 CBDB 506824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王稌（CBDB 506824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506824&o=json)
