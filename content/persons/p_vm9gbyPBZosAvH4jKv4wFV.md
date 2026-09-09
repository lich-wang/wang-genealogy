---
schema: wang-person/v1
id: p_vm9gbyPBZosAvH4jKv4wFV
status: active
merged_into: null
display_name: 王長孺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DHTq6JnRMCLCLc6o6vesAk
        subject_person_id: p_vm9gbyPBZosAvH4jKv4wFV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長孺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kkXzjo4gpoFyX4W3wrU9FT
          claim_id: c_DHTq6JnRMCLCLc6o6vesAk
          source_id: s_UmjcH6MaFUxkP99Aqwe4ma
          stance: supports
          locator: CBDB:98050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（98050）
          source: &a1
            id: s_UmjcH6MaFUxkP99Aqwe4ma
            source_type: api_record
            title: 中国历代人物传记资料库：王長孺（CBDB 98050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98050&o=json
            external_identifier: CBDB:98050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pjgjaYJP2NjwMHuR1c6Xm5
        subject_person_id: p_vm9gbyPBZosAvH4jKv4wFV
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
        - id: cs_mHuCMznYjEL7DHSyEa7QkY
          claim_id: c_pjgjaYJP2NjwMHuR1c6Xm5
          source_id: s_UmjcH6MaFUxkP99Aqwe4ma
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

# 王長孺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長孺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長孺（CBDB 98050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=98050&o=json)
