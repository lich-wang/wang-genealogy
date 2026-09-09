---
schema: wang-person/v1
id: p_kPeA425yX1vHGJ6NED9rRs
status: active
merged_into: null
display_name: 王俊
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4MR3EFefc6cAU78nD82CXX
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8DdgANuVJLTK8F48QG7p9R
          claim_id: c_4MR3EFefc6cAU78nD82CXX
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
          stance: supports
          locator: CBDB:199171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199171）
          source: &a1
            id: s_3B8eYQBHrVYkKALMpSzZ52
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 199171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199171&o=json
            external_identifier: CBDB:199171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AoCJJ7FQtnur38VPofcpW3
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1443年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nK84fmspMM7FUJQrooArk8
          claim_id: c_AoCJJ7FQtnur38VPofcpW3
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
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
        id: c_CXLr2N6yNJvj2t8P4Dw4A8
        subject_person_id: p_kPeA425yX1vHGJ6NED9rRs
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
        - id: cs_6sLG8hi58He9qvGVF2CpGF
          claim_id: c_CXLr2N6yNJvj2t8P4Dw4A8
          source_id: s_3B8eYQBHrVYkKALMpSzZ52
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

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| birth.date | 1443年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 199171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199171&o=json)
