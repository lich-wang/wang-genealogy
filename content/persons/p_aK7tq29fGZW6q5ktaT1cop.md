---
schema: wang-person/v1
id: p_aK7tq29fGZW6q5ktaT1cop
status: active
merged_into: null
display_name: 王子敬
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H3C3fWySG2J4H3tGM1Yp5z
        subject_person_id: p_aK7tq29fGZW6q5ktaT1cop
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JMtQbQCy4UPTjFyF8nvcR5
          claim_id: c_H3C3fWySG2J4H3tGM1Yp5z
          source_id: s_JPsXJYCi3M5GXRxDtTAsaw
          stance: supports
          locator: CBDB:231334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231334）
          source: &a1
            id: s_JPsXJYCi3M5GXRxDtTAsaw
            source_type: api_record
            title: 中国历代人物传记资料库：王子敬（CBDB 231334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231334&o=json
            external_identifier: CBDB:231334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.643Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zi7Urw59oBiqqG8ZL43GLX
        subject_person_id: p_aK7tq29fGZW6q5ktaT1cop
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子敬，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231334）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LE4FaYCVcWbqL0XSVtfdfn
          claim_id: c_zi7Urw59oBiqqG8ZL43GLX
          source_id: s_JPsXJYCi3M5GXRxDtTAsaw
          stance: supports
          locator: CBDB:231334
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_tmHpBVPPGJeDHKDFHFAyWx
        status: active
        display_name: 王希仙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
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
        id: p_VVkAYnQtUyWdWCpmXePbBp
        status: active
        display_name: 王鐸
        merged_into_person_id: null
---

# 王子敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子敬 | accepted |
| bio.summary | 王子敬，明人物。宣德八年進士，籍贯岳池。（中国历代人物传记资料库 CBDB 231334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_tmHpBVPPGJeDHKDFHFAyWx | 王希仙 | accepted |
| other | p_VVkAYnQtUyWdWCpmXePbBp | 王鐸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子敬（CBDB 231334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231334&o=json)
