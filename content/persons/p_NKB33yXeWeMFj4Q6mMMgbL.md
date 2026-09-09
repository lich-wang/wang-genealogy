---
schema: wang-person/v1
id: p_NKB33yXeWeMFj4Q6mMMgbL
status: active
merged_into: null
display_name: 王敟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XAsohBkCdEURSXMz4LvxF
        subject_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4N3NA6FfFiu2veQCfyaRC
          claim_id: c_7XAsohBkCdEURSXMz4LvxF
          source_id: s_CED8d9dEii4s632Crsi4jv
          stance: supports
          locator: CBDB:310029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310029）
          source: &a1
            id: s_CED8d9dEii4s632Crsi4jv
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sy8rPtZEFjke9xYBfM8e1G
        subject_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
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
        - id: cs_Y33J1GynLyirBAp1c9YeMY
          claim_id: c_Sy8rPtZEFjke9xYBfM8e1G
          source_id: s_CED8d9dEii4s632Crsi4jv
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

# 王敟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敟 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敟（CBDB 310029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json)
