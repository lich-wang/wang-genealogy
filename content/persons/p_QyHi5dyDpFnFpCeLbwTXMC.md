---
schema: wang-person/v1
id: p_QyHi5dyDpFnFpCeLbwTXMC
status: active
merged_into: null
display_name: 王仁俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hGSWAf6SAdityirkHus9qS
        subject_person_id: p_QyHi5dyDpFnFpCeLbwTXMC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7bg5MHAANKgXbX3M53S9mD
          claim_id: c_hGSWAf6SAdityirkHus9qS
          source_id: s_USBeG5QpVF2zrRmaD54MZR
          stance: supports
          locator: CBDB:170462
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170462）
          source: &a1
            id: s_USBeG5QpVF2zrRmaD54MZR
            source_type: api_record
            title: 中国历代人物传记资料库：王仁俊（CBDB 170462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170462&o=json
            external_identifier: CBDB:170462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rwiivm8PYTd34vjRg3qiAZ
        subject_person_id: p_QyHi5dyDpFnFpCeLbwTXMC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 779年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eDWkD4aJvH9thnSJr3H6Tq
          claim_id: c_rwiivm8PYTd34vjRg3qiAZ
          source_id: s_USBeG5QpVF2zrRmaD54MZR
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
        id: c_VW3Qw2fPomq3CF2EeHZHLN
        subject_person_id: p_QyHi5dyDpFnFpCeLbwTXMC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁俊（卒于779年），唐人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 170462）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qTEmPthAJX56ibi-bQjNkW
          claim_id: c_VW3Qw2fPomq3CF2EeHZHLN
          source_id: s_USBeG5QpVF2zrRmaD54MZR
          stance: supports
          locator: CBDB:170462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SHO712MIbBf2dcfOd547HE
        subject_person_id: p_QyHi5dyDpFnFpCeLbwTXMC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lc5T8QMpPxQWjzxvt1ckat
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlaPD8A5QSS2PRJmu9junH
          claim_id: c_SHO712MIbBf2dcfOd547HE
          source_id: s_USBeG5QpVF2zrRmaD54MZR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Lc5T8QMpPxQWjzxvt1ckat
        status: active
        display_name: 王全義
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁俊 | accepted |
| death.date | 779年 | accepted |
| bio.summary | 王仁俊（卒于779年），唐人物。籍贯曲陽。（中国历代人物传记资料库 CBDB 170462） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Lc5T8QMpPxQWjzxvt1ckat | 王全義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁俊（CBDB 170462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170462&o=json)
