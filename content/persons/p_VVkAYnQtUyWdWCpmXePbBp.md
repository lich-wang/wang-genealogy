---
schema: wang-person/v1
id: p_VVkAYnQtUyWdWCpmXePbBp
status: active
merged_into: null
display_name: 王鐸
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bavzfqoUFoT7X6dw8HJf3r
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aJTAGEmk2dEAUB7CFkUxiX
          claim_id: c_bavzfqoUFoT7X6dw8HJf3r
          source_id: s_YdhnBwtxTzT7TMRW5KU1Mp
          stance: supports
          locator: CBDB:126884
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126884）
          source: &a1
            id: s_YdhnBwtxTzT7TMRW5KU1Mp
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 126884）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126884&o=json
            external_identifier: CBDB:126884
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3Jhb4UEfpHRoAoMEgPK3hC
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鐸，明人物。明清進士進士，籍贯岳池，入仕進士。（中国历代人物传记资料库 CBDB 126884）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SDEHA8Z_Z5ArUZxY0i1fB8
          claim_id: c_3Jhb4UEfpHRoAoMEgPK3hC
          source_id: s_YdhnBwtxTzT7TMRW5KU1Mp
          stance: supports
          locator: CBDB:126884
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_63kiWGZr1YyMVKKjmzkDTs
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n9VJPY8gfrj_BsiszjGW2F
          claim_id: c_63kiWGZr1YyMVKKjmzkDTs
          source_id: s_2tQM5Y59KKQZ9wDPXe15f9
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2tQM5Y59KKQZ9wDPXe15f9
            source_type: api_record
            title: 中国历代人物传记资料库：王希仙（CBDB 231325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231325&o=json
            external_identifier: CBDB:231325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tmHpBVPPGJeDHKDFHFAyWx
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6mc4HtMycQwT9weNyr5ZMT
        subject_person_id: p_tqsFqbzif5j3BcpmAE3NTe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cGeJldYWs6PkTNfy5Xz-Bx
          claim_id: c_6mc4HtMycQwT9weNyr5ZMT
          source_id: s_t5Fc96JECmMMNzz44JGHA1
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_t5Fc96JECmMMNzz44JGHA1
            source_type: api_record
            title: 中国历代人物传记资料库：王泰文（CBDB 231324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231324&o=json
            external_identifier: CBDB:231324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tqsFqbzif5j3BcpmAE3NTe
        status: active
        display_name: 王泰文
        merged_into_person_id: null
    - claim:
        id: c_5JOiCdNiWuhgc3vc81TqHt
        subject_person_id: p_WMpPQWuP95KhE12QYHynna
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eEYI1xYt4Fo85Lumuw6dOn
          claim_id: c_5JOiCdNiWuhgc3vc81TqHt
          source_id: s_v8xci4wiXLjKyDzBCdhTTu
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v8xci4wiXLjKyDzBCdhTTu
            source_type: api_record
            title: 中国历代人物传记资料库：王仁政（CBDB 231323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231323&o=json
            external_identifier: CBDB:231323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_WMpPQWuP95KhE12QYHynna
        status: active
        display_name: 王仁政
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Di96QiYzvoV6E3Iso3iU_1
        subject_person_id: p_SFyWJ7YP3SQUztyx8ERULj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8t0wmPQo_1Mlta4KL2lbc
          claim_id: c_Di96QiYzvoV6E3Iso3iU_1
          source_id: s_UP2jEmh4fsVeL47baQH0lE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UP2jEmh4fsVeL47baQH0lE
            source_type: api_record
            title: 中国历代人物传记资料库：王子溫（CBDB 231328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231328&o=json
            external_identifier: CBDB:231328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SFyWJ7YP3SQUztyx8ERULj
        status: active
        display_name: 王子溫
        merged_into_person_id: null
    - claim:
        id: c_N3EK6jMEZG2aOvx69IwwSz
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aK7tq29fGZW6q5ktaT1cop
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4pX-NJ9UhIVpgrJpIpxWf
          claim_id: c_N3EK6jMEZG2aOvx69IwwSz
          source_id: s_AFpY2Qu_RK1-yhoTUT0ubK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AFpY2Qu_RK1-yhoTUT0ubK
            source_type: api_record
            title: 中国历代人物传记资料库：王子敬（CBDB 231334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231334&o=json
            external_identifier: CBDB:231334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aK7tq29fGZW6q5ktaT1cop
        status: active
        display_name: 王子敬
        merged_into_person_id: null
    - claim:
        id: c_B5Jd0HfiqkYd87l56hf0mc
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRU0gIFuzGsflJwwBFhxYe
          claim_id: c_B5Jd0HfiqkYd87l56hf0mc
          source_id: s_UmjBuILhThnn75tOATtYyQ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UmjBuILhThnn75tOATtYyQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子恭（CBDB 231329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json
            external_identifier: CBDB:231329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJQfcCqRsYroQb1qYGEZCo
        status: active
        display_name: 王子恭
        merged_into_person_id: null
    - claim:
        id: c_OoDbZrGRjpA4NaJ8w55i4r
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fXNsZeJf7aMepd61HYHDyM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C-s0Bzz_2qU0rqXKnWqMBC
          claim_id: c_OoDbZrGRjpA4NaJ8w55i4r
          source_id: s_ppnOZW6YBRfe_qGHzELFi0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ppnOZW6YBRfe_qGHzELFi0
            source_type: api_record
            title: 中国历代人物传记资料库：王子謙（CBDB 231335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json
            external_identifier: CBDB:231335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fXNsZeJf7aMepd61HYHDyM
        status: active
        display_name: 王子謙
        merged_into_person_id: null
    - claim:
        id: c_vmj3_XHnrOwpCj0WbmA2Y5
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gSzDVPGT2BN41d8fohDJuo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hYOEtEgnN5YdTRqU7ioqux
          claim_id: c_vmj3_XHnrOwpCj0WbmA2Y5
          source_id: s_1_iEWCQry-6O62PBE7oLoj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1_iEWCQry-6O62PBE7oLoj
            source_type: api_record
            title: 中国历代人物传记资料库：王子儉（CBDB 231330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231330&o=json
            external_identifier: CBDB:231330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gSzDVPGT2BN41d8fohDJuo
        status: active
        display_name: 王子儉
        merged_into_person_id: null
    - claim:
        id: c_dTUDJHy3XI3GTxpz8F0yWx
        subject_person_id: p_VVkAYnQtUyWdWCpmXePbBp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPAQbJtd3hC95EJh54wiF8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Cvn30qAIUv1gEPKM3AGbY
          claim_id: c_dTUDJHy3XI3GTxpz8F0yWx
          source_id: s_uUsj5v9SmEYuvGcjpKiJYE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126884 王鐸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uUsj5v9SmEYuvGcjpKiJYE
            source_type: api_record
            title: 中国历代人物传记资料库：王子讓（CBDB 231331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json
            external_identifier: CBDB:231331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wPAQbJtd3hC95EJh54wiF8
        status: active
        display_name: 王子讓
        merged_into_person_id: null
---

# 王鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鐸 | accepted |
| bio.summary | 王鐸，明人物。明清進士進士，籍贯岳池，入仕進士。（中国历代人物传记资料库 CBDB 126884） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmHpBVPPGJeDHKDFHFAyWx | 王希仙 | accepted |
| ancestors | p_tqsFqbzif5j3BcpmAE3NTe | 王泰文 | accepted |
| ancestors | p_WMpPQWuP95KhE12QYHynna | 王仁政 | accepted |
| other | p_SFyWJ7YP3SQUztyx8ERULj | 王子溫 | accepted |
| other | p_aK7tq29fGZW6q5ktaT1cop | 王子敬 | accepted |
| other | p_fJQfcCqRsYroQb1qYGEZCo | 王子恭 | accepted |
| other | p_fXNsZeJf7aMepd61HYHDyM | 王子謙 | accepted |
| other | p_gSzDVPGT2BN41d8fohDJuo | 王子儉 | accepted |
| other | p_wPAQbJtd3hC95EJh54wiF8 | 王子讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 126884）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126884&o=json)
- [中国历代人物传记资料库：王仁政（CBDB 231323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231323&o=json)
- [中国历代人物传记资料库：王泰文（CBDB 231324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231324&o=json)
- [中国历代人物传记资料库：王希仙（CBDB 231325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231325&o=json)
- [中国历代人物传记资料库：王子恭（CBDB 231329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json)
- [中国历代人物传记资料库：王子儉（CBDB 231330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231330&o=json)
- [中国历代人物传记资料库：王子敬（CBDB 231334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231334&o=json)
- [中国历代人物传记资料库：王子謙（CBDB 231335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json)
- [中国历代人物传记资料库：王子讓（CBDB 231331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json)
- [中国历代人物传记资料库：王子溫（CBDB 231328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231328&o=json)
