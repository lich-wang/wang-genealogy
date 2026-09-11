---
schema: wang-person/v1
id: p_V5tUM2QCfqRkrWxKniVuNJ
status: active
merged_into: null
display_name: 王允中
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bBuA1ekSMhFPDcCqP3zoNs
        subject_person_id: p_V5tUM2QCfqRkrWxKniVuNJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TTGYH7xHh2HvmHQryF3Bm6
          claim_id: c_bBuA1ekSMhFPDcCqP3zoNs
          source_id: s_Z6TYHDpzGVQnDCHoopN24Q
          stance: supports
          locator: CBDB:335599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335599）
          source: &a1
            id: s_Z6TYHDpzGVQnDCHoopN24Q
            source_type: api_record
            title: 中国历代人物传记资料库：王允中（CBDB 335599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335599&o=json
            external_identifier: CBDB:335599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.461Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LHKbRVPyycJQcWpRH5ktYb
        subject_person_id: p_V5tUM2QCfqRkrWxKniVuNJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允中，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 335599）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FPJHxtSGBqQagZiyeMDFBE
          claim_id: c_LHKbRVPyycJQcWpRH5ktYb
          source_id: s_Z6TYHDpzGVQnDCHoopN24Q
          stance: supports
          locator: CBDB:335599
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_-Hs5TKXiuyr7Zanls2On4B
        subject_person_id: p_V5tUM2QCfqRkrWxKniVuNJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RPTGuNk7UCyXG66UZ8YB1y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8w0wivl2BIXFyA3RSvxk4x
          claim_id: c_-Hs5TKXiuyr7Zanls2On4B
          source_id: s_Z6TYHDpzGVQnDCHoopN24Q
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RPTGuNk7UCyXG66UZ8YB1y
        status: active
        display_name: 王琮
        merged_into_person_id: null
  other: []
---

# 王允中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允中 | accepted |
| bio.summary | 王允中，明人物。天順八年進士。（中国历代人物传记资料库 CBDB 335599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_RPTGuNk7UCyXG66UZ8YB1y | 王琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王允中（CBDB 335599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335599&o=json)
