---
schema: wang-person/v1
id: p_DVts8zSG54e72y9Us4Xy7u
status: active
merged_into: null
display_name: 王獻可
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pr9EXmoXpghuTP5UQ8fECz
        subject_person_id: p_DVts8zSG54e72y9Us4Xy7u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_z525wuXLLGQEGE2Abyu5bG
          claim_id: c_Pr9EXmoXpghuTP5UQ8fECz
          source_id: s_58dxdn2aCseUd9o5dzn6Yw
          stance: supports
          locator: CBDB:686354
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686354）
          source: &a1
            id: s_58dxdn2aCseUd9o5dzn6Yw
            source_type: api_record
            title: 中国历代人物传记资料库：王獻可（CBDB 686354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686354&o=json
            external_identifier: CBDB:686354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.376Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R6rpumBtdCEhGUyP6uCkHG
        subject_person_id: p_DVts8zSG54e72y9Us4Xy7u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻可，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 686354）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FFagDH5bCq0FdPDLejZHmw
          claim_id: c_R6rpumBtdCEhGUyP6uCkHG
          source_id: s_58dxdn2aCseUd9o5dzn6Yw
          stance: supports
          locator: CBDB:686354
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

# 王獻可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻可 | accepted |
| bio.summary | 王獻可，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 686354） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻可（CBDB 686354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686354&o=json)
