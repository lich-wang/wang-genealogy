---
schema: wang-person/v1
id: p_j6xyLhnW3CCvvAvgNwcpP8
status: active
merged_into: null
display_name: 王禧生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r8mxsuD9Ga76LSf3mGWqP2
        subject_person_id: p_j6xyLhnW3CCvvAvgNwcpP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P6TdG6DWxi7p7pdwVcFAcf
          claim_id: c_r8mxsuD9Ga76LSf3mGWqP2
          source_id: s_XJKZJ5pUVTCedULag86DJi
          stance: supports
          locator: CBDB:639623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639623）
          source: &a1
            id: s_XJKZJ5pUVTCedULag86DJi
            source_type: api_record
            title: 中国历代人物传记资料库：王禧生（CBDB 639623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639623&o=json
            external_identifier: CBDB:639623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EfPseFMVkq9jzMCX8KMcMn
        subject_person_id: p_j6xyLhnW3CCvvAvgNwcpP8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禧生，清人物。籍贯江寧，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 639623）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WE58YxVhF-MfJKBZoX3nSp
          claim_id: c_EfPseFMVkq9jzMCX8KMcMn
          source_id: s_XJKZJ5pUVTCedULag86DJi
          stance: supports
          locator: CBDB:639623
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

# 王禧生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禧生 | accepted |
| bio.summary | 王禧生，清人物。籍贯江寧，入仕附貢生，曾任經歷。（中国历代人物传记资料库 CBDB 639623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禧生（CBDB 639623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639623&o=json)
