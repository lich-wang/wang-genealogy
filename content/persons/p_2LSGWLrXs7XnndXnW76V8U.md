---
schema: wang-person/v1
id: p_2LSGWLrXs7XnndXnW76V8U
status: active
merged_into: null
display_name: 王統
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5q7VYaAvdAshWkcgYuUD9x
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsBMwdNSSGqkfNp9WCd8h7
          claim_id: c_5q7VYaAvdAshWkcgYuUD9x
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: CBDB:200725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200725）
          source: &a1
            id: s_FzHANRPNeNFZ34nEd8FtEx
            source_type: api_record
            title: 中国历代人物传记资料库：王統（CBDB 200725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json
            external_identifier: CBDB:200725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_x75vsGgzRDtqPSWJCEkuvh
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1451年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7sNDDvCqcNwBgf2DjWKF4
          claim_id: c_x75vsGgzRDtqPSWJCEkuvh
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
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
        id: c_Bq9LSbxsiy4hJKsGXEk6c9
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統（生于1451年），明人物。明清進士進士，籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 200725）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ctcbU-xG3d1An_8sDbssnh
          claim_id: c_Bq9LSbxsiy4hJKsGXEk6c9
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: CBDB:200725
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DDExLOZw-CBhbG2XosvsZ7
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ulBp3xNfivQxawPqX1Vra2
          claim_id: c_DDExLOZw-CBhbG2XosvsZ7
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HxJiGj8JHn8DhGEqa1wJaa
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XdZo_vATX8_P31O8j944GU
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Qs82NSfkRxV82SHeQ1eQhc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__WeHEidmG9V4w23wJZrMdi
          claim_id: c_XdZo_vATX8_P31O8j944GU
          source_id: s_QTwLECA0gATDI9zMVPZSWu
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QTwLECA0gATDI9zMVPZSWu
            source_type: api_record
            title: 中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json
            external_identifier: CBDB:261993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Qs82NSfkRxV82SHeQ1eQhc
        status: active
        display_name: 饒氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_I03NHMrpegyFHpjf8tZWwy
        subject_person_id: p_MxjAUiWBNpbJEtL1inDQQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bLNRODPm3qh5NBUC5oWFZN
          claim_id: c_I03NHMrpegyFHpjf8tZWwy
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_MxjAUiWBNpbJEtL1inDQQE
        status: active
        display_name: 王思敬
        merged_into_person_id: null
    - claim:
        id: c_Wv8uoBqpnAO2MmKGdhvV9U
        subject_person_id: p_VynyhNxLVZm8KKMYzz5BcS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LSGWLrXs7XnndXnW76V8U
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FpzTbc5e-5lMgK535_pjPl
          claim_id: c_Wv8uoBqpnAO2MmKGdhvV9U
          source_id: s_FzHANRPNeNFZ34nEd8FtEx
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VynyhNxLVZm8KKMYzz5BcS
        status: active
        display_name: 王汝為
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_vPkKrQqBSuifaGoqg4l4q5
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_5CL4Wu3NXG9SDC4HABb7b5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAf5WRkP7IT8nbtbQE_aVH
          claim_id: c_vPkKrQqBSuifaGoqg4l4q5
          source_id: s_AcGiE0soEZHi1ysiMxY130
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AcGiE0soEZHi1ysiMxY130
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 261998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json
            external_identifier: CBDB:261998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5CL4Wu3NXG9SDC4HABb7b5
        status: active
        display_name: 王亨
        merged_into_person_id: null
    - claim:
        id: c_WXHGC6pxxwdRlXVRfYyW4l
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9doFnakix3pR8ZuH19dCpz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_byUiYihtIU4YqXqSbMvxDi
          claim_id: c_WXHGC6pxxwdRlXVRfYyW4l
          source_id: s_vdSKJIjGbaJr3w7Ruu7qgh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vdSKJIjGbaJr3w7Ruu7qgh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 262000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json
            external_identifier: CBDB:262000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9doFnakix3pR8ZuH19dCpz
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_MGwWN7iVpo_Y0zK7enJbzM
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mUiTHM0ZVJRykWAlZpeS0
          claim_id: c_MGwWN7iVpo_Y0zK7enJbzM
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F1dDe3PyFQrT9iTGfXubC5
        status: active
        display_name: 王昌
        merged_into_person_id: null
    - claim:
        id: c_zsW1xfFB2l0QnKbnh5sbW3
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KoJBbuqBnB7yzcpthMhzSh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QdKcqG-kS5vCLFQiHSzB6Z
          claim_id: c_zsW1xfFB2l0QnKbnh5sbW3
          source_id: s_KixqWyH6gy2Ve82AZSFnWj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KixqWyH6gy2Ve82AZSFnWj
            source_type: api_record
            title: 中国历代人物传记资料库：王盛（CBDB 261997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json
            external_identifier: CBDB:261997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KoJBbuqBnB7yzcpthMhzSh
        status: active
        display_name: 王盛
        merged_into_person_id: null
    - claim:
        id: c_gAZM8gGN77nNT_gpSUA-SC
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eYhELx3YtLzHwjVVCXnH54
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tz4m_gj0ZBMKMSOg0O9uDZ
          claim_id: c_gAZM8gGN77nNT_gpSUA-SC
          source_id: s_tlZmBCJGXPAO3qLU7fKCr5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tlZmBCJGXPAO3qLU7fKCr5
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 262005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json
            external_identifier: CBDB:262005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eYhELx3YtLzHwjVVCXnH54
        status: active
        display_name: 王節
        merged_into_person_id: null
    - claim:
        id: c_MDstmXWXen8v6iiOIHYETX
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k7nhfJAUjNcE3wixC7oDAa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9_7bdQjjPngjtP1Ym1P9aO
          claim_id: c_MDstmXWXen8v6iiOIHYETX
          source_id: s_n_CkjBfSKpHo-W5EVR51tR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n_CkjBfSKpHo-W5EVR51tR
            source_type: api_record
            title: 中国历代人物传记资料库：王相（CBDB 262002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json
            external_identifier: CBDB:262002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k7nhfJAUjNcE3wixC7oDAa
        status: active
        display_name: 王相
        merged_into_person_id: null
    - claim:
        id: c_jUyUK6BxYl18pj_oJYogi4
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o3Xigs9eMCnEv65q1jNX6G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3uLJApK9muJ_yLFrdOKC5c
          claim_id: c_jUyUK6BxYl18pj_oJYogi4
          source_id: s_bDw2O5bpLcEqkwXaUrAM9s
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bDw2O5bpLcEqkwXaUrAM9s
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 262004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262004&o=json
            external_identifier: CBDB:262004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o3Xigs9eMCnEv65q1jNX6G
        status: active
        display_name: 王賓
        merged_into_person_id: null
    - claim:
        id: c_PH7EYTuoWroSmpMgmK3XyP
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oj3b181MxpZPn44WggJ1nz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jn7R1qhEuAn5Tks599EOa-
          claim_id: c_PH7EYTuoWroSmpMgmK3XyP
          source_id: s_TN3akkbC4M9DAaXwFVhiRb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TN3akkbC4M9DAaXwFVhiRb
            source_type: api_record
            title: 中国历代人物传记资料库：王謹（CBDB 262001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262001&o=json
            external_identifier: CBDB:262001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oj3b181MxpZPn44WggJ1nz
        status: active
        display_name: 王謹
        merged_into_person_id: null
    - claim:
        id: c_nklTh2liztBrMrCQGbomdX
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yKrfRkYB4UUwsccCzfGpkv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gzkAwHFUi13TBtuip-oPyV
          claim_id: c_nklTh2liztBrMrCQGbomdX
          source_id: s_F4Vm5gA8sYXrEf4TT0pFgW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F4Vm5gA8sYXrEf4TT0pFgW
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 261999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261999&o=json
            external_identifier: CBDB:261999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yKrfRkYB4UUwsccCzfGpkv
        status: active
        display_name: 王泰
        merged_into_person_id: null
---

# 王統

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統 | accepted |
| birth.date | 1451年 | accepted |
| bio.summary | 王統（生于1451年），明人物。明清進士進士，籍贯臨川，入仕進士。（中国历代人物传记资料库 CBDB 200725） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HxJiGj8JHn8DhGEqa1wJaa | 王大綸 | accepted |
| spouses | p_Qs82NSfkRxV82SHeQ1eQhc | 饒氏 | accepted |
| ancestors | p_MxjAUiWBNpbJEtL1inDQQE | 王思敬 | accepted |
| ancestors | p_VynyhNxLVZm8KKMYzz5BcS | 王汝為 | accepted |
| other | p_5CL4Wu3NXG9SDC4HABb7b5 | 王亨 | accepted |
| other | p_9doFnakix3pR8ZuH19dCpz | 王瑞 | accepted |
| other | p_F1dDe3PyFQrT9iTGfXubC5 | 王昌 | accepted |
| other | p_KoJBbuqBnB7yzcpthMhzSh | 王盛 | accepted |
| other | p_eYhELx3YtLzHwjVVCXnH54 | 王節 | accepted |
| other | p_k7nhfJAUjNcE3wixC7oDAa | 王相 | accepted |
| other | p_o3Xigs9eMCnEv65q1jNX6G | 王賓 | accepted |
| other | p_oj3b181MxpZPn44WggJ1nz | 王謹 | accepted |
| other | p_yKrfRkYB4UUwsccCzfGpkv | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：饒氏(王統妻)（CBDB 261993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261993&o=json)
- [中国历代人物传记资料库：王賓（CBDB 262004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262004&o=json)
- [中国历代人物传记资料库：王昌（CBDB 261996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json)
- [中国历代人物传记资料库：王亨（CBDB 261998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261998&o=json)
- [中国历代人物传记资料库：王節（CBDB 262005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262005&o=json)
- [中国历代人物传记资料库：王謹（CBDB 262001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262001&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 262000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262000&o=json)
- [中国历代人物传记资料库：王盛（CBDB 261997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261997&o=json)
- [中国历代人物传记资料库：王泰（CBDB 261999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261999&o=json)
- [中国历代人物传记资料库：王統（CBDB 200725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200725&o=json)
- [中国历代人物传记资料库：王相（CBDB 262002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262002&o=json)
