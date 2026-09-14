---
schema: wang-person/v1
id: p_FhThjsF4g73SkGN41F7MyF
status: active
merged_into: null
display_name: 王正
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GcrkK5CwNhHV4xL5QBnnKw
        subject_person_id: p_FhThjsF4g73SkGN41F7MyF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AXVj6HyZPCCRxmndN7MCWQ
          claim_id: c_GcrkK5CwNhHV4xL5QBnnKw
          source_id: s_LSFrjG7Tq6wWdjkYgeJPDM
          stance: supports
          locator: CBDB:278858
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278858）
          source: &a1
            id: s_LSFrjG7Tq6wWdjkYgeJPDM
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 278858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json
            external_identifier: CBDB:278858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKFiXBXtkWQU3WJ2SeX9CT
        subject_person_id: p_FhThjsF4g73SkGN41F7MyF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xzbduTrd5NHH5watbF7Ek1
          claim_id: c_sKFiXBXtkWQU3WJ2SeX9CT
          source_id: s_LSFrjG7Tq6wWdjkYgeJPDM
          stance: supports
          locator: CBDB:278858
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qbfeDD8AqDn9GQFY7Sz2YD
        subject_person_id: p_493jjNvpMG2MDc1hCwrQiK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FhThjsF4g73SkGN41F7MyF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PN8L_MsWWz937a5KzoSaQ_
          claim_id: c_qbfeDD8AqDn9GQFY7Sz2YD
          source_id: s_7eeFsHfjPwCP9X7dB-LldA
          stance: supports
          locator: CBDB：兄弟 王完（201827）之父／母 王紹某
          quotation: null
          interpretation_note: 由兄弟关系推断：王正 与 王完 为同胞（CBDB 记「弟」），王完 之父／母即 王正 之父／母。
          source:
            id: s_7eeFsHfjPwCP9X7dB-LldA
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 278858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json
            external_identifier: CBDB:278858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_493jjNvpMG2MDc1hCwrQiK
        status: active
        display_name: 王紹某
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vmvEZcr10JJWW4ljJ1vi7w
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FhThjsF4g73SkGN41F7MyF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKlinAR9jy_6UqPk3MQbcJ
          claim_id: c_vmvEZcr10JJWW4ljJ1vi7w
          source_id: s_7eeFsHfjPwCP9X7dB-LldA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201827 王完）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7eeFsHfjPwCP9X7dB-LldA
            source_type: api_record
            title: 中国历代人物传记资料库：王正（CBDB 278858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json
            external_identifier: CBDB:278858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
---

# 王正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正 | accepted |
| bio.summary | 王正，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 278858） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_493jjNvpMG2MDc1hCwrQiK | 王紹某 | accepted |
| other | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王正（CBDB 278858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278858&o=json)
