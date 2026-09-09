---
schema: wang-person/v1
id: p_BDk6YNhR5VP5UAnHiZAmaN
status: active
merged_into: null
display_name: 王九思
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FA3yexaTnmc6JBCbTSTQ3E
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九思
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAYXyPfr5Ag3N6YiNDC4Ex
          claim_id: c_FA3yexaTnmc6JBCbTSTQ3E
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: CBDB:126440
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126440）
          source: &a1
            id: s_Hn5z56AEqsAxNqAE3T2pvu
            source_type: api_record
            title: 中国历代人物传记资料库：王九思（CBDB 126440）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126440&o=json
            external_identifier: CBDB:126440
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PLBq4aQFAKkJGtFsDXETSs
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TCBoSc28pMrBPTCDqo7DuZ
          claim_id: c_PLBq4aQFAKkJGtFsDXETSs
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1AUjhWPCFSCaxkdJZ5meKs
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x7TRuePe2bsZmE9L6aUL8H
          claim_id: c_1AUjhWPCFSCaxkdJZ5meKs
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6S3Ywm5YFAujoFHPFz5jB
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
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
        - id: cs_MmjdkHGt8vDcZS7qMM5cCM
          claim_id: c_U6S3Ywm5YFAujoFHPFz5jB
          source_id: s_Hn5z56AEqsAxNqAE3T2pvu
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

# 王九思

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九思 | accepted |
| birth.date | 1468年 | accepted |
| death.date | 1551年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九思（CBDB 126440）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126440&o=json)
