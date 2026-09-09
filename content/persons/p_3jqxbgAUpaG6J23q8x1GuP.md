---
schema: wang-person/v1
id: p_3jqxbgAUpaG6J23q8x1GuP
status: active
merged_into: null
display_name: 王泰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4sego1Cs9cMPFPgKmgFVxR
        subject_person_id: p_3jqxbgAUpaG6J23q8x1GuP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ekba8PasJu66KoPveQ7GdU
          claim_id: c_4sego1Cs9cMPFPgKmgFVxR
          source_id: s_LwZLNuonXum4p2rBrSKfRT
          stance: supports
          locator: CBDB:459383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459383）
          source: &a1
            id: s_LwZLNuonXum4p2rBrSKfRT
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 459383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459383&o=json
            external_identifier: CBDB:459383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pib78TKugtFthY33f7hcMK
        subject_person_id: p_3jqxbgAUpaG6J23q8x1GuP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hTRvAc47APio7UaYovPCog
          claim_id: c_Pib78TKugtFthY33f7hcMK
          source_id: s_LwZLNuonXum4p2rBrSKfRT
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

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 459383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459383&o=json)
