---
schema: wang-person/v1
id: p_DFWTbF2jFgwBH4V5tFWWur
status: active
merged_into: null
display_name: 王澣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZRPbH1GDKm5UcTfDZ1HPsC
        subject_person_id: p_DFWTbF2jFgwBH4V5tFWWur
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8CDBHm3UQ6Y9EBDwJXrjKY
          claim_id: c_ZRPbH1GDKm5UcTfDZ1HPsC
          source_id: s_b2GF8UV8gJiMHx7jpuU1kU
          stance: supports
          locator: CBDB:697038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697038）
          source: &a1
            id: s_b2GF8UV8gJiMHx7jpuU1kU
            source_type: api_record
            title: 中国历代人物传记资料库：王澣（CBDB 697038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697038&o=json
            external_identifier: CBDB:697038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6jNMoYtBBaWSTDWdE3tRFS
        subject_person_id: p_DFWTbF2jFgwBH4V5tFWWur
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
        - id: cs_6Yz7ejSUTvDnpfkHJ6F6jQ
          claim_id: c_6jNMoYtBBaWSTDWdE3tRFS
          source_id: s_b2GF8UV8gJiMHx7jpuU1kU
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
        id: c_tGbsFuW8HbBWROBEG4ZbQR
        subject_person_id: p_LKzDYAPDmX1Dcm3kwWWk7w
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DFWTbF2jFgwBH4V5tFWWur
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M9Npp5kLmkg5vs5NQuoAYX
          claim_id: c_tGbsFuW8HbBWROBEG4ZbQR
          source_id: s_b2GF8UV8gJiMHx7jpuU1kU
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，159 王九言墓志：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LKzDYAPDmX1Dcm3kwWWk7w
        status: active
        display_name: 王九言
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王澣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澣 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_LKzDYAPDmX1Dcm3kwWWk7w | 王九言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澣（CBDB 697038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697038&o=json)
