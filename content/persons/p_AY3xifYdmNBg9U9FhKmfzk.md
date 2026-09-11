---
schema: wang-person/v1
id: p_AY3xifYdmNBg9U9FhKmfzk
status: active
merged_into: null
display_name: 王易
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mCaQLLjxm2jtrFJsJgA6FV
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piHNq28qHG1Z1ZyCvEsaCm
          claim_id: c_mCaQLLjxm2jtrFJsJgA6FV
          source_id: s_2Cy9UszYE8D614fDcL1af2
          stance: supports
          locator: CBDB:120446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（120446）
          source: &a1
            id: s_2Cy9UszYE8D614fDcL1af2
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 120446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120446&o=json
            external_identifier: CBDB:120446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LBQD2r4fN3d8E6CDDUZbPM
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8gHJ5m4zEtQ9YbkYFFQYL
          claim_id: c_LBQD2r4fN3d8E6CDDUZbPM
          source_id: s_2Cy9UszYE8D614fDcL1af2
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
        id: c_rccE9VAETWpWPyfTdBpgN8
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1723年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wVhjgaJKWYbZbdppPS7Yze
          claim_id: c_rccE9VAETWpWPyfTdBpgN8
          source_id: s_2Cy9UszYE8D614fDcL1af2
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
        id: c_5FgsUXXLKXJh2QpUDQ4KHW
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
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
        - id: cs_68j9GxZy9T4WNik74cnEEF
          claim_id: c_5FgsUXXLKXJh2QpUDQ4KHW
          source_id: s_2Cy9UszYE8D614fDcL1af2
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
  spouses:
    - claim:
        id: c_3qo8R2FDkhcV228kf9mOyC
        subject_person_id: p_AY3xifYdmNBg9U9FhKmfzk
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KH6F68kz7CCCBD3ZvzfmZD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5tA-lnLr4aKzq50icMWa-
          claim_id: c_3qo8R2FDkhcV228kf9mOyC
          source_id: s_CfqV0tTian-6S8xMhQjRoj
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3546, HuWenKai #439：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CfqV0tTian-6S8xMhQjRoj
            source_type: api_record
            title: 中国历代人物传记资料库：紀松實（CBDB 120442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120442&o=json
            external_identifier: CBDB:120442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KH6F68kz7CCCBD3ZvzfmZD
        status: active
        display_name: 紀松實
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| birth.date | 1648年 | accepted |
| death.date | 1723年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_KH6F68kz7CCCBD3ZvzfmZD | 紀松實 | accepted |

## 外部来源

- [中国历代人物传记资料库：紀松實（CBDB 120442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120442&o=json)
- [中国历代人物传记资料库：王易（CBDB 120446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120446&o=json)
