---
schema: wang-person/v1
id: p_jS1UK6kJ9byhPDRSa3KnNw
status: active
merged_into: null
display_name: 王應奇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qyQRCrZHWig9rkoDWzTG7w
        subject_person_id: p_jS1UK6kJ9byhPDRSa3KnNw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v4Rs8VEwptqJDLCwiaY87T
          claim_id: c_qyQRCrZHWig9rkoDWzTG7w
          source_id: s_NsKkABFHmwEXprB6B3F6um
          stance: supports
          locator: CBDB:529323
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（529323）
          source: &a1
            id: s_NsKkABFHmwEXprB6B3F6um
            source_type: api_record
            title: 中国历代人物传记资料库：王應奇（CBDB 529323）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529323&o=json
            external_identifier: CBDB:529323
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Di8rKwySKz7Bdrx8kNj299
        subject_person_id: p_jS1UK6kJ9byhPDRSa3KnNw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應奇，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 529323）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sFEYiuFGTHk2ETwElmseKe
          claim_id: c_Di8rKwySKz7Bdrx8kNj299
          source_id: s_NsKkABFHmwEXprB6B3F6um
          stance: supports
          locator: CBDB:529323
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OmuMdb1wdlaYlCsJZarhxG
        subject_person_id: p_K94e8dD4MEjf2VNvW2xzd8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jS1UK6kJ9byhPDRSa3KnNw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qN2bacnbg_LHQulM5VkX8z
          claim_id: c_OmuMdb1wdlaYlCsJZarhxG
          source_id: s_NsKkABFHmwEXprB6B3F6um
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），15006：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_K94e8dD4MEjf2VNvW2xzd8
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應奇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應奇 | accepted |
| bio.summary | 王應奇，明人物。籍贯錢塘，身份为畫家。（中国历代人物传记资料库 CBDB 529323） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_K94e8dD4MEjf2VNvW2xzd8 | 王謙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應奇（CBDB 529323）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=529323&o=json)
