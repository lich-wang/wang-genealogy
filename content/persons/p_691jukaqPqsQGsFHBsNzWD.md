---
schema: wang-person/v1
id: p_691jukaqPqsQGsFHBsNzWD
status: active
merged_into: null
display_name: 王至善
cbdb_id: 201900
revision: 9
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
          text: 王至善（生于1484年），明人物。明清進士進士，籍贯襄陽衛，入仕進士。（中国历代人物传记资料库 CBDB 201900）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sOB4Ld-4EmgCKLws1tmS0p
          claim_id: c_DW8tdjfdMizR3fgJ2D6FQB
          source_id: s_11XZPorZseG92CiBZrwcbN
          stance: supports
          locator: CBDB:201900
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
          source: *a1
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
  other:
    - claim:
        id: c_1AOnaMMqSLnFGW66RwKozT
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_6ZKGS2HkvaTrTLKFQL2mGi
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7CBtL8U7Fco_YmYlIHN0vh
          claim_id: c_1AOnaMMqSLnFGW66RwKozT
          source_id: s_je-fsa6SWpGLEqsoTiyOEL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_je-fsa6SWpGLEqsoTiyOEL
            source_type: api_record
            title: 中国历代人物传记资料库：王巨善（CBDB 280181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280181&o=json
            external_identifier: CBDB:280181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6ZKGS2HkvaTrTLKFQL2mGi
        status: active
        display_name: 王巨善
        merged_into_person_id: null
    - claim:
        id: c_nqTdNmW7GFuuLaPlF4h_RM
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CnjM6tcfgVMu6RfoJz4FnX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATIEBza7me3g5fb-5VpLiL
          claim_id: c_nqTdNmW7GFuuLaPlF4h_RM
          source_id: s_jpwse8YCl64zrDQ2Xc0x4D
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jpwse8YCl64zrDQ2Xc0x4D
            source_type: api_record
            title: 中国历代人物传记资料库：王繼善（CBDB 280178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json
            external_identifier: CBDB:280178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CnjM6tcfgVMu6RfoJz4FnX
        status: active
        display_name: 王繼善
        merged_into_person_id: null
    - claim:
        id: c_U93Bv_eSAmHyf8gWjmEWUC
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JkVGYLSCTsNP1UEn97gdK7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5eU393KBndnYuKzG8Zx-f3
          claim_id: c_U93Bv_eSAmHyf8gWjmEWUC
          source_id: s_uEinUD5sV9J9CILv_tz14-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEinUD5sV9J9CILv_tz14-
            source_type: api_record
            title: 中国历代人物传记资料库：王明善（CBDB 280180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json
            external_identifier: CBDB:280180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JkVGYLSCTsNP1UEn97gdK7
        status: active
        display_name: 王明善
        merged_into_person_id: null
    - claim:
        id: c_jVpc53G_nM0CTPyd12Bknc
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SkMrroZMaVf8SVRNciaEtD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxtzTreIizstb7h1Qlceyi
          claim_id: c_jVpc53G_nM0CTPyd12Bknc
          source_id: s_B3WPBrJ0PJhwJkoGa7IZ9x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B3WPBrJ0PJhwJkoGa7IZ9x
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 280177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json
            external_identifier: CBDB:280177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SkMrroZMaVf8SVRNciaEtD
        status: active
        display_name: 王從善
        merged_into_person_id: null
    - claim:
        id: c_oKYkL9P9EcFKnbAVYOLdR9
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UbYyy4jud9ueasjAfZtjDu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dq3l0nRxRs9X6f0RE0pZ6u
          claim_id: c_oKYkL9P9EcFKnbAVYOLdR9
          source_id: s_GQKZtO1ydYHu4atoP7Z_3H
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GQKZtO1ydYHu4atoP7Z_3H
            source_type: api_record
            title: 中国历代人物传记资料库：王復善（CBDB 280179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280179&o=json
            external_identifier: CBDB:280179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UbYyy4jud9ueasjAfZtjDu
        status: active
        display_name: 王復善
        merged_into_person_id: null
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
        id: p_i3sGYAHtZL4S6XmZGtvfgG
        status: active
        display_name: 王為善
        merged_into_person_id: null
---

# 王至善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王至善（生于1484年），明人物。明清進士進士，籍贯襄陽衛，入仕進士。（中国历代人物传记资料库 CBDB 201900） | accepted |
| birth.date | 1484年 | accepted |
| name.primary | 王至善 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| ancestors | p_6EF1hrXQZDRZAqFX8G7qFM | 王忠 | accepted |
| ancestors | p_6q1SgNy52JcJwzEFwj269z | 王文貴 | accepted |
| other | p_6ZKGS2HkvaTrTLKFQL2mGi | 王巨善 | accepted |
| other | p_CnjM6tcfgVMu6RfoJz4FnX | 王繼善 | accepted |
| other | p_JkVGYLSCTsNP1UEn97gdK7 | 王明善 | accepted |
| other | p_SkMrroZMaVf8SVRNciaEtD | 王從善 | accepted |
| other | p_UbYyy4jud9ueasjAfZtjDu | 王復善 | accepted |
| other | p_i3sGYAHtZL4S6XmZGtvfgG | 王為善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 280177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json)
- [中国历代人物传记资料库：王復善（CBDB 280179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280179&o=json)
- [中国历代人物传记资料库：王繼善（CBDB 280178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280178&o=json)
- [中国历代人物传记资料库：王巨善（CBDB 280181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280181&o=json)
- [中国历代人物传记资料库：王明善（CBDB 280180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280180&o=json)
- [中国历代人物传记资料库：王為善（CBDB 280176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280176&o=json)
- [中国历代人物传记资料库：王文貴（CBDB 280168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280168&o=json)
- [中国历代人物传记资料库：王信（CBDB 280170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280170&o=json)
- [中国历代人物传记资料库：王至善（CBDB 201900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201900&o=json)
- [中国历代人物传记资料库：王忠（CBDB 280169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280169&o=json)
