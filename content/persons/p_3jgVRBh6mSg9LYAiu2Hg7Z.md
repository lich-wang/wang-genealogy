---
schema: wang-person/v1
id: p_3jgVRBh6mSg9LYAiu2Hg7Z
status: active
merged_into: null
display_name: 王森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3zL5D2h6gAKE63mNB1LZKr
        subject_person_id: p_3jgVRBh6mSg9LYAiu2Hg7Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fn1aUHkkD1XYhr5baRuq3a
          claim_id: c_3zL5D2h6gAKE63mNB1LZKr
          source_id: s_L9BNBUbC8yJMX6Wkcv8RGK
          stance: supports
          locator: CBDB:638737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638737）
          source: &a1
            id: s_L9BNBUbC8yJMX6Wkcv8RGK
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 638737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638737&o=json
            external_identifier: CBDB:638737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.753Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHDPkyBZ5JZ4wfXSBa6BFK
        subject_person_id: p_3jgVRBh6mSg9LYAiu2Hg7Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王森，清人物。籍贯廣平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638737）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lL6yGcRWPxSbvuuI9bpGWQ
          claim_id: c_fHDPkyBZ5JZ4wfXSBa6BFK
          source_id: s_L9BNBUbC8yJMX6Wkcv8RGK
          stance: supports
          locator: CBDB:638737
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

# 王森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王森 | accepted |
| bio.summary | 王森，清人物。籍贯廣平，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 638737） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王森（CBDB 638737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638737&o=json)
