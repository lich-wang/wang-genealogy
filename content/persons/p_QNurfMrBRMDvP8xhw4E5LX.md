---
schema: wang-person/v1
id: p_QNurfMrBRMDvP8xhw4E5LX
status: active
merged_into: null
display_name: 王裔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LM3Hkabqjhz6DdCKzCABGE
        subject_person_id: p_QNurfMrBRMDvP8xhw4E5LX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QS4Dz5LQMb3QS4xapmwz8H
          claim_id: c_LM3Hkabqjhz6DdCKzCABGE
          source_id: s_MVbLB687kMKLqFK926P4Pg
          stance: supports
          locator: CBDB:175973
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175973）
          source: &a1
            id: s_MVbLB687kMKLqFK926P4Pg
            source_type: api_record
            title: 中国历代人物传记资料库：王裔（CBDB 175973）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175973&o=json
            external_identifier: CBDB:175973
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.227Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BS6P239ifC2xK9f2GuJEwV
        subject_person_id: p_QNurfMrBRMDvP8xhw4E5LX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 727年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yiYAZferk6K54751NYiyoC
          claim_id: c_BS6P239ifC2xK9f2GuJEwV
          source_id: s_MVbLB687kMKLqFK926P4Pg
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
        id: c_9zePZ1gVW8BbBWot4q1a6e
        subject_person_id: p_QNurfMrBRMDvP8xhw4E5LX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裔（卒于727年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 175973）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__b34xPggGpKQxOvC1g-RaZ
          claim_id: c_9zePZ1gVW8BbBWot4q1a6e
          source_id: s_MVbLB687kMKLqFK926P4Pg
          stance: supports
          locator: CBDB:175973
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u6Hk5FgPU3w2JHaqwA0tt3
        subject_person_id: p_ynNczWHnkXrQUYAhMaYFcU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QNurfMrBRMDvP8xhw4E5LX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HTvemSGM9dklJqlfTUGYkW
          claim_id: c_u6Hk5FgPU3w2JHaqwA0tt3
          source_id: s_MVbLB687kMKLqFK926P4Pg
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ynNczWHnkXrQUYAhMaYFcU
        status: active
        display_name: 王九思
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王裔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裔 | accepted |
| death.date | 727年 | accepted |
| bio.summary | 王裔（卒于727年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 175973） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ynNczWHnkXrQUYAhMaYFcU | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王裔（CBDB 175973）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175973&o=json)
