---
schema: wang-person/v1
id: p_tPXFogMnNoo3xjFyYT57JZ
status: active
merged_into: null
display_name: 王玠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WwRnDKUpXSDrqgjgpa3xg5
        subject_person_id: p_tPXFogMnNoo3xjFyYT57JZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rGGv5qAA3F49UvCfBV8GZ8
          claim_id: c_WwRnDKUpXSDrqgjgpa3xg5
          source_id: s_QH13AQagym47MvCFPF3TJb
          stance: supports
          locator: CBDB:39434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39434）
          source: &a1
            id: s_QH13AQagym47MvCFPF3TJb
            source_type: api_record
            title: 中国历代人物传记资料库：王玠（CBDB 39434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39434&o=json
            external_identifier: CBDB:39434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.614Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BPMHb4JCiF6ZKe2YBStH5G
        subject_person_id: p_tPXFogMnNoo3xjFyYT57JZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玠，宋人物。籍贯閩縣，入仕進士，曾任司法參軍。（中国历代人物传记资料库 CBDB 39434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PWsoPzvCefT7Z_85V-Rs4n
          claim_id: c_BPMHb4JCiF6ZKe2YBStH5G
          source_id: s_QH13AQagym47MvCFPF3TJb
          stance: supports
          locator: CBDB:39434
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

# 王玠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玠 | accepted |
| bio.summary | 王玠，宋人物。籍贯閩縣，入仕進士，曾任司法參軍。（中国历代人物传记资料库 CBDB 39434） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玠（CBDB 39434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39434&o=json)
