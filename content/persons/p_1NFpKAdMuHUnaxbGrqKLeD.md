---
schema: wang-person/v1
id: p_1NFpKAdMuHUnaxbGrqKLeD
status: active
merged_into: null
display_name: 王追美
cbdb_id: 230473
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jB34MPHHBFAMK9Zx4WwEMC
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追美，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 230473）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_gRta3ztYoYdZyw_g--o9Hg
          claim_id: c_jB34MPHHBFAMK9Zx4WwEMC
          source_id: s_bQqevVPGnRS14kcxjFGT9t
          stance: supports
          locator: CBDB:230473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bQqevVPGnRS14kcxjFGT9t
            source_type: api_record
            title: 中国历代人物传记资料库：王追美（CBDB 230473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230473&o=json
            external_identifier: CBDB:230473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GyJ9hyqoHKZEa8T7QKWpWR
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王追美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5bz1q3PGyq3CbeYymXjvGU
          claim_id: c_GyJ9hyqoHKZEa8T7QKWpWR
          source_id: s_bQqevVPGnRS14kcxjFGT9t
          stance: supports
          locator: CBDB:230473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2RQpD2Tmm3hXbsZSrro3sa
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uosHinJhLsUHLFRAnDYOwe
          claim_id: c_2RQpD2Tmm3hXbsZSrro3sa
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mrpj37C8DH4qVHGNGQntYM
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 207264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json
            external_identifier: CBDB:207264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
    - claim:
        id: c_9lYXMcWH9MosKMY7q16LHM
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NpUjCMnr3vateBNa88RNFa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlWuwba3trMPUG_f2rA0XS
          claim_id: c_9lYXMcWH9MosKMY7q16LHM
          source_id: s_JeOnMNb5PQGzLiByVkecNT
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一寧 与 王一鳴 为同胞（CBDB 记「兄」），王一鳴 之父／母即 王一寧 之父／母。
          source:
            id: s_JeOnMNb5PQGzLiByVkecNT
            source_type: api_record
            title: 中国历代人物传记资料库：王一寧（CBDB 230481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json
            external_identifier: CBDB:230481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpUjCMnr3vateBNa88RNFa
        status: active
        display_name: 王一寧
        merged_into_person_id: null
    - claim:
        id: c_8QAmtW7wx52voJdxbjB7-R
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gEnZLZ59BdARRR4HvdHJTz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6cGqNK1Z97wz54C9mOEOyW
          claim_id: c_8QAmtW7wx52voJdxbjB7-R
          source_id: s_vXbpI9H6FXuBumAJMshn6a
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一文 与 王一鳴 为同胞（CBDB 记「兄」），王一鳴 之父／母即 王一文 之父／母。
          source:
            id: s_vXbpI9H6FXuBumAJMshn6a
            source_type: api_record
            title: 中国历代人物传记资料库：王一文（CBDB 230480）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json
            external_identifier: CBDB:230480
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gEnZLZ59BdARRR4HvdHJTz
        status: active
        display_name: 王一文
        merged_into_person_id: null
    - claim:
        id: c_UOBLxQQo3tsPdJHwqV8E3n
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gL95C6iSo5JiMEeXTZCE27
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jCynlMKrWjU0h-TSN08kIw
          claim_id: c_UOBLxQQo3tsPdJHwqV8E3n
          source_id: s_zU-1x65syOK_hNwFT8b4SU
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一奇 与 王一鳴 为同胞（CBDB 记「弟」），王一鳴 之父／母即 王一奇 之父／母。
          source:
            id: s_zU-1x65syOK_hNwFT8b4SU
            source_type: api_record
            title: 中国历代人物传记资料库：王一奇（CBDB 230478）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json
            external_identifier: CBDB:230478
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gL95C6iSo5JiMEeXTZCE27
        status: active
        display_name: 王一奇
        merged_into_person_id: null
    - claim:
        id: c_5AKL4tr8gdiyeisowFPWVH
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k1orWwRhbBXEJcpco7J2As
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2CWIaMk8JGEQF4gQhZj5fY
          claim_id: c_5AKL4tr8gdiyeisowFPWVH
          source_id: s_EZMHWVp35NNdMNkz0u1C-_
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一治 与 王一鳴 为同胞（CBDB 记「兄」），王一鳴 之父／母即 王一治 之父／母。
          source:
            id: s_EZMHWVp35NNdMNkz0u1C-_
            source_type: api_record
            title: 中国历代人物传记资料库：王一治（CBDB 230479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json
            external_identifier: CBDB:230479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k1orWwRhbBXEJcpco7J2As
        status: active
        display_name: 王一治
        merged_into_person_id: null
    - claim:
        id: c_63JX-7RhBtpbI3GK056DYJ
        subject_person_id: p_1NFpKAdMuHUnaxbGrqKLeD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVt2Pp_o64zK1MfZYaQVQX
          claim_id: c_63JX-7RhBtpbI3GK056DYJ
          source_id: s_yMTF0VhDJPNBFaQEJqqKSq
          stance: supports
          locator: CBDB：兄弟 王一鳴（207264）之父／母 王追美
          quotation: null
          interpretation_note: 由兄弟关系推断：王一中 与 王一鳴 为同胞（CBDB 记「弟」），王一鳴 之父／母即 王一中 之父／母。
          source:
            id: s_yMTF0VhDJPNBFaQEJqqKSq
            source_type: api_record
            title: 中国历代人物传记资料库：王一中（CBDB 230477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json
            external_identifier: CBDB:230477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yfv4AKPLpmPbw2Ga9k5Jfg
        status: active
        display_name: 王一中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王追美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王追美，明人物。萬曆丙戌科進士進士，籍贯黃岡，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 230473） | accepted |
| name.primary | 王追美 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |
| children | p_NpUjCMnr3vateBNa88RNFa | 王一寧 | accepted |
| children | p_gEnZLZ59BdARRR4HvdHJTz | 王一文 | accepted |
| children | p_gL95C6iSo5JiMEeXTZCE27 | 王一奇 | accepted |
| children | p_k1orWwRhbBXEJcpco7J2As | 王一治 | accepted |
| children | p_yfv4AKPLpmPbw2Ga9k5Jfg | 王一中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王一鳴（CBDB 207264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json)
- [中国历代人物传记资料库：王一寧（CBDB 230481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230481&o=json)
- [中国历代人物传记资料库：王一奇（CBDB 230478）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230478&o=json)
- [中国历代人物传记资料库：王一文（CBDB 230480）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230480&o=json)
- [中国历代人物传记资料库：王一治（CBDB 230479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230479&o=json)
- [中国历代人物传记资料库：王一中（CBDB 230477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230477&o=json)
- [中国历代人物传记资料库：王追美（CBDB 230473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230473&o=json)
