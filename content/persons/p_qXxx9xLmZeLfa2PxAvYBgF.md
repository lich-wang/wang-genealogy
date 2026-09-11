---
schema: wang-person/v1
id: p_qXxx9xLmZeLfa2PxAvYBgF
status: active
merged_into: null
display_name: 王福
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g4fVKr5Wb4jWVTm1VMjC85
        subject_person_id: p_qXxx9xLmZeLfa2PxAvYBgF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ek8SuGAp2XMBiVEnX9hWSY
          claim_id: c_g4fVKr5Wb4jWVTm1VMjC85
          source_id: s_J5iUUrq4sZgZQTrNjD7k1e
          stance: supports
          locator: CBDB:151195
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151195）
          source: &a1
            id: s_J5iUUrq4sZgZQTrNjD7k1e
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 151195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151195&o=json
            external_identifier: CBDB:151195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.835Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zqL3dttqBBav6JzbLFVkd3
        subject_person_id: p_qXxx9xLmZeLfa2PxAvYBgF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 151195）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZvXxAmr-pVN-jS6vTRRKNf
          claim_id: c_zqL3dttqBBav6JzbLFVkd3
          source_id: s_J5iUUrq4sZgZQTrNjD7k1e
          stance: supports
          locator: CBDB:151195
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9lEn9KZ95bM8dn5wg_8mf8
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qXxx9xLmZeLfa2PxAvYBgF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3NZVgDD8oEV1I6Wa_QbOcA
          claim_id: c_9lEn9KZ95bM8dn5wg_8mf8
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4GMYnMdeW3aw1wHLc1HKGC
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 140308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json
            external_identifier: CBDB:140308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9R2PnjU4TFsdVKYkKG9ey1
        status: active
        display_name: 王師
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| bio.summary | 王福，唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 151195） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9R2PnjU4TFsdVKYkKG9ey1 | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 151195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151195&o=json)
- [中国历代人物传记资料库：王師（CBDB 140308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json)
