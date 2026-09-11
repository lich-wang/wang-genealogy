---
schema: wang-person/v1
id: p_oyPDGHPmLHEAx9hAWLhoNR
status: active
merged_into: null
display_name: 王珍善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2uvAfPYoaWA5N6dv7rj3Ju
        subject_person_id: p_oyPDGHPmLHEAx9hAWLhoNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2WyPgaVGMFKb5ua78V2jwF
          claim_id: c_2uvAfPYoaWA5N6dv7rj3Ju
          source_id: s_Cxo8LqhNLAddk7mskmsod7
          stance: supports
          locator: CBDB:639395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639395）
          source: &a1
            id: s_Cxo8LqhNLAddk7mskmsod7
            source_type: api_record
            title: 中国历代人物传记资料库：王珍善（CBDB 639395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639395&o=json
            external_identifier: CBDB:639395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LLZ6AnDLiQFTLRs2y7icvV
        subject_person_id: p_oyPDGHPmLHEAx9hAWLhoNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珍善，清人物。籍贯懷寧，曾任典史。（中国历代人物传记资料库 CBDB 639395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jcbWBMawe_LjQm4Va0Vgfq
          claim_id: c_LLZ6AnDLiQFTLRs2y7icvV
          source_id: s_Cxo8LqhNLAddk7mskmsod7
          stance: supports
          locator: CBDB:639395
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

# 王珍善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珍善 | accepted |
| bio.summary | 王珍善，清人物。籍贯懷寧，曾任典史。（中国历代人物传记资料库 CBDB 639395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珍善（CBDB 639395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639395&o=json)
