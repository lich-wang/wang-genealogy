---
schema: wang-person/v1
id: p_EnTLB6WECUZGsyXR39jx7T
status: active
merged_into: null
display_name: 王伯壽
cbdb_id: 305353
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UpZ7sG4FLGGxRm34jyH1fs
        subject_person_id: p_EnTLB6WECUZGsyXR39jx7T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯壽，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jVPNAZEZEtmYkbuaJD-euz
          claim_id: c_UpZ7sG4FLGGxRm34jyH1fs
          source_id: s_LyWUC7KCFPxCDKHMWm9ccY
          stance: supports
          locator: CBDB:305353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LyWUC7KCFPxCDKHMWm9ccY
            source_type: api_record
            title: 中国历代人物传记资料库：王伯壽（CBDB 305353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json
            external_identifier: CBDB:305353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPo48tq1dD91VYFEweAakW
        subject_person_id: p_EnTLB6WECUZGsyXR39jx7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯壽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hwiJxbwtXhAEo6c3oSH5Ub
          claim_id: c_aPo48tq1dD91VYFEweAakW
          source_id: s_LyWUC7KCFPxCDKHMWm9ccY
          stance: supports
          locator: CBDB:305353
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
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

# 王伯壽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯壽，明人物。嘉靖二十三年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 305353） | accepted |
| name.primary | 王伯壽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯壽（CBDB 305353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305353&o=json)
