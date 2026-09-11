---
schema: wang-person/v1
id: p_JMi8VHjJbhj4BHFXH5in71
status: active
merged_into: null
display_name: 阿魯渾氏
revision: 1
cbdb_id: 35035
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QUWcHlPuzbbWeDsCl_Selb
        subject_person_id: p_JMi8VHjJbhj4BHFXH5in71
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 阿魯渾氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHHMVAnJUVKEBBTxR6mCSu
          claim_id: c_QUWcHlPuzbbWeDsCl_Selb
          source_id: s_ckZ3KrB5Naepd1jatZV39f
          stance: supports
          locator: CBDB:35035
          quotation: null
          interpretation_note: CBDB 明确记录的王結配偶
          source: &a1
            id: s_ckZ3KrB5Naepd1jatZV39f
            source_type: api_record
            title: 中国历代人物传记资料库：阿魯渾氏(王結妻)（CBDB 35035）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35035&o=json
            external_identifier: CBDB:35035
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
        id: c_LeID5pC2Pzqs8c5DywxsqY
        subject_person_id: p_mr7WL1H5XRA2PNx82Aovox
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JMi8VHjJbhj4BHFXH5in71
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pdk77mWhvYZbKCKxiZOVpD
          claim_id: c_LeID5pC2Pzqs8c5DywxsqY
          source_id: s_ckZ3KrB5Naepd1jatZV39f
          stance: supports
          locator: CBDB 双向互证（妻子 阿魯渾氏(王結妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mr7WL1H5XRA2PNx82Aovox
        status: active
        display_name: 王結
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 阿魯渾氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 阿魯渾氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mr7WL1H5XRA2PNx82Aovox | 王結 | accepted |

## 外部来源

- [中国历代人物传记资料库：阿魯渾氏(王結妻)（CBDB 35035）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35035&o=json)
