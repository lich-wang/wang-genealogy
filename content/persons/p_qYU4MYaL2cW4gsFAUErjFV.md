---
schema: wang-person/v1
id: p_qYU4MYaL2cW4gsFAUErjFV
status: active
merged_into: null
display_name: 王祖修
cbdb_id: 29825
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FugPNMzWk5KHGqQKAdJLor
        subject_person_id: p_qYU4MYaL2cW4gsFAUErjFV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖修，清人物。身份为士人。（中国历代人物传记资料库 CBDB 29825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PVFpFcJov7Gf9mUApj_XHs
          claim_id: c_FugPNMzWk5KHGqQKAdJLor
          source_id: s_nLg1kuP2KjKz7R6wNuX8qY
          stance: supports
          locator: CBDB:29825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nLg1kuP2KjKz7R6wNuX8qY
            source_type: api_record
            title: 中国历代人物传记资料库：王祖修（CBDB 29825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29825&o=json
            external_identifier: CBDB:29825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dKubsVd2jyvp62Tu31ZWdP
        subject_person_id: p_qYU4MYaL2cW4gsFAUErjFV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NbstLiQH4KE2bU1128JGVH
          claim_id: c_dKubsVd2jyvp62Tu31ZWdP
          source_id: s_nLg1kuP2KjKz7R6wNuX8qY
          stance: supports
          locator: CBDB:29825
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_vsCmbesamNI3kiQVrfBSzR
        subject_person_id: p_jaET54tRcgJJB5GJE2773J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qYU4MYaL2cW4gsFAUErjFV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xqpVqLpW8wnIfGBIIe44jB
          claim_id: c_vsCmbesamNI3kiQVrfBSzR
          source_id: s_GNM7Ub6nKvqekUxv8biKaA
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王祖修 ⇄ 曾祖 王納諫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GNM7Ub6nKvqekUxv8biKaA
            source_type: api_record
            title: 中国历代人物传记资料库：王納諫（CBDB 29826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29826&o=json
            external_identifier: CBDB:29826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.011Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jaET54tRcgJJB5GJE2773J
        status: active
        display_name: 王納諫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王祖修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖修，清人物。身份为士人。（中国历代人物传记资料库 CBDB 29825） | accepted |
| name.primary | 王祖修 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_jaET54tRcgJJB5GJE2773J | 王納諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納諫（CBDB 29826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29826&o=json)
- [中国历代人物传记资料库：王祖修（CBDB 29825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29825&o=json)
