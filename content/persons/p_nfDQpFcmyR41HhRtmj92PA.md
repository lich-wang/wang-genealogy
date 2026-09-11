---
schema: wang-person/v1
id: p_nfDQpFcmyR41HhRtmj92PA
status: active
merged_into: null
display_name: 王愷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kb9ypJH7JM5pFTmwxQwV2c
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zNVa1znqbtf7FqXFUuMrNC
          claim_id: c_Kb9ypJH7JM5pFTmwxQwV2c
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: CBDB:300441
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300441）
          source: &a1
            id: s_gLqYcPwPC3KJqKEtZKNiXV
            source_type: api_record
            title: 中国历代人物传记资料库：王愷（CBDB 300441）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json
            external_identifier: CBDB:300441
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_99Kq9A9nZuK4DdtMYkh4Yj
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愷，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300441）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9dnwOtjOBmmxZJxiQA7pGz
          claim_id: c_99Kq9A9nZuK4DdtMYkh4Yj
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: CBDB:300441
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Y8ZY2Ll-u9AuQvYN8ownzN
        subject_person_id: p_nfDQpFcmyR41HhRtmj92PA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VsUEBsvkAXXbA9FWfTN5pA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U90p_UqBTCR3Y9MXVj5RC5
          claim_id: c_Y8ZY2Ll-u9AuQvYN8ownzN
          source_id: s_gLqYcPwPC3KJqKEtZKNiXV
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第六十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VsUEBsvkAXXbA9FWfTN5pA
        status: active
        display_name: 王國禎
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王愷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愷 | accepted |
| bio.summary | 王愷，明人物。嘉靖十七年進士，籍贯山陰。（中国历代人物传记资料库 CBDB 300441） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VsUEBsvkAXXbA9FWfTN5pA | 王國禎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愷（CBDB 300441）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300441&o=json)
