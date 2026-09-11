---
schema: wang-person/v1
id: p_Wg474Zn7CNcMqix5LY9q15
status: active
merged_into: null
display_name: 王煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_37EPesHu6CE3AGLB52WFoC
        subject_person_id: p_Wg474Zn7CNcMqix5LY9q15
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dd2EZyaKvjk2JMFmJsmL1q
          claim_id: c_37EPesHu6CE3AGLB52WFoC
          source_id: s_YHqaLQxpkySFq5YS5kmu9c
          stance: supports
          locator: CBDB:497778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（497778）
          source: &a1
            id: s_YHqaLQxpkySFq5YS5kmu9c
            source_type: api_record
            title: 中国历代人物传记资料库：王煥（CBDB 497778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497778&o=json
            external_identifier: CBDB:497778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.661Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M8Zjt4XMiiQ62omo2fkGUG
        subject_person_id: p_Wg474Zn7CNcMqix5LY9q15
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煥，清人物。入仕副榜，曾任教諭。（中国历代人物传记资料库 CBDB 497778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zeCS3_R2IsMWLhZvngh1vl
          claim_id: c_M8Zjt4XMiiQ62omo2fkGUG
          source_id: s_YHqaLQxpkySFq5YS5kmu9c
          stance: supports
          locator: CBDB:497778
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

# 王煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煥 | accepted |
| bio.summary | 王煥，清人物。入仕副榜，曾任教諭。（中国历代人物传记资料库 CBDB 497778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煥（CBDB 497778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=497778&o=json)
