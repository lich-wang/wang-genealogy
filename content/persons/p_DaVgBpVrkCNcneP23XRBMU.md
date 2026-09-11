---
schema: wang-person/v1
id: p_DaVgBpVrkCNcneP23XRBMU
status: active
merged_into: null
display_name: 王敬先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FyKKQTCYDQUC4CjkNZq5A8
        subject_person_id: p_DaVgBpVrkCNcneP23XRBMU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GsaHsGLrEVer9FXtWHNV6y
          claim_id: c_FyKKQTCYDQUC4CjkNZq5A8
          source_id: s_sh2V67rBTFrUWFeZ9cbMAu
          stance: supports
          locator: CBDB:101378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101378）
          source: &a1
            id: s_sh2V67rBTFrUWFeZ9cbMAu
            source_type: api_record
            title: 中国历代人物传记资料库：王敬先（CBDB 101378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101378&o=json
            external_identifier: CBDB:101378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.826Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HprCMbJtG2UrQrfkiGb21S
        subject_person_id: p_DaVgBpVrkCNcneP23XRBMU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1296年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LysBc1MFxKgj7frkrT2MJD
          claim_id: c_HprCMbJtG2UrQrfkiGb21S
          source_id: s_sh2V67rBTFrUWFeZ9cbMAu
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
        id: c_3bLk27VJhSwfYTZC17o51K
        subject_person_id: p_DaVgBpVrkCNcneP23XRBMU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1345年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUsYdpLSqQi1376qHmnzr2
          claim_id: c_3bLk27VJhSwfYTZC17o51K
          source_id: s_sh2V67rBTFrUWFeZ9cbMAu
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
        id: c_RkJ6YSuH3DsdP5saYvj8di
        subject_person_id: p_DaVgBpVrkCNcneP23XRBMU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬先（1296年—1345年），元人物。籍贯高唐。（中国历代人物传记资料库 CBDB 101378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fD2m6fog5uLZjbhkeadS31
          claim_id: c_RkJ6YSuH3DsdP5saYvj8di
          source_id: s_sh2V67rBTFrUWFeZ9cbMAu
          stance: supports
          locator: CBDB:101378
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

# 王敬先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬先 | accepted |
| birth.date | 1296年 | accepted |
| death.date | 1345年 | accepted |
| bio.summary | 王敬先（1296年—1345年），元人物。籍贯高唐。（中国历代人物传记资料库 CBDB 101378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬先（CBDB 101378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101378&o=json)
