---
schema: wang-person/v1
id: p_iA5esr2sqX5EMGTZ6CqRBY
status: active
merged_into: null
display_name: 王景仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81tTUx2L6rexaXdJ8tGTZx
        subject_person_id: p_iA5esr2sqX5EMGTZ6CqRBY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u6Cps3cp82gN9YH7P2C1M2
          claim_id: c_81tTUx2L6rexaXdJ8tGTZx
          source_id: s_N5vs6n7Lvz2P7dG8DqK9MU
          stance: supports
          locator: CBDB:38050
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38050）
          source: &a1
            id: s_N5vs6n7Lvz2P7dG8DqK9MU
            source_type: api_record
            title: 中国历代人物传记资料库：王景仁（CBDB 38050）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38050&o=json
            external_identifier: CBDB:38050
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2neFsG3b52BBy42k9z1xVX
        subject_person_id: p_iA5esr2sqX5EMGTZ6CqRBY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景仁，宋人物。曾任西京作坊使。（中国历代人物传记资料库 CBDB 38050）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WA4mz71PmP-etHv75u6ZU-
          claim_id: c_2neFsG3b52BBy42k9z1xVX
          source_id: s_N5vs6n7Lvz2P7dG8DqK9MU
          stance: supports
          locator: CBDB:38050
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

# 王景仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景仁 | accepted |
| bio.summary | 王景仁，宋人物。曾任西京作坊使。（中国历代人物传记资料库 CBDB 38050） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景仁（CBDB 38050）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38050&o=json)
