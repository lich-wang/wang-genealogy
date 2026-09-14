---
schema: wang-person/v1
id: p_34MLAJVChWhCtAHLLwS4nt
status: active
merged_into: null
display_name: 王森
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Ze4b3qyEc9MkwKqwG4Dhz
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F7yAAsHXpxo5E2CA5rYwif
          claim_id: c_8Ze4b3qyEc9MkwKqwG4Dhz
          source_id: s_zD4J5N3xMuPJzDDCkqv88e
          stance: supports
          locator: CBDB:294533
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294533）
          source: &a1
            id: s_zD4J5N3xMuPJzDDCkqv88e
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5s73uLGVkAd16BqyMmJvF
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294533）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qNbId2IgHPEgVPibIbmUuB
          claim_id: c_F5s73uLGVkAd16BqyMmJvF
          source_id: s_zD4J5N3xMuPJzDDCkqv88e
          stance: supports
          locator: CBDB:294533
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ucogytyz5vsBucD68hfsL7
        subject_person_id: p_5oVCjNf3jZsLG4jhJ57YhB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_34MLAJVChWhCtAHLLwS4nt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVxwZDwJfEN-xkWwag2eO1
          claim_id: c_Ucogytyz5vsBucD68hfsL7
          source_id: s_h-SBCqoGe7p6flGsPlh_TP
          stance: supports
          locator: CBDB：兄弟 王梅（202794）之父／母 王鸞
          quotation: null
          interpretation_note: 由兄弟关系推断：王森 与 王梅 为同胞（CBDB 记「兄」），王梅 之父／母即 王森 之父／母。
          source:
            id: s_h-SBCqoGe7p6flGsPlh_TP
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5oVCjNf3jZsLG4jhJ57YhB
        status: active
        display_name: 王鸞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DKljcs7H98RByZsrsBFr8u
        subject_person_id: p_34MLAJVChWhCtAHLLwS4nt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e7c3DhdEJw2765tvQyZA4M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NzbuUQqSZIuW6ukQiEG7bA
          claim_id: c_DKljcs7H98RByZsrsBFr8u
          source_id: s_h-SBCqoGe7p6flGsPlh_TP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202794 王梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_h-SBCqoGe7p6flGsPlh_TP
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 294533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json
            external_identifier: CBDB:294533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e7c3DhdEJw2765tvQyZA4M
        status: active
        display_name: 王梅
        merged_into_person_id: null
---

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，明人物。嘉靖十一年進士，籍贯平湖。（中国历代人物传记资料库 CBDB 294533） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5oVCjNf3jZsLG4jhJ57YhB | 王鸞 | accepted |
| other | p_e7c3DhdEJw2765tvQyZA4M | 王梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 294533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294533&o=json)
