---
schema: wang-person/v1
id: p_PNLKZXaVK74g6vEY98wvPb
status: active
merged_into: null
display_name: 王鯤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QTrZqh9YZurNHjxe867K3H
        subject_person_id: p_PNLKZXaVK74g6vEY98wvPb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oVr3uQ8iz1X8dFeJy4F5fk
          claim_id: c_QTrZqh9YZurNHjxe867K3H
          source_id: s_nm3JKLPPDtKb99rEvy4JqB
          stance: supports
          locator: CBDB:71281
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71281）
          source: &a1
            id: s_nm3JKLPPDtKb99rEvy4JqB
            source_type: api_record
            title: 中国历代人物传记资料库：王鯤（CBDB 71281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71281&o=json
            external_identifier: CBDB:71281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.558Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TTGDnEs1aCKALimYgDo2Vy
        subject_person_id: p_PNLKZXaVK74g6vEY98wvPb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1775年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGcWApPjZU9t32j3HybePJ
          claim_id: c_TTGDnEs1aCKALimYgDo2Vy
          source_id: s_nm3JKLPPDtKb99rEvy4JqB
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
        id: c_Rca5AypGVTeTrnZyun96Tz
        subject_person_id: p_PNLKZXaVK74g6vEY98wvPb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGDXKK3YVj35kYTkFsGLQL
          claim_id: c_Rca5AypGVTeTrnZyun96Tz
          source_id: s_nm3JKLPPDtKb99rEvy4JqB
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
        id: c_v967V2j5PXG3Xhz78YvJuv
        subject_person_id: p_PNLKZXaVK74g6vEY98wvPb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯤（1775年—1832年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71281）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cQdx-QPHG9uAbrtPz3cu0i
          claim_id: c_v967V2j5PXG3Xhz78YvJuv
          source_id: s_nm3JKLPPDtKb99rEvy4JqB
          stance: supports
          locator: CBDB:71281
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

# 王鯤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鯤 | accepted |
| birth.date | 1775年 | accepted |
| death.date | 1832年 | accepted |
| bio.summary | 王鯤（1775年—1832年），清人物。籍贯吳江。（中国历代人物传记资料库 CBDB 71281） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鯤（CBDB 71281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71281&o=json)
