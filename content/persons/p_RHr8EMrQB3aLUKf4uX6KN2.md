---
schema: wang-person/v1
id: p_RHr8EMrQB3aLUKf4uX6KN2
status: active
merged_into: null
display_name: 王孝忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wAYe4CoYk3KWMFFEL28o5A
        subject_person_id: p_RHr8EMrQB3aLUKf4uX6KN2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JV4Hd7GwjXNiE5pGEBMKRv
          claim_id: c_wAYe4CoYk3KWMFFEL28o5A
          source_id: s_QmhTnuEi1Hb5nHnC1tX3Ft
          stance: supports
          locator: CBDB:39096
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39096）
          source: &a1
            id: s_QmhTnuEi1Hb5nHnC1tX3Ft
            source_type: api_record
            title: 中国历代人物传记资料库：王孝忠（CBDB 39096）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39096&o=json
            external_identifier: CBDB:39096
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SGVbXc1LsFMqN5yAMLcQH6
        subject_person_id: p_RHr8EMrQB3aLUKf4uX6KN2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝忠，宋人物。曾任御前諸軍都統制。（中国历代人物传记资料库 CBDB 39096）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hE4rHu1L25CxOTNJugzQq9
          claim_id: c_SGVbXc1LsFMqN5yAMLcQH6
          source_id: s_QmhTnuEi1Hb5nHnC1tX3Ft
          stance: supports
          locator: CBDB:39096
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

# 王孝忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝忠 | accepted |
| bio.summary | 王孝忠，宋人物。曾任御前諸軍都統制。（中国历代人物传记资料库 CBDB 39096） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝忠（CBDB 39096）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39096&o=json)
