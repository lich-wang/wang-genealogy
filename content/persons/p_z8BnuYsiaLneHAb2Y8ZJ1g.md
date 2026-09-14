---
schema: wang-person/v1
id: p_z8BnuYsiaLneHAb2Y8ZJ1g
status: active
merged_into: null
display_name: 王通
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JkWb6tsJd3wkfQEQQm8dHs
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w8UbCdPM4RZ52U2PexcSMH
          claim_id: c_JkWb6tsJd3wkfQEQQm8dHs
          source_id: s_675ioDKHz4qphfsGFFm6pS
          stance: supports
          locator: CBDB:285954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（285954）
          source: &a1
            id: s_675ioDKHz4qphfsGFFm6pS
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 285954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285954&o=json
            external_identifier: CBDB:285954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.224Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TiLLG27P7S1V4djtR9X5bk
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。正德十六年進士，籍贯平峪。（中国历代人物传记资料库 CBDB 285954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J1SLW6-6eVqs213Vx_ip_j
          claim_id: c_TiLLG27P7S1V4djtR9X5bk
          source_id: s_675ioDKHz4qphfsGFFm6pS
          stance: supports
          locator: CBDB:285954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_gjsJqK5PvSo7TNxLXxTEkp
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ihqwFHoQL5fezFftJsukMb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csYCzbezuk0GCE3kXFgP9i
          claim_id: c_gjsJqK5PvSo7TNxLXxTEkp
          source_id: s_jeazmAgpnL84Ce6RMwkVPH
          stance: supports
          locator: 正德十六年登科錄:一卷，第三甲第一百七十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jeazmAgpnL84Ce6RMwkVPH
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 202276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json
            external_identifier: CBDB:202276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.734Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ihqwFHoQL5fezFftJsukMb
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_Pi6AkYxZDBlmGyu8rWQw-4
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3JXmUyAG5SM1NxgguQKH5M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AD9xDelNv9HgZeTFdU-NxI
          claim_id: c_Pi6AkYxZDBlmGyu8rWQw-4
          source_id: s_6vGMh8FG7KxqlOPeCPsFDC
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍈 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鍈 之父／母。
          source:
            id: s_6vGMh8FG7KxqlOPeCPsFDC
            source_type: api_record
            title: 中国历代人物传记资料库：王鍈（CBDB 285958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json
            external_identifier: CBDB:285958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3JXmUyAG5SM1NxgguQKH5M
        status: active
        display_name: 王鍈
        merged_into_person_id: null
    - claim:
        id: c_8yASCvbzJLdNJYqMbfUtoa
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GB7C9iCPVFk1bWVfvXJBAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8_lkn4hr8PE5KWrbspdxby
          claim_id: c_8yASCvbzJLdNJYqMbfUtoa
          source_id: s_fDWkH7Uvph0ooZswqhsGff
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈞 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鈞 之父／母。
          source:
            id: s_fDWkH7Uvph0ooZswqhsGff
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 285960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json
            external_identifier: CBDB:285960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GB7C9iCPVFk1bWVfvXJBAb
        status: active
        display_name: 王鈞
        merged_into_person_id: null
    - claim:
        id: c_JCG9s-sl79SUWwBUaHyBlR
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KKu1v7yctAFL7GoE8VbjKL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dHzn97jUNcOZYiilJSRmZ1
          claim_id: c_JCG9s-sl79SUWwBUaHyBlR
          source_id: s_xV_IyRKm_B6ehvVtZM9-Ft
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉞 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鉞 之父／母。
          source:
            id: s_xV_IyRKm_B6ehvVtZM9-Ft
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 285957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285957&o=json
            external_identifier: CBDB:285957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KKu1v7yctAFL7GoE8VbjKL
        status: active
        display_name: 王鉞
        merged_into_person_id: null
    - claim:
        id: c_lV7gKmsSnEbJdrYnAy0tOa
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QtDiQFreFQHM1M2Z39Dit3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VRi1zxam8IrWKpMXmtmDH
          claim_id: c_lV7gKmsSnEbJdrYnAy0tOa
          source_id: s_cw3waLGJk4J_o-QP05Npdd
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍾 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鍾 之父／母。
          source:
            id: s_cw3waLGJk4J_o-QP05Npdd
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 285961）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285961&o=json
            external_identifier: CBDB:285961
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QtDiQFreFQHM1M2Z39Dit3
        status: active
        display_name: 王鍾
        merged_into_person_id: null
    - claim:
        id: c_nEzuZPEOE_97HOyL1djGMX
        subject_person_id: p_z8BnuYsiaLneHAb2Y8ZJ1g
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VbmgKsRzLNGsQDkBfPCYk6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJq3WR13YamXW8AMVv-upB
          claim_id: c_nEzuZPEOE_97HOyL1djGMX
          source_id: s_SDdDgBzBY2MXr3nQZ6Zlty
          stance: supports
          locator: CBDB：兄弟 王銳（202276）之父／母 王通
          quotation: null
          interpretation_note: 由兄弟关系推断：王鉉 与 王銳 为同胞（CBDB 记「兄」），王銳 之父／母即 王鉉 之父／母。
          source:
            id: s_SDdDgBzBY2MXr3nQZ6Zlty
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 285959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285959&o=json
            external_identifier: CBDB:285959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VbmgKsRzLNGsQDkBfPCYk6
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。正德十六年進士，籍贯平峪。（中国历代人物传记资料库 CBDB 285954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ihqwFHoQL5fezFftJsukMb | 王銳 | accepted |
| children | p_3JXmUyAG5SM1NxgguQKH5M | 王鍈 | accepted |
| children | p_GB7C9iCPVFk1bWVfvXJBAb | 王鈞 | accepted |
| children | p_KKu1v7yctAFL7GoE8VbjKL | 王鉞 | accepted |
| children | p_QtDiQFreFQHM1M2Z39Dit3 | 王鍾 | accepted |
| children | p_VbmgKsRzLNGsQDkBfPCYk6 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鈞（CBDB 285960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285960&o=json)
- [中国历代人物传记资料库：王銳（CBDB 202276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202276&o=json)
- [中国历代人物传记资料库：王通（CBDB 285954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285954&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 285959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285959&o=json)
- [中国历代人物传记资料库：王鍈（CBDB 285958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285958&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 285957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285957&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 285961）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=285961&o=json)
