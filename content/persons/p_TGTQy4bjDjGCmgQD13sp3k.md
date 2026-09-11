---
schema: wang-person/v1
id: p_TGTQy4bjDjGCmgQD13sp3k
status: active
merged_into: null
display_name: 王釗周
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dx7K1JMEFrZQ3CFmHXwKzL
        subject_person_id: p_TGTQy4bjDjGCmgQD13sp3k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sPC2V2HZk3qdbYevuJazLV
          claim_id: c_dx7K1JMEFrZQ3CFmHXwKzL
          source_id: s_hATR3qhbwzbsiYrRC1Uag9
          stance: supports
          locator: CBDB:640544
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640544）
          source: &a1
            id: s_hATR3qhbwzbsiYrRC1Uag9
            source_type: api_record
            title: 中国历代人物传记资料库：王釗周（CBDB 640544）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640544&o=json
            external_identifier: CBDB:640544
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cbcNN8zHj8NWknpK81Stbk
        subject_person_id: p_TGTQy4bjDjGCmgQD13sp3k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗周，清人物。籍贯盱眙，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640544）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R2G4dHf8lRw6yizFge3sRS
          claim_id: c_cbcNN8zHj8NWknpK81Stbk
          source_id: s_hATR3qhbwzbsiYrRC1Uag9
          stance: supports
          locator: CBDB:640544
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

# 王釗周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗周 | accepted |
| bio.summary | 王釗周，清人物。籍贯盱眙，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 640544） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釗周（CBDB 640544）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640544&o=json)
