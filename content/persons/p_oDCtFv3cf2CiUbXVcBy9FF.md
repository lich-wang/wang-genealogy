---
schema: wang-person/v1
id: p_oDCtFv3cf2CiUbXVcBy9FF
status: active
merged_into: null
display_name: 王廷榦
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nHtzhEdEYX5HxXcFh6V5Xn
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷榦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8m784mdFRZLGuv2Ug25T6s
          claim_id: c_nHtzhEdEYX5HxXcFh6V5Xn
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: CBDB:126553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126553）
          source: &a1
            id: s_1raHT5WktiXo8Cx29ateix
            source_type: api_record
            title: 中国历代人物传记资料库：王廷榦（CBDB 126553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json
            external_identifier: CBDB:126553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oGNo5Ae6XftjFD7E7FArt2
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3eE5QJFm6KUcYqcs9Q6a6K
          claim_id: c_oGNo5Ae6XftjFD7E7FArt2
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kdzgAStB1eJys9Ecc34AQ1
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vYbJzAw6dJ7dZ3L7tWt85M
          claim_id: c_kdzgAStB1eJys9Ecc34AQ1
          source_id: s_1raHT5WktiXo8Cx29ateix
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YILQ7RzAt-O1YkUkB9QI4F
        subject_person_id: p_11RhKLzn2Mi6Moy5jEp4MD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_32UHQh4Fdj4J7BssaAtSLY
          claim_id: c_YILQ7RzAt-O1YkUkB9QI4F
          source_id: s_5ARCmWyZdEEd1UcgNfncxT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5ARCmWyZdEEd1UcgNfncxT
            source_type: api_record
            title: 中国历代人物传记资料库：王汝猷（CBDB 291880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json
            external_identifier: CBDB:291880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_11RhKLzn2Mi6Moy5jEp4MD
        status: active
        display_name: 王汝猷
        merged_into_person_id: null
  children:
    - claim:
        id: c_4_86609IL99emaviir8VaF
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5gpPWrhVFmbfxwLkGyt6Up
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yT_JBja8bz9ronURTrzFUl
          claim_id: c_4_86609IL99emaviir8VaF
          source_id: s_eKFjaTbqNQmuFNUjRciBrj
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eKFjaTbqNQmuFNUjRciBrj
            source_type: api_record
            title: 中国历代人物传记资料库：王文爟（CBDB 291900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291900&o=json
            external_identifier: CBDB:291900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5gpPWrhVFmbfxwLkGyt6Up
        status: active
        display_name: 王文爟
        merged_into_person_id: null
    - claim:
        id: c_voMbx_P_FCPAtl6OR32Xbq
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gBimkCGQoGDQ7VZXasL4y6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lz-dOYBXSN6fnwfo-16vkd
          claim_id: c_voMbx_P_FCPAtl6OR32Xbq
          source_id: s_4vQLRCPRoRdgDjcim23SeF
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4vQLRCPRoRdgDjcim23SeF
            source_type: api_record
            title: 中国历代人物传记资料库：王文炯（CBDB 291898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291898&o=json
            external_identifier: CBDB:291898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.378Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gBimkCGQoGDQ7VZXasL4y6
        status: active
        display_name: 王文炯
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_CBknzOnpJeVWavIbP9Rl2k
        subject_person_id: p_2hBKyxrN1dj7d5F4o4qUat
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n97VSOGe9qMcddxJeNSj_Q
          claim_id: c_CBknzOnpJeVWavIbP9Rl2k
          source_id: s_P7CoYMX4u35GG1LGj3vDJN
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P7CoYMX4u35GG1LGj3vDJN
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 291878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json
            external_identifier: CBDB:291878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2hBKyxrN1dj7d5F4o4qUat
        status: active
        display_name: 王達
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_t6HVtxRJKUgnuT5XbsQJeL
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2pEjUDgmg6ACaWkcArzGmB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QZIJp0ydiNZNLKpvotN1Z
          claim_id: c_t6HVtxRJKUgnuT5XbsQJeL
          source_id: s_DQ9qFN5BNG97aT4nG3H4qe
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DQ9qFN5BNG97aT4nG3H4qe
            source_type: api_record
            title: 中国历代人物传记资料库：王允元（CBDB 291911）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291911&o=json
            external_identifier: CBDB:291911
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.381Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2pEjUDgmg6ACaWkcArzGmB
        status: active
        display_name: 王允元
        merged_into_person_id: null
    - claim:
        id: c_HKu8-SXasLgERXLLGg4qLC
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fagWpUqsWGi5ABdQASKVK9
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UH0WA9xaBaUnxK_mOMnJ7x
          claim_id: c_HKu8-SXasLgERXLLGg4qLC
          source_id: s_dkCzSjnWxJrGEE3y9VeBje
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dkCzSjnWxJrGEE3y9VeBje
            source_type: api_record
            title: 中国历代人物传记资料库：王時陞（CBDB 291908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291908&o=json
            external_identifier: CBDB:291908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fagWpUqsWGi5ABdQASKVK9
        status: active
        display_name: 王時陞
        merged_into_person_id: null
    - claim:
        id: c_GDscPLf3i0HIMBzEmG8XTH
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ktsnU8FTeioQRpsJfaLUo1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMbOwqfjH2DqBrAilP_lA0
          claim_id: c_GDscPLf3i0HIMBzEmG8XTH
          source_id: s_H3s4HvGKR6qTkkbYs9xDwf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H3s4HvGKR6qTkkbYs9xDwf
            source_type: api_record
            title: 中国历代人物传记资料库：王允亨（CBDB 291912）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291912&o=json
            external_identifier: CBDB:291912
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.382Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ktsnU8FTeioQRpsJfaLUo1
        status: active
        display_name: 王允亨
        merged_into_person_id: null
    - claim:
        id: c_-jecEuJ9BBL7ZPmZ8LlCeu
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PpLqnBNRrTw5b6vkG3TPK7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0R8xWLaYi1JQ2MInY5f-Tx
          claim_id: c_-jecEuJ9BBL7ZPmZ8LlCeu
          source_id: s_48w7agQBRvSUkP56U1snL5
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_48w7agQBRvSUkP56U1snL5
            source_type: api_record
            title: 中国历代人物传记资料库：王時可（CBDB 291906）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json
            external_identifier: CBDB:291906
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PpLqnBNRrTw5b6vkG3TPK7
        status: active
        display_name: 王時可
        merged_into_person_id: null
    - claim:
        id: c_9pYlgtLO387z8hv27I9pc0
        subject_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T9E7DvbctBp2op4eaF9sZG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tul1mA2iePcq283fYIlF0l
          claim_id: c_9pYlgtLO387z8hv27I9pc0
          source_id: s_WBK8MeoGCfzqjEW7LM3Gxh
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WBK8MeoGCfzqjEW7LM3Gxh
            source_type: api_record
            title: 中国历代人物传记资料库：王時亮（CBDB 291904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json
            external_identifier: CBDB:291904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.379Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_T9E7DvbctBp2op4eaF9sZG
        status: active
        display_name: 王時亮
        merged_into_person_id: null
  other: []
---

# 王廷榦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷榦 | accepted |
| birth.date | 1516年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_11RhKLzn2Mi6Moy5jEp4MD | 王汝猷 | accepted |
| children | p_5gpPWrhVFmbfxwLkGyt6Up | 王文爟 | accepted |
| children | p_gBimkCGQoGDQ7VZXasL4y6 | 王文炯 | accepted |
| ancestors | p_2hBKyxrN1dj7d5F4o4qUat | 王達 | accepted |
| descendants | p_2pEjUDgmg6ACaWkcArzGmB | 王允元 | accepted |
| descendants | p_fagWpUqsWGi5ABdQASKVK9 | 王時陞 | accepted |
| descendants | p_ktsnU8FTeioQRpsJfaLUo1 | 王允亨 | accepted |
| descendants | p_PpLqnBNRrTw5b6vkG3TPK7 | 王時可 | accepted |
| descendants | p_T9E7DvbctBp2op4eaF9sZG | 王時亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 291878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291878&o=json)
- [中国历代人物传记资料库：王汝猷（CBDB 291880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291880&o=json)
- [中国历代人物传记资料库：王時可（CBDB 291906）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291906&o=json)
- [中国历代人物传记资料库：王時亮（CBDB 291904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291904&o=json)
- [中国历代人物传记资料库：王時陞（CBDB 291908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291908&o=json)
- [中国历代人物传记资料库：王廷榦（CBDB 126553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126553&o=json)
- [中国历代人物传记资料库：王文爟（CBDB 291900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291900&o=json)
- [中国历代人物传记资料库：王文炯（CBDB 291898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291898&o=json)
- [中国历代人物传记资料库：王允亨（CBDB 291912）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291912&o=json)
- [中国历代人物传记资料库：王允元（CBDB 291911）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291911&o=json)
