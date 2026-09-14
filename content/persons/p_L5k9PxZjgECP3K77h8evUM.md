---
schema: wang-person/v1
id: p_L5k9PxZjgECP3K77h8evUM
status: active
merged_into: null
display_name: 王洽
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U6rk2yLvFkJQ1YdF8ESdTi
        subject_person_id: p_L5k9PxZjgECP3K77h8evUM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZALwZ9q6E4eVnXJTFpRzpK
          claim_id: c_U6rk2yLvFkJQ1YdF8ESdTi
          source_id: s_D5rtQLLBe5C5wyo4F48to4
          stance: supports
          locator: CBDB:20528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20528）
          source: &a1
            id: s_D5rtQLLBe5C5wyo4F48to4
            source_type: api_record
            title: 中国历代人物传记资料库：王洽（CBDB 20528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20528&o=json
            external_identifier: CBDB:20528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QqFWr7ZoGDiVS7kVSE48ib
        subject_person_id: p_L5k9PxZjgECP3K77h8evUM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洽，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 20528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rbJC4vDQj3_9S4LsJtoHUs
          claim_id: c_QqFWr7ZoGDiVS7kVSE48ib
          source_id: s_D5rtQLLBe5C5wyo4F48to4
          stance: supports
          locator: CBDB:20528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_OfRK2MKUl1Ek8oBLr44kXy
        subject_person_id: p_5dcsDxDKEpK12rMtB5o7pc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_L5k9PxZjgECP3K77h8evUM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W0UJkECJIs-B1Fw7XeC11m
          claim_id: c_OfRK2MKUl1Ek8oBLr44kXy
          source_id: s_zDhdJOdKYbFJQR613OXTgt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 20528 王洽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zDhdJOdKYbFJQR613OXTgt
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 10704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json
            external_identifier: CBDB:10704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dcsDxDKEpK12rMtB5o7pc
        status: active
        display_name: 王瀚
        merged_into_person_id: null
---

# 王洽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洽 | accepted |
| bio.summary | 王洽，宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 20528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_5dcsDxDKEpK12rMtB5o7pc | 王瀚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瀚（CBDB 10704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10704&o=json)
- [中国历代人物传记资料库：王洽（CBDB 20528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20528&o=json)
