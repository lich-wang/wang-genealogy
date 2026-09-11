---
schema: wang-person/v1
id: p_pzNEWP653ER35cKhpMWTv7
status: active
merged_into: null
display_name: 王翃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_phQo7hTiQ2J54whpTcsQAv
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dj6Bzh7bCDoLDeupNRKdhw
          claim_id: c_phQo7hTiQ2J54whpTcsQAv
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
          stance: supports
          locator: CBDB:175725
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175725）
          source: &a1
            id: s_2qjPyhEFntbgQHfM1kHk1p
            source_type: api_record
            title: 中国历代人物传记资料库：王翃（CBDB 175725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175725&o=json
            external_identifier: CBDB:175725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qs5uuvfksrbp6EGzetCRTe
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3E9GFcvPEQvzPKZAAF9w9m
          claim_id: c_qs5uuvfksrbp6EGzetCRTe
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
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
        id: c_EjqEFDAqfEAr5mg7sJQFi6
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dEFR1YVTMayH6PpA2XAkaj
          claim_id: c_EjqEFDAqfEAr5mg7sJQFi6
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
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
        id: c_GpYFxq2DL4Rz8CSuUK2aKs
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6nu4A8nSPay9ffCw32jDD6
          claim_id: c_GpYFxq2DL4Rz8CSuUK2aKs
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rfvdiCI-Scn9XdagVQqHE7
        subject_person_id: p_WFK8nCcWWajLsezEo17Vyb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pzNEWP653ER35cKhpMWTv7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veCrAVGqVEUcH7WS0an9ST
          claim_id: c_rfvdiCI-Scn9XdagVQqHE7
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WFK8nCcWWajLsezEo17Vyb
        status: active
        display_name: 王光謙
        merged_into_person_id: null
  children:
    - claim:
        id: c_ZYF4PAf6l4tMs33yEl8bR0
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_64tM8BFUwtuncVvEzET7gL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zaCj1e6edj1HHRFKP1iOqn
          claim_id: c_ZYF4PAf6l4tMs33yEl8bR0
          source_id: s_fUTWQ1rXxoV3oH2dCAkqpi
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fUTWQ1rXxoV3oH2dCAkqpi
            source_type: api_record
            title: 中国历代人物传记资料库：王鼐（CBDB 175726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175726&o=json
            external_identifier: CBDB:175726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_64tM8BFUwtuncVvEzET7gL
        status: active
        display_name: 王鼐
        merged_into_person_id: null
    - claim:
        id: c_84XryGxN8_teIE6aHJKvSR
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rsqv6hgxoAE2cQnP6Pikgx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w6CNYfpEQsO9KlqRebZ8nw
          claim_id: c_84XryGxN8_teIE6aHJKvSR
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rsqv6hgxoAE2cQnP6Pikgx
        status: active
        display_name: 王正雅
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翃 | accepted |
| birth.date | 730年 | accepted |
| death.date | 802年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WFK8nCcWWajLsezEo17Vyb | 王光謙 | accepted |
| children | p_64tM8BFUwtuncVvEzET7gL | 王鼐 | accepted |
| children | p_rsqv6hgxoAE2cQnP6Pikgx | 王正雅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翃（CBDB 175725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175725&o=json)
- [中国历代人物传记资料库：王鼐（CBDB 175726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175726&o=json)
