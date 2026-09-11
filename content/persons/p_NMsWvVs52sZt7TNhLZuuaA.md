---
schema: wang-person/v1
id: p_NMsWvVs52sZt7TNhLZuuaA
status: active
merged_into: null
display_name: 王嘉謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1ohV8VwivXWJAYCW8ghKas
        subject_person_id: p_NMsWvVs52sZt7TNhLZuuaA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kgN7V8ChnLCjutAGKDbF8k
          claim_id: c_1ohV8VwivXWJAYCW8ghKas
          source_id: s_smkJFrQB5rrB1j6mgxvUPB
          stance: supports
          locator: CBDB:227993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227993）
          source: &a1
            id: s_smkJFrQB5rrB1j6mgxvUPB
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉謨（CBDB 227993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227993&o=json
            external_identifier: CBDB:227993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mo2iA8EPE5NTJKL3xgwQvP
        subject_person_id: p_NMsWvVs52sZt7TNhLZuuaA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉謨，明人物。萬曆丙戌科進士進士，籍贯來安，曾任指揮。（中国历代人物传记资料库 CBDB 227993）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zJ8fq9Jsh_gRTvnElP5XhE
          claim_id: c_Mo2iA8EPE5NTJKL3xgwQvP
          source_id: s_smkJFrQB5rrB1j6mgxvUPB
          stance: supports
          locator: CBDB:227993
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

# 王嘉謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉謨 | accepted |
| bio.summary | 王嘉謨，明人物。萬曆丙戌科進士進士，籍贯來安，曾任指揮。（中国历代人物传记资料库 CBDB 227993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉謨（CBDB 227993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227993&o=json)
