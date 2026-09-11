---
schema: wang-person/v1
id: p_QgiVPXBqFaKhrAo4YkqB2a
status: active
merged_into: null
display_name: 王明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UjYiVAQzfM83bZN8BCNt9M
        subject_person_id: p_QgiVPXBqFaKhrAo4YkqB2a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6c2MxwavxT8dQ4jV3DXHed
          claim_id: c_UjYiVAQzfM83bZN8BCNt9M
          source_id: s_vWGjvPpBK9FrGftU8Been4
          stance: supports
          locator: CBDB:224053
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（224053）
          source: &a1
            id: s_vWGjvPpBK9FrGftU8Been4
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 224053）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224053&o=json
            external_identifier: CBDB:224053
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5YAcMqfLgLu2RKQtETY92P
        subject_person_id: p_QgiVPXBqFaKhrAo4YkqB2a
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
        - id: cs_6Hv56qMAHLf1yepAGNUS7m
          claim_id: c_5YAcMqfLgLu2RKQtETY92P
          source_id: s_vWGjvPpBK9FrGftU8Been4
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
        id: c_h0hqDQQuCf7loYNq6wHZmi
        subject_person_id: p_QgiVPXBqFaKhrAo4YkqB2a
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DyAEKNuW84v9PAan2XrKHV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1hpI3Eaj0omgFJINJRO2Un
          claim_id: c_h0hqDQQuCf7loYNq6wHZmi
          source_id: s_WRsNJN9orzVPHqFQwefU8e
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第一百一十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WRsNJN9orzVPHqFQwefU8e
            source_type: api_record
            title: 中国历代人物传记资料库：王遵訓（CBDB 206844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json
            external_identifier: CBDB:206844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.907Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DyAEKNuW84v9PAan2XrKHV
        status: active
        display_name: 王遵訓
        merged_into_person_id: null
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DyAEKNuW84v9PAan2XrKHV | 王遵訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王明（CBDB 224053）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224053&o=json)
- [中国历代人物传记资料库：王遵訓（CBDB 206844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206844&o=json)
