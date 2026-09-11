---
schema: wang-person/v1
id: p_XBMkhHge1H2QCP23EPnBsW
status: active
merged_into: null
display_name: 王業煥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9obVj2Ss5gd2fBEfFkNGb8
        subject_person_id: p_XBMkhHge1H2QCP23EPnBsW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業煥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EqUXJqzVLhLVzGpVfnHW9
          claim_id: c_9obVj2Ss5gd2fBEfFkNGb8
          source_id: s_a1bXyUuVmLVqZmNXNGH5gQ
          stance: supports
          locator: CBDB:638776
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638776）
          source: &a1
            id: s_a1bXyUuVmLVqZmNXNGH5gQ
            source_type: api_record
            title: 中国历代人物传记资料库：王業煥（CBDB 638776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638776&o=json
            external_identifier: CBDB:638776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MkY5ac8nHaEFLbcKt4cG61
        subject_person_id: p_XBMkhHge1H2QCP23EPnBsW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業煥，清人物。籍贯新鄭，曾任訓導。（中国历代人物传记资料库 CBDB 638776）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rjyk7heQ9JO89c8ZG3GmsR
          claim_id: c_MkY5ac8nHaEFLbcKt4cG61
          source_id: s_a1bXyUuVmLVqZmNXNGH5gQ
          stance: supports
          locator: CBDB:638776
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

# 王業煥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業煥 | accepted |
| bio.summary | 王業煥，清人物。籍贯新鄭，曾任訓導。（中国历代人物传记资料库 CBDB 638776） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業煥（CBDB 638776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638776&o=json)
