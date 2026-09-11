---
schema: wang-person/v1
id: p_2nAifZeXAA4AbbHwN98Ki7
status: active
merged_into: null
display_name: 王鑫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YGu3Q3NTNz5wYGggocyBCu
        subject_person_id: p_2nAifZeXAA4AbbHwN98Ki7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w1wrj1MdNVW2SKaAmSgunU
          claim_id: c_YGu3Q3NTNz5wYGggocyBCu
          source_id: s_n2F4LK4CZbM9upro1WWV3i
          stance: supports
          locator: CBDB:248820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248820）
          source: &a1
            id: s_n2F4LK4CZbM9upro1WWV3i
            source_type: api_record
            title: 中国历代人物传记资料库：王鑫（CBDB 248820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248820&o=json
            external_identifier: CBDB:248820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.162Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_13Cq8LjuFCXCa8J5pPMaq4
        subject_person_id: p_2nAifZeXAA4AbbHwN98Ki7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑫，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X_22M5PitjRiAVGEhj8Zf6
          claim_id: c_13Cq8LjuFCXCa8J5pPMaq4
          source_id: s_n2F4LK4CZbM9upro1WWV3i
          stance: supports
          locator: CBDB:248820
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

# 王鑫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑫 | accepted |
| bio.summary | 王鑫，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑫（CBDB 248820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248820&o=json)
