---
schema: wang-person/v1
id: p_wBzqDVFDtcpG5LGQLzxuRy
status: active
merged_into: null
display_name: 王玉某
cbdb_id: 487666
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6KeyTUCa1kFckFLseskpsL
        subject_person_id: p_wBzqDVFDtcpG5LGQLzxuRy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉某，明人物。曾任副將軍。（中国历代人物传记资料库 CBDB 487666）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_j_N2AAG7dbEd4aFdeAxxFj
          claim_id: c_6KeyTUCa1kFckFLseskpsL
          source_id: s_Fs64DVwnz5GdQCtaGMnFzB
          stance: supports
          locator: CBDB:487666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fs64DVwnz5GdQCtaGMnFzB
            source_type: api_record
            title: 中国历代人物传记资料库：王玉某（CBDB 487666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487666&o=json
            external_identifier: CBDB:487666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_D1pfBDZ3e8ee1NY13n2UNX
        subject_person_id: p_wBzqDVFDtcpG5LGQLzxuRy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ceG15zjDyjc9kUic3kB1Ur
          claim_id: c_D1pfBDZ3e8ee1NY13n2UNX
          source_id: s_Fs64DVwnz5GdQCtaGMnFzB
          stance: supports
          locator: CBDB:487666
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 明
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

# 王玉某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王玉某，明人物。曾任副將軍。（中国历代人物传记资料库 CBDB 487666） | accepted |
| name.primary | 王玉某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉某（CBDB 487666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=487666&o=json)
