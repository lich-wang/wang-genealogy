---
schema: wang-person/v1
id: p_CBYTVJFNzUqywxyPGs7QsY
status: active
merged_into: null
display_name: 王鑑
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FBLCTzNUqA9XTnxHpNsLH2
        subject_person_id: p_CBYTVJFNzUqywxyPGs7QsY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qULuAGbRnWzKyLdEvGxdbX
          claim_id: c_FBLCTzNUqA9XTnxHpNsLH2
          source_id: s_uBVReG4CgA61WetZkAb8AB
          stance: supports
          locator: CBDB:393102
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（393102）
          source: &a1
            id: s_uBVReG4CgA61WetZkAb8AB
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 393102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=393102&o=json
            external_identifier: CBDB:393102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BYrRWfpkDkZmHLrC43gLo2
        subject_person_id: p_CBYTVJFNzUqywxyPGs7QsY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，宋人物。籍贯開封，曾任內殿崇班、左班殿直。（中国历代人物传记资料库 CBDB 393102）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UzjvpBlWRV4EqbZU3soeEG
          claim_id: c_BYrRWfpkDkZmHLrC43gLo2
          source_id: s_uBVReG4CgA61WetZkAb8AB
          stance: supports
          locator: CBDB:393102
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_w7-hUgqziAnBiQZmOOBU8J
        subject_person_id: p_wsFAVGfuKix48GNXEaitKt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CBYTVJFNzUqywxyPGs7QsY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cEOCwNbzl1Bqf-75Yhu0GN
          claim_id: c_w7-hUgqziAnBiQZmOOBU8J
          source_id: s_EMMWJQx6IZ9LLQcxFqV9Zf
          stance: supports
          locator: CBDB 亲属：父（KinPerson 37984）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_EMMWJQx6IZ9LLQcxFqV9Zf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 393102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=393102&o=json
            external_identifier: CBDB:393102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wsFAVGfuKix48GNXEaitKt
        status: active
        display_name: 王珣瑜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，宋人物。籍贯開封，曾任內殿崇班、左班殿直。（中国历代人物传记资料库 CBDB 393102） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wsFAVGfuKix48GNXEaitKt | 王珣瑜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 393102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=393102&o=json)
