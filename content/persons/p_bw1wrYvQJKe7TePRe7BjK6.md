---
schema: wang-person/v1
id: p_bw1wrYvQJKe7TePRe7BjK6
status: active
merged_into: null
display_name: 王裕齢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2V7UDABuf36PTkKk8pStKk
        subject_person_id: p_bw1wrYvQJKe7TePRe7BjK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕齢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZfZp2DP5gEDwGHQkd67n2X
          claim_id: c_2V7UDABuf36PTkKk8pStKk
          source_id: s_yVNjZegioTVU83edeRtsQJ
          stance: supports
          locator: CBDB:640225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640225）
          source: &a1
            id: s_yVNjZegioTVU83edeRtsQJ
            source_type: api_record
            title: 中国历代人物传记资料库：王裕齢（CBDB 640225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640225&o=json
            external_identifier: CBDB:640225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.191Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sRsmirey63NCQC6xNgxbd8
        subject_person_id: p_bw1wrYvQJKe7TePRe7BjK6
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
        - id: cs_Uv7N89eTPt5RoHtPKtF9re
          claim_id: c_sRsmirey63NCQC6xNgxbd8
          source_id: s_yVNjZegioTVU83edeRtsQJ
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

# 王裕齢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕齢 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕齢（CBDB 640225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640225&o=json)
