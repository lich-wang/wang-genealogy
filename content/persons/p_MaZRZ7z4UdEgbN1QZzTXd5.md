---
schema: wang-person/v1
id: p_MaZRZ7z4UdEgbN1QZzTXd5
status: active
merged_into: null
display_name: 王鑰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DCFuE4k4eRAxXJpmFD96UH
        subject_person_id: p_MaZRZ7z4UdEgbN1QZzTXd5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCMXVUiQnRP5no8tEH6RHF
          claim_id: c_DCFuE4k4eRAxXJpmFD96UH
          source_id: s_gkWXQW187PZa4Gsv2iyK6y
          stance: supports
          locator: CBDB:343854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343854）
          source: &a1
            id: s_gkWXQW187PZa4Gsv2iyK6y
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 343854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343854&o=json
            external_identifier: CBDB:343854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.547Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQRY6xQLeooULCJvic2S8q
        subject_person_id: p_MaZRZ7z4UdEgbN1QZzTXd5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑰，明人物。明清進士進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 343854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZYojcXZEIjhJ-Nh6GMz4Sx
          claim_id: c_AQRY6xQLeooULCJvic2S8q
          source_id: s_gkWXQW187PZa4Gsv2iyK6y
          stance: supports
          locator: CBDB:343854
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

# 王鑰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑰 | accepted |
| bio.summary | 王鑰，明人物。明清進士進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 343854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑰（CBDB 343854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343854&o=json)
