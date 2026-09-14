---
schema: wang-person/v1
id: p_a7ZpG2GjYpSANv7vzvaPGk
status: active
merged_into: null
display_name: 王彥瑢
cbdb_id: 242456
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GSwnpSLDZLqtGjxbhqvEMg
        subject_person_id: p_a7ZpG2GjYpSANv7vzvaPGk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥瑢，明人物。成化二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 242456）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_mhKC1qlR6Us--W81fbtkYJ
          claim_id: c_GSwnpSLDZLqtGjxbhqvEMg
          source_id: s_EGxLCuPjLkLqYnQ7vzDKXZ
          stance: supports
          locator: CBDB:242456
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EGxLCuPjLkLqYnQ7vzDKXZ
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瑢（CBDB 242456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json
            external_identifier: CBDB:242456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hzUQSUBaNKX4aBzJumjjQA
        subject_person_id: p_a7ZpG2GjYpSANv7vzvaPGk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥瑢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5MJUuxHM2v7Y3adKu63GqA
          claim_id: c_hzUQSUBaNKX4aBzJumjjQA
          source_id: s_EGxLCuPjLkLqYnQ7vzDKXZ
          stance: supports
          locator: CBDB:242456
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jFwM1iw8v6X5169nbkOzCd
        subject_person_id: p_8cA72YUN4szByBjQ7DU6Qa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a7ZpG2GjYpSANv7vzvaPGk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gsOLiacZSDIpLNsvoU9Plf
          claim_id: c_jFwM1iw8v6X5169nbkOzCd
          source_id: s_LCg5Bq1QTmAbPfifBhz274
          stance: supports
          locator: CBDB：兄弟 王弼（199262）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥瑢 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王彥瑢 之父／母。
          source:
            id: s_LCg5Bq1QTmAbPfifBhz274
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瑢（CBDB 242456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json
            external_identifier: CBDB:242456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8cA72YUN4szByBjQ7DU6Qa
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_5zI80l1dixxdRTuicpW388
        subject_person_id: p_a7ZpG2GjYpSANv7vzvaPGk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ssBT3QyHCk4WVl0Zh1tcWy
          claim_id: c_5zI80l1dixxdRTuicpW388
          source_id: s_LCg5Bq1QTmAbPfifBhz274
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199262 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LCg5Bq1QTmAbPfifBhz274
            source_type: api_record
            title: 中国历代人物传记资料库：王彥瑢（CBDB 242456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json
            external_identifier: CBDB:242456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kx6D7JNFNVC8j5PdXCMLCd
        status: active
        display_name: 王弼
        merged_into_person_id: null
---

# 王彥瑢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥瑢，明人物。成化二年進士，籍贯華陽。（中国历代人物传记资料库 CBDB 242456） | accepted |
| name.primary | 王彥瑢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8cA72YUN4szByBjQ7DU6Qa | 王義 | accepted |
| other | p_kx6D7JNFNVC8j5PdXCMLCd | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥瑢（CBDB 242456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242456&o=json)
