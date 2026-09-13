---
schema: wang-person/v1
id: p_uAujjG392SPymDDHoGZN88
status: active
merged_into: null
display_name: 王廷望
cbdb_id: 315367
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_N7ZyKvuau53gFXkzM6N1Ap
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷望，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_F0ZrtYIYRoxXrAiIFkT_QQ
          claim_id: c_N7ZyKvuau53gFXkzM6N1Ap
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: CBDB:315367
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_V1MpscM6Ut3vE83ht3RtGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷望（CBDB 315367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json
            external_identifier: CBDB:315367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DkMsVtyZQiDdJcQa3XoJYP
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7qW82kgUWHYSZbVRjHjLBx
          claim_id: c_DkMsVtyZQiDdJcQa3XoJYP
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: CBDB:315367
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_goH8tcrzsm3AhZpG_L3CGk
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f5gVqQuUpjiqWbuCU4kUx-
          claim_id: c_goH8tcrzsm3AhZpG_L3CGk
          source_id: s_V1MpscM6Ut3vE83ht3RtGq
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第二甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V1MpscM6Ut3vE83ht3RtGq
            source_type: api_record
            title: 中国历代人物传记资料库：王廷望（CBDB 315367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json
            external_identifier: CBDB:315367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷望，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315367） | accepted |
| name.primary | 王廷望 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷望（CBDB 315367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315367&o=json)
