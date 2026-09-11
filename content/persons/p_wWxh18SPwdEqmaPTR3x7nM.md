---
schema: wang-person/v1
id: p_wWxh18SPwdEqmaPTR3x7nM
status: active
merged_into: null
display_name: 王景緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tzXeHATEBTanZT1587Vwju
        subject_person_id: p_wWxh18SPwdEqmaPTR3x7nM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4iVfKkEcs2BHpLc3U5dFLL
          claim_id: c_tzXeHATEBTanZT1587Vwju
          source_id: s_8PxFxt1gFM3Dc6c3Xu22G8
          stance: supports
          locator: CBDB:638504
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638504）
          source: &a1
            id: s_8PxFxt1gFM3Dc6c3Xu22G8
            source_type: api_record
            title: 中国历代人物传记资料库：王景緒（CBDB 638504）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638504&o=json
            external_identifier: CBDB:638504
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4jgXGojhGY2AJsXFsBpULn
        subject_person_id: p_wWxh18SPwdEqmaPTR3x7nM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景緒，清人物。籍贯福山，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 638504）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FuGgIhBq6ZInRhWnluzayh
          claim_id: c_4jgXGojhGY2AJsXFsBpULn
          source_id: s_8PxFxt1gFM3Dc6c3Xu22G8
          stance: supports
          locator: CBDB:638504
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

# 王景緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景緒 | accepted |
| bio.summary | 王景緒，清人物。籍贯福山，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 638504） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景緒（CBDB 638504）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638504&o=json)
