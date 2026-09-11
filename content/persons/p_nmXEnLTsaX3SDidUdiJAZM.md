---
schema: wang-person/v1
id: p_nmXEnLTsaX3SDidUdiJAZM
status: active
merged_into: null
display_name: 王廣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pw2RjVpa8pQe1z7NQdKucW
        subject_person_id: p_nmXEnLTsaX3SDidUdiJAZM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7iAG1dCZThpA8RaLaHUWrf
          claim_id: c_pw2RjVpa8pQe1z7NQdKucW
          source_id: s_59y65qQyrDP96UmKGX7Hoj
          stance: supports
          locator: CBDB:281041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281041）
          source: &a1
            id: s_59y65qQyrDP96UmKGX7Hoj
            source_type: api_record
            title: 中国历代人物传记资料库：王廣（CBDB 281041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281041&o=json
            external_identifier: CBDB:281041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kQ7aaNJvyAFMWT982WFqrX
        subject_person_id: p_nmXEnLTsaX3SDidUdiJAZM
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
        - id: cs_mFQfjPKSFaUEfm2syrgkUL
          claim_id: c_kQ7aaNJvyAFMWT982WFqrX
          source_id: s_59y65qQyrDP96UmKGX7Hoj
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
        id: c_hKOBVa-Gq1kIfFcY6W7GSl
        subject_person_id: p_nmXEnLTsaX3SDidUdiJAZM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xiQHfRNHwLsyPyYXPYONsF
          claim_id: c_hKOBVa-Gq1kIfFcY6W7GSl
          source_id: s_59y65qQyrDP96UmKGX7Hoj
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PNbNcPEUfkwixuHyP9PuYH
        status: active
        display_name: 王上齡
        merged_into_person_id: null
  other: []
---

# 王廣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_PNbNcPEUfkwixuHyP9PuYH | 王上齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣（CBDB 281041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281041&o=json)
