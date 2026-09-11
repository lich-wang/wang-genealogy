---
schema: wang-person/v1
id: p_6C2zTLDtC372uvJK8iU3HD
status: active
merged_into: null
display_name: 王傑山
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6meJ7aeFPFUV2HvuRSqQpz
        subject_person_id: p_6C2zTLDtC372uvJK8iU3HD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑山
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VXyzq3b4N7ad3X2zCQUabb
          claim_id: c_6meJ7aeFPFUV2HvuRSqQpz
          source_id: s_Lmx6bTYkm7kF79Qg5Q9swT
          stance: supports
          locator: CBDB:638671
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638671）
          source: &a1
            id: s_Lmx6bTYkm7kF79Qg5Q9swT
            source_type: api_record
            title: 中国历代人物传记资料库：王傑山（CBDB 638671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638671&o=json
            external_identifier: CBDB:638671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.712Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZhRxv8XNPWQxXGa55eum7P
        subject_person_id: p_6C2zTLDtC372uvJK8iU3HD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑山，清人物。籍贯陳州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638671）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O3q5QF3zbJIib1yTazw_7l
          claim_id: c_ZhRxv8XNPWQxXGa55eum7P
          source_id: s_Lmx6bTYkm7kF79Qg5Q9swT
          stance: supports
          locator: CBDB:638671
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

# 王傑山

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑山 | accepted |
| bio.summary | 王傑山，清人物。籍贯陳州府，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 638671） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑山（CBDB 638671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638671&o=json)
