---
schema: wang-person/v1
id: p_HCmmh5j3W3xRHHAWjWxxzE
status: active
merged_into: null
display_name: 王原泗
cbdb_id: 414014
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DiBUPivMEQKKHbmndLu3HH
        subject_person_id: p_HCmmh5j3W3xRHHAWjWxxzE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原泗，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414014）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FajsQiT_c6fiugDT7uUZpB
          claim_id: c_DiBUPivMEQKKHbmndLu3HH
          source_id: s_tHoyc4aDj4LQbfLNvCxc5M
          stance: supports
          locator: CBDB:414014
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tHoyc4aDj4LQbfLNvCxc5M
            source_type: api_record
            title: 中国历代人物传记资料库：王原泗（CBDB 414014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414014&o=json
            external_identifier: CBDB:414014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:26.305Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kAdF596juzpxneYSbkh6xf
        subject_person_id: p_HCmmh5j3W3xRHHAWjWxxzE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原泗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_juR9ru5uY7NCH3ngVKBgtG
          claim_id: c_kAdF596juzpxneYSbkh6xf
          source_id: s_tHoyc4aDj4LQbfLNvCxc5M
          stance: supports
          locator: CBDB:414014
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5101-5200）｜历史性依据：CBDB 朝代 = 清
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

# 王原泗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原泗，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414014） | accepted |
| name.primary | 王原泗 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王原泗（CBDB 414014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414014&o=json)
