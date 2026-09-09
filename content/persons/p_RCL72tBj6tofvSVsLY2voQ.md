---
schema: wang-person/v1
id: p_RCL72tBj6tofvSVsLY2voQ
status: active
merged_into: null
display_name: 王希孟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HsT74PQ1LgNY3e5XfsLQqe
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jZz3vDuSywYLfDBsMVr1SZ
          claim_id: c_HsT74PQ1LgNY3e5XfsLQqe
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: CBDB:126545
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126545）
          source: &a1
            id: s_haJh8AsiWPwqHqRaG4AuhG
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 126545）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126545&o=json
            external_identifier: CBDB:126545
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nVgVyUixkL5ys5sGcZfxRW
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pKeqMF4GA8WF6Z4xQXLpUZ
          claim_id: c_nVgVyUixkL5ys5sGcZfxRW
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PqAn9Jh7aSaqCMASMWm7SA
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Wbvx4iXFJfPta5mcpby3L
          claim_id: c_PqAn9Jh7aSaqCMASMWm7SA
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5qq48QQhYnPHBVJDfZiCd
        subject_person_id: p_RCL72tBj6tofvSVsLY2voQ
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
        - id: cs_C2jvAtW3Hc8SZNCkRZDACx
          claim_id: c_r5qq48QQhYnPHBVJDfZiCd
          source_id: s_haJh8AsiWPwqHqRaG4AuhG
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

# 王希孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希孟 | accepted |
| birth.date | 1475年 | accepted |
| death.date | 1515年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希孟（CBDB 126545）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126545&o=json)
