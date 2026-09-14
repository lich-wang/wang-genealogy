---
schema: wang-person/v1
id: p_u84RG1pPeLw4QLHw6xBnkL
status: active
merged_into: null
display_name: 王可大
revision: 10
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZCGEadg3guB5K5kPh5S8BW
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Nb5pGX7NNd6r3XtGDJ47d5
          claim_id: c_ZCGEadg3guB5K5kPh5S8BW
          source_id: s_yz6wrAHGHPEjAVEkrsBo4M
          stance: supports
          locator: CBDB:330521
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330521）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yvG9cq5fEav2ibKdHNwWGB
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可大，明人物。嘉靖四十四年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 330521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qYvt5Jj6D_2v8nWwuhjqMP
          claim_id: c_yvG9cq5fEav2ibKdHNwWGB
          source_id: s_yz6wrAHGHPEjAVEkrsBo4M
          stance: supports
          locator: CBDB:330521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_hwqZhRmhj6vWvdBxFiX9dy
        status: active
        display_name: 王執禮
        merged_into_person_id: null
    - claim:
        id: c_oTwtRe5am6AcbLzEbCjxA_
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5LtoNyYNtvgey4yQWea6bH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n96bOi5S8dQg33VOEUo_wB
          claim_id: c_oTwtRe5am6AcbLzEbCjxA_
          source_id: s_P_fkEIScq1EcMDe5L8DT-m
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執中 与 王執禮 为同胞（CBDB 记「弟」），王執禮 之父／母即 王執中 之父／母。
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
        id: c_ByeUVbQOx5PeHEntRRRC87
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_62Q8L1rXCm3Z3VUgxG6Fso
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1bKKb0weQ1e7ZVRmeVQsD
          claim_id: c_ByeUVbQOx5PeHEntRRRC87
          source_id: s_6sc5WHcttCq-CVewaiKoyn
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執御 与 王執禮 为同胞（CBDB 记「弟」），王執禮 之父／母即 王執御 之父／母。
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
        id: c_CztYO6yxTqW3W5Og8vb3jl
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_L5e29JxKfX7RRrvCSf3KzX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ng9XKeCq-mwXMdFdwcJBil
          claim_id: c_CztYO6yxTqW3W5Og8vb3jl
          source_id: s_l0f_Qz-42QjjxfMFtnLUNj
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執璧 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執璧 之父／母。
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
        id: c_SciL770Yay0G_wn5UG90qf
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b4UdtbQ2DqFm5BWNEf9uJj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_solaqJy8jxLqILjw8Xau35
          claim_id: c_SciL770Yay0G_wn5UG90qf
          source_id: s_avur688JT0_D3Ib6tuBX_q
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執璋 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執璋 之父／母。
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
        id: c_00q-xnVoQ3SFb5WY_Elnwz
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ckGFfMbHQMMKR94RfeYPgD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfj-Ud9GqlW4OpKrhjLttj
          claim_id: c_00q-xnVoQ3SFb5WY_Elnwz
          source_id: s_ziWtl1Br-g6oJIQ5ImyT-b
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執經 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執經 之父／母。
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
        id: c_w4ls0yBm_s5DmqzSAUuo1N
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f1FD2dxtctBfxMEcEAriux
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eNqlj-KoWfnScBhMKaO6Oj
          claim_id: c_w4ls0yBm_s5DmqzSAUuo1N
          source_id: s_jtqSPF30suc7P2p7DvemNe
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執策 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執策 之父／母。
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
        id: c_CNRxwvp1Pljq2_UmKkn4N7
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fhyAZ7pjxiNFSFYQVCpzNS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zYo0XWrYKGo-pJa2azRIqs
          claim_id: c_CNRxwvp1Pljq2_UmKkn4N7
          source_id: s_RxmKSd78ICjES8oXhfVySP
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執法 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執法 之父／母。
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
        id: c_eRZGLpOsHmTZiXA-_tapLk
        subject_person_id: p_u84RG1pPeLw4QLHw6xBnkL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gA2hV7GxzFt9EeErJrfVnR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6die2lmaFvGcpB-arTdscX
          claim_id: c_eRZGLpOsHmTZiXA-_tapLk
          source_id: s_pVFtEM6nK1BKBcJIBQh5Wq
          stance: supports
          locator: CBDB：兄弟 王執禮（126683）之父／母 王可大
          quotation: null
          interpretation_note: 由兄弟关系推断：王執琩 与 王執禮 为同胞（CBDB 记「兄」），王執禮 之父／母即 王執琩 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王可大

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可大 | accepted |
| bio.summary | 王可大，明人物。嘉靖四十四年進士，籍贯崑山，入仕監生。（中国历代人物传记资料库 CBDB 330521） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_hwqZhRmhj6vWvdBxFiX9dy | 王執禮 | accepted |
| children | p_5LtoNyYNtvgey4yQWea6bH | 王執中 | accepted |
| children | p_62Q8L1rXCm3Z3VUgxG6Fso | 王執御 | accepted |
| children | p_L5e29JxKfX7RRrvCSf3KzX | 王執璧 | accepted |
| children | p_b4UdtbQ2DqFm5BWNEf9uJj | 王執璋 | accepted |
| children | p_ckGFfMbHQMMKR94RfeYPgD | 王執經 | accepted |
| children | p_f1FD2dxtctBfxMEcEAriux | 王執策 | accepted |
| children | p_fhyAZ7pjxiNFSFYQVCpzNS | 王執法 | accepted |
| children | p_gA2hV7GxzFt9EeErJrfVnR | 王執琩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王可大（CBDB 330521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330521&o=json)
- [中国历代人物传记资料库：王執璧（CBDB 330528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330528&o=json)
- [中国历代人物传记资料库：王執策（CBDB 330530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330530&o=json)
- [中国历代人物传记资料库：王執琩（CBDB 330532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330532&o=json)
- [中国历代人物传记资料库：王執法（CBDB 330529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330529&o=json)
- [中国历代人物传记资料库：王執經（CBDB 330526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330526&o=json)
- [中国历代人物传记资料库：王執御（CBDB 330524）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330524&o=json)
- [中国历代人物传记资料库：王執璋（CBDB 330527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330527&o=json)
- [中国历代人物传记资料库：王執中（CBDB 330525）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330525&o=json)
