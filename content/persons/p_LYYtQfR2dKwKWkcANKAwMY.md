---
schema: wang-person/v1
id: p_LYYtQfR2dKwKWkcANKAwMY
status: active
merged_into: null
display_name: 王怡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HLX4enH5Bx3cD1zXhD8TS4
        subject_person_id: p_LYYtQfR2dKwKWkcANKAwMY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YCHHWbY7z8Ag3jKtn1Xz44
          claim_id: c_HLX4enH5Bx3cD1zXhD8TS4
          source_id: s_59nMrm5yRvBE3CxWHLFWLm
          stance: supports
          locator: CBDB:189496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（189496）
          source: &a1
            id: s_59nMrm5yRvBE3CxWHLFWLm
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 189496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189496&o=json
            external_identifier: CBDB:189496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.296Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_M7NMkvDx5oD1Fcp1CrgL4E
        subject_person_id: p_LYYtQfR2dKwKWkcANKAwMY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 759年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UmF86pyqp4MqcwGvtSFPHb
          claim_id: c_M7NMkvDx5oD1Fcp1CrgL4E
          source_id: s_59nMrm5yRvBE3CxWHLFWLm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yu67A6q4YTx1JFATyRtKbx
        subject_person_id: p_LYYtQfR2dKwKWkcANKAwMY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A943cKo1LS9o51iiD9XfUJ
          claim_id: c_Yu67A6q4YTx1JFATyRtKbx
          source_id: s_59nMrm5yRvBE3CxWHLFWLm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| death.date | 759年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 189496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189496&o=json)
