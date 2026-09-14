---
schema: wang-person/v1
id: p_fhHf3Ju1yjz535vtqX8da8
status: active
merged_into: null
display_name: 王金
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E69pkbK4C6czNLjX2MPDv3
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9viPaGFbPiPY6YJAE6emw1
          claim_id: c_E69pkbK4C6czNLjX2MPDv3
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: CBDB:212066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212066）
          source: &a1
            id: s_EPq6BjuK4FMZTush73Qkx5
            source_type: api_record
            title: 中国历代人物传记资料库：王金（CBDB 212066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json
            external_identifier: CBDB:212066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_27BLR589rr2cwsmJF4nEJR
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金，明人物。隆慶五年進士，籍贯忻州，曾任州同知。（中国历代人物传记资料库 CBDB 212066）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AP4RbJvF8LZAzMMDuB-eo9
          claim_id: c_27BLR589rr2cwsmJF4nEJR
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: CBDB:212066
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_vbiQJ98belEgVDeAkXsKnQ
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txmGNUSLN748iJB41SWQzU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MaSGIvIr0MKYy9sdSZumYn
          claim_id: c_vbiQJ98belEgVDeAkXsKnQ
          source_id: s_EPq6BjuK4FMZTush73Qkx5
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_txmGNUSLN748iJB41SWQzU
        status: active
        display_name: 王致祥
        merged_into_person_id: null
    - claim:
        id: c_4T9-44oYUNiSDL6MP6p7xB
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EQ4tHaUCsGa3AaHh8rhFAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6heYK_kLLmZdTtnj9zB7wn
          claim_id: c_4T9-44oYUNiSDL6MP6p7xB
          source_id: s_Zrc-xO2GwficyI-t4Nfb-K
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王致中 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王致中 之父／母。
          source:
            id: s_Zrc-xO2GwficyI-t4Nfb-K
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 212069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212069&o=json
            external_identifier: CBDB:212069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EQ4tHaUCsGa3AaHh8rhFAz
        status: active
        display_name: 王致中
        merged_into_person_id: null
    - claim:
        id: c_Dci8iyH_uS0UvstrdPNiG7
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YyZ8kzZipn24meCF2Ez4Sz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I7EmDBXaCiNWQ6dKSXz_3s
          claim_id: c_Dci8iyH_uS0UvstrdPNiG7
          source_id: s_ZeY9oGUDS1dzUXNBGNQMcM
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王致和 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王致和 之父／母。
          source:
            id: s_ZeY9oGUDS1dzUXNBGNQMcM
            source_type: api_record
            title: 中国历代人物传记资料库：王致和（CBDB 212072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json
            external_identifier: CBDB:212072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YyZ8kzZipn24meCF2Ez4Sz
        status: active
        display_name: 王致和
        merged_into_person_id: null
    - claim:
        id: c_IIkygnR5hdpOcTgrcYMSVr
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPZF67eMJT61N8b7yt6vV7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GJYR5m-jmD_oZ2SGqrqoJN
          claim_id: c_IIkygnR5hdpOcTgrcYMSVr
          source_id: s_xTtd0IacbLUMlY5KB9hrzP
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王致道 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王致道 之父／母。
          source:
            id: s_xTtd0IacbLUMlY5KB9hrzP
            source_type: api_record
            title: 中国历代人物传记资料库：王致道（CBDB 212073）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212073&o=json
            external_identifier: CBDB:212073
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kPZF67eMJT61N8b7yt6vV7
        status: active
        display_name: 王致道
        merged_into_person_id: null
    - claim:
        id: c_rDWyRp2n49uosXWfsfnETz
        subject_person_id: p_fhHf3Ju1yjz535vtqX8da8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oahH9X97SvRFkB1UsSLFgx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wWFkDP_NMz6cTybE2qQ6w5
          claim_id: c_rDWyRp2n49uosXWfsfnETz
          source_id: s_Ox4Us6h1M9X53wPXBYrDM6
          stance: supports
          locator: CBDB：兄弟 王致祥（126646）之父／母 王金
          quotation: null
          interpretation_note: 由兄弟关系推断：王國勳 与 王致祥 为同胞（CBDB 记「弟」），王致祥 之父／母即 王國勳 之父／母。
          source:
            id: s_Ox4Us6h1M9X53wPXBYrDM6
            source_type: api_record
            title: 中国历代人物传记资料库：王國勳（CBDB 212071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json
            external_identifier: CBDB:212071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oahH9X97SvRFkB1UsSLFgx
        status: active
        display_name: 王國勳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王金

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金 | accepted |
| bio.summary | 王金，明人物。隆慶五年進士，籍贯忻州，曾任州同知。（中国历代人物传记资料库 CBDB 212066） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_txmGNUSLN748iJB41SWQzU | 王致祥 | accepted |
| children | p_EQ4tHaUCsGa3AaHh8rhFAz | 王致中 | accepted |
| children | p_YyZ8kzZipn24meCF2Ez4Sz | 王致和 | accepted |
| children | p_kPZF67eMJT61N8b7yt6vV7 | 王致道 | accepted |
| children | p_oahH9X97SvRFkB1UsSLFgx | 王國勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國勳（CBDB 212071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212071&o=json)
- [中国历代人物传记资料库：王金（CBDB 212066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212066&o=json)
- [中国历代人物传记资料库：王致道（CBDB 212073）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212073&o=json)
- [中国历代人物传记资料库：王致和（CBDB 212072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212072&o=json)
- [中国历代人物传记资料库：王致中（CBDB 212069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212069&o=json)
