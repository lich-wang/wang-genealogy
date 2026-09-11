---
schema: wang-person/v1
id: p_MZLKozmgx4gbjwBv2K1xHL
status: active
merged_into: null
display_name: 王樹森
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pYkzzfT2RWtnr86714a4e4
        subject_person_id: p_MZLKozmgx4gbjwBv2K1xHL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹森
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NQuBX5nFgZkHvJnTa7S5Y6
          claim_id: c_pYkzzfT2RWtnr86714a4e4
          source_id: s_zNWPhdYY8c7B4EH9PHwQaM
          stance: supports
          locator: CBDB:638851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638851）
          source: &a1
            id: s_zNWPhdYY8c7B4EH9PHwQaM
            source_type: api_record
            title: 中国历代人物传记资料库：王樹森（CBDB 638851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638851&o=json
            external_identifier: CBDB:638851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rYwQbqT5P3Zk7P7uBMXQVS
        subject_person_id: p_MZLKozmgx4gbjwBv2K1xHL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樹森，清人物。籍贯祥符，入仕附貢生，曾任郎中。（中国历代人物传记资料库 CBDB 638851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SdmAsGqTeiVx37s0TKgpbg
          claim_id: c_rYwQbqT5P3Zk7P7uBMXQVS
          source_id: s_zNWPhdYY8c7B4EH9PHwQaM
          stance: supports
          locator: CBDB:638851
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

# 王樹森

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樹森 | accepted |
| bio.summary | 王樹森，清人物。籍贯祥符，入仕附貢生，曾任郎中。（中国历代人物传记资料库 CBDB 638851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王樹森（CBDB 638851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638851&o=json)
