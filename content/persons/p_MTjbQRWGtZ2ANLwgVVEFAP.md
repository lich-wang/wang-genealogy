---
schema: wang-person/v1
id: p_MTjbQRWGtZ2ANLwgVVEFAP
status: active
merged_into: null
display_name: 王光祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vRvwpFiUrQo4zqyu5WTCPu
        subject_person_id: p_MTjbQRWGtZ2ANLwgVVEFAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4c5jwbtDDK9HdcjtJKET22
          claim_id: c_vRvwpFiUrQo4zqyu5WTCPu
          source_id: s_aN9CN7XqEeKow4FMZZ87yQ
          stance: supports
          locator: CBDB:97807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97807）
          source: &a1
            id: s_aN9CN7XqEeKow4FMZZ87yQ
            source_type: api_record
            title: 中国历代人物传记资料库：王光祖（CBDB 97807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97807&o=json
            external_identifier: CBDB:97807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.172Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7p8N14y8fnxUMjjDqdB77B
        subject_person_id: p_MTjbQRWGtZ2ANLwgVVEFAP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4FgNH9AJ7bRLhqfjY31DG4
          claim_id: c_7p8N14y8fnxUMjjDqdB77B
          source_id: s_aN9CN7XqEeKow4FMZZ87yQ
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

# 王光祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光祖 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光祖（CBDB 97807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97807&o=json)
