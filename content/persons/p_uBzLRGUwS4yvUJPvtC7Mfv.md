---
schema: wang-person/v1
id: p_uBzLRGUwS4yvUJPvtC7Mfv
status: active
merged_into: null
display_name: 王傑
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HX4yMTd8QkQQGPDiJ6cnnS
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qJ14qNT1TVDpCpvp53RcWr
          claim_id: c_HX4yMTd8QkQQGPDiJ6cnnS
          source_id: s_KMw9QPDX84rB4MUKxnL14K
          stance: supports
          locator: CBDB:249596
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249596）
          source: &a1
            id: s_KMw9QPDX84rB4MUKxnL14K
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 249596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json
            external_identifier: CBDB:249596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eCPHS7RxKN2yvJKSMeK5rR
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。成化十一年進士，籍贯鄒縣。（中国历代人物传记资料库 CBDB 249596）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1V3aoP8CsOgP1QQ5oBnMlI
          claim_id: c_eCPHS7RxKN2yvJKSMeK5rR
          source_id: s_KMw9QPDX84rB4MUKxnL14K
          stance: supports
          locator: CBDB:249596
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c__HKktwuJu5SqDtwQKuGtlB
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JEUpyam7C1Pm8JC9r4xGZ3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y4EYz1BdKWBtX5RAohdwg2
          claim_id: c__HKktwuJu5SqDtwQKuGtlB
          source_id: s_KMw9QPDX84rB4MUKxnL14K
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第九十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JEUpyam7C1Pm8JC9r4xGZ3
        status: active
        display_name: 王舉
        merged_into_person_id: null
    - claim:
        id: c_k9hBWIlpM8lEqbd_ovulfW
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4N2N5gMpcXxSXp9hMVQ3k6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y6z-6EGaDBvnfBLvP8M_Fb
          claim_id: c_k9hBWIlpM8lEqbd_ovulfW
          source_id: s_qiHvoXCi_2AhgIfQvUcEVm
          stance: supports
          locator: CBDB：兄弟 王舉（199783）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王舉 为同胞（CBDB 记「弟」），王舉 之父／母即 王政 之父／母。
          source:
            id: s_qiHvoXCi_2AhgIfQvUcEVm
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 249600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249600&o=json
            external_identifier: CBDB:249600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4N2N5gMpcXxSXp9hMVQ3k6
        status: active
        display_name: 王政
        merged_into_person_id: null
    - claim:
        id: c_JKoy9n3QZYLkiiFMOF11_x
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9E1V2LjENRjPwBXXnGpYEZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qmEzj7kNHhvJLeqiv-06f
          claim_id: c_JKoy9n3QZYLkiiFMOF11_x
          source_id: s_F2kYbfQuDAyZbWMjHOieKq
          stance: supports
          locator: CBDB：兄弟 王舉（199783）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王譽 与 王舉 为同胞（CBDB 记「兄」），王舉 之父／母即 王譽 之父／母。
          source:
            id: s_F2kYbfQuDAyZbWMjHOieKq
            source_type: api_record
            title: 中国历代人物传记资料库：王譽（CBDB 249603）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249603&o=json
            external_identifier: CBDB:249603
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9E1V2LjENRjPwBXXnGpYEZ
        status: active
        display_name: 王譽
        merged_into_person_id: null
    - claim:
        id: c_ViW6FmZkJAl7BdgG-jaKrI
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nhuc9MmgLpwGANEq9M8Q5J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Pf2_sMhjqrzV2Sq4brR2eo
          claim_id: c_ViW6FmZkJAl7BdgG-jaKrI
          source_id: s_w_OlLuIGb-lSzJT9d4aqSI
          stance: supports
          locator: CBDB：兄弟 王舉（199783）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑑 与 王舉 为同胞（CBDB 记「兄」），王舉 之父／母即 王鑑 之父／母。
          source:
            id: s_w_OlLuIGb-lSzJT9d4aqSI
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 249602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json
            external_identifier: CBDB:249602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nhuc9MmgLpwGANEq9M8Q5J
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_vH9h2OpE670og3mvtcqKSo
        subject_person_id: p_uBzLRGUwS4yvUJPvtC7Mfv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nNE16Q4CMo3d9F4xN4t27X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__4FfCrbcmGVsm1yevSapIO
          claim_id: c_vH9h2OpE670og3mvtcqKSo
          source_id: s_dldod0T12Gtqr9BbELJT4-
          stance: supports
          locator: CBDB：兄弟 王舉（199783）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王原 与 王舉 为同胞（CBDB 记「弟」），王舉 之父／母即 王原 之父／母。
          source:
            id: s_dldod0T12Gtqr9BbELJT4-
            source_type: api_record
            title: 中国历代人物传记资料库：王原（CBDB 249601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249601&o=json
            external_identifier: CBDB:249601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nNE16Q4CMo3d9F4xN4t27X
        status: active
        display_name: 王原
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。成化十一年進士，籍贯鄒縣。（中国历代人物传记资料库 CBDB 249596） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_JEUpyam7C1Pm8JC9r4xGZ3 | 王舉 | accepted |
| children | p_4N2N5gMpcXxSXp9hMVQ3k6 | 王政 | accepted |
| children | p_9E1V2LjENRjPwBXXnGpYEZ | 王譽 | accepted |
| children | p_Nhuc9MmgLpwGANEq9M8Q5J | 王鑑 | accepted |
| children | p_nNE16Q4CMo3d9F4xN4t27X | 王原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 249602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249602&o=json)
- [中国历代人物传记资料库：王傑（CBDB 249596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249596&o=json)
- [中国历代人物传记资料库：王譽（CBDB 249603）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249603&o=json)
- [中国历代人物传记资料库：王原（CBDB 249601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249601&o=json)
- [中国历代人物传记资料库：王政（CBDB 249600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249600&o=json)
