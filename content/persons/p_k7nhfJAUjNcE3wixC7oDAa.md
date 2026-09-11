---
schema: wang-person/v1
id: p_k7nhfJAUjNcE3wixC7oDAa
status: active
merged_into: null
display_name: 王相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpTQHxhML2NHzA65QHnVwz
        subject_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mkWDwRyXSr1HXdnmhtjFiP
          claim_id: c_WpTQHxhML2NHzA65QHnVwz
          source_id: s_x6JwkVHUBfCmWX133L5Xpf
          stance: supports
          locator: CBDB:262002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262002）
          source: &a1
            id: s_x6JwkVHUBfCmWX133L5Xpf
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1W14MDKxhV2h6ZcFvYeueS
        subject_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王相，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KpYwMuH0DGaQvD8Ke7bXtl
          claim_id: c_1W14MDKxhV2h6ZcFvYeueS
          source_id: s_x6JwkVHUBfCmWX133L5Xpf
          stance: supports
          locator: CBDB:262002
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

# 王相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王相 | accepted |
| bio.summary | 王相，明人物。弘治三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 262002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王相（CBDB 262002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json)
