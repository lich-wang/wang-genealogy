---
schema: wang-person/v1
id: p_kVfUaNJ2itY2WED2neurFM
status: active
merged_into: null
display_name: 張泉
revision: 1
cbdb_id: 139206
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GHLKc5sfW4tTiIhfUmbg67
        subject_person_id: p_kVfUaNJ2itY2WED2neurFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張泉（605—660），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 139206）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rNUspY_7kBm_igKSNyKZ9u
          claim_id: c_GHLKc5sfW4tTiIhfUmbg67
          source_id: s_zk0YE55smcygdFBc5n7LM-
          stance: supports
          locator: CBDB:139206
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zk0YE55smcygdFBc5n7LM-
            source_type: api_record
            title: 中国历代人物传记资料库：張泉（CBDB 139206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139206&o=json
            external_identifier: CBDB:139206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GOgtt1oABsONLdKq5vHZm1
        subject_person_id: p_kVfUaNJ2itY2WED2neurFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張泉
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lVM-Nah139NXNUe8h-F4Tq
          claim_id: c_GOgtt1oABsONLdKq5vHZm1
          source_id: s_zk0YE55smcygdFBc5n7LM-
          stance: supports
          locator: CBDB:139206
          quotation: null
          interpretation_note: CBDB 明确记录的王威仁配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_aUa7Uq5bsJ2rW54B_63Rp4
        subject_person_id: p_FQ5cbUU8vK4rg8GHdfgFiE
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_kVfUaNJ2itY2WED2neurFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lzqq61FXmkUKbnFTcqM9hI
          claim_id: c_aUa7Uq5bsJ2rW54B_63Rp4
          source_id: s_zk0YE55smcygdFBc5n7LM-
          stance: supports
          locator: 唐代墓誌匯編:二卷，Xianqing 139：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FQ5cbUU8vK4rg8GHdfgFiE
        status: active
        display_name: 王威仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張泉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張泉（605—660），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 139206） | accepted |
| name.primary | 張泉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_FQ5cbUU8vK4rg8GHdfgFiE | 王威仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：張泉（CBDB 139206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139206&o=json)
