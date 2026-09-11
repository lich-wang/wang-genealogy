---
schema: wang-person/v1
id: p_Lg29VxnBi1jxgHpx5eEZxz
status: active
merged_into: null
display_name: 王聖麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cnh3A3NN136dJJVvCzxTCy
        subject_person_id: p_Lg29VxnBi1jxgHpx5eEZxz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nUkNZ9J9gDUS1iph5qwBUY
          claim_id: c_Cnh3A3NN136dJJVvCzxTCy
          source_id: s_jqrwWGppoCDizfEp6Tk4Aj
          stance: supports
          locator: CBDB:639943
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639943）
          source: &a1
            id: s_jqrwWGppoCDizfEp6Tk4Aj
            source_type: api_record
            title: 中国历代人物传记资料库：王聖麟（CBDB 639943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639943&o=json
            external_identifier: CBDB:639943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ieVwepHxCB1BENB98fDhcy
        subject_person_id: p_Lg29VxnBi1jxgHpx5eEZxz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聖麟，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639943）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rKf2QQ1fByoFi2rzTkI3_f
          claim_id: c_ieVwepHxCB1BENB98fDhcy
          source_id: s_jqrwWGppoCDizfEp6Tk4Aj
          stance: supports
          locator: CBDB:639943
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

# 王聖麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聖麟 | accepted |
| bio.summary | 王聖麟，清人物。籍贯山陰，曾任典史。（中国历代人物传记资料库 CBDB 639943） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聖麟（CBDB 639943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639943&o=json)
