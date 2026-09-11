---
schema: wang-person/v1
id: p_rBW8SkUMqch7ASYvpReL1q
status: active
merged_into: null
display_name: 王昌熾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDstko8UTY6ap8abZ382AR
        subject_person_id: p_rBW8SkUMqch7ASYvpReL1q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌熾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Me8bmNWhed8BnP59BuzyKP
          claim_id: c_mDstko8UTY6ap8abZ382AR
          source_id: s_2YsgiEuAELFy5LdvqsT68M
          stance: supports
          locator: CBDB:638375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638375）
          source: &a1
            id: s_2YsgiEuAELFy5LdvqsT68M
            source_type: api_record
            title: 中国历代人物传记资料库：王昌熾（CBDB 638375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638375&o=json
            external_identifier: CBDB:638375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hag9SwpFABNrWpL7Kn6StA
        subject_person_id: p_rBW8SkUMqch7ASYvpReL1q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌熾，清人物。籍贯江夏，入仕文童/儒童，曾任知府。（中国历代人物传记资料库 CBDB 638375）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DVJrhZB9GzetUZQBpbROzC
          claim_id: c_Hag9SwpFABNrWpL7Kn6StA
          source_id: s_2YsgiEuAELFy5LdvqsT68M
          stance: supports
          locator: CBDB:638375
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

# 王昌熾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌熾 | accepted |
| bio.summary | 王昌熾，清人物。籍贯江夏，入仕文童/儒童，曾任知府。（中国历代人物传记资料库 CBDB 638375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌熾（CBDB 638375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638375&o=json)
