---
schema: wang-person/v1
id: p_BANzoscavVsXeNx9ykHKpT
status: active
merged_into: null
display_name: 王垂
cbdb_id: 97838
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kGMpFjYaz3KqH9UYKCrvB6
        subject_person_id: p_BANzoscavVsXeNx9ykHKpT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂，宋人物。入仕進士，曾任朝奉郎。（中国历代人物传记资料库 CBDB 97838）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EiumI0RgIpVMUgTpk41uOb
          claim_id: c_kGMpFjYaz3KqH9UYKCrvB6
          source_id: s_Ag2xwuwq6bSDHwHTkCYTEp
          stance: supports
          locator: CBDB:97838
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ag2xwuwq6bSDHwHTkCYTEp
            source_type: api_record
            title: 中国历代人物传记资料库：王垂（CBDB 97838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97838&o=json
            external_identifier: CBDB:97838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.831Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Y2WU4VwahCCSRrUJwsM6X
        subject_person_id: p_BANzoscavVsXeNx9ykHKpT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_zoP4o16NLCZKHhPCXDUu8X
          claim_id: c_8Y2WU4VwahCCSRrUJwsM6X
          source_id: s_Ag2xwuwq6bSDHwHTkCYTEp
          stance: supports
          locator: CBDB:97838
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1501-1600）｜历史性依据：CBDB 朝代 = 宋
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

# 王垂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王垂，宋人物。入仕進士，曾任朝奉郎。（中国历代人物传记资料库 CBDB 97838） | accepted |
| name.primary | 王垂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王垂（CBDB 97838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97838&o=json)
