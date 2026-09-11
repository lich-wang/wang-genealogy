---
schema: wang-person/v1
id: p_58eKuyTw67vdxXTN289qWv
status: active
merged_into: null
display_name: 王守言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCKjHnRt4hTCURQvdvpzvh
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pLgQ66eP7vETjo1Lrx1GVf
          claim_id: c_PCKjHnRt4hTCURQvdvpzvh
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
          stance: supports
          locator: CBDB:142958
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142958）
          source: &a1
            id: s_4gpK9QVaKZiFw24XEk6HV6
            source_type: api_record
            title: 中国历代人物传记资料库：王守言（CBDB 142958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142958&o=json
            external_identifier: CBDB:142958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.219Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vrrZgHpiKyLbpT3K1M9xKH
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 689年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YwzzUqDbNfqo7FL2WhxDNE
          claim_id: c_vrrZgHpiKyLbpT3K1M9xKH
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
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
        id: c_Zz6Md2UsDjNoyj2k9TxRx1
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 743年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQRMGE9sp5KRKcr665Jvzo
          claim_id: c_Zz6Md2UsDjNoyj2k9TxRx1
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
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
        id: c_Ft317QVmtEi6aLKtZymQE1
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守言（689年—743年），史料所见人物。本项目依据《中国历代人物传记资料库：王守言（CBDB 142958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kt-7mFKY-Tzy1vhWcie0ZL
          claim_id: c_Ft317QVmtEi6aLKtZymQE1
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
          stance: supports
          locator: CBDB:142958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_k_OZ8xuydNH4mxIgQwbMkQ
        subject_person_id: p_58eKuyTw67vdxXTN289qWv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7R4n26F86UHbBJWQVDXKxm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gldJ_nV0s9sbnyDmTqJqen
          claim_id: c_k_OZ8xuydNH4mxIgQwbMkQ
          source_id: s_4gpK9QVaKZiFw24XEk6HV6
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao13：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7R4n26F86UHbBJWQVDXKxm
        status: active
        display_name: 王希祥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王守言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守言 | accepted |
| birth.date | 689年 | accepted |
| death.date | 743年 | accepted |
| bio.summary | 王守言（689年—743年），史料所见人物。本项目依据《中国历代人物传记资料库：王守言（CBDB 142958）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7R4n26F86UHbBJWQVDXKxm | 王希祥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王守言（CBDB 142958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142958&o=json)
