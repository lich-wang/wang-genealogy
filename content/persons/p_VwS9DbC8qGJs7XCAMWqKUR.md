---
schema: wang-person/v1
id: p_VwS9DbC8qGJs7XCAMWqKUR
status: active
merged_into: null
display_name: 王升
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_srigmYNtEzFDeUSmzb3x46
        subject_person_id: p_VwS9DbC8qGJs7XCAMWqKUR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ibRW4Hhmp9GXFHPvftN5Ej
          claim_id: c_srigmYNtEzFDeUSmzb3x46
          source_id: s_mFpENtEJkeKUcjQAtt7eam
          stance: supports
          locator: CBDB:342334
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342334）
          source: &a1
            id: s_mFpENtEJkeKUcjQAtt7eam
            source_type: api_record
            title: 中国历代人物传记资料库：王升（CBDB 342334）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342334&o=json
            external_identifier: CBDB:342334
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7qYC81x9zB6z9ZBqy8uRZz
        subject_person_id: p_VwS9DbC8qGJs7XCAMWqKUR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升，清人物。明清進士進士，籍贯南充，入仕進士，曾任吏部郎中、鄉試考官。（中国历代人物传记资料库 CBDB 342334）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JSj6kfHcnmdGW9jbhM3nZD
          claim_id: c_7qYC81x9zB6z9ZBqy8uRZz
          source_id: s_mFpENtEJkeKUcjQAtt7eam
          stance: supports
          locator: CBDB:342334
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

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王升 | accepted |
| bio.summary | 王升，清人物。明清進士進士，籍贯南充，入仕進士，曾任吏部郎中、鄉試考官。（中国历代人物传记资料库 CBDB 342334） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王升（CBDB 342334）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342334&o=json)
