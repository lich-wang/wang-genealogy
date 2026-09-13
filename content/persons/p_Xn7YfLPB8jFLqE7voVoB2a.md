---
schema: wang-person/v1
id: p_Xn7YfLPB8jFLqE7voVoB2a
status: active
merged_into: null
display_name: 蒋氏
cbdb_id: 143330
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Iefyk3Y-EaJHlA1HZO4-o2
        subject_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋氏，蔣清女。维基数据以独立条目 Q65803570 收录该人物。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_3vhD6ealhhrlPhsdGIs8f9
          claim_id: c_Iefyk3Y-EaJHlA1HZO4-o2
          source_id: s_VdFHpxxson9r6LahqEp1he
          stance: supports
          locator: Q65803570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_VdFHpxxson9r6LahqEp1he
            source_type: api_record
            title: 维基数据：蒋氏（Q65803570）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803570
            external_identifier: Q65803570
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.186Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DPFP1soK8166GcL98aK29A
        subject_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蒋氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BkB1oz3VaEXWKQGboE1oCe
          claim_id: c_DPFP1soK8166GcL98aK29A
          source_id: s_VdFHpxxson9r6LahqEp1he
          stance: supports
          locator: Q65803570
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iY1j9GJighwD6x5espowQG
          claim_id: c_DPFP1soK8166GcL98aK29A
          source_id: s_a7eF5CS2vihugP7214Hu3M
          stance: supports
          locator: Q65803570
          quotation: null
          interpretation_note: null
          source:
            id: s_a7eF5CS2vihugP7214Hu3M
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：蔣氏（143330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143330&o=json
            external_identifier: CBDB:143330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:50.370Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gEEm4KLPqL6wmSP8gG4NDs
        subject_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_xtyYrh2ceBwZ769mV4SDUW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_MgzqkZjSNVwFAth3TCa8Nj
          claim_id: c_gEEm4KLPqL6wmSP8gG4NDs
          source_id: s_D8w8e3qEd4BTNNFf9B4T12
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_D8w8e3qEd4BTNNFf9B4T12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（143322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143322&o=json
            external_identifier: CBDB:143322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:08.435Z
            metadata_json: null
        - id: cs_s6fvMfwG3JwKCEMDjxEEoe
          claim_id: c_gEEm4KLPqL6wmSP8gG4NDs
          source_id: s_DzWRPC21kxWk6iAhx2e8jM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_DzWRPC21kxWk6iAhx2e8jM
            source_type: api_record
            title: 维基数据：王汶（Q45618566）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45618566
            external_identifier: Q45618566
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:11:08.290Z
            metadata_json: null
        - id: cs_JRaoGiKR8cE6vAgMSJwvye
          claim_id: c_gEEm4KLPqL6wmSP8gG4NDs
          source_id: s_VdFHpxxson9r6LahqEp1he
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VdFHpxxson9r6LahqEp1he
            source_type: api_record
            title: 维基数据：蒋氏（Q65803570）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803570
            external_identifier: Q65803570
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:50.186Z
            metadata_json: null
      object_person:
        id: p_xtyYrh2ceBwZ769mV4SDUW
        status: active
        display_name: 王汶
        merged_into_person_id: null
    - claim:
        id: c_A_lNx2GLPPtQ-dX8SsZd8l
        subject_person_id: p_xtyYrh2ceBwZ769mV4SDUW
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Eng9rEAQvdMl0eA_0DwRNg
          claim_id: c_A_lNx2GLPPtQ-dX8SsZd8l
          source_id: s_D8w8e3qEd4BTNNFf9B4T12
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D8w8e3qEd4BTNNFf9B4T12
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汶（143322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143322&o=json
            external_identifier: CBDB:143322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:11:08.435Z
            metadata_json: null
      object_person:
        id: p_xtyYrh2ceBwZ769mV4SDUW
        status: active
        display_name: 王汶
        merged_into_person_id: null
    - claim:
        id: c_rGJhWNzSk11JzOYzmBHLT7
        subject_person_id: p_Xn7YfLPB8jFLqE7voVoB2a
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gC4w2KowFZ8UQ62gKNerwX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SASRPV1r8iKlIrVfvR62VT
          claim_id: c_rGJhWNzSk11JzOYzmBHLT7
          source_id: s_YJ5sinRIaoH1WKi2vZtlTQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dahe1：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YJ5sinRIaoH1WKi2vZtlTQ
            source_type: api_record
            title: 中国历代人物传记资料库：王某（CBDB 166476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166476&o=json
            external_identifier: CBDB:166476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gC4w2KowFZ8UQ62gKNerwX
        status: active
        display_name: 王某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蒋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蒋氏，蔣清女。维基数据以独立条目 Q65803570 收录该人物。 | accepted |
| name.primary | 蒋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xtyYrh2ceBwZ769mV4SDUW | 王汶 | accepted |
| spouses | p_xtyYrh2ceBwZ769mV4SDUW | 王汶 | accepted |
| spouses | p_gC4w2KowFZ8UQ62gKNerwX | 王某 | accepted |

## 外部来源

- [维基数据：蒋氏（Q65803570）](https://www.wikidata.org/wiki/Q65803570)
- [维基数据：王汶（Q45618566）](https://www.wikidata.org/wiki/Q45618566)
- [中国历代人物传记资料库：王某（CBDB 166476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=166476&o=json)
- [CBDB 中国历代人物传记资料库：蔣氏（143330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143330&o=json)
- [CBDB 中国历代人物传记资料库：王汶（143322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143322&o=json)
