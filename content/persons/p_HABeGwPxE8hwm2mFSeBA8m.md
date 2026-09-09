---
schema: wang-person/v1
id: p_HABeGwPxE8hwm2mFSeBA8m
status: active
merged_into: null
display_name: 王培生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fWFoaE2bt1pKtwdvBNDDEi
        subject_person_id: p_HABeGwPxE8hwm2mFSeBA8m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_n6AeVMQdXrMLkpNz2TUEmE
          claim_id: c_fWFoaE2bt1pKtwdvBNDDEi
          source_id: s_GkJSZtJju3KEX2aU7bwWsJ
          stance: supports
          locator: CBDB:71989
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71989）
          source: &a1
            id: s_GkJSZtJju3KEX2aU7bwWsJ
            source_type: api_record
            title: 中国历代人物传记资料库：王培生（CBDB 71989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71989&o=json
            external_identifier: CBDB:71989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.949Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_srFXWAU57ZL1Kj4WBAPCkB
        subject_person_id: p_HABeGwPxE8hwm2mFSeBA8m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1666年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uKcjJZ8Z3g4G2RUasaEQKD
          claim_id: c_srFXWAU57ZL1Kj4WBAPCkB
          source_id: s_GkJSZtJju3KEX2aU7bwWsJ
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
        id: c_Eu6So4dARgqCYbNT4SKPaZ
        subject_person_id: p_HABeGwPxE8hwm2mFSeBA8m
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
        - id: cs_6TL1MRTFhkpVv29BBmX1su
          claim_id: c_Eu6So4dARgqCYbNT4SKPaZ
          source_id: s_GkJSZtJju3KEX2aU7bwWsJ
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

# 王培生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培生 | accepted |
| birth.date | 1666年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培生（CBDB 71989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71989&o=json)
