---
schema: wang-person/v1
id: p_Xn7YfLPB8jFLqE7voVoB2a
status: active
merged_into: null
display_name: 蒋氏
revision: 1
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
          text: 蒋氏，蔣清女。维基数据以独立条目 Q65803570 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
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
  ancestors: []
  descendants: []
  other: []
---

# 蒋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 蒋氏，蔣清女。维基数据以独立条目 Q65803570 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| name.primary | 蒋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_xtyYrh2ceBwZ769mV4SDUW | 王汶 | accepted |

## 外部来源

- [维基数据：蒋氏（Q65803570）](https://www.wikidata.org/wiki/Q65803570)
- [维基数据：王汶（Q45618566）](https://www.wikidata.org/wiki/Q45618566)
- [CBDB 中国历代人物传记资料库：蔣氏（143330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143330&o=json)
- [CBDB 中国历代人物传记资料库：王汶（143322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143322&o=json)
