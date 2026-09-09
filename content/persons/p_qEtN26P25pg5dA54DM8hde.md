---
schema: wang-person/v1
id: p_qEtN26P25pg5dA54DM8hde
status: active
merged_into: null
display_name: 王端甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PESv1hUieEatnbjqhSB7xr
        subject_person_id: p_qEtN26P25pg5dA54DM8hde
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MuWGtU9nmd9TFYqYZP5K3i
          claim_id: c_PESv1hUieEatnbjqhSB7xr
          source_id: s_NAH2gRWULuh9cBRw2i8fuV
          stance: supports
          locator: CBDB:688245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688245）
          source: &a1
            id: s_NAH2gRWULuh9cBRw2i8fuV
            source_type: api_record
            title: 中国历代人物传记资料库：王端甫（CBDB 688245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688245&o=json
            external_identifier: CBDB:688245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.502Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9DAzeexkE6ezre2Rv4sk15
        subject_person_id: p_qEtN26P25pg5dA54DM8hde
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
        - id: cs_W56jeqLGZioR4jTDJWj12U
          claim_id: c_9DAzeexkE6ezre2Rv4sk15
          source_id: s_NAH2gRWULuh9cBRw2i8fuV
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

# 王端甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端甫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端甫（CBDB 688245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688245&o=json)
