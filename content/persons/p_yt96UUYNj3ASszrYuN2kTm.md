---
schema: wang-person/v1
id: p_yt96UUYNj3ASszrYuN2kTm
status: active
merged_into: null
display_name: 王嘉賓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AsbayV9D3m1KCuKxzDbUnB
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6bJVQwQqMAEBPB3vxnR7P2
          claim_id: c_AsbayV9D3m1KCuKxzDbUnB
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
          stance: supports
          locator: CBDB:207120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207120）
          source: &a1
            id: s_pjiMN3MNeFkrPLyQw4AKd9
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉賓（CBDB 207120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207120&o=json
            external_identifier: CBDB:207120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kU94PbgJsw84kDSj7Pc3V4
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zgSFzyjWmfUqAJ3BjF83VF
          claim_id: c_kU94PbgJsw84kDSj7Pc3V4
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
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
        id: c_XBX1agff1Tw1bf67rgrUck
        subject_person_id: p_yt96UUYNj3ASszrYuN2kTm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbeQ22U5ZZbTJ6uYbfp1o5
          claim_id: c_XBX1agff1Tw1bf67rgrUck
          source_id: s_pjiMN3MNeFkrPLyQw4AKd9
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

# 王嘉賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉賓 | accepted |
| birth.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉賓（CBDB 207120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207120&o=json)
