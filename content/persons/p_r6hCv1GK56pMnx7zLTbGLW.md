---
schema: wang-person/v1
id: p_r6hCv1GK56pMnx7zLTbGLW
status: active
merged_into: null
display_name: 王侹
cbdb_id: 298825
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DtzHUfZbfyssty8tnye7HQ
        subject_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侹，明人物。嘉靖十七年進士，籍贯永嘉，曾任都察院都事。（中国历代人物传记资料库 CBDB 298825）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qUqO6Q0X8wGtPmTJ2DtUAK
          claim_id: c_DtzHUfZbfyssty8tnye7HQ
          source_id: s_46cBW3MZh9XWGBwwayEcjJ
          stance: supports
          locator: CBDB:298825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_46cBW3MZh9XWGBwwayEcjJ
            source_type: api_record
            title: 中国历代人物传记资料库：王侹（CBDB 298825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json
            external_identifier: CBDB:298825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UN6T3RM2rUQ8b8P2LLj26s
        subject_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jqYAouMJK36L9AqPetxbho
          claim_id: c_UN6T3RM2rUQ8b8P2LLj26s
          source_id: s_46cBW3MZh9XWGBwwayEcjJ
          stance: supports
          locator: CBDB:298825
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ajAhOe-WQJE4KvZ8f_kzcb
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWz-q2yZLCKo5SyU56R1rA
          claim_id: c_ajAhOe-WQJE4KvZ8f_kzcb
          source_id: s_KpRASkFWoHHRO1z0M1qdhx
          stance: supports
          locator: CBDB：兄弟 王健（203037）之父／母 王瓚
          quotation: null
          interpretation_note: 由兄弟关系推断：王侹 与 王健 为同胞（CBDB 记「弟」），王健 之父／母即 王侹 之父／母。
          source:
            id: s_KpRASkFWoHHRO1z0M1qdhx
            source_type: api_record
            title: 中国历代人物传记资料库：王侹（CBDB 298825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json
            external_identifier: CBDB:298825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1v36CPdP8tsG1X5DfhzMf4
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Jn-M-vRzSHeOg_2xm4gK2W
        subject_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iju5m2udSxHmY-g778ydzk
          claim_id: c_Jn-M-vRzSHeOg_2xm4gK2W
          source_id: s_KpRASkFWoHHRO1z0M1qdhx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KpRASkFWoHHRO1z0M1qdhx
            source_type: api_record
            title: 中国历代人物传记资料库：王侹（CBDB 298825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json
            external_identifier: CBDB:298825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sVZp7AN2wCm1EcSo9rSyTJ
        status: active
        display_name: 王健
        merged_into_person_id: null
---

# 王侹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王侹，明人物。嘉靖十七年進士，籍贯永嘉，曾任都察院都事。（中国历代人物传记资料库 CBDB 298825） | accepted |
| name.primary | 王侹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| other | p_sVZp7AN2wCm1EcSo9rSyTJ | 王健 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侹（CBDB 298825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json)
