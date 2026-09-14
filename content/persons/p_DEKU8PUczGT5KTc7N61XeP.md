---
schema: wang-person/v1
id: p_DEKU8PUczGT5KTc7N61XeP
status: active
merged_into: null
display_name: 王仕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9ieMRivUpxTiDZ5hp1CJt2
        subject_person_id: p_DEKU8PUczGT5KTc7N61XeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jvYdMzTYSigHw3pejSaHAf
          claim_id: c_9ieMRivUpxTiDZ5hp1CJt2
          source_id: s_EAoa4JjHyvNvh9tJH4jUNT
          stance: supports
          locator: CBDB:213748
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213748）
          source: &a1
            id: s_EAoa4JjHyvNvh9tJH4jUNT
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 213748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json
            external_identifier: CBDB:213748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmMfismBkUcK5gkhtsFAK7
        subject_person_id: p_DEKU8PUczGT5KTc7N61XeP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213748）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nRl1H9ufskoauM492SVGUb
          claim_id: c_LmMfismBkUcK5gkhtsFAK7
          source_id: s_EAoa4JjHyvNvh9tJH4jUNT
          stance: supports
          locator: CBDB:213748
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ImuaKd09bL0kusN6YVMSI4
        subject_person_id: p_QEEDRgkTG1gPE2Q7oYF5FU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DEKU8PUczGT5KTc7N61XeP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HoZarI-B3K9NV9GxqHceI5
          claim_id: c_ImuaKd09bL0kusN6YVMSI4
          source_id: s_4Uw84ZOtZBMZ7NA0bSSOgj
          stance: supports
          locator: CBDB：兄弟 王儒（206132）之父／母 王雲鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王仕 之父／母。
          source:
            id: s_4Uw84ZOtZBMZ7NA0bSSOgj
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 213748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json
            external_identifier: CBDB:213748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QEEDRgkTG1gPE2Q7oYF5FU
        status: active
        display_name: 王雲鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vay-V8gOfs2za_CPsgZzNl
        subject_person_id: p_DEKU8PUczGT5KTc7N61XeP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vzt49mQ7898sBQeKmR1Czu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOZS-hQBuGN__T12DNf8-a
          claim_id: c_vay-V8gOfs2za_CPsgZzNl
          source_id: s_4Uw84ZOtZBMZ7NA0bSSOgj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206132 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4Uw84ZOtZBMZ7NA0bSSOgj
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 213748）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json
            external_identifier: CBDB:213748
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vzt49mQ7898sBQeKmR1Czu
        status: active
        display_name: 王儒
        merged_into_person_id: null
---

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，明人物。萬曆二年進士，籍贯太原府。（中国历代人物传记资料库 CBDB 213748） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QEEDRgkTG1gPE2Q7oYF5FU | 王雲鵬 | accepted |
| other | p_vzt49mQ7898sBQeKmR1Czu | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 213748）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213748&o=json)
