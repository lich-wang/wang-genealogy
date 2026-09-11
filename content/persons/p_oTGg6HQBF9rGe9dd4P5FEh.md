---
schema: wang-person/v1
id: p_oTGg6HQBF9rGe9dd4P5FEh
status: active
merged_into: null
display_name: 王溥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQMDdNWFHCZ6MDrJA3MXxj
        subject_person_id: p_oTGg6HQBF9rGe9dd4P5FEh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王溥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZW935FaAMFfgwTAGng5A32
          claim_id: c_KQMDdNWFHCZ6MDrJA3MXxj
          source_id: s_A84mzWCnBHR82ScVab221E
          stance: supports
          locator: CBDB:292739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292739）
          source: &a1
            id: s_A84mzWCnBHR82ScVab221E
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 292739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292739&o=json
            external_identifier: CBDB:292739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.413Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZJNoHLH47NzC7QrnRiZw91
        subject_person_id: p_oTGg6HQBF9rGe9dd4P5FEh
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
        - id: cs_y6n3aFq5NA7thE4rLAmsJn
          claim_id: c_ZJNoHLH47NzC7QrnRiZw91
          source_id: s_A84mzWCnBHR82ScVab221E
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
        id: c_zMTm8DZD4G2ga7A0NVfWAZ
        subject_person_id: p_oTGg6HQBF9rGe9dd4P5FEh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_gyNUeFDDZGNowk91dtAr1B
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8oNm5KOWiFTk-k8QALc1JK
          claim_id: c_zMTm8DZD4G2ga7A0NVfWAZ
          source_id: s_A84mzWCnBHR82ScVab221E
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gyNUeFDDZGNowk91dtAr1B
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
  other: []
---

# 王溥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王溥 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_gyNUeFDDZGNowk91dtAr1B | 王惟賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王溥（CBDB 292739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292739&o=json)
