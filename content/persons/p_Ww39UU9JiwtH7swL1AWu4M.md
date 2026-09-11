---
schema: wang-person/v1
id: p_Ww39UU9JiwtH7swL1AWu4M
status: active
merged_into: null
display_name: 王成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9FoXGAJey2K7PkGeowLNKz
        subject_person_id: p_Ww39UU9JiwtH7swL1AWu4M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yB26LgdhyGhnaca633imFQ
          claim_id: c_9FoXGAJey2K7PkGeowLNKz
          source_id: s_YNDMD2QLcBgksUhBD2JKfv
          stance: supports
          locator: CBDB:500359
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500359）
          source: &a1
            id: s_YNDMD2QLcBgksUhBD2JKfv
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 500359）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500359&o=json
            external_identifier: CBDB:500359
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.796Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iwCeoFXPrMX9imHrQephLG
        subject_person_id: p_Ww39UU9JiwtH7swL1AWu4M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任兵備道。（中国历代人物传记资料库 CBDB 500359）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZCLNwBW6RkgMBa7U51PHT
          claim_id: c_iwCeoFXPrMX9imHrQephLG
          source_id: s_YNDMD2QLcBgksUhBD2JKfv
          stance: supports
          locator: CBDB:500359
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

# 王成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成 | accepted |
| bio.summary | 王成，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任兵備道。（中国历代人物传记资料库 CBDB 500359） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 500359）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500359&o=json)
