---
schema: wang-person/v1
id: p_icxXq3mTNniLra2C3qpkmV
status: active
merged_into: null
display_name: 王佑
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YPSosr6yqCL9NF5H9J3wFo
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wHhMu4h8KwUA23zps5etxq
          claim_id: c_YPSosr6yqCL9NF5H9J3wFo
          source_id: s_qQ43PTRBJX1QwEpu3Gcs3t
          stance: supports
          locator: CBDB:302951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302951）
          source: &a1
            id: s_qQ43PTRBJX1QwEpu3Gcs3t
            source_type: api_record
            title: 中国历代人物传记资料库：王佑（CBDB 302951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302951&o=json
            external_identifier: CBDB:302951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ahTKTeaBxf7NJkrLvLNR3m
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佑，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1sSQ_-rHIbEdIRHcsiD5WJ
          claim_id: c_ahTKTeaBxf7NJkrLvLNR3m
          source_id: s_qQ43PTRBJX1QwEpu3Gcs3t
          stance: supports
          locator: CBDB:302951
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8ADC_J9dTZ_pZrWbuCeDIE
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hYn35dM9vxJfRx8fWZf7jx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aC4wrzh8UNOlRM2tlpiS-3
          claim_id: c_8ADC_J9dTZ_pZrWbuCeDIE
          source_id: s_gvmN9L8q5G1ePp6BD45Nem
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第二甲第八十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gvmN9L8q5G1ePp6BD45Nem
            source_type: api_record
            title: 中国历代人物传记资料库：王撫民（CBDB 203316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json
            external_identifier: CBDB:203316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hYn35dM9vxJfRx8fWZf7jx
        status: active
        display_name: 王撫民
        merged_into_person_id: null
    - claim:
        id: c_5HUpZF2h7CwmRNenwL0-Hq
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4qyiGoTomPMaVqCYdNj2Re
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OUoddQC-_WdFbgPmpGMNWi
          claim_id: c_5HUpZF2h7CwmRNenwL0-Hq
          source_id: s_YEVkHD5ns21gPBtTSZa0HY
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王育民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王育民 之父／母。
          source:
            id: s_YEVkHD5ns21gPBtTSZa0HY
            source_type: api_record
            title: 中国历代人物传记资料库：王育民（CBDB 302954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json
            external_identifier: CBDB:302954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4qyiGoTomPMaVqCYdNj2Re
        status: active
        display_name: 王育民
        merged_into_person_id: null
    - claim:
        id: c_4Dc0Q_uT1cYFrxiCRTAw-y
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B2VkSjF2KwfP8yam62xbhV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PfpjAF3xdR3S6I5wOTjv8J
          claim_id: c_4Dc0Q_uT1cYFrxiCRTAw-y
          source_id: s_xcP_xqUfwhtpIYkpkiePaS
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王新民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王新民 之父／母。
          source:
            id: s_xcP_xqUfwhtpIYkpkiePaS
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 302955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json
            external_identifier: CBDB:302955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2VkSjF2KwfP8yam62xbhV
        status: active
        display_name: 王新民
        merged_into_person_id: null
    - claim:
        id: c_MJQH7ZrWjjD67rJQIZRfXL
        subject_person_id: p_icxXq3mTNniLra2C3qpkmV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S8VqMzrrBmph6miumBK4Wk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YgSfC4bE6I7-KPXVYwdZok
          claim_id: c_MJQH7ZrWjjD67rJQIZRfXL
          source_id: s_wLaD7bioi_5sSiJ2hJV-C3
          stance: supports
          locator: CBDB：兄弟 王撫民（203316）之父／母 王佑
          quotation: null
          interpretation_note: 由兄弟关系推断：王澤民 与 王撫民 为同胞（CBDB 记「兄」），王撫民 之父／母即 王澤民 之父／母。
          source:
            id: s_wLaD7bioi_5sSiJ2hJV-C3
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 302956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json
            external_identifier: CBDB:302956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S8VqMzrrBmph6miumBK4Wk
        status: active
        display_name: 王澤民
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佑 | accepted |
| bio.summary | 王佑，明人物。嘉靖二十年進士，籍贯清源。（中国历代人物传记资料库 CBDB 302951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hYn35dM9vxJfRx8fWZf7jx | 王撫民 | accepted |
| children | p_4qyiGoTomPMaVqCYdNj2Re | 王育民 | accepted |
| children | p_B2VkSjF2KwfP8yam62xbhV | 王新民 | accepted |
| children | p_S8VqMzrrBmph6miumBK4Wk | 王澤民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王撫民（CBDB 203316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203316&o=json)
- [中国历代人物传记资料库：王新民（CBDB 302955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302955&o=json)
- [中国历代人物传记资料库：王佑（CBDB 302951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302951&o=json)
- [中国历代人物传记资料库：王育民（CBDB 302954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302954&o=json)
- [中国历代人物传记资料库：王澤民（CBDB 302956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302956&o=json)
