---
schema: wang-person/v1
id: p_HA6yzkewwo5VtE93zkGmi9
status: active
merged_into: null
display_name: 王定國
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AgeADDFA7RTj77jawMjrS2
        subject_person_id: p_HA6yzkewwo5VtE93zkGmi9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nq32cbX3dtMiQmoJkHMB3B
          claim_id: c_AgeADDFA7RTj77jawMjrS2
          source_id: s_7ythGQfVZ8YQjuBUJ7aEZe
          stance: supports
          locator: CBDB:688740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688740）
          source: &a1
            id: s_7ythGQfVZ8YQjuBUJ7aEZe
            source_type: api_record
            title: 中国历代人物传记资料库：王定國（CBDB 688740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688740&o=json
            external_identifier: CBDB:688740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mkbUHE26NY33LdY6XFHiCH
        subject_person_id: p_HA6yzkewwo5VtE93zkGmi9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定國，宋人物。籍贯金堂，入仕進士。（中国历代人物传记资料库 CBDB 688740）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X6IfOFzeZp6UMGSMzU9Awl
          claim_id: c_mkbUHE26NY33LdY6XFHiCH
          source_id: s_7ythGQfVZ8YQjuBUJ7aEZe
          stance: supports
          locator: CBDB:688740
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

# 王定國

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王定國 | accepted |
| bio.summary | 王定國，宋人物。籍贯金堂，入仕進士。（中国历代人物传记资料库 CBDB 688740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王定國（CBDB 688740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688740&o=json)
