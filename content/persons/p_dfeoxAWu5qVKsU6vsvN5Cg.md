---
schema: wang-person/v1
id: p_dfeoxAWu5qVKsU6vsvN5Cg
status: active
merged_into: null
display_name: 王士策
cbdb_id: 293430
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eZoFB3CYMJsx1CPit4L516
        subject_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士策，明人物。嘉靖十一年進士，籍贯甌寧，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 293430）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-y2u-gLiXrWLzz8tNzG6S_
          claim_id: c_eZoFB3CYMJsx1CPit4L516
          source_id: s_AY8DEGQU16zp2jiALdrmSg
          stance: supports
          locator: CBDB:293430
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AY8DEGQU16zp2jiALdrmSg
            source_type: api_record
            title: 中国历代人物传记资料库：王士策（CBDB 293430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json
            external_identifier: CBDB:293430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fntRkLvUNARyF3TFwarFib
        subject_person_id: p_dfeoxAWu5qVKsU6vsvN5Cg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士策
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ffDH4NQ3RAo9oojgf7QCaL
          claim_id: c_fntRkLvUNARyF3TFwarFib
          source_id: s_AY8DEGQU16zp2jiALdrmSg
          stance: supports
          locator: CBDB:293430
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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

# 王士策

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士策，明人物。嘉靖十一年進士，籍贯甌寧，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 293430） | accepted |
| name.primary | 王士策 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士策（CBDB 293430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293430&o=json)
