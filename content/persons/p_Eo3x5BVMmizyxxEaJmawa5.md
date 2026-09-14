---
schema: wang-person/v1
id: p_Eo3x5BVMmizyxxEaJmawa5
status: active
merged_into: null
display_name: 王嘉柔
cbdb_id: 205854
revision: 7
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j9mAqpXQP318ybqEiXmEpn
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉柔（生于1539年），明人物。明清進士進士，籍贯潛山，入仕進士。（中国历代人物传记资料库 CBDB 205854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pccXIOLhgQebo1kQZSlJd2
          claim_id: c_j9mAqpXQP318ybqEiXmEpn
          source_id: s_HwSDAmxyqqKZw2tCP1Fx45
          stance: supports
          locator: CBDB:205854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HwSDAmxyqqKZw2tCP1Fx45
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉柔（CBDB 205854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205854&o=json
            external_identifier: CBDB:205854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1Er3UFWM38vWa9naKbKvvD
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1539-01-01
            latest: 1539-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FYzXqRnWvpw1woz3kU6JqB
          claim_id: c_1Er3UFWM38vWa9naKbKvvD
          source_id: s_HwSDAmxyqqKZw2tCP1Fx45
          stance: supports
          locator: CBDB:205854
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1539
          source:
            id: s_HwSDAmxyqqKZw2tCP1Fx45
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉柔（CBDB 205854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205854&o=json
            external_identifier: CBDB:205854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3sK5nmk3qVq6k4KFRRrjNf
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉柔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZfMV5fKiPJBVcpJuzBRD1P
          claim_id: c_3sK5nmk3qVq6k4KFRRrjNf
          source_id: s_HwSDAmxyqqKZw2tCP1Fx45
          stance: supports
          locator: CBDB:205854
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1539
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uokYxwjhkmoDT0eyTUy0Uc
        subject_person_id: p_1VkGu8uv668PXiV6BFFStb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6k5vEJAcY6rSKxJEEOIUM
          claim_id: c_uokYxwjhkmoDT0eyTUy0Uc
          source_id: s_oM5BoRBp5PtPWyQxg9MHHZ
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oM5BoRBp5PtPWyQxg9MHHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王漟（CBDB 209785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209785&o=json
            external_identifier: CBDB:209785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_1VkGu8uv668PXiV6BFFStb
        status: active
        display_name: 王漟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YaSibm05f0NN9sRJ6khjYZ
        subject_person_id: p_tLcb48Ag5AxJAgsh7zfPuD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3T3cPb-mm_p5mS1vlnDVB9
          claim_id: c_YaSibm05f0NN9sRJ6khjYZ
          source_id: s_9xrMARrMTGukG5mXK73SJh
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9xrMARrMTGukG5mXK73SJh
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 209783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209783&o=json
            external_identifier: CBDB:209783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tLcb48Ag5AxJAgsh7zfPuD
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_Z1Wl5sZGjclQGxBB0JGFe3
        subject_person_id: p_KqcphAEnogCKRbv8TNBY9D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H1GJxU-96CT5OTFE_Z2lZb
          claim_id: c_Z1Wl5sZGjclQGxBB0JGFe3
          source_id: s_y4ecSDKCyeu9kV4WPKWWTc
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第八十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y4ecSDKCyeu9kV4WPKWWTc
            source_type: api_record
            title: 中国历代人物传记资料库：王峘（CBDB 209784）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209784&o=json
            external_identifier: CBDB:209784
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_KqcphAEnogCKRbv8TNBY9D
        status: active
        display_name: 王峘
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_1BjVzpceiVuBzyJ7G6eDVi
        subject_person_id: p_B8EmnM5VEuiUvV7z7ZJ7ZA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fnhL0tTncWz7Lkzj5lyFZe
          claim_id: c_1BjVzpceiVuBzyJ7G6eDVi
          source_id: s_aBqnRX3MiLCzmeTp8K5tf8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205854 王嘉柔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aBqnRX3MiLCzmeTp8K5tf8
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉棨（CBDB 209789）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209789&o=json
            external_identifier: CBDB:209789
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B8EmnM5VEuiUvV7z7ZJ7ZA
        status: active
        display_name: 王嘉棨
        merged_into_person_id: null
    - claim:
        id: c_B6D45XR6MQzWuRiuW7jg8N
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Qz5eSMUhWXhxV3CqkvQZeD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tZhytJr31zY0vgq9c0qIv-
          claim_id: c_B6D45XR6MQzWuRiuW7jg8N
          source_id: s_C-m7ilHiolSQQNhztCDJhN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205854 王嘉柔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C-m7ilHiolSQQNhztCDJhN
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉檠（CBDB 209790）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json
            external_identifier: CBDB:209790
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Qz5eSMUhWXhxV3CqkvQZeD
        status: active
        display_name: 王嘉檠
        merged_into_person_id: null
    - claim:
        id: c_bTTxs_g4VdToKsbj6smP4N
        subject_person_id: p_Eo3x5BVMmizyxxEaJmawa5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_S3KVQDZtVGef9kj9DGD5B8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i4ZksKWOzUFUCq_hskA3B-
          claim_id: c_bTTxs_g4VdToKsbj6smP4N
          source_id: s_88I_gdoL39AK5ppR81VTnU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205854 王嘉柔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_88I_gdoL39AK5ppR81VTnU
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉寀（CBDB 209791）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json
            external_identifier: CBDB:209791
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S3KVQDZtVGef9kj9DGD5B8
        status: active
        display_name: 王嘉寀
        merged_into_person_id: null
---

# 王嘉柔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王嘉柔（生于1539年），明人物。明清進士進士，籍贯潛山，入仕進士。（中国历代人物传记资料库 CBDB 205854） | accepted |
| birth.date | 1539年 | accepted |
| name.primary | 王嘉柔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1VkGu8uv668PXiV6BFFStb | 王漟 | accepted |
| ancestors | p_tLcb48Ag5AxJAgsh7zfPuD | 王道 | accepted |
| ancestors | p_KqcphAEnogCKRbv8TNBY9D | 王峘 | accepted |
| other | p_B8EmnM5VEuiUvV7z7ZJ7ZA | 王嘉棨 | accepted |
| other | p_Qz5eSMUhWXhxV3CqkvQZeD | 王嘉檠 | accepted |
| other | p_S3KVQDZtVGef9kj9DGD5B8 | 王嘉寀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道（CBDB 209783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209783&o=json)
- [中国历代人物传记资料库：王峘（CBDB 209784）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209784&o=json)
- [中国历代人物传记资料库：王嘉寀（CBDB 209791）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209791&o=json)
- [中国历代人物传记资料库：王嘉棨（CBDB 209789）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209789&o=json)
- [中国历代人物传记资料库：王嘉檠（CBDB 209790）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209790&o=json)
- [中国历代人物传记资料库：王嘉柔（CBDB 205854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205854&o=json)
- [中国历代人物传记资料库：王漟（CBDB 209785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209785&o=json)
