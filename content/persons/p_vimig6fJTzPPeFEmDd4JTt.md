---
schema: wang-person/v1
id: p_vimig6fJTzPPeFEmDd4JTt
status: active
merged_into: null
display_name: 王得中
cbdb_id: 19850
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m3qZQGNmZ7BE1xeq22XKBe
        subject_person_id: p_vimig6fJTzPPeFEmDd4JTt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得中，史料所见人物。本项目依据《中国历代人物传记资料库：王得中（CBDB 19850）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_CAfIwdGbI-DcY3V2QcKL4T
          claim_id: c_m3qZQGNmZ7BE1xeq22XKBe
          source_id: s_sjhCeJUJ1sKM8WCvLCLN7n
          stance: supports
          locator: CBDB:19850
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_sjhCeJUJ1sKM8WCvLCLN7n
            source_type: api_record
            title: 中国历代人物传记资料库：王得中（CBDB 19850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19850&o=json
            external_identifier: CBDB:19850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJvGaVA6vpx85UUCat8F9q
        subject_person_id: p_vimig6fJTzPPeFEmDd4JTt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NhBzQQcHnrHKUBQXL9MNC9
          claim_id: c_vJvGaVA6vpx85UUCat8F9q
          source_id: s_sjhCeJUJ1sKM8WCvLCLN7n
          stance: supports
          locator: CBDB:19850
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W27NKNQfcO9Uu7XWpT6Omh
        subject_person_id: p_n7RR62NooNQvNuaEfU2L5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vimig6fJTzPPeFEmDd4JTt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VhGhE_aYaRCJNC8YCiNnKR
          claim_id: c_W27NKNQfcO9Uu7XWpT6Omh
          source_id: s_C2Y4bYd4JsFUyB3AEPNs7E
          stance: supports
          locator: CBDB 双向互证（子 王得中 ⇄ 父 王錫）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_C2Y4bYd4JsFUyB3AEPNs7E
            source_type: api_record
            title: 中国历代人物传记资料库：王錫（CBDB 19849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19849&o=json
            external_identifier: CBDB:19849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n7RR62NooNQvNuaEfU2L5M
        status: active
        display_name: 王錫
        merged_into_person_id: null
  children:
    - claim:
        id: c_3jFhSKOPiGlDJ973QMNLx4
        subject_person_id: p_vimig6fJTzPPeFEmDd4JTt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6HiYCjuLQFf2opWVAz2ZTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CtgbrenjhIfO1W1duvEZPX
          claim_id: c_3jFhSKOPiGlDJ973QMNLx4
          source_id: s_4kR3qjZPc2yJVXXtrjBvGF
          stance: supports
          locator: CBDB 双向互证（父 王得中 ⇄ 子 王汝能）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_4kR3qjZPc2yJVXXtrjBvGF
            source_type: api_record
            title: 中国历代人物传记资料库：王汝能（CBDB 19851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19851&o=json
            external_identifier: CBDB:19851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.738Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6HiYCjuLQFf2opWVAz2ZTK
        status: active
        display_name: 王汝能
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王得中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王得中，史料所见人物。本项目依据《中国历代人物传记资料库：王得中（CBDB 19850）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王得中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_n7RR62NooNQvNuaEfU2L5M | 王錫 | accepted |
| children | p_6HiYCjuLQFf2opWVAz2ZTK | 王汝能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得中（CBDB 19850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19850&o=json)
- [中国历代人物传记资料库：王汝能（CBDB 19851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19851&o=json)
- [中国历代人物传记资料库：王錫（CBDB 19849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19849&o=json)
