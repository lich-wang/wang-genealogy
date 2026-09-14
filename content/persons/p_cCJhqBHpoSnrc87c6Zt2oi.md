---
schema: wang-person/v1
id: p_cCJhqBHpoSnrc87c6Zt2oi
status: active
merged_into: null
display_name: 王允升
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zodtjeprNMRoh15HUiCoFh
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a3vQe1FxeAth7GkNP4VhzJ
          claim_id: c_zodtjeprNMRoh15HUiCoFh
          source_id: s_z7QUnVw6eguECGcc28q6PN
          stance: supports
          locator: CBDB:331176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（331176）
          source: &a1
            id: s_z7QUnVw6eguECGcc28q6PN
            source_type: api_record
            title: 中国历代人物传记资料库：王允升（CBDB 331176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331176&o=json
            external_identifier: CBDB:331176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XCrAe65TDhDMAcuowhCUFG
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允升，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9wN1NVAE8EQpahtdDkTEm_
          claim_id: c_XCrAe65TDhDMAcuowhCUFG
          source_id: s_z7QUnVw6eguECGcc28q6PN
          stance: supports
          locator: CBDB:331176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_6OFacmQtIohSGsQdd7y1JM
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8HfgQGalAuAbukyvPTu5ib
          claim_id: c_6OFacmQtIohSGsQdd7y1JM
          source_id: s_z7QUnVw6eguECGcc28q6PN
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sZEnnJm6tMYD9G3rVKEL7w
        status: active
        display_name: 王弘誨
        merged_into_person_id: null
    - claim:
        id: c_gvP1b0kQ5MNXKkeJq_ws1W
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DAoJKk64WK2ZdpbK9LZDyh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_peYkHTDE7aiQFnnsPq510Z
          claim_id: c_gvP1b0kQ5MNXKkeJq_ws1W
          source_id: s_uznFVD8D3acu-foQar0Hy_
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘詔 与 王弘誨 为同胞（CBDB 记「弟」），王弘誨 之父／母即 王弘詔 之父／母。
          source:
            id: s_uznFVD8D3acu-foQar0Hy_
            source_type: api_record
            title: 中国历代人物传记资料库：王弘詔（CBDB 331181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331181&o=json
            external_identifier: CBDB:331181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DAoJKk64WK2ZdpbK9LZDyh
        status: active
        display_name: 王弘詔
        merged_into_person_id: null
    - claim:
        id: c_tZZ1nO8ZlDrJbJg8Uywb3Z
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GSfLYhk8FK4NMvwXhQk9hm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQoP-8_ZpOr6PCfFmEMonr
          claim_id: c_tZZ1nO8ZlDrJbJg8Uywb3Z
          source_id: s_pKN-kwkk-lpfhfWZxJzYEv
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘諤 与 王弘誨 为同胞（CBDB 记「兄」），王弘誨 之父／母即 王弘諤 之父／母。
          source:
            id: s_pKN-kwkk-lpfhfWZxJzYEv
            source_type: api_record
            title: 中国历代人物传记资料库：王弘諤（CBDB 331183）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331183&o=json
            external_identifier: CBDB:331183
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GSfLYhk8FK4NMvwXhQk9hm
        status: active
        display_name: 王弘諤
        merged_into_person_id: null
    - claim:
        id: c_Rh5NOdyh7Eu-Ssj0LjhP4c
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UAa9LmYBdBqdhsd7WXJzb1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTsh7fdAJ_jdHNGaQgQ602
          claim_id: c_Rh5NOdyh7Eu-Ssj0LjhP4c
          source_id: s_t--RXMr0yRLbBWCvpo8SsV
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘誥 与 王弘誨 为同胞（CBDB 记「弟」），王弘誨 之父／母即 王弘誥 之父／母。
          source:
            id: s_t--RXMr0yRLbBWCvpo8SsV
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誥（CBDB 331182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json
            external_identifier: CBDB:331182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UAa9LmYBdBqdhsd7WXJzb1
        status: active
        display_name: 王弘誥
        merged_into_person_id: null
    - claim:
        id: c_k5hrV1QPbDcVRLjXMfPa47
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKVLpjhVUtcmRg8U7moQQJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q7z8HV9K4hw9HL2wBFZ4hd
          claim_id: c_k5hrV1QPbDcVRLjXMfPa47
          source_id: s_nFWGXOZ3k5OgSgghGusA27
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘謨 与 王弘誨 为同胞（CBDB 记「弟」），王弘誨 之父／母即 王弘謨 之父／母。
          source:
            id: s_nFWGXOZ3k5OgSgghGusA27
            source_type: api_record
            title: 中国历代人物传记资料库：王弘謨（CBDB 331180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json
            external_identifier: CBDB:331180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VKVLpjhVUtcmRg8U7moQQJ
        status: active
        display_name: 王弘謨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王允升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允升 | accepted |
| bio.summary | 王允升，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_sZEnnJm6tMYD9G3rVKEL7w | 王弘誨 | accepted |
| children | p_DAoJKk64WK2ZdpbK9LZDyh | 王弘詔 | accepted |
| children | p_GSfLYhk8FK4NMvwXhQk9hm | 王弘諤 | accepted |
| children | p_UAa9LmYBdBqdhsd7WXJzb1 | 王弘誥 | accepted |
| children | p_VKVLpjhVUtcmRg8U7moQQJ | 王弘謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘諤（CBDB 331183）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331183&o=json)
- [中国历代人物传记资料库：王弘誥（CBDB 331182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json)
- [中国历代人物传记资料库：王弘謨（CBDB 331180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331180&o=json)
- [中国历代人物传记资料库：王弘詔（CBDB 331181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331181&o=json)
- [中国历代人物传记资料库：王允升（CBDB 331176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331176&o=json)
