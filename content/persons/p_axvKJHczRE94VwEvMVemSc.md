---
schema: wang-person/v1
id: p_axvKJHczRE94VwEvMVemSc
status: active
merged_into: null
display_name: 王一言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D8PaTfX82jfGKpDyxAF8Pe
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王一言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KZjFCZ8quFu4T1wyX9PrYs
          claim_id: c_D8PaTfX82jfGKpDyxAF8Pe
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
          stance: supports
          locator: CBDB:203015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203015）
          source: &a1
            id: s_ugxK1xzvCFSxHdB96HR2ap
            source_type: api_record
            title: 中国历代人物传记资料库：王一言（CBDB 203015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json
            external_identifier: CBDB:203015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wcEHm93zmgMyDier1equKt
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1503年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kusCRQ1VbtFAoJTR37BhJ7
          claim_id: c_wcEHm93zmgMyDier1equKt
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
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
        id: c_v2SDQa6KQQ29NUERphfUqH
        subject_person_id: p_axvKJHczRE94VwEvMVemSc
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
        - id: cs_Biq2JEK9ty7xhn7gJYUiz8
          claim_id: c_v2SDQa6KQQ29NUERphfUqH
          source_id: s_ugxK1xzvCFSxHdB96HR2ap
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

# 王一言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王一言 | accepted |
| birth.date | 1503年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王一言（CBDB 203015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203015&o=json)
