---
schema: wang-person/v1
id: p_xtfgPoaQLGKKD687t4NSY6
status: active
merged_into: null
display_name: 王士禧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VjRYWM23nfbHwCHuWXKdC9
        subject_person_id: p_xtfgPoaQLGKKD687t4NSY6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士禧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iHYwAYQTP11SLr9ZLn1P3C
          claim_id: c_VjRYWM23nfbHwCHuWXKdC9
          source_id: s_HX9GUv1yGsYo3BeKfdLLM1
          stance: supports
          locator: CBDB:71329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71329）
          source: &a1
            id: s_HX9GUv1yGsYo3BeKfdLLM1
            source_type: api_record
            title: 中国历代人物传记资料库：王士禧（CBDB 71329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71329&o=json
            external_identifier: CBDB:71329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.147Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_go7Bsm4uMMsHNURrii7zts
        subject_person_id: p_xtfgPoaQLGKKD687t4NSY6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1627年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JSkV1bvV9WG4EUwBoTsZJy
          claim_id: c_go7Bsm4uMMsHNURrii7zts
          source_id: s_HX9GUv1yGsYo3BeKfdLLM1
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
        id: c_fWYSVJ4s3cQNoqF38BCTHB
        subject_person_id: p_xtfgPoaQLGKKD687t4NSY6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1697年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_od7QZwjE6boen6QyKP4kTL
          claim_id: c_fWYSVJ4s3cQNoqF38BCTHB
          source_id: s_HX9GUv1yGsYo3BeKfdLLM1
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
        id: c_wwE1ELyBqS1C6snMCF8NvV
        subject_person_id: p_xtfgPoaQLGKKD687t4NSY6
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
        - id: cs_Cv84r3EoASxq3Fx5EZdKvK
          claim_id: c_wwE1ELyBqS1C6snMCF8NvV
          source_id: s_HX9GUv1yGsYo3BeKfdLLM1
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

# 王士禧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士禧 | accepted |
| birth.date | 1627年 | accepted |
| death.date | 1697年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士禧（CBDB 71329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71329&o=json)
