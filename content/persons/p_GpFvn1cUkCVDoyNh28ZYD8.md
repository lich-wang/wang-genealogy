---
schema: wang-person/v1
id: p_GpFvn1cUkCVDoyNh28ZYD8
status: active
merged_into: null
display_name: 王沂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G367nhJQL7zyeBCLSynZQH
        subject_person_id: p_GpFvn1cUkCVDoyNh28ZYD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6wqNmvFyzS88h8GBrDJ9a3
          claim_id: c_G367nhJQL7zyeBCLSynZQH
          source_id: s_U3ishBj552PkUw9c2KhkUt
          stance: supports
          locator: CBDB:278796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278796）
          source: &a1
            id: s_U3ishBj552PkUw9c2KhkUt
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 278796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json
            external_identifier: CBDB:278796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.970Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fCdR8jAzh8F96CoSJDj1Lk
        subject_person_id: p_GpFvn1cUkCVDoyNh28ZYD8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沂，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M9KGerzmZhhCFxNzNdXca_
          claim_id: c_fCdR8jAzh8F96CoSJDj1Lk
          source_id: s_U3ishBj552PkUw9c2KhkUt
          stance: supports
          locator: CBDB:278796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2gKnXeTn9iL8V_Dm-4gE0I
        subject_person_id: p_KRx9f8uEzGo8ayLUHUrw9A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GpFvn1cUkCVDoyNh28ZYD8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R7irmohb9U_UX7Xw3eXAle
          claim_id: c_2gKnXeTn9iL8V_Dm-4gE0I
          source_id: s_Bd8lLl-u8bxrYr6pRh-MWs
          stance: supports
          locator: CBDB：兄弟 王紀（126621）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王沂 与 王紀 为同胞（CBDB 记「弟」），王紀 之父／母即 王沂 之父／母。
          source:
            id: s_Bd8lLl-u8bxrYr6pRh-MWs
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 278796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json
            external_identifier: CBDB:278796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KRx9f8uEzGo8ayLUHUrw9A
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9h-D51uq8APPw9qR43IAqN
        subject_person_id: p_GpFvn1cUkCVDoyNh28ZYD8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kAYn8y3iQCatmSJGkXFLhh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wAnFJl8poDgS4SHK98pw8N
          claim_id: c_9h-D51uq8APPw9qR43IAqN
          source_id: s_Bd8lLl-u8bxrYr6pRh-MWs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126621 王紀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bd8lLl-u8bxrYr6pRh-MWs
            source_type: api_record
            title: 中国历代人物传记资料库：王沂（CBDB 278796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json
            external_identifier: CBDB:278796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kAYn8y3iQCatmSJGkXFLhh
        status: active
        display_name: 王紀
        merged_into_person_id: null
---

# 王沂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沂 | accepted |
| bio.summary | 王沂，明人物。正德六年進士，籍贯泰州。（中国历代人物传记资料库 CBDB 278796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KRx9f8uEzGo8ayLUHUrw9A | 王瓚 | accepted |
| other | p_kAYn8y3iQCatmSJGkXFLhh | 王紀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王沂（CBDB 278796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278796&o=json)
