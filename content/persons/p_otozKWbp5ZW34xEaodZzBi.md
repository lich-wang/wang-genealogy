---
schema: wang-person/v1
id: p_otozKWbp5ZW34xEaodZzBi
status: active
merged_into: null
display_name: 王顯祖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tGJzzh3ZaNdf9GkaR5HbH8
        subject_person_id: p_otozKWbp5ZW34xEaodZzBi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iP3K2s3rbqBm3GYRWY1CTC
          claim_id: c_tGJzzh3ZaNdf9GkaR5HbH8
          source_id: s_BgUhQ4zwRZVF6tX73i1cB2
          stance: supports
          locator: CBDB:101464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101464）
          source: &a1
            id: s_BgUhQ4zwRZVF6tX73i1cB2
            source_type: api_record
            title: 中国历代人物传记资料库：王顯祖（CBDB 101464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101464&o=json
            external_identifier: CBDB:101464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.854Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PXpvs76kbcQyERyFp5oikJ
        subject_person_id: p_otozKWbp5ZW34xEaodZzBi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯祖，元人物。籍贯杭州路，曾任太府監器備庫使。（中国历代人物传记资料库 CBDB 101464）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AHmHQ__UXNExx39U0w3GE_
          claim_id: c_PXpvs76kbcQyERyFp5oikJ
          source_id: s_BgUhQ4zwRZVF6tX73i1cB2
          stance: supports
          locator: CBDB:101464
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

# 王顯祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯祖 | accepted |
| bio.summary | 王顯祖，元人物。籍贯杭州路，曾任太府監器備庫使。（中国历代人物传记资料库 CBDB 101464） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯祖（CBDB 101464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101464&o=json)
