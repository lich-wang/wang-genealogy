---
schema: wang-person/v1
id: p_UR1jz93EpTGLHjFxuNiXJX
status: active
merged_into: null
display_name: 王作謀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DF95S9AVBxATRmpcfgL2K8
        subject_person_id: p_UR1jz93EpTGLHjFxuNiXJX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作謀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uy9pYCUvtXLpqYqbfpKqtd
          claim_id: c_DF95S9AVBxATRmpcfgL2K8
          source_id: s_HELqKdwEZkU6Q9py8vewQi
          stance: supports
          locator: CBDB:547626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（547626）
          source: &a1
            id: s_HELqKdwEZkU6Q9py8vewQi
            source_type: api_record
            title: 中国历代人物传记资料库：王作謀（CBDB 547626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547626&o=json
            external_identifier: CBDB:547626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.542Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GFrUZZZLJA12QGxyrmbzec
        subject_person_id: p_UR1jz93EpTGLHjFxuNiXJX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作謀，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 547626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kYeeNBoS9F0a3dOVSspl9z
          claim_id: c_GFrUZZZLJA12QGxyrmbzec
          source_id: s_HELqKdwEZkU6Q9py8vewQi
          stance: supports
          locator: CBDB:547626
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

# 王作謀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作謀 | accepted |
| bio.summary | 王作謀，宋人物。籍贯婺源，入仕進士。（中国历代人物传记资料库 CBDB 547626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作謀（CBDB 547626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=547626&o=json)
