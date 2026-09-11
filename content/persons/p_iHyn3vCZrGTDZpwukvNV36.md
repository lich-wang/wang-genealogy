---
schema: wang-person/v1
id: p_iHyn3vCZrGTDZpwukvNV36
status: active
merged_into: null
display_name: 王信
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iLgy9o3qbNoqkpDFhWsAaZ
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Du2iLT4rABJsB1sNQUTbPM
          claim_id: c_iLgy9o3qbNoqkpDFhWsAaZ
          source_id: s_eTXsa16gMJMmwBbqFcFgbz
          stance: supports
          locator: CBDB:551402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551402）
          source: &a1
            id: s_eTXsa16gMJMmwBbqFcFgbz
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 551402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551402&o=json
            external_identifier: CBDB:551402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.593Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sPcybM3ahTzU69996czMW6
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1137年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NuCBG6cLsL1Ms9R4ZR782g
          claim_id: c_sPcybM3ahTzU69996czMW6
          source_id: s_eTXsa16gMJMmwBbqFcFgbz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_n2xCARpo78774vUWJ5uhHk
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1194年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bMw712zgbJQHviRovmAF5
          claim_id: c_n2xCARpo78774vUWJ5uhHk
          source_id: s_eTXsa16gMJMmwBbqFcFgbz
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
        id: c_E3UL6RsTct42M1V65L8XHA
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
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
        - id: cs_2XL7Rfy1AxzYtyQTYtNLsy
          claim_id: c_E3UL6RsTct42M1V65L8XHA
          source_id: s_eTXsa16gMJMmwBbqFcFgbz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R3HQn0mstaOj4dDq0PLdPq
        subject_person_id: p_iHyn3vCZrGTDZpwukvNV36
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRrMkip8skYkVp2JUBbQuZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mdWA0rQIV-438wQJTPopN2
          claim_id: c_R3HQn0mstaOj4dDq0PLdPq
          source_id: s_8MdsVAALa15PNFupPpvJxx
          stance: supports
          locator: 麗水宋元墓誌集録，49：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8MdsVAALa15PNFupPpvJxx
            source_type: api_record
            title: 中国历代人物传记资料库：王驎（CBDB 385978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385978&o=json
            external_identifier: CBDB:385978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dRrMkip8skYkVp2JUBbQuZ
        status: active
        display_name: 王驎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| birth.date | 1137年 | accepted |
| death.date | 1194年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dRrMkip8skYkVp2JUBbQuZ | 王驎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王驎（CBDB 385978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385978&o=json)
- [中国历代人物传记资料库：王信（CBDB 551402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551402&o=json)
