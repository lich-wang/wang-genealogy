---
schema: wang-person/v1
id: p_q3ewFUkH4tvUNYqQiNKdGz
status: active
merged_into: null
display_name: 王邦憲
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fNkeNDhiN2tebEzq6LbenJ
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vhknSMbTkHatKoAEdHgmUs
          claim_id: c_fNkeNDhiN2tebEzq6LbenJ
          source_id: s_GJqFtVwAXXnju2DayqWmKq
          stance: supports
          locator: CBDB:228102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228102）
          source: &a1
            id: s_GJqFtVwAXXnju2DayqWmKq
            source_type: api_record
            title: 中国历代人物传记资料库：王邦憲（CBDB 228102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228102&o=json
            external_identifier: CBDB:228102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.552Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPsaoJp7Ss4b3w3E5GHeZ7
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦憲，明人物。萬曆五年進士，籍贯耀州，曾任府通判、通判。（中国历代人物传记资料库 CBDB 228102）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oQMwFYOvGOTy1F8M4QqFzs
          claim_id: c_QPsaoJp7Ss4b3w3E5GHeZ7
          source_id: s_GJqFtVwAXXnju2DayqWmKq
          stance: supports
          locator: CBDB:228102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zFTmFPsJQQT2mO20_pmhLQ
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Xo0QKaMvJSGslnHmTpQBz
          claim_id: c_zFTmFPsJQQT2mO20_pmhLQ
          source_id: s_GJqFtVwAXXnju2DayqWmKq
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h3Q7yK4WppDDdJLx2W9dJW
        status: active
        display_name: 王圖
        merged_into_person_id: null
    - claim:
        id: c_FkwqpiLt1Ri7SvTVnk7jNw
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iLixoAts3OIc0XNxNZjjhP
          claim_id: c_FkwqpiLt1Ri7SvTVnk7jNw
          source_id: s_GJqFtVwAXXnju2DayqWmKq
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2aW2r8VNf284ord2Teaqx
        status: active
        display_name: 王國
        merged_into_person_id: null
    - claim:
        id: c_utcYn1-3eVjQQmlSH9dvCI
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4XWri83FG2z9S8DFbEsTuR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypL3xwijDio8_6oF8tO3wj
          claim_id: c_utcYn1-3eVjQQmlSH9dvCI
          source_id: s_WC0fbPO8C-0TBy1F6Hewwu
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王圍 与 王圖 为同胞（CBDB 记「兄」），王圖 之父／母即 王圍 之父／母。
          source:
            id: s_WC0fbPO8C-0TBy1F6Hewwu
            source_type: api_record
            title: 中国历代人物传记资料库：王圍（CBDB 228112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json
            external_identifier: CBDB:228112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4XWri83FG2z9S8DFbEsTuR
        status: active
        display_name: 王圍
        merged_into_person_id: null
    - claim:
        id: c_wgcGd7QHMOjTZNcbhMKVsk
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6pj24W94QvfLXe9bMDj76c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EOLpGD47S4eNdUmSyaIhFs
          claim_id: c_wgcGd7QHMOjTZNcbhMKVsk
          source_id: s_jy01ysNI_-_TD_22PFaowv
          stance: supports
          locator: CBDB：兄弟 王國（126690）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王田 与 王國 为同胞（CBDB 记「兄」），王國 之父／母即 王田 之父／母。
          source:
            id: s_jy01ysNI_-_TD_22PFaowv
            source_type: api_record
            title: 中国历代人物传记资料库：王田（CBDB 217297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json
            external_identifier: CBDB:217297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6pj24W94QvfLXe9bMDj76c
        status: active
        display_name: 王田
        merged_into_person_id: null
    - claim:
        id: c_NeGWAtW4RBOCc9mvHyNhe7
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FaLwth23AGSDh2qKnKC6N9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGDcPfCZxBj7Oq_9CnFrbO
          claim_id: c_NeGWAtW4RBOCc9mvHyNhe7
          source_id: s_m3r1pcUaDriQibhXU0yOe8
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王圜 与 王圖 为同胞（CBDB 记「弟」），王圖 之父／母即 王圜 之父／母。
          source:
            id: s_m3r1pcUaDriQibhXU0yOe8
            source_type: api_record
            title: 中国历代人物传记资料库：王圜（CBDB 228110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json
            external_identifier: CBDB:228110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FaLwth23AGSDh2qKnKC6N9
        status: active
        display_name: 王圜
        merged_into_person_id: null
    - claim:
        id: c_6e_GeON8X0Lb_jyqVHB8-k
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XPgYCdMPbLmW8LUc1RXv9S
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YttBq_Ouj3yQSd_D9v7knt
          claim_id: c_6e_GeON8X0Lb_jyqVHB8-k
          source_id: s_kzurMRtq__ccXl2ifvckRk
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王萃 与 王圖 为同胞（CBDB 记「兄」），王圖 之父／母即 王萃 之父／母。
          source:
            id: s_kzurMRtq__ccXl2ifvckRk
            source_type: api_record
            title: 中国历代人物传记资料库：王萃（CBDB 228111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228111&o=json
            external_identifier: CBDB:228111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XPgYCdMPbLmW8LUc1RXv9S
        status: active
        display_name: 王萃
        merged_into_person_id: null
    - claim:
        id: c_Cq671EblFLgF-nMTL3lsGG
        subject_person_id: p_q3ewFUkH4tvUNYqQiNKdGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rWTtuppG5JgmFGHM97tE3k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6ePVvjARf-Nc_Pxx31Ah5F
          claim_id: c_Cq671EblFLgF-nMTL3lsGG
          source_id: s_eB6sIk9u53zrKFBTQ3GzpO
          stance: supports
          locator: CBDB：兄弟 王圖（123710）之父／母 王邦憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王海實 与 王圖 为同胞（CBDB 记「兄」），王圖 之父／母即 王海實 之父／母。
          source:
            id: s_eB6sIk9u53zrKFBTQ3GzpO
            source_type: api_record
            title: 中国历代人物传记资料库：王海實（CBDB 228113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json
            external_identifier: CBDB:228113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rWTtuppG5JgmFGHM97tE3k
        status: active
        display_name: 王海實
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王邦憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦憲 | accepted |
| bio.summary | 王邦憲，明人物。萬曆五年進士，籍贯耀州，曾任府通判、通判。（中国历代人物传记资料库 CBDB 228102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_h3Q7yK4WppDDdJLx2W9dJW | 王圖 | accepted |
| children | p_T2aW2r8VNf284ord2Teaqx | 王國 | accepted |
| children | p_4XWri83FG2z9S8DFbEsTuR | 王圍 | accepted |
| children | p_6pj24W94QvfLXe9bMDj76c | 王田 | accepted |
| children | p_FaLwth23AGSDh2qKnKC6N9 | 王圜 | accepted |
| children | p_XPgYCdMPbLmW8LUc1RXv9S | 王萃 | accepted |
| children | p_rWTtuppG5JgmFGHM97tE3k | 王海實 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦憲（CBDB 228102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228102&o=json)
- [中国历代人物传记资料库：王萃（CBDB 228111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228111&o=json)
- [中国历代人物传记资料库：王海實（CBDB 228113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228113&o=json)
- [中国历代人物传记资料库：王圜（CBDB 228110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228110&o=json)
- [中国历代人物传记资料库：王田（CBDB 217297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json)
- [中国历代人物传记资料库：王圍（CBDB 228112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228112&o=json)
