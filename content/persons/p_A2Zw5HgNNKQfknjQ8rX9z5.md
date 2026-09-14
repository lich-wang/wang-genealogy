---
schema: wang-person/v1
id: p_A2Zw5HgNNKQfknjQ8rX9z5
status: active
merged_into: null
display_name: 王廷槐
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KGrNSpo5oRD758SnJkzVWC
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9sT6aqKQ13y8C2oXnBQ6Ty
          claim_id: c_KGrNSpo5oRD758SnJkzVWC
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: CBDB:327381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327381）
          source: &a1
            id: s_o4BwLyitFjcAFS4veow24B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷槐（CBDB 327381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json
            external_identifier: CBDB:327381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rNNAndP2YbAb4qyc1cdm7N
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷槐，明人物。嘉靖四十一年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 327381）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q4mFk8C0_XIuzm86DFZkxj
          claim_id: c_rNNAndP2YbAb4qyc1cdm7N
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: CBDB:327381
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_96VurjaNiZ5t0ttTLDfwRd
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WmXfH_TnTTPLLNW30SpiJp
          claim_id: c_96VurjaNiZ5t0ttTLDfwRd
          source_id: s_o4BwLyitFjcAFS4veow24B
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
    - claim:
        id: c_KE0QjD-hI4vUR7gHGVr-Tw
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVxDQvKxYRbiPjfjhUiJGX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gdGjZykjlnynNVTEBFOME
          claim_id: c_KE0QjD-hI4vUR7gHGVr-Tw
          source_id: s_WfzBX4cuaNmda2NU--16oe
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同辰 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同辰 之父／母。
          source:
            id: s_WfzBX4cuaNmda2NU--16oe
            source_type: api_record
            title: 中国历代人物传记资料库：王同辰（CBDB 327393）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327393&o=json
            external_identifier: CBDB:327393
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BVxDQvKxYRbiPjfjhUiJGX
        status: active
        display_name: 王同辰
        merged_into_person_id: null
    - claim:
        id: c_vptBRoG44VRT58k4XJ4pDe
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CB5sZsdA8nvcULyQC2dvjd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RK_4x-7FKj6fO6pEd0bOWj
          claim_id: c_vptBRoG44VRT58k4XJ4pDe
          source_id: s_Uml9Ye_cMv9FIDV5uOU8px
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同軌 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同軌 之父／母。
          source:
            id: s_Uml9Ye_cMv9FIDV5uOU8px
            source_type: api_record
            title: 中国历代人物传记资料库：王同軌（CBDB 126517）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126517&o=json
            external_identifier: CBDB:126517
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CB5sZsdA8nvcULyQC2dvjd
        status: active
        display_name: 王同軌
        merged_into_person_id: null
    - claim:
        id: c_yY3yiUwLX_c_kJALHN6IRj
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0v4nTnE527mWX89vFlvi-7
          claim_id: c_yY3yiUwLX_c_kJALHN6IRj
          source_id: s_VO0ZL7GQebE4ieYJC1FB7z
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同升 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同升 之父／母。
          source:
            id: s_VO0ZL7GQebE4ieYJC1FB7z
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D3zLoGJHryvUYtjxdHz9Wz
        status: active
        display_name: 王同升
        merged_into_person_id: null
    - claim:
        id: c_J5tUdtkw3zFGvwQDAo7G1x
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HWzN3GY8T2zZAcA6vq37sD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KsqWKtMLGS8Ze4ZlmCnqSU
          claim_id: c_J5tUdtkw3zFGvwQDAo7G1x
          source_id: s_-CH6we4vx85_FTDxRCoML9
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同源 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同源 之父／母。
          source:
            id: s_-CH6we4vx85_FTDxRCoML9
            source_type: api_record
            title: 中国历代人物传记资料库：王同源（CBDB 327388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327388&o=json
            external_identifier: CBDB:327388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HWzN3GY8T2zZAcA6vq37sD
        status: active
        display_name: 王同源
        merged_into_person_id: null
    - claim:
        id: c_LqfSpU8mz0p6IMbQqGQ8jO
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WdZJWag7NVLzgFyXvFmPou
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qU9VWzeHA5n7K-D_At0HwB
          claim_id: c_LqfSpU8mz0p6IMbQqGQ8jO
          source_id: s_I14IDWSCm3oL2WNPnc0I4C
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同心 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同心 之父／母。
          source:
            id: s_I14IDWSCm3oL2WNPnc0I4C
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 327387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json
            external_identifier: CBDB:327387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdZJWag7NVLzgFyXvFmPou
        status: active
        display_name: 王同心
        merged_into_person_id: null
    - claim:
        id: c_OuiwX7Pmi8IcbqcS6HcrLs
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_p6DeT9ribjKiKNGxKhBB1s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sjZ0WVs1FZ666-cSb8ewIR
          claim_id: c_OuiwX7Pmi8IcbqcS6HcrLs
          source_id: s_YRKo4m2Rfu7X5tpsqLLeGl
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同鶴 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同鶴 之父／母。
          source:
            id: s_YRKo4m2Rfu7X5tpsqLLeGl
            source_type: api_record
            title: 中国历代人物传记资料库：王同鶴（CBDB 327385）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327385&o=json
            external_identifier: CBDB:327385
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p6DeT9ribjKiKNGxKhBB1s
        status: active
        display_name: 王同鶴
        merged_into_person_id: null
    - claim:
        id: c_KPzYWN_L_4MclzlPz_BzfJ
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rE8vLks7ydaDRFCsY8t126
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k8TYpJJalam9-WcYJrKEYS
          claim_id: c_KPzYWN_L_4MclzlPz_BzfJ
          source_id: s_FlSK7qED9hNGZkvBmwcJo2
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同慶 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同慶 之父／母。
          source:
            id: s_FlSK7qED9hNGZkvBmwcJo2
            source_type: api_record
            title: 中国历代人物传记资料库：王同慶（CBDB 327394）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327394&o=json
            external_identifier: CBDB:327394
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rE8vLks7ydaDRFCsY8t126
        status: active
        display_name: 王同慶
        merged_into_person_id: null
    - claim:
        id: c_iFbNurueiS5MBs_i3p3MdB
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ri2gaLdtCgSiuLfw1gnKUy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RIhUDALYD7mt-9KomiXB-I
          claim_id: c_iFbNurueiS5MBs_i3p3MdB
          source_id: s_JtqU20obPD5Tz9RsF_MTTn
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同會 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同會 之父／母。
          source:
            id: s_JtqU20obPD5Tz9RsF_MTTn
            source_type: api_record
            title: 中国历代人物传记资料库：王同會（CBDB 327390）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json
            external_identifier: CBDB:327390
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ri2gaLdtCgSiuLfw1gnKUy
        status: active
        display_name: 王同會
        merged_into_person_id: null
    - claim:
        id: c_21zQJPLWvUsP4H-V3Tsw96
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tw582PUN9HRNyw2YDV8FVE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TeQeiZOPGE_yJ291nfCK-b
          claim_id: c_21zQJPLWvUsP4H-V3Tsw96
          source_id: s_GwxOo-55nIkxy4cciZaO82
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同倫 与 王同道 为同胞（CBDB 记「兄」），王同道 之父／母即 王同倫 之父／母。
          source:
            id: s_GwxOo-55nIkxy4cciZaO82
            source_type: api_record
            title: 中国历代人物传记资料库：王同倫（CBDB 327392）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json
            external_identifier: CBDB:327392
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tw582PUN9HRNyw2YDV8FVE
        status: active
        display_name: 王同倫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷槐 | accepted |
| bio.summary | 王廷槐，明人物。嘉靖四十一年進士，籍贯黃岡，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 327381） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |
| children | p_BVxDQvKxYRbiPjfjhUiJGX | 王同辰 | accepted |
| children | p_CB5sZsdA8nvcULyQC2dvjd | 王同軌 | accepted |
| children | p_D3zLoGJHryvUYtjxdHz9Wz | 王同升 | accepted |
| children | p_HWzN3GY8T2zZAcA6vq37sD | 王同源 | accepted |
| children | p_WdZJWag7NVLzgFyXvFmPou | 王同心 | accepted |
| children | p_p6DeT9ribjKiKNGxKhBB1s | 王同鶴 | accepted |
| children | p_rE8vLks7ydaDRFCsY8t126 | 王同慶 | accepted |
| children | p_ri2gaLdtCgSiuLfw1gnKUy | 王同會 | accepted |
| children | p_tw582PUN9HRNyw2YDV8FVE | 王同倫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷槐（CBDB 327381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327381&o=json)
- [中国历代人物传记资料库：王同辰（CBDB 327393）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327393&o=json)
- [中国历代人物传记资料库：王同軌（CBDB 126517）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126517&o=json)
- [中国历代人物传记资料库：王同鶴（CBDB 327385）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327385&o=json)
- [中国历代人物传记资料库：王同會（CBDB 327390）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327390&o=json)
- [中国历代人物传记资料库：王同倫（CBDB 327392）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327392&o=json)
- [中国历代人物传记资料库：王同慶（CBDB 327394）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327394&o=json)
- [中国历代人物传记资料库：王同升（CBDB 327389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json)
- [中国历代人物传记资料库：王同心（CBDB 327387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327387&o=json)
- [中国历代人物传记资料库：王同源（CBDB 327388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327388&o=json)
