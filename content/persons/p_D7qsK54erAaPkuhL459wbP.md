---
schema: wang-person/v1
id: p_D7qsK54erAaPkuhL459wbP
status: active
merged_into: null
display_name: 王日俞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ep99iSTkQzToU1aUaftPtM
        subject_person_id: p_D7qsK54erAaPkuhL459wbP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日俞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1ikUSpoW5DAQrCT1HeCGiT
          claim_id: c_Ep99iSTkQzToU1aUaftPtM
          source_id: s_LvPBBvkbRy6uMNALkdjpCu
          stance: supports
          locator: CBDB:638326
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638326）
          source: &a1
            id: s_LvPBBvkbRy6uMNALkdjpCu
            source_type: api_record
            title: 中国历代人物传记资料库：王日俞（CBDB 638326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638326&o=json
            external_identifier: CBDB:638326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_28S1a3qHLsFSk1pjRhTqoe
        subject_person_id: p_D7qsK54erAaPkuhL459wbP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王日俞，清人物。籍贯開封府，曾任訓導。（中国历代人物传记资料库 CBDB 638326）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tio36TbteS2qspROpa_10J
          claim_id: c_28S1a3qHLsFSk1pjRhTqoe
          source_id: s_LvPBBvkbRy6uMNALkdjpCu
          stance: supports
          locator: CBDB:638326
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

# 王日俞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王日俞 | accepted |
| bio.summary | 王日俞，清人物。籍贯開封府，曾任訓導。（中国历代人物传记资料库 CBDB 638326） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王日俞（CBDB 638326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638326&o=json)
