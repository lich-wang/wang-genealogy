---
schema: wang-person/v1
id: p_ihrtmmYxDE76Umzs4UE6Cs
status: active
merged_into: null
display_name: 王亮采
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QELgo7E7ovSAhr4A8ELyGW
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1UQWzRwTyN6LxE5M1W51US
          claim_id: c_QELgo7E7ovSAhr4A8ELyGW
          source_id: s_ADU3wiVtg9Nu8nKzh359Lr
          stance: supports
          locator: CBDB:212298
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212298）
          source: &a1
            id: s_ADU3wiVtg9Nu8nKzh359Lr
            source_type: api_record
            title: 中国历代人物传记资料库：王亮采（CBDB 212298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212298&o=json
            external_identifier: CBDB:212298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4SsuenVcwbaJ9MkGQ4nJvr
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
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
        - id: cs_Psj72EKpcRQTB55z5jELkH
          claim_id: c_4SsuenVcwbaJ9MkGQ4nJvr
          source_id: s_ADU3wiVtg9Nu8nKzh359Lr
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
        id: c_i2cnYUv5DyaBGRhmOJXKO9
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hrFkJ3WZPlubIIuUO8kMKw
          claim_id: c_i2cnYUv5DyaBGRhmOJXKO9
          source_id: s_N92t1qt6tC69nFxar3kdyC
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第一甲第三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N92t1qt6tC69nFxar3kdyC
            source_type: api_record
            title: 中国历代人物传记资料库：王應選（CBDB 206025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json
            external_identifier: CBDB:206025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.879Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DVj3x7bTLNfdzZiuwDwTNz
        status: active
        display_name: 王應選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亮采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮采 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DVj3x7bTLNfdzZiuwDwTNz | 王應選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮采（CBDB 212298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212298&o=json)
- [中国历代人物传记资料库：王應選（CBDB 206025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206025&o=json)
