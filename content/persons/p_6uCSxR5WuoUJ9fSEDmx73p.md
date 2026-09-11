---
schema: wang-person/v1
id: p_6uCSxR5WuoUJ9fSEDmx73p
status: active
merged_into: null
display_name: 王德元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qSyrYTEhL34b1S6JsogfFX
        subject_person_id: p_6uCSxR5WuoUJ9fSEDmx73p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DdH5EEb2qPYQpADgZBTGSa
          claim_id: c_qSyrYTEhL34b1S6JsogfFX
          source_id: s_AYqZSp36vyzTxNgCYczAfe
          stance: supports
          locator: CBDB:101409
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101409）
          source: &a1
            id: s_AYqZSp36vyzTxNgCYczAfe
            source_type: api_record
            title: 中国历代人物传记资料库：王德元（CBDB 101409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101409&o=json
            external_identifier: CBDB:101409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_A9bdNQTASqKwKp7YWX2F68
        subject_person_id: p_6uCSxR5WuoUJ9fSEDmx73p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1195年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHsbXZnCpF9ohzu32nZkQR
          claim_id: c_A9bdNQTASqKwKp7YWX2F68
          source_id: s_AYqZSp36vyzTxNgCYczAfe
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
        id: c_xKr9UFsvRR8tg8AHMgM31r
        subject_person_id: p_6uCSxR5WuoUJ9fSEDmx73p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1274年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bCWJ1gcrZRPnUKE2qtoG7z
          claim_id: c_xKr9UFsvRR8tg8AHMgM31r
          source_id: s_AYqZSp36vyzTxNgCYczAfe
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
        id: c_w3Epca1ST49YYQpszCEbFM
        subject_person_id: p_6uCSxR5WuoUJ9fSEDmx73p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德元（1195年—1274年），元人物。籍贯邢臺。（中国历代人物传记资料库 CBDB 101409）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XHU3UnZe0LKGM4SoOH66u5
          claim_id: c_w3Epca1ST49YYQpszCEbFM
          source_id: s_AYqZSp36vyzTxNgCYczAfe
          stance: supports
          locator: CBDB:101409
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

# 王德元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德元 | accepted |
| birth.date | 1195年 | accepted |
| death.date | 1274年 | accepted |
| bio.summary | 王德元（1195年—1274年），元人物。籍贯邢臺。（中国历代人物传记资料库 CBDB 101409） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德元（CBDB 101409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101409&o=json)
