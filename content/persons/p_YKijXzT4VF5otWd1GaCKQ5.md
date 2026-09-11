---
schema: wang-person/v1
id: p_YKijXzT4VF5otWd1GaCKQ5
status: active
merged_into: null
display_name: 王庭誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m8ZZsbqwNy3PFh458rNtYP
        subject_person_id: p_YKijXzT4VF5otWd1GaCKQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Uhc7HMUqBCEKp9qL3NQw5X
          claim_id: c_m8ZZsbqwNy3PFh458rNtYP
          source_id: s_N3PcULuXNFA92JMfWws4jg
          stance: supports
          locator: CBDB:637432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637432）
          source: &a1
            id: s_N3PcULuXNFA92JMfWws4jg
            source_type: api_record
            title: 中国历代人物传记资料库：王庭誥（CBDB 637432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637432&o=json
            external_identifier: CBDB:637432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nEFzUpaNREFSXDN99y1J2J
        subject_person_id: p_YKijXzT4VF5otWd1GaCKQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王庭誥，清人物。籍贯嘉定，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任經歷。（中国历代人物传记资料库 CBDB 637432）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nYtFY0SNWpUqVcgzU5LV6z
          claim_id: c_nEFzUpaNREFSXDN99y1J2J
          source_id: s_N3PcULuXNFA92JMfWws4jg
          stance: supports
          locator: CBDB:637432
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

# 王庭誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭誥 | accepted |
| bio.summary | 王庭誥，清人物。籍贯嘉定，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任經歷。（中国历代人物传记资料库 CBDB 637432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭誥（CBDB 637432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637432&o=json)
