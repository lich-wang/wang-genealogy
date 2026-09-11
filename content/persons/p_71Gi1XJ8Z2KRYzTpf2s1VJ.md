---
schema: wang-person/v1
id: p_71Gi1XJ8Z2KRYzTpf2s1VJ
status: active
merged_into: null
display_name: 王景霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2TTQ4Cg1BkS7e9vbz5GGFv
        subject_person_id: p_71Gi1XJ8Z2KRYzTpf2s1VJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z3tLE39i54FyaNxyLtKFR5
          claim_id: c_2TTQ4Cg1BkS7e9vbz5GGFv
          source_id: s_pNa8WAPeFNMpe9gnP5K9ab
          stance: supports
          locator: CBDB:638515
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638515）
          source: &a1
            id: s_pNa8WAPeFNMpe9gnP5K9ab
            source_type: api_record
            title: 中国历代人物传记资料库：王景霖（CBDB 638515）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638515&o=json
            external_identifier: CBDB:638515
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.658Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p3mUzdTS8DHWyp3LRuGkve
        subject_person_id: p_71Gi1XJ8Z2KRYzTpf2s1VJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景霖，清人物。籍贯浙江省，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638515）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yPqmKjbCvUUeX_Kx3DTHiI
          claim_id: c_p3mUzdTS8DHWyp3LRuGkve
          source_id: s_pNa8WAPeFNMpe9gnP5K9ab
          stance: supports
          locator: CBDB:638515
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景霖 | accepted |
| bio.summary | 王景霖，清人物。籍贯浙江省，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638515） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景霖（CBDB 638515）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638515&o=json)
