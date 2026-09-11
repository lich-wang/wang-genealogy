---
schema: wang-person/v1
id: p_25z6AQSkgZBPn8HDYEWRrE
status: active
merged_into: null
display_name: 鄭氏
revision: 1
cbdb_id: 147262
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2ZpxtjONjy-S_f5vdEOHBS
        subject_person_id: p_25z6AQSkgZBPn8HDYEWRrE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄭氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ThQ4zfp6TipAXMFLJCx9Ef
          claim_id: c_2ZpxtjONjy-S_f5vdEOHBS
          source_id: s_EFrxs4dUexmFpG9D2nq9iv
          stance: supports
          locator: CBDB:147262
          quotation: null
          interpretation_note: CBDB 明确记录的王惠配偶
          source: &a1
            id: s_EFrxs4dUexmFpG9D2nq9iv
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王惠妻)（CBDB 147262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147262&o=json
            external_identifier: CBDB:147262
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
        id: c_uONaLJWfYcOB1DYnLKMRYA
        subject_person_id: p_G5XZTGp3A73cVnQtTBjVpP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_25z6AQSkgZBPn8HDYEWRrE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ovcv-wl__KdCKYX7UrTQ6N
          claim_id: c_uONaLJWfYcOB1DYnLKMRYA
          source_id: s_EFrxs4dUexmFpG9D2nq9iv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonghui 142：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_G5XZTGp3A73cVnQtTBjVpP
        status: active
        display_name: 王惠
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 鄭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_G5XZTGp3A73cVnQtTBjVpP | 王惠 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄭氏(王惠妻)（CBDB 147262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147262&o=json)
