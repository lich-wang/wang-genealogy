---
schema: wang-person/v1
id: p_47mAE5L6K7x4ecVBQiJHAH
status: active
merged_into: null
display_name: 王仲愚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L5GGcUY5KdoU2euNz3g6vP
        subject_person_id: p_47mAE5L6K7x4ecVBQiJHAH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲愚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4caeGF2GxQJWFK72eyWeVr
          claim_id: c_L5GGcUY5KdoU2euNz3g6vP
          source_id: s_ofSaKgnqiU8Z9bmgYLmMpH
          stance: supports
          locator: CBDB:342353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342353）
          source: &a1
            id: s_ofSaKgnqiU8Z9bmgYLmMpH
            source_type: api_record
            title: 中国历代人物传记资料库：王仲愚（CBDB 342353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342353&o=json
            external_identifier: CBDB:342353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kT1hBbYVuX8NZVhkfc1434
        subject_person_id: p_47mAE5L6K7x4ecVBQiJHAH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲愚，清人物。明清進士進士，籍贯濟寧直隸州直轄地方，入仕進士，曾任檢討、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 342353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gi8l8A0DrPLr0q5yPVW96L
          claim_id: c_kT1hBbYVuX8NZVhkfc1434
          source_id: s_ofSaKgnqiU8Z9bmgYLmMpH
          stance: supports
          locator: CBDB:342353
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

# 王仲愚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲愚 | accepted |
| bio.summary | 王仲愚，清人物。明清進士進士，籍贯濟寧直隸州直轄地方，入仕進士，曾任檢討、同考官、鄉試考官。（中国历代人物传记资料库 CBDB 342353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仲愚（CBDB 342353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342353&o=json)
