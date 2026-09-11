---
schema: wang-person/v1
id: p_SvPgtAZ6xmVpkyCuSarwR8
status: active
merged_into: null
display_name: 王以誠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M4D3MJph5ug7NmQS7DVZP7
        subject_person_id: p_SvPgtAZ6xmVpkyCuSarwR8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tX5u2L7w6sVH1NJAg3537v
          claim_id: c_M4D3MJph5ug7NmQS7DVZP7
          source_id: s_P7GCGADa274zqycSvzvY7M
          stance: supports
          locator: CBDB:322886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（322886）
          source: &a1
            id: s_P7GCGADa274zqycSvzvY7M
            source_type: api_record
            title: 中国历代人物传记资料库：王以誠（CBDB 322886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322886&o=json
            external_identifier: CBDB:322886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9LzgR5h8g7j3HpJhcu4KPJ
        subject_person_id: p_SvPgtAZ6xmVpkyCuSarwR8
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
        - id: cs_9gUqpf2F4AsQ1gumEBa2yC
          claim_id: c_9LzgR5h8g7j3HpJhcu4KPJ
          source_id: s_P7GCGADa274zqycSvzvY7M
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
  ancestors: []
  descendants:
    - claim:
        id: c_FbMi0Oy5b_E4c_fsCuINez
        subject_person_id: p_SvPgtAZ6xmVpkyCuSarwR8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_fngUDbgD5w2bFevKYCEogv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LzQsyRl46LRGAyX4DJCZrC
          claim_id: c_FbMi0Oy5b_E4c_fsCuINez
          source_id: s_CU91xn6DkLaeRJP93mtoUf
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第九十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CU91xn6DkLaeRJP93mtoUf
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 126885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json
            external_identifier: CBDB:126885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fngUDbgD5w2bFevKYCEogv
        status: active
        display_name: 王霽
        merged_into_person_id: null
  other: []
---

# 王以誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以誠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_fngUDbgD5w2bFevKYCEogv | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王霽（CBDB 126885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126885&o=json)
- [中国历代人物传记资料库：王以誠（CBDB 322886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322886&o=json)
