---
schema: wang-person/v1
id: p_rRDjjyDcEEn4xrzjjYQTTA
status: active
merged_into: null
display_name: 王芳衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ATDpy7aNMBpjQKoHZJqmvK
        subject_person_id: p_rRDjjyDcEEn4xrzjjYQTTA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JJkpa31FnLQ1APsEbLkGzG
          claim_id: c_ATDpy7aNMBpjQKoHZJqmvK
          source_id: s_8vBoq8akE2nRmfdDVcbC1x
          stance: supports
          locator: CBDB:640061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640061）
          source: &a1
            id: s_8vBoq8akE2nRmfdDVcbC1x
            source_type: api_record
            title: 中国历代人物传记资料库：王芳衡（CBDB 640061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640061&o=json
            external_identifier: CBDB:640061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G56RNG1P6ZojqWeCXr6EWE
        subject_person_id: p_rRDjjyDcEEn4xrzjjYQTTA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芳衡，清人物。籍贯達縣，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640061）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TXbCuow-IszLfxtwUoeEK6
          claim_id: c_G56RNG1P6ZojqWeCXr6EWE
          source_id: s_8vBoq8akE2nRmfdDVcbC1x
          stance: supports
          locator: CBDB:640061
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

# 王芳衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芳衡 | accepted |
| bio.summary | 王芳衡，清人物。籍贯達縣，入仕進士，曾任主事。（中国历代人物传记资料库 CBDB 640061） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芳衡（CBDB 640061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640061&o=json)
