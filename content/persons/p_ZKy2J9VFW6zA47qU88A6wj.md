---
schema: wang-person/v1
id: p_ZKy2J9VFW6zA47qU88A6wj
status: active
merged_into: null
display_name: 王丹書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QmjCs1vFckCez5sqZ4UvGi
        subject_person_id: p_ZKy2J9VFW6zA47qU88A6wj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CfxStECFMDLxe5tWQiQ4xu
          claim_id: c_QmjCs1vFckCez5sqZ4UvGi
          source_id: s_zw9ACWubsPiHHQe2T91CoC
          stance: supports
          locator: CBDB:635756
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635756）
          source: &a1
            id: s_zw9ACWubsPiHHQe2T91CoC
            source_type: api_record
            title: 中国历代人物传记资料库：王丹書（CBDB 635756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635756&o=json
            external_identifier: CBDB:635756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NQ2LuK2NYx6NRd4P4cQZgk
        subject_person_id: p_ZKy2J9VFW6zA47qU88A6wj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丹書，清人物。籍贯涿州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635756）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3UdF5U0Sg5ZEiVKoGRLZNa
          claim_id: c_NQ2LuK2NYx6NRd4P4cQZgk
          source_id: s_zw9ACWubsPiHHQe2T91CoC
          stance: supports
          locator: CBDB:635756
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

# 王丹書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丹書 | accepted |
| bio.summary | 王丹書，清人物。籍贯涿州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635756） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丹書（CBDB 635756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635756&o=json)
