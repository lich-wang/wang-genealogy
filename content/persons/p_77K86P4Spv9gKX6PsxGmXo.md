---
schema: wang-person/v1
id: p_77K86P4Spv9gKX6PsxGmXo
status: active
merged_into: null
display_name: 王美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JhmymnJCRh32y5XRnKtvwH
        subject_person_id: p_77K86P4Spv9gKX6PsxGmXo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eWk4pKsCZhdPYef652BZBv
          claim_id: c_JhmymnJCRh32y5XRnKtvwH
          source_id: s_Korx5wJLHbVB74vj8fTrNE
          stance: supports
          locator: CBDB:505366
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（505366）
          source: &a1
            id: s_Korx5wJLHbVB74vj8fTrNE
            source_type: api_record
            title: 中国历代人物传记资料库：王美（CBDB 505366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505366&o=json
            external_identifier: CBDB:505366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ni8njVADKWKgBkLbB5YZ3b
        subject_person_id: p_77K86P4Spv9gKX6PsxGmXo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王美，明人物。曾任府同知。（中国历代人物传记资料库 CBDB 505366）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lpgw2Zk8xtfhMoEyuorRwX
          claim_id: c_ni8njVADKWKgBkLbB5YZ3b
          source_id: s_Korx5wJLHbVB74vj8fTrNE
          stance: supports
          locator: CBDB:505366
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

# 王美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王美 | accepted |
| bio.summary | 王美，明人物。曾任府同知。（中国历代人物传记资料库 CBDB 505366） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王美（CBDB 505366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=505366&o=json)
