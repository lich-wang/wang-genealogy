---
schema: wang-person/v1
id: p_yE8R4Fu2xBRHQnxP4vnrau
status: active
merged_into: null
display_name: 王寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BWrov8rrXE3w2P11gGdDqP
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hq1N4YcwnP7KWKJNFgtZuV
          claim_id: c_BWrov8rrXE3w2P11gGdDqP
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: CBDB:201843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201843）
          source: &a1
            id: s_dd11Ucp3nBYq5pLBRoWsZ8
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 201843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json
            external_identifier: CBDB:201843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZJNM5Tn2gW1D9i4m3JU9Te
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1483年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ESFKCewjNzx9yBDRFneWxp
          claim_id: c_ZJNM5Tn2gW1D9i4m3JU9Te
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
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
        id: c_Kd5q1aF7uvge6z27DqnehN
        subject_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
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
        - id: cs_P5FFcrVFNUfQBfj1tpSe7q
          claim_id: c_Kd5q1aF7uvge6z27DqnehN
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
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
        id: c_xSv-Ep-KvbMPH7w_QufvCv
        subject_person_id: p_xFFdPdJwKEcff8qRsr4b53
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6aIGbMTpxw76Pze_u0g11
          claim_id: c_xSv-Ep-KvbMPH7w_QufvCv
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xFFdPdJwKEcff8qRsr4b53
        status: active
        display_name: 王紹紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_iemBz_6Y5hyZswpNKw4sGz
        subject_person_id: p_gmSkBYBnj6AUDqkC7pewDS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uby6xaCWTSlBwa27NZtNah
          claim_id: c_iemBz_6Y5hyZswpNKw4sGz
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gmSkBYBnj6AUDqkC7pewDS
        status: active
        display_name: 王某選
        merged_into_person_id: null
    - claim:
        id: c_rMcXaTlHmS0773bm1lM6YU
        subject_person_id: p_2EDQ55UQpfwb7UC1C3XQAT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yE8R4Fu2xBRHQnxP4vnrau
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SZxy0L7T7JDFm1o4x2blKt
          claim_id: c_rMcXaTlHmS0773bm1lM6YU
          source_id: s_dd11Ucp3nBYq5pLBRoWsZ8
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百零六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2EDQ55UQpfwb7UC1C3XQAT
        status: active
        display_name: 王郁文
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| birth.date | 1483年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xFFdPdJwKEcff8qRsr4b53 | 王紹紀 | accepted |
| ancestors | p_gmSkBYBnj6AUDqkC7pewDS | 王某選 | accepted |
| ancestors | p_2EDQ55UQpfwb7UC1C3XQAT | 王郁文 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寧（CBDB 201843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201843&o=json)
