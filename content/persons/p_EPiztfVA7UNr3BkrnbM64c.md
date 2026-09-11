---
schema: wang-person/v1
id: p_EPiztfVA7UNr3BkrnbM64c
status: active
merged_into: null
display_name: 王丙傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6yNhqQsu9rtHBwP3U2trcD
        subject_person_id: p_EPiztfVA7UNr3BkrnbM64c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QKdzdgA9T37YVHFbV9n1kj
          claim_id: c_6yNhqQsu9rtHBwP3U2trcD
          source_id: s_S3CJaPYZSqdQ8xTiPqypJC
          stance: supports
          locator: CBDB:635732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635732）
          source: &a1
            id: s_S3CJaPYZSqdQ8xTiPqypJC
            source_type: api_record
            title: 中国历代人物传记资料库：王丙傑（CBDB 635732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635732&o=json
            external_identifier: CBDB:635732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RpsizFp1tExpVBvSmFshq9
        subject_person_id: p_EPiztfVA7UNr3BkrnbM64c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丙傑，清人物。籍贯解州直隸州直轄地方，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 635732）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DIWTEe_ha4h6nu0ZUgIFxt
          claim_id: c_RpsizFp1tExpVBvSmFshq9
          source_id: s_S3CJaPYZSqdQ8xTiPqypJC
          stance: supports
          locator: CBDB:635732
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

# 王丙傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丙傑 | accepted |
| bio.summary | 王丙傑，清人物。籍贯解州直隸州直轄地方，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 635732） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丙傑（CBDB 635732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635732&o=json)
