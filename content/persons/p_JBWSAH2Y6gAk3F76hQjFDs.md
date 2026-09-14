---
schema: wang-person/v1
id: p_JBWSAH2Y6gAk3F76hQjFDs
status: active
merged_into: null
display_name: 王燾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u3K8nqdzBFMzn5ABADuMJG
        subject_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D1CAoAeKDj63UwP2QHLFgL
          claim_id: c_u3K8nqdzBFMzn5ABADuMJG
          source_id: s_kDD2DVxJjmNG3xTMqneAqA
          stance: supports
          locator: CBDB:309653
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309653）
          source: &a1
            id: s_kDD2DVxJjmNG3xTMqneAqA
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 309653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json
            external_identifier: CBDB:309653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.824Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SkcHGTb3FBvKKtBrzPk7XY
        subject_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燾，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309653）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dU9E1UyZYtPom50wz_Xvg-
          claim_id: c_SkcHGTb3FBvKKtBrzPk7XY
          source_id: s_kDD2DVxJjmNG3xTMqneAqA
          stance: supports
          locator: CBDB:309653
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jJnXfW31dapCL3bAMTG1tV
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Umfvkz05ShOS6qXjB1znSk
          claim_id: c_jJnXfW31dapCL3bAMTG1tV
          source_id: s_iJ9MgVwCGnqZIGobbgCCcC
          stance: supports
          locator: CBDB：兄弟 王樵（34720）之父／母 王臬
          quotation: null
          interpretation_note: 由兄弟关系推断：王燾 与 王樵 为同胞（CBDB 记「弟」），王樵 之父／母即 王燾 之父／母。
          source:
            id: s_iJ9MgVwCGnqZIGobbgCCcC
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 309653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json
            external_identifier: CBDB:309653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tjsfovXeOtBHqgWT1ZVDZI
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBw_vhi9SR7Igu1OPqmwJT
          claim_id: c_tjsfovXeOtBHqgWT1ZVDZI
          source_id: s_iJ9MgVwCGnqZIGobbgCCcC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iJ9MgVwCGnqZIGobbgCCcC
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 309653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json
            external_identifier: CBDB:309653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_923xZ5qSMZFGgS46h7nLWU
        status: active
        display_name: 王樵
        merged_into_person_id: null
---

# 王燾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燾 | accepted |
| bio.summary | 王燾，明人物。嘉靖二十六年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 309653） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| other | p_923xZ5qSMZFGgS46h7nLWU | 王樵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王燾（CBDB 309653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json)
