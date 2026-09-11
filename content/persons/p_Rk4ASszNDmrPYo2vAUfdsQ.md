---
schema: wang-person/v1
id: p_Rk4ASszNDmrPYo2vAUfdsQ
status: active
merged_into: null
display_name: 王懋中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uPG4WgGLXcb3vqHzwAgRxS
        subject_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RJ47w819zTqDvf4hRwPE3L
          claim_id: c_uPG4WgGLXcb3vqHzwAgRxS
          source_id: s_jvMHMTLqFSs3piVLQNysfJ
          stance: supports
          locator: CBDB:206224
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206224）
          source: &a1
            id: s_jvMHMTLqFSs3piVLQNysfJ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋中（CBDB 206224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206224&o=json
            external_identifier: CBDB:206224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WRzsV7sNZhyEgiFo7uYgnT
        subject_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVPAP1y1MBUU4JiBFixh5C
          claim_id: c_WRzsV7sNZhyEgiFo7uYgnT
          source_id: s_jvMHMTLqFSs3piVLQNysfJ
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
        id: c_P7SkzJdjJsM2TJa5wYpwiN
        subject_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
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
        - id: cs_c8beUGEhiKnTHqe2WM2ctT
          claim_id: c_P7SkzJdjJsM2TJa5wYpwiN
          source_id: s_jvMHMTLqFSs3piVLQNysfJ
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
  ancestors:
    - claim:
        id: c_2nglTPi7fyiqkM6-wYPXZs
        subject_person_id: p_F8NA6DNMSyjPgtdTfVsijN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Rk4ASszNDmrPYo2vAUfdsQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcXaE9nFy8Z7Q8wcMzG619
          claim_id: c_2nglTPi7fyiqkM6-wYPXZs
          source_id: s_yfHPWTAGWPnaf13HbAsHHw
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百八十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yfHPWTAGWPnaf13HbAsHHw
            source_type: api_record
            title: 中国历代人物传记资料库：王天錫（CBDB 215046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215046&o=json
            external_identifier: CBDB:215046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.174Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F8NA6DNMSyjPgtdTfVsijN
        status: active
        display_name: 王天錫
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王懋中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋中 | accepted |
| birth.date | 1537年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_F8NA6DNMSyjPgtdTfVsijN | 王天錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋中（CBDB 206224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206224&o=json)
- [中国历代人物传记资料库：王天錫（CBDB 215046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215046&o=json)
