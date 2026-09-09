---
schema: wang-person/v1
id: p_WPVAqcRtnt1HvYAsfmkMSQ
status: active
merged_into: null
display_name: 王松年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ez6LkurKKgE2f1doyYUCfr
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王松年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWwriurkPD47a1MJzfhSf7
          claim_id: c_Ez6LkurKKgE2f1doyYUCfr
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
          stance: supports
          locator: CBDB:175700
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175700）
          source: &a1
            id: s_NDQ1uJirCp5rSA1AZQEKJ8
            source_type: api_record
            title: 中国历代人物传记资料库：王松年（CBDB 175700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json
            external_identifier: CBDB:175700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_n1Hie8JzwDoXf3RF9iGr6D
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 547年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3YGt9mDU8s3w3KtC2PE7d
          claim_id: c_n1Hie8JzwDoXf3RF9iGr6D
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
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
        id: c_ed7VdFfYcCtDocv8YJy91y
        subject_person_id: p_WPVAqcRtnt1HvYAsfmkMSQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VrPBkiNfhiWGoGPwhR8jyz
          claim_id: c_ed7VdFfYcCtDocv8YJy91y
          source_id: s_NDQ1uJirCp5rSA1AZQEKJ8
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

# 王松年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王松年 | accepted |
| death.date | 547年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王松年（CBDB 175700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175700&o=json)
