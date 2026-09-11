---
schema: wang-person/v1
id: p_TiUdEhG1LMC9f51Xgx1RW7
status: active
merged_into: null
display_name: 王鎰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UgWNMJJggUmGLk9oDTC4k7
        subject_person_id: p_TiUdEhG1LMC9f51Xgx1RW7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kdiPXGCsmK6mk7XmkjLzTM
          claim_id: c_UgWNMJJggUmGLk9oDTC4k7
          source_id: s_P9ctKRt2fTAFApRDeLg8WR
          stance: supports
          locator: CBDB:23476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23476）
          source: &a1
            id: s_P9ctKRt2fTAFApRDeLg8WR
            source_type: api_record
            title: 中国历代人物传记资料库：王鎰（CBDB 23476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23476&o=json
            external_identifier: CBDB:23476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.881Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rmnVEUChv65Ck5XFTMCuGd
        subject_person_id: p_TiUdEhG1LMC9f51Xgx1RW7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dd1LbP11MNMR73eecVEQPQ
          claim_id: c_rmnVEUChv65Ck5XFTMCuGd
          source_id: s_P9ctKRt2fTAFApRDeLg8WR
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
        id: c_zwt2sWzBDLYecVOtMycJ3n
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_TiUdEhG1LMC9f51Xgx1RW7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WXdipDVYmw_N_YW8KAMpjz
          claim_id: c_zwt2sWzBDLYecVOtMycJ3n
          source_id: s_P9ctKRt2fTAFApRDeLg8WR
          stance: supports
          locator: 紹興十八年同年小錄，136：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XNnEJW93RJQ51JNrQsQRTJ
        status: active
        display_name: 王彥
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鎰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎰 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_XNnEJW93RJQ51JNrQsQRTJ | 王彥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎰（CBDB 23476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23476&o=json)
