---
schema: wang-person/v1
id: p_QSnH1nu3YEaGp2qdVkK88B
status: active
merged_into: null
display_name: 王培祜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Ns3KCaZhCiJd9jncoANWJ
        subject_person_id: p_QSnH1nu3YEaGp2qdVkK88B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_peVLKFzTH6o8W3SkaUZGBR
          claim_id: c_6Ns3KCaZhCiJd9jncoANWJ
          source_id: s_5BrmPkkVzN1zb7UfX83bdZ
          stance: supports
          locator: CBDB:636730
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636730）
          source: &a1
            id: s_5BrmPkkVzN1zb7UfX83bdZ
            source_type: api_record
            title: 中国历代人物传记资料库：王培祜（CBDB 636730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636730&o=json
            external_identifier: CBDB:636730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_biGZD6udtB3YkP6DUAab3r
        subject_person_id: p_QSnH1nu3YEaGp2qdVkK88B
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
        - id: cs_pYJutBjdzFTxK8zi28YH2f
          claim_id: c_biGZD6udtB3YkP6DUAab3r
          source_id: s_5BrmPkkVzN1zb7UfX83bdZ
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

# 王培祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培祜 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培祜（CBDB 636730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636730&o=json)
