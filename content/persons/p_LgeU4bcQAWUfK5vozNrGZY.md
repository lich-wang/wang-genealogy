---
schema: wang-person/v1
id: p_LgeU4bcQAWUfK5vozNrGZY
status: active
merged_into: null
display_name: 王貽訓
cbdb_id: 415440
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ASBBcmqkHJS3DiX5LB9VZj
        subject_person_id: p_LgeU4bcQAWUfK5vozNrGZY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽訓，宋人物。曾任軍事判官。（中国历代人物传记资料库 CBDB 415440）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_nzYnznFuCOcjkalJ6DBXGo
          claim_id: c_ASBBcmqkHJS3DiX5LB9VZj
          source_id: s_7B8sC5DgSMgsaLzkiw4XC2
          stance: supports
          locator: CBDB:415440
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7B8sC5DgSMgsaLzkiw4XC2
            source_type: api_record
            title: 中国历代人物传记资料库：王貽訓（CBDB 415440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415440&o=json
            external_identifier: CBDB:415440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:02.698Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_axbGrZhP1u7S7Kq1vTQaWp
        subject_person_id: p_LgeU4bcQAWUfK5vozNrGZY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貽訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_BHByfiSiQQCQhU4nyb6akP
          claim_id: c_axbGrZhP1u7S7Kq1vTQaWp
          source_id: s_7B8sC5DgSMgsaLzkiw4XC2
          stance: supports
          locator: CBDB:415440
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6301-6400）｜历史性依据：CBDB 朝代 = 宋
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

# 王貽訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王貽訓，宋人物。曾任軍事判官。（中国历代人物传记资料库 CBDB 415440） | accepted |
| name.primary | 王貽訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貽訓（CBDB 415440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415440&o=json)
