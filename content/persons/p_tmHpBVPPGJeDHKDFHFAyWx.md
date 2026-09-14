---
schema: wang-person/v1
id: p_tmHpBVPPGJeDHKDFHFAyWx
status: active
merged_into: null
display_name: 王希仙
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VaY8vxG3ZANGyHHK3iJUNG
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w38VnZx9Baekp9UkcHehES
          claim_id: c_VaY8vxG3ZANGyHHK3iJUNG
          source_id: s_2tQM5Y59KKQZ9wDPXe15f9
          stance: supports
          locator: CBDB:231325
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231325）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g4yHZMaMPxw41DrwtKyBUd
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希仙，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231325）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iQRkGFjMHj4vHzcMB2TsMu
          claim_id: c_g4yHZMaMPxw41DrwtKyBUd
          source_id: s_2tQM5Y59KKQZ9wDPXe15f9
          stance: supports
          locator: CBDB:231325
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
    - claim:
        id: c_8gNUT2Y3RXQVaFF13RCG8o
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SFyWJ7YP3SQUztyx8ERULj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9CFTGEnjvujBYTQOqudKJy
          claim_id: c_8gNUT2Y3RXQVaFF13RCG8o
          source_id: s_UP2jEmh4fsVeL47baQH0lE
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子溫 与 王鐸 为同胞（CBDB 记「弟」），王鐸 之父／母即 王子溫 之父／母。
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
        id: c_dZhwzwP44lgZyGXCPeZq63
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aK7tq29fGZW6q5ktaT1cop
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vxAmPeK8XFKgMB9Ce25xfU
          claim_id: c_dZhwzwP44lgZyGXCPeZq63
          source_id: s_AFpY2Qu_RK1-yhoTUT0ubK
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子敬 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子敬 之父／母。
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
        id: c_2O0d4TtScF-MqyLLgf2rKU
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fJQfcCqRsYroQb1qYGEZCo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVIpYq5VosZ4GMdSlLgjYT
          claim_id: c_2O0d4TtScF-MqyLLgf2rKU
          source_id: s_UmjBuILhThnn75tOATtYyQ
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子恭 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子恭 之父／母。
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
        id: c_VeInvJditm5t0fdBJbFgG7
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fXNsZeJf7aMepd61HYHDyM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtovVhDKY1mHoag9AlV3Kb
          claim_id: c_VeInvJditm5t0fdBJbFgG7
          source_id: s_ppnOZW6YBRfe_qGHzELFi0
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子謙 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子謙 之父／母。
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
        id: c_yIwa06SDcOdlUYIGgI_3YD
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gSzDVPGT2BN41d8fohDJuo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PWBkBwMgqATNxh7PXcZFSu
          claim_id: c_yIwa06SDcOdlUYIGgI_3YD
          source_id: s_1_iEWCQry-6O62PBE7oLoj
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子儉 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子儉 之父／母。
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
        id: c_1xTUQKgBjqlV4FUaZ_IxHb
        subject_person_id: p_tmHpBVPPGJeDHKDFHFAyWx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPAQbJtd3hC95EJh54wiF8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GhkR2vCNkXJ1z8JNRqbm6R
          claim_id: c_1xTUQKgBjqlV4FUaZ_IxHb
          source_id: s_uUsj5v9SmEYuvGcjpKiJYE
          stance: supports
          locator: CBDB：兄弟 王鐸（126884）之父／母 王希仙
          quotation: null
          interpretation_note: 由兄弟关系推断：王子讓 与 王鐸 为同胞（CBDB 记「兄」），王鐸 之父／母即 王子讓 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希仙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希仙 | accepted |
| bio.summary | 王希仙，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231325） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |
| children | p_SFyWJ7YP3SQUztyx8ERULj | 王子溫 | accepted |
| children | p_aK7tq29fGZW6q5ktaT1cop | 王子敬 | accepted |
| children | p_fJQfcCqRsYroQb1qYGEZCo | 王子恭 | accepted |
| children | p_fXNsZeJf7aMepd61HYHDyM | 王子謙 | accepted |
| children | p_gSzDVPGT2BN41d8fohDJuo | 王子儉 | accepted |
| children | p_wPAQbJtd3hC95EJh54wiF8 | 王子讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希仙（CBDB 231325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231325&o=json)
- [中国历代人物传记资料库：王子恭（CBDB 231329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231329&o=json)
- [中国历代人物传记资料库：王子儉（CBDB 231330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231330&o=json)
- [中国历代人物传记资料库：王子敬（CBDB 231334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231334&o=json)
- [中国历代人物传记资料库：王子謙（CBDB 231335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231335&o=json)
- [中国历代人物传记资料库：王子讓（CBDB 231331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231331&o=json)
- [中国历代人物传记资料库：王子溫（CBDB 231328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231328&o=json)
