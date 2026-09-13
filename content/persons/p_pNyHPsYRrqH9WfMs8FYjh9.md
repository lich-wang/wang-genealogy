---
schema: wang-person/v1
id: p_pNyHPsYRrqH9WfMs8FYjh9
status: active
merged_into: null
display_name: 王叔良
cbdb_id: 282085
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1RzAicK6XcxwagomaDVEQ
        subject_person_id: p_pNyHPsYRrqH9WfMs8FYjh9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔良，明人物。景泰二年進士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 282085）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5FxXUh1zTynrIlyw6Y4mck
          claim_id: c_D1RzAicK6XcxwagomaDVEQ
          source_id: s_iYgEBxF3N5y5f2gjkKBfRp
          stance: supports
          locator: CBDB:282085
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_iYgEBxF3N5y5f2gjkKBfRp
            source_type: api_record
            title: 中国历代人物传记资料库：王叔良（CBDB 282085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282085&o=json
            external_identifier: CBDB:282085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZN7pJQiy3K96GQU3gLQFFk
        subject_person_id: p_pNyHPsYRrqH9WfMs8FYjh9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_a97tA8gUJxvHosU1Td6hYK
          claim_id: c_ZN7pJQiy3K96GQU3gLQFFk
          source_id: s_iYgEBxF3N5y5f2gjkKBfRp
          stance: supports
          locator: CBDB:282085
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3301-3400）｜历史性依据：CBDB 朝代 = 明
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

# 王叔良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王叔良，明人物。景泰二年進士，曾任醫學訓科。（中国历代人物传记资料库 CBDB 282085） | accepted |
| name.primary | 王叔良 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔良（CBDB 282085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282085&o=json)
