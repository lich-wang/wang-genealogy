---
schema: wang-person/v1
id: p_Msrn2d1hBCNxZFBTxWBQ34
status: active
merged_into: null
display_name: 王巽辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ybGLumJ1X4E8mZj7UVXDfV
        subject_person_id: p_Msrn2d1hBCNxZFBTxWBQ34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巽辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q6piLsvWn2E63vMFfQKh1G
          claim_id: c_ybGLumJ1X4E8mZj7UVXDfV
          source_id: s_DDMW5MQ6PRdKh4vXCyLkNZ
          stance: supports
          locator: CBDB:538340
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538340）
          source: &a1
            id: s_DDMW5MQ6PRdKh4vXCyLkNZ
            source_type: api_record
            title: 中国历代人物传记资料库：王巽辰（CBDB 538340）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538340&o=json
            external_identifier: CBDB:538340
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mWuvp41SehHL7Znir8VKHU
        subject_person_id: p_Msrn2d1hBCNxZFBTxWBQ34
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
        - id: cs_DScnHC4FDqQymtJMnK9yQY
          claim_id: c_mWuvp41SehHL7Znir8VKHU
          source_id: s_DDMW5MQ6PRdKh4vXCyLkNZ
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

# 王巽辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巽辰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王巽辰（CBDB 538340）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538340&o=json)
