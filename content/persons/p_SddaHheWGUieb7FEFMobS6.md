---
schema: wang-person/v1
id: p_SddaHheWGUieb7FEFMobS6
status: active
merged_into: null
display_name: 王用畢
cbdb_id: 213305
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d8LLKpMqsVsrbHbViH2oVP
        subject_person_id: p_SddaHheWGUieb7FEFMobS6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用畢，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213305）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_km68C1uXrvmuyJCZFA5sk4
          claim_id: c_d8LLKpMqsVsrbHbViH2oVP
          source_id: s_3E29Grs6cfvNZ6Am6yKe14
          stance: supports
          locator: CBDB:213305
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3E29Grs6cfvNZ6Am6yKe14
            source_type: api_record
            title: 中国历代人物传记资料库：王用畢（CBDB 213305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json
            external_identifier: CBDB:213305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9EBu1HSJHU4VrKwx1u235w
        subject_person_id: p_SddaHheWGUieb7FEFMobS6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用畢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4EQRxFS1yNc2i2qkGSbmKK
          claim_id: c_9EBu1HSJHU4VrKwx1u235w
          source_id: s_3E29Grs6cfvNZ6Am6yKe14
          stance: supports
          locator: CBDB:213305
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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

# 王用畢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用畢，明人物。萬曆二年進士，籍贯濟南衛。（中国历代人物传记资料库 CBDB 213305） | accepted |
| name.primary | 王用畢 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用畢（CBDB 213305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213305&o=json)
