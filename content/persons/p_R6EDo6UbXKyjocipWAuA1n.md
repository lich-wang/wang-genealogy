---
schema: wang-person/v1
id: p_R6EDo6UbXKyjocipWAuA1n
status: active
merged_into: null
display_name: 王思禮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fRJE4fJRBGNQAmWG2iDbUF
        subject_person_id: p_R6EDo6UbXKyjocipWAuA1n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_di41BnRyuK7AsSFvM5zovc
          claim_id: c_fRJE4fJRBGNQAmWG2iDbUF
          source_id: s_xgbACyfpW22eHSpS43wDE1
          stance: supports
          locator: CBDB:501180
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（501180）
          source: &a1
            id: s_xgbACyfpW22eHSpS43wDE1
            source_type: api_record
            title: 中国历代人物传记资料库：王思禮（CBDB 501180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501180&o=json
            external_identifier: CBDB:501180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7xT5UAMLchC3uzNFvtG9Pf
        subject_person_id: p_R6EDo6UbXKyjocipWAuA1n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思禮，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 501180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5GeCJqQIRR7YVroLJ9fray
          claim_id: c_7xT5UAMLchC3uzNFvtG9Pf
          source_id: s_xgbACyfpW22eHSpS43wDE1
          stance: supports
          locator: CBDB:501180
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

# 王思禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思禮 | accepted |
| bio.summary | 王思禮，清人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 501180） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思禮（CBDB 501180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=501180&o=json)
