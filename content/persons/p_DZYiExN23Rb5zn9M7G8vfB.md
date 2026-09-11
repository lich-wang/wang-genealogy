---
schema: wang-person/v1
id: p_DZYiExN23Rb5zn9M7G8vfB
status: active
merged_into: null
display_name: 王諤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zbqs3aCzGLs8iFNJRKWzcR
        subject_person_id: p_DZYiExN23Rb5zn9M7G8vfB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vs9nXCGDC6TdMS8mp2BvxY
          claim_id: c_zbqs3aCzGLs8iFNJRKWzcR
          source_id: s_iXSBTLkMzXtk8sCZ5NSamx
          stance: supports
          locator: CBDB:1801
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1801）
          source: &a1
            id: s_iXSBTLkMzXtk8sCZ5NSamx
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 1801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1801&o=json
            external_identifier: CBDB:1801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.263Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4DD92cQoQRfqmWbZqEr8dM
        subject_person_id: p_DZYiExN23Rb5zn9M7G8vfB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諤，宋人物。曾任朝請大夫、供備庫副使、西京左藏庫副使。（中国历代人物传记资料库 CBDB 1801）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_l-xsBWMWP3hWgEB4pF6EU0
          claim_id: c_4DD92cQoQRfqmWbZqEr8dM
          source_id: s_iXSBTLkMzXtk8sCZ5NSamx
          stance: supports
          locator: CBDB:1801
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

# 王諤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王諤 | accepted |
| bio.summary | 王諤，宋人物。曾任朝請大夫、供備庫副使、西京左藏庫副使。（中国历代人物传记资料库 CBDB 1801） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王諤（CBDB 1801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1801&o=json)
