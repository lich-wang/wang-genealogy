---
schema: wang-person/v1
id: p_6JzFnu5odh99bWxMBBF881
status: active
merged_into: null
display_name: 王統三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YQ9K2wmFdZeKsWtDUANV3i
        subject_person_id: p_6JzFnu5odh99bWxMBBF881
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G5xdrBPjBFKFbQ2SHcp9ni
          claim_id: c_YQ9K2wmFdZeKsWtDUANV3i
          source_id: s_K8yKQc3SagzdQyTVHhzTbz
          stance: supports
          locator: CBDB:639785
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639785）
          source: &a1
            id: s_K8yKQc3SagzdQyTVHhzTbz
            source_type: api_record
            title: 中国历代人物传记资料库：王統三（CBDB 639785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639785&o=json
            external_identifier: CBDB:639785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uCZCDK5CxheLPB2YB8nJqG
        subject_person_id: p_6JzFnu5odh99bWxMBBF881
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王統三，清人物。籍贯中牟，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639785）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ghwWXJyXk--9b4TfZ2R8Qr
          claim_id: c_uCZCDK5CxheLPB2YB8nJqG
          source_id: s_K8yKQc3SagzdQyTVHhzTbz
          stance: supports
          locator: CBDB:639785
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

# 王統三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王統三 | accepted |
| bio.summary | 王統三，清人物。籍贯中牟，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 639785） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王統三（CBDB 639785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639785&o=json)
