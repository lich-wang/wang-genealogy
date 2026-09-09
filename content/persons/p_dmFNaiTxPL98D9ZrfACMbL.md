---
schema: wang-person/v1
id: p_dmFNaiTxPL98D9ZrfACMbL
status: active
merged_into: null
display_name: 王繼謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dfmvjQWu7n4XSyJ3VT3CYK
        subject_person_id: p_dmFNaiTxPL98D9ZrfACMbL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqgFUMUX4XY3PJzGqSiQnQ
          claim_id: c_dfmvjQWu7n4XSyJ3VT3CYK
          source_id: s_qNMLbBoo2UyE55GbLLJefk
          stance: supports
          locator: CBDB:71984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71984）
          source: &a1
            id: s_qNMLbBoo2UyE55GbLLJefk
            source_type: api_record
            title: 中国历代人物传记资料库：王繼謨（CBDB 71984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71984&o=json
            external_identifier: CBDB:71984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BRaGWZ5iCfs2Ka26HHrynE
        subject_person_id: p_dmFNaiTxPL98D9ZrfACMbL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7W7pAYSiuNLnj8GKt7udDH
          claim_id: c_BRaGWZ5iCfs2Ka26HHrynE
          source_id: s_qNMLbBoo2UyE55GbLLJefk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NzVaqvVGWFZv1c1USi4adY
        subject_person_id: p_dmFNaiTxPL98D9ZrfACMbL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2L5mqF9guQsfg952mbq2AX
          claim_id: c_NzVaqvVGWFZv1c1USi4adY
          source_id: s_qNMLbBoo2UyE55GbLLJefk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王繼謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼謨 | accepted |
| death.date | 1768年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼謨（CBDB 71984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71984&o=json)
