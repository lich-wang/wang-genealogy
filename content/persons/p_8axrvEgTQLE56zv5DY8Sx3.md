---
schema: wang-person/v1
id: p_8axrvEgTQLE56zv5DY8Sx3
status: active
merged_into: null
display_name: 王學書
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_afepUKRYnjDimaTo2Cc568
        subject_person_id: p_8axrvEgTQLE56zv5DY8Sx3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學書
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hRbbeyyMqsto5Gj3GandeE
          claim_id: c_afepUKRYnjDimaTo2Cc568
          source_id: s_1LJA3EvUrWygux67xfY6L3
          stance: supports
          locator: CBDB:693255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693255）
          source: &a1
            id: s_1LJA3EvUrWygux67xfY6L3
            source_type: api_record
            title: 中国历代人物传记资料库：王學書（CBDB 693255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693255&o=json
            external_identifier: CBDB:693255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.654Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w7NAyGtYiAN55SGcxogQAk
        subject_person_id: p_8axrvEgTQLE56zv5DY8Sx3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學書，清人物。籍贯黟縣，曾任總兵。（中国历代人物传记资料库 CBDB 693255）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vWcV8bgvGlHjDVvf2kQUjF
          claim_id: c_w7NAyGtYiAN55SGcxogQAk
          source_id: s_1LJA3EvUrWygux67xfY6L3
          stance: supports
          locator: CBDB:693255
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

# 王學書

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學書 | accepted |
| bio.summary | 王學書，清人物。籍贯黟縣，曾任總兵。（中国历代人物传记资料库 CBDB 693255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王學書（CBDB 693255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693255&o=json)
