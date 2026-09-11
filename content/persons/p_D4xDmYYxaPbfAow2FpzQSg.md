---
schema: wang-person/v1
id: p_D4xDmYYxaPbfAow2FpzQSg
status: active
merged_into: null
display_name: 王鼎臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eViMXgv4ySfN2PE2zDjAnd
        subject_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D4CjdTApydLd67o125P5it
          claim_id: c_eViMXgv4ySfN2PE2zDjAnd
          source_id: s_Kewjfei5cAgDhi4EPV2uup
          stance: supports
          locator: CBDB:297190
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297190）
          source: &a1
            id: s_Kewjfei5cAgDhi4EPV2uup
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎臣（CBDB 297190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json
            external_identifier: CBDB:297190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.557Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DDJqA1wGe1hQ7diH7HRBC3
        subject_person_id: p_D4xDmYYxaPbfAow2FpzQSg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297190）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RDSreJO5hi4zqAjk33g3Ek
          claim_id: c_DDJqA1wGe1hQ7diH7HRBC3
          source_id: s_Kewjfei5cAgDhi4EPV2uup
          stance: supports
          locator: CBDB:297190
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

# 王鼎臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎臣 | accepted |
| bio.summary | 王鼎臣，明人物。嘉靖十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 297190） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎臣（CBDB 297190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297190&o=json)
