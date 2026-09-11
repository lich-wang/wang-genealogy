---
schema: wang-person/v1
id: p_cB4dygytwi4AFEdh4M8u2Q
status: active
merged_into: null
display_name: 王淵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrTMxcH1PkLG2arXYygRwD
        subject_person_id: p_cB4dygytwi4AFEdh4M8u2Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F67ivWazZ6TfEjryrHTqGj
          claim_id: c_YrTMxcH1PkLG2arXYygRwD
          source_id: s_vsYg7WBcbPXimEAtwxfVt4
          stance: supports
          locator: CBDB:686182
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（686182）
          source: &a1
            id: s_vsYg7WBcbPXimEAtwxfVt4
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 686182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686182&o=json
            external_identifier: CBDB:686182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.367Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vQAW5sWi1TWPn85Rdd7auN
        subject_person_id: p_cB4dygytwi4AFEdh4M8u2Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淵，宋人物。籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 686182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5iUzQXV98SsI-rUokXHecD
          claim_id: c_vQAW5sWi1TWPn85Rdd7auN
          source_id: s_vsYg7WBcbPXimEAtwxfVt4
          stance: supports
          locator: CBDB:686182
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

# 王淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淵 | accepted |
| bio.summary | 王淵，宋人物。籍贯山陰，入仕進士。（中国历代人物传记资料库 CBDB 686182） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淵（CBDB 686182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=686182&o=json)
