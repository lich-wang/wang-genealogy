---
schema: wang-person/v1
id: p_G2DaGDf4dU4r6XUsJecRF4
status: active
merged_into: null
display_name: 王舜卿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s3EZ9rM8enhV4kNWiq5Cuw
        subject_person_id: p_G2DaGDf4dU4r6XUsJecRF4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_roZcGQUJqEgq65K6Ens4GH
          claim_id: c_s3EZ9rM8enhV4kNWiq5Cuw
          source_id: s_SVEJZHeDGD91HGLKaxnj3T
          stance: supports
          locator: CBDB:38147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38147）
          source: &a1
            id: s_SVEJZHeDGD91HGLKaxnj3T
            source_type: api_record
            title: 中国历代人物传记资料库：王舜卿（CBDB 38147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38147&o=json
            external_identifier: CBDB:38147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YB32X6LCUu5TJHeaFRTuXD
        subject_person_id: p_G2DaGDf4dU4r6XUsJecRF4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舜卿，宋人物。曾任直翰林醫官院、太醫局丞。（中国历代人物传记资料库 CBDB 38147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D0D1bZdg-7-K71UOX9ezyA
          claim_id: c_YB32X6LCUu5TJHeaFRTuXD
          source_id: s_SVEJZHeDGD91HGLKaxnj3T
          stance: supports
          locator: CBDB:38147
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

# 王舜卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舜卿 | accepted |
| bio.summary | 王舜卿，宋人物。曾任直翰林醫官院、太醫局丞。（中国历代人物传记资料库 CBDB 38147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舜卿（CBDB 38147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38147&o=json)
