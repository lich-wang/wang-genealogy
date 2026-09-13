---
schema: wang-person/v1
id: p_ymVoLoLnc39GHgwFwHrHgf
status: active
merged_into: null
display_name: 王虔徽
cbdb_id: 160569
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hKuqEKybPh9aPLaes3wNr3
        subject_person_id: p_ymVoLoLnc39GHgwFwHrHgf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔徽，唐人物。籍贯琅琊，曾任縣尉。（中国历代人物传记资料库 CBDB 160569）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_evwT13e3ViUEInFHgAEo4Q
          claim_id: c_hKuqEKybPh9aPLaes3wNr3
          source_id: s_1X6TeJAtkAJLLfKewJ4FGL
          stance: supports
          locator: CBDB:160569
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1X6TeJAtkAJLLfKewJ4FGL
            source_type: api_record
            title: 中国历代人物传记资料库：王虔徽（CBDB 160569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160569&o=json
            external_identifier: CBDB:160569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6ryvVYw47YKAKTNnWgcYDa
        subject_person_id: p_ymVoLoLnc39GHgwFwHrHgf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虔徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WkzvcqFcH2rS5FxM5bYuSW
          claim_id: c_6ryvVYw47YKAKTNnWgcYDa
          source_id: s_1X6TeJAtkAJLLfKewJ4FGL
          stance: supports
          locator: CBDB:160569
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RIokwmz_E15auKgT4VIUUm
        subject_person_id: p_t6H1zNNGoqTrr1wuAW11VY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ymVoLoLnc39GHgwFwHrHgf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4GCj2iNe5GYBG3Fh9ABJXF
          claim_id: c_RIokwmz_E15auKgT4VIUUm
          source_id: s_1X6TeJAtkAJLLfKewJ4FGL
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1X6TeJAtkAJLLfKewJ4FGL
            source_type: api_record
            title: 中国历代人物传记资料库：王虔徽（CBDB 160569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160569&o=json
            external_identifier: CBDB:160569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_t6H1zNNGoqTrr1wuAW11VY
        status: active
        display_name: 王宗
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王虔徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王虔徽，唐人物。籍贯琅琊，曾任縣尉。（中国历代人物传记资料库 CBDB 160569） | accepted |
| name.primary | 王虔徽 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t6H1zNNGoqTrr1wuAW11VY | 王宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王虔徽（CBDB 160569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=160569&o=json)
