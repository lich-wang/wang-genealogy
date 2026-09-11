---
schema: wang-person/v1
id: p_1XhfFagtAy4xj4qWAS7Jbo
status: active
merged_into: null
display_name: 王方衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DBa79SFDq1eiXhS1AwxRA5
        subject_person_id: p_1XhfFagtAy4xj4qWAS7Jbo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aP7nDTZonRyQT8bUYPVWZc
          claim_id: c_DBa79SFDq1eiXhS1AwxRA5
          source_id: s_1mzhnL1d7YPhNFq5VHpSmL
          stance: supports
          locator: CBDB:341541
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341541）
          source: &a1
            id: s_1mzhnL1d7YPhNFq5VHpSmL
            source_type: api_record
            title: 中国历代人物传记资料库：王方衡（CBDB 341541）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341541&o=json
            external_identifier: CBDB:341541
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RFDY5dd3e3Zt8RVZ6zijhe
        subject_person_id: p_1XhfFagtAy4xj4qWAS7Jbo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王方衡，清人物。明清進士進士，籍贯達縣，入仕進士。（中国历代人物传记资料库 CBDB 341541）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v-aYr0ayVPOW5Mksz1lF4l
          claim_id: c_RFDY5dd3e3Zt8RVZ6zijhe
          source_id: s_1mzhnL1d7YPhNFq5VHpSmL
          stance: supports
          locator: CBDB:341541
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

# 王方衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王方衡 | accepted |
| bio.summary | 王方衡，清人物。明清進士進士，籍贯達縣，入仕進士。（中国历代人物传记资料库 CBDB 341541） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王方衡（CBDB 341541）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341541&o=json)
