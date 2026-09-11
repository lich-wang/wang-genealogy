---
schema: wang-person/v1
id: p_doWugv74D3xvBh5UovgYCU
status: active
merged_into: null
display_name: 王廷襄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Me6novWpZgoK1NLhjRDQqM
        subject_person_id: p_doWugv74D3xvBh5UovgYCU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷襄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iVENL6dRQtS57GPGaY3TXU
          claim_id: c_Me6novWpZgoK1NLhjRDQqM
          source_id: s_9Bgm98tG44eznfhP1Vdn1q
          stance: supports
          locator: CBDB:637559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637559）
          source: &a1
            id: s_9Bgm98tG44eznfhP1Vdn1q
            source_type: api_record
            title: 中国历代人物传记资料库：王廷襄（CBDB 637559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637559&o=json
            external_identifier: CBDB:637559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.447Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g74ipfYSiEn6dZvL7GpDJG
        subject_person_id: p_doWugv74D3xvBh5UovgYCU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷襄，清人物。籍贯裕州，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 637559）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hJfTEALD3Ot2xPNpAlD2yQ
          claim_id: c_g74ipfYSiEn6dZvL7GpDJG
          source_id: s_9Bgm98tG44eznfhP1Vdn1q
          stance: supports
          locator: CBDB:637559
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

# 王廷襄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷襄 | accepted |
| bio.summary | 王廷襄，清人物。籍贯裕州，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 637559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷襄（CBDB 637559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637559&o=json)
