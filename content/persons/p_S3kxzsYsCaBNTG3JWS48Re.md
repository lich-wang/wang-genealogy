---
schema: wang-person/v1
id: p_S3kxzsYsCaBNTG3JWS48Re
status: active
merged_into: null
display_name: 王沆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zhvVmaBm6J6U4JRfN6tX7M
        subject_person_id: p_S3kxzsYsCaBNTG3JWS48Re
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1iGxzRLCcYQEHMmMrk5z1K
          claim_id: c_zhvVmaBm6J6U4JRfN6tX7M
          source_id: s_5JrXYB1gWnMtGW1Mxe8YuN
          stance: supports
          locator: CBDB:342483
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342483）
          source: &a1
            id: s_5JrXYB1gWnMtGW1Mxe8YuN
            source_type: api_record
            title: 中国历代人物传记资料库：王沆（CBDB 342483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342483&o=json
            external_identifier: CBDB:342483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5jeoNRU3ZxnAxRSEoHAjcB
        subject_person_id: p_S3kxzsYsCaBNTG3JWS48Re
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沆，清人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 342483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gdpju0f_iEBo2ognGORgR2
          claim_id: c_5jeoNRU3ZxnAxRSEoHAjcB
          source_id: s_5JrXYB1gWnMtGW1Mxe8YuN
          stance: supports
          locator: CBDB:342483
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

# 王沆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王沆 | accepted |
| bio.summary | 王沆，清人物。明清進士進士，籍贯蒲城，入仕進士。（中国历代人物传记资料库 CBDB 342483） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王沆（CBDB 342483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342483&o=json)
