---
schema: wang-person/v1
id: p_u458xMHFN5Z27VY2fzxC4e
status: active
merged_into: null
display_name: 王養賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_48V41AUA87ytWQ98nZRuwH
        subject_person_id: p_u458xMHFN5Z27VY2fzxC4e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王養賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_42wPB8WC46Mcm6DEc3xTCm
          claim_id: c_48V41AUA87ytWQ98nZRuwH
          source_id: s_71JF4tE7qzQ4HDEs55snBu
          stance: supports
          locator: CBDB:287963
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287963）
          source: &a1
            id: s_71JF4tE7qzQ4HDEs55snBu
            source_type: api_record
            title: 中国历代人物传记资料库：王養賢（CBDB 287963）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json
            external_identifier: CBDB:287963
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3UMJzTD8MB7jtAWH6UxCZ
        subject_person_id: p_u458xMHFN5Z27VY2fzxC4e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7P73mRJQSE2xySyPpux9E
          claim_id: c_g3UMJzTD8MB7jtAWH6UxCZ
          source_id: s_71JF4tE7qzQ4HDEs55snBu
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

# 王養賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王養賢 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王養賢（CBDB 287963）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287963&o=json)
