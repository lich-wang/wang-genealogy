---
schema: wang-person/v1
id: p_c8kvY5ESoiii9c6m9JhP2A
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jSDQcrVzUmDuHCm9Y8hvYW
        subject_person_id: p_c8kvY5ESoiii9c6m9JhP2A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EWtu49SqB5uk3Kyb1ehc9W
          claim_id: c_jSDQcrVzUmDuHCm9Y8hvYW
          source_id: s_5Ue7mBv7Q2JrQ64MSB7VHm
          stance: supports
          locator: CBDB:557758
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（557758）
          source: &a1
            id: s_5Ue7mBv7Q2JrQ64MSB7VHm
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 557758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557758&o=json
            external_identifier: CBDB:557758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E3ZvCvRT3aLWxodhXu6bBa
        subject_person_id: p_c8kvY5ESoiii9c6m9JhP2A
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
        - id: cs_Lch6AbCXHZDP1nvnRMyNra
          claim_id: c_E3ZvCvRT3aLWxodhXu6bBa
          source_id: s_5Ue7mBv7Q2JrQ64MSB7VHm
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

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王弼 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 557758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=557758&o=json)
