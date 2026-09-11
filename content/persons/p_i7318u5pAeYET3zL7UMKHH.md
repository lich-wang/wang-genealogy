---
schema: wang-person/v1
id: p_i7318u5pAeYET3zL7UMKHH
status: active
merged_into: null
display_name: 王霆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vax3cAhkKShMdnrb8LAGcz
        subject_person_id: p_i7318u5pAeYET3zL7UMKHH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oqeGMAwzGBiD1azB1B3qZY
          claim_id: c_vax3cAhkKShMdnrb8LAGcz
          source_id: s_Ejfj3VMa4m5dpCLn24Haxy
          stance: supports
          locator: CBDB:303983
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303983）
          source: &a1
            id: s_Ejfj3VMa4m5dpCLn24Haxy
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 303983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303983&o=json
            external_identifier: CBDB:303983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.700Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ifx2TuPbP3F79DEwUkN68
        subject_person_id: p_i7318u5pAeYET3zL7UMKHH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霆，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303983）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qvhPkM3Fi73Eep2u9ufowD
          claim_id: c_7ifx2TuPbP3F79DEwUkN68
          source_id: s_Ejfj3VMa4m5dpCLn24Haxy
          stance: supports
          locator: CBDB:303983
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

# 王霆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霆 | accepted |
| bio.summary | 王霆，明人物。嘉靖二十年進士，籍贯黃陂。（中国历代人物传记资料库 CBDB 303983） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霆（CBDB 303983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303983&o=json)
