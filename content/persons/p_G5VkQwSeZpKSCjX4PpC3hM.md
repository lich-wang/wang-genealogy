---
schema: wang-person/v1
id: p_G5VkQwSeZpKSCjX4PpC3hM
status: active
merged_into: null
display_name: 王志揚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X9PMVd23QiXAxZoxJG6pHE
        subject_person_id: p_G5VkQwSeZpKSCjX4PpC3hM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志揚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_btBr5hba5PzAMTsGhNsRF7
          claim_id: c_X9PMVd23QiXAxZoxJG6pHE
          source_id: s_PNyhegBkfd7su8cLLEfGnK
          stance: supports
          locator: CBDB:637755
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637755）
          source: &a1
            id: s_PNyhegBkfd7su8cLLEfGnK
            source_type: api_record
            title: 中国历代人物传记资料库：王志揚（CBDB 637755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637755&o=json
            external_identifier: CBDB:637755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Th1jP6D2rsRrSqHhMbvb3Q
        subject_person_id: p_G5VkQwSeZpKSCjX4PpC3hM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志揚，清人物。籍贯揚州府，曾任訓導。（中国历代人物传记资料库 CBDB 637755）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F_bfIf_AmcyFNR1ORZzlQp
          claim_id: c_Th1jP6D2rsRrSqHhMbvb3Q
          source_id: s_PNyhegBkfd7su8cLLEfGnK
          stance: supports
          locator: CBDB:637755
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

# 王志揚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志揚 | accepted |
| bio.summary | 王志揚，清人物。籍贯揚州府，曾任訓導。（中国历代人物传记资料库 CBDB 637755） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志揚（CBDB 637755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637755&o=json)
