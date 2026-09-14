---
schema: wang-person/v1
id: p_dQ1sDfXNogRpbAJzcsg5My
status: active
merged_into: null
display_name: 王聰
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SG4E9oeNqNwox6P7pLGDtg
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GZwspHD1UWGGT3myU5PjKF
          claim_id: c_SG4E9oeNqNwox6P7pLGDtg
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
          stance: supports
          locator: CBDB:198493
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198493）
          source: &a1
            id: s_NBFB9Qn36bPn2hky8xfVPo
            source_type: api_record
            title: 中国历代人物传记资料库：王聰（CBDB 198493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198493&o=json
            external_identifier: CBDB:198493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.497Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_u84ykmXRVkoedRk2NHSeCD
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1418年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ua7ZoREY3F3AnVTwK7U4Qx
          claim_id: c_u84ykmXRVkoedRk2NHSeCD
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
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
        id: c_CfKGc7w13fw8hC2bZpw658
        subject_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聰（生于1418年），明人物。景泰五年進士，籍贯三河，入仕進士。（中国历代人物传记资料库 CBDB 198493）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SZrfexPdAPD0yKZ_fPPCsJ
          claim_id: c_CfKGc7w13fw8hC2bZpw658
          source_id: s_NBFB9Qn36bPn2hky8xfVPo
          stance: supports
          locator: CBDB:198493
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_k926WZfXv2W86ocouaItMH
        subject_person_id: p_3NjU7eZvopD3jSxgGAoTdh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UsNCRojINFg89OJ2bsYxm9
          claim_id: c_k926WZfXv2W86ocouaItMH
          source_id: s_BAV4Wu8T2JXpbD7Zqsk4cY
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百九十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BAV4Wu8T2JXpbD7Zqsk4cY
            source_type: api_record
            title: 中国历代人物传记资料库：王惟善（CBDB 279786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json
            external_identifier: CBDB:279786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3NjU7eZvopD3jSxgGAoTdh
        status: active
        display_name: 王惟善
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LW6QzVeAgass6VXUyOZ7Pz
        subject_person_id: p_yGUq9dnDLNfTAUD6QVNP1F
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1X2ZukyS8_xBrCOP6z3x2
          claim_id: c_LW6QzVeAgass6VXUyOZ7Pz
          source_id: s_1z9DzMb2hNHjWLCtzdNmNX
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百九十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1z9DzMb2hNHjWLCtzdNmNX
            source_type: api_record
            title: 中国历代人物传记资料库：王思齊（CBDB 279775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279775&o=json
            external_identifier: CBDB:279775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.991Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yGUq9dnDLNfTAUD6QVNP1F
        status: active
        display_name: 王思齊
        merged_into_person_id: null
    - claim:
        id: c_bRGrk586wj1sB70UPDGylg
        subject_person_id: p_VWi6QFXPAVphznHYANEusb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTw-H4BFTT2Lxt3puBlbZl
          claim_id: c_bRGrk586wj1sB70UPDGylg
          source_id: s_THcRnzHfVWKB5j3aCkNCZi
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百九十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_THcRnzHfVWKB5j3aCkNCZi
            source_type: api_record
            title: 中国历代人物传记资料库：王代亨（CBDB 279764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279764&o=json
            external_identifier: CBDB:279764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_VWi6QFXPAVphznHYANEusb
        status: active
        display_name: 王代亨
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_JYQ0dnBhfXDpP9ExGv1ORk
        subject_person_id: p_QzsNwCxppT6oan4Wpvxqi2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eW8An7tPhnGt4UbKC3RUUk
          claim_id: c_JYQ0dnBhfXDpP9ExGv1ORk
          source_id: s_6VvA9pxa34XwKP8MrHudKk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198493 王聰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6VvA9pxa34XwKP8MrHudKk
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 279830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json
            external_identifier: CBDB:279830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzsNwCxppT6oan4Wpvxqi2
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_Y30y3wn6hklJkG5spNpaJB
        subject_person_id: p_cApstQaJnLxBvKr4GS1pC9
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dQ1sDfXNogRpbAJzcsg5My
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8DzvmYyZyR2QMDr6xVQOaM
          claim_id: c_Y30y3wn6hklJkG5spNpaJB
          source_id: s_HFMVXRRqEsriiRsrUtQp3G
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198493 王聰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HFMVXRRqEsriiRsrUtQp3G
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 279819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279819&o=json
            external_identifier: CBDB:279819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cApstQaJnLxBvKr4GS1pC9
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王聰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聰 | accepted |
| birth.date | 1418年 | accepted |
| bio.summary | 王聰（生于1418年），明人物。景泰五年進士，籍贯三河，入仕進士。（中国历代人物传记资料库 CBDB 198493） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NjU7eZvopD3jSxgGAoTdh | 王惟善 | accepted |
| ancestors | p_yGUq9dnDLNfTAUD6QVNP1F | 王思齊 | accepted |
| ancestors | p_VWi6QFXPAVphznHYANEusb | 王代亨 | accepted |
| other | p_QzsNwCxppT6oan4Wpvxqi2 | 王傑 | accepted |
| other | p_cApstQaJnLxBvKr4GS1pC9 | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聰（CBDB 198493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198493&o=json)
- [中国历代人物传记资料库：王代亨（CBDB 279764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279764&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 279819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279819&o=json)
- [中国历代人物传记资料库：王傑（CBDB 279830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279830&o=json)
- [中国历代人物传记资料库：王思齊（CBDB 279775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279775&o=json)
- [中国历代人物传记资料库：王惟善（CBDB 279786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279786&o=json)
