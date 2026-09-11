---
schema: wang-person/v1
id: p_7vKUAzDnQRoe8yKB4UDA7V
status: active
merged_into: null
display_name: 王一相
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MR3nXgi9Y7NcNZN7sCHN7a
        subject_person_id: p_7vKUAzDnQRoe8yKB4UDA7V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G63DfeUHpkbiiVWBUxr5oy
          claim_id: c_MR3nXgi9Y7NcNZN7sCHN7a
          source_id: s_eqKS8VH9t5qjUAbvjxVA6V
          stance: supports
          locator: CBDB:691944
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691944）
          source: &a1
            id: s_eqKS8VH9t5qjUAbvjxVA6V
            source_type: api_record
            title: 中国历代人物传记资料库：王一相（CBDB 691944）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691944&o=json
            external_identifier: CBDB:691944
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.496Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ULw7xi9MVvzXXAqMGk7GFQ
        subject_person_id: p_7vKUAzDnQRoe8yKB4UDA7V
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一相，清人物。籍贯黟縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 691944）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YiCRm_mT3TSQn4DRnRuMAV
          claim_id: c_ULw7xi9MVvzXXAqMGk7GFQ
          source_id: s_eqKS8VH9t5qjUAbvjxVA6V
          stance: supports
          locator: CBDB:691944
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

# 王一相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一相 | accepted |
| bio.summary | 王一相，清人物。籍贯黟縣，身份为為善鄉里、商人。（中国历代人物传记资料库 CBDB 691944） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一相（CBDB 691944）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691944&o=json)
