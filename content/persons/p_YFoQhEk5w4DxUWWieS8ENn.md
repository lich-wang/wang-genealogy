---
schema: wang-person/v1
id: p_YFoQhEk5w4DxUWWieS8ENn
status: active
merged_into: null
display_name: 王官正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hR2tyzGe8K2To862NmT3Dd
        subject_person_id: p_YFoQhEk5w4DxUWWieS8ENn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H1v1MPwgs24GHAr5Jco34F
          claim_id: c_hR2tyzGe8K2To862NmT3Dd
          source_id: s_6vMhg5RmsHJ5GLHCPmPpGm
          stance: supports
          locator: CBDB:637130
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637130）
          source: &a1
            id: s_6vMhg5RmsHJ5GLHCPmPpGm
            source_type: api_record
            title: 中国历代人物传记资料库：王官正（CBDB 637130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637130&o=json
            external_identifier: CBDB:637130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.212Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TujhxJArWU7KgoDQAAc1T6
        subject_person_id: p_YFoQhEk5w4DxUWWieS8ENn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王官正，清人物。籍贯河間，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637130）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LwCZ-1-8eFWycNolvcLSEJ
          claim_id: c_TujhxJArWU7KgoDQAAc1T6
          source_id: s_6vMhg5RmsHJ5GLHCPmPpGm
          stance: supports
          locator: CBDB:637130
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
  descendants: []
  other: []
---

# 王官正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王官正 | accepted |
| bio.summary | 王官正，清人物。籍贯河間，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637130） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王官正（CBDB 637130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637130&o=json)
