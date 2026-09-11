---
schema: wang-person/v1
id: p_sFRTZH5sbrTjUPDEKPkiCx
status: active
merged_into: null
display_name: 王明彝
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JjvncfkA4G6kjF2181d9Au
        subject_person_id: p_sFRTZH5sbrTjUPDEKPkiCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明彝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R1WpB1sZdGdD7pH1RV13rE
          claim_id: c_JjvncfkA4G6kjF2181d9Au
          source_id: s_pu7Sx8zkfuMi8cuxbePheC
          stance: supports
          locator: CBDB:638381
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638381）
          source: &a1
            id: s_pu7Sx8zkfuMi8cuxbePheC
            source_type: api_record
            title: 中国历代人物传记资料库：王明彝（CBDB 638381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638381&o=json
            external_identifier: CBDB:638381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.610Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lc2iHrvabotLZyFhYjzrPX
        subject_person_id: p_sFRTZH5sbrTjUPDEKPkiCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明彝，清人物。籍贯靈石，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638381）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eyJ5pU5i5QyBMUaCyrFKoG
          claim_id: c_Lc2iHrvabotLZyFhYjzrPX
          source_id: s_pu7Sx8zkfuMi8cuxbePheC
          stance: supports
          locator: CBDB:638381
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

# 王明彝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明彝 | accepted |
| bio.summary | 王明彝，清人物。籍贯靈石，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 638381） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明彝（CBDB 638381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638381&o=json)
