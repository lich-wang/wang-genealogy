---
schema: wang-person/v1
id: p_QQuUCHcAyLfkuJKD8SYwNJ
status: active
merged_into: null
display_name: 王繼光
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rrL3LhjnDK5DEvSoCN8QnR
        subject_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgJHLx9LTnjVU7A81M2nfP
          claim_id: c_rrL3LhjnDK5DEvSoCN8QnR
          source_id: s_5ptsY6wWc3cxbgCPY5Kk5E
          stance: supports
          locator: CBDB:126878
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126878）
          source: &a1
            id: s_5ptsY6wWc3cxbgCPY5Kk5E
            source_type: api_record
            title: 中国历代人物传记资料库：王繼光（CBDB 126878）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126878&o=json
            external_identifier: CBDB:126878
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.279Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oMw6MKH5TrP4kNK4hvYV3Y
        subject_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
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
        - id: cs_BkFQATkMmZPv5dqJ9yMJEE
          claim_id: c_oMw6MKH5TrP4kNK4hvYV3Y
          source_id: s_5ptsY6wWc3cxbgCPY5Kk5E
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
        id: c_-lqsjNrljWC41hMOLJ05M9
        subject_person_id: p_5j714BoeSUb9hXn4A1cAts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YrZMa3Yh_sul3vqld8FnFv
          claim_id: c_-lqsjNrljWC41hMOLJ05M9
          source_id: s_ziNSz8LLfeDvbS9cuJ2RtN
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ziNSz8LLfeDvbS9cuJ2RtN
            source_type: api_record
            title: 中国历代人物传记资料库：王守默（CBDB 216142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216142&o=json
            external_identifier: CBDB:216142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5j714BoeSUb9hXn4A1cAts
        status: active
        display_name: 王守默
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NDVqiJAayRos9PbQAHjnZp
        subject_person_id: p_9EG2qB53B3aNC5rSnqrKuV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLAPvdGcJB2qP2hZULA6Mt
          claim_id: c_NDVqiJAayRos9PbQAHjnZp
          source_id: s_hbFVGLL3CCi46qEdL3K1A4
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hbFVGLL3CCi46qEdL3K1A4
            source_type: api_record
            title: 中国历代人物传记资料库：王鑽（CBDB 216140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216140&o=json
            external_identifier: CBDB:216140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9EG2qB53B3aNC5rSnqrKuV
        status: active
        display_name: 王鑽
        merged_into_person_id: null
    - claim:
        id: c_1UouO3_-a3aKACP-lE50NR
        subject_person_id: p_a1LW3UXAK9wc1CYVZCMEiP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QQuUCHcAyLfkuJKD8SYwNJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__0w5Z83BXV_7GiG1yFjnCH
          claim_id: c_1UouO3_-a3aKACP-lE50NR
          source_id: s_KHXBPjy6iND8ThURNAoaMK
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KHXBPjy6iND8ThURNAoaMK
            source_type: api_record
            title: 中国历代人物传记资料库：王時敘（CBDB 216141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216141&o=json
            external_identifier: CBDB:216141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.220Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a1LW3UXAK9wc1CYVZCMEiP
        status: active
        display_name: 王時敘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼光 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5j714BoeSUb9hXn4A1cAts | 王守默 | accepted |
| ancestors | p_9EG2qB53B3aNC5rSnqrKuV | 王鑽 | accepted |
| ancestors | p_a1LW3UXAK9wc1CYVZCMEiP | 王時敘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼光（CBDB 126878）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126878&o=json)
- [中国历代人物传记资料库：王時敘（CBDB 216141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216141&o=json)
- [中国历代人物传记资料库：王守默（CBDB 216142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216142&o=json)
- [中国历代人物传记资料库：王鑽（CBDB 216140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216140&o=json)
