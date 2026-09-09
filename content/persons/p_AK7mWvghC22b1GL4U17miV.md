---
schema: wang-person/v1
id: p_AK7mWvghC22b1GL4U17miV
status: active
merged_into: null
display_name: 王煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gE7YHnAy6inoUdEuLrrDqe
        subject_person_id: p_AK7mWvghC22b1GL4U17miV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MkNV6Low6mo2b1285Sp2qQ
          claim_id: c_gE7YHnAy6inoUdEuLrrDqe
          source_id: s_NWA95c82fnCPWbgWNJYZbC
          stance: supports
          locator: CBDB:71248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71248）
          source: &a1
            id: s_NWA95c82fnCPWbgWNJYZbC
            source_type: api_record
            title: 中国历代人物传记资料库：王煦（CBDB 71248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71248&o=json
            external_identifier: CBDB:71248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HHZ8kmJNYwR5XPVxTUYyF9
        subject_person_id: p_AK7mWvghC22b1GL4U17miV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gi6LDBhePU283w3Uzvcgbv
          claim_id: c_HHZ8kmJNYwR5XPVxTUYyF9
          source_id: s_NWA95c82fnCPWbgWNJYZbC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PgoRXLKo5bRifhpZn1NB4K
        subject_person_id: p_AK7mWvghC22b1GL4U17miV
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
        - id: cs_4L7B3L9zCba2bCcuXgDjSY
          claim_id: c_PgoRXLKo5bRifhpZn1NB4K
          source_id: s_NWA95c82fnCPWbgWNJYZbC
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

# 王煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煦 | accepted |
| birth.date | 1832年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王煦（CBDB 71248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71248&o=json)
