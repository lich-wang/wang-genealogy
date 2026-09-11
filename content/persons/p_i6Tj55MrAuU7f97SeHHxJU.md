---
schema: wang-person/v1
id: p_i6Tj55MrAuU7f97SeHHxJU
status: active
merged_into: null
display_name: 王大恩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BKxdD9ZzmH1B9JtqwQEuB
        subject_person_id: p_i6Tj55MrAuU7f97SeHHxJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大恩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2UBveae5r1DChMxEHPxdZX
          claim_id: c_2BKxdD9ZzmH1B9JtqwQEuB
          source_id: s_3Hb9V9tx9vRyg34S1iZC72
          stance: supports
          locator: CBDB:636897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636897）
          source: &a1
            id: s_3Hb9V9tx9vRyg34S1iZC72
            source_type: api_record
            title: 中国历代人物传记资料库：王大恩（CBDB 636897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636897&o=json
            external_identifier: CBDB:636897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_etLHYhenqydvEVwuNCBd29
        subject_person_id: p_i6Tj55MrAuU7f97SeHHxJU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大恩，清人物。籍贯武平，曾任典史。（中国历代人物传记资料库 CBDB 636897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PZJO6Zogq_UG6els9T8WYv
          claim_id: c_etLHYhenqydvEVwuNCBd29
          source_id: s_3Hb9V9tx9vRyg34S1iZC72
          stance: supports
          locator: CBDB:636897
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

# 王大恩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大恩 | accepted |
| bio.summary | 王大恩，清人物。籍贯武平，曾任典史。（中国历代人物传记资料库 CBDB 636897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大恩（CBDB 636897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636897&o=json)
