---
schema: wang-person/v1
id: p_RU478GDgSKeP1hJyQJtQSW
status: active
merged_into: null
display_name: 王延長
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J6TuFYF3228aCJ77SG7fts
        subject_person_id: p_RU478GDgSKeP1hJyQJtQSW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延長
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JBFfBNjarLErwA8b73psVi
          claim_id: c_J6TuFYF3228aCJ77SG7fts
          source_id: s_HUe6wpA8hNjHJwHHMbA5cd
          stance: supports
          locator: CBDB:637473
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637473）
          source: &a1
            id: s_HUe6wpA8hNjHJwHHMbA5cd
            source_type: api_record
            title: 中国历代人物传记资料库：王延長（CBDB 637473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637473&o=json
            external_identifier: CBDB:637473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xh5Z9QZt3Bs7KRbVW3FpEc
        subject_person_id: p_RU478GDgSKeP1hJyQJtQSW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延長，清人物。籍贯上元，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 637473）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cPCgCocReu2_c0_WIABQJO
          claim_id: c_Xh5Z9QZt3Bs7KRbVW3FpEc
          source_id: s_HUe6wpA8hNjHJwHHMbA5cd
          stance: supports
          locator: CBDB:637473
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

# 王延長

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延長 | accepted |
| bio.summary | 王延長，清人物。籍贯上元，入仕鄉貢舉人，曾任知府。（中国历代人物传记资料库 CBDB 637473） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延長（CBDB 637473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637473&o=json)
