---
schema: wang-person/v1
id: p_6Cp25Hvbz5m4jPMHssf8Jr
status: active
merged_into: null
display_name: 王之謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rxw29DEZ3PrBc937wCsce7
        subject_person_id: p_6Cp25Hvbz5m4jPMHssf8Jr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8PqwZ5eZvQM9s9Tnprx52a
          claim_id: c_Rxw29DEZ3PrBc937wCsce7
          source_id: s_s2f7BsbKFdoZs9sbgZ16ti
          stance: supports
          locator: CBDB:635820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635820）
          source: &a1
            id: s_s2f7BsbKFdoZs9sbgZ16ti
            source_type: api_record
            title: 中国历代人物传记资料库：王之謨（CBDB 635820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635820&o=json
            external_identifier: CBDB:635820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.026Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_br9ZZNEszk2NfDDVxqQhyS
        subject_person_id: p_6Cp25Hvbz5m4jPMHssf8Jr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之謨，清人物。籍贯延安府，入仕貢生: 副貢，曾任教諭。（中国历代人物传记资料库 CBDB 635820）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G2v5bQrhJFzq_jUfSYdWrF
          claim_id: c_br9ZZNEszk2NfDDVxqQhyS
          source_id: s_s2f7BsbKFdoZs9sbgZ16ti
          stance: supports
          locator: CBDB:635820
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

# 王之謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之謨 | accepted |
| bio.summary | 王之謨，清人物。籍贯延安府，入仕貢生: 副貢，曾任教諭。（中国历代人物传记资料库 CBDB 635820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之謨（CBDB 635820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635820&o=json)
