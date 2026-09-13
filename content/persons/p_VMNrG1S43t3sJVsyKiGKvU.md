---
schema: wang-person/v1
id: p_VMNrG1S43t3sJVsyKiGKvU
status: active
merged_into: null
display_name: 王安明
cbdb_id: 414289
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBJ7J99moGjzFKX7FxXRMQ
        subject_person_id: p_VMNrG1S43t3sJVsyKiGKvU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安明，清人物。曾任左營遊擊。（中国历代人物传记资料库 CBDB 414289）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_N0NA8Rpq9oQop0rJ6kr2f8
          claim_id: c_QBJ7J99moGjzFKX7FxXRMQ
          source_id: s_x26RdSxMZvmmSYnXGoUPMM
          stance: supports
          locator: CBDB:414289
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_x26RdSxMZvmmSYnXGoUPMM
            source_type: api_record
            title: 中国历代人物传记资料库：王安明（CBDB 414289）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414289&o=json
            external_identifier: CBDB:414289
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:30.615Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_SsYwYDmErYWg6p7mLCChDR
        subject_person_id: p_VMNrG1S43t3sJVsyKiGKvU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8Yyj1jSoayxVMh1wZjhCu4
          claim_id: c_SsYwYDmErYWg6p7mLCChDR
          source_id: s_x26RdSxMZvmmSYnXGoUPMM
          stance: supports
          locator: CBDB:414289
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5301-5400）｜历史性依据：CBDB 朝代 = 清
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

# 王安明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王安明，清人物。曾任左營遊擊。（中国历代人物传记资料库 CBDB 414289） | accepted |
| name.primary | 王安明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王安明（CBDB 414289）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414289&o=json)
