---
schema: wang-person/v1
id: p_QFmz7x6JoD5LJPJXM74RLq
status: active
merged_into: null
display_name: 王滄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FCvHG9Dka9876bqix9FsCp
        subject_person_id: p_QFmz7x6JoD5LJPJXM74RLq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2PNGCS1sWMoGG1qCHyuSb
          claim_id: c_FCvHG9Dka9876bqix9FsCp
          source_id: s_QykvSzrpd1xPDeUCzLAZ5k
          stance: supports
          locator: CBDB:342830
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342830）
          source: &a1
            id: s_QykvSzrpd1xPDeUCzLAZ5k
            source_type: api_record
            title: 中国历代人物传记资料库：王滄（CBDB 342830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342830&o=json
            external_identifier: CBDB:342830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.085Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QSLvzNeiwAKiojKaoPgCcM
        subject_person_id: p_QFmz7x6JoD5LJPJXM74RLq
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
        - id: cs_9RSYS4DrrEqFosRRnwgJmg
          claim_id: c_QSLvzNeiwAKiojKaoPgCcM
          source_id: s_QykvSzrpd1xPDeUCzLAZ5k
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

# 王滄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滄 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滄（CBDB 342830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342830&o=json)
