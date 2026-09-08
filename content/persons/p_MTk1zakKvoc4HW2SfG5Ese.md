---
schema: wang-person/v1
id: p_MTk1zakKvoc4HW2SfG5Ese
status: active
merged_into: null
display_name: 王渎
cbdb_id: 3986
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a5yKEkPsx7c2aeXyj9NLnP
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王渎，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任門下省給事中、上輕車都尉。中国历代人物传记资料库（CBDB）以人物编号 3986 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_47EadKC5g93v3onjNQm3se
          claim_id: c_a5yKEkPsx7c2aeXyj9NLnP
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
        - id: cs_awZMdv8ZJ1v4Lf1JRRJGY0
          claim_id: c_a5yKEkPsx7c2aeXyj9NLnP
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: CBDB:3986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nTUESHyNaXX4A6ufpnau6R
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王瀆（3986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json
            external_identifier: CBDB:3986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:12.219Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_B9UXn3Cd3oRUVrsZ5EybRb
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渎
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_e3VBBvATs2inVLRpcEuKZE
          claim_id: c_B9UXn3Cd3oRUVrsZ5EybRb
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: Q45363040
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_weh65RDpVGH4JyUQckMSso
          claim_id: c_B9UXn3Cd3oRUVrsZ5EybRb
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: Q45363040
          quotation: null
          interpretation_note: null
          source:
            id: s_9haVnYnB1Mu8a5ABupm314
            source_type: api_record
            title: 维基数据：王渎（Q45363040）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45363040
            external_identifier: Q45363040
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:12.061Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZPBKkPRWMgoVQP9PxnPtEH
        subject_person_id: p_VKst8B2d5tWwdYZpMbjXpF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c7D16URyEt7saqjFKJHFB3
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_cEzQFMJKfXkebXkBavgjxf
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_cEzQFMJKfXkebXkBavgjxf
            source_type: api_record
            title: 维基数据：王砺（Q45381094）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381094
            external_identifier: Q45381094
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:00.249Z
            metadata_json: null
        - id: cs_HNBPBYhv3P18URJMLq5faK
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_3EaTSW6C8xN89JmsQ1JSdh
          claim_id: c_ZPBKkPRWMgoVQP9PxnPtEH
          source_id: s_k4sFmeLJCYGtEaPGKsQ95C
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_k4sFmeLJCYGtEaPGKsQ95C
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王礪（15706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json
            external_identifier: CBDB:15706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:00.404Z
            metadata_json: null
      object_person:
        id: p_VKst8B2d5tWwdYZpMbjXpF
        status: active
        display_name: 王砺
        merged_into_person_id: null
  children:
    - claim:
        id: c_7unEKVLPgThzWTD3D7y35e
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83ygFMkQK9fNnM8zpQKj1X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GYMXeG8cUwMwb8wY7RvdyT
          claim_id: c_7unEKVLPgThzWTD3D7y35e
          source_id: s_njNEBvsCe2PAkDN28X5dhP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_njNEBvsCe2PAkDN28X5dhP
            source_type: api_record
            title: 维基数据：王尧臣（Q16903964）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16903964
            external_identifier: Q16903964
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A0%AF%E8%87%A3
        - id: cs_fz2U3ENq2mzT27VNpy3N5x
          claim_id: c_7unEKVLPgThzWTD3D7y35e
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_E5M5z171q8W5a1T2chPj8x
          claim_id: c_7unEKVLPgThzWTD3D7y35e
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_83ygFMkQK9fNnM8zpQKj1X
        status: active
        display_name: 王尧臣
        merged_into_person_id: null
    - claim:
        id: c_NRRECRDWubbwhsFE49VWxr
        subject_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3NdGXHCq85xpzk8u1hLvNN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d6PcT7a1kSbJVBAviKAYKz
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_f27qmRqHoncLwuQt6A8YAk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_f27qmRqHoncLwuQt6A8YAk
            source_type: api_record
            title: 维基数据：王纯臣（Q45381154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45381154
            external_identifier: Q45381154
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_5UrWFMbP42s2KCrMXALu6K
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_rVMmKeNwNyXf73hGG4FT4W
          claim_id: c_NRRECRDWubbwhsFE49VWxr
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_3NdGXHCq85xpzk8u1hLvNN
        status: active
        display_name: 王纯臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_LHKoVowQXuBGASp4H9oyWD
        subject_person_id: p_hV4FccBsTXSAEpS7L3B7RC
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_MTk1zakKvoc4HW2SfG5Ese
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pVnY9fBgD7JfGcEZ29zkme
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_6ezW96pfXcpCbsKRDGy11Z
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_6ezW96pfXcpCbsKRDGy11Z
            source_type: api_record
            title: 维基数据：仇氏（Q65798709）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65798709
            external_identifier: Q65798709
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_hJ86BRGxHNJFU7NbFEKsTn
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_9haVnYnB1Mu8a5ABupm314
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_gkoYG1kTm1LVQDfDjL9ZFV
          claim_id: c_LHKoVowQXuBGASp4H9oyWD
          source_id: s_nTUESHyNaXX4A6ufpnau6R
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_hV4FccBsTXSAEpS7L3B7RC
        status: active
        display_name: 仇氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王渎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王渎，宋人物。CBDB 记录其籍贯记录为虞城，入仕记录为科舉: 進士(籠統)，曾任門下省給事中、上輕車都尉。中国历代人物传记资料库（CBDB）以人物编号 3986 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王渎 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VKst8B2d5tWwdYZpMbjXpF | 王砺 | accepted |
| children | p_83ygFMkQK9fNnM8zpQKj1X | 王尧臣 | accepted |
| children | p_3NdGXHCq85xpzk8u1hLvNN | 王纯臣 | accepted |
| spouses | p_hV4FccBsTXSAEpS7L3B7RC | 仇氏 | accepted |

## 外部来源

- [维基数据：仇氏（Q65798709）](https://www.wikidata.org/wiki/Q65798709)
- [维基数据：王纯臣（Q45381154）](https://www.wikidata.org/wiki/Q45381154)
- [维基数据：王渎（Q45363040）](https://www.wikidata.org/wiki/Q45363040)
- [维基数据：王砺（Q45381094）](https://www.wikidata.org/wiki/Q45381094)
- [维基数据：王尧臣（Q16903964）](https://www.wikidata.org/wiki/Q16903964)
- [CBDB 中国历代人物传记资料库：王瀆（3986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3986&o=json)
- [CBDB 中国历代人物传记资料库：王礪（15706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=15706&o=json)
