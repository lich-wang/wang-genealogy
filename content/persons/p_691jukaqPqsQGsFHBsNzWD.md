---
schema: wang-person/v1
id: p_691jukaqPqsQGsFHBsNzWD
status: active
merged_into: null
display_name: 王至善
cbdb_id: 201900
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DW8tdjfdMizR3fgJ2D6FQB
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至善（生于1484年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201900 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_sOB4Ld-4EmgCKLws1tmS0p
          claim_id: c_DW8tdjfdMizR3fgJ2D6FQB
          source_id: s_11XZPorZseG92CiBZrwcbN
          stance: supports
          locator: CBDB:201900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_11XZPorZseG92CiBZrwcbN
            source_type: api_record
            title: 中国历代人物传记资料库：王至善（CBDB 201900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201900&o=json
            external_identifier: CBDB:201900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aBMLF5y8hAUSW8rR4EdU1H
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1484年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1484-01-01
            latest: 1484-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GURhQLRd68KYgLLw8g3Ncs
          claim_id: c_aBMLF5y8hAUSW8rR4EdU1H
          source_id: s_11XZPorZseG92CiBZrwcbN
          stance: supports
          locator: CBDB:201900
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1484
          source:
            id: s_11XZPorZseG92CiBZrwcbN
            source_type: api_record
            title: 中国历代人物传记资料库：王至善（CBDB 201900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201900&o=json
            external_identifier: CBDB:201900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5irtLbwPEH5LniF18D2iqR
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王至善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pXjMJ8vXFGNPGrbiJDJ5LD
          claim_id: c_5irtLbwPEH5LniF18D2iqR
          source_id: s_11XZPorZseG92CiBZrwcbN
          stance: supports
          locator: CBDB:201900
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1484
          source:
            id: s_11XZPorZseG92CiBZrwcbN
            source_type: api_record
            title: 中国历代人物传记资料库：王至善（CBDB 201900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201900&o=json
            external_identifier: CBDB:201900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fvMxn8UhoYsP62PqAtE2E4
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3_4FWWIoIuX1fI0JLMQ9P_
          claim_id: c_fvMxn8UhoYsP62PqAtE2E4
          source_id: s_Q18JHvwtCh7xyj63dHGaJZ
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q18JHvwtCh7xyj63dHGaJZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 280170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json
            external_identifier: CBDB:280170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1N7Z4wmfmL9xzTY7zGpnMb
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_AMvbzb8uod9EthqN1N2Zh_
        subject_person_id: p_6EF1hrXQZDRZAqFX8G7qFM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LaPs5jxVxvN9MEz3jFYmyL
          claim_id: c_AMvbzb8uod9EthqN1N2Zh_
          source_id: s_EgtZR3CwDb1Ehcs8hR8rae
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EgtZR3CwDb1Ehcs8hR8rae
            source_type: api_record
            title: 中国历代人物传记资料库：王忠（CBDB 280169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280169&o=json
            external_identifier: CBDB:280169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6EF1hrXQZDRZAqFX8G7qFM
        status: active
        display_name: 王忠
        merged_into_person_id: null
    - claim:
        id: c_nyFHwNSpaTNQs4EgVFa0j-
        subject_person_id: p_6q1SgNy52JcJwzEFwj269z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_691jukaqPqsQGsFHBsNzWD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_evx4zBhRPkPa5LSsc0h9yY
          claim_id: c_nyFHwNSpaTNQs4EgVFa0j-
          source_id: s_HnEcKc2r6kPzHKekpVe1PD
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第七十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HnEcKc2r6kPzHKekpVe1PD
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 280168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280168&o=json
            external_identifier: CBDB:280168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6q1SgNy52JcJwzEFwj269z
        status: active
        display_name: 王文貴
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王至善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至善（生于1484年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201900 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1484年 | accepted |
| name.primary | 王至善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| ancestors | p_6EF1hrXQZDRZAqFX8G7qFM | 王忠 | accepted |
| ancestors | p_6q1SgNy52JcJwzEFwj269z | 王文貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文貴（CBDB 280168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280168&o=json)
- [中国历代人物传记资料库：王信（CBDB 280170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json)
- [中国历代人物传记资料库：王至善（CBDB 201900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201900&o=json)
- [中国历代人物传记资料库：王忠（CBDB 280169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280169&o=json)
