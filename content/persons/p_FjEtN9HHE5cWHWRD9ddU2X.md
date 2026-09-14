---
schema: wang-person/v1
id: p_FjEtN9HHE5cWHWRD9ddU2X
status: active
merged_into: null
display_name: 王浙
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cBNf1f8vfD1v3KDQy6ZX3C
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_63K34b4N6yw3pWLoe1t4uf
          claim_id: c_cBNf1f8vfD1v3KDQy6ZX3C
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: CBDB:212031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212031）
          source: &a1
            id: s_b1K7y7CiNbij2Zu24rUgXG
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 212031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json
            external_identifier: CBDB:212031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LJ4W9rfrGUyMqoH4AfW3gX
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙，明人物。隆慶五年進士，籍贯商城，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 212031）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RbuxP4JJ-o6imIysxw5NZ_
          claim_id: c_LJ4W9rfrGUyMqoH4AfW3gX
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: CBDB:212031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_4iwyngyNcOx6vxIV3ULEau
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_812fmjwpSz0ndZ4sL7QZ8i
          claim_id: c_4iwyngyNcOx6vxIV3ULEau
          source_id: s_b1K7y7CiNbij2Zu24rUgXG
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第二百九十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
    - claim:
        id: c_34iUXz6jAAMojbbrBBaaXv
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-R94yAqZvPhsIuznr-6gE
          claim_id: c_34iUXz6jAAMojbbrBBaaXv
          source_id: s_FlIJ9ZFjtU9HBqb6drlc1y
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王梓 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王梓 之父／母。
          source:
            id: s_FlIJ9ZFjtU9HBqb6drlc1y
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 212038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json
            external_identifier: CBDB:212038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1SxoGRV8Yp3LatzhzJbJq5
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_1TCPQatoF1I_eD89FU6CER
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Q7ZxuK1sicYmcLypAK1g5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhQKEfdKvv3vfq_uKvYPzE
          claim_id: c_1TCPQatoF1I_eD89FU6CER
          source_id: s_Hbjl5a2kZ3yObjSLRgKxsj
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王荍 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王荍 之父／母。
          source:
            id: s_Hbjl5a2kZ3yObjSLRgKxsj
            source_type: api_record
            title: 中国历代人物传记资料库：王荍（CBDB 212039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json
            external_identifier: CBDB:212039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5Q7ZxuK1sicYmcLypAK1g5
        status: active
        display_name: 王荍
        merged_into_person_id: null
    - claim:
        id: c_lkj_I6Hevl6jzlqoqGQ4G_
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNv1tKzMZjwzTbT61c7fde
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTek7muzob1Pnah-7QGFzE
          claim_id: c_lkj_I6Hevl6jzlqoqGQ4G_
          source_id: s_srAoxp3hSDYAwcQasLR5Ks
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王栻 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王栻 之父／母。
          source:
            id: s_srAoxp3hSDYAwcQasLR5Ks
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 212035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212035&o=json
            external_identifier: CBDB:212035
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DNv1tKzMZjwzTbT61c7fde
        status: active
        display_name: 王栻
        merged_into_person_id: null
    - claim:
        id: c_19jGJcl39BjMvNopsuwDN6
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EiszzT2DnJcKQFKcCPwdpK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9G8NWfYZ69wphqGvafyDu4
          claim_id: c_19jGJcl39BjMvNopsuwDN6
          source_id: s_2gq_V1jlVp6lJIHOtou_X0
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王櫰 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王櫰 之父／母。
          source:
            id: s_2gq_V1jlVp6lJIHOtou_X0
            source_type: api_record
            title: 中国历代人物传记资料库：王櫰（CBDB 212034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212034&o=json
            external_identifier: CBDB:212034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EiszzT2DnJcKQFKcCPwdpK
        status: active
        display_name: 王櫰
        merged_into_person_id: null
    - claim:
        id: c_7jWfmrR7pFatkHThbeXeEx
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cedMue6hC9mBLSeGQ8MX72
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uWCtwZRPhW6tgwVAGtBU-j
          claim_id: c_7jWfmrR7pFatkHThbeXeEx
          source_id: s_x1R1spK9qe1lTHbC73Sj7f
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王蓗 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王蓗 之父／母。
          source:
            id: s_x1R1spK9qe1lTHbC73Sj7f
            source_type: api_record
            title: 中国历代人物传记资料库：王蓗（CBDB 212036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json
            external_identifier: CBDB:212036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cedMue6hC9mBLSeGQ8MX72
        status: active
        display_name: 王蓗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浙 | accepted |
| bio.summary | 王浙，明人物。隆慶五年進士，籍贯商城，曾任提刑按察使司副使。（中国历代人物传记资料库 CBDB 212031） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |
| children | p_1SxoGRV8Yp3LatzhzJbJq5 | 王梓 | accepted |
| children | p_5Q7ZxuK1sicYmcLypAK1g5 | 王荍 | accepted |
| children | p_DNv1tKzMZjwzTbT61c7fde | 王栻 | accepted |
| children | p_EiszzT2DnJcKQFKcCPwdpK | 王櫰 | accepted |
| children | p_cedMue6hC9mBLSeGQ8MX72 | 王蓗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王櫰（CBDB 212034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212034&o=json)
- [中国历代人物传记资料库：王荍（CBDB 212039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212039&o=json)
- [中国历代人物传记资料库：王栻（CBDB 212035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212035&o=json)
- [中国历代人物传记资料库：王浙（CBDB 212031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212031&o=json)
- [中国历代人物传记资料库：王梓（CBDB 212038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json)
- [中国历代人物传记资料库：王蓗（CBDB 212036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212036&o=json)
