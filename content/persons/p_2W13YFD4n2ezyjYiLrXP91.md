---
schema: wang-person/v1
id: p_2W13YFD4n2ezyjYiLrXP91
status: active
merged_into: null
display_name: 王克勤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aA9QezpiLVA18kFC5UqTF1
        subject_person_id: p_2W13YFD4n2ezyjYiLrXP91
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MzLP5GQUD5L46ZioydYAQR
          claim_id: c_aA9QezpiLVA18kFC5UqTF1
          source_id: s_pY6Y4LvAdcNT1PAoV4NALw
          stance: supports
          locator: CBDB:302733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302733）
          source: &a1
            id: s_pY6Y4LvAdcNT1PAoV4NALw
            source_type: api_record
            title: 中国历代人物传记资料库：王克勤（CBDB 302733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302733&o=json
            external_identifier: CBDB:302733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NpghK2rqh5iPs8TtgGs4Bk
        subject_person_id: p_2W13YFD4n2ezyjYiLrXP91
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
        - id: cs_rQWEeGrjB5KnrkHFeRo38g
          claim_id: c_NpghK2rqh5iPs8TtgGs4Bk
          source_id: s_pY6Y4LvAdcNT1PAoV4NALw
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

# 王克勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克勤 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克勤（CBDB 302733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302733&o=json)
