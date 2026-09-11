---
schema: wang-person/v1
id: p_DfQHsRmKxgBvSheECo3PBu
status: active
merged_into: null
display_name: 王珏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PN5jByKz9BS9f45M1jQThj
        subject_person_id: p_DfQHsRmKxgBvSheECo3PBu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VMTMzA9MhvHJkoEMhtD88K
          claim_id: c_PN5jByKz9BS9f45M1jQThj
          source_id: s_Q6L5Gehsr83N29JjdA41xQ
          stance: supports
          locator: CBDB:491674
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491674）
          source: &a1
            id: s_Q6L5Gehsr83N29JjdA41xQ
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 491674）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491674&o=json
            external_identifier: CBDB:491674
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.210Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aKxcG5ndcMBTD6pNFMEhM8
        subject_person_id: p_DfQHsRmKxgBvSheECo3PBu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，明人物。入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 491674）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cghCtpguecd9-0AYGfNEsS
          claim_id: c_aKxcG5ndcMBTD6pNFMEhM8
          source_id: s_Q6L5Gehsr83N29JjdA41xQ
          stance: supports
          locator: CBDB:491674
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

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，明人物。入仕監生，曾任照磨。（中国历代人物传记资料库 CBDB 491674） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 491674）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491674&o=json)
