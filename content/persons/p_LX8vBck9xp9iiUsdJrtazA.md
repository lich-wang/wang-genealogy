---
schema: wang-person/v1
id: p_LX8vBck9xp9iiUsdJrtazA
status: active
merged_into: null
display_name: 王廷璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DwFnSbT1oNyfes5FULNuLi
        subject_person_id: p_LX8vBck9xp9iiUsdJrtazA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3JJf3YC6Za8Bo3deCbepyg
          claim_id: c_DwFnSbT1oNyfes5FULNuLi
          source_id: s_hBsq6fAy1AezqQsTSpAhht
          stance: supports
          locator: CBDB:465123
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（465123）
          source: &a1
            id: s_hBsq6fAy1AezqQsTSpAhht
            source_type: api_record
            title: 中国历代人物传记资料库：王廷璧（CBDB 465123）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465123&o=json
            external_identifier: CBDB:465123
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xPtMBXDT3B1J2dL3MCNJbW
        subject_person_id: p_LX8vBck9xp9iiUsdJrtazA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷璧，明人物。曾任典史。（中国历代人物传记资料库 CBDB 465123）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xWvq7ivbazx_44xnSa7EHa
          claim_id: c_xPtMBXDT3B1J2dL3MCNJbW
          source_id: s_hBsq6fAy1AezqQsTSpAhht
          stance: supports
          locator: CBDB:465123
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

# 王廷璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷璧 | accepted |
| bio.summary | 王廷璧，明人物。曾任典史。（中国历代人物传记资料库 CBDB 465123） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷璧（CBDB 465123）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=465123&o=json)
