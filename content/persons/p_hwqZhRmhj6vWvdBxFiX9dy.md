---
schema: wang-person/v1
id: p_hwqZhRmhj6vWvdBxFiX9dy
status: active
merged_into: null
display_name: 王執禮
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fthxPTJVvEjH1A7d5hH6Uw
        subject_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執禮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TLHTGHQ5NKKCB4bF246mKM
          claim_id: c_fthxPTJVvEjH1A7d5hH6Uw
          source_id: s_XCUwMCFtXsa5r4AK5cMLkv
          stance: supports
          locator: CBDB:126683
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126683）
          source: &a1
            id: s_XCUwMCFtXsa5r4AK5cMLkv
            source_type: api_record
            title: 中国历代人物传记资料库：王執禮（CBDB 126683）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126683&o=json
            external_identifier: CBDB:126683
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oX74RBqT37Z1C8eH1vF26Y
        subject_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執禮，明人物。明清進士進士，籍贯崑山，入仕進士，曾任府丞、推官。（中国历代人物传记资料库 CBDB 126683）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dhLIaVqHjggcVyrc_B1cwJ
          claim_id: c_oX74RBqT37Z1C8eH1vF26Y
          source_id: s_XCUwMCFtXsa5r4AK5cMLkv
          stance: supports
          locator: CBDB:126683
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Bd9Rc8YND4QWsQ3lxZj5St
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h8zhlSZ9jpVLyCVAik1-b5
          claim_id: c_Bd9Rc8YND4QWsQ3lxZj5St
          source_id: s_yz6wrAHGHPEjAVEkrsBo4M
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yz6wrAHGHPEjAVEkrsBo4M
            source_type: api_record
            title: 中国历代人物传记资料库：王可大（CBDB 330521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330521&o=json
            external_identifier: CBDB:330521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_u84RG1pPeLw4QLHw6xBnkL
        status: active
        display_name: 王可大
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YS1i_NgSEq-jw3V2DWPkvB
        subject_person_id: p_3Yr6k5NzpfFyJCP92yS9JG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-4Ho4a5fFd31UAldmLPMy1
          claim_id: c_YS1i_NgSEq-jw3V2DWPkvB
          source_id: s_TrAtpm6FbMMuu2d8Sv8FQw
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TrAtpm6FbMMuu2d8Sv8FQw
            source_type: api_record
            title: 中国历代人物传记资料库：王秩（CBDB 330519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330519&o=json
            external_identifier: CBDB:330519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Yr6k5NzpfFyJCP92yS9JG
        status: active
        display_name: 王秩
        merged_into_person_id: null
    - claim:
        id: c_X2aiKxpfsflPj_G_a0NCzV
        subject_person_id: p_417zhfm5ZNXhM1P5NbFe5r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9Pp-G8mff20WUYjpHhUx6O
          claim_id: c_X2aiKxpfsflPj_G_a0NCzV
          source_id: s_Mq7Wmu715YuLUoMU3F5sGs
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mq7Wmu715YuLUoMU3F5sGs
            source_type: api_record
            title: 中国历代人物传记资料库：王詁（CBDB 330518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330518&o=json
            external_identifier: CBDB:330518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_417zhfm5ZNXhM1P5NbFe5r
        status: active
        display_name: 王詁
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Q03fECxtcttt38iNCyizJZ
        subject_person_id: p_5LtoNyYNtvgey4yQWea6bH
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nlWQzRWQOXvAV22JaPlk4D
          claim_id: c_Q03fECxtcttt38iNCyizJZ
          source_id: s_P_fkEIScq1EcMDe5L8DT-m
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P_fkEIScq1EcMDe5L8DT-m
            source_type: api_record
            title: 中国历代人物传记资料库：王執中（CBDB 330525）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330525&o=json
            external_identifier: CBDB:330525
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5LtoNyYNtvgey4yQWea6bH
        status: active
        display_name: 王執中
        merged_into_person_id: null
    - claim:
        id: c_Qb9iykwULJta857_Yq-cKu
        subject_person_id: p_62Q8L1rXCm3Z3VUgxG6Fso
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ehmSeY0oqc1DktJDRqF2qt
          claim_id: c_Qb9iykwULJta857_Yq-cKu
          source_id: s_6sc5WHcttCq-CVewaiKoyn
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6sc5WHcttCq-CVewaiKoyn
            source_type: api_record
            title: 中国历代人物传记资料库：王執御（CBDB 330524）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330524&o=json
            external_identifier: CBDB:330524
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_62Q8L1rXCm3Z3VUgxG6Fso
        status: active
        display_name: 王執御
        merged_into_person_id: null
    - claim:
        id: c_HAy7ggDUPOSftuQHrrdyq8
        subject_person_id: p_L5e29JxKfX7RRrvCSf3KzX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MqopgHeGKH3FTcurf9PKiD
          claim_id: c_HAy7ggDUPOSftuQHrrdyq8
          source_id: s_l0f_Qz-42QjjxfMFtnLUNj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l0f_Qz-42QjjxfMFtnLUNj
            source_type: api_record
            title: 中国历代人物传记资料库：王執璧（CBDB 330528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330528&o=json
            external_identifier: CBDB:330528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L5e29JxKfX7RRrvCSf3KzX
        status: active
        display_name: 王執璧
        merged_into_person_id: null
    - claim:
        id: c_JE6t2cpk1TFmJok9n_yRdI
        subject_person_id: p_b4UdtbQ2DqFm5BWNEf9uJj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ulyinSoJMm2Nq9ZMWcl6iY
          claim_id: c_JE6t2cpk1TFmJok9n_yRdI
          source_id: s_avur688JT0_D3Ib6tuBX_q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_avur688JT0_D3Ib6tuBX_q
            source_type: api_record
            title: 中国历代人物传记资料库：王執璋（CBDB 330527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330527&o=json
            external_identifier: CBDB:330527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b4UdtbQ2DqFm5BWNEf9uJj
        status: active
        display_name: 王執璋
        merged_into_person_id: null
    - claim:
        id: c_JeEUEeWjBafcQLz9m4rIGs
        subject_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7UtG0rtZFnnLBL3lmU21zk
          claim_id: c_JeEUEeWjBafcQLz9m4rIGs
          source_id: s_ziWtl1Br-g6oJIQ5ImyT-b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ziWtl1Br-g6oJIQ5ImyT-b
            source_type: api_record
            title: 中国历代人物传记资料库：王執經（CBDB 330526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json
            external_identifier: CBDB:330526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ckGFfMbHQMMKR94RfeYPgD
        status: active
        display_name: 王執經
        merged_into_person_id: null
    - claim:
        id: c_WcvTkYpE6OvvDV-2EapF4j
        subject_person_id: p_f1FD2dxtctBfxMEcEAriux
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ku1waCSaXBP0m3NgiroNZv
          claim_id: c_WcvTkYpE6OvvDV-2EapF4j
          source_id: s_jtqSPF30suc7P2p7DvemNe
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jtqSPF30suc7P2p7DvemNe
            source_type: api_record
            title: 中国历代人物传记资料库：王執策（CBDB 330530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330530&o=json
            external_identifier: CBDB:330530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f1FD2dxtctBfxMEcEAriux
        status: active
        display_name: 王執策
        merged_into_person_id: null
    - claim:
        id: c_bBz8nOn1Xst3XuIan1D0sU
        subject_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7e1Pfl9T_UUdZ9pjhQpXqM
          claim_id: c_bBz8nOn1Xst3XuIan1D0sU
          source_id: s_RxmKSd78ICjES8oXhfVySP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RxmKSd78ICjES8oXhfVySP
            source_type: api_record
            title: 中国历代人物传记资料库：王執法（CBDB 330529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json
            external_identifier: CBDB:330529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fhyAZ7pjxiNFSFYQVCpzNS
        status: active
        display_name: 王執法
        merged_into_person_id: null
    - claim:
        id: c_wpF7nc9VZVZkkf8lFxcSrW
        subject_person_id: p_gA2hV7GxzFt9EeErJrfVnR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hwqZhRmhj6vWvdBxFiX9dy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p_DH5swpBP_QmhGa5UEfkX
          claim_id: c_wpF7nc9VZVZkkf8lFxcSrW
          source_id: s_pVFtEM6nK1BKBcJIBQh5Wq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126683 王執禮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pVFtEM6nK1BKBcJIBQh5Wq
            source_type: api_record
            title: 中国历代人物传记资料库：王執琩（CBDB 330532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330532&o=json
            external_identifier: CBDB:330532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gA2hV7GxzFt9EeErJrfVnR
        status: active
        display_name: 王執琩
        merged_into_person_id: null
---

# 王執禮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執禮 | accepted |
| bio.summary | 王執禮，明人物。明清進士進士，籍贯崑山，入仕進士，曾任府丞、推官。（中国历代人物传记资料库 CBDB 126683） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_u84RG1pPeLw4QLHw6xBnkL | 王可大 | accepted |
| ancestors | p_3Yr6k5NzpfFyJCP92yS9JG | 王秩 | accepted |
| ancestors | p_417zhfm5ZNXhM1P5NbFe5r | 王詁 | accepted |
| other | p_5LtoNyYNtvgey4yQWea6bH | 王執中 | accepted |
| other | p_62Q8L1rXCm3Z3VUgxG6Fso | 王執御 | accepted |
| other | p_L5e29JxKfX7RRrvCSf3KzX | 王執璧 | accepted |
| other | p_b4UdtbQ2DqFm5BWNEf9uJj | 王執璋 | accepted |
| other | p_ckGFfMbHQMMKR94RfeYPgD | 王執經 | accepted |
| other | p_f1FD2dxtctBfxMEcEAriux | 王執策 | accepted |
| other | p_fhyAZ7pjxiNFSFYQVCpzNS | 王執法 | accepted |
| other | p_gA2hV7GxzFt9EeErJrfVnR | 王執琩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王詁（CBDB 330518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330518&o=json)
- [中国历代人物传记资料库：王可大（CBDB 330521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330521&o=json)
- [中国历代人物传记资料库：王執璧（CBDB 330528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330528&o=json)
- [中国历代人物传记资料库：王執策（CBDB 330530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330530&o=json)
- [中国历代人物传记资料库：王執琩（CBDB 330532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330532&o=json)
- [中国历代人物传记资料库：王執法（CBDB 330529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json)
- [中国历代人物传记资料库：王執經（CBDB 330526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json)
- [中国历代人物传记资料库：王執禮（CBDB 126683）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126683&o=json)
- [中国历代人物传记资料库：王執御（CBDB 330524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330524&o=json)
- [中国历代人物传记资料库：王執璋（CBDB 330527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330527&o=json)
- [中国历代人物传记资料库：王執中（CBDB 330525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330525&o=json)
- [中国历代人物传记资料库：王秩（CBDB 330519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330519&o=json)
