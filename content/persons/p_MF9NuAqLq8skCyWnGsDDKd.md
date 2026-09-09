---
schema: wang-person/v1
id: p_MF9NuAqLq8skCyWnGsDDKd
status: active
merged_into: null
display_name: 王正本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VP8Z3pb8SRD8GN69MtBqLB
        subject_person_id: p_MF9NuAqLq8skCyWnGsDDKd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_95j5J3N2qGjUS93s5w572Q
          claim_id: c_VP8Z3pb8SRD8GN69MtBqLB
          source_id: s_psTevHDa2qCGaYeMDzxZDk
          stance: supports
          locator: CBDB:575178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（575178）
          source: &a1
            id: s_psTevHDa2qCGaYeMDzxZDk
            source_type: api_record
            title: 中国历代人物传记资料库：王正本（CBDB 575178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575178&o=json
            external_identifier: CBDB:575178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Em6QQqNNXLfS1ABBB8gQUm
        subject_person_id: p_MF9NuAqLq8skCyWnGsDDKd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oPFZXTyKTscoTeVdurPE6T
          claim_id: c_Em6QQqNNXLfS1ABBB8gQUm
          source_id: s_psTevHDa2qCGaYeMDzxZDk
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王正本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正本 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正本（CBDB 575178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=575178&o=json)
