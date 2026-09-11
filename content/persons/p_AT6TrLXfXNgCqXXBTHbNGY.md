---
schema: wang-person/v1
id: p_AT6TrLXfXNgCqXXBTHbNGY
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fLBDA3YvGYC7H57khrKCe1
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aNWh2zvu4vJ8AU2ft3b55j
          claim_id: c_fLBDA3YvGYC7H57khrKCe1
          source_id: s_oofGmvA18cfJd9u5N8KNEo
          stance: supports
          locator: CBDB:13477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13477）
          source: &a1
            id: s_oofGmvA18cfJd9u5N8KNEo
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 13477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json
            external_identifier: CBDB:13477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.620Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FTcz2RwAvZWTeKCT3b37CP
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1129年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7VnmSN1Eykmwjay1PqVMp
          claim_id: c_FTcz2RwAvZWTeKCT3b37CP
          source_id: s_oofGmvA18cfJd9u5N8KNEo
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
        id: c_sMAWN6NHFpWzb9C5dxH5xu
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1191年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbWfMs9VYfrQnkjTB8J4mj
          claim_id: c_sMAWN6NHFpWzb9C5dxH5xu
          source_id: s_oofGmvA18cfJd9u5N8KNEo
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
        id: c_9DxzxVf1skbGpuFvTUjZA7
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐（1129年—1191年），宋人物。籍贯山陰，入仕進士，曾任尚書省工部侍郎、朝請大夫、左朝請郎。（中国历代人物传记资料库 CBDB 13477）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FxkKFiXUXiBMPdBW92ECdT
          claim_id: c_9DxzxVf1skbGpuFvTUjZA7
          source_id: s_oofGmvA18cfJd9u5N8KNEo
          stance: supports
          locator: CBDB:13477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K8PExpNmXBwHPorjFvn24h
        subject_person_id: p_S91UDmLopWwoam8e6F89Jc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i8Pr00J-OkScMu2XtkyzHb
          claim_id: c_K8PExpNmXBwHPorjFvn24h
          source_id: s_oofGmvA18cfJd9u5N8KNEo
          stance: supports
          locator: CBDB 双向互证（父 王俊彥 ⇄ 子 王佐）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_S91UDmLopWwoam8e6F89Jc
        status: active
        display_name: 王俊彥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_6nHAI1TissECsyH5MgxlNF
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NqCzUj27xc4CPMGYFbUzFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ff7jFXZ23KDa99MFbdFQ1a
          claim_id: c_6nHAI1TissECsyH5MgxlNF
          source_id: s_liqDa0fj49BztmoE61c8Ys
          stance: supports
          locator: 紹興十八年同年小錄，84：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_liqDa0fj49BztmoE61c8Ys
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王佐妻)（CBDB 134740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134740&o=json
            external_identifier: CBDB:134740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NqCzUj27xc4CPMGYFbUzFH
        status: active
        display_name: 高氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| birth.date | 1129年 | accepted |
| death.date | 1191年 | accepted |
| bio.summary | 王佐（1129年—1191年），宋人物。籍贯山陰，入仕進士，曾任尚書省工部侍郎、朝請大夫、左朝請郎。（中国历代人物传记资料库 CBDB 13477） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_S91UDmLopWwoam8e6F89Jc | 王俊彥 | accepted |
| spouses | p_NqCzUj27xc4CPMGYFbUzFH | 高氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王佐妻)（CBDB 134740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134740&o=json)
- [中国历代人物传记资料库：王佐（CBDB 13477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13477&o=json)
