---
schema: wang-person/v1
id: p_ZeQt5uwASJ3b7T1wJCFm75
status: active
merged_into: null
display_name: 王關餘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hasHe7PcbYJYDNTyJ7ZmaL
        subject_person_id: p_ZeQt5uwASJ3b7T1wJCFm75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王關餘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a4Lwd6gvdMSmLMXowABf93
          claim_id: c_hasHe7PcbYJYDNTyJ7ZmaL
          source_id: s_obaxxWgZF4AJMePaPNDbQ3
          stance: supports
          locator: CBDB:695033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695033）
          source: &a1
            id: s_obaxxWgZF4AJMePaPNDbQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王關餘（CBDB 695033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695033&o=json
            external_identifier: CBDB:695033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1cQYwLqXTb8KUaRdH168TK
        subject_person_id: p_ZeQt5uwASJ3b7T1wJCFm75
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
        - id: cs_DJ241GpPHpCnJ7HHN4YBkK
          claim_id: c_1cQYwLqXTb8KUaRdH168TK
          source_id: s_obaxxWgZF4AJMePaPNDbQ3
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

# 王關餘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王關餘 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王關餘（CBDB 695033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695033&o=json)
