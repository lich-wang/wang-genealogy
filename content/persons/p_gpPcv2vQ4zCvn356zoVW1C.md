---
schema: wang-person/v1
id: p_gpPcv2vQ4zCvn356zoVW1C
status: active
merged_into: null
display_name: 王繼葛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mZtJ63sBkCE9ji6kzBin11
        subject_person_id: p_gpPcv2vQ4zCvn356zoVW1C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼葛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uU3Shb4Wgnp9hhq6o1xA1M
          claim_id: c_mZtJ63sBkCE9ji6kzBin11
          source_id: s_RC3q1v3awAsPLwk2QQX4sv
          stance: supports
          locator: CBDB:639881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639881）
          source: &a1
            id: s_RC3q1v3awAsPLwk2QQX4sv
            source_type: api_record
            title: 中国历代人物传记资料库：王繼葛（CBDB 639881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639881&o=json
            external_identifier: CBDB:639881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.072Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QBxvKHamDptYjKv3Eo4Cwy
        subject_person_id: p_gpPcv2vQ4zCvn356zoVW1C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼葛，清人物。籍贯淶水，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_egdGae0AxNYwj7S4u_UlM8
          claim_id: c_QBxvKHamDptYjKv3Eo4Cwy
          source_id: s_RC3q1v3awAsPLwk2QQX4sv
          stance: supports
          locator: CBDB:639881
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

# 王繼葛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼葛 | accepted |
| bio.summary | 王繼葛，清人物。籍贯淶水，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 639881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繼葛（CBDB 639881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639881&o=json)
