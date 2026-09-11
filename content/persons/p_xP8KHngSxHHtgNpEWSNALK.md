---
schema: wang-person/v1
id: p_xP8KHngSxHHtgNpEWSNALK
status: active
merged_into: null
display_name: 王舟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LNziwSUX2xqRW4wW1vErF9
        subject_person_id: p_xP8KHngSxHHtgNpEWSNALK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LL4dzm4Vnw3PhhpmAKgnhn
          claim_id: c_LNziwSUX2xqRW4wW1vErF9
          source_id: s_drwTm75S1VqdZ2XziNWj5M
          stance: supports
          locator: CBDB:503967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（503967）
          source: &a1
            id: s_drwTm75S1VqdZ2XziNWj5M
            source_type: api_record
            title: 中国历代人物传记资料库：王舟（CBDB 503967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503967&o=json
            external_identifier: CBDB:503967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eCmVG9XTW6a4c9P4kPCsXa
        subject_person_id: p_xP8KHngSxHHtgNpEWSNALK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舟，明人物。入仕進士，曾任員外郎。（中国历代人物传记资料库 CBDB 503967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kWyU1rnaZd2FPRTsArq1Me
          claim_id: c_eCmVG9XTW6a4c9P4kPCsXa
          source_id: s_drwTm75S1VqdZ2XziNWj5M
          stance: supports
          locator: CBDB:503967
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

# 王舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舟 | accepted |
| bio.summary | 王舟，明人物。入仕進士，曾任員外郎。（中国历代人物传记资料库 CBDB 503967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舟（CBDB 503967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=503967&o=json)
