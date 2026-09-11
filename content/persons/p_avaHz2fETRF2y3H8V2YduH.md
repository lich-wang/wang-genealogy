---
schema: wang-person/v1
id: p_avaHz2fETRF2y3H8V2YduH
status: active
merged_into: null
display_name: 王先
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Qvzvtpjg36P28TR7XmydBB
        subject_person_id: p_avaHz2fETRF2y3H8V2YduH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_79ZnkSrqKrGeNQeH7ip7RU
          claim_id: c_Qvzvtpjg36P28TR7XmydBB
          source_id: s_gVsjkBzyv5jVpUHMWMCVKa
          stance: supports
          locator: CBDB:342294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342294）
          source: &a1
            id: s_gVsjkBzyv5jVpUHMWMCVKa
            source_type: api_record
            title: 中国历代人物传记资料库：王先（CBDB 342294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342294&o=json
            external_identifier: CBDB:342294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.888Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bQC99EkD96S934Z6KeSPkc
        subject_person_id: p_avaHz2fETRF2y3H8V2YduH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王先，明人物。明清進士進士，籍贯羅田，入仕進士。（中国历代人物传记资料库 CBDB 342294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_24NfXnLh6j_sZnx6Yfu5IR
          claim_id: c_bQC99EkD96S934Z6KeSPkc
          source_id: s_gVsjkBzyv5jVpUHMWMCVKa
          stance: supports
          locator: CBDB:342294
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

# 王先

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王先 | accepted |
| bio.summary | 王先，明人物。明清進士進士，籍贯羅田，入仕進士。（中国历代人物传记资料库 CBDB 342294） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王先（CBDB 342294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342294&o=json)
