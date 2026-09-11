---
schema: wang-person/v1
id: p_n2fdAY63xr4h7bBuBGkvKc
status: active
merged_into: null
display_name: 王師甫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r64mF9tg1xb7NUQHrpQZxq
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rf9d1XHNB98ADwrW7DN7Rf
          claim_id: c_r64mF9tg1xb7NUQHrpQZxq
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
          stance: supports
          locator: CBDB:175694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175694）
          source: &a1
            id: s_AnmKvSkY4NsuqQiu8wKsdj
            source_type: api_record
            title: 中国历代人物传记资料库：王師甫（CBDB 175694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175694&o=json
            external_identifier: CBDB:175694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q4JTqUXWcbw6DQMABKi54R
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45zJdqKgMFbvo8zW8QjNQr
          claim_id: c_Q4JTqUXWcbw6DQMABKi54R
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
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
        id: c_19YTsBcSDsNzd4M84eXjWx
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師甫（卒于885年），唐人物。籍贯萬年，曾任觀察使。（中国历代人物传记资料库 CBDB 175694）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mp2TADP29RchClOi9So_cw
          claim_id: c_19YTsBcSDsNzd4M84eXjWx
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
          stance: supports
          locator: CBDB:175694
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gJ-25YNEbt8stf0-sWwazu
        subject_person_id: p_wgfYedxmMy9VG8HzciXPDK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FRdF6Nio-W-piaFLqddzTw
          claim_id: c_gJ-25YNEbt8stf0-sWwazu
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wgfYedxmMy9VG8HzciXPDK
        status: active
        display_name: 王貞伯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王師甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師甫 | accepted |
| death.date | 885年 | accepted |
| bio.summary | 王師甫（卒于885年），唐人物。籍贯萬年，曾任觀察使。（中国历代人物传记资料库 CBDB 175694） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wgfYedxmMy9VG8HzciXPDK | 王貞伯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王師甫（CBDB 175694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175694&o=json)
