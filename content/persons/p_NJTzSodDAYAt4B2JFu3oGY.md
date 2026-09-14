---
schema: wang-person/v1
id: p_NJTzSodDAYAt4B2JFu3oGY
status: active
merged_into: null
display_name: 王璗
cbdb_id: 268925
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qNe26Fw16GuMrydSu8JPx7
        subject_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璗，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268925）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_spGQWLIllpk61pBNtuoRKh
          claim_id: c_qNe26Fw16GuMrydSu8JPx7
          source_id: s_chfvp9yVNi8rkdDLdWaaY1
          stance: supports
          locator: CBDB:268925
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_chfvp9yVNi8rkdDLdWaaY1
            source_type: api_record
            title: 中国历代人物传记资料库：王璗（CBDB 268925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json
            external_identifier: CBDB:268925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYGiB2MqtPmizbTNfZZeWA
        subject_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CNmneccMbN4mXBxaFsi9bo
          claim_id: c_UYGiB2MqtPmizbTNfZZeWA
          source_id: s_chfvp9yVNi8rkdDLdWaaY1
          stance: supports
          locator: CBDB:268925
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nJD-ZYRZTc-VC9My_HioUG
        subject_person_id: p_uFwD6xBc7pcKYRU4SJgBny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LfzH4dm1UicJ6-VEy_O_ga
          claim_id: c_nJD-ZYRZTc-VC9My_HioUG
          source_id: s_4r3kHzJbR_xp7Xj7QHUyyJ
          stance: supports
          locator: CBDB：兄弟 王璽（201213）之父／母 王萬悅
          quotation: null
          interpretation_note: 由兄弟关系推断：王璗 与 王璽 为同胞（CBDB 记「兄」），王璽 之父／母即 王璗 之父／母。
          source:
            id: s_4r3kHzJbR_xp7Xj7QHUyyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璗（CBDB 268925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json
            external_identifier: CBDB:268925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uFwD6xBc7pcKYRU4SJgBny
        status: active
        display_name: 王萬悅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ieaTGc7_6OPLiSzcTATwbf
        subject_person_id: p_BNDHcwrQU46tvDsz7UJKUr
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NJTzSodDAYAt4B2JFu3oGY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WAiBgDmIq2Ik9HKYwMb-cN
          claim_id: c_ieaTGc7_6OPLiSzcTATwbf
          source_id: s_4r3kHzJbR_xp7Xj7QHUyyJ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201213 王璽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4r3kHzJbR_xp7Xj7QHUyyJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璗（CBDB 268925）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json
            external_identifier: CBDB:268925
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BNDHcwrQU46tvDsz7UJKUr
        status: active
        display_name: 王璽
        merged_into_person_id: null
---

# 王璗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王璗，明人物。弘治九年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 268925） | accepted |
| name.primary | 王璗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uFwD6xBc7pcKYRU4SJgBny | 王萬悅 | accepted |
| other | p_BNDHcwrQU46tvDsz7UJKUr | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璗（CBDB 268925）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268925&o=json)
