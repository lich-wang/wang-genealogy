---
schema: wang-person/v1
id: p_XTFHS8v7ekiTTw7czQWfNP
status: active
merged_into: null
display_name: 王新華
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rr8vdD5EJ3rTMmV4VBuU8M
        subject_person_id: p_XTFHS8v7ekiTTw7czQWfNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BxfN5mq2P83HHayRPrqvRc
          claim_id: c_Rr8vdD5EJ3rTMmV4VBuU8M
          source_id: s_Rd55RA4CEBcGp7eQez6i3D
          stance: supports
          locator: CBDB:69425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69425）
          source: &a1
            id: s_Rd55RA4CEBcGp7eQez6i3D
            source_type: api_record
            title: 中国历代人物传记资料库：王新華（CBDB 69425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69425&o=json
            external_identifier: CBDB:69425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.124Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_arsomZg3QiqSSLd6ugKvtK
        subject_person_id: p_XTFHS8v7ekiTTw7czQWfNP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1863年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_97U3weF4u2HDjjaDk1FWMh
          claim_id: c_arsomZg3QiqSSLd6ugKvtK
          source_id: s_Rd55RA4CEBcGp7eQez6i3D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2pPiGGC2x5vf3YKXLhi91A
        subject_person_id: p_XTFHS8v7ekiTTw7czQWfNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新華（卒于1863年），清人物。籍贯德化。（中国历代人物传记资料库 CBDB 69425）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kPALdxJGAaB22oT8oTA5Zj
          claim_id: c_2pPiGGC2x5vf3YKXLhi91A
          source_id: s_Rd55RA4CEBcGp7eQez6i3D
          stance: supports
          locator: CBDB:69425
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

# 王新華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新華 | accepted |
| death.date | 1863年 | accepted |
| bio.summary | 王新華（卒于1863年），清人物。籍贯德化。（中国历代人物传记资料库 CBDB 69425） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新華（CBDB 69425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69425&o=json)
