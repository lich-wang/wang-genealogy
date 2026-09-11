---
schema: wang-person/v1
id: p_wKQiP1EfRixbApmFB2CXep
status: active
merged_into: null
display_name: 王詢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UtF8JQAkFgjZinGD4QVudL
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fa98TVP9bVm92M1WtPR2jz
          claim_id: c_UtF8JQAkFgjZinGD4QVudL
          source_id: s_9NQJdaWBb31AFnxdEdSc95
          stance: supports
          locator: CBDB:202367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202367）
          source: &a1
            id: s_9NQJdaWBb31AFnxdEdSc95
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 202367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202367&o=json
            external_identifier: CBDB:202367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.739Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_V3CNM1ofvKXEDSBM58VRK7
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1387年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6yNuNqfjooD7yyB6a5fYXu
          claim_id: c_V3CNM1ofvKXEDSBM58VRK7
          source_id: s_9NQJdaWBb31AFnxdEdSc95
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
        id: c_aJxCPxXA79odxMNamWBm4k
        subject_person_id: p_wKQiP1EfRixbApmFB2CXep
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
        - id: cs_Lybk9HAb3G679JAKuX7bA2
          claim_id: c_aJxCPxXA79odxMNamWBm4k
          source_id: s_9NQJdaWBb31AFnxdEdSc95
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
        id: c_JU5C2Q5IjHMjFU8Ol5dcT4
        subject_person_id: p_kczQmxP52MnpzK7NJpeo6m
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_wKQiP1EfRixbApmFB2CXep
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gbP_pLu05ZAMW46ISkoWkT
          claim_id: c_JU5C2Q5IjHMjFU8Ol5dcT4
          source_id: s_qDfyLES5d8BYBFzHttHiHM
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qDfyLES5d8BYBFzHttHiHM
            source_type: api_record
            title: 中国历代人物传记资料库：王克誠（CBDB 287040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json
            external_identifier: CBDB:287040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kczQmxP52MnpzK7NJpeo6m
        status: active
        display_name: 王克誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| birth.date | 1387年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_kczQmxP52MnpzK7NJpeo6m | 王克誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克誠（CBDB 287040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287040&o=json)
- [中国历代人物传记资料库：王詢（CBDB 202367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202367&o=json)
