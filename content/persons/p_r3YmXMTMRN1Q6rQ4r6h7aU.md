---
schema: wang-person/v1
id: p_r3YmXMTMRN1Q6rQ4r6h7aU
status: active
merged_into: null
display_name: 王嘉言
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cncMZQ14RvPG6n6RaurfEB
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGGh4ewJ5nHNVf5JiqNb8b
          claim_id: c_cncMZQ14RvPG6n6RaurfEB
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
          stance: supports
          locator: CBDB:205198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205198）
          source: &a1
            id: s_5fHZ2Cq7T4pczV6fUX6Sne
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉言（CBDB 205198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205198&o=json
            external_identifier: CBDB:205198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vaLw9n11aRMsyXnYEPQPta
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UCN3aHNW8bdaoeEZDf3o1C
          claim_id: c_vaLw9n11aRMsyXnYEPQPta
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AwiuotZbgxwpJPyDKusHcn
        subject_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ktwrte6zvfVM3SJepmoVo9
          claim_id: c_AwiuotZbgxwpJPyDKusHcn
          source_id: s_5fHZ2Cq7T4pczV6fUX6Sne
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__1E9piWiusvFrFOgDMcvqg
        subject_person_id: p_JU9QND8EpB5j1nHM1oqMW3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E9ynJBb8Z-uQQymwG4u0tX
          claim_id: c__1E9piWiusvFrFOgDMcvqg
          source_id: s_yx3jQDcWyCpak1yVQnjUEe
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yx3jQDcWyCpak1yVQnjUEe
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 329572）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329572&o=json
            external_identifier: CBDB:329572
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JU9QND8EpB5j1nHM1oqMW3
        status: active
        display_name: 王畿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_owGjz-TTHShknI4A2mjzY_
        subject_person_id: p_5gc8MnXmVVMNsYsf3r7bxp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_r3YmXMTMRN1Q6rQ4r6h7aU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kp8Vh2UdLleY-bqpCXhADz
          claim_id: c_owGjz-TTHShknI4A2mjzY_
          source_id: s_JUTbKpkzL9QGitGputGGzK
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JUTbKpkzL9QGitGputGGzK
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 329571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329571&o=json
            external_identifier: CBDB:329571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5gc8MnXmVVMNsYsf3r7bxp
        status: active
        display_name: 王信
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王嘉言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉言 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JU9QND8EpB5j1nHM1oqMW3 | 王畿 | accepted |
| ancestors | p_5gc8MnXmVVMNsYsf3r7bxp | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 329572）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329572&o=json)
- [中国历代人物传记资料库：王嘉言（CBDB 205198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205198&o=json)
- [中国历代人物传记资料库：王信（CBDB 329571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=329571&o=json)
