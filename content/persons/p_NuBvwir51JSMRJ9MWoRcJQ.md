---
schema: wang-person/v1
id: p_NuBvwir51JSMRJ9MWoRcJQ
status: active
merged_into: null
display_name: 王殿玉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VD5Amgb3EHLLpLh9Cwg1Pi
        subject_person_id: p_NuBvwir51JSMRJ9MWoRcJQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xno5N1AppGgoCPEHbvq7ru
          claim_id: c_VD5Amgb3EHLLpLh9Cwg1Pi
          source_id: s_czDjH99Y2a7Y9pHUbR9tC7
          stance: supports
          locator: CBDB:638933
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638933）
          source: &a1
            id: s_czDjH99Y2a7Y9pHUbR9tC7
            source_type: api_record
            title: 中国历代人物传记资料库：王殿玉（CBDB 638933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638933&o=json
            external_identifier: CBDB:638933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kbFRCyRHGSHkRqRieErGPJ
        subject_person_id: p_NuBvwir51JSMRJ9MWoRcJQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿玉，清人物。籍贯仙居，曾任藍翎侍衛、守備、中軍守備。（中国历代人物传记资料库 CBDB 638933）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DkOwDE535txVSGYFO2Z7_8
          claim_id: c_kbFRCyRHGSHkRqRieErGPJ
          source_id: s_czDjH99Y2a7Y9pHUbR9tC7
          stance: supports
          locator: CBDB:638933
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

# 王殿玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿玉 | accepted |
| bio.summary | 王殿玉，清人物。籍贯仙居，曾任藍翎侍衛、守備、中軍守備。（中国历代人物传记资料库 CBDB 638933） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿玉（CBDB 638933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638933&o=json)
