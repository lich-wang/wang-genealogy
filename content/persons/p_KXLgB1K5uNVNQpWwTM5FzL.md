---
schema: wang-person/v1
id: p_KXLgB1K5uNVNQpWwTM5FzL
status: active
merged_into: null
display_name: 王東峯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3ronsP3LQnLhnzcCaMMUBH
        subject_person_id: p_KXLgB1K5uNVNQpWwTM5FzL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王東峯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NsvM2KS3RydK3jqqLjapJd
          claim_id: c_3ronsP3LQnLhnzcCaMMUBH
          source_id: s_PXHMCoP3MQPqmmf7FGcXij
          stance: supports
          locator: CBDB:638673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638673）
          source: &a1
            id: s_PXHMCoP3MQPqmmf7FGcXij
            source_type: api_record
            title: 中国历代人物传记资料库：王東峯（CBDB 638673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638673&o=json
            external_identifier: CBDB:638673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.713Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kVv2SgahM9xdZrk1GSoSHm
        subject_person_id: p_KXLgB1K5uNVNQpWwTM5FzL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王東峯，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638673）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_9Qits47USI2gCnyFrnfn
          claim_id: c_kVv2SgahM9xdZrk1GSoSHm
          source_id: s_PXHMCoP3MQPqmmf7FGcXij
          stance: supports
          locator: CBDB:638673
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

# 王東峯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王東峯 | accepted |
| bio.summary | 王東峯，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 638673） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王東峯（CBDB 638673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638673&o=json)
