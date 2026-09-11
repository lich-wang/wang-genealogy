---
schema: wang-person/v1
id: p_dB4tE4Fb2ArGiLBQbTHE7L
status: active
merged_into: null
display_name: 王嗚鏘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJFKUbe89kTrkW4k5A8whs
        subject_person_id: p_dB4tE4Fb2ArGiLBQbTHE7L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗚鏘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zhzQiA4Cgseb6YTD4C1MWb
          claim_id: c_qJFKUbe89kTrkW4k5A8whs
          source_id: s_EZXtSDRxNr3Ko4PMwjgVcT
          stance: supports
          locator: CBDB:636593
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636593）
          source: &a1
            id: s_EZXtSDRxNr3Ko4PMwjgVcT
            source_type: api_record
            title: 中国历代人物传记资料库：王嗚鏘（CBDB 636593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636593&o=json
            external_identifier: CBDB:636593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.042Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e88m2paPBJGgqG6sT8Fdvv
        subject_person_id: p_dB4tE4Fb2ArGiLBQbTHE7L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嗚鏘，清人物。籍贯永春直隸州直轄地方，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636593）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VxFKlC0u8EBJOa7q6rZ8Lj
          claim_id: c_e88m2paPBJGgqG6sT8Fdvv
          source_id: s_EZXtSDRxNr3Ko4PMwjgVcT
          stance: supports
          locator: CBDB:636593
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

# 王嗚鏘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嗚鏘 | accepted |
| bio.summary | 王嗚鏘，清人物。籍贯永春直隸州直轄地方，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 636593） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嗚鏘（CBDB 636593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636593&o=json)
