---
schema: wang-person/v1
id: p_z9zrHS6xQYVwj1veje1wNo
status: active
merged_into: null
display_name: 王端
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QtRaK27EqATG2MU8kadi3R
        subject_person_id: p_z9zrHS6xQYVwj1veje1wNo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q3kA43jG4Vt16AJhZvFMA4
          claim_id: c_QtRaK27EqATG2MU8kadi3R
          source_id: s_jChxC7iLeVHD3gYMmtWKq7
          stance: supports
          locator: CBDB:254316
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254316）
          source: &a1
            id: s_jChxC7iLeVHD3gYMmtWKq7
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 254316）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254316&o=json
            external_identifier: CBDB:254316
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TvY4bEpLWCnXMa4DV58svC
        subject_person_id: p_z9zrHS6xQYVwj1veje1wNo
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
        - id: cs_XTFB9jvKc5X9NRKJonSCLB
          claim_id: c_TvY4bEpLWCnXMa4DV58svC
          source_id: s_jChxC7iLeVHD3gYMmtWKq7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_TSqCGNjyz1ZYq-J3v-Bmk7
        subject_person_id: p_z9zrHS6xQYVwj1veje1wNo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oPLWhhcUgR56XRswCqgGBJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nc6Hqttd31nrOtN-ogPnXJ
          claim_id: c_TSqCGNjyz1ZYq-J3v-Bmk7
          source_id: s_jChxC7iLeVHD3gYMmtWKq7
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oPLWhhcUgR56XRswCqgGBJ
        status: active
        display_name: 王能
        merged_into_person_id: null
  other: []
---

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oPLWhhcUgR56XRswCqgGBJ | 王能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 254316）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254316&o=json)
