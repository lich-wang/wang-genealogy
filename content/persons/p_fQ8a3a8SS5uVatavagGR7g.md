---
schema: wang-person/v1
id: p_fQ8a3a8SS5uVatavagGR7g
status: active
merged_into: null
display_name: 王成
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VNBw91a4EndpYbLKtDbXrD
        subject_person_id: p_fQ8a3a8SS5uVatavagGR7g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G6fqD7LNU5Nj6s6uWE9Zvz
          claim_id: c_VNBw91a4EndpYbLKtDbXrD
          source_id: s_RBdk3SWYAjm53C1jYk5Lx1
          stance: supports
          locator: CBDB:258704
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258704）
          source: &a1
            id: s_RBdk3SWYAjm53C1jYk5Lx1
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 258704）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json
            external_identifier: CBDB:258704
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DCZe7JdP72g3c3AKDPDfBq
        subject_person_id: p_fQ8a3a8SS5uVatavagGR7g
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
        - id: cs_P2A1eDtTqnQ7w8GgNSTpSc
          claim_id: c_DCZe7JdP72g3c3AKDPDfBq
          source_id: s_RBdk3SWYAjm53C1jYk5Lx1
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
        id: c_UMXgfJxvlyx_kbf4EugSf1
        subject_person_id: p_fQ8a3a8SS5uVatavagGR7g
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RtbMaDgB4aPoZ2sWestmc6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9We3mDkIkrTUgkVQT3lGA2
          claim_id: c_UMXgfJxvlyx_kbf4EugSf1
          source_id: s_RBdk3SWYAjm53C1jYk5Lx1
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RtbMaDgB4aPoZ2sWestmc6
        status: active
        display_name: 王緯
        merged_into_person_id: null
  other: []
---

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RtbMaDgB4aPoZ2sWestmc6 | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 258704）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258704&o=json)
