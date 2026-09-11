---
schema: wang-person/v1
id: p_UhzxvpCRV5MTAzsJBJrZv2
status: active
merged_into: null
display_name: 王宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5grEb5MkKSZmct7uNA79qN
        subject_person_id: p_UhzxvpCRV5MTAzsJBJrZv2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q6w21nB65CR9HcHmqejun4
          claim_id: c_5grEb5MkKSZmct7uNA79qN
          source_id: s_wDF8HA6PAK6SYwNk2vpr35
          stance: supports
          locator: CBDB:489591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489591）
          source: &a1
            id: s_wDF8HA6PAK6SYwNk2vpr35
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 489591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489591&o=json
            external_identifier: CBDB:489591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.059Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3FUUTDUWTHUA77Ct6avjwo
        subject_person_id: p_UhzxvpCRV5MTAzsJBJrZv2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗，清人物。曾任守備。（中国历代人物传记资料库 CBDB 489591）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wIZ01FcWcm4xu31sfjRx1j
          claim_id: c_3FUUTDUWTHUA77Ct6avjwo
          source_id: s_wDF8HA6PAK6SYwNk2vpr35
          stance: supports
          locator: CBDB:489591
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

# 王宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗 | accepted |
| bio.summary | 王宗，清人物。曾任守備。（中国历代人物传记资料库 CBDB 489591） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗（CBDB 489591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489591&o=json)
