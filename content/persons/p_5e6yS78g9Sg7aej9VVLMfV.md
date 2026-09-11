---
schema: wang-person/v1
id: p_5e6yS78g9Sg7aej9VVLMfV
status: active
merged_into: null
display_name: 王衍
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ceuAvrbMRDyuRRBX3eKWKV
        subject_person_id: p_5e6yS78g9Sg7aej9VVLMfV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8GH925JKBG76U9iA32g1CJ
          claim_id: c_ceuAvrbMRDyuRRBX3eKWKV
          source_id: s_hyVTQ7Z82XVZuMBAYTHMFt
          stance: supports
          locator: CBDB:295377
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295377）
          source: &a1
            id: s_hyVTQ7Z82XVZuMBAYTHMFt
            source_type: api_record
            title: 中国历代人物传记资料库：王衍（CBDB 295377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295377&o=json
            external_identifier: CBDB:295377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.489Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fA9fWtK71mvS9k7amKMtGq
        subject_person_id: p_5e6yS78g9Sg7aej9VVLMfV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衍，明人物。嘉靖十四年進士，曾任百戶。（中国历代人物传记资料库 CBDB 295377）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fwxhZF2emLuSIbGc0L68vZ
          claim_id: c_fA9fWtK71mvS9k7amKMtGq
          source_id: s_hyVTQ7Z82XVZuMBAYTHMFt
          stance: supports
          locator: CBDB:295377
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
        id: c_mJ3kCV6SCgKgVcQR8RVGjn
        subject_person_id: p_5e6yS78g9Sg7aej9VVLMfV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ivscx0KkRqsoWrd0YcjHzA
          claim_id: c_mJ3kCV6SCgKgVcQR8RVGjn
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
  other: []
---

# 王衍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衍 | accepted |
| bio.summary | 王衍，明人物。嘉靖十四年進士，曾任百戶。（中国历代人物传记资料库 CBDB 295377） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
- [中国历代人物传记资料库：王衍（CBDB 295377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295377&o=json)
