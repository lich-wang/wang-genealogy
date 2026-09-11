---
schema: wang-person/v1
id: p_E9oDdvV3zMWKaPo4NMC1yC
status: active
merged_into: null
display_name: 王文靖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xkiGwMoTEBZVBrrQfTGRMs
        subject_person_id: p_E9oDdvV3zMWKaPo4NMC1yC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HaM2k85RUUn7euyy1uBDtU
          claim_id: c_xkiGwMoTEBZVBrrQfTGRMs
          source_id: s_iuRYL3Lwjrs9HwNKJMvxMm
          stance: supports
          locator: CBDB:638294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638294）
          source: &a1
            id: s_iuRYL3Lwjrs9HwNKJMvxMm
            source_type: api_record
            title: 中国历代人物传记资料库：王文靖（CBDB 638294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638294&o=json
            external_identifier: CBDB:638294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.581Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_78xdrohp6dt2P5vnHVJn9f
        subject_person_id: p_E9oDdvV3zMWKaPo4NMC1yC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文靖，清人物。籍贯涇州直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 638294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CtqJyjHdkmxYwQOrzmpMrU
          claim_id: c_78xdrohp6dt2P5vnHVJn9f
          source_id: s_iuRYL3Lwjrs9HwNKJMvxMm
          stance: supports
          locator: CBDB:638294
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

# 王文靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文靖 | accepted |
| bio.summary | 王文靖，清人物。籍贯涇州直隸州，曾任訓導。（中国历代人物传记资料库 CBDB 638294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文靖（CBDB 638294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638294&o=json)
