---
schema: wang-person/v1
id: p_aabBxXPLcM6N6VjGC9FrrY
status: active
merged_into: null
display_name: 王琳
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7vXxSwHKjoDqxGcFRfqV9y
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D7Mdk1qVuD4e956B3iVPDo
          claim_id: c_7vXxSwHKjoDqxGcFRfqV9y
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: CBDB:126709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126709）
          source: &a1
            id: s_DxH93UieDPA9NdBmWVHZkb
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 126709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json
            external_identifier: CBDB:126709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tx925N9RZU526TzqTBfEdd
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，明人物。明清進士進士，籍贯嘉善，入仕進士。（中国历代人物传记资料库 CBDB 126709）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ev-FfcjkDhTbqrA38ON-DB
          claim_id: c_Tx925N9RZU526TzqTBfEdd
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: CBDB:126709
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XRk4Q5iCT3-lIADkwSOPi9
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tcse5frLZiwaidZzCmRSoB
          claim_id: c_XRk4Q5iCT3-lIADkwSOPi9
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_c9qMmjg6ShUcbRMz8upxQ9
        status: active
        display_name: 王景明
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_JRRGn3FZEzCuT4A2bcOuRl
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_wvLsfsu6Gt7b9HzRNKcwBz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hWRRcj2dcmHC9i_q_K3Pd1
          claim_id: c_JRRGn3FZEzCuT4A2bcOuRl
          source_id: s_BMv1R_ETwvqmefwk_vKjfK
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BMv1R_ETwvqmefwk_vKjfK
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王琳妻)（CBDB 255294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255294&o=json
            external_identifier: CBDB:255294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_wvLsfsu6Gt7b9HzRNKcwBz
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_D3oudUJJnuH8bLDOJX-Uy9
        subject_person_id: p_LwpbLAjs1GpyXx1VwqVnm9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N4Uj4JLrko1tTiJDiWkXgb
          claim_id: c_D3oudUJJnuH8bLDOJX-Uy9
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LwpbLAjs1GpyXx1VwqVnm9
        status: active
        display_name: 王福賜
        merged_into_person_id: null
    - claim:
        id: c_XKQ9wtNVpy2de3TBnrr-hL
        subject_person_id: p_iVsKoMKZ2pdBqdgY6tXGNE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LE8fjfR6krVH9WjE2o1_VX
          claim_id: c_XKQ9wtNVpy2de3TBnrr-hL
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iVsKoMKZ2pdBqdgY6tXGNE
        status: active
        display_name: 王以曾
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FsoRE9kApKFjUvpDzSsr_k
        subject_person_id: p_A9oLiaD4xcFsHGFj7fqFJN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ohDSYowN6SOcxPwtUKrPXK
          claim_id: c_FsoRE9kApKFjUvpDzSsr_k
          source_id: s_9KbyqvGXZze4LOaSH9FjDh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126709 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9KbyqvGXZze4LOaSH9FjDh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 255296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json
            external_identifier: CBDB:255296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A9oLiaD4xcFsHGFj7fqFJN
        status: active
        display_name: 王瑨
        merged_into_person_id: null
    - claim:
        id: c_quxyfnZGqT1Xvw5YOh0IQK
        subject_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5l9iVmrv-MXaMZ5gtlRe-N
          claim_id: c_quxyfnZGqT1Xvw5YOh0IQK
          source_id: s_ZegnjelONE0gqcRsKwRsq7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126709 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZegnjelONE0gqcRsKwRsq7
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 255297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json
            external_identifier: CBDB:255297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KN3PPHoaBhM5325Xwy9UqS
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_bWn_4TRnQMbNLaK_86fx-T
        subject_person_id: p_RUz3UvbxQozjfbEaf8NyYp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l1PoySBx3LSucj1rm4LB9N
          claim_id: c_bWn_4TRnQMbNLaK_86fx-T
          source_id: s_sCnWq5w-ElI3HJBbI1Owu1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126709 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sCnWq5w-ElI3HJBbI1Owu1
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 255298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255298&o=json
            external_identifier: CBDB:255298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RUz3UvbxQozjfbEaf8NyYp
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_CJ3KtXcTeX6iAN6I1GkKYQ
        subject_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pbocdTykK88XksMX8Ffw82
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJ0AOJxoLd9Oco_eTn2DZ_
          claim_id: c_CJ3KtXcTeX6iAN6I1GkKYQ
          source_id: s_2kaL8NXKX0hYQ8IkVj4_Ep
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126709 王琳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2kaL8NXKX0hYQ8IkVj4_Ep
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 255295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255295&o=json
            external_identifier: CBDB:255295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pbocdTykK88XksMX8Ffw82
        status: active
        display_name: 王瓊
        merged_into_person_id: null
---

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，明人物。明清進士進士，籍贯嘉善，入仕進士。（中国历代人物传记资料库 CBDB 126709） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c9qMmjg6ShUcbRMz8upxQ9 | 王景明 | accepted |
| spouses | p_wvLsfsu6Gt7b9HzRNKcwBz | 陳氏 | accepted |
| ancestors | p_LwpbLAjs1GpyXx1VwqVnm9 | 王福賜 | accepted |
| ancestors | p_iVsKoMKZ2pdBqdgY6tXGNE | 王以曾 | accepted |
| other | p_A9oLiaD4xcFsHGFj7fqFJN | 王瑨 | accepted |
| other | p_KN3PPHoaBhM5325Xwy9UqS | 王璿 | accepted |
| other | p_RUz3UvbxQozjfbEaf8NyYp | 王玉 | accepted |
| other | p_pbocdTykK88XksMX8Ffw82 | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王琳妻)（CBDB 255294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255294&o=json)
- [中国历代人物传记资料库：王瑨（CBDB 255296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json)
- [中国历代人物传记资料库：王琳（CBDB 126709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 255295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255295&o=json)
- [中国历代人物传记资料库：王璿（CBDB 255297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json)
- [中国历代人物传记资料库：王玉（CBDB 255298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255298&o=json)
