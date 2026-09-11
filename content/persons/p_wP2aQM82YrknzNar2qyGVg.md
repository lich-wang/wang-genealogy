---
schema: wang-person/v1
id: p_wP2aQM82YrknzNar2qyGVg
status: active
merged_into: null
display_name: 王生
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D3emk3EHasB7UuoSeYAUZN
        subject_person_id: p_wP2aQM82YrknzNar2qyGVg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W6PgW3q92h16arfTsJxXsm
          claim_id: c_D3emk3EHasB7UuoSeYAUZN
          source_id: s_DFj3LpqTwaHpj3CqLdsk5b
          stance: supports
          locator: CBDB:191687
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191687）
          source: &a1
            id: s_DFj3LpqTwaHpj3CqLdsk5b
            source_type: api_record
            title: 中国历代人物传记资料库：王生（CBDB 191687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191687&o=json
            external_identifier: CBDB:191687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_49U35xfPsCXhVNEXswua2a
        subject_person_id: p_wP2aQM82YrknzNar2qyGVg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xaz9zgNRUthK38SepT3uFF
          claim_id: c_49U35xfPsCXhVNEXswua2a
          source_id: s_DFj3LpqTwaHpj3CqLdsk5b
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
        id: c_uGwZtDfbvzhAWVDQsUQJ61
        subject_person_id: p_wP2aQM82YrknzNar2qyGVg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王生（卒于748年），唐人物。籍贯潞州。（中国历代人物传记资料库 CBDB 191687）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ABOgm776AnxYJ0wZGR9cRQ
          claim_id: c_uGwZtDfbvzhAWVDQsUQJ61
          source_id: s_DFj3LpqTwaHpj3CqLdsk5b
          stance: supports
          locator: CBDB:191687
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gBmIAye8lqpPB3PjK6lKTt
        subject_person_id: p_PL6gFJjpZ6Z7c5PRZDih3X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wP2aQM82YrknzNar2qyGVg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EvsxtEmmA8IdlSq6liNxvH
          claim_id: c_gBmIAye8lqpPB3PjK6lKTt
          source_id: s_yj1est2Mdu19idydSW2RcR
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yj1est2Mdu19idydSW2RcR
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 191688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191688&o=json
            external_identifier: CBDB:191688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PL6gFJjpZ6Z7c5PRZDih3X
        status: active
        display_name: 王照
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王生 | accepted |
| death.date | 748年 | accepted |
| bio.summary | 王生（卒于748年），唐人物。籍贯潞州。（中国历代人物传记资料库 CBDB 191687） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PL6gFJjpZ6Z7c5PRZDih3X | 王照 | accepted |

## 外部来源

- [中国历代人物传记资料库：王生（CBDB 191687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191687&o=json)
- [中国历代人物传记资料库：王照（CBDB 191688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191688&o=json)
