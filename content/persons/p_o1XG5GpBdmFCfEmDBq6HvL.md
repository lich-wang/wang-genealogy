---
schema: wang-person/v1
id: p_o1XG5GpBdmFCfEmDBq6HvL
status: active
merged_into: null
display_name: 王志安
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SBYBnH5usKRLW4K9KNqbzS
        subject_person_id: p_o1XG5GpBdmFCfEmDBq6HvL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y1osWPD3TeWLEpBW48mMZr
          claim_id: c_SBYBnH5usKRLW4K9KNqbzS
          source_id: s_PvchCLt2dtW6uRJc9Gd5d6
          stance: supports
          locator: CBDB:92004
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92004）
          source: &a1
            id: s_PvchCLt2dtW6uRJc9Gd5d6
            source_type: api_record
            title: 中国历代人物传记资料库：王志安（CBDB 92004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92004&o=json
            external_identifier: CBDB:92004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.075Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ePs8rLq3y3ze9PeeWVYF93
        subject_person_id: p_o1XG5GpBdmFCfEmDBq6HvL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志安，唐人物。身份为詩人，曾任補闕。（中国历代人物传记资料库 CBDB 92004）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QlJMoGacWcmAOaCp_bb50E
          claim_id: c_ePs8rLq3y3ze9PeeWVYF93
          source_id: s_PvchCLt2dtW6uRJc9Gd5d6
          stance: supports
          locator: CBDB:92004
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

# 王志安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志安 | accepted |
| bio.summary | 王志安，唐人物。身份为詩人，曾任補闕。（中国历代人物传记资料库 CBDB 92004） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王志安（CBDB 92004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92004&o=json)
