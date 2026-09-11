---
schema: wang-person/v1
id: p_PD81fe6FB4MQQjMedv8FW4
status: active
merged_into: null
display_name: 王極昭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NKdYMiPC29HRc2ZkKrHSys
        subject_person_id: p_PD81fe6FB4MQQjMedv8FW4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hjA5SRNTnwzhHnBQc127kG
          claim_id: c_NKdYMiPC29HRc2ZkKrHSys
          source_id: s_9kUXCoQhmqWECRtA7jWfLJ
          stance: supports
          locator: CBDB:71664
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71664）
          source: &a1
            id: s_9kUXCoQhmqWECRtA7jWfLJ
            source_type: api_record
            title: 中国历代人物传记资料库：王極昭（CBDB 71664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71664&o=json
            external_identifier: CBDB:71664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JrYRRtQnJMXMQHAWmqxYLd
        subject_person_id: p_PD81fe6FB4MQQjMedv8FW4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1676年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9gfL6CEmQBjSQopjJ1wEfB
          claim_id: c_JrYRRtQnJMXMQHAWmqxYLd
          source_id: s_9kUXCoQhmqWECRtA7jWfLJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w9SPeN5g5JJy8bZoBrw3tE
        subject_person_id: p_PD81fe6FB4MQQjMedv8FW4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極昭（生于1676年），清人物。籍贯全州。（中国历代人物传记资料库 CBDB 71664）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3Qd15p8oLlOlf3vSriliH1
          claim_id: c_w9SPeN5g5JJy8bZoBrw3tE
          source_id: s_9kUXCoQhmqWECRtA7jWfLJ
          stance: supports
          locator: CBDB:71664
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

# 王極昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王極昭 | accepted |
| birth.date | 1676年 | accepted |
| bio.summary | 王極昭（生于1676年），清人物。籍贯全州。（中国历代人物传记资料库 CBDB 71664） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王極昭（CBDB 71664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71664&o=json)
