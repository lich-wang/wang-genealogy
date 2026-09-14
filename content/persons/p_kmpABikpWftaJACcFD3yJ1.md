---
schema: wang-person/v1
id: p_kmpABikpWftaJACcFD3yJ1
status: active
merged_into: null
display_name: 王繼德
cbdb_id: 327528
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4BPB59oE8E45dUx7cEzi4g
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼德，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hrGuIIdrqcwwrjiY8zqYc5
          claim_id: c_4BPB59oE8E45dUx7cEzi4g
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: CBDB:327528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vkd7AEwfWrQDLC88pSas2j
            source_type: api_record
            title: 中国历代人物传记资料库：王繼德（CBDB 327528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json
            external_identifier: CBDB:327528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cpqNy9kFfvG5V1U1rDLGEZ
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3shZTPt7o7bnJ9XLZAMD7c
          claim_id: c_cpqNy9kFfvG5V1U1rDLGEZ
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: CBDB:327528
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_izKiuPL40dgywPDd9sMR5W
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DhXJg1QUSd5Fvqo5eHzd45
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ohSU0hJbjf1lFLZE9JKQmL
          claim_id: c_izKiuPL40dgywPDd9sMR5W
          source_id: s_vkd7AEwfWrQDLC88pSas2j
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vkd7AEwfWrQDLC88pSas2j
            source_type: api_record
            title: 中国历代人物传记资料库：王繼德（CBDB 327528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json
            external_identifier: CBDB:327528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DhXJg1QUSd5Fvqo5eHzd45
        status: active
        display_name: 王宇
        merged_into_person_id: null
    - claim:
        id: c_cDFeKY8hCfOZ7-ixovzKyp
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oP44rT6Ti6t4n4tQkRQQ4T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msZVYzIX36wcGzFGH2cud9
          claim_id: c_cDFeKY8hCfOZ7-ixovzKyp
          source_id: s_A312e4Bwl1R9_On7x_9P8W
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寅 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寅 之父／母。
          source:
            id: s_A312e4Bwl1R9_On7x_9P8W
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 327535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json
            external_identifier: CBDB:327535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oP44rT6Ti6t4n4tQkRQQ4T
        status: active
        display_name: 王寅
        merged_into_person_id: null
    - claim:
        id: c_-8wKJww81bbQau4d2ssnmo
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xs6RgvvreikrtPXBqdHT2K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B17J7bL4j0NYT40pKIAXEk
          claim_id: c_-8wKJww81bbQau4d2ssnmo
          source_id: s_NIMdDLb3tvNuF8SagHeHTO
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寧 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寧 之父／母。
          source:
            id: s_NIMdDLb3tvNuF8SagHeHTO
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 327534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json
            external_identifier: CBDB:327534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xs6RgvvreikrtPXBqdHT2K
        status: active
        display_name: 王寧
        merged_into_person_id: null
    - claim:
        id: c_498N9OKN0Lix5ctn03vALt
        subject_person_id: p_kmpABikpWftaJACcFD3yJ1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ywaE99cf2hJGTekVqCNHGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZttyLklkKYHIYgRh_vtCHO
          claim_id: c_498N9OKN0Lix5ctn03vALt
          source_id: s_ZlyW04NvWWBkDTMy6bVRiL
          stance: supports
          locator: CBDB：兄弟 王宇（205042）之父／母 王繼德
          quotation: null
          interpretation_note: 由兄弟关系推断：王寵 与 王宇 为同胞（CBDB 记「兄」），王宇 之父／母即 王寵 之父／母。
          source:
            id: s_ZlyW04NvWWBkDTMy6bVRiL
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 327533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json
            external_identifier: CBDB:327533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ywaE99cf2hJGTekVqCNHGE
        status: active
        display_name: 王寵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王繼德，明人物。嘉靖四十一年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 327528） | accepted |
| name.primary | 王繼德 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DhXJg1QUSd5Fvqo5eHzd45 | 王宇 | accepted |
| children | p_oP44rT6Ti6t4n4tQkRQQ4T | 王寅 | accepted |
| children | p_xs6RgvvreikrtPXBqdHT2K | 王寧 | accepted |
| children | p_ywaE99cf2hJGTekVqCNHGE | 王寵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 327533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327533&o=json)
- [中国历代人物传记资料库：王繼德（CBDB 327528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327528&o=json)
- [中国历代人物传记资料库：王寧（CBDB 327534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327534&o=json)
- [中国历代人物传记资料库：王寅（CBDB 327535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327535&o=json)
