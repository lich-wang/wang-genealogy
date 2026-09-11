---
schema: wang-person/v1
id: p_iVKCFGc8mvFE5PgNkXfcvQ
status: active
merged_into: null
display_name: 王綽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jFXAxvmX9FKQZ7Q9QUiJZP
        subject_person_id: p_iVKCFGc8mvFE5PgNkXfcvQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pJZ7AYYMos2Y3b8wPwbVpv
          claim_id: c_jFXAxvmX9FKQZ7Q9QUiJZP
          source_id: s_jCfEETP67eFPqJEzzLTecJ
          stance: supports
          locator: CBDB:37824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37824）
          source: &a1
            id: s_jCfEETP67eFPqJEzzLTecJ
            source_type: api_record
            title: 中国历代人物传记资料库：王綽（CBDB 37824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37824&o=json
            external_identifier: CBDB:37824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ez6a8UcNjBuM1hkufabWFe
        subject_person_id: p_iVKCFGc8mvFE5PgNkXfcvQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽，宋人物。籍贯永嘉，身份为收徒講學、隱居授徒。（中国历代人物传记资料库 CBDB 37824）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9oJRJBKxVBwN8vKR53PO_C
          claim_id: c_ez6a8UcNjBuM1hkufabWFe
          source_id: s_jCfEETP67eFPqJEzzLTecJ
          stance: supports
          locator: CBDB:37824
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王綽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綽 | accepted |
| bio.summary | 王綽，宋人物。籍贯永嘉，身份为收徒講學、隱居授徒。（中国历代人物传记资料库 CBDB 37824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綽（CBDB 37824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37824&o=json)
