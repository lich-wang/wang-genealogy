---
schema: wang-person/v1
id: p_XKo2jeR9Udduamk45iNJzS
status: active
merged_into: null
display_name: 王先甲
cbdb_id: 342296
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8jj6eB5w2EXpHdQwHfGR9p
        subject_person_id: p_XKo2jeR9Udduamk45iNJzS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先甲，史料所见人物。本项目依据《中国历代人物传记资料库：王先甲（CBDB 342296）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_qxW2g1aMpYLoKaCxzFsITh
          claim_id: c_8jj6eB5w2EXpHdQwHfGR9p
          source_id: s_eFiQBVwtMhb61uRRnm9poC
          stance: supports
          locator: CBDB:342296
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_eFiQBVwtMhb61uRRnm9poC
            source_type: api_record
            title: 中国历代人物传记资料库：王先甲（CBDB 342296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342296&o=json
            external_identifier: CBDB:342296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_koDZEf3QZL92xab2XXWmuu
        subject_person_id: p_XKo2jeR9Udduamk45iNJzS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先甲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_8YKYHiEC38ujcPEHeJnHcd
          claim_id: c_koDZEf3QZL92xab2XXWmuu
          source_id: s_eFiQBVwtMhb61uRRnm9poC
          stance: supports
          locator: CBDB:342296
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 明
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

# 王先甲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王先甲，史料所见人物。本项目依据《中国历代人物传记资料库：王先甲（CBDB 342296）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王先甲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先甲（CBDB 342296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342296&o=json)
