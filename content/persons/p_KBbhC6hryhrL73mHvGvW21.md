---
schema: wang-person/v1
id: p_KBbhC6hryhrL73mHvGvW21
status: active
merged_into: null
display_name: 王國霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J88g3oCECDLythfbWcJT3a
        subject_person_id: p_KBbhC6hryhrL73mHvGvW21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yX9eWK1D4DNHFpFiRXLRBZ
          claim_id: c_J88g3oCECDLythfbWcJT3a
          source_id: s_2pmCiNmSzZSL7CLzntJmzN
          stance: supports
          locator: CBDB:636678
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636678）
          source: &a1
            id: s_2pmCiNmSzZSL7CLzntJmzN
            source_type: api_record
            title: 中国历代人物传记资料库：王國霖（CBDB 636678）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636678&o=json
            external_identifier: CBDB:636678
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bwszZ9t27oLaR5C3W6Ageu
        subject_person_id: p_KBbhC6hryhrL73mHvGvW21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國霖，清人物。籍贯永平府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636678）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OcF6wRNFCWsfZM5Apq7G6a
          claim_id: c_bwszZ9t27oLaR5C3W6Ageu
          source_id: s_2pmCiNmSzZSL7CLzntJmzN
          stance: supports
          locator: CBDB:636678
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

# 王國霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國霖 | accepted |
| bio.summary | 王國霖，清人物。籍贯永平府，入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 636678） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國霖（CBDB 636678）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636678&o=json)
