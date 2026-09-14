---
schema: wang-person/v1
id: p_ZrffszDUs4AxXq4vwPGj2R
status: active
merged_into: null
display_name: 王章
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vRRBRbfuxGWG61untadzNL
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tEmeMyRC7BExbw8mzphmaa
          claim_id: c_vRRBRbfuxGWG61untadzNL
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
          stance: supports
          locator: CBDB:200383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200383）
          source: &a1
            id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 200383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200383&o=json
            external_identifier: CBDB:200383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3CcK4MiUm3BHcVei4pDK29
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1444年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UT5vB7J4XQmfT4G5MAu3fs
          claim_id: c_3CcK4MiUm3BHcVei4pDK29
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1FFme86h3ccroRmtFMc799
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章（生于1444年），明人物。明清進士進士，籍贯膚施，入仕進士。（中国历代人物传记资料库 CBDB 200383）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_70UEfvuaKx2jnwZ1DRh8l8
          claim_id: c_1FFme86h3ccroRmtFMc799
          source_id: s_BaDnx5q5DzD5Hp6Q1Cwqi2
          stance: supports
          locator: CBDB:200383
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zcGmdKVAfMMcFQZ1dD0hqs
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHms0bjGcmzVHaSuxFzT-R
          claim_id: c_zcGmdKVAfMMcFQZ1dD0hqs
          source_id: s_Q8LkncHjQUkrtizLf1siNA
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q8LkncHjQUkrtizLf1siNA
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 257015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257015&o=json
            external_identifier: CBDB:257015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wJ23FYKPfQzC4jh84wbU1t
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-Ezq4SHPWmwQnT4AC3yRAI
        subject_person_id: p_HK57Ndq1DsG6u8A7z6ejwo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8vMaMy9YPQjRwL0Wqj1NJ
          claim_id: c_-Ezq4SHPWmwQnT4AC3yRAI
          source_id: s_6cd8t9QNNWwUgC3BRygx1f
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6cd8t9QNNWwUgC3BRygx1f
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 257013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257013&o=json
            external_identifier: CBDB:257013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.393Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HK57Ndq1DsG6u8A7z6ejwo
        status: active
        display_name: 王林
        merged_into_person_id: null
    - claim:
        id: c_Bo2bedcoQprwCBlQnTByGN
        subject_person_id: p_nCECrUX7jvvNx9G7u1vL3j
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LHZQBvrr62iOWm-ohUDMr
          claim_id: c_Bo2bedcoQprwCBlQnTByGN
          source_id: s_a4SNHRjX13db61hKZBm4mf
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a4SNHRjX13db61hKZBm4mf
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 257012）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257012&o=json
            external_identifier: CBDB:257012
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nCECrUX7jvvNx9G7u1vL3j
        status: active
        display_name: 王成
        merged_into_person_id: null
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
        id: p_WyYyxmHqGnJkPG7CgiKLPy
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_uniSkUEe5J1w5v-Skmg-uN
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q4wGEAEmDHH5ySAcQLX6fB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1II_1y4Rfz-aJbeiFGys6K
          claim_id: c_uniSkUEe5J1w5v-Skmg-uN
          source_id: s_hm3emtYqbpXyVWCVawysvT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200383 王章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hm3emtYqbpXyVWCVawysvT
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 257019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json
            external_identifier: CBDB:257019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q4wGEAEmDHH5ySAcQLX6fB
        status: active
        display_name: 王福
        merged_into_person_id: null
    - claim:
        id: c_WI4y06rp1ig_81QqlWvgoj
        subject_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u6F67pdQF3wF5pJedoTGko
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80WPEXw4ta7Hlsww8SF7ki
          claim_id: c_WI4y06rp1ig_81QqlWvgoj
          source_id: s_KN1qCeXI9D8BpfdIthNnuO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200383 王章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KN1qCeXI9D8BpfdIthNnuO
            source_type: api_record
            title: 中国历代人物传记资料库：王祿（CBDB 257020）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257020&o=json
            external_identifier: CBDB:257020
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u6F67pdQF3wF5pJedoTGko
        status: active
        display_name: 王祿
        merged_into_person_id: null
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| birth.date | 1444年 | accepted |
| bio.summary | 王章（生于1444年），明人物。明清進士進士，籍贯膚施，入仕進士。（中国历代人物传记资料库 CBDB 200383） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wJ23FYKPfQzC4jh84wbU1t | 王寅 | accepted |
| ancestors | p_HK57Ndq1DsG6u8A7z6ejwo | 王林 | accepted |
| ancestors | p_nCECrUX7jvvNx9G7u1vL3j | 王成 | accepted |
| other | p_WyYyxmHqGnJkPG7CgiKLPy | 王學 | accepted |
| other | p_q4wGEAEmDHH5ySAcQLX6fB | 王福 | accepted |
| other | p_u6F67pdQF3wF5pJedoTGko | 王祿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 257012）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257012&o=json)
- [中国历代人物传记资料库：王福（CBDB 257019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257019&o=json)
- [中国历代人物传记资料库：王林（CBDB 257013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257013&o=json)
- [中国历代人物传记资料库：王祿（CBDB 257020）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257020&o=json)
- [中国历代人物传记资料库：王學（CBDB 257021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257021&o=json)
- [中国历代人物传记资料库：王寅（CBDB 257015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257015&o=json)
- [中国历代人物传记资料库：王章（CBDB 200383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200383&o=json)
