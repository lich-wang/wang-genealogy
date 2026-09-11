---
schema: wang-person/v1
id: p_jAzviAAKLrJUT69Em5yPyT
status: active
merged_into: null
display_name: 王庭堅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RNK1UfcaxK9hLAtBFWJPUB
        subject_person_id: p_jAzviAAKLrJUT69Em5yPyT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uHK3oivfS2dXnNYMfeD2ui
          claim_id: c_RNK1UfcaxK9hLAtBFWJPUB
          source_id: s_A9LQUrFaQTEhfdcREkRLx7
          stance: supports
          locator: CBDB:34886
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34886）
          source: &a1
            id: s_A9LQUrFaQTEhfdcREkRLx7
            source_type: api_record
            title: 中国历代人物传记资料库：王庭堅（CBDB 34886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34886&o=json
            external_identifier: CBDB:34886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_74utGCZpCm9Jr8AXZ6UySf
        subject_person_id: p_jAzviAAKLrJUT69Em5yPyT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭堅，宋人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 34886）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oBkE48ktFvgB46LWNBGqt1
          claim_id: c_74utGCZpCm9Jr8AXZ6UySf
          source_id: s_A9LQUrFaQTEhfdcREkRLx7
          stance: supports
          locator: CBDB:34886
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

# 王庭堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭堅 | accepted |
| bio.summary | 王庭堅，宋人物。籍贯慈溪。（中国历代人物传记资料库 CBDB 34886） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭堅（CBDB 34886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34886&o=json)
