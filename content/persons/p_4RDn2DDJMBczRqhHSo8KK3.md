---
schema: wang-person/v1
id: p_4RDn2DDJMBczRqhHSo8KK3
status: active
merged_into: null
display_name: 王欽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8nvDyG1KsQtvFRYL3rc7HM
        subject_person_id: p_4RDn2DDJMBczRqhHSo8KK3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P5hyvbbUN13L7HaFPNSzFf
          claim_id: c_8nvDyG1KsQtvFRYL3rc7HM
          source_id: s_A5c3ZsQW9RaFwkjnHh7tQA
          stance: supports
          locator: CBDB:453535
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（453535）
          source: &a1
            id: s_A5c3ZsQW9RaFwkjnHh7tQA
            source_type: api_record
            title: 中国历代人物传记资料库：王欽（CBDB 453535）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453535&o=json
            external_identifier: CBDB:453535
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.403Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1MD8TTstV2qavHLKoz967e
        subject_person_id: p_4RDn2DDJMBczRqhHSo8KK3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王欽，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453535）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F0-4ceLWvguAkVyYuoZj1F
          claim_id: c_1MD8TTstV2qavHLKoz967e
          source_id: s_A5c3ZsQW9RaFwkjnHh7tQA
          stance: supports
          locator: CBDB:453535
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

# 王欽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王欽 | accepted |
| bio.summary | 王欽，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 453535） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王欽（CBDB 453535）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=453535&o=json)
