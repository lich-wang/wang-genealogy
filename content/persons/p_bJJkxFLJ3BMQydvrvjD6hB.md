---
schema: wang-person/v1
id: p_bJJkxFLJ3BMQydvrvjD6hB
status: active
merged_into: null
display_name: 王勉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3QNT4Hbq8YAJiNhWgRuqQ
        subject_person_id: p_bJJkxFLJ3BMQydvrvjD6hB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GNo5weKPjQ8m3XJpxxQYQR
          claim_id: c_w3QNT4Hbq8YAJiNhWgRuqQ
          source_id: s_8iMNVxA74HioetxFHkvovr
          stance: supports
          locator: CBDB:508123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508123）
          source: &a1
            id: s_8iMNVxA74HioetxFHkvovr
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 508123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508123&o=json
            external_identifier: CBDB:508123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oSWicL2fB1JqojDBWNTCqA
        subject_person_id: p_bJJkxFLJ3BMQydvrvjD6hB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 508123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ri8XdFgpLYu2uJH_9ytbQU
          claim_id: c_oSWicL2fB1JqojDBWNTCqA
          source_id: s_8iMNVxA74HioetxFHkvovr
          stance: supports
          locator: CBDB:508123
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

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| bio.summary | 王勉，明人物。曾任廵檢。（中国历代人物传记资料库 CBDB 508123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 508123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508123&o=json)
