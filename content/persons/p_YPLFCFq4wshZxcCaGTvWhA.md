---
schema: wang-person/v1
id: p_YPLFCFq4wshZxcCaGTvWhA
status: active
merged_into: null
display_name: 王常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DmkiHBUnuKU5FJFRp889YP
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JZTSRFMVUnQo9khp22qDMM
          claim_id: c_DmkiHBUnuKU5FJFRp889YP
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
          stance: supports
          locator: CBDB:208095
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208095）
          source: &a1
            id: s_QpNAbj1ukQE5wEmxFfvnn4
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 208095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208095&o=json
            external_identifier: CBDB:208095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_szFS2BjoCLe6DfFQPmwqDN
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1409年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HmME44eQw9KC71Ftzi4r3j
          claim_id: c_szFS2BjoCLe6DfFQPmwqDN
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
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
        id: c_v5TDCHi8CZVxkiKn8EriN2
        subject_person_id: p_YPLFCFq4wshZxcCaGTvWhA
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
        - id: cs_zRy1FLzDGJawwQw8F7PQRn
          claim_id: c_v5TDCHi8CZVxkiKn8EriN2
          source_id: s_QpNAbj1ukQE5wEmxFfvnn4
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

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| birth.date | 1409年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 208095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208095&o=json)
