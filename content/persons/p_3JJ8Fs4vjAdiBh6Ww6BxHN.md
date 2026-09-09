---
schema: wang-person/v1
id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
status: active
merged_into: null
display_name: 王朝宗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5dRu8HDZ9964MHNKi54rbo
        subject_person_id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWRWu5LeBGcpNZAwBF6sZF
          claim_id: c_5dRu8HDZ9964MHNKi54rbo
          source_id: s_vBCTbhtPfj6LyWHu4VfkEb
          stance: supports
          locator: CBDB:69384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69384）
          source: &a1
            id: s_vBCTbhtPfj6LyWHu4VfkEb
            source_type: api_record
            title: 中国历代人物传记资料库：王朝宗（CBDB 69384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69384&o=json
            external_identifier: CBDB:69384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_WGjRJTGKFMdi6A9N36Un7r
        subject_person_id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AaPn2FFK3wTSwpU4DuVXu6
          claim_id: c_WGjRJTGKFMdi6A9N36Un7r
          source_id: s_vBCTbhtPfj6LyWHu4VfkEb
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
        id: c_eDehaJAej4LrFhdMJLnP48
        subject_person_id: p_3JJ8Fs4vjAdiBh6Ww6BxHN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQd8PcJNMTHTZHXAJXAyr8
          claim_id: c_eDehaJAej4LrFhdMJLnP48
          source_id: s_vBCTbhtPfj6LyWHu4VfkEb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王朝宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝宗 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝宗（CBDB 69384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69384&o=json)
