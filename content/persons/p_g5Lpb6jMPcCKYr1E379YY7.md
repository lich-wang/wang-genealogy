---
schema: wang-person/v1
id: p_g5Lpb6jMPcCKYr1E379YY7
status: active
merged_into: null
display_name: 王廷衮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kBuH3JoQwref44JG6Lpyun
        subject_person_id: p_g5Lpb6jMPcCKYr1E379YY7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷衮
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2PyhwwLr6xnMWA64ZQf1P8
          claim_id: c_kBuH3JoQwref44JG6Lpyun
          source_id: s_9eZRJA9FWq79H7UykE26dj
          stance: supports
          locator: CBDB:549788
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549788）
          source: &a1
            id: s_9eZRJA9FWq79H7UykE26dj
            source_type: api_record
            title: 中国历代人物传记资料库：王廷衮（CBDB 549788）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549788&o=json
            external_identifier: CBDB:549788
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mUFQGAYDGWyfYeeenEAsv4
        subject_person_id: p_g5Lpb6jMPcCKYr1E379YY7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷衮，宋人物。籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 549788）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XMknYL3f28hw5i9-dqztFE
          claim_id: c_mUFQGAYDGWyfYeeenEAsv4
          source_id: s_9eZRJA9FWq79H7UykE26dj
          stance: supports
          locator: CBDB:549788
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

# 王廷衮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷衮 | accepted |
| bio.summary | 王廷衮，宋人物。籍贯建平，入仕進士。（中国历代人物传记资料库 CBDB 549788） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷衮（CBDB 549788）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549788&o=json)
