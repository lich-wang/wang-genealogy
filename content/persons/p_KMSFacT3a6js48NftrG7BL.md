---
schema: wang-person/v1
id: p_KMSFacT3a6js48NftrG7BL
status: active
merged_into: null
display_name: 蔡氏
revision: 1
cbdb_id: 111639
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sYcir_psB5tFjEozpNH0SU
        subject_person_id: p_KMSFacT3a6js48NftrG7BL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 蔡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_98-AmexhiBNNwGkLQ7mMRN
          claim_id: c_sYcir_psB5tFjEozpNH0SU
          source_id: s_QMaZmUbiBNRQMTjPcdbGUj
          stance: supports
          locator: CBDB:111639
          quotation: null
          interpretation_note: CBDB 明确记录的王琪配偶
          source: &a1
            id: s_QMaZmUbiBNRQMTjPcdbGUj
            source_type: api_record
            title: 中国历代人物传记资料库：蔡氏(王琪妻)（CBDB 111639）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=111639&o=json
            external_identifier: CBDB:111639
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_wBwOKFki5KgM9hKfaNPc42
        subject_person_id: p_61MracwQYrRAZJXHCZuU6c
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KMSFacT3a6js48NftrG7BL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cU1DkWUS_DX3_go36gumX7
          claim_id: c_wBwOKFki5KgM9hKfaNPc42
          source_id: s_QMaZmUbiBNRQMTjPcdbGUj
          stance: supports
          locator: 元人傳記資料索引，12439：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_61MracwQYrRAZJXHCZuU6c
        status: active
        display_name: 王琪
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 蔡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 蔡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_61MracwQYrRAZJXHCZuU6c | 王琪 | accepted |

## 外部来源

- [中国历代人物传记资料库：蔡氏(王琪妻)（CBDB 111639）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=111639&o=json)
