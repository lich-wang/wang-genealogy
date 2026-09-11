---
schema: wang-person/v1
id: p_RhC617Pvp2mk9j4bcF6rFB
status: active
merged_into: null
display_name: 王治
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1deVwP5X1P3X4jUD63VKpb
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KEBJ53xNajAsodSzu7UPzA
          claim_id: c_1deVwP5X1P3X4jUD63VKpb
          source_id: s_WQZarDmQLdatwvJ9BsENky
          stance: supports
          locator: CBDB:558443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558443）
          source: &a1
            id: s_WQZarDmQLdatwvJ9BsENky
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 558443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558443&o=json
            external_identifier: CBDB:558443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.699Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eEDQNvLDFQQANU13fztFBU
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fBCPn2MZAFXc55mMWtY5Ly
          claim_id: c_eEDQNvLDFQQANU13fztFBU
          source_id: s_WQZarDmQLdatwvJ9BsENky
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ekBUbwgqX_rWuANgERWROF
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gs1MTkNRMULVKiX3rQ73Di
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c3If_xnxSPXE3Ewi4GVvSA
          claim_id: c_ekBUbwgqX_rWuANgERWROF
          source_id: s_rztfeYE3bch7GGqoth3Zgk
          stance: supports
          locator: (乾隆)信陽州志，lgid=868524：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rztfeYE3bch7GGqoth3Zgk
            source_type: api_record
            title: 中国历代人物传记资料库：王樂禮（CBDB 558445）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558445&o=json
            external_identifier: CBDB:558445
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gs1MTkNRMULVKiX3rQ73Di
        status: active
        display_name: 王樂禮
        merged_into_person_id: null
    - claim:
        id: c_VxMXhBJcI9Y2LQPGl3d6iP
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YjcsoTbHxSR4JnYn2ozRaG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lr1a0i1-2LP4xfRTWz6phc
          claim_id: c_VxMXhBJcI9Y2LQPGl3d6iP
          source_id: s_k4RgtJ6B4RGcM37n8QUP28
          stance: supports
          locator: (乾隆)信陽州志，lgid=868524：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_k4RgtJ6B4RGcM37n8QUP28
            source_type: api_record
            title: 中国历代人物传记资料库：王樂天（CBDB 558444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558444&o=json
            external_identifier: CBDB:558444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YjcsoTbHxSR4JnYn2ozRaG
        status: active
        display_name: 王樂天
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Gs1MTkNRMULVKiX3rQ73Di | 王樂禮 | accepted |
| children | p_YjcsoTbHxSR4JnYn2ozRaG | 王樂天 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂禮（CBDB 558445）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558445&o=json)
- [中国历代人物传记资料库：王樂天（CBDB 558444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558444&o=json)
- [中国历代人物传记资料库：王治（CBDB 558443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558443&o=json)
