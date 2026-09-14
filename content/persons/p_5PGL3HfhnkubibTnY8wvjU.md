---
schema: wang-person/v1
id: p_5PGL3HfhnkubibTnY8wvjU
status: active
merged_into: null
display_name: 王釴
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SKyKevRMDKaBY5Rr98ACCw
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1eEEvzRBh251eDH2fSxS2w
          claim_id: c_SKyKevRMDKaBY5Rr98ACCw
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: CBDB:202700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202700）
          source: &a1
            id: s_5MV8WK4AC29qwKVdS7RJGr
            source_type: api_record
            title: 中国历代人物传记资料库：王釴（CBDB 202700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json
            external_identifier: CBDB:202700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_eUieURYNEwo9PNB1QRMjHA
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1499年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKutov71HDpKpM11AzMVDb
          claim_id: c_eUieURYNEwo9PNB1QRMjHA
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
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
        id: c_M8TJsECAgvdGAYuL3fY3aM
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釴（生于1499年），明人物。明清進士進士，籍贯福州中衛，入仕進士，曾任大理寺觀政。（中国历代人物传记资料库 CBDB 202700）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U_FToHBa36SO_AZeW-x__8
          claim_id: c_M8TJsECAgvdGAYuL3fY3aM
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: CBDB:202700
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xxfov5577hMKb-afEX7AHx
        subject_person_id: p_MjhM3ee1A3Kj24vm13PmPv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5PGL3HfhnkubibTnY8wvjU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rngz0zozoSZfLU7iOtVPyF
          claim_id: c_xxfov5577hMKb-afEX7AHx
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MjhM3ee1A3Kj24vm13PmPv
        status: active
        display_name: 王昇
        merged_into_person_id: null
  children:
    - claim:
        id: c_0wnuR5F000xLlLvMRbvl3n
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7yxFYuCPP32o5cFEtkkhZX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zq9NEl3ePtTL3ScPfNLGiv
          claim_id: c_0wnuR5F000xLlLvMRbvl3n
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7yxFYuCPP32o5cFEtkkhZX
        status: active
        display_name: 王治
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ZmUTf4Hrqp_HIdu8gdEfn8
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_H5td9BKYZC5uWdeAwp14Nj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bv3CQF4gjP4zbi_fZFHSFE
          claim_id: c_ZmUTf4Hrqp_HIdu8gdEfn8
          source_id: s_HbxsEffLHjVOssXs_nWkdt
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HbxsEffLHjVOssXs_nWkdt
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王釴妻)（CBDB 292615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292615&o=json
            external_identifier: CBDB:292615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H5td9BKYZC5uWdeAwp14Nj
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_s7kZCEzuEj4Qk11tD5a-qb
        subject_person_id: p_Mb1gBfifYJJm1XEHgSa3aa
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5PGL3HfhnkubibTnY8wvjU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LmhLy3JoeIKAka7Hu18g2
          claim_id: c_s7kZCEzuEj4Qk11tD5a-qb
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mb1gBfifYJJm1XEHgSa3aa
        status: active
        display_name: 王智
        merged_into_person_id: null
    - claim:
        id: c_9Av50HmydSe3Hk4HAXV1sH
        subject_person_id: p_TBZtLKQdaJM24ctzM119k8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5PGL3HfhnkubibTnY8wvjU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZGOA-ItL9mQaUBuqf0LuPI
          claim_id: c_9Av50HmydSe3Hk4HAXV1sH
          source_id: s_5MV8WK4AC29qwKVdS7RJGr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TBZtLKQdaJM24ctzM119k8
        status: active
        display_name: 王瓉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_8ITTVQqyWRuRUMyqLv4pZn
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7M6h3ab5NFH4LaaR6byCGs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hsqXlodSoHnyVsXNdcy-e
          claim_id: c_8ITTVQqyWRuRUMyqLv4pZn
          source_id: s_-OPIeSwDIMgC3UGpGzpCwr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-OPIeSwDIMgC3UGpGzpCwr
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 292617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292617&o=json
            external_identifier: CBDB:292617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7M6h3ab5NFH4LaaR6byCGs
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_LlWG-uhsSJQ_X_B2F4yCaa
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8Lxn6k3S7fZusFzMBWkedV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WU2tXIilQvdxKEpB9R5RdY
          claim_id: c_LlWG-uhsSJQ_X_B2F4yCaa
          source_id: s_1L376Fo0c7bDu8Mlv-Z_0k
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1L376Fo0c7bDu8Mlv-Z_0k
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 292616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292616&o=json
            external_identifier: CBDB:292616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8Lxn6k3S7fZusFzMBWkedV
        status: active
        display_name: 王鎰
        merged_into_person_id: null
    - claim:
        id: c_FJMfqto5eV5aclQyccs4f2
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EMuZoC6o82HbhGFazsFZ4c
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0BlHD3-tYo5uex181-cQhC
          claim_id: c_FJMfqto5eV5aclQyccs4f2
          source_id: s_3nM2Vc4YFuAOtk82CuQ7mq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3nM2Vc4YFuAOtk82CuQ7mq
            source_type: api_record
            title: 中国历代人物传记资料库：王鍵（CBDB 292620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json
            external_identifier: CBDB:292620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EMuZoC6o82HbhGFazsFZ4c
        status: active
        display_name: 王鍵
        merged_into_person_id: null
    - claim:
        id: c_EI6hhvzzgTiH6MH6CE9ycq
        subject_person_id: p_5PGL3HfhnkubibTnY8wvjU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SzyxDXQLv1p4Nsv5jYqJTq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1q3U7_CT4RlSugtPFL3ac8
          claim_id: c_EI6hhvzzgTiH6MH6CE9ycq
          source_id: s_B7oNq3sSrVIM8RbQsi7lSQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202700 王釴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B7oNq3sSrVIM8RbQsi7lSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 292619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json
            external_identifier: CBDB:292619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SzyxDXQLv1p4Nsv5jYqJTq
        status: active
        display_name: 王欽
        merged_into_person_id: null
---

# 王釴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釴 | accepted |
| birth.date | 1499年 | accepted |
| bio.summary | 王釴（生于1499年），明人物。明清進士進士，籍贯福州中衛，入仕進士，曾任大理寺觀政。（中国历代人物传记资料库 CBDB 202700） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MjhM3ee1A3Kj24vm13PmPv | 王昇 | accepted |
| children | p_7yxFYuCPP32o5cFEtkkhZX | 王治 | accepted |
| spouses | p_H5td9BKYZC5uWdeAwp14Nj | 陳氏 | accepted |
| ancestors | p_Mb1gBfifYJJm1XEHgSa3aa | 王智 | accepted |
| ancestors | p_TBZtLKQdaJM24ctzM119k8 | 王瓉 | accepted |
| other | p_7M6h3ab5NFH4LaaR6byCGs | 王鐸 | accepted |
| other | p_8Lxn6k3S7fZusFzMBWkedV | 王鎰 | accepted |
| other | p_EMuZoC6o82HbhGFazsFZ4c | 王鍵 | accepted |
| other | p_SzyxDXQLv1p4Nsv5jYqJTq | 王欽 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王釴妻)（CBDB 292615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292615&o=json)
- [中国历代人物传记资料库：王鐸（CBDB 292617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292617&o=json)
- [中国历代人物传记资料库：王鍵（CBDB 292620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292620&o=json)
- [中国历代人物传记资料库：王欽（CBDB 292619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292619&o=json)
- [中国历代人物传记资料库：王釴（CBDB 202700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202700&o=json)
- [中国历代人物传记资料库：王鎰（CBDB 292616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292616&o=json)
