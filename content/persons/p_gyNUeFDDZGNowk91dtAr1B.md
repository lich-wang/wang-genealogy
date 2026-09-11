---
schema: wang-person/v1
id: p_gyNUeFDDZGNowk91dtAr1B
status: active
merged_into: null
display_name: 王惟賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FC1TrNMq411HpdLzsktezT
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qHarH3hdKNMYRiRfdVB6k5
          claim_id: c_FC1TrNMq411HpdLzsktezT
          source_id: s_BvmkGPXfQbyxPPw38AHawj
          stance: supports
          locator: CBDB:202709
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202709）
          source: &a1
            id: s_BvmkGPXfQbyxPPw38AHawj
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 202709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202709&o=json
            external_identifier: CBDB:202709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_3M4akwiC8ErRbUTWckHrCt
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1496年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15MfKckkBaXkqbNPmi9HmV
          claim_id: c_3M4akwiC8ErRbUTWckHrCt
          source_id: s_BvmkGPXfQbyxPPw38AHawj
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
        id: c_wDWpUE1Wa5AUgC8KDEoFU9
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
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
        - id: cs_7WRQbJmgtyHvpVtcwiC37S
          claim_id: c_wDWpUE1Wa5AUgC8KDEoFU9
          source_id: s_BvmkGPXfQbyxPPw38AHawj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_8ayC-38w2zoNzin9yuqYhR
        subject_person_id: p_gyNUeFDDZGNowk91dtAr1B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UGwXzuLr1XfU6aXNcFopA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLV74tcaIswsbSw1KuZ9MK
          claim_id: c_8ayC-38w2zoNzin9yuqYhR
          source_id: s_JNCFuPQLjmSAxvFAoL7iB3
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JNCFuPQLjmSAxvFAoL7iB3
            source_type: api_record
            title: 中国历代人物传记资料库：王伸（CBDB 292755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json
            external_identifier: CBDB:292755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2UGwXzuLr1XfU6aXNcFopA
        status: active
        display_name: 王伸
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王惟賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惟賢 | accepted |
| birth.date | 1496年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2UGwXzuLr1XfU6aXNcFopA | 王伸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伸（CBDB 292755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292755&o=json)
- [中国历代人物传记资料库：王惟賢（CBDB 202709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202709&o=json)
