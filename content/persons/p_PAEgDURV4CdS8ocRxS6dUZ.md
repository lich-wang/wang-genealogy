---
schema: wang-person/v1
id: p_PAEgDURV4CdS8ocRxS6dUZ
status: active
merged_into: null
display_name: 王元煜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HN5kZHQKcsyfVd6dHkjGax
        subject_person_id: p_PAEgDURV4CdS8ocRxS6dUZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元煜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gnF2ZJMDJLw672idCsQq4i
          claim_id: c_HN5kZHQKcsyfVd6dHkjGax
          source_id: s_k8nne7B9eHn8dDupNYrFHq
          stance: supports
          locator: CBDB:636164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636164）
          source: &a1
            id: s_k8nne7B9eHn8dDupNYrFHq
            source_type: api_record
            title: 中国历代人物传记资料库：王元煜（CBDB 636164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636164&o=json
            external_identifier: CBDB:636164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mzPLA4L8RoYPF218w26ZmE
        subject_person_id: p_PAEgDURV4CdS8ocRxS6dUZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元煜，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 636164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dJ1GPIVH_bxm4faWeQ0h84
          claim_id: c_mzPLA4L8RoYPF218w26ZmE
          source_id: s_k8nne7B9eHn8dDupNYrFHq
          stance: supports
          locator: CBDB:636164
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

# 王元煜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元煜 | accepted |
| bio.summary | 王元煜，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任千總。（中国历代人物传记资料库 CBDB 636164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元煜（CBDB 636164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636164&o=json)
