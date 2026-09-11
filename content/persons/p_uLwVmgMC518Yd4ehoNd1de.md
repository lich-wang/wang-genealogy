---
schema: wang-person/v1
id: p_uLwVmgMC518Yd4ehoNd1de
status: active
merged_into: null
display_name: 王誕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FmNocSiWzp4CpF88Tq3t3N
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4qGTXQWK8q79APqPuiGcGF
          claim_id: c_FmNocSiWzp4CpF88Tq3t3N
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: CBDB:141997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141997）
          source: &a1
            id: s_cUBuvMo9eRXEUn6UkP3FHH
            source_type: api_record
            title: 中国历代人物传记资料库：王誕（CBDB 141997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json
            external_identifier: CBDB:141997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9FRrxoWUKfeJFHjt4nynP3
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 790年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hb1LA5Vy192WCLo6wEzA7R
          claim_id: c_9FRrxoWUKfeJFHjt4nynP3
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
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
        id: c_pe9DsBtmT44dpqEJG5eb26
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 830年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WwUTKKMBf2omh1mCLHUQfV
          claim_id: c_pe9DsBtmT44dpqEJG5eb26
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
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
        id: c_XKZw5gEbeBSXLQqyKGJsi1
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誕（790年—830年），史料所见人物。本项目依据《中国历代人物传记资料库：王誕（CBDB 141997）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xorf16D_2RJq62a3xGN06M
          claim_id: c_XKZw5gEbeBSXLQqyKGJsi1
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: CBDB:141997
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rxGolBfPJhHHN3E6RREJEJ
        subject_person_id: p_R4kNKSmBcgnyHB9JioBPEt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uLwVmgMC518Yd4ehoNd1de
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qivJiz-LAPHdkZLwN1IZkT
          claim_id: c_rxGolBfPJhHHN3E6RREJEJ
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_R4kNKSmBcgnyHB9JioBPEt
        status: active
        display_name: 王袞
        merged_into_person_id: null
  children:
    - claim:
        id: c_l8uIsHlluMAJ4or7GccKu4
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Rfy3HVEp1zMVW8SiZ4rMr3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YoM2MjS0K0HYNrpF8CEdJu
          claim_id: c_l8uIsHlluMAJ4or7GccKu4
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Rfy3HVEp1zMVW8SiZ4rMr3
        status: active
        display_name: 王寵兒
        merged_into_person_id: null
    - claim:
        id: c_aw0ePlXzNc-i8o6D1Fz0dv
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UPgwDaX1MoQD1gF4qdsncr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwpsYnewIUnLDWqS9CyRPj
          claim_id: c_aw0ePlXzNc-i8o6D1Fz0dv
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UPgwDaX1MoQD1gF4qdsncr
        status: active
        display_name: 王楊五
        merged_into_person_id: null
    - claim:
        id: c_DeDfHbq2-D5iL0FRIgVq8E
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1nSFKsEcEyudCrCBf9N6K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7MWOhsnv8yXBV0MrDhOJei
          claim_id: c_DeDfHbq2-D5iL0FRIgVq8E
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_F1nSFKsEcEyudCrCBf9N6K
        status: active
        display_name: 王留留
        merged_into_person_id: null
    - claim:
        id: c_mFpI1E3w94sbehx9HQUjeC
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_39hKySbW7rCCbNVGgcEod3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6GOFoZ7G8Q1wBh5_v7VYA
          claim_id: c_mFpI1E3w94sbehx9HQUjeC
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_39hKySbW7rCCbNVGgcEod3
        status: active
        display_name: 王豐兒
        merged_into_person_id: null
    - claim:
        id: c_DzcWflsjdHVhdLNA9_0bcZ
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BBYaCB2FNMj3GGzAocZ7iE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cdz7FLAvHic5KDOrCWVqny
          claim_id: c_DzcWflsjdHVhdLNA9_0bcZ
          source_id: s_cUBuvMo9eRXEUn6UkP3FHH
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BBYaCB2FNMj3GGzAocZ7iE
        status: active
        display_name: 王雨雨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_M6p5KOFNxbZ5UFgxdkk0Rn
        subject_person_id: p_uLwVmgMC518Yd4ehoNd1de
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JKQrpEFnUYTLZ2RN8fLeic
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-UdFUqVsh_HgQfqz4UjD6a
          claim_id: c_M6p5KOFNxbZ5UFgxdkk0Rn
          source_id: s_O7R3qFWOWJ9tf1FAInSMF9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xiantong 45：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_O7R3qFWOWJ9tf1FAInSMF9
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王誕妻)（CBDB 160463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160463&o=json
            external_identifier: CBDB:160463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JKQrpEFnUYTLZ2RN8fLeic
        status: active
        display_name: 鄭氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王誕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誕 | accepted |
| birth.date | 790年 | accepted |
| death.date | 830年 | accepted |
| bio.summary | 王誕（790年—830年），史料所见人物。本项目依据《中国历代人物传记资料库：王誕（CBDB 141997）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_R4kNKSmBcgnyHB9JioBPEt | 王袞 | accepted |
| children | p_Rfy3HVEp1zMVW8SiZ4rMr3 | 王寵兒 | accepted |
| children | p_UPgwDaX1MoQD1gF4qdsncr | 王楊五 | accepted |
| children | p_F1nSFKsEcEyudCrCBf9N6K | 王留留 | accepted |
| children | p_39hKySbW7rCCbNVGgcEod3 | 王豐兒 | accepted |
| children | p_BBYaCB2FNMj3GGzAocZ7iE | 王雨雨 | accepted |
| spouses | p_JKQrpEFnUYTLZ2RN8fLeic | 鄭氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誕（CBDB 141997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141997&o=json)
- [中国历代人物传记资料库：鄭氏(王誕妻)（CBDB 160463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160463&o=json)
