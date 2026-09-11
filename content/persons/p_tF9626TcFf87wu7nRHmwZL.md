---
schema: wang-person/v1
id: p_tF9626TcFf87wu7nRHmwZL
status: active
merged_into: null
display_name: 王秀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cLmbSoi4zLXPHjf3gkjpm6
        subject_person_id: p_tF9626TcFf87wu7nRHmwZL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WC2jDJ2VrirRVLASnV2tMc
          claim_id: c_cLmbSoi4zLXPHjf3gkjpm6
          source_id: s_bUENsK4xrmnTg93zDFJQ4h
          stance: supports
          locator: CBDB:191690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191690）
          source: &a1
            id: s_bUENsK4xrmnTg93zDFJQ4h
            source_type: api_record
            title: 中国历代人物传记资料库：王秀（CBDB 191690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191690&o=json
            external_identifier: CBDB:191690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.375Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DqMPrfWNwMLuB23DksLAqa
        subject_person_id: p_tF9626TcFf87wu7nRHmwZL
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 859年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TFELE3gAv7WwverVGiTjhB
          claim_id: c_DqMPrfWNwMLuB23DksLAqa
          source_id: s_bUENsK4xrmnTg93zDFJQ4h
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
        id: c_4FRtD4w8YGuWWMRW4jeiDK
        subject_person_id: p_tF9626TcFf87wu7nRHmwZL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀（卒于859年），唐人物。籍贯潞州。（中国历代人物传记资料库 CBDB 191690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ey_WHxkwYwf73tpvjjyvFO
          claim_id: c_4FRtD4w8YGuWWMRW4jeiDK
          source_id: s_bUENsK4xrmnTg93zDFJQ4h
          stance: supports
          locator: CBDB:191690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-_PRlKn0H822pPnAmjenjF
        subject_person_id: p_9kLQ4yExp5H3DYCSBGreYy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tF9626TcFf87wu7nRHmwZL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rgQ7IHNGfvmXS-hX7_a7qs
          claim_id: c_-_PRlKn0H822pPnAmjenjF
          source_id: s_wDscmwezuKNvM97CmriQPE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wDscmwezuKNvM97CmriQPE
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 145967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145967&o=json
            external_identifier: CBDB:145967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9kLQ4yExp5H3DYCSBGreYy
        status: active
        display_name: 王成
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀 | accepted |
| death.date | 859年 | accepted |
| bio.summary | 王秀（卒于859年），唐人物。籍贯潞州。（中国历代人物传记资料库 CBDB 191690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9kLQ4yExp5H3DYCSBGreYy | 王成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 145967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145967&o=json)
- [中国历代人物传记资料库：王秀（CBDB 191690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191690&o=json)
