---
schema: wang-person/v1
id: p_k4cdQTHGykzxsNA2J2qsUK
status: active
merged_into: null
display_name: 王濟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8YDZ4w6wNFQf19f2LqfLP5
        subject_person_id: p_k4cdQTHGykzxsNA2J2qsUK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kq1mwz5xM71a6KoKzAFSU9
          claim_id: c_8YDZ4w6wNFQf19f2LqfLP5
          source_id: s_nCfairPQo1UJ3fErKtcBuT
          stance: supports
          locator: CBDB:71151
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71151）
          source: &a1
            id: s_nCfairPQo1UJ3fErKtcBuT
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 71151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71151&o=json
            external_identifier: CBDB:71151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GCsd7ACM4g38BMJHpqaP7v
        subject_person_id: p_k4cdQTHGykzxsNA2J2qsUK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a8BwuCYMfoSHBqT4iyEXX3
          claim_id: c_GCsd7ACM4g38BMJHpqaP7v
          source_id: s_nCfairPQo1UJ3fErKtcBuT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ANcfAgSvuBFPKNoQC3HvLY
        subject_person_id: p_k4cdQTHGykzxsNA2J2qsUK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1900年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YZFgy8sZr5V3KDn8FcFHKs
          claim_id: c_ANcfAgSvuBFPKNoQC3HvLY
          source_id: s_nCfairPQo1UJ3fErKtcBuT
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
        id: c_qB2Jt6WTHSmveSe3RKxBQc
        subject_person_id: p_k4cdQTHGykzxsNA2J2qsUK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟（1855年—1900年），清人物。籍贯秦安。（中国历代人物传记资料库 CBDB 71151）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fCW7-Jz1YEBAG4hh5zmK-Y
          claim_id: c_qB2Jt6WTHSmveSe3RKxBQc
          source_id: s_nCfairPQo1UJ3fErKtcBuT
          stance: supports
          locator: CBDB:71151
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

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| birth.date | 1855年 | accepted |
| death.date | 1900年 | accepted |
| bio.summary | 王濟（1855年—1900年），清人物。籍贯秦安。（中国历代人物传记资料库 CBDB 71151） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 71151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71151&o=json)
