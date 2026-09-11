---
schema: wang-person/v1
id: p_m1KPPjDFuB77sgosg8dB61
status: active
merged_into: null
display_name: 王有為
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cv8DSnCba2VJTpGgiCFp79
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有為
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ad5FjKjoQagoPtvcVYLsRt
          claim_id: c_cv8DSnCba2VJTpGgiCFp79
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: CBDB:203722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203722）
          source: &a1
            id: s_gQ1iyNseF56QiyBot1tdVq
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 203722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json
            external_identifier: CBDB:203722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.798Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7YhFRrX14JgQ87fWhDb1wz
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1507年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A5vqRrz4ZdtURqcia2zVa6
          claim_id: c_7YhFRrX14JgQ87fWhDb1wz
          source_id: s_gQ1iyNseF56QiyBot1tdVq
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
        id: c_yQijHMwbM3NkTfSixBuoNe
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
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
        - id: cs_TvDQQDfN8PquBMv5DAscg8
          claim_id: c_yQijHMwbM3NkTfSixBuoNe
          source_id: s_gQ1iyNseF56QiyBot1tdVq
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
        id: c_fGFo1HrfJ1LTKYraCMAbxa
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t3fP0h1zOuaYjLlsVVgLOG
          claim_id: c_fGFo1HrfJ1LTKYraCMAbxa
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XiFFgCxGPLXnJMQFHkL5MX
        status: active
        display_name: 王鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fo5vPbF2C8w5Bf8wq4149J
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qHEwMSge3CPbuNpSXrMTYw
          claim_id: c_fo5vPbF2C8w5Bf8wq4149J
          source_id: s_pTPMWo7IU3UPqK27qpyceS
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pTPMWo7IU3UPqK27qpyceS
            source_type: api_record
            title: 中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json
            external_identifier: CBDB:309078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8p8i7Z5DnFRpA5N3rwc9Uu
        status: active
        display_name: 何氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_sd0YGXVMt4mnOT0uaRgXnI
        subject_person_id: p_9nLDDR64tTe6Yf8U9FsNKb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2YVGIAJgWJXUWXEr7AEFy1
          claim_id: c_sd0YGXVMt4mnOT0uaRgXnI
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9nLDDR64tTe6Yf8U9FsNKb
        status: active
        display_name: 王紃
        merged_into_person_id: null
    - claim:
        id: c_Btbn6Iw7UE6h4oox47zTnV
        subject_person_id: p_ea1c741tbGsFRoxmHPKYXv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_m1KPPjDFuB77sgosg8dB61
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NhffR5s9bgNJnQuqNBvXs8
          claim_id: c_Btbn6Iw7UE6h4oox47zTnV
          source_id: s_gQ1iyNseF56QiyBot1tdVq
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第五十二名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ea1c741tbGsFRoxmHPKYXv
        status: active
        display_name: 王彥璋
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王有為

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有為 | accepted |
| birth.date | 1507年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XiFFgCxGPLXnJMQFHkL5MX | 王鵬 | accepted |
| spouses | p_8p8i7Z5DnFRpA5N3rwc9Uu | 何氏 | accepted |
| ancestors | p_9nLDDR64tTe6Yf8U9FsNKb | 王紃 | accepted |
| ancestors | p_ea1c741tbGsFRoxmHPKYXv | 王彥璋 | accepted |

## 外部来源

- [中国历代人物传记资料库：何氏(王有為妻)（CBDB 309078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309078&o=json)
- [中国历代人物传记资料库：王有為（CBDB 203722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203722&o=json)
