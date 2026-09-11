---
schema: wang-person/v1
id: p_VnWWyMNETF5CNaLsFiYtAd
status: active
merged_into: null
display_name: 王肅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7kyYZ63teVhEbGT2EVTKEB
        subject_person_id: p_VnWWyMNETF5CNaLsFiYtAd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DW2R3j7q9Qo7R7rowaa8Mx
          claim_id: c_7kyYZ63teVhEbGT2EVTKEB
          source_id: s_h74F9RintZ3DQuXAH2xYtv
          stance: supports
          locator: CBDB:297870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297870）
          source: &a1
            id: s_h74F9RintZ3DQuXAH2xYtv
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 297870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297870&o=json
            external_identifier: CBDB:297870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PNQdf6mDdB2NUAD67KyvB1
        subject_person_id: p_VnWWyMNETF5CNaLsFiYtAd
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
        - id: cs_Q7tLbpKBLa3AUf3WbPxpUj
          claim_id: c_PNQdf6mDdB2NUAD67KyvB1
          source_id: s_h74F9RintZ3DQuXAH2xYtv
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
        id: c_4q2smbxpy_m8hIJNS-L1ya
        subject_person_id: p_VnWWyMNETF5CNaLsFiYtAd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iAb46nvrt8kWYT324yuzBz
          claim_id: c_4q2smbxpy_m8hIJNS-L1ya
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PMHJGMbGKztLxoRHDL7wWN
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 202984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json
            external_identifier: CBDB:202984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.769Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7D1Y7WN5ERwLJ26e35fypo
        status: active
        display_name: 王希賢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7D1Y7WN5ERwLJ26e35fypo | 王希賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 297870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297870&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 202984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json)
