---
schema: wang-person/v1
id: p_QGYBJFHpS1ccbwWDS71Wm3
status: active
merged_into: null
display_name: 王磵
cbdb_id: 415180
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SL9GMT93rPPxNHa5LSfS2r
        subject_person_id: p_QGYBJFHpS1ccbwWDS71Wm3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磵，清人物。曾任典史。（中国历代人物传记资料库 CBDB 415180）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hevK5JRXqa-5W2K0bcNnzl
          claim_id: c_SL9GMT93rPPxNHa5LSfS2r
          source_id: s_veJL2SZXFEEF5MD7ZdwEa1
          stance: supports
          locator: CBDB:415180
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_veJL2SZXFEEF5MD7ZdwEa1
            source_type: api_record
            title: 中国历代人物传记资料库：王磵（CBDB 415180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415180&o=json
            external_identifier: CBDB:415180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:52.674Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VQwubW9iNK6pyy3N5J3fJA
        subject_person_id: p_QGYBJFHpS1ccbwWDS71Wm3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王磵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kUfN8Xw5wdVFEph41ho3Lt
          claim_id: c_VQwubW9iNK6pyy3N5J3fJA
          source_id: s_veJL2SZXFEEF5MD7ZdwEa1
          stance: supports
          locator: CBDB:415180
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6101-6200）｜历史性依据：CBDB 朝代 = 清
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

# 王磵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王磵，清人物。曾任典史。（中国历代人物传记资料库 CBDB 415180） | accepted |
| name.primary | 王磵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王磵（CBDB 415180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415180&o=json)
