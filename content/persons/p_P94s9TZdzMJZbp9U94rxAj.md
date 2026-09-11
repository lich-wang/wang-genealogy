---
schema: wang-person/v1
id: p_P94s9TZdzMJZbp9U94rxAj
status: active
merged_into: null
display_name: 王心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uzgAF368638PjtFxSY7XCJ
        subject_person_id: p_P94s9TZdzMJZbp9U94rxAj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hwan5jLdgFDc6ZiFHRp4CJ
          claim_id: c_uzgAF368638PjtFxSY7XCJ
          source_id: s_9HG1mjEjxoTSdWkYBct7D7
          stance: supports
          locator: CBDB:221464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221464）
          source: &a1
            id: s_9HG1mjEjxoTSdWkYBct7D7
            source_type: api_record
            title: 中国历代人物传记资料库：王心（CBDB 221464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221464&o=json
            external_identifier: CBDB:221464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1TMMVzyvsKa9XSybFg9hQr
        subject_person_id: p_P94s9TZdzMJZbp9U94rxAj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王心，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221464）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7eGkVLblFGtHO-wojIJtJh
          claim_id: c_1TMMVzyvsKa9XSybFg9hQr
          source_id: s_9HG1mjEjxoTSdWkYBct7D7
          stance: supports
          locator: CBDB:221464
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

# 王心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王心 | accepted |
| bio.summary | 王心，明人物。萬曆八年進士，籍贯解州。（中国历代人物传记资料库 CBDB 221464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王心（CBDB 221464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221464&o=json)
