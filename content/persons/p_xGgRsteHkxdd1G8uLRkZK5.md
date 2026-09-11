---
schema: wang-person/v1
id: p_xGgRsteHkxdd1G8uLRkZK5
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9KozBs5ssRehyGG72LYjK
        subject_person_id: p_xGgRsteHkxdd1G8uLRkZK5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntjbT1fGUoLtTRH23Sg61c
          claim_id: c_J9KozBs5ssRehyGG72LYjK
          source_id: s_N386BzBQVQj9h7XFtfYeWf
          stance: supports
          locator: CBDB:306579
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306579）
          source: &a1
            id: s_N386BzBQVQj9h7XFtfYeWf
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 306579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306579&o=json
            external_identifier: CBDB:306579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.768Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ATMwXEr9v3gX72J4bDbwQK
        subject_person_id: p_xGgRsteHkxdd1G8uLRkZK5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306579）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AcTdVWxR7WlL3u00D5cmF0
          claim_id: c_ATMwXEr9v3gX72J4bDbwQK
          source_id: s_N386BzBQVQj9h7XFtfYeWf
          stance: supports
          locator: CBDB:306579
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
        id: c_O3xpxo4KkHHmIPgDlSXfTz
        subject_person_id: p_xGgRsteHkxdd1G8uLRkZK5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QDMgaCLn9CeEes99W7dE45
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ntfCIcPkERurHIihFLnyZz
          claim_id: c_O3xpxo4KkHHmIPgDlSXfTz
          source_id: s_N386BzBQVQj9h7XFtfYeWf
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QDMgaCLn9CeEes99W7dE45
        status: active
        display_name: 王本固
        merged_into_person_id: null
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，明人物。嘉靖二十三年進士。（中国历代人物传记资料库 CBDB 306579） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_QDMgaCLn9CeEes99W7dE45 | 王本固 | accepted |

## 外部来源

- [中国历代人物传记资料库：王信（CBDB 306579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306579&o=json)
