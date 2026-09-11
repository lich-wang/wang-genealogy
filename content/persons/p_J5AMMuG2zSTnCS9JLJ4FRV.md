---
schema: wang-person/v1
id: p_J5AMMuG2zSTnCS9JLJ4FRV
status: active
merged_into: null
display_name: 王文熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_36C7wPoySN1dDyHLp7ycPm
        subject_person_id: p_J5AMMuG2zSTnCS9JLJ4FRV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cdvgNfGS2sSN2o1NHFLgok
          claim_id: c_36C7wPoySN1dDyHLp7ycPm
          source_id: s_f6mXfcSHbrZDdC7MzQ7Fx3
          stance: supports
          locator: CBDB:638261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638261）
          source: &a1
            id: s_f6mXfcSHbrZDdC7MzQ7Fx3
            source_type: api_record
            title: 中国历代人物传记资料库：王文熙（CBDB 638261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638261&o=json
            external_identifier: CBDB:638261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.649Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZKYMBWx5arqkQBbMbaPK2V
        subject_person_id: p_J5AMMuG2zSTnCS9JLJ4FRV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文熙，清人物。籍贯貴陽府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jAC9sMhzT-EJQRPt_68Su1
          claim_id: c_ZKYMBWx5arqkQBbMbaPK2V
          source_id: s_f6mXfcSHbrZDdC7MzQ7Fx3
          stance: supports
          locator: CBDB:638261
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

# 王文熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文熙 | accepted |
| bio.summary | 王文熙，清人物。籍贯貴陽府，入仕廩生，曾任復設訓導。（中国历代人物传记资料库 CBDB 638261） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文熙（CBDB 638261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638261&o=json)
