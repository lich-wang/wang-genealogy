---
schema: wang-person/v1
id: p_C4L8C9ZGQKbGE4WJu2C1p9
status: active
merged_into: null
display_name: 王基
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XiC4EJQG1nu5naHpweCYMY
        subject_person_id: p_C4L8C9ZGQKbGE4WJu2C1p9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xUZ2ABy5DRWmHCVJPHCFAp
          claim_id: c_XiC4EJQG1nu5naHpweCYMY
          source_id: s_9vX6wGH9DksbszvX2D8tck
          stance: supports
          locator: CBDB:146414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（146414）
          source: &a1
            id: s_9vX6wGH9DksbszvX2D8tck
            source_type: api_record
            title: 中国历代人物传记资料库：王基（CBDB 146414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146414&o=json
            external_identifier: CBDB:146414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DXtD8pEUG71N7PjQ9mMWVf
        subject_person_id: p_C4L8C9ZGQKbGE4WJu2C1p9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王基，史料所见人物。本项目依据《中国历代人物传记资料库：王基（CBDB 146414）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CocNRbX3NbrXlrWV6tXOyT
          claim_id: c_DXtD8pEUG71N7PjQ9mMWVf
          source_id: s_9vX6wGH9DksbszvX2D8tck
          stance: supports
          locator: CBDB:146414
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DQrIwMvbFLzY9bdTVthwWH
        subject_person_id: p_DpQiwc8xYXUruWevnbjJPo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4L8C9ZGQKbGE4WJu2C1p9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWX5l6mzUGlbFpkOMx9I1O
          claim_id: c_DQrIwMvbFLzY9bdTVthwWH
          source_id: s_9vX6wGH9DksbszvX2D8tck
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiming 4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DpQiwc8xYXUruWevnbjJPo
        status: active
        display_name: 王仲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王基 | accepted |
| bio.summary | 王基，史料所见人物。本项目依据《中国历代人物传记资料库：王基（CBDB 146414）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DpQiwc8xYXUruWevnbjJPo | 王仲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王基（CBDB 146414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146414&o=json)
