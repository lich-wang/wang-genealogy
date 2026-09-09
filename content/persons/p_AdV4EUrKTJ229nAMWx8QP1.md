---
schema: wang-person/v1
id: p_AdV4EUrKTJ229nAMWx8QP1
status: active
merged_into: null
display_name: 王來用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2CNpTXyuqvt6qDAZXJDQY5
        subject_person_id: p_AdV4EUrKTJ229nAMWx8QP1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xEo33Bghta1sFbpQZNuseR
          claim_id: c_2CNpTXyuqvt6qDAZXJDQY5
          source_id: s_jH5ix7NaBSnsmTF5jYcBgf
          stance: supports
          locator: CBDB:57132
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57132）
          source: &a1
            id: s_jH5ix7NaBSnsmTF5jYcBgf
            source_type: api_record
            title: 中国历代人物传记资料库：王來用（CBDB 57132）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57132&o=json
            external_identifier: CBDB:57132
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_qyFtXZbHieQPn8WbN5i9r6
        subject_person_id: p_AdV4EUrKTJ229nAMWx8QP1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXETApAer9JX5gyXKeMqUf
          claim_id: c_qyFtXZbHieQPn8WbN5i9r6
          source_id: s_jH5ix7NaBSnsmTF5jYcBgf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dbeaZq6kwssk2oaA32St4J
        subject_person_id: p_AdV4EUrKTJ229nAMWx8QP1
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
        - id: cs_szHUKpb7u516vPSbumvJSf
          claim_id: c_dbeaZq6kwssk2oaA32St4J
          source_id: s_jH5ix7NaBSnsmTF5jYcBgf
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

# 王來用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來用 | accepted |
| death.date | 1657年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王來用（CBDB 57132）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57132&o=json)
