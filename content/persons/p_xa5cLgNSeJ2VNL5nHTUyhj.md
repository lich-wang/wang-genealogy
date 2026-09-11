---
schema: wang-person/v1
id: p_xa5cLgNSeJ2VNL5nHTUyhj
status: active
merged_into: null
display_name: 王廷諫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E7JLon7FM3wxjdUxNmPTX2
        subject_person_id: p_xa5cLgNSeJ2VNL5nHTUyhj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷諫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uo9dshm8WtpopSPb73A4Zv
          claim_id: c_E7JLon7FM3wxjdUxNmPTX2
          source_id: s_8JAH1Rn7hpaR4kSqfBtyPP
          stance: supports
          locator: CBDB:60060
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60060）
          source: &a1
            id: s_8JAH1Rn7hpaR4kSqfBtyPP
            source_type: api_record
            title: 中国历代人物传记资料库：王廷諫（CBDB 60060）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60060&o=json
            external_identifier: CBDB:60060
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.850Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AmuSR3LnbyLvnsK3PJHsQx
        subject_person_id: p_xa5cLgNSeJ2VNL5nHTUyhj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷諫，清人物。明清進士進士，籍贯翼城，入仕進士，曾任工科給事中、鄉試考官。（中国历代人物传记资料库 CBDB 60060）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gZkqvBcNcKxiEu4Jhoe-2a
          claim_id: c_AmuSR3LnbyLvnsK3PJHsQx
          source_id: s_8JAH1Rn7hpaR4kSqfBtyPP
          stance: supports
          locator: CBDB:60060
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

# 王廷諫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷諫 | accepted |
| bio.summary | 王廷諫，清人物。明清進士進士，籍贯翼城，入仕進士，曾任工科給事中、鄉試考官。（中国历代人物传记资料库 CBDB 60060） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷諫（CBDB 60060）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60060&o=json)
