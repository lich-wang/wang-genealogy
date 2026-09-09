---
schema: wang-person/v1
id: p_NkjrkfLSubJRquGWk6KTAC
status: active
merged_into: null
display_name: 王祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iEezg9Tc4mqnZdzbWm9aK5
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qXzEYmrmUEFhKgmULfyc1M
          claim_id: c_iEezg9Tc4mqnZdzbWm9aK5
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: CBDB:266762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266762）
          source: &a1
            id: s_b2aRZZg64z4mZCMpV7GCxE
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 266762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json
            external_identifier: CBDB:266762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WeKLpS8oL9NVCbs5cy53aF
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZZTmHmVUXJDCjY6mtUi1ow
          claim_id: c_WeKLpS8oL9NVCbs5cy53aF
          source_id: s_b2aRZZg64z4mZCMpV7GCxE
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祚（CBDB 266762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266762&o=json)
