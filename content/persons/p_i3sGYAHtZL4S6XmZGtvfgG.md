---
schema: wang-person/v1
id: p_i3sGYAHtZL4S6XmZGtvfgG
status: active
merged_into: null
display_name: 王為善
cbdb_id: 280176
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ndw93m3mYsiUtEYC5wNvGD
        subject_person_id: p_i3sGYAHtZL4S6XmZGtvfgG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為善，明人物。正德十二年進士，籍贯襄陽衛。（中国历代人物传记资料库 CBDB 280176）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_BGuHhTGuPtVUaggY_ZKNy5
          claim_id: c_Ndw93m3mYsiUtEYC5wNvGD
          source_id: s_bxx5ezXb3iWLiXa4dhSmsB
          stance: supports
          locator: CBDB:280176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bxx5ezXb3iWLiXa4dhSmsB
            source_type: api_record
            title: 中国历代人物传记资料库：王為善（CBDB 280176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json
            external_identifier: CBDB:280176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_czKjyagK6MwPC8f35vcSKh
        subject_person_id: p_i3sGYAHtZL4S6XmZGtvfgG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王為善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VPxofkhxp4pAT5M2FG49BC
          claim_id: c_czKjyagK6MwPC8f35vcSKh
          source_id: s_bxx5ezXb3iWLiXa4dhSmsB
          stance: supports
          locator: CBDB:280176
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fAfj-H7Qi_Ld6ALmnQ3euU
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_i3sGYAHtZL4S6XmZGtvfgG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bn5_CeGyGVIrRHYqVoHAhn
          claim_id: c_fAfj-H7Qi_Ld6ALmnQ3euU
          source_id: s_u-tWhTY7nLYeIxI5dBTjVF
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王為善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王為善 之父／母。
          source:
            id: s_u-tWhTY7nLYeIxI5dBTjVF
            source_type: api_record
            title: 中国历代人物传记资料库：王為善（CBDB 280176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json
            external_identifier: CBDB:280176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N7Z4wmfmL9xzTY7zGpnMb
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PgFPfb0kMIaaoWBStrx5B4
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_i3sGYAHtZL4S6XmZGtvfgG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1n_kzZDZ_DTsbGnGmrawcK
          claim_id: c_PgFPfb0kMIaaoWBStrx5B4
          source_id: s_u-tWhTY7nLYeIxI5dBTjVF
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_u-tWhTY7nLYeIxI5dBTjVF
            source_type: api_record
            title: 中国历代人物传记资料库：王為善（CBDB 280176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json
            external_identifier: CBDB:280176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
---

# 王為善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王為善，明人物。正德十二年進士，籍贯襄陽衛。（中国历代人物传记资料库 CBDB 280176） | accepted |
| name.primary | 王為善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| other | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王為善（CBDB 280176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json)
