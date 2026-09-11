---
schema: wang-person/v1
id: p_RD5ANuW4TDr9NKGdDuz22P
status: active
merged_into: null
display_name: 王樞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JWauxh3ctPHqUJr6bD82Z7
        subject_person_id: p_RD5ANuW4TDr9NKGdDuz22P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qf1E7BdJXJYeFBThVp3Bvp
          claim_id: c_JWauxh3ctPHqUJr6bD82Z7
          source_id: s_9rB99H3DDPSg7Yi7n8byaL
          stance: supports
          locator: CBDB:61091
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61091）
          source: &a1
            id: s_9rB99H3DDPSg7Yi7n8byaL
            source_type: api_record
            title: 中国历代人物传记资料库：王樞（CBDB 61091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61091&o=json
            external_identifier: CBDB:61091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xWiRotriVgcCoZPXice3mX
        subject_person_id: p_RD5ANuW4TDr9NKGdDuz22P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZJ47KMr5tK3AJ3s22KuU5
          claim_id: c_xWiRotriVgcCoZPXice3mX
          source_id: s_9rB99H3DDPSg7Yi7n8byaL
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
        id: c_EiAkjSdAoJ7C6fp5RC5V8e
        subject_person_id: p_RD5ANuW4TDr9NKGdDuz22P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1673年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUHAJth8TEbucF1X8N9SHW
          claim_id: c_EiAkjSdAoJ7C6fp5RC5V8e
          source_id: s_9rB99H3DDPSg7Yi7n8byaL
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
        id: c_u21AukXwyXeB1qDENcbRDv
        subject_person_id: p_RD5ANuW4TDr9NKGdDuz22P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樞（1617年—1673年），清人物。籍贯仁和，曾任虞衡司郎中。（中国历代人物传记资料库 CBDB 61091）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZeAHDEpwsBqM1nYXyRZ2e
          claim_id: c_u21AukXwyXeB1qDENcbRDv
          source_id: s_9rB99H3DDPSg7Yi7n8byaL
          stance: supports
          locator: CBDB:61091
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

# 王樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樞 | accepted |
| birth.date | 1617年 | accepted |
| death.date | 1673年 | accepted |
| bio.summary | 王樞（1617年—1673年），清人物。籍贯仁和，曾任虞衡司郎中。（中国历代人物传记资料库 CBDB 61091） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樞（CBDB 61091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61091&o=json)
