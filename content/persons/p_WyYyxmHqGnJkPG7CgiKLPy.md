---
schema: wang-person/v1
id: p_WyYyxmHqGnJkPG7CgiKLPy
status: active
merged_into: null
display_name: 王學
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xAv9awx5FC7zsAKweHa9BK
        subject_person_id: p_WyYyxmHqGnJkPG7CgiKLPy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9Td3XoHMKfPN3nx6Fkc1m
          claim_id: c_xAv9awx5FC7zsAKweHa9BK
          source_id: s_LEJ4HqJs133dhMWYhkjx5q
          stance: supports
          locator: CBDB:257021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257021）
          source: &a1
            id: s_LEJ4HqJs133dhMWYhkjx5q
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 257021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257021&o=json
            external_identifier: CBDB:257021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JLyF6Suu8LAxRChqJmqY7F
        subject_person_id: p_WyYyxmHqGnJkPG7CgiKLPy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257021）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kWJWCMRVSFFLLSXTV56ZnW
          claim_id: c_JLyF6Suu8LAxRChqJmqY7F
          source_id: s_LEJ4HqJs133dhMWYhkjx5q
          stance: supports
          locator: CBDB:257021
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7jCQWitgLnQMkvflsicFpn
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WyYyxmHqGnJkPG7CgiKLPy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNb7vpWAKwAOnEo5Ko8cie
          claim_id: c_7jCQWitgLnQMkvflsicFpn
          source_id: s_0e1o0s1dxlMiqDHhpPECEm
          stance: supports
          locator: CBDB：兄弟 王章（200383）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王學 与 王章 为同胞（CBDB 记「弟」），王章 之父／母即 王學 之父／母。
          source:
            id: s_0e1o0s1dxlMiqDHhpPECEm
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 257021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257021&o=json
            external_identifier: CBDB:257021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wJ23FYKPfQzC4jh84wbU1t
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RmzOeSZ6xquzw6_PGooPpH
        subject_person_id: p_WyYyxmHqGnJkPG7CgiKLPy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sYgY3kxkb50Igldrcfz6tM
          claim_id: c_RmzOeSZ6xquzw6_PGooPpH
          source_id: s_0e1o0s1dxlMiqDHhpPECEm
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200383 王章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0e1o0s1dxlMiqDHhpPECEm
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 257021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257021&o=json
            external_identifier: CBDB:257021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZrffszDUs4AxXq4vwPGj2R
        status: active
        display_name: 王章
        merged_into_person_id: null
---

# 王學

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學 | accepted |
| bio.summary | 王學，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257021） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJ23FYKPfQzC4jh84wbU1t | 王寅 | accepted |
| other | p_ZrffszDUs4AxXq4vwPGj2R | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學（CBDB 257021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257021&o=json)
