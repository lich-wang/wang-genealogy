---
schema: wang-person/v1
id: p_PSPs9M7PXh5m1xRC7zNyoP
status: active
merged_into: null
display_name: 王大槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6d3qzMxJFEaQasjzRJ6tER
        subject_person_id: p_PSPs9M7PXh5m1xRC7zNyoP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EuF1iSC3N1uVoYe67awZJ6
          claim_id: c_6d3qzMxJFEaQasjzRJ6tER
          source_id: s_QvgGC2YyqF36JgDcpJYUrG
          stance: supports
          locator: CBDB:636902
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636902）
          source: &a1
            id: s_QvgGC2YyqF36JgDcpJYUrG
            source_type: api_record
            title: 中国历代人物传记资料库：王大槐（CBDB 636902）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636902&o=json
            external_identifier: CBDB:636902
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.143Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Y3G2j4C53rBau7eLfH6Yd6
        subject_person_id: p_PSPs9M7PXh5m1xRC7zNyoP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大槐，清人物。籍贯清苑，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636902）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aJeVCqYPWsr2rO_Zm2oZWo
          claim_id: c_Y3G2j4C53rBau7eLfH6Yd6
          source_id: s_QvgGC2YyqF36JgDcpJYUrG
          stance: supports
          locator: CBDB:636902
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

# 王大槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大槐 | accepted |
| bio.summary | 王大槐，清人物。籍贯清苑，入仕廩生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636902） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大槐（CBDB 636902）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636902&o=json)
