---
schema: wang-person/v1
id: p_M1So8tc44KPk26hpWKpyCs
status: active
merged_into: null
display_name: 王撫辰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_718KN9cnhFYhSJq3wmJ1QT
        subject_person_id: p_M1So8tc44KPk26hpWKpyCs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王撫辰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7PF1HCAQABprXFAvAntFKJ
          claim_id: c_718KN9cnhFYhSJq3wmJ1QT
          source_id: s_judDiz9soBafPw355sfb8N
          stance: supports
          locator: CBDB:638157
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638157）
          source: &a1
            id: s_judDiz9soBafPw355sfb8N
            source_type: api_record
            title: 中国历代人物传记资料库：王撫辰（CBDB 638157）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638157&o=json
            external_identifier: CBDB:638157
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KNAJy5uP34qPknfGZmJJzQ
        subject_person_id: p_M1So8tc44KPk26hpWKpyCs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ckkn4baQSBC3uQZgDjwG7C
          claim_id: c_KNAJy5uP34qPknfGZmJJzQ
          source_id: s_judDiz9soBafPw355sfb8N
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

# 王撫辰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王撫辰 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王撫辰（CBDB 638157）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638157&o=json)
