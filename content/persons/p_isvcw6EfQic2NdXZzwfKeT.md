---
schema: wang-person/v1
id: p_isvcw6EfQic2NdXZzwfKeT
status: active
merged_into: null
display_name: 王洪
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JwmR7eK7QhZanxTMnYnUGW
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8LdiUSN4D4Z8jLRDfbLc7A
          claim_id: c_JwmR7eK7QhZanxTMnYnUGW
          source_id: s_5oMQQ6J7D2xG5HP2PqWFcF
          stance: supports
          locator: CBDB:259539
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（259539）
          source: &a1
            id: s_5oMQQ6J7D2xG5HP2PqWFcF
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 259539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259539&o=json
            external_identifier: CBDB:259539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BRxnk3gSVieGctvZyJFU76
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259539）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c1zbcP0-kCJMUwZ_HCxKsn
          claim_id: c_BRxnk3gSVieGctvZyJFU76
          source_id: s_5oMQQ6J7D2xG5HP2PqWFcF
          stance: supports
          locator: CBDB:259539
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_h54Nn9QPsVuyEuHhW0J-s9
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RxU5daA7Pb2tQNaYot8QGE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F72Yh8z5ZOfuHPJZziiXvu
          claim_id: c_h54Nn9QPsVuyEuHhW0J-s9
          source_id: s_5oMQQ6J7D2xG5HP2PqWFcF
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第九十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RxU5daA7Pb2tQNaYot8QGE
        status: active
        display_name: 王術
        merged_into_person_id: null
    - claim:
        id: c_2b-d0SEwVm2yOa7Jhv8iBA
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9f3JMr7vZQNLdADD3ztWtm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3agciVAxoueOb6quSEo8AT
          claim_id: c_2b-d0SEwVm2yOa7Jhv8iBA
          source_id: s_vzES0KFt7yBHBsCeOoULUN
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王棨 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王棨 之父／母。
          source:
            id: s_vzES0KFt7yBHBsCeOoULUN
            source_type: api_record
            title: 中国历代人物传记资料库：王棨（CBDB 259544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json
            external_identifier: CBDB:259544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9f3JMr7vZQNLdADD3ztWtm
        status: active
        display_name: 王棨
        merged_into_person_id: null
    - claim:
        id: c_ZZOSe6mG0C4aRmO5jJxvwN
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AuCKU8vCgLCLaoyApF5P6w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CVKFJ0x0kEhgm2if2DX08b
          claim_id: c_ZZOSe6mG0C4aRmO5jJxvwN
          source_id: s_GtDoLTqA4D-AdfeTegpbLw
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王梵 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王梵 之父／母。
          source:
            id: s_GtDoLTqA4D-AdfeTegpbLw
            source_type: api_record
            title: 中国历代人物传记资料库：王梵（CBDB 259548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json
            external_identifier: CBDB:259548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AuCKU8vCgLCLaoyApF5P6w
        status: active
        display_name: 王梵
        merged_into_person_id: null
    - claim:
        id: c_huISWrnNyvt37Vly2rK_-4
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSUvpomfGMjUH6Tg8wQ7ya
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bB8F0jbjl63PBUcRmtlD7N
          claim_id: c_huISWrnNyvt37Vly2rK_-4
          source_id: s_Ge0l9MtrtheRyHlk1k0_J9
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王彩 与 王術 为同胞（CBDB 记「弟」），王術 之父／母即 王彩 之父／母。
          source:
            id: s_Ge0l9MtrtheRyHlk1k0_J9
            source_type: api_record
            title: 中国历代人物传记资料库：王彩（CBDB 259542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json
            external_identifier: CBDB:259542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSUvpomfGMjUH6Tg8wQ7ya
        status: active
        display_name: 王彩
        merged_into_person_id: null
    - claim:
        id: c_G-C7QGzWXy9X95BsJxYxUf
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LSk2pKsUaXXBC4m85PfwoB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vAriwy22s4iq3m0CxaTzya
          claim_id: c_G-C7QGzWXy9X95BsJxYxUf
          source_id: s_xkw3ds2cdTvQ-_YZdLVnUs
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王椿 与 王術 为同胞（CBDB 记「弟」），王術 之父／母即 王椿 之父／母。
          source:
            id: s_xkw3ds2cdTvQ-_YZdLVnUs
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 259543）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259543&o=json
            external_identifier: CBDB:259543
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_LSk2pKsUaXXBC4m85PfwoB
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_JJh4VQ27htB1DV3SmpRtuD
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P9cwCrTVLEY5WuWbUMvrd7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zoNAMcYjl7zTQwDyTMMfP
          claim_id: c_JJh4VQ27htB1DV3SmpRtuD
          source_id: s_erwNQwwJ9mWG-Lncco1cBo
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王森 之父／母。
          source:
            id: s_erwNQwwJ9mWG-Lncco1cBo
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 259545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json
            external_identifier: CBDB:259545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P9cwCrTVLEY5WuWbUMvrd7
        status: active
        display_name: 王森
        merged_into_person_id: null
    - claim:
        id: c_t5GzlCSiyj2gDJ16ofpXdS
        subject_person_id: p_isvcw6EfQic2NdXZzwfKeT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ie7MwLcUwaKdn3XbEbKjDt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EIfr005wRPw6GIaH21e9hc
          claim_id: c_t5GzlCSiyj2gDJ16ofpXdS
          source_id: s_oDscBfIDrn40ow7XP3UTnx
          stance: supports
          locator: CBDB：兄弟 王術（200545）之父／母 王洪
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋 与 王術 为同胞（CBDB 记「兄」），王術 之父／母即 王懋 之父／母。
          source:
            id: s_oDscBfIDrn40ow7XP3UTnx
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 259547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259547&o=json
            external_identifier: CBDB:259547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ie7MwLcUwaKdn3XbEbKjDt
        status: active
        display_name: 王懋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王洪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洪 | accepted |
| bio.summary | 王洪，明人物。成化二十三年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 259539） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RxU5daA7Pb2tQNaYot8QGE | 王術 | accepted |
| children | p_9f3JMr7vZQNLdADD3ztWtm | 王棨 | accepted |
| children | p_AuCKU8vCgLCLaoyApF5P6w | 王梵 | accepted |
| children | p_LSUvpomfGMjUH6Tg8wQ7ya | 王彩 | accepted |
| children | p_LSk2pKsUaXXBC4m85PfwoB | 王椿 | accepted |
| children | p_P9cwCrTVLEY5WuWbUMvrd7 | 王森 | accepted |
| children | p_ie7MwLcUwaKdn3XbEbKjDt | 王懋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彩（CBDB 259542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259542&o=json)
- [中国历代人物传记资料库：王椿（CBDB 259543）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259543&o=json)
- [中国历代人物传记资料库：王梵（CBDB 259548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259548&o=json)
- [中国历代人物传记资料库：王洪（CBDB 259539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259539&o=json)
- [中国历代人物传记资料库：王懋（CBDB 259547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259547&o=json)
- [中国历代人物传记资料库：王棨（CBDB 259544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259544&o=json)
- [中国历代人物传记资料库：王森（CBDB 259545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259545&o=json)
