---
schema: wang-person/v1
id: p_B2urxhKf17yYU766yizqjs
status: active
merged_into: null
display_name: 王汝賢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sULQN768LjvxGRFd73T519
        subject_person_id: p_B2urxhKf17yYU766yizqjs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rZ9HCF2YpcUrHwneXN5roB
          claim_id: c_sULQN768LjvxGRFd73T519
          source_id: s_Y76UadRRRzcpyBAWpu3DW2
          stance: supports
          locator: CBDB:639037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639037）
          source: &a1
            id: s_Y76UadRRRzcpyBAWpu3DW2
            source_type: api_record
            title: 中国历代人物传记资料库：王汝賢（CBDB 639037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639037&o=json
            external_identifier: CBDB:639037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kTKbpCh8LT8x1vaDDi3gCa
        subject_person_id: p_B2urxhKf17yYU766yizqjs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝賢，清人物。籍贯秦州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uzaiSjdNAUXbNkZXTZ8TtR
          claim_id: c_kTKbpCh8LT8x1vaDDi3gCa
          source_id: s_Y76UadRRRzcpyBAWpu3DW2
          stance: supports
          locator: CBDB:639037
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

# 王汝賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝賢 | accepted |
| bio.summary | 王汝賢，清人物。籍贯秦州直隸州直轄地方，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 639037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王汝賢（CBDB 639037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639037&o=json)
