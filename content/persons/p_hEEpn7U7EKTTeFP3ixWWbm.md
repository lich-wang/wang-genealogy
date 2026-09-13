---
schema: wang-person/v1
id: p_hEEpn7U7EKTTeFP3ixWWbm
status: active
merged_into: null
display_name: 王禔
cbdb_id: 20093
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5Lqus1Jg7KpKg4Lpi6RT1C
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑，曾任府、太子太師。（中国历代人物传记资料库 CBDB 20093）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_JoDu7zPNa5LPPTNyn1GUQM
          claim_id: c_5Lqus1Jg7KpKg4Lpi6RT1C
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs__OyvrmctQ0I7dMT1jBWvEj
          claim_id: c_5Lqus1Jg7KpKg4Lpi6RT1C
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: CBDB:20093
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gfqA28v8u8pwjz4LJh8Cct
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王禔（20093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json
            external_identifier: CBDB:20093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.405Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5nwUP5EaEULjvBwT4KXxDR
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_B18GJhJCVPCVG8E59dMfFS
          claim_id: c_5nwUP5EaEULjvBwT4KXxDR
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: Q45386120
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_K6AG2xrhTJ88oo4okxyAu9
          claim_id: c_5nwUP5EaEULjvBwT4KXxDR
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: Q45386120
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UAKxhQmLr8Bd41Ck5MF4RZ
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fey3rXL6B8ZQaMB3QxpD82
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_d348LsME5xo6XJXHzHSsdP
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_LtyHD8ys85b8V9AKuanML7
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_LYQVz212NDq8PUvaBty1BP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（17425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json
            external_identifier: CBDB:17425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person:
        id: p_4Hjde84UDSxNby7XrvDD1E
        status: active
        display_name: 王寂
        merged_into_person_id: null
  children:
    - claim:
        id: c_SJv1fzwhFi4btwQLT2si6Z
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4Ggi24K5h2C2ehfArZY8Pm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_76sBHovzxbanNQGY2Puyo6
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
          source_id: s_N8J87U9e5LKKFKtnTF4GL7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_N8J87U9e5LKKFKtnTF4GL7
            source_type: api_record
            title: 维基数据：王次翁（Q10415243）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415243
            external_identifier: Q10415243
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:46.417Z
            metadata_json: null
        - id: cs_MsbS9BqoJnRpdNfQ9hgLah
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_xgVSGF7UMb9e6Yo1HQJPxc
          claim_id: c_SJv1fzwhFi4btwQLT2si6Z
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_gfqA28v8u8pwjz4LJh8Cct
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王禔（20093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json
            external_identifier: CBDB:20093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.405Z
            metadata_json: null
      object_person:
        id: p_4Ggi24K5h2C2ehfArZY8Pm
        status: active
        display_name: 王次翁
        merged_into_person_id: null
    - claim:
        id: c_Th5NzWuGxc9M4qVA5VRNqE
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LLsxFDHQDQXtfR5CnXXEVt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gvhspAJPPpe5GL3Z7w85H1
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_zEC6v5jrHHJCkKDoPZJDN3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zEC6v5jrHHJCkKDoPZJDN3
            source_type: api_record
            title: 维基数据：王璞（Q45394270）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45394270
            external_identifier: Q45394270
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_mNbQeLSGFdoaunPdhVnT9y
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_SjmohoigYEzT9GUoTwbNgS
          claim_id: c_Th5NzWuGxc9M4qVA5VRNqE
          source_id: s_gfqA28v8u8pwjz4LJh8Cct
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_gfqA28v8u8pwjz4LJh8Cct
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王禔（20093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json
            external_identifier: CBDB:20093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:59.405Z
            metadata_json: null
      object_person:
        id: p_LLsxFDHQDQXtfR5CnXXEVt
        status: active
        display_name: 王璞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_HAnDmrVZUNwksXpr5YRjpK
        subject_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WYN9msC554wb8dtjBJ3Ga4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X5J6JZ9DjQN33jXBCdDqQD
          claim_id: c_HAnDmrVZUNwksXpr5YRjpK
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_LgUpTvG16cTdoSigEFKEbC
          claim_id: c_HAnDmrVZUNwksXpr5YRjpK
          source_id: s_CPovKVGqVGK8Z54VxMmbzC
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CPovKVGqVGK8Z54VxMmbzC
            source_type: api_record
            title: 维基数据：张氏（Q45431160）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431160
            external_identifier: Q45431160
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:17.362Z
            metadata_json: null
      object_person:
        id: p_WYN9msC554wb8dtjBJ3Ga4
        status: active
        display_name: 张氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_h5wQfhGPVVLshqKkYdcyJk
        subject_person_id: p_ZZ9tZgx4rUmKgDXtAEqRwH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJlnOvMQ041D6t8jmBB0kl
          claim_id: c_h5wQfhGPVVLshqKkYdcyJk
          source_id: s_DKwEihoKaeDdokgXg515QL
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王禔 ⇄ 高祖;四世祖 王祖道）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_DKwEihoKaeDdokgXg515QL
            source_type: api_record
            title: 中国历代人物传记资料库：王祖道（CBDB 1902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json
            external_identifier: CBDB:1902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZZ9tZgx4rUmKgDXtAEqRwH
        status: active
        display_name: 王祖道
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王禔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禔，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑，曾任府、太子太師。（中国历代人物传记资料库 CBDB 20093） | accepted |
| name.primary | 王禔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4Hjde84UDSxNby7XrvDD1E | 王寂 | accepted |
| children | p_4Ggi24K5h2C2ehfArZY8Pm | 王次翁 | accepted |
| children | p_LLsxFDHQDQXtfR5CnXXEVt | 王璞 | accepted |
| spouses | p_WYN9msC554wb8dtjBJ3Ga4 | 张氏 | accepted |
| ancestors | p_ZZ9tZgx4rUmKgDXtAEqRwH | 王祖道 | accepted |

## 外部来源

- [维基数据：王次翁（Q10415243）](https://www.wikidata.org/wiki/Q10415243)
- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [维基数据：王璞（Q45394270）](https://www.wikidata.org/wiki/Q45394270)
- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [维基数据：张氏（Q45431160）](https://www.wikidata.org/wiki/Q45431160)
- [中国历代人物传记资料库：王祖道（CBDB 1902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1902&o=json)
- [CBDB 中国历代人物传记资料库：王寂（17425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json)
- [CBDB 中国历代人物传记资料库：王禔（20093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20093&o=json)
