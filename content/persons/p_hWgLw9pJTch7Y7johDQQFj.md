---
schema: wang-person/v1
id: p_hWgLw9pJTch7Y7johDQQFj
status: active
merged_into: null
display_name: 劉住隆
revision: 1
cbdb_id: 147623
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_OVKs7R3ooqiyh_1cvy6jbp
        subject_person_id: p_hWgLw9pJTch7Y7johDQQFj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉住隆
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gsNsZKH639-wi70PmJTeLk
          claim_id: c_OVKs7R3ooqiyh_1cvy6jbp
          source_id: s_3oz7kN22Oyz5ehRdopU7Qg
          stance: supports
          locator: CBDB:147623
          quotation: null
          interpretation_note: CBDB 明确记录的王延臺配偶
          source: &a1
            id: s_3oz7kN22Oyz5ehRdopU7Qg
            source_type: api_record
            title: 中国历代人物传记资料库：劉住隆（CBDB 147623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147623&o=json
            external_identifier: CBDB:147623
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
        id: c_z89mFeyFBSxAVi_PoL4aSq
        subject_person_id: p_PLwQbKfLnyAn5BB4Z94axi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_hWgLw9pJTch7Y7johDQQFj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NJ4jptx5q-mfdhD4h-Pk2_
          claim_id: c_z89mFeyFBSxAVi_PoL4aSq
          source_id: s_3oz7kN22Oyz5ehRdopU7Qg
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 137：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PLwQbKfLnyAn5BB4Z94axi
        status: active
        display_name: 王延臺
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉住隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 劉住隆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_PLwQbKfLnyAn5BB4Z94axi | 王延臺 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉住隆（CBDB 147623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147623&o=json)
