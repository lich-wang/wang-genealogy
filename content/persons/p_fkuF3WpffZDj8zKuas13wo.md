---
schema: wang-person/v1
id: p_fkuF3WpffZDj8zKuas13wo
status: active
merged_into: null
display_name: 王原模
cbdb_id: 327875
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DZC46SJ7QeLfeeDEJbncWz
        subject_person_id: p_fkuF3WpffZDj8zKuas13wo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原模，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327875）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_m7gMkEDPwGuRuEiHDcAKem
          claim_id: c_DZC46SJ7QeLfeeDEJbncWz
          source_id: s_4B5HZ2HP4xodGJFMNAVgY5
          stance: supports
          locator: CBDB:327875
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4B5HZ2HP4xodGJFMNAVgY5
            source_type: api_record
            title: 中国历代人物传记资料库：王原模（CBDB 327875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327875&o=json
            external_identifier: CBDB:327875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5R3Ahtkm2Yk5knSZnXAWd2
        subject_person_id: p_fkuF3WpffZDj8zKuas13wo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wZ8KmrRUB2iNfssgRsT8Wh
          claim_id: c_5R3Ahtkm2Yk5knSZnXAWd2
          source_id: s_4B5HZ2HP4xodGJFMNAVgY5
          stance: supports
          locator: CBDB:327875
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1xGZhs4DcqPfj6O97ZUoK2
        subject_person_id: p_2ER4qeybN68kj6wmWDD4De
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_fkuF3WpffZDj8zKuas13wo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-NkYK-q8_uA5r5Y90iByiM
          claim_id: c_1xGZhs4DcqPfj6O97ZUoK2
          source_id: s_p-JEJYDEFhEbVK1BY_t61_
          stance: supports
          locator: CBDB：兄弟 王原相（205067）之父／母 王渐逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王原模 与 王原相 为同胞（CBDB 记「兄」），王原相 之父／母即 王原模 之父／母。
          source:
            id: s_p-JEJYDEFhEbVK1BY_t61_
            source_type: api_record
            title: 中国历代人物传记资料库：王原模（CBDB 327875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327875&o=json
            external_identifier: CBDB:327875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ER4qeybN68kj6wmWDD4De
        status: active
        display_name: 王渐逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__UtpVGAhtS5d7kKW8NAGwN
        subject_person_id: p_fkuF3WpffZDj8zKuas13wo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3CyVGPrMDmzMQs-29woGdk
          claim_id: c__UtpVGAhtS5d7kKW8NAGwN
          source_id: s_p-JEJYDEFhEbVK1BY_t61_
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205067 王原相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p-JEJYDEFhEbVK1BY_t61_
            source_type: api_record
            title: 中国历代人物传记资料库：王原模（CBDB 327875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327875&o=json
            external_identifier: CBDB:327875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        status: active
        display_name: 王原相
        merged_into_person_id: null
---

# 王原模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原模，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327875） | accepted |
| name.primary | 王原模 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2ER4qeybN68kj6wmWDD4De | 王渐逵 | accepted |
| other | p_ghyYDQ5eZ8uxN8ip6BX7KC | 王原相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王原模（CBDB 327875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327875&o=json)
