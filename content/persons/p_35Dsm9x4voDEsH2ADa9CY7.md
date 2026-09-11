---
schema: wang-person/v1
id: p_35Dsm9x4voDEsH2ADa9CY7
status: active
merged_into: null
display_name: 王化遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5i41XrEXVjvmKVnzDmVqDS
        subject_person_id: p_35Dsm9x4voDEsH2ADa9CY7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pigQcdgUN3EzqcEFUhs6C9
          claim_id: c_5i41XrEXVjvmKVnzDmVqDS
          source_id: s_APvfFgMFmeYUEwfMBcu9JN
          stance: supports
          locator: CBDB:636406
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636406）
          source: &a1
            id: s_APvfFgMFmeYUEwfMBcu9JN
            source_type: api_record
            title: 中国历代人物传记资料库：王化遠（CBDB 636406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636406&o=json
            external_identifier: CBDB:636406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sWJaX2JbGrrwDWB8HUKBjF
        subject_person_id: p_35Dsm9x4voDEsH2ADa9CY7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化遠，清人物。籍贯西安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636406）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_djG61g9tg-Ylaj5ywBJEBM
          claim_id: c_sWJaX2JbGrrwDWB8HUKBjF
          source_id: s_APvfFgMFmeYUEwfMBcu9JN
          stance: supports
          locator: CBDB:636406
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

# 王化遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化遠 | accepted |
| bio.summary | 王化遠，清人物。籍贯西安，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 636406） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化遠（CBDB 636406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636406&o=json)
