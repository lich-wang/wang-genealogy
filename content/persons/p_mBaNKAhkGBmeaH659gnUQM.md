---
schema: wang-person/v1
id: p_mBaNKAhkGBmeaH659gnUQM
status: active
merged_into: null
display_name: 王元
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kEbspNeEPq1a6s9NnifVhk
        subject_person_id: p_mBaNKAhkGBmeaH659gnUQM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cRX7Sc8qmDvbzoitBto3AF
          claim_id: c_kEbspNeEPq1a6s9NnifVhk
          source_id: s_3UZWQ2gc6RBSY3wScLKKVD
          stance: supports
          locator: CBDB:226038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226038）
          source: &a1
            id: s_3UZWQ2gc6RBSY3wScLKKVD
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 226038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json
            external_identifier: CBDB:226038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LFb4FST6WcBUZp4ceDRQ6U
        subject_person_id: p_mBaNKAhkGBmeaH659gnUQM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 226038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FAQy3o4NvVG6HUU-fMx0bA
          claim_id: c_LFb4FST6WcBUZp4ceDRQ6U
          source_id: s_3UZWQ2gc6RBSY3wScLKKVD
          stance: supports
          locator: CBDB:226038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pmiLase01DFmSLKHP80FaF
        subject_person_id: p_eQTph1AyQLCRGPwJS5yprV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mBaNKAhkGBmeaH659gnUQM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saw1l3IgtDhl0F35OVBaBG
          claim_id: c_pmiLase01DFmSLKHP80FaF
          source_id: s_oVH3NbJu7RafPxUw4w4MtC
          stance: supports
          locator: CBDB：兄弟 王宗彝（126562）之父／母 王文
          quotation: null
          interpretation_note: 由兄弟关系推断：王元 与 王宗彝 为同胞（CBDB 记「弟」），王宗彝 之父／母即 王元 之父／母。
          source:
            id: s_oVH3NbJu7RafPxUw4w4MtC
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 226038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json
            external_identifier: CBDB:226038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQTph1AyQLCRGPwJS5yprV
        status: active
        display_name: 王文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ex3K77KdF1wokSNmsWMvWP
        subject_person_id: p_YS93bFMg2tXSWdgNRCjryF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mBaNKAhkGBmeaH659gnUQM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5_Xx_j59RtGv__DKoPzNGd
          claim_id: c_Ex3K77KdF1wokSNmsWMvWP
          source_id: s_oVH3NbJu7RafPxUw4w4MtC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126562 王宗彝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oVH3NbJu7RafPxUw4w4MtC
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 226038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json
            external_identifier: CBDB:226038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YS93bFMg2tXSWdgNRCjryF
        status: active
        display_name: 王宗彝
        merged_into_person_id: null
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| bio.summary | 王元，明人物。成化二年進士，籍贯束鹿。（中国历代人物传记资料库 CBDB 226038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eQTph1AyQLCRGPwJS5yprV | 王文 | accepted |
| other | p_YS93bFMg2tXSWdgNRCjryF | 王宗彝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元（CBDB 226038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226038&o=json)
