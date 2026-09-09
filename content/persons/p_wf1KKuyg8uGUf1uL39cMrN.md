---
schema: wang-person/v1
id: p_wf1KKuyg8uGUf1uL39cMrN
status: active
merged_into: null
display_name: 王蘊奇
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oKARHK6s6EDB5wAthT8MaQ
        subject_person_id: p_wf1KKuyg8uGUf1uL39cMrN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NmRVh7qPD6FTPECiQLVseh
          claim_id: c_oKARHK6s6EDB5wAthT8MaQ
          source_id: s_6pZJxQBgeKdMCZ1DeU3BtL
          stance: supports
          locator: CBDB:527056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527056）
          source: &a1
            id: s_6pZJxQBgeKdMCZ1DeU3BtL
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊奇（CBDB 527056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527056&o=json
            external_identifier: CBDB:527056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BnUWnXscu9W4mMEBjmxtH3
        subject_person_id: p_wf1KKuyg8uGUf1uL39cMrN
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
        - id: cs_ENATM9EmJaSy11JLy9j3mj
          claim_id: c_BnUWnXscu9W4mMEBjmxtH3
          source_id: s_6pZJxQBgeKdMCZ1DeU3BtL
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

# 王蘊奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊奇 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊奇（CBDB 527056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527056&o=json)
