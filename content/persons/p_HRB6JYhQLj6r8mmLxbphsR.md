---
schema: wang-person/v1
id: p_HRB6JYhQLj6r8mmLxbphsR
status: active
merged_into: null
display_name: 王用章
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ivw4jsessKMFMcUWQzHuKS
        subject_person_id: p_HRB6JYhQLj6r8mmLxbphsR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HfL5pWu1Q3FTjQ1pNakLp5
          claim_id: c_ivw4jsessKMFMcUWQzHuKS
          source_id: s_KDwwKJ6DYAV9AjJyeJuwt4
          stance: supports
          locator: CBDB:126495
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126495）
          source: &a1
            id: s_KDwwKJ6DYAV9AjJyeJuwt4
            source_type: api_record
            title: 中国历代人物传记资料库：王用章（CBDB 126495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126495&o=json
            external_identifier: CBDB:126495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_48Zu9AmwCBbxegL3TGio8C
        subject_person_id: p_HRB6JYhQLj6r8mmLxbphsR
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
        - id: cs_MabcCCDS1hVyE4xia1raLx
          claim_id: c_48Zu9AmwCBbxegL3TGio8C
          source_id: s_KDwwKJ6DYAV9AjJyeJuwt4
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
        id: c_kR6NRxYkMcKF7JV_lnPoK9
        subject_person_id: p_R5xXVMm2VFc9ZSK17QQRYB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HRB6JYhQLj6r8mmLxbphsR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EqCpAuqYCB-gpdg9dLpnCR
          claim_id: c_kR6NRxYkMcKF7JV_lnPoK9
          source_id: s_Y8gKpATUSjQBqMg7YCor6a
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y8gKpATUSjQBqMg7YCor6a
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 333037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333037&o=json
            external_identifier: CBDB:333037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_R5xXVMm2VFc9ZSK17QQRYB
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_npY6WgYHLSXuug3hyv27nD
        subject_person_id: p_431rGKm37v1gY69WsAauGK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HRB6JYhQLj6r8mmLxbphsR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GNNJGJbgbT1m4mYWHcGPbZ
          claim_id: c_npY6WgYHLSXuug3hyv27nD
          source_id: s_Nj8zTc3ZXL22HN6yue6EK4
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nj8zTc3ZXL22HN6yue6EK4
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 333036）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333036&o=json
            external_identifier: CBDB:333036
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_431rGKm37v1gY69WsAauGK
        status: active
        display_name: 王俊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用章 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R5xXVMm2VFc9ZSK17QQRYB | 王綱 | accepted |
| ancestors | p_431rGKm37v1gY69WsAauGK | 王俊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 333037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333037&o=json)
- [中国历代人物传记资料库：王俊（CBDB 333036）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333036&o=json)
- [中国历代人物传记资料库：王用章（CBDB 126495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126495&o=json)
