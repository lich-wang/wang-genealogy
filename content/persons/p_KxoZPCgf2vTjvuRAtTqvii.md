---
schema: wang-person/v1
id: p_KxoZPCgf2vTjvuRAtTqvii
status: active
merged_into: null
display_name: 王建瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mEcPLEjeGBjmeb8GPow8pR
        subject_person_id: p_KxoZPCgf2vTjvuRAtTqvii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KCPEc3JUF7otQ7Dvv6L1YJ
          claim_id: c_mEcPLEjeGBjmeb8GPow8pR
          source_id: s_4VtmxTByvdKWKnRcjTUGDx
          stance: supports
          locator: CBDB:637595
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637595）
          source: &a1
            id: s_4VtmxTByvdKWKnRcjTUGDx
            source_type: api_record
            title: 中国历代人物传记资料库：王建瀛（CBDB 637595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637595&o=json
            external_identifier: CBDB:637595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_88xNSvTiQqJ64Fo8oCJeNo
        subject_person_id: p_KxoZPCgf2vTjvuRAtTqvii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建瀛，清人物。籍贯鳳翔，入仕優貢生，曾任訓導。（中国历代人物传记资料库 CBDB 637595）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YpMIbFZ7pAKf9U0NYy27R1
          claim_id: c_88xNSvTiQqJ64Fo8oCJeNo
          source_id: s_4VtmxTByvdKWKnRcjTUGDx
          stance: supports
          locator: CBDB:637595
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

# 王建瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王建瀛 | accepted |
| bio.summary | 王建瀛，清人物。籍贯鳳翔，入仕優貢生，曾任訓導。（中国历代人物传记资料库 CBDB 637595） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王建瀛（CBDB 637595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637595&o=json)
