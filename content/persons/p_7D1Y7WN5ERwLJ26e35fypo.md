---
schema: wang-person/v1
id: p_7D1Y7WN5ERwLJ26e35fypo
status: active
merged_into: null
display_name: 王希賢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bH5dowvbhhnzWxiupc9dkW
        subject_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fcMPM384KKhMoRoPKfBU7
          claim_id: c_bH5dowvbhhnzWxiupc9dkW
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: CBDB:202984
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202984）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_t8xNq9XHsdyCfmF2BqD7XB
        subject_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1494年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSxkx3miJTzybB5QyG2bYi
          claim_id: c_t8xNq9XHsdyCfmF2BqD7XB
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
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
        id: c_3gt21YEG8rwsxnQp1dby2P
        subject_person_id: p_7D1Y7WN5ERwLJ26e35fypo
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
        - id: cs_eLeZccyWnhJa9gwQokRRQ3
          claim_id: c_3gt21YEG8rwsxnQp1dby2P
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
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
          source: *a1
      object_person:
        id: p_VnWWyMNETF5CNaLsFiYtAd
        status: active
        display_name: 王肅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_oc4qLlHTRVfuSsZMcmGNZ2
        subject_person_id: p_QJQHNHpFHc52Kek4hVNKqE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z57BP1NxpqZnTytz_aGqDN
          claim_id: c_oc4qLlHTRVfuSsZMcmGNZ2
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QJQHNHpFHc52Kek4hVNKqE
        status: active
        display_name: 王有才
        merged_into_person_id: null
    - claim:
        id: c_onwKMqW7TUBrVW5jEwEKLo
        subject_person_id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7D1Y7WN5ERwLJ26e35fypo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fOWobxXaog050F8YtxX1as
          claim_id: c_onwKMqW7TUBrVW5jEwEKLo
          source_id: s_PMHJGMbGKztLxoRHDL7wWN
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百六十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Kn1Eb6H5Vah5YhsE3Y4hEt
        status: active
        display_name: 王泰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王希賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希賢 | accepted |
| birth.date | 1494年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VnWWyMNETF5CNaLsFiYtAd | 王肅 | accepted |
| ancestors | p_QJQHNHpFHc52Kek4hVNKqE | 王有才 | accepted |
| ancestors | p_Kn1Eb6H5Vah5YhsE3Y4hEt | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希賢（CBDB 202984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202984&o=json)
