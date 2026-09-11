---
schema: wang-person/v1
id: p_gaNWZRZfSyHqbi4mUJNEC4
status: active
merged_into: null
display_name: 王景雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EQ75D2kGeBRzyAtZ7XDoGK
        subject_person_id: p_gaNWZRZfSyHqbi4mUJNEC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7KRMNt4Nrj1NKvrkwYiMiN
          claim_id: c_EQ75D2kGeBRzyAtZ7XDoGK
          source_id: s_FMQ2jEcgkquUMe86MPtFXW
          stance: supports
          locator: CBDB:638513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638513）
          source: &a1
            id: s_FMQ2jEcgkquUMe86MPtFXW
            source_type: api_record
            title: 中国历代人物传记资料库：王景雲（CBDB 638513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638513&o=json
            external_identifier: CBDB:638513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.702Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dEcZd98pssk7RFrS7G7Sw4
        subject_person_id: p_gaNWZRZfSyHqbi4mUJNEC4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景雲，清人物。籍贯黃梅，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gs0HWtg8p6POrErzfBOdH2
          claim_id: c_dEcZd98pssk7RFrS7G7Sw4
          source_id: s_FMQ2jEcgkquUMe86MPtFXW
          stance: supports
          locator: CBDB:638513
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

# 王景雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景雲 | accepted |
| bio.summary | 王景雲，清人物。籍贯黃梅，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 638513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景雲（CBDB 638513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638513&o=json)
