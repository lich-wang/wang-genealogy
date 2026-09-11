---
schema: wang-person/v1
id: p_qKn9NKn52gxrJajYJxmo3C
status: active
merged_into: null
display_name: 王宗淦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMGPXkiadL8xn3aHGDNSAs
        subject_person_id: p_qKn9NKn52gxrJajYJxmo3C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗淦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5TVNhMVQBatF9R9WhPyd8A
          claim_id: c_bMGPXkiadL8xn3aHGDNSAs
          source_id: s_4p4PyYAAdjkAdxh8umCDeT
          stance: supports
          locator: CBDB:694149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694149）
          source: &a1
            id: s_4p4PyYAAdjkAdxh8umCDeT
            source_type: api_record
            title: 中国历代人物传记资料库：王宗淦（CBDB 694149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694149&o=json
            external_identifier: CBDB:694149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.516Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BmQbsyhTA5h4iAivPXaJB3
        subject_person_id: p_qKn9NKn52gxrJajYJxmo3C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RG6ReS5MbxFdQw52K7v3nV
          claim_id: c_BmQbsyhTA5h4iAivPXaJB3
          source_id: s_4p4PyYAAdjkAdxh8umCDeT
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
        id: c_zNtQZoJo6-uL829VMZGmub
        subject_person_id: p_ixapZhQmmSDAS1angZKZYU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qKn9NKn52gxrJajYJxmo3C
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IfWzcf5M7cEd7JydNbjk6
          claim_id: c_zNtQZoJo6-uL829VMZGmub
          source_id: s_hPA2wXFn6CM42W4D5FLhFz
          stance: supports
          locator: 鄞縣志，lgid=243606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hPA2wXFn6CM42W4D5FLhFz
            source_type: api_record
            title: 中国历代人物传记资料库：王士霖（CBDB 694147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json
            external_identifier: CBDB:694147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ixapZhQmmSDAS1angZKZYU
        status: active
        display_name: 王士霖
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗淦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗淦 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_ixapZhQmmSDAS1angZKZYU | 王士霖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王士霖（CBDB 694147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694147&o=json)
- [中国历代人物传记资料库：王宗淦（CBDB 694149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694149&o=json)
