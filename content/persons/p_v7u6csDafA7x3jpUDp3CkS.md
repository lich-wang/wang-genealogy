---
schema: wang-person/v1
id: p_v7u6csDafA7x3jpUDp3CkS
status: active
merged_into: null
display_name: 王恭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ABFeepMteWfMnVuaEQwAV8
        subject_person_id: p_v7u6csDafA7x3jpUDp3CkS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WQ7n1zpvdTysxyAN52cNPh
          claim_id: c_ABFeepMteWfMnVuaEQwAV8
          source_id: s_Yd2twG6GjjithJiKjJDDMM
          stance: supports
          locator: CBDB:560885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560885）
          source: &a1
            id: s_Yd2twG6GjjithJiKjJDDMM
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 560885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560885&o=json
            external_identifier: CBDB:560885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7N7NoTomv4cJaeYu6WY1k
        subject_person_id: p_v7u6csDafA7x3jpUDp3CkS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 560885）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yc0JP8zpSMXqyAuM5pgTLM
          claim_id: c_N7N7NoTomv4cJaeYu6WY1k
          source_id: s_Yd2twG6GjjithJiKjJDDMM
          stance: supports
          locator: CBDB:560885
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

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 560885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 560885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560885&o=json)
