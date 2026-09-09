---
schema: wang-person/v1
id: p_iArNVy1Xgp7P3n4NHEBM5V
status: active
merged_into: null
display_name: 王端灃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8g1t1pMQBoHvcXwFHCLxyr
        subject_person_id: p_iArNVy1Xgp7P3n4NHEBM5V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王端灃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LFEEpe4B63CAY9NXoSfxDX
          claim_id: c_8g1t1pMQBoHvcXwFHCLxyr
          source_id: s_DhZuYVbtYxPdD1srBvEiGQ
          stance: supports
          locator: CBDB:639711
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639711）
          source: &a1
            id: s_DhZuYVbtYxPdD1srBvEiGQ
            source_type: api_record
            title: 中国历代人物传记资料库：王端灃（CBDB 639711）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639711&o=json
            external_identifier: CBDB:639711
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.022Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T25WiDhc36o7UBuryLJKGE
        subject_person_id: p_iArNVy1Xgp7P3n4NHEBM5V
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
        - id: cs_DpzR1a4Dcv61aFFeXdrBMk
          claim_id: c_T25WiDhc36o7UBuryLJKGE
          source_id: s_DhZuYVbtYxPdD1srBvEiGQ
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

# 王端灃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王端灃 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王端灃（CBDB 639711）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639711&o=json)
