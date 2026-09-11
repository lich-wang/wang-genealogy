---
schema: wang-person/v1
id: p_CqoXtbYtPK4GM5A6zB25Z1
status: active
merged_into: null
display_name: 王彥實
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oA2UJYhsmEtY5bz7UabYWv
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥實
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdrJZWtXMg8MU7VyEzm61r
          claim_id: c_oA2UJYhsmEtY5bz7UabYWv
          source_id: s_shrh2vvQn1AJaxuJJ96F8f
          stance: supports
          locator: CBDB:231565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231565）
          source: &a1
            id: s_shrh2vvQn1AJaxuJJ96F8f
            source_type: api_record
            title: 中国历代人物传记资料库：王彥實（CBDB 231565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json
            external_identifier: CBDB:231565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_71vQDZvL5PRdNi64KDrfGs
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥實，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_85nWzQiHEIg0Yf2eVwvioP
          claim_id: c_71vQDZvL5PRdNi64KDrfGs
          source_id: s_shrh2vvQn1AJaxuJJ96F8f
          stance: supports
          locator: CBDB:231565
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_cRoRWvOqKige3KuzuY7dDX
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4bu2im8699zCsccbtJF1P5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fu-cU9l6xGMfmZknx_BAnH
          claim_id: c_cRoRWvOqKige3KuzuY7dDX
          source_id: s_kEMvWdXNEMrMUFHnwDnn61
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kEMvWdXNEMrMUFHnwDnn61
            source_type: api_record
            title: 中国历代人物传记资料库：王亮（CBDB 207345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json
            external_identifier: CBDB:207345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4bu2im8699zCsccbtJF1P5
        status: active
        display_name: 王某中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jQxggGBw_1qoY5zbESd0PG
        subject_person_id: p_CqoXtbYtPK4GM5A6zB25Z1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1GhPFs5m4G2BPwjpU26jtR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z0XDQ9F5I1jk_S7_JgsiUr
          claim_id: c_jQxggGBw_1qoY5zbESd0PG
          source_id: s_shrh2vvQn1AJaxuJJ96F8f
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_1GhPFs5m4G2BPwjpU26jtR
        status: active
        display_name: 王亮
        merged_into_person_id: null
  other: []
---

# 王彥實

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥實 | accepted |
| bio.summary | 王彥實，明人物。宣德八年進士。（中国历代人物传记资料库 CBDB 231565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4bu2im8699zCsccbtJF1P5 | 王某中 | accepted |
| descendants | p_1GhPFs5m4G2BPwjpU26jtR | 王亮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亮（CBDB 207345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207345&o=json)
- [中国历代人物传记资料库：王彥實（CBDB 231565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231565&o=json)
