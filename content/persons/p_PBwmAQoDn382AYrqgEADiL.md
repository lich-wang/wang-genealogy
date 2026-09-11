---
schema: wang-person/v1
id: p_PBwmAQoDn382AYrqgEADiL
status: active
merged_into: null
display_name: 王孟良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dRLpCSmqKponMqaDfBP8zo
        subject_person_id: p_PBwmAQoDn382AYrqgEADiL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KoZ654F3DDJ3PuaKH7GU9q
          claim_id: c_dRLpCSmqKponMqaDfBP8zo
          source_id: s_ArX53MZNoKXySBZLMQycHC
          stance: supports
          locator: CBDB:258056
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（258056）
          source: &a1
            id: s_ArX53MZNoKXySBZLMQycHC
            source_type: api_record
            title: 中国历代人物传记资料库：王孟良（CBDB 258056）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json
            external_identifier: CBDB:258056
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zWkQiMzE18M2gh1Tzi17y9
        subject_person_id: p_PBwmAQoDn382AYrqgEADiL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟良，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258056）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ew1V5sRe8DziX3JA6soXqi
          claim_id: c_zWkQiMzE18M2gh1Tzi17y9
          source_id: s_ArX53MZNoKXySBZLMQycHC
          stance: supports
          locator: CBDB:258056
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

# 王孟良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孟良 | accepted |
| bio.summary | 王孟良，明人物。成化二十三年進士，籍贯寧海。（中国历代人物传记资料库 CBDB 258056） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孟良（CBDB 258056）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=258056&o=json)
