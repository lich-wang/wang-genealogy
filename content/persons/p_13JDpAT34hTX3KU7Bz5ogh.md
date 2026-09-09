---
schema: wang-person/v1
id: p_13JDpAT34hTX3KU7Bz5ogh
status: active
merged_into: null
display_name: 王日新
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pM9ZB4Dqqn4V68ACZANjKw
        subject_person_id: p_13JDpAT34hTX3KU7Bz5ogh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6vJkc11vDgzzCYXSPPJgoc
          claim_id: c_pM9ZB4Dqqn4V68ACZANjKw
          source_id: s_6gic5GbxKsBs66e3tUG1wu
          stance: supports
          locator: CBDB:506877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506877）
          source: &a1
            id: s_6gic5GbxKsBs66e3tUG1wu
            source_type: api_record
            title: 中国历代人物传记资料库：王日新（CBDB 506877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506877&o=json
            external_identifier: CBDB:506877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d7nL9LaZj1LkXgmpqyyZn3
        subject_person_id: p_13JDpAT34hTX3KU7Bz5ogh
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
        - id: cs_MjB9fYBQJ5JVY3mHFZHoHj
          claim_id: c_d7nL9LaZj1LkXgmpqyyZn3
          source_id: s_6gic5GbxKsBs66e3tUG1wu
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

# 王日新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日新 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日新（CBDB 506877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506877&o=json)
