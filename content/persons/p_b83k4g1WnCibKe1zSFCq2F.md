---
schema: wang-person/v1
id: p_b83k4g1WnCibKe1zSFCq2F
status: active
merged_into: null
display_name: 高氏
cbdb_id: 290192
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wDDfv_tXv9PjCnqF1AlZxs
        subject_person_id: p_b83k4g1WnCibKe1zSFCq2F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 290192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_IUWMpI_T3NFlOlEOzxg1LM
          claim_id: c_wDDfv_tXv9PjCnqF1AlZxs
          source_id: s_7CMPdP7RS21ee1D3SqqcGM
          stance: supports
          locator: CBDB:290192
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7CMPdP7RS21ee1D3SqqcGM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：高氏（290192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290192&o=json
            external_identifier: CBDB:290192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:53.717Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2VHqiKp8CQn29NkDMbpZL
        subject_person_id: p_b83k4g1WnCibKe1zSFCq2F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kgPJRzyNf6KEhJyEM1uXuq
          claim_id: c_R2VHqiKp8CQn29NkDMbpZL
          source_id: s_mMBMKh3S4GVLvRrkWDPeiD
          stance: supports
          locator: Q65814421
          quotation: null
          interpretation_note: null
          source:
            id: s_mMBMKh3S4GVLvRrkWDPeiD
            source_type: api_record
            title: 维基数据：高氏（Q65814421）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65814421
            external_identifier: Q65814421
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_sekgUhH7kY6dec5565UKm3
          claim_id: c_R2VHqiKp8CQn29NkDMbpZL
          source_id: s_7CMPdP7RS21ee1D3SqqcGM
          stance: supports
          locator: Q65814421
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DB6Z4bR4H4oDSDZd48dZoj
        subject_person_id: p_LYKX47nJ8c49oqYNGB3kRd
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b83k4g1WnCibKe1zSFCq2F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_62q2p6Z6MLQcA3mZkseLbo
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_mMBMKh3S4GVLvRrkWDPeiD
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_mMBMKh3S4GVLvRrkWDPeiD
            source_type: api_record
            title: 维基数据：高氏（Q65814421）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65814421
            external_identifier: Q65814421
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
        - id: cs_7mB9CbdkUVEfi8K4khNyNf
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_mSQjg4RmB78Azw6f47f7sr
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_mSQjg4RmB78Azw6f47f7sr
            source_type: api_record
            title: 维基数据：王与龄（Q15924928）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15924928
            external_identifier: Q15924928
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:28.997Z
            metadata_json: null
        - id: cs_N1yvrDXoD2SbhrcDPLhPr4
          claim_id: c_DB6Z4bR4H4oDSDZd48dZoj
          source_id: s_coJneE1s8JziNL2EvNC7jf
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖八年進士登科錄:一卷
          source:
            id: s_coJneE1s8JziNL2EvNC7jf
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王與齡（68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:37.527Z
            metadata_json: null
      object_person:
        id: p_LYKX47nJ8c49oqYNGB3kRd
        status: active
        display_name: 王与龄
        merged_into_person_id: null
    - claim:
        id: c_4z1vZkmLgpR8V1vdE3ruL6
        subject_person_id: p_nTV1T9RX74vHEA3tyMaebm
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_b83k4g1WnCibKe1zSFCq2F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_go1qh4bsiUtk096OGg4MF-
          claim_id: c_4z1vZkmLgpR8V1vdE3ruL6
          source_id: s_VNsrGWznq4wS5HwLa4u6ov
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VNsrGWznq4wS5HwLa4u6ov
            source_type: api_record
            title: 中国历代人物传记资料库：王與齡（CBDB 68464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json
            external_identifier: CBDB:68464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nTV1T9RX74vHEA3tyMaebm
        status: active
        display_name: 王與齡
        merged_into_person_id: null
    - claim:
        id: c_SbIiTwOlhjzCYWu0Mp1PGv
        subject_person_id: p_b83k4g1WnCibKe1zSFCq2F
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_nTV1T9RX74vHEA3tyMaebm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V3ffv-e09Aco0c21T05jCA
          claim_id: c_SbIiTwOlhjzCYWu0Mp1PGv
          source_id: s_7CMPdP7RS21ee1D3SqqcGM
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第一百七十七名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nTV1T9RX74vHEA3tyMaebm
        status: active
        display_name: 王與齡
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 高氏，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 290192） | accepted |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_LYKX47nJ8c49oqYNGB3kRd | 王与龄 | accepted |
| spouses | p_nTV1T9RX74vHEA3tyMaebm | 王與齡 | accepted |
| spouses | p_nTV1T9RX74vHEA3tyMaebm | 王與齡 | accepted |

## 外部来源

- [维基数据：高氏（Q65814421）](https://www.wikidata.org/wiki/Q65814421)
- [维基数据：王与龄（Q15924928）](https://www.wikidata.org/wiki/Q15924928)
- [中国历代人物传记资料库：王與齡（CBDB 68464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68464&o=json)
- [CBDB 中国历代人物传记资料库：高氏（290192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290192&o=json)
