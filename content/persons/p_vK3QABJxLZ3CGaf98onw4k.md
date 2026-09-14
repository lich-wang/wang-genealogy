---
schema: wang-person/v1
id: p_vK3QABJxLZ3CGaf98onw4k
status: active
merged_into: null
display_name: 王廷
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qs98uwHD2NQ3ZK681GNLR7
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Bcq7k3uobSvVwQpRd9Dd6T
          claim_id: c_Qs98uwHD2NQ3ZK681GNLR7
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: CBDB:326819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326819）
          source: &a1
            id: s_FLYjb1DFHNr84N9a3wBTWi
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 326819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json
            external_identifier: CBDB:326819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RXto3EnMMfx9DYUMQAp2GG
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷，明人物。嘉靖四十一年進士，籍贯南充，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 326819）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_38SCzRsOrXxkiYzXFJEMNp
          claim_id: c_RXto3EnMMfx9DYUMQAp2GG
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: CBDB:326819
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YbXpkaIhpg5T4PTu4vWizl
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LNAKBPYt9PQCz44835GtLD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZkUivbljmu_kADppLhA0K7
          claim_id: c_YbXpkaIhpg5T4PTu4vWizl
          source_id: s_FLYjb1DFHNr84N9a3wBTWi
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LNAKBPYt9PQCz44835GtLD
        status: active
        display_name: 王續之
        merged_into_person_id: null
    - claim:
        id: c_dOL_edA2SSESI79NLc2aPP
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_17oK99DspuBT9okPYzji4T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pOvPObzQD9yY7B3MahV4rH
          claim_id: c_dOL_edA2SSESI79NLc2aPP
          source_id: s_l-6ifaqfIylkeM_eMHsiQE
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王綏之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王綏之 之父／母。
          source:
            id: s_l-6ifaqfIylkeM_eMHsiQE
            source_type: api_record
            title: 中国历代人物传记资料库：王綏之（CBDB 326827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326827&o=json
            external_identifier: CBDB:326827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_17oK99DspuBT9okPYzji4T
        status: active
        display_name: 王綏之
        merged_into_person_id: null
    - claim:
        id: c_X51sMCQIbtE_GsHz8T4H15
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RdBz4yqStWy94sdFFBDWq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qkByj83YlL-hJ0xBG2vrME
          claim_id: c_X51sMCQIbtE_GsHz8T4H15
          source_id: s_X5cwhvcjDHSDb76v6jLjiw
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王顯之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王顯之 之父／母。
          source:
            id: s_X5cwhvcjDHSDb76v6jLjiw
            source_type: api_record
            title: 中国历代人物传记资料库：王顯之（CBDB 326831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326831&o=json
            external_identifier: CBDB:326831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RdBz4yqStWy94sdFFBDWq
        status: active
        display_name: 王顯之
        merged_into_person_id: null
    - claim:
        id: c_XJWp5IonFbKJtwT8nMhH7z
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4XCesiUNZYdZu6Mx3QqL1e
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GC9zE7mvvj_L6uliPP5DIJ
          claim_id: c_XJWp5IonFbKJtwT8nMhH7z
          source_id: s_ncTFEEAqXnvB-ye1mGS93k
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王繼之 之父／母。
          source:
            id: s_ncTFEEAqXnvB-ye1mGS93k
            source_type: api_record
            title: 中国历代人物传记资料库：王繼之（CBDB 326828）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json
            external_identifier: CBDB:326828
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4XCesiUNZYdZu6Mx3QqL1e
        status: active
        display_name: 王繼之
        merged_into_person_id: null
    - claim:
        id: c_we6AqPXNyFkqZxjimb4LgN
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9gtC4BUCYSX9f6WF3f3Kqu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LdQDqMA-QJlzbKNq7IDHwM
          claim_id: c_we6AqPXNyFkqZxjimb4LgN
          source_id: s_q5omb3vzxkVYhRGjCq4_dk
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王衡宏 与 王續之 为同胞（CBDB 记「弟」），王續之 之父／母即 王衡宏 之父／母。
          source:
            id: s_q5omb3vzxkVYhRGjCq4_dk
            source_type: api_record
            title: 中国历代人物传记资料库：王衡宏（CBDB 326823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326823&o=json
            external_identifier: CBDB:326823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9gtC4BUCYSX9f6WF3f3Kqu
        status: active
        display_name: 王衡宏
        merged_into_person_id: null
    - claim:
        id: c_P1MNS3g7WT0dxbEXtS7bZl
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EeEpuisuA3Qq5iKmC1k22C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBqUIgEwrMyQfrok_b5_kg
          claim_id: c_P1MNS3g7WT0dxbEXtS7bZl
          source_id: s_2FOPKZIatnEIoTuP5y6brS
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王紀之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王紀之 之父／母。
          source:
            id: s_2FOPKZIatnEIoTuP5y6brS
            source_type: api_record
            title: 中国历代人物传记资料库：王紀之（CBDB 326826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326826&o=json
            external_identifier: CBDB:326826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EeEpuisuA3Qq5iKmC1k22C
        status: active
        display_name: 王紀之
        merged_into_person_id: null
    - claim:
        id: c_yx8P6KrhshTv2cCamJ7K-d
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pg9NC9oQxbiBVHEgN5cQQg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5_2Kt_nYXqL0KHYMcujwN
          claim_id: c_yx8P6KrhshTv2cCamJ7K-d
          source_id: s_DsgafEh9QlR6avbOB8MRqj
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王宣宸 与 王續之 为同胞（CBDB 记「弟」），王續之 之父／母即 王宣宸 之父／母。
          source:
            id: s_DsgafEh9QlR6avbOB8MRqj
            source_type: api_record
            title: 中国历代人物传记资料库：王宣宸（CBDB 326824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326824&o=json
            external_identifier: CBDB:326824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Pg9NC9oQxbiBVHEgN5cQQg
        status: active
        display_name: 王宣宸
        merged_into_person_id: null
    - claim:
        id: c_LWG92JNPVePgiG_MimQGPs
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S3wL46qhSVMW3TDdGUdqcU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HBHF_zAQSLUMBxC7ErqPt
          claim_id: c_LWG92JNPVePgiG_MimQGPs
          source_id: s_jF_SUsWTNuqb66aI_X8oG_
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王緯之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王緯之 之父／母。
          source:
            id: s_jF_SUsWTNuqb66aI_X8oG_
            source_type: api_record
            title: 中国历代人物传记资料库：王緯之（CBDB 326825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json
            external_identifier: CBDB:326825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S3wL46qhSVMW3TDdGUdqcU
        status: active
        display_name: 王緯之
        merged_into_person_id: null
    - claim:
        id: c_TlT_iFWAF496_Wd58BUkXs
        subject_person_id: p_vK3QABJxLZ3CGaf98onw4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZQYg3GXccVDCkyEdjCfGUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mfcwSxqLqIy0d9dreDVYs7
          claim_id: c_TlT_iFWAF496_Wd58BUkXs
          source_id: s_8upuHHr5IumF3nDmAVLxSs
          stance: supports
          locator: CBDB：兄弟 王續之（204986）之父／母 王廷
          quotation: null
          interpretation_note: 由兄弟关系推断：王補之 与 王續之 为同胞（CBDB 记「兄」），王續之 之父／母即 王補之 之父／母。
          source:
            id: s_8upuHHr5IumF3nDmAVLxSs
            source_type: api_record
            title: 中国历代人物传记资料库：王補之（CBDB 326830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json
            external_identifier: CBDB:326830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZQYg3GXccVDCkyEdjCfGUD
        status: active
        display_name: 王補之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| bio.summary | 王廷，明人物。嘉靖四十一年進士，籍贯南充，曾任戶部右侍郎。（中国历代人物传记资料库 CBDB 326819） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LNAKBPYt9PQCz44835GtLD | 王續之 | accepted |
| children | p_17oK99DspuBT9okPYzji4T | 王綏之 | accepted |
| children | p_4RdBz4yqStWy94sdFFBDWq | 王顯之 | accepted |
| children | p_4XCesiUNZYdZu6Mx3QqL1e | 王繼之 | accepted |
| children | p_9gtC4BUCYSX9f6WF3f3Kqu | 王衡宏 | accepted |
| children | p_EeEpuisuA3Qq5iKmC1k22C | 王紀之 | accepted |
| children | p_Pg9NC9oQxbiBVHEgN5cQQg | 王宣宸 | accepted |
| children | p_S3wL46qhSVMW3TDdGUdqcU | 王緯之 | accepted |
| children | p_ZQYg3GXccVDCkyEdjCfGUD | 王補之 | accepted |

## 外部来源

- [中国历代人物传记资料库：王補之（CBDB 326830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326830&o=json)
- [中国历代人物传记资料库：王衡宏（CBDB 326823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326823&o=json)
- [中国历代人物传记资料库：王紀之（CBDB 326826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326826&o=json)
- [中国历代人物传记资料库：王繼之（CBDB 326828）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326828&o=json)
- [中国历代人物传记资料库：王綏之（CBDB 326827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326827&o=json)
- [中国历代人物传记资料库：王廷（CBDB 326819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326819&o=json)
- [中国历代人物传记资料库：王緯之（CBDB 326825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326825&o=json)
- [中国历代人物传记资料库：王顯之（CBDB 326831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326831&o=json)
- [中国历代人物传记资料库：王宣宸（CBDB 326824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326824&o=json)
