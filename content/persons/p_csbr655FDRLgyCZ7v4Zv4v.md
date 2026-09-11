---
schema: wang-person/v1
id: p_csbr655FDRLgyCZ7v4Zv4v
status: active
merged_into: null
display_name: 王宗岱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gc9gVN5wmc2BwJJxMo4qPA
        subject_person_id: p_csbr655FDRLgyCZ7v4Zv4v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kAR6ccQ4kiS4c29ZKHRtH6
          claim_id: c_Gc9gVN5wmc2BwJJxMo4qPA
          source_id: s_Tw6XjLThNJZLxrgyHXqAvD
          stance: supports
          locator: CBDB:637099
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637099）
          source: &a1
            id: s_Tw6XjLThNJZLxrgyHXqAvD
            source_type: api_record
            title: 中国历代人物传记资料库：王宗岱（CBDB 637099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637099&o=json
            external_identifier: CBDB:637099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.337Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TWKRUFakyivLUT5BLtuc7W
        subject_person_id: p_csbr655FDRLgyCZ7v4Zv4v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗岱，清人物。籍贯山東省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 637099）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MYl9N_19-a7K1SqkcG7kkd
          claim_id: c_TWKRUFakyivLUT5BLtuc7W
          source_id: s_Tw6XjLThNJZLxrgyHXqAvD
          stance: supports
          locator: CBDB:637099
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

# 王宗岱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗岱 | accepted |
| bio.summary | 王宗岱，清人物。籍贯山東省，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 637099） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗岱（CBDB 637099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637099&o=json)
