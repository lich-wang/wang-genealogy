---
schema: wang-person/v1
id: p_hQS7mNqR6dEyveFExeo4fK
status: active
merged_into: null
display_name: 王文通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCS7w1X4REMWCvyaJXrFcM
        subject_person_id: p_hQS7mNqR6dEyveFExeo4fK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LSAuXcSuU8cNnJi6S4CA9W
          claim_id: c_PCS7w1X4REMWCvyaJXrFcM
          source_id: s_aCwv1BuQoZkFqMQQhNENEf
          stance: supports
          locator: CBDB:638288
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638288）
          source: &a1
            id: s_aCwv1BuQoZkFqMQQhNENEf
            source_type: api_record
            title: 中国历代人物传记资料库：王文通（CBDB 638288）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638288&o=json
            external_identifier: CBDB:638288
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.659Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8A85JC3uJoedNr8KgrPnAz
        subject_person_id: p_hQS7mNqR6dEyveFExeo4fK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文通，清人物。籍贯河南省，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638288）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6JzdYs9RRqzvPdp9OcKpcM
          claim_id: c_8A85JC3uJoedNr8KgrPnAz
          source_id: s_aCwv1BuQoZkFqMQQhNENEf
          stance: supports
          locator: CBDB:638288
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

# 王文通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文通 | accepted |
| bio.summary | 王文通，清人物。籍贯河南省，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638288） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文通（CBDB 638288）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638288&o=json)
