---
schema: wang-person/v1
id: p_2ue7XqzGHMowBPcFkSEcQG
status: active
merged_into: null
display_name: 王金誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_P6dFsZh7XH1Kn8SDGaP9YH
        subject_person_id: p_2ue7XqzGHMowBPcFkSEcQG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ra2mEJJXLEc6mS7cTXWGWH
          claim_id: c_P6dFsZh7XH1Kn8SDGaP9YH
          source_id: s_AP9EkXEVRU1FuK4dHZ2oaG
          stance: supports
          locator: CBDB:640528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640528）
          source: &a1
            id: s_AP9EkXEVRU1FuK4dHZ2oaG
            source_type: api_record
            title: 中国历代人物传记资料库：王金誥（CBDB 640528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640528&o=json
            external_identifier: CBDB:640528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p6dMA4EzJSYe57ubmsz13g
        subject_person_id: p_2ue7XqzGHMowBPcFkSEcQG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王金誥，清人物。籍贯平越直隸州，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教授、學正、復設訓導。（中国历代人物传记资料库 CBDB 640528）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KtuNTBWAjEDsRS-ViqexMY
          claim_id: c_p6dMA4EzJSYe57ubmsz13g
          source_id: s_AP9EkXEVRU1FuK4dHZ2oaG
          stance: supports
          locator: CBDB:640528
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

# 王金誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金誥 | accepted |
| bio.summary | 王金誥，清人物。籍贯平越直隸州，入仕貢生: 納貢(例貢,增貢,捐貢)，曾任教授、學正、復設訓導。（中国历代人物传记资料库 CBDB 640528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金誥（CBDB 640528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640528&o=json)
