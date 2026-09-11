---
schema: wang-person/v1
id: p_w9FC1F4e2g1itRnVQLmLPk
status: active
merged_into: null
display_name: 王雲鵬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nRXabX94fQDEA4dF7C7RE
        subject_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rADGY1F7phgDQFg7BHBVjf
          claim_id: c_8nRXabX94fQDEA4dF7C7RE
          source_id: s_xkUXXJmTQseRdf8xJ3hJQX
          stance: supports
          locator: CBDB:291948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291948）
          source: &a1
            id: s_xkUXXJmTQseRdf8xJ3hJQX
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鵬（CBDB 291948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json
            external_identifier: CBDB:291948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BjwvAbYnJm7gzcvftbzksY
        subject_person_id: p_w9FC1F4e2g1itRnVQLmLPk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鵬，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291948）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2hc9nKRfxsJIJgIGla3xnD
          claim_id: c_BjwvAbYnJm7gzcvftbzksY
          source_id: s_xkUXXJmTQseRdf8xJ3hJQX
          stance: supports
          locator: CBDB:291948
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

# 王雲鵬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲鵬 | accepted |
| bio.summary | 王雲鵬，明人物。嘉靖十一年進士，籍贯高郵州。（中国历代人物传记资料库 CBDB 291948） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲鵬（CBDB 291948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291948&o=json)
