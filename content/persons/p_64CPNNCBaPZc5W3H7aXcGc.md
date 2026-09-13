---
schema: wang-person/v1
id: p_64CPNNCBaPZc5W3H7aXcGc
status: active
merged_into: null
display_name: 王祖望
cbdb_id: 415185
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8wJgTPYPEUHAH9kLJzJU2P
        subject_person_id: p_64CPNNCBaPZc5W3H7aXcGc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖望，清人物。曾任主簿。（中国历代人物传记资料库 CBDB 415185）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_QNI4tsLERrIFIB4CoeP56l
          claim_id: c_8wJgTPYPEUHAH9kLJzJU2P
          source_id: s_17CMVYYb7rmG3LDu2B4Typ
          stance: supports
          locator: CBDB:415185
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_17CMVYYb7rmG3LDu2B4Typ
            source_type: api_record
            title: 中国历代人物传记资料库：王祖望（CBDB 415185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415185&o=json
            external_identifier: CBDB:415185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:52.674Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ih5GeQ85gy8ms5pY5p6B8i
        subject_person_id: p_64CPNNCBaPZc5W3H7aXcGc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祖望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aBAB8Y1oXZkfBWJ7bbn5kf
          claim_id: c_ih5GeQ85gy8ms5pY5p6B8i
          source_id: s_17CMVYYb7rmG3LDu2B4Typ
          stance: supports
          locator: CBDB:415185
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

# 王祖望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王祖望，清人物。曾任主簿。（中国历代人物传记资料库 CBDB 415185） | accepted |
| name.primary | 王祖望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祖望（CBDB 415185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415185&o=json)
