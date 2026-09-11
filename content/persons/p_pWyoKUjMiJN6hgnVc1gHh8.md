---
schema: wang-person/v1
id: p_pWyoKUjMiJN6hgnVc1gHh8
status: active
merged_into: null
display_name: 王嘉賓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dFPSdxsKdwZj33ZMX26DtH
        subject_person_id: p_pWyoKUjMiJN6hgnVc1gHh8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d5PKF55vu633NUUZ6D9vm2
          claim_id: c_dFPSdxsKdwZj33ZMX26DtH
          source_id: s_vX6H8L6BjQPrgDjpfpADHn
          stance: supports
          locator: CBDB:561811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561811）
          source: &a1
            id: s_vX6H8L6BjQPrgDjpfpADHn
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 561811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561811&o=json
            external_identifier: CBDB:561811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.762Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FiKmQ4Kf26YPAS6SKGC5e
        subject_person_id: p_pWyoKUjMiJN6hgnVc1gHh8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓，宋人物。籍贯崑山，曾任從政郎、迪功郎、監嶽廟。（中国历代人物传记资料库 CBDB 561811）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XLu3e8ju8MSFvz_c42IcBU
          claim_id: c_3FiKmQ4Kf26YPAS6SKGC5e
          source_id: s_vX6H8L6BjQPrgDjpfpADHn
          stance: supports
          locator: CBDB:561811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5_kbWD5hyt7qK9Banp8xDe
        subject_person_id: p_miziP4o1dvPJFQh5oBz2tf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pWyoKUjMiJN6hgnVc1gHh8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rS9FCkrLzmuoGWyWW18H8n
          claim_id: c_5_kbWD5hyt7qK9Banp8xDe
          source_id: s_vX6H8L6BjQPrgDjpfpADHn
          stance: supports
          locator: CBDB 双向互证（父 王葆 ⇄ 子 王嘉賓）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_miziP4o1dvPJFQh5oBz2tf
        status: active
        display_name: 王葆
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| bio.summary | 王嘉賓，宋人物。籍贯崑山，曾任從政郎、迪功郎、監嶽廟。（中国历代人物传记资料库 CBDB 561811） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_miziP4o1dvPJFQh5oBz2tf | 王葆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嘉賓（CBDB 561811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561811&o=json)
