---
schema: wang-person/v1
id: p_5KK47qSrMbyEx7ctY3vj7c
status: active
merged_into: null
display_name: 王瑩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T7RsMmfHmUsx7qpcHuLo4J
        subject_person_id: p_5KK47qSrMbyEx7ctY3vj7c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mxTT2e9HmjM9pmwpJnccwx
          claim_id: c_T7RsMmfHmUsx7qpcHuLo4J
          source_id: s_g8kuJShdheuNtDr1QaLoqG
          stance: supports
          locator: CBDB:268926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（268926）
          source: &a1
            id: s_g8kuJShdheuNtDr1QaLoqG
            source_type: api_record
            title: 中国历代人物传记资料库：王瑩（CBDB 268926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json
            external_identifier: CBDB:268926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.801Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pn3u5g9CzGj7bUHy9o9idV
        subject_person_id: p_5KK47qSrMbyEx7ctY3vj7c
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
        - id: cs_QVFRGXmWQx4NhfuG8qBN3p
          claim_id: c_Pn3u5g9CzGj7bUHy9o9idV
          source_id: s_g8kuJShdheuNtDr1QaLoqG
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

# 王瑩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑩（CBDB 268926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268926&o=json)
