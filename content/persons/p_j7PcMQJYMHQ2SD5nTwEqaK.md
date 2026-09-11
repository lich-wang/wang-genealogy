---
schema: wang-person/v1
id: p_j7PcMQJYMHQ2SD5nTwEqaK
status: active
merged_into: null
display_name: 王楚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1hC36Lg8QcdUJyoVrH3AEf
        subject_person_id: p_j7PcMQJYMHQ2SD5nTwEqaK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SYxbZMMqiCBMWWdLRx8MnF
          claim_id: c_1hC36Lg8QcdUJyoVrH3AEf
          source_id: s_A4nmjBb9aXYaN1CPxZjyH7
          stance: supports
          locator: CBDB:562978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562978）
          source: &a1
            id: s_A4nmjBb9aXYaN1CPxZjyH7
            source_type: api_record
            title: 中国历代人物传记资料库：王楚（CBDB 562978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562978&o=json
            external_identifier: CBDB:562978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H4hAFJaRYPeg5xwP1MsS6W
        subject_person_id: p_j7PcMQJYMHQ2SD5nTwEqaK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚，宋人物。曾任通直郎、大晟府按協聲律。（中国历代人物传记资料库 CBDB 562978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KpSukck49lwsKBfnkLJN2H
          claim_id: c_H4hAFJaRYPeg5xwP1MsS6W
          source_id: s_A4nmjBb9aXYaN1CPxZjyH7
          stance: supports
          locator: CBDB:562978
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

# 王楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楚 | accepted |
| bio.summary | 王楚，宋人物。曾任通直郎、大晟府按協聲律。（中国历代人物传记资料库 CBDB 562978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楚（CBDB 562978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562978&o=json)
