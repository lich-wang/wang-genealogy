---
schema: wang-person/v1
id: p_5JKRo5JKyD3NiBVQf4W2yC
status: active
merged_into: null
display_name: 王息哥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vkEMB7kbQKZmRvDHQhHxGN
        subject_person_id: p_5JKRo5JKyD3NiBVQf4W2yC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王息哥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WHWiYQ7D2QpREN2eVkRchU
          claim_id: c_vkEMB7kbQKZmRvDHQhHxGN
          source_id: s_GQo86c3An7v5VQRTF7ttgL
          stance: supports
          locator: CBDB:699422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699422）
          source: &a1
            id: s_GQo86c3An7v5VQRTF7ttgL
            source_type: api_record
            title: 中国历代人物传记资料库：王息哥（CBDB 699422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699422&o=json
            external_identifier: CBDB:699422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_htykh2qw6L8wDNK9AAaxLi
        subject_person_id: p_5JKRo5JKyD3NiBVQf4W2yC
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
        - id: cs_1aAw6Vs37immCxjJkZWCRv
          claim_id: c_htykh2qw6L8wDNK9AAaxLi
          source_id: s_GQo86c3An7v5VQRTF7ttgL
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
  ancestors:
    - claim:
        id: c_YY5ESALB744lunxe8mUsiq
        subject_person_id: p_6r5VwfkrP2qbqzP6hHoNQi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5JKRo5JKyD3NiBVQf4W2yC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q-6AECJldfqvAaCSuzJJFi
          claim_id: c_YY5ESALB744lunxe8mUsiq
          source_id: s_GQo86c3An7v5VQRTF7ttgL
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6r5VwfkrP2qbqzP6hHoNQi
        status: active
        display_name: 王弁
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王息哥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王息哥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6r5VwfkrP2qbqzP6hHoNQi | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王息哥（CBDB 699422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699422&o=json)
