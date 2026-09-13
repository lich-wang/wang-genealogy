---
schema: wang-person/v1
id: p_t2gZLgDbrpuojkd3ba166u
status: active
merged_into: null
display_name: 王贊元
cbdb_id: 342337
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wMQg6hMQ8Mz5k49z58jP7h
        subject_person_id: p_t2gZLgDbrpuojkd3ba166u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊元，清人物。明清進士進士，籍贯閩縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342337）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3DRQsK3dc-VM6jLKGSngxE
          claim_id: c_wMQg6hMQ8Mz5k49z58jP7h
          source_id: s_AtRCKNGoTFo2MAoX44hbV9
          stance: supports
          locator: CBDB:342337
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AtRCKNGoTFo2MAoX44hbV9
            source_type: api_record
            title: 中国历代人物传记资料库：王贊元（CBDB 342337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342337&o=json
            external_identifier: CBDB:342337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:10.160Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRYk1HQPnbeBmWkaaa9FEy
        subject_person_id: p_t2gZLgDbrpuojkd3ba166u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王贊元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1yp7MVWSPsYxB4MYY584Gc
          claim_id: c_GRYk1HQPnbeBmWkaaa9FEy
          source_id: s_AtRCKNGoTFo2MAoX44hbV9
          stance: supports
          locator: CBDB:342337
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4201-4300）｜历史性依据：CBDB 朝代 = 清
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

# 王贊元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王贊元，清人物。明清進士進士，籍贯閩縣，入仕進士，曾任知縣。（中国历代人物传记资料库 CBDB 342337） | accepted |
| name.primary | 王贊元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王贊元（CBDB 342337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342337&o=json)
