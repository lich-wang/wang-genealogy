---
schema: wang-person/v1
id: p_sn42C8p7CP4y7NuAFEWEFM
status: active
merged_into: null
display_name: 戴氏
revision: 1
cbdb_id: 386695
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n-RvdYnQcjgn_P5wepZhnj
        subject_person_id: p_sn42C8p7CP4y7NuAFEWEFM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 戴氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvSU2O0JIupD9RlLldt3yc
          claim_id: c_n-RvdYnQcjgn_P5wepZhnj
          source_id: s_dwasf0PYMVgEHvcRwj05yZ
          stance: supports
          locator: CBDB:386695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dwasf0PYMVgEHvcRwj05yZ
            source_type: api_record
            title: 中国历代人物传记资料库：戴氏(王蕙妻)（CBDB 386695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386695&o=json
            external_identifier: CBDB:386695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hb4lz0ZoajcO4ZONkk4un7
        subject_person_id: p_sn42C8p7CP4y7NuAFEWEFM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 戴氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NGIDIHZGtvTHq6fvEivTef
          claim_id: c_Hb4lz0ZoajcO4ZONkk4un7
          source_id: s_dwasf0PYMVgEHvcRwj05yZ
          stance: supports
          locator: CBDB:386695
          quotation: null
          interpretation_note: CBDB 明确记录的王蕙配偶
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
        id: c_cDMjy9poTutGW-K8eCJrL6
        subject_person_id: p_Q1HXQkSMAFHi7fYuKS8duv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sn42C8p7CP4y7NuAFEWEFM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OnZkGiE8HAn1uIYYCL_Go0
          claim_id: c_cDMjy9poTutGW-K8eCJrL6
          source_id: s_dwasf0PYMVgEHvcRwj05yZ
          stance: supports
          locator: CBDB 双向互证（妻子 戴氏(王蕙妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q1HXQkSMAFHi7fYuKS8duv
        status: active
        display_name: 王蕙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 戴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 戴氏，元人物。籍贯金華。（中国历代人物传记资料库 CBDB 386695） | accepted |
| name.primary | 戴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Q1HXQkSMAFHi7fYuKS8duv | 王蕙 | accepted |

## 外部来源

- [中国历代人物传记资料库：戴氏(王蕙妻)（CBDB 386695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386695&o=json)
