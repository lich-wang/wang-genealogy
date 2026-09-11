---
schema: wang-person/v1
id: p_3QDnXJ1yrE5aSbLLXiVLND
status: active
merged_into: null
display_name: 王嵩
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xKMc8zHFLfURA8mdWftXnB
        subject_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGH2c17smC4GQBnJYBiFXW
          claim_id: c_xKMc8zHFLfURA8mdWftXnB
          source_id: s_r7hRtyyUNoBEVcFxhGgEn2
          stance: supports
          locator: CBDB:126762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126762）
          source: &a1
            id: s_r7hRtyyUNoBEVcFxhGgEn2
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 126762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126762&o=json
            external_identifier: CBDB:126762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5K1tzx2JhsTtS3kGG3MmW
        subject_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
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
        - id: cs_LtKHVnQ9bq94zASU9iiT5N
          claim_id: c_r5K1tzx2JhsTtS3kGG3MmW
          source_id: s_r7hRtyyUNoBEVcFxhGgEn2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1bfwQ2wiGJ2_flac6-rFvq
        subject_person_id: p_219jQxSbAi8XEaLPFhzHTg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3QDnXJ1yrE5aSbLLXiVLND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZTx8ZTGV2HuyBYZUC_jU_h
          claim_id: c_1bfwQ2wiGJ2_flac6-rFvq
          source_id: s_tzQ5bPUqEZShE4ZB7CELGM
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第一百一十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tzQ5bPUqEZShE4ZB7CELGM
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 249817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249817&o=json
            external_identifier: CBDB:249817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.188Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_219jQxSbAi8XEaLPFhzHTg
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_219jQxSbAi8XEaLPFhzHTg | 王信 | accepted |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 126762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126762&o=json)
- [中国历代人物传记资料库：王信（CBDB 249817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249817&o=json)
