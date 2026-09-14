---
schema: wang-person/v1
id: p_T2aW2r8VNf284ord2Teaqx
status: active
merged_into: null
display_name: 王國
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N6aRwNP2ixA4J7sADunE8o
        subject_person_id: p_T2aW2r8VNf284ord2Teaqx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3tAaBBXKEPBPVH3AtQeFY2
          claim_id: c_N6aRwNP2ixA4J7sADunE8o
          source_id: s_3rrW8xKijPxHBfQz9coqkj
          stance: supports
          locator: CBDB:126690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126690）
          source: &a1
            id: s_3rrW8xKijPxHBfQz9coqkj
            source_type: api_record
            title: 中国历代人物传记资料库：王國（CBDB 126690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126690&o=json
            external_identifier: CBDB:126690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.127Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tZ7va6DPUndNGxExS1mYHH
        subject_person_id: p_T2aW2r8VNf284ord2Teaqx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國，明人物。籍贯耀州，身份为以疾廢、博學之人，入仕進士，曾任翰林院庶吉士、鴻臚寺卿、通政使。（中国历代人物传记资料库 CBDB 126690）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cPP097_k-uZXv8V0yM5PYH
          claim_id: c_tZ7va6DPUndNGxExS1mYHH
          source_id: s_3rrW8xKijPxHBfQz9coqkj
          stance: supports
          locator: CBDB:126690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_q3ewFUkH4tvUNYqQiNKdGz
        status: active
        display_name: 王邦憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_G3O4dRZjMB7kr00M-n-LuT
        subject_person_id: p_aRgUR2bV5G8GcADRgTUTHB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgikD62NYt0fjNMRyXBUUg
          claim_id: c_G3O4dRZjMB7kr00M-n-LuT
          source_id: s_AkDestfPH7cg592fhvVucB
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AkDestfPH7cg592fhvVucB
            source_type: api_record
            title: 中国历代人物传记资料库：王宗仁（CBDB 228101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228101&o=json
            external_identifier: CBDB:228101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.551Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aRgUR2bV5G8GcADRgTUTHB
        status: active
        display_name: 王宗仁
        merged_into_person_id: null
    - claim:
        id: c_SwFbY_zv46WOL_yati0WUa
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8Du-kWQX1Jr2-xe9CJqhg
          claim_id: c_SwFbY_zv46WOL_yati0WUa
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7RUJc6wJgzAYr9tf5bf15J
            source_type: api_record
            title: 中国历代人物传记资料库：王永寧（CBDB 228100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json
            external_identifier: CBDB:228100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LkKJK2kEArXGxvQn3KA1vQ
        status: active
        display_name: 王永寧
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_2HQI8jNWtqXSrn2_Ud9day
        subject_person_id: p_6pj24W94QvfLXe9bMDj76c
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W1OYzx7-wZUZ2amPZ83dxf
          claim_id: c_2HQI8jNWtqXSrn2_Ud9day
          source_id: s_jy01ysNI_-_TD_22PFaowv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126690 王國）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_mtvjeG5mbSJARuGKFUdTEL
        subject_person_id: p_T2aW2r8VNf284ord2Teaqx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XPgYCdMPbLmW8LUc1RXv9S
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7in0GphrFjz9ojbaHf3iSZ
          claim_id: c_mtvjeG5mbSJARuGKFUdTEL
          source_id: s_kzurMRtq__ccXl2ifvckRk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126690 王國）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
---

# 王國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國 | accepted |
| bio.summary | 王國，明人物。籍贯耀州，身份为以疾廢、博學之人，入仕進士，曾任翰林院庶吉士、鴻臚寺卿、通政使。（中国历代人物传记资料库 CBDB 126690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3ewFUkH4tvUNYqQiNKdGz | 王邦憲 | accepted |
| ancestors | p_aRgUR2bV5G8GcADRgTUTHB | 王宗仁 | accepted |
| ancestors | p_LkKJK2kEArXGxvQn3KA1vQ | 王永寧 | accepted |
| other | p_6pj24W94QvfLXe9bMDj76c | 王田 | accepted |
| other | p_XPgYCdMPbLmW8LUc1RXv9S | 王萃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦憲（CBDB 228102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228102&o=json)
- [中国历代人物传记资料库：王萃（CBDB 228111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228111&o=json)
- [中国历代人物传记资料库：王國（CBDB 126690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126690&o=json)
- [中国历代人物传记资料库：王田（CBDB 217297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217297&o=json)
- [中国历代人物传记资料库：王永寧（CBDB 228100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json)
- [中国历代人物传记资料库：王宗仁（CBDB 228101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228101&o=json)
