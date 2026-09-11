---
schema: wang-person/v1
id: p_GwAsY33Fpgfxg9Nmr4UCTR
status: active
merged_into: null
display_name: 王廷彥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FiLTNce6BjXPNCfbWA8dXB
        subject_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTmaTD9WCioLPV3fU7Ca8X
          claim_id: c_FiLTNce6BjXPNCfbWA8dXB
          source_id: s_JPx4rtnD2GC9ic14HUNwka
          stance: supports
          locator: CBDB:555114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555114）
          source: &a1
            id: s_JPx4rtnD2GC9ic14HUNwka
            source_type: api_record
            title: 中国历代人物传记资料库：王廷彥（CBDB 555114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555114&o=json
            external_identifier: CBDB:555114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gLQDdF1dubhbeECpboVH7Z
        subject_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷彥，清人物。籍贯南召，入仕邑庠生。（中国历代人物传记资料库 CBDB 555114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_H79t9QND4-m8gOc5XutLJ1
          claim_id: c_gLQDdF1dubhbeECpboVH7Z
          source_id: s_JPx4rtnD2GC9ic14HUNwka
          stance: supports
          locator: CBDB:555114
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VqBv60jrC6nJdfPCsIT8gW
        subject_person_id: p_C1WzvioYLhRubASkP1WBiN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GwAsY33Fpgfxg9Nmr4UCTR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95wtsC4LIQCL_1IgTkQrac
          claim_id: c_VqBv60jrC6nJdfPCsIT8gW
          source_id: s_DDtRPZKcPivN6L8wbJk8FY
          stance: supports
          locator: 南陽府志，lgid=878687：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DDtRPZKcPivN6L8wbJk8FY
            source_type: api_record
            title: 中国历代人物传记资料库：王化育（CBDB 555112）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555112&o=json
            external_identifier: CBDB:555112
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C1WzvioYLhRubASkP1WBiN
        status: active
        display_name: 王化育
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷彥 | accepted |
| bio.summary | 王廷彥，清人物。籍贯南召，入仕邑庠生。（中国历代人物传记资料库 CBDB 555114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C1WzvioYLhRubASkP1WBiN | 王化育 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化育（CBDB 555112）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555112&o=json)
- [中国历代人物传记资料库：王廷彥（CBDB 555114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555114&o=json)
