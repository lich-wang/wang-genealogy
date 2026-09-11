---
schema: wang-person/v1
id: p_bdBYdAwGEQps4VzzUZtuJT
status: active
merged_into: null
display_name: 王貞儀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LA6JtueiU8WAZ644mxsWmy
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貞儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8cM3A1kqfPYtoGHtdrN8GB
          claim_id: c_LA6JtueiU8WAZ644mxsWmy
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
          stance: supports
          locator: CBDB:55530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55530）
          source: &a1
            id: s_UFVNrvQWFQHsaBmTaEkZ4o
            source_type: api_record
            title: 中国历代人物传记资料库：王貞儀（CBDB 55530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json
            external_identifier: CBDB:55530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.742Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZrsmJfxoEieWQ1EvmC4J9N
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5nxp46rWN18vyVF5FVeVN
          claim_id: c_ZrsmJfxoEieWQ1EvmC4J9N
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
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
        id: c_6L6gMWKAArLv2FRC3mPZ56
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QNDzH4dwLE46WVeBm8EMnd
          claim_id: c_6L6gMWKAArLv2FRC3mPZ56
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
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
        id: c_L8Q17i8QC8PWRDqeMYoxyG
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PK9b9psP3s4Ap7g9iAeLmu
          claim_id: c_L8Q17i8QC8PWRDqeMYoxyG
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
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
        id: c_bQZfi49UkM10rbwzMNjV2n
        subject_person_id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wawyzmCGCKjtK4J-iOTqjm
          claim_id: c_bQZfi49UkM10rbwzMNjV2n
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
          stance: supports
          locator: 敬孚類稿，卷一三：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_fTKKWyZ4tsB4z3Yh6eZTJi
        status: active
        display_name: 王錫琛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XrGECmOrq9HqOAOfFJSTvs
        subject_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GjWD7h39FkCFD496pSDkWb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xjmJzfyJEVWsvHblvun5gC
          claim_id: c_XrGECmOrq9HqOAOfFJSTvs
          source_id: s_3h_a2uaCsmz-pKZ_hvBRUc
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #222, HuWenKai #236：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3h_a2uaCsmz-pKZ_hvBRUc
            source_type: api_record
            title: 中国历代人物传记资料库：詹枚（CBDB 119308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119308&o=json
            external_identifier: CBDB:119308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GjWD7h39FkCFD496pSDkWb
        status: active
        display_name: 詹枚
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_dwO_s3beWX8EEfO_19EAVP
        subject_person_id: p_ZiAK8zAJR9h7qSc2BgYZR5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_bdBYdAwGEQps4VzzUZtuJT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6skLjHwQzcjGjCh6qcZmZ7
          claim_id: c_dwO_s3beWX8EEfO_19EAVP
          source_id: s_UFVNrvQWFQHsaBmTaEkZ4o
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #222, HuWenKai #236：祖父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZiAK8zAJR9h7qSc2BgYZR5
        status: active
        display_name: 王者輔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王貞儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貞儀 | accepted |
| birth.date | 1768年 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fTKKWyZ4tsB4z3Yh6eZTJi | 王錫琛 | accepted |
| spouses | p_GjWD7h39FkCFD496pSDkWb | 詹枚 | accepted |
| ancestors | p_ZiAK8zAJR9h7qSc2BgYZR5 | 王者輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貞儀（CBDB 55530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55530&o=json)
- [中国历代人物传记资料库：詹枚（CBDB 119308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119308&o=json)
