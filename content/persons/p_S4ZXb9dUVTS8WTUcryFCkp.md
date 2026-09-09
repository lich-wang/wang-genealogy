---
schema: wang-person/v1
id: p_S4ZXb9dUVTS8WTUcryFCkp
status: active
merged_into: null
display_name: 王胤芳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_A3q2hjWASr8i4Fr8198cC9
        subject_person_id: p_S4ZXb9dUVTS8WTUcryFCkp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王胤芳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nBCJASCxQ6Kg5syS1zyJGr
          claim_id: c_A3q2hjWASr8i4Fr8198cC9
          source_id: s_7ryqNq7o3Yw2rmi2QcsE6Z
          stance: supports
          locator: CBDB:71898
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71898）
          source: &a1
            id: s_7ryqNq7o3Yw2rmi2QcsE6Z
            source_type: api_record
            title: 中国历代人物传记资料库：王胤芳（CBDB 71898）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71898&o=json
            external_identifier: CBDB:71898
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GJesQn7XLpSs2gHVjD9FHH
        subject_person_id: p_S4ZXb9dUVTS8WTUcryFCkp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1632年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KnDTJtSjmYRK3BgZwCoXWr
          claim_id: c_GJesQn7XLpSs2gHVjD9FHH
          source_id: s_7ryqNq7o3Yw2rmi2QcsE6Z
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
        id: c_oTrEWCxoiYkQ8ZoXL3U49x
        subject_person_id: p_S4ZXb9dUVTS8WTUcryFCkp
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
        - id: cs_Lo6MmmBZiSB6Pd4J1KrgVG
          claim_id: c_oTrEWCxoiYkQ8ZoXL3U49x
          source_id: s_7ryqNq7o3Yw2rmi2QcsE6Z
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

# 王胤芳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王胤芳 | accepted |
| birth.date | 1632年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王胤芳（CBDB 71898）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71898&o=json)
