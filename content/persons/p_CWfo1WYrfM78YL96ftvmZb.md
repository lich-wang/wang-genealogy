---
schema: wang-person/v1
id: p_CWfo1WYrfM78YL96ftvmZb
status: active
merged_into: null
display_name: 王啟楷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FNDDfWkx7Sgzr4X8DZy8e8
        subject_person_id: p_CWfo1WYrfM78YL96ftvmZb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟楷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FLqR8u8QFYvc9WASDC69w8
          claim_id: c_FNDDfWkx7Sgzr4X8DZy8e8
          source_id: s_cndF2zDaVq3uCVSQtL1aJJ
          stance: supports
          locator: CBDB:636550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636550）
          source: &a1
            id: s_cndF2zDaVq3uCVSQtL1aJJ
            source_type: api_record
            title: 中国历代人物传记资料库：王啟楷（CBDB 636550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636550&o=json
            external_identifier: CBDB:636550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.028Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4uLy2LMLohk48rUjoQBsEj
        subject_person_id: p_CWfo1WYrfM78YL96ftvmZb
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
        - id: cs_QZ56LNiGWdtmFFJQADA5ta
          claim_id: c_4uLy2LMLohk48rUjoQBsEj
          source_id: s_cndF2zDaVq3uCVSQtL1aJJ
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

# 王啟楷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟楷 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟楷（CBDB 636550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636550&o=json)
