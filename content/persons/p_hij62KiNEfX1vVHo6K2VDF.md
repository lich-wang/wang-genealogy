---
schema: wang-person/v1
id: p_hij62KiNEfX1vVHo6K2VDF
status: active
merged_into: null
display_name: 王克復
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CAhMXerNAMCKH1yC9wFaZZ
        subject_person_id: p_hij62KiNEfX1vVHo6K2VDF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WvNAKBMDnBiDPLNMyavNm6
          claim_id: c_CAhMXerNAMCKH1yC9wFaZZ
          source_id: s_3WGNofJaJbgSPkjrA6N7CT
          stance: supports
          locator: CBDB:300361
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300361）
          source: &a1
            id: s_3WGNofJaJbgSPkjrA6N7CT
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 300361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json
            external_identifier: CBDB:300361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nLCJ4f6BXQXLgmzrWrrjmo
        subject_person_id: p_hij62KiNEfX1vVHo6K2VDF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300361）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XqDVJKotu-fpFVXkFUrlGb
          claim_id: c_nLCJ4f6BXQXLgmzrWrrjmo
          source_id: s_3WGNofJaJbgSPkjrA6N7CT
          stance: supports
          locator: CBDB:300361
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DSOGjANUbSZrhEvCea8kM7
        subject_person_id: p_djPzJATqP8N3fAgZuiGdme
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hij62KiNEfX1vVHo6K2VDF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_In6HZKjjXd2_j10_zUlVZr
          claim_id: c_DSOGjANUbSZrhEvCea8kM7
          source_id: s_CDGUu0UF1J3LAWn42sAKJt
          stance: supports
          locator: CBDB：兄弟 王春復（203136）之父／母 王琥
          quotation: null
          interpretation_note: 由兄弟关系推断：王克復 与 王春復 为同胞（CBDB 记「弟」），王春復 之父／母即 王克復 之父／母。
          source:
            id: s_CDGUu0UF1J3LAWn42sAKJt
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 300361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json
            external_identifier: CBDB:300361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_djPzJATqP8N3fAgZuiGdme
        status: active
        display_name: 王琥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rdmO3ff6_uGFxiEUZ5rFpe
        subject_person_id: p_PBPvLNJEK4jPNCWDSKfDp5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hij62KiNEfX1vVHo6K2VDF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hqg0LI8XS9zRf_mzuDxGCH
          claim_id: c_rdmO3ff6_uGFxiEUZ5rFpe
          source_id: s_CDGUu0UF1J3LAWn42sAKJt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203136 王春復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CDGUu0UF1J3LAWn42sAKJt
            source_type: api_record
            title: 中国历代人物传记资料库：王克復（CBDB 300361）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json
            external_identifier: CBDB:300361
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PBPvLNJEK4jPNCWDSKfDp5
        status: active
        display_name: 王春復
        merged_into_person_id: null
---

# 王克復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克復 | accepted |
| bio.summary | 王克復，明人物。嘉靖十七年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 300361） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_djPzJATqP8N3fAgZuiGdme | 王琥 | accepted |
| other | p_PBPvLNJEK4jPNCWDSKfDp5 | 王春復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克復（CBDB 300361）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300361&o=json)
