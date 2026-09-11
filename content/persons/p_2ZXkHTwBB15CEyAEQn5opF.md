---
schema: wang-person/v1
id: p_2ZXkHTwBB15CEyAEQn5opF
status: active
merged_into: null
display_name: 王端
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Zk1L14JbihiEQqTqtHXpk
        subject_person_id: p_2ZXkHTwBB15CEyAEQn5opF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QhExJqdEENJoBkbL1sCnNY
          claim_id: c_8Zk1L14JbihiEQqTqtHXpk
          source_id: s_zYfKdcrCYMU4wd9ob85AgB
          stance: supports
          locator: CBDB:486295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486295）
          source: &a1
            id: s_zYfKdcrCYMU4wd9ob85AgB
            source_type: api_record
            title: 中国历代人物传记资料库：王端（CBDB 486295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486295&o=json
            external_identifier: CBDB:486295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LBzAQoEHsEeuejnkhiFEuo
        subject_person_id: p_2ZXkHTwBB15CEyAEQn5opF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 486295）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c0pAvd_4Q1vgb_xm5BPjm-
          claim_id: c_LBzAQoEHsEeuejnkhiFEuo
          source_id: s_zYfKdcrCYMU4wd9ob85AgB
          stance: supports
          locator: CBDB:486295
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

# 王端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端 | accepted |
| bio.summary | 王端，明人物。曾任僉事。（中国历代人物传记资料库 CBDB 486295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端（CBDB 486295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486295&o=json)
