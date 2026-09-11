---
schema: wang-person/v1
id: p_uEcTfswie4QmwwYkcLQnJ5
status: active
merged_into: null
display_name: 王烜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jxwdV81V4SbMkGbvWQeTMx
        subject_person_id: p_uEcTfswie4QmwwYkcLQnJ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GnCVdhaqskZda76N3FDH5Y
          claim_id: c_jxwdV81V4SbMkGbvWQeTMx
          source_id: s_7P9P8QUy5UepQ6Md115RGk
          stance: supports
          locator: CBDB:309976
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309976）
          source: &a1
            id: s_7P9P8QUy5UepQ6Md115RGk
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 309976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309976&o=json
            external_identifier: CBDB:309976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DkGm31vd6qqwbX9C46GF1S
        subject_person_id: p_uEcTfswie4QmwwYkcLQnJ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309976）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PuwA6I1nW7Pxz3p2FzdNIt
          claim_id: c_DkGm31vd6qqwbX9C46GF1S
          source_id: s_7P9P8QUy5UepQ6Md115RGk
          stance: supports
          locator: CBDB:309976
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
        id: c__maOhUKXNZQF4NJXVK9UY7
        subject_person_id: p_uEcTfswie4QmwwYkcLQnJ5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_zCPZcY2xcN9dUGQk5upMkt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1E_Y8H0ferdwcR5-3picL
          claim_id: c__maOhUKXNZQF4NJXVK9UY7
          source_id: s_7P9P8QUy5UepQ6Md115RGk
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zCPZcY2xcN9dUGQk5upMkt
        status: active
        display_name: 王鈴
        merged_into_person_id: null
  other: []
---

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | 王烜，明人物。嘉靖二十六年進士。（中国历代人物传记资料库 CBDB 309976） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_zCPZcY2xcN9dUGQk5upMkt | 王鈴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 309976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309976&o=json)
