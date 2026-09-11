---
schema: wang-person/v1
id: p_q3M1uotSSYEko568QrKBnD
status: active
merged_into: null
display_name: 王翺
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHDi2oH3y1waA6b2L1uYaD
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EJdgTgKoZBWQ3LHdFT1phb
          claim_id: c_QHDi2oH3y1waA6b2L1uYaD
          source_id: s_gPU147HWPbQxPtoJcF8CBt
          stance: supports
          locator: CBDB:175720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175720）
          source: &a1
            id: s_gPU147HWPbQxPtoJcF8CBt
            source_type: api_record
            title: 中国历代人物传记资料库：王翺（CBDB 175720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175720&o=json
            external_identifier: CBDB:175720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1m9b1Tyv9nUvLU39kwnTtF
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFaXigUsizRsNtvERiEbMP
          claim_id: c_1m9b1Tyv9nUvLU39kwnTtF
          source_id: s_gPU147HWPbQxPtoJcF8CBt
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
        id: c_RtgytmHSBAqosQXJzDxHss
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翺（卒于769年），唐人物。籍贯淮陰，曾任縣尉。（中国历代人物传记资料库 CBDB 175720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iGlVIqiceXrzWPc3H3Jaw3
          claim_id: c_RtgytmHSBAqosQXJzDxHss
          source_id: s_gPU147HWPbQxPtoJcF8CBt
          stance: supports
          locator: CBDB:175720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RUOuCmYSvnsCt1ubmvr9e6
        subject_person_id: p_WFK8nCcWWajLsezEo17Vyb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_q3M1uotSSYEko568QrKBnD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2pcipc3lcfd_Gc9vDuQffm
          claim_id: c_RUOuCmYSvnsCt1ubmvr9e6
          source_id: s_gPU147HWPbQxPtoJcF8CBt
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
        id: c_RqrKDjhqUiCFqS1kFVRjlF
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G6oThpwDHAZqGWdewQb3vQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7rLjvorumtU3yA73FMacO
          claim_id: c_RqrKDjhqUiCFqS1kFVRjlF
          source_id: s_hK7apSsKbAFpwSs4xw1NcZ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hK7apSsKbAFpwSs4xw1NcZ
            source_type: api_record
            title: 中国历代人物传记资料库：王堪（CBDB 175722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175722&o=json
            external_identifier: CBDB:175722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_G6oThpwDHAZqGWdewQb3vQ
        status: active
        display_name: 王堪
        merged_into_person_id: null
    - claim:
        id: c_GR5TR6dvfT9sO2aVYonHNp
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uGuUvFDhQY39j4Tpx18uDZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qKzRXvUPbkSbdVSsB3yAg7
          claim_id: c_GR5TR6dvfT9sO2aVYonHNp
          source_id: s_gPU147HWPbQxPtoJcF8CBt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uGuUvFDhQY39j4Tpx18uDZ
        status: active
        display_name: 王勳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王翺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翺 | accepted |
| death.date | 769年 | accepted |
| bio.summary | 王翺（卒于769年），唐人物。籍贯淮陰，曾任縣尉。（中国历代人物传记资料库 CBDB 175720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WFK8nCcWWajLsezEo17Vyb | 王光謙 | accepted |
| children | p_G6oThpwDHAZqGWdewQb3vQ | 王堪 | accepted |
| children | p_uGuUvFDhQY39j4Tpx18uDZ | 王勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翺（CBDB 175720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175720&o=json)
- [中国历代人物传记资料库：王堪（CBDB 175722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175722&o=json)
