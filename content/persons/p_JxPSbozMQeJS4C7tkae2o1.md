---
schema: wang-person/v1
id: p_JxPSbozMQeJS4C7tkae2o1
status: active
merged_into: null
display_name: 王惟鏻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9hF6ThBSoqsQC4n6q7jkyq
        subject_person_id: p_JxPSbozMQeJS4C7tkae2o1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟鏻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bKFPu6qXudFc2fmpZSBvV4
          claim_id: c_9hF6ThBSoqsQC4n6q7jkyq
          source_id: s_XeYPhfzyM4gwjt4pgKgA3L
          stance: supports
          locator: CBDB:637893
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637893）
          source: &a1
            id: s_XeYPhfzyM4gwjt4pgKgA3L
            source_type: api_record
            title: 中国历代人物传记资料库：王惟鏻（CBDB 637893）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637893&o=json
            external_identifier: CBDB:637893
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fSAEf32P5AcDL3kRQiA4iX
        subject_person_id: p_JxPSbozMQeJS4C7tkae2o1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟鏻，清人物。籍贯遵化州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637893）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mPpEnXRs3FkCTw_If1xswT
          claim_id: c_fSAEf32P5AcDL3kRQiA4iX
          source_id: s_XeYPhfzyM4gwjt4pgKgA3L
          stance: supports
          locator: CBDB:637893
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

# 王惟鏻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟鏻 | accepted |
| bio.summary | 王惟鏻，清人物。籍贯遵化州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 637893） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惟鏻（CBDB 637893）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637893&o=json)
