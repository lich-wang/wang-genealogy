---
schema: wang-person/v1
id: p_QkqxziQYuFsCEAK746e5e6
status: active
merged_into: null
display_name: 王景玄
cbdb_id: 159938
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2DmP1LZW3AjeSP3H55itZz
        subject_person_id: p_QkqxziQYuFsCEAK746e5e6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景玄，唐人物。曾任未詳。（中国历代人物传记资料库 CBDB 159938）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Sb3-AL1DthlayKEynbzYv8
          claim_id: c_2DmP1LZW3AjeSP3H55itZz
          source_id: s_nLSWfzkV29e4x81HyeCqu1
          stance: supports
          locator: CBDB:159938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nLSWfzkV29e4x81HyeCqu1
            source_type: api_record
            title: 中国历代人物传记资料库：王景玄（CBDB 159938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159938&o=json
            external_identifier: CBDB:159938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_jx13omkkNtHk3qxNVWJUnW
        subject_person_id: p_QkqxziQYuFsCEAK746e5e6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景玄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vFk32XxwaGjC3Z4twTVpse
          claim_id: c_jx13omkkNtHk3qxNVWJUnW
          source_id: s_nLSWfzkV29e4x81HyeCqu1
          stance: supports
          locator: CBDB:159938
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
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

# 王景玄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景玄，唐人物。曾任未詳。（中国历代人物传记资料库 CBDB 159938） | accepted |
| name.primary | 王景玄 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景玄（CBDB 159938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159938&o=json)
