---
schema: wang-person/v1
id: p_jsHxNt9DKkjJKdoHoFCEVz
status: active
merged_into: null
display_name: 王午龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mbCPoWYparSV86VYgR4sZ
        subject_person_id: p_jsHxNt9DKkjJKdoHoFCEVz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王午龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nwtnig1HQwmCwbWv7vm73z
          claim_id: c_7mbCPoWYparSV86VYgR4sZ
          source_id: s_Np3ZtZhSuhi4G7SCeEtobQ
          stance: supports
          locator: CBDB:534098
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（534098）
          source: &a1
            id: s_Np3ZtZhSuhi4G7SCeEtobQ
            source_type: api_record
            title: 中国历代人物传记资料库：王午龍（CBDB 534098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534098&o=json
            external_identifier: CBDB:534098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.380Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HGNNtkTECQPe5QXTj6uKwT
        subject_person_id: p_jsHxNt9DKkjJKdoHoFCEVz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王午龍，宋人物。籍贯奉化，入仕進士。（中国历代人物传记资料库 CBDB 534098）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cS38b7vrDYGctxfrvcLo29
          claim_id: c_HGNNtkTECQPe5QXTj6uKwT
          source_id: s_Np3ZtZhSuhi4G7SCeEtobQ
          stance: supports
          locator: CBDB:534098
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

# 王午龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王午龍 | accepted |
| bio.summary | 王午龍，宋人物。籍贯奉化，入仕進士。（中国历代人物传记资料库 CBDB 534098） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王午龍（CBDB 534098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=534098&o=json)
