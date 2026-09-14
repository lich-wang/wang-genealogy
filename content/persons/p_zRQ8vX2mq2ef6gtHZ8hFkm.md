---
schema: wang-person/v1
id: p_zRQ8vX2mq2ef6gtHZ8hFkm
status: active
merged_into: null
display_name: 王滋
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6g2KXp4b9QXYKPBy2eiogW
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8QkzD8CoQMbGGSKW9LRw3V
          claim_id: c_6g2KXp4b9QXYKPBy2eiogW
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
          stance: supports
          locator: CBDB:314299
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314299）
          source: &a1
            id: s_s3xmpoTHPot9mSnQLLtQS4
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 314299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json
            external_identifier: CBDB:314299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_72LrVf6L8iuz9cCrhefApx
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滋，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314299）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ObsVMqqGKvE44XKSiyO5s-
          claim_id: c_72LrVf6L8iuz9cCrhefApx
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
          stance: supports
          locator: CBDB:314299
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WOo4p1svt18FCbkaksVV1c
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-Zi5qz9ds0w_mT_rbZPvf
          claim_id: c_WOo4p1svt18FCbkaksVV1c
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qb7zDu2gwfuaD8yT1H3cXc
        status: active
        display_name: 王元春
        merged_into_person_id: null
    - claim:
        id: c_pjt4koKbI9U3s0cNcnwV6p
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GF6iAebNsFgoePvByoccyQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flYd6mcvMSL0czye_y4bgy
          claim_id: c_pjt4koKbI9U3s0cNcnwV6p
          source_id: s_a2-I1n3JH1MnO9pfgU9hRG
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王元道 与 王元春 为同胞（CBDB 记「兄」），王元春 之父／母即 王元道 之父／母。
          source:
            id: s_a2-I1n3JH1MnO9pfgU9hRG
            source_type: api_record
            title: 中国历代人物传记资料库：王元道（CBDB 314307）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314307&o=json
            external_identifier: CBDB:314307
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GF6iAebNsFgoePvByoccyQ
        status: active
        display_name: 王元道
        merged_into_person_id: null
    - claim:
        id: c_vuJEk370t5QfOh9A2rWoni
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HBqNcNEuSsrmChhBUqSG2T
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pNhI9ckvkE2qSjTVl4P1A
          claim_id: c_vuJEk370t5QfOh9A2rWoni
          source_id: s_8zAMdwDeWzBBtY9JLB2dA4
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王元春 为同胞（CBDB 记「兄」），王元春 之父／母即 王材 之父／母。
          source:
            id: s_8zAMdwDeWzBBtY9JLB2dA4
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 314305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json
            external_identifier: CBDB:314305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HBqNcNEuSsrmChhBUqSG2T
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_EmD8nNidopHbCSCkCxIYx1
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgyCkT6xFVDEFSzJBuiL5z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__gbWGT7Lvlqtm6Qbg_-Fnx
          claim_id: c_EmD8nNidopHbCSCkCxIYx1
          source_id: s_1M9rH_vnQXrtmySM5Tq39Z
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王元默 与 王元春 为同胞（CBDB 记「兄」），王元春 之父／母即 王元默 之父／母。
          source:
            id: s_1M9rH_vnQXrtmySM5Tq39Z
            source_type: api_record
            title: 中国历代人物传记资料库：王元默（CBDB 314304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json
            external_identifier: CBDB:314304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jgyCkT6xFVDEFSzJBuiL5z
        status: active
        display_name: 王元默
        merged_into_person_id: null
    - claim:
        id: c_75wXsC3U8ivzJKCXOjNYFj
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pjrmJD61kyHiHc61Ar64VN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wU4lqZRgOQgBGmmAnJU8eP
          claim_id: c_75wXsC3U8ivzJKCXOjNYFj
          source_id: s_iNmSuL1hqlaeSBroVu-Vit
          stance: supports
          locator: CBDB：兄弟 王元春（126470）之父／母 王滋
          quotation: null
          interpretation_note: 由兄弟关系推断：王棣 与 王元春 为同胞（CBDB 记「弟」），王元春 之父／母即 王棣 之父／母。
          source:
            id: s_iNmSuL1hqlaeSBroVu-Vit
            source_type: api_record
            title: 中国历代人物传记资料库：王棣（CBDB 314303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314303&o=json
            external_identifier: CBDB:314303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pjrmJD61kyHiHc61Ar64VN
        status: active
        display_name: 王棣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王滋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滋 | accepted |
| bio.summary | 王滋，明人物。嘉靖二十九年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 314299） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qb7zDu2gwfuaD8yT1H3cXc | 王元春 | accepted |
| children | p_GF6iAebNsFgoePvByoccyQ | 王元道 | accepted |
| children | p_HBqNcNEuSsrmChhBUqSG2T | 王材 | accepted |
| children | p_jgyCkT6xFVDEFSzJBuiL5z | 王元默 | accepted |
| children | p_pjrmJD61kyHiHc61Ar64VN | 王棣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王材（CBDB 314305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314305&o=json)
- [中国历代人物传记资料库：王棣（CBDB 314303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314303&o=json)
- [中国历代人物传记资料库：王元道（CBDB 314307）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314307&o=json)
- [中国历代人物传记资料库：王元默（CBDB 314304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314304&o=json)
- [中国历代人物传记资料库：王滋（CBDB 314299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json)
