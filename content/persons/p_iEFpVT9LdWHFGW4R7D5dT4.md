---
schema: wang-person/v1
id: p_iEFpVT9LdWHFGW4R7D5dT4
status: active
merged_into: null
display_name: 王一麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aZJdKdo1P2Us1GqS1ZGXEo
        subject_person_id: p_iEFpVT9LdWHFGW4R7D5dT4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qydt6H1AJNCF3VpBDjGJKZ
          claim_id: c_aZJdKdo1P2Us1GqS1ZGXEo
          source_id: s_PgXyN5i3hxhFxfCC8w32Dd
          stance: supports
          locator: CBDB:493218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（493218）
          source: &a1
            id: s_PgXyN5i3hxhFxfCC8w32Dd
            source_type: api_record
            title: 中国历代人物传记资料库：王一麟（CBDB 493218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493218&o=json
            external_identifier: CBDB:493218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_j5xdJnyqzvY2My1d389q2V
        subject_person_id: p_iEFpVT9LdWHFGW4R7D5dT4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一麟，清人物。曾任典史。（中国历代人物传记资料库 CBDB 493218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GXyAublxpADdpzqGdLnK0c
          claim_id: c_j5xdJnyqzvY2My1d389q2V
          source_id: s_PgXyN5i3hxhFxfCC8w32Dd
          stance: supports
          locator: CBDB:493218
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

# 王一麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一麟 | accepted |
| bio.summary | 王一麟，清人物。曾任典史。（中国历代人物传记资料库 CBDB 493218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一麟（CBDB 493218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=493218&o=json)
