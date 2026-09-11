---
schema: wang-person/v1
id: p_j8GJW9haMVAXP82x64Fh3X
status: active
merged_into: null
display_name: 王登書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hpu6Mf1ko6FRAa4QBaQ7M6
        subject_person_id: p_j8GJW9haMVAXP82x64Fh3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_U4PCG74CbjzphKNVN9Vh4C
          claim_id: c_Hpu6Mf1ko6FRAa4QBaQ7M6
          source_id: s_oXePoVSG132Ek15D52fHVd
          stance: supports
          locator: CBDB:639505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639505）
          source: &a1
            id: s_oXePoVSG132Ek15D52fHVd
            source_type: api_record
            title: 中国历代人物传记资料库：王登書（CBDB 639505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639505&o=json
            external_identifier: CBDB:639505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a9PvdLx7KkfTwAFUj94VX4
        subject_person_id: p_j8GJW9haMVAXP82x64Fh3X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登書，清人物。籍贯太原，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639505）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u0LkBy_R6M-B9aTe1dEccO
          claim_id: c_a9PvdLx7KkfTwAFUj94VX4
          source_id: s_oXePoVSG132Ek15D52fHVd
          stance: supports
          locator: CBDB:639505
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

# 王登書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登書 | accepted |
| bio.summary | 王登書，清人物。籍贯太原，入仕附貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 639505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登書（CBDB 639505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639505&o=json)
