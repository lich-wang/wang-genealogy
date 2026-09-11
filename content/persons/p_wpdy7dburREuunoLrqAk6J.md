---
schema: wang-person/v1
id: p_wpdy7dburREuunoLrqAk6J
status: active
merged_into: null
display_name: 王拯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n8dijv2r7sVtMkcJJXQ5MJ
        subject_person_id: p_wpdy7dburREuunoLrqAk6J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BXRVBNDVYybGiz2MkoecFf
          claim_id: c_n8dijv2r7sVtMkcJJXQ5MJ
          source_id: s_USnNusa2AXzY1GQNiR84VP
          stance: supports
          locator: CBDB:24899
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（24899）
          source: &a1
            id: s_USnNusa2AXzY1GQNiR84VP
            source_type: api_record
            title: 中国历代人物传记资料库：王拯（CBDB 24899）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24899&o=json
            external_identifier: CBDB:24899
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UFhydAotSWUDQTdxx3QSZY
        subject_person_id: p_wpdy7dburREuunoLrqAk6J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王拯，宋人物。身份为結社、入元祐黨籍者，曾任宣德郎。（中国历代人物传记资料库 CBDB 24899）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yIREfokfQSPT0yXOTcBd07
          claim_id: c_UFhydAotSWUDQTdxx3QSZY
          source_id: s_USnNusa2AXzY1GQNiR84VP
          stance: supports
          locator: CBDB:24899
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

# 王拯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王拯 | accepted |
| bio.summary | 王拯，宋人物。身份为結社、入元祐黨籍者，曾任宣德郎。（中国历代人物传记资料库 CBDB 24899） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王拯（CBDB 24899）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24899&o=json)
