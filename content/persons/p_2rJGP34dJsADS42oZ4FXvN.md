---
schema: wang-person/v1
id: p_2rJGP34dJsADS42oZ4FXvN
status: active
merged_into: null
display_name: 王堯封
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YK5d3xR5DMjVzp8S1aGL96
        subject_person_id: p_2rJGP34dJsADS42oZ4FXvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PEFMCGBAEd4ACc7qPinBEu
          claim_id: c_YK5d3xR5DMjVzp8S1aGL96
          source_id: s_hPyCmsj5VeByFSJ9PncsVa
          stance: supports
          locator: CBDB:541086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（541086）
          source: &a1
            id: s_hPyCmsj5VeByFSJ9PncsVa
            source_type: api_record
            title: 中国历代人物传记资料库：王堯封（CBDB 541086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541086&o=json
            external_identifier: CBDB:541086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NR4XWyjApGyUupFQ5VND9J
        subject_person_id: p_2rJGP34dJsADS42oZ4FXvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1QGLKoiM9m79qtQw2PgHvL
          claim_id: c_NR4XWyjApGyUupFQ5VND9J
          source_id: s_hPyCmsj5VeByFSJ9PncsVa
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

# 王堯封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯封 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯封（CBDB 541086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=541086&o=json)
