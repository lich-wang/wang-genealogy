---
schema: wang-person/v1
id: p_poMRxj473L6czZUk656mgA
status: active
merged_into: null
display_name: 王夢弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BwQ4Td2277vddBYgaEbRkJ
        subject_person_id: p_poMRxj473L6czZUk656mgA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_grAPyfs2uWLuKmxetxre3M
          claim_id: c_BwQ4Td2277vddBYgaEbRkJ
          source_id: s_JdKFXUAp8a5weBnXWKHj3Q
          stance: supports
          locator: CBDB:535874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（535874）
          source: &a1
            id: s_JdKFXUAp8a5weBnXWKHj3Q
            source_type: api_record
            title: 中国历代人物传记资料库：王夢弼（CBDB 535874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535874&o=json
            external_identifier: CBDB:535874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WVNh6QoQkM2x6q4HDt97q9
        subject_person_id: p_poMRxj473L6czZUk656mgA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢弼，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 535874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tl-4MUSCUrQgHLFVgS7UEP
          claim_id: c_WVNh6QoQkM2x6q4HDt97q9
          source_id: s_JdKFXUAp8a5weBnXWKHj3Q
          stance: supports
          locator: CBDB:535874
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

# 王夢弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢弼 | accepted |
| bio.summary | 王夢弼，宋人物。入仕進士。（中国历代人物传记资料库 CBDB 535874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢弼（CBDB 535874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=535874&o=json)
