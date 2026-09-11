---
schema: wang-person/v1
id: p_9qy8VX4YhBeXV8fGKmBp1E
status: active
merged_into: null
display_name: 王經
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b4eDvxLn6PKWa7j77ioZcK
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4RSxLiSxY5qjpAh7jdZy6
          claim_id: c_b4eDvxLn6PKWa7j77ioZcK
          source_id: s_iamg2Nd5WazmGhDzWzew3L
          stance: supports
          locator: CBDB:199619
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199619）
          source: &a1
            id: s_iamg2Nd5WazmGhDzWzew3L
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 199619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199619&o=json
            external_identifier: CBDB:199619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Vy6X7KUmrg38SRFxNkE1wz
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1439年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83co73JJVDdfK9f2pZhit9
          claim_id: c_Vy6X7KUmrg38SRFxNkE1wz
          source_id: s_iamg2Nd5WazmGhDzWzew3L
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
        id: c_q5UYDR8QjVoJCXxMCN2RkU
        subject_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
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
        - id: cs_JYR8MtFQyGnbXL8L36Ukd1
          claim_id: c_q5UYDR8QjVoJCXxMCN2RkU
          source_id: s_iamg2Nd5WazmGhDzWzew3L
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
        id: c_MuNTomHm3uhGfFLeecdArW
        subject_person_id: p_1Y9vSpLkuvgM5TzoTn8thR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNRwrBJOLlRoDFRxFNiR5Z
          claim_id: c_MuNTomHm3uhGfFLeecdArW
          source_id: s_MG6q9dH4LZabg1XaZv4s12
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MG6q9dH4LZabg1XaZv4s12
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 247354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json
            external_identifier: CBDB:247354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Y9vSpLkuvgM5TzoTn8thR
        status: active
        display_name: 王讓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gOlPY4S0_pc6eIkMN8kQsY
        subject_person_id: p_2r9u5H4u4Vj7mDLqE83hi9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9qy8VX4YhBeXV8fGKmBp1E
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XFVGEuIZDSNFbnwrnFgw3r
          claim_id: c_gOlPY4S0_pc6eIkMN8kQsY
          source_id: s_3Mh9K11AQQ3dbsA5KgYZ4P
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3Mh9K11AQQ3dbsA5KgYZ4P
            source_type: api_record
            title: 中国历代人物传记资料库：王仲榮（CBDB 247351）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247351&o=json
            external_identifier: CBDB:247351
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.107Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2r9u5H4u4Vj7mDLqE83hi9
        status: active
        display_name: 王仲榮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王經 | accepted |
| birth.date | 1439年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1Y9vSpLkuvgM5TzoTn8thR | 王讓 | accepted |
| ancestors | p_2r9u5H4u4Vj7mDLqE83hi9 | 王仲榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 199619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199619&o=json)
- [中国历代人物传记资料库：王讓（CBDB 247354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247354&o=json)
- [中国历代人物传记资料库：王仲榮（CBDB 247351）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247351&o=json)
