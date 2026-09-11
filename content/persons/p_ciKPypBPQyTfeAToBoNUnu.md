---
schema: wang-person/v1
id: p_ciKPypBPQyTfeAToBoNUnu
status: active
merged_into: null
display_name: 王虔威
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UZNZ2EHX2Di4GF6zhANLZu
        subject_person_id: p_ciKPypBPQyTfeAToBoNUnu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xVZ5CdC8MCHfuGXynYKQWq
          claim_id: c_UZNZ2EHX2Di4GF6zhANLZu
          source_id: s_WvunaRNYgHGf9pr9oFS6uV
          stance: supports
          locator: CBDB:184934
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（184934）
          source: &a1
            id: s_WvunaRNYgHGf9pr9oFS6uV
            source_type: api_record
            title: 中国历代人物传记资料库：王虔威（CBDB 184934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184934&o=json
            external_identifier: CBDB:184934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bqqX1ag9pLoDwqzqD3yQVK
        subject_person_id: p_ciKPypBPQyTfeAToBoNUnu
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 745年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a73xu6M2gVFfHmx6L4qeN3
          claim_id: c_bqqX1ag9pLoDwqzqD3yQVK
          source_id: s_WvunaRNYgHGf9pr9oFS6uV
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
        id: c_oNAGhikQVTDmeDxnnjWfBc
        subject_person_id: p_ciKPypBPQyTfeAToBoNUnu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔威（卒于745年），唐人物。曾任軍將。（中国历代人物传记资料库 CBDB 184934）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K2TMsCo9yyHZliGQL7GC5L
          claim_id: c_oNAGhikQVTDmeDxnnjWfBc
          source_id: s_WvunaRNYgHGf9pr9oFS6uV
          stance: supports
          locator: CBDB:184934
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9h8Di7a9Xy1xK2atZ0Xg19
        subject_person_id: p_ciKPypBPQyTfeAToBoNUnu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m35gJKNtv7RtV6rFd8ByuC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgtjNKp1Mbj8UpMI19rDs4
          claim_id: c_9h8Di7a9Xy1xK2atZ0Xg19
          source_id: s_WvunaRNYgHGf9pr9oFS6uV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_m35gJKNtv7RtV6rFd8ByuC
        status: active
        display_name: 王思禮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王虔威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虔威 | accepted |
| death.date | 745年 | accepted |
| bio.summary | 王虔威（卒于745年），唐人物。曾任軍將。（中国历代人物传记资料库 CBDB 184934） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_m35gJKNtv7RtV6rFd8ByuC | 王思禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王虔威（CBDB 184934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184934&o=json)
