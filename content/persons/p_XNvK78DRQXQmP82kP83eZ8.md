---
schema: wang-person/v1
id: p_XNvK78DRQXQmP82kP83eZ8
status: active
merged_into: null
display_name: 王錡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UcFpyUeCjKRF7fpReThfre
        subject_person_id: p_XNvK78DRQXQmP82kP83eZ8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HN9RWH9vBccyn2Fc5jLYt9
          claim_id: c_UcFpyUeCjKRF7fpReThfre
          source_id: s_9U7ev4oufDBSA4H4xoxc2G
          stance: supports
          locator: CBDB:640576
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640576）
          source: &a1
            id: s_9U7ev4oufDBSA4H4xoxc2G
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 640576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640576&o=json
            external_identifier: CBDB:640576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U1UKYRumQKU5Y4r3GKx94J
        subject_person_id: p_XNvK78DRQXQmP82kP83eZ8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡，清人物。籍贯利津，曾任復設訓導。（中国历代人物传记资料库 CBDB 640576）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vu2mSmwJj77joA-6wizekO
          claim_id: c_U1UKYRumQKU5Y4r3GKx94J
          source_id: s_9U7ev4oufDBSA4H4xoxc2G
          stance: supports
          locator: CBDB:640576
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

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| bio.summary | 王錡，清人物。籍贯利津，曾任復設訓導。（中国历代人物传记资料库 CBDB 640576） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 640576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640576&o=json)
