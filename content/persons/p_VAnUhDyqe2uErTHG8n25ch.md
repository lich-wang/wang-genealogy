---
schema: wang-person/v1
id: p_VAnUhDyqe2uErTHG8n25ch
status: active
merged_into: null
display_name: 王景廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MgUCmM89eJE5zvQM3PEyoK
        subject_person_id: p_VAnUhDyqe2uErTHG8n25ch
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UMzZEKjqiV3v1yXHsvtptu
          claim_id: c_MgUCmM89eJE5zvQM3PEyoK
          source_id: s_vkxzRTFKkLuhvNJprrs7NU
          stance: supports
          locator: CBDB:638471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638471）
          source: &a1
            id: s_vkxzRTFKkLuhvNJprrs7NU
            source_type: api_record
            title: 中国历代人物传记资料库：王景廉（CBDB 638471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638471&o=json
            external_identifier: CBDB:638471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_64Dy3cD96iJp9pq5TbmL6P
        subject_person_id: p_VAnUhDyqe2uErTHG8n25ch
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
        - id: cs_rJaEF9UMhVbLD3hmBg6rtY
          claim_id: c_64Dy3cD96iJp9pq5TbmL6P
          source_id: s_vkxzRTFKkLuhvNJprrs7NU
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

# 王景廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景廉 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景廉（CBDB 638471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638471&o=json)
