---
schema: wang-person/v1
id: p_fKNHKBLag79DPiTzJGUWh9
status: active
merged_into: null
display_name: 王振遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M3pGYVmGZP2GeNLZ1DkhDu
        subject_person_id: p_fKNHKBLag79DPiTzJGUWh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qth39U8J7GzRv8tCCvYtU7
          claim_id: c_M3pGYVmGZP2GeNLZ1DkhDu
          source_id: s_XYbNa83PR3SBRDmHyxHqVF
          stance: supports
          locator: CBDB:570500
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570500）
          source: &a1
            id: s_XYbNa83PR3SBRDmHyxHqVF
            source_type: api_record
            title: 中国历代人物传记资料库：王振遠（CBDB 570500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570500&o=json
            external_identifier: CBDB:570500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aodKZFgw8PhwwwnZDBDWYs
        subject_person_id: p_fKNHKBLag79DPiTzJGUWh9
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
        - id: cs_AenCSBkw8DVnfkV7XMb3iF
          claim_id: c_aodKZFgw8PhwwwnZDBDWYs
          source_id: s_XYbNa83PR3SBRDmHyxHqVF
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
  descendants: []
  other: []
---

# 王振遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振遠（CBDB 570500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570500&o=json)
