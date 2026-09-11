---
schema: wang-person/v1
id: p_VhrX9729tbY2cwNpQcoG2e
status: active
merged_into: null
display_name: 王景崧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_U2zG6K3rFdX85i51evuyRp
        subject_person_id: p_VhrX9729tbY2cwNpQcoG2e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景崧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_scow8UtVCC2m3jJ91gj3hx
          claim_id: c_U2zG6K3rFdX85i51evuyRp
          source_id: s_SNNrETV7pbHVZy9HAmA3N7
          stance: supports
          locator: CBDB:343489
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343489）
          source: &a1
            id: s_SNNrETV7pbHVZy9HAmA3N7
            source_type: api_record
            title: 中国历代人物传记资料库：王景崧（CBDB 343489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343489&o=json
            external_identifier: CBDB:343489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.370Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UeddjeKbC2fiG17jdBdNTh
        subject_person_id: p_VhrX9729tbY2cwNpQcoG2e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景崧，清人物。明清進士進士，籍贯益陽，入仕進士。（中国历代人物传记资料库 CBDB 343489）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-NoqaFdoPqFW_AsgDsPRfz
          claim_id: c_UeddjeKbC2fiG17jdBdNTh
          source_id: s_SNNrETV7pbHVZy9HAmA3N7
          stance: supports
          locator: CBDB:343489
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

# 王景崧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景崧 | accepted |
| bio.summary | 王景崧，清人物。明清進士進士，籍贯益陽，入仕進士。（中国历代人物传记资料库 CBDB 343489） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王景崧（CBDB 343489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343489&o=json)
