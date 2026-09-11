---
schema: wang-person/v1
id: p_JQzg8dzSgMzY5pc379bbnk
status: active
merged_into: null
display_name: 王鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZPfx3KD4ohWVHH2bxPSDcC
        subject_person_id: p_JQzg8dzSgMzY5pc379bbnk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qScRshTeRdbyZuaAheBxB6
          claim_id: c_ZPfx3KD4ohWVHH2bxPSDcC
          source_id: s_2Pytya4LdnGpc2VKcztGvQ
          stance: supports
          locator: CBDB:71262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71262）
          source: &a1
            id: s_2Pytya4LdnGpc2VKcztGvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 71262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71262&o=json
            external_identifier: CBDB:71262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.538Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EyKy8pSa6FQtoMmA3X419b
        subject_person_id: p_JQzg8dzSgMzY5pc379bbnk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1745年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LoBToQ7D23h5TCfDTH8Wmk
          claim_id: c_EyKy8pSa6FQtoMmA3X419b
          source_id: s_2Pytya4LdnGpc2VKcztGvQ
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
        id: c_pSLow9JtGWcB2fssba7nr2
        subject_person_id: p_JQzg8dzSgMzY5pc379bbnk
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BdXXnX87SS4JggHjQipX58
          claim_id: c_pSLow9JtGWcB2fssba7nr2
          source_id: s_2Pytya4LdnGpc2VKcztGvQ
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
        id: c_rFRrkFNyYNAo7DnKt3JHaz
        subject_person_id: p_JQzg8dzSgMzY5pc379bbnk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王鑾（1745年—1807年），清人物。籍贯黃岡，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 71262）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2AW1JOsiqd0PsVTtlJIK4S
          claim_id: c_rFRrkFNyYNAo7DnKt3JHaz
          source_id: s_2Pytya4LdnGpc2VKcztGvQ
          stance: supports
          locator: CBDB:71262
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑾 | accepted |
| birth.date | 1745年 | accepted |
| death.date | 1807年 | accepted |
| bio.summary | 王鑾（1745年—1807年），清人物。籍贯黃岡，入仕學校: 生員(庠生)，曾任縣丞。（中国历代人物传记资料库 CBDB 71262） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 71262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71262&o=json)
