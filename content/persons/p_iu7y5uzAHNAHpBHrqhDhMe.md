---
schema: wang-person/v1
id: p_iu7y5uzAHNAHpBHrqhDhMe
status: active
merged_into: null
display_name: 王驥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VyK8qaqHGmoQE5JEVz2n3C
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王驥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_znx3vFu337yxMyp78B3tcC
          claim_id: c_VyK8qaqHGmoQE5JEVz2n3C
          source_id: s_t21aghDgnr42r85ZMoMVhx
          stance: supports
          locator: CBDB:137792
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（137792）
          source: &a1
            id: s_t21aghDgnr42r85ZMoMVhx
            source_type: api_record
            title: 中国历代人物传记资料库：王驥（CBDB 137792）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137792&o=json
            external_identifier: CBDB:137792
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyfxSvG7R6LWoWzmDcq6Ne
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DnLP2GLbgBoAyDA5RHtQ7x
          claim_id: c_ZyfxSvG7R6LWoWzmDcq6Ne
          source_id: s_t21aghDgnr42r85ZMoMVhx
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
        id: c_yENalvVcLlEjZvOUjtLLiR
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1BfrVwNo6KMxGngrdtMrQC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7tNgVKD3VZSEft-kIS9qZ0
          claim_id: c_yENalvVcLlEjZvOUjtLLiR
          source_id: s_gqmwEU56k6tFMccUQF4t4V
          stance: supports
          locator: 寶祐登科錄：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source:
            id: s_gqmwEU56k6tFMccUQF4t4V
            source_type: api_record
            title: 中国历代人物传记资料库：王煇（CBDB 136338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json
            external_identifier: CBDB:136338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1BfrVwNo6KMxGngrdtMrQC
        status: active
        display_name: 王煇
        merged_into_person_id: null
    - claim:
        id: c_69BxYx5T4CsIin9ZlSnWhD
        subject_person_id: p_iu7y5uzAHNAHpBHrqhDhMe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m4LMsDs1QJMNb7B4hFNvPT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCV5y9oW8E_BMpgcmxwjaR
          claim_id: c_69BxYx5T4CsIin9ZlSnWhD
          source_id: s_t21aghDgnr42r85ZMoMVhx
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m4LMsDs1QJMNb7B4hFNvPT
        status: active
        display_name: 王壡
        merged_into_person_id: null
  other: []
---

# 王驥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王驥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_1BfrVwNo6KMxGngrdtMrQC | 王煇 | accepted |
| descendants | p_m4LMsDs1QJMNb7B4hFNvPT | 王壡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煇（CBDB 136338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136338&o=json)
- [中国历代人物传记资料库：王驥（CBDB 137792）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137792&o=json)
