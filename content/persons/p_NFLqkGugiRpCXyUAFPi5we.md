---
schema: wang-person/v1
id: p_NFLqkGugiRpCXyUAFPi5we
status: active
merged_into: null
display_name: 王莘槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nfepq5J9D9b9E5RMiCtH3d
        subject_person_id: p_NFLqkGugiRpCXyUAFPi5we
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_emBDD2Y3Q39AS4U3VEWAxr
          claim_id: c_nfepq5J9D9b9E5RMiCtH3d
          source_id: s_VCrQTtTC65sjTJmF1MCxK8
          stance: supports
          locator: CBDB:640095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640095）
          source: &a1
            id: s_VCrQTtTC65sjTJmF1MCxK8
            source_type: api_record
            title: 中国历代人物传记资料库：王莘槐（CBDB 640095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640095&o=json
            external_identifier: CBDB:640095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_B3kQinSEfBqXS1JrTwyRAX
        subject_person_id: p_NFLqkGugiRpCXyUAFPi5we
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莘槐，清人物。籍贯鎮洋，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640095）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cj9AAqc7AVUPBBgK25XXOY
          claim_id: c_B3kQinSEfBqXS1JrTwyRAX
          source_id: s_VCrQTtTC65sjTJmF1MCxK8
          stance: supports
          locator: CBDB:640095
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

# 王莘槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莘槐 | accepted |
| bio.summary | 王莘槐，清人物。籍贯鎮洋，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 640095） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莘槐（CBDB 640095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640095&o=json)
