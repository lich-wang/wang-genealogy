---
schema: wang-person/v1
id: p_LSm7eNX3UbiTj4PAewJXME
status: active
merged_into: null
display_name: 王克生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YvkaVW3D3DpqKNgMk3WXmQ
        subject_person_id: p_LSm7eNX3UbiTj4PAewJXME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NyMpHAqd63GQK2FYQpChpp
          claim_id: c_YvkaVW3D3DpqKNgMk3WXmQ
          source_id: s_DEfuVDgNLjFMMD75JzGeXB
          stance: supports
          locator: CBDB:71660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71660）
          source: &a1
            id: s_DEfuVDgNLjFMMD75JzGeXB
            source_type: api_record
            title: 中国历代人物传记资料库：王克生（CBDB 71660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71660&o=json
            external_identifier: CBDB:71660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CC5trqYTGD8fW5MQGePU61
        subject_person_id: p_LSm7eNX3UbiTj4PAewJXME
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1616年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXVLHbesxpzJfffoKp6k82
          claim_id: c_CC5trqYTGD8fW5MQGePU61
          source_id: s_DEfuVDgNLjFMMD75JzGeXB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_8BUP5LqKuJ3WTM3CMqmy9U
        subject_person_id: p_LSm7eNX3UbiTj4PAewJXME
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6V9iahAdSdqUfrFhP6dyE5
          claim_id: c_8BUP5LqKuJ3WTM3CMqmy9U
          source_id: s_DEfuVDgNLjFMMD75JzGeXB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JXCbqfeocsm4vpmSsX1iCJ
        subject_person_id: p_LSm7eNX3UbiTj4PAewJXME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克生（1616年—1663年），清人物。籍贯陽城。（中国历代人物传记资料库 CBDB 71660）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H5VVyBBpVzrxAqLJLnRibx
          claim_id: c_JXCbqfeocsm4vpmSsX1iCJ
          source_id: s_DEfuVDgNLjFMMD75JzGeXB
          stance: supports
          locator: CBDB:71660
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

# 王克生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克生 | accepted |
| birth.date | 1616年 | accepted |
| death.date | 1663年 | accepted |
| bio.summary | 王克生（1616年—1663年），清人物。籍贯陽城。（中国历代人物传记资料库 CBDB 71660） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克生（CBDB 71660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71660&o=json)
