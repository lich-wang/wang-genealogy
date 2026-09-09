---
schema: wang-person/v1
id: p_6WhFvnsigTCYHgKMNYRR3E
status: active
merged_into: null
display_name: 王處敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XuWLgvqFcu4KxAfvYu295k
        subject_person_id: p_6WhFvnsigTCYHgKMNYRR3E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YWXxBCZ7zK3fiHiXZvdFc2
          claim_id: c_XuWLgvqFcu4KxAfvYu295k
          source_id: s_mJgfbub1Fx8RXC7brzhMvJ
          stance: supports
          locator: CBDB:556213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556213）
          source: &a1
            id: s_mJgfbub1Fx8RXC7brzhMvJ
            source_type: api_record
            title: 中国历代人物传记资料库：王處敬（CBDB 556213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556213&o=json
            external_identifier: CBDB:556213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yP1M157h2pFJr3mfPb9rs9
        subject_person_id: p_6WhFvnsigTCYHgKMNYRR3E
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
        - id: cs_cDLMntCakDauSXxryzQnKB
          claim_id: c_yP1M157h2pFJr3mfPb9rs9
          source_id: s_mJgfbub1Fx8RXC7brzhMvJ
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

# 王處敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王處敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王處敬（CBDB 556213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556213&o=json)
