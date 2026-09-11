---
schema: wang-person/v1
id: p_zuLKoEg9MJTy5JcEZ6rQc1
status: active
merged_into: null
display_name: 王登瀛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dhvpQZartrsuwsg2QtcK78
        subject_person_id: p_zuLKoEg9MJTy5JcEZ6rQc1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登瀛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GQvG75Fhfdw8YmU3qb1cG7
          claim_id: c_dhvpQZartrsuwsg2QtcK78
          source_id: s_tkqWCksbS1CBaV4cZ79EwC
          stance: supports
          locator: CBDB:545824
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545824）
          source: &a1
            id: s_tkqWCksbS1CBaV4cZ79EwC
            source_type: api_record
            title: 中国历代人物传记资料库：王登瀛（CBDB 545824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545824&o=json
            external_identifier: CBDB:545824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.523Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5u7yDwWeqGB5BEArR8c2NQ
        subject_person_id: p_zuLKoEg9MJTy5JcEZ6rQc1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登瀛，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 545824）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jUfqchXT2ScPhbiwlG2nb4
          claim_id: c_5u7yDwWeqGB5BEArR8c2NQ
          source_id: s_tkqWCksbS1CBaV4cZ79EwC
          stance: supports
          locator: CBDB:545824
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

# 王登瀛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登瀛 | accepted |
| bio.summary | 王登瀛，宋人物。籍贯江陰，入仕進士。（中国历代人物传记资料库 CBDB 545824） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登瀛（CBDB 545824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545824&o=json)
