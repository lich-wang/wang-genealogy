---
schema: wang-person/v1
id: p_yBtPvdFHB94uiBW1TdCCXp
status: active
merged_into: null
display_name: 王敬仲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_77THN2miPSpLDy3vh6yWcJ
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dMPtDTh3tfHY9DfHANsdvL
          claim_id: c_77THN2miPSpLDy3vh6yWcJ
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
          stance: supports
          locator: CBDB:175717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175717）
          source: &a1
            id: s_4o6giVFF6N5GX9PM8T3gbY
            source_type: api_record
            title: 中国历代人物传记资料库：王敬仲（CBDB 175717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175717&o=json
            external_identifier: CBDB:175717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.078Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WbaR9itQKzWYmD9GwRAj7W
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DV3roxoiwmT8sxwbZaEJgv
          claim_id: c_WbaR9itQKzWYmD9GwRAj7W
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
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
        id: c_tBdjCDFBC4A1mswhoRxfAA
        subject_person_id: p_yBtPvdFHB94uiBW1TdCCXp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V9wP8FSo2STUHBSQ4bmqbt
          claim_id: c_tBdjCDFBC4A1mswhoRxfAA
          source_id: s_4o6giVFF6N5GX9PM8T3gbY
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

# 王敬仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬仲（CBDB 175717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175717&o=json)
