---
schema: wang-person/v1
id: p_mr7WL1H5XRA2PNx82Aovox
status: active
merged_into: null
display_name: 王結
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TwuqY413N5fQGdXFdsALAn
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王結
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ymL8RLfDkvq1ub6sJgryq
          claim_id: c_TwuqY413N5fQGdXFdsALAn
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: CBDB:35033
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35033）
          source: &a1
            id: s_Pnf3TH57yK75Bz5FGF69ej
            source_type: api_record
            title: 中国历代人物传记资料库：王結（CBDB 35033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json
            external_identifier: CBDB:35033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C5FpiQLNYWp1hmX1RTY7Jr
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1275年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mj34KHDRkjWxZmGXjbAboH
          claim_id: c_C5FpiQLNYWp1hmX1RTY7Jr
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
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
        id: c_2P8VqtKeXegXA8qWXJpD6G
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1336年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CKLDQ8GsZrHGbxPA3oq4RT
          claim_id: c_2P8VqtKeXegXA8qWXJpD6G
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
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
        id: c_LJeLBJCLdp9px5haQ12yHC
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ld9mor2dM86wTGgD2LtVcZ
          claim_id: c_LJeLBJCLdp9px5haQ12yHC
          source_id: s_Pnf3TH57yK75Bz5FGF69ej
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王結

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王結 | accepted |
| birth.date | 1275年 | accepted |
| death.date | 1336年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王結（CBDB 35033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35033&o=json)
