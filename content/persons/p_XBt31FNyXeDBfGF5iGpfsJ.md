---
schema: wang-person/v1
id: p_XBt31FNyXeDBfGF5iGpfsJ
status: active
merged_into: null
display_name: 王永忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rnAJQzp47DEXYebHD53Q2q
        subject_person_id: p_XBt31FNyXeDBfGF5iGpfsJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bL6Hn5yBHFEWfM5HCyguYT
          claim_id: c_rnAJQzp47DEXYebHD53Q2q
          source_id: s_GMH4Enskpb9dEAFM3PyLvS
          stance: supports
          locator: CBDB:242448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242448）
          source: &a1
            id: s_GMH4Enskpb9dEAFM3PyLvS
            source_type: api_record
            title: 中国历代人物传记资料库：王永忠（CBDB 242448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242448&o=json
            external_identifier: CBDB:242448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tRLy83jeDc9qq742AAa7ZE
        subject_person_id: p_XBt31FNyXeDBfGF5iGpfsJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永忠，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 242448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TflZ6_R_JWeab-MS3AtfpD
          claim_id: c_tRLy83jeDc9qq742AAa7ZE
          source_id: s_GMH4Enskpb9dEAFM3PyLvS
          stance: supports
          locator: CBDB:242448
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
        id: c_Uf012uOHuscz53660M5ONQ
        subject_person_id: p_XBt31FNyXeDBfGF5iGpfsJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kx6D7JNFNVC8j5PdXCMLCd
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-1G9WeQPKBWLCoNZBXo1Lq
          claim_id: c_Uf012uOHuscz53660M5ONQ
          source_id: s_GMH4Enskpb9dEAFM3PyLvS
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百三十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kx6D7JNFNVC8j5PdXCMLCd
        status: active
        display_name: 王弼
        merged_into_person_id: null
  other: []
---

# 王永忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永忠 | accepted |
| bio.summary | 王永忠，明人物。成化二年進士。（中国历代人物传记资料库 CBDB 242448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_kx6D7JNFNVC8j5PdXCMLCd | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永忠（CBDB 242448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242448&o=json)
