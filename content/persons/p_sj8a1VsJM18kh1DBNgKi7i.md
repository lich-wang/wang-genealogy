---
schema: wang-person/v1
id: p_sj8a1VsJM18kh1DBNgKi7i
status: active
merged_into: null
display_name: 梁氏
revision: 1
cbdb_id: 699413
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QTc4kqz5tUY5wSg13f9why
        subject_person_id: p_sj8a1VsJM18kh1DBNgKi7i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 梁氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y60cmcexJrqPA9IKoR8Nsf
          claim_id: c_QTc4kqz5tUY5wSg13f9why
          source_id: s_S8WvEytvCz7PtzuPCNYUXa
          stance: supports
          locator: CBDB:699413
          quotation: null
          interpretation_note: CBDB 明确记录的王嵩配偶
          source: &a1
            id: s_S8WvEytvCz7PtzuPCNYUXa
            source_type: api_record
            title: 中国历代人物传记资料库：梁氏(王嵩妻)（CBDB 699413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699413&o=json
            external_identifier: CBDB:699413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Dmp32jgtZxe2o3X0_-XnGd
        subject_person_id: p_Ps7BFpb6ajaHh5BpoYjPd8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sj8a1VsJM18kh1DBNgKi7i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UG9G4bR0_XYsWWPCllIo77
          claim_id: c_Dmp32jgtZxe2o3X0_-XnGd
          source_id: s_S8WvEytvCz7PtzuPCNYUXa
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ps7BFpb6ajaHh5BpoYjPd8
        status: active
        display_name: 王嵩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 梁氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 梁氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Ps7BFpb6ajaHh5BpoYjPd8 | 王嵩 | accepted |

## 外部来源

- [中国历代人物传记资料库：梁氏(王嵩妻)（CBDB 699413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699413&o=json)
