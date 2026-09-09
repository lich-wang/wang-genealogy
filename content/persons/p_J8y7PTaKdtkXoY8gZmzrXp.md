---
schema: wang-person/v1
id: p_J8y7PTaKdtkXoY8gZmzrXp
status: active
merged_into: null
display_name: 王琖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6aNddDN16KxkNrrjEJidj
        subject_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qFt62qmYmNJmnUzYuYZz2L
          claim_id: c_U6aNddDN16KxkNrrjEJidj
          source_id: s_V5y4T54JMAsxkF9RNn8FEd
          stance: supports
          locator: CBDB:703952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703952）
          source: &a1
            id: s_V5y4T54JMAsxkF9RNn8FEd
            source_type: api_record
            title: 中国历代人物传记资料库：王琖（CBDB 703952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703952&o=json
            external_identifier: CBDB:703952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yg5D3yqicxE1Pb8fHrUJuh
        subject_person_id: p_J8y7PTaKdtkXoY8gZmzrXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JetJXH22QR9j128Dpfyz25
          claim_id: c_yg5D3yqicxE1Pb8fHrUJuh
          source_id: s_V5y4T54JMAsxkF9RNn8FEd
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

# 王琖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琖 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琖（CBDB 703952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703952&o=json)
