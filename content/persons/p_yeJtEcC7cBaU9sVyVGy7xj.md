---
schema: wang-person/v1
id: p_yeJtEcC7cBaU9sVyVGy7xj
status: active
merged_into: null
display_name: 王鉞
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPAqLvJy3QY2BQ48gNZV5B
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oe4ZkuhN1a8WkT7V23933L
          claim_id: c_aPAqLvJy3QY2BQ48gNZV5B
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: CBDB:285846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285846）
          source: &a1
            id: s_Qd3RrwisKBNCET2WYrdjmq
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json
            external_identifier: CBDB:285846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rsdGWcPrhF8UPsWy96mLQi
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cOurcrucWEVnw3CgG-uLYc
          claim_id: c_rsdGWcPrhF8UPsWy96mLQi
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: CBDB:285846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2iQ3b3s1ay1zNvclxECBif
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgaWqM5nscyN4tzrPQd5UX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKXwMlGUHr0LkSWhFomm6v
          claim_id: c_2iQ3b3s1ay1zNvclxECBif
          source_id: s_Qd3RrwisKBNCET2WYrdjmq
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HgaWqM5nscyN4tzrPQd5UX
        status: active
        display_name: 王重賢
        merged_into_person_id: null
    - claim:
        id: c_O0omccdkPPL1ZCKA_ewpzI
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DAJy1o7QiCVZi4DRPdNYJE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6MFZAPeiEyv7Q8Rh373UXw
          claim_id: c_O0omccdkPPL1ZCKA_ewpzI
          source_id: s_Vg0n4xNgHd9vAhhu5-FTtI
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王尊賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王尊賢 之父／母。
          source:
            id: s_Vg0n4xNgHd9vAhhu5-FTtI
            source_type: api_record
            title: 中国历代人物传记资料库：王尊賢（CBDB 285854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json
            external_identifier: CBDB:285854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DAJy1o7QiCVZi4DRPdNYJE
        status: active
        display_name: 王尊賢
        merged_into_person_id: null
    - claim:
        id: c_oVHfJCRH5gwkW5fx07qApP
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q7wseUVMMzks3Dk919AK4X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3nu8DUlMQskNhwWBJrUMyX
          claim_id: c_oVHfJCRH5gwkW5fx07qApP
          source_id: s_r2nbJt1-xMt6ET6a6383dx
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王禮賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王禮賢 之父／母。
          source:
            id: s_r2nbJt1-xMt6ET6a6383dx
            source_type: api_record
            title: 中国历代人物传记资料库：王禮賢（CBDB 285853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json
            external_identifier: CBDB:285853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q7wseUVMMzks3Dk919AK4X
        status: active
        display_name: 王禮賢
        merged_into_person_id: null
    - claim:
        id: c_pm4in22cU5k9KMnrnrSz7M
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QgAKGJMuGM4ng3rJwQxmzL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SkF05fdE2MF1AoBqGLEgZD
          claim_id: c_pm4in22cU5k9KMnrnrSz7M
          source_id: s_fh6v8fGNibODYcRG-29GsO
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王好賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王好賢 之父／母。
          source:
            id: s_fh6v8fGNibODYcRG-29GsO
            source_type: api_record
            title: 中国历代人物传记资料库：王好賢（CBDB 285849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json
            external_identifier: CBDB:285849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QgAKGJMuGM4ng3rJwQxmzL
        status: active
        display_name: 王好賢
        merged_into_person_id: null
    - claim:
        id: c_0VrmMF8cx7IyhxYsUVri6K
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bMUWHbsYZDtCdQB3JuV7sD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jn2ZGvV-gKtf9nlBMQPkRC
          claim_id: c_0VrmMF8cx7IyhxYsUVri6K
          source_id: s_dPfXbXoXOPeAcEDE8sQQZ2
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王任賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王任賢 之父／母。
          source:
            id: s_dPfXbXoXOPeAcEDE8sQQZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王任賢（CBDB 285851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json
            external_identifier: CBDB:285851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bMUWHbsYZDtCdQB3JuV7sD
        status: active
        display_name: 王任賢
        merged_into_person_id: null
    - claim:
        id: c_HpPqA-8PsCcj09jvf67Mt-
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eQdR7e93LG9QZmy1MEnZf1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8XjchzMbyIovphCeeXbBB
          claim_id: c_HpPqA-8PsCcj09jvf67Mt-
          source_id: s_w4QJYzRfWX2I9q__Hw2jNf
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王賓賢 之父／母。
          source:
            id: s_w4QJYzRfWX2I9q__Hw2jNf
            source_type: api_record
            title: 中国历代人物传记资料库：王賓賢（CBDB 285856）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285856&o=json
            external_identifier: CBDB:285856
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQdR7e93LG9QZmy1MEnZf1
        status: active
        display_name: 王賓賢
        merged_into_person_id: null
    - claim:
        id: c_H6i580eqKx0hn6UdH4FtfN
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mPJ5F3MMZrGAAvNTPSFyR8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A0q8kZlIO3P7HOBV6HsNH2
          claim_id: c_H6i580eqKx0hn6UdH4FtfN
          source_id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王進賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王進賢 之父／母。
          source:
            id: s_Eh_Zbo7zBaHYxiRNmLPvQ6
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 285852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json
            external_identifier: CBDB:285852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mPJ5F3MMZrGAAvNTPSFyR8
        status: active
        display_name: 王進賢
        merged_into_person_id: null
    - claim:
        id: c_tIzcXkR-JWNy2GeOyn8ZWI
        subject_person_id: p_yeJtEcC7cBaU9sVyVGy7xj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oHGHWdYHkzXEnPqLgbkDfN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5J73Q8dM_4GD3j2K09O9g1
          claim_id: c_tIzcXkR-JWNy2GeOyn8ZWI
          source_id: s_XtKLfuAgeZp20UosqPtD4_
          stance: supports
          locator: CBDB：兄弟 王重賢（202269）之父／母 王鉞
          quotation: null
          interpretation_note: 由兄弟关系推断：王親賢 与 王重賢 为同胞（CBDB 记「兄」），王重賢 之父／母即 王親賢 之父／母。
          source:
            id: s_XtKLfuAgeZp20UosqPtD4_
            source_type: api_record
            title: 中国历代人物传记资料库：王親賢（CBDB 285855）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json
            external_identifier: CBDB:285855
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oHGHWdYHkzXEnPqLgbkDfN
        status: active
        display_name: 王親賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。正德十六年進士，籍贯交河。（中国历代人物传记资料库 CBDB 285846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HgaWqM5nscyN4tzrPQd5UX | 王重賢 | accepted |
| children | p_DAJy1o7QiCVZi4DRPdNYJE | 王尊賢 | accepted |
| children | p_Q7wseUVMMzks3Dk919AK4X | 王禮賢 | accepted |
| children | p_QgAKGJMuGM4ng3rJwQxmzL | 王好賢 | accepted |
| children | p_bMUWHbsYZDtCdQB3JuV7sD | 王任賢 | accepted |
| children | p_eQdR7e93LG9QZmy1MEnZf1 | 王賓賢 | accepted |
| children | p_mPJ5F3MMZrGAAvNTPSFyR8 | 王進賢 | accepted |
| children | p_oHGHWdYHkzXEnPqLgbkDfN | 王親賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓賢（CBDB 285856）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285856&o=json)
- [中国历代人物传记资料库：王好賢（CBDB 285849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285849&o=json)
- [中国历代人物传记资料库：王進賢（CBDB 285852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285852&o=json)
- [中国历代人物传记资料库：王禮賢（CBDB 285853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285853&o=json)
- [中国历代人物传记资料库：王親賢（CBDB 285855）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285855&o=json)
- [中国历代人物传记资料库：王任賢（CBDB 285851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285851&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 285846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285846&o=json)
- [中国历代人物传记资料库：王尊賢（CBDB 285854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285854&o=json)
