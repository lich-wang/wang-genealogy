---
schema: wang-person/v1
id: p_voQxZsntFdbGU414rD5GJe
status: active
merged_into: null
display_name: 王同方
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rhry5hpZuC9vnvvDuvJ8gH
        subject_person_id: p_voQxZsntFdbGU414rD5GJe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5Y58CvA9zD7JehjtDaB9BD
          claim_id: c_Rhry5hpZuC9vnvvDuvJ8gH
          source_id: s_sLK8vMwmcyCr2Kat8BKYge
          stance: supports
          locator: CBDB:636505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636505）
          source: &a1
            id: s_sLK8vMwmcyCr2Kat8BKYge
            source_type: api_record
            title: 中国历代人物传记资料库：王同方（CBDB 636505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636505&o=json
            external_identifier: CBDB:636505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.189Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QosLQpvfh17Qu6HmvQutxH
        subject_person_id: p_voQxZsntFdbGU414rD5GJe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王同方，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636505）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e7jGHy8SAmM2x5FJ1pgcIt
          claim_id: c_QosLQpvfh17Qu6HmvQutxH
          source_id: s_sLK8vMwmcyCr2Kat8BKYge
          stance: supports
          locator: CBDB:636505
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

# 王同方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同方 | accepted |
| bio.summary | 王同方，清人物。籍贯濟南府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同方（CBDB 636505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636505&o=json)
