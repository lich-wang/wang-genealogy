---
schema: wang-person/v1
id: p_uxzi7r37dcH36G81YqJ6c4
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nYYr2z214hdVk4jMAUbUxN
        subject_person_id: p_uxzi7r37dcH36G81YqJ6c4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eeagJ7wFhbdgdrz1B3S47r
          claim_id: c_nYYr2z214hdVk4jMAUbUxN
          source_id: s_wP7UU69FS5BFEHQGo2fPvX
          stance: supports
          locator: CBDB:507822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（507822）
          source: &a1
            id: s_wP7UU69FS5BFEHQGo2fPvX
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 507822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507822&o=json
            external_identifier: CBDB:507822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ccyvThMeeHhxivrMfKmhRo
        subject_person_id: p_uxzi7r37dcH36G81YqJ6c4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦，宋人物。曾任巡檢。（中国历代人物传记资料库 CBDB 507822）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DKcXJXwc1zJRnciFlh5zgt
          claim_id: c_ccyvThMeeHhxivrMfKmhRo
          source_id: s_wP7UU69FS5BFEHQGo2fPvX
          stance: supports
          locator: CBDB:507822
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| bio.summary | 王琦，宋人物。曾任巡檢。（中国历代人物传记资料库 CBDB 507822） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 507822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=507822&o=json)
