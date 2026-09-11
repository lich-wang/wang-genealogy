---
schema: wang-person/v1
id: p_A95KCbQQM142gBaGgRKSRg
status: active
merged_into: null
display_name: 王選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x2K5LDE1vyhCNZYFQcbnQ8
        subject_person_id: p_A95KCbQQM142gBaGgRKSRg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4mRQTi2z1mD6XZb5FW4u1x
          claim_id: c_x2K5LDE1vyhCNZYFQcbnQ8
          source_id: s_jVA3hkdW3jWxNdn5vPjuxs
          stance: supports
          locator: CBDB:550676
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550676）
          source: &a1
            id: s_jVA3hkdW3jWxNdn5vPjuxs
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 550676）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550676&o=json
            external_identifier: CBDB:550676
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pQGAckQ4q9z6wsCd8MPq3C
        subject_person_id: p_A95KCbQQM142gBaGgRKSRg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，明人物。籍贯新喻，入仕鄉貢舉人，曾任大理寺評事。（中国历代人物传记资料库 CBDB 550676）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBUp16uLo_JECYDH2HoGph
          claim_id: c_pQGAckQ4q9z6wsCd8MPq3C
          source_id: s_jVA3hkdW3jWxNdn5vPjuxs
          stance: supports
          locator: CBDB:550676
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

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，明人物。籍贯新喻，入仕鄉貢舉人，曾任大理寺評事。（中国历代人物传记资料库 CBDB 550676） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 550676）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550676&o=json)
