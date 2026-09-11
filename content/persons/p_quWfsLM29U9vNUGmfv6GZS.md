---
schema: wang-person/v1
id: p_quWfsLM29U9vNUGmfv6GZS
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RaD84H1MkWk8nPqvDN279A
        subject_person_id: p_quWfsLM29U9vNUGmfv6GZS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_beaPfZF9Z5hiEcrfM32Jfc
          claim_id: c_RaD84H1MkWk8nPqvDN279A
          source_id: s_JpshbV8dtuUxhPBj6gg3AK
          stance: supports
          locator: CBDB:71114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71114）
          source: &a1
            id: s_JpshbV8dtuUxhPBj6gg3AK
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 71114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71114&o=json
            external_identifier: CBDB:71114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_amZ37QeRTMjkDR1ws5RMPA
        subject_person_id: p_quWfsLM29U9vNUGmfv6GZS
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1646年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APMikRE3GG17avuSY5ipvT
          claim_id: c_amZ37QeRTMjkDR1ws5RMPA
          source_id: s_JpshbV8dtuUxhPBj6gg3AK
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
        id: c_e8DHqzPvJpzXJ6kG6SdQ3D
        subject_person_id: p_quWfsLM29U9vNUGmfv6GZS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治（生于1646年），清人物。籍贯天長。（中国历代人物传记资料库 CBDB 71114）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7xEOgr8X2tGfYVbQXxQs4H
          claim_id: c_e8DHqzPvJpzXJ6kG6SdQ3D
          source_id: s_JpshbV8dtuUxhPBj6gg3AK
          stance: supports
          locator: CBDB:71114
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| birth.date | 1646年 | accepted |
| bio.summary | 王治（生于1646年），清人物。籍贯天長。（中国历代人物传记资料库 CBDB 71114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 71114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71114&o=json)
