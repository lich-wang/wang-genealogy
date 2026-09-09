---
schema: wang-person/v1
id: p_bupKiVr68PqXVERhZYa1QZ
status: active
merged_into: null
display_name: 王守節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zjj4vygmikKB8NPF7MZEG3
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王守節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4whUkwgNxNCzY1gKWfBMHQ
          claim_id: c_Zjj4vygmikKB8NPF7MZEG3
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
          stance: supports
          locator: CBDB:143031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143031）
          source: &a1
            id: s_gfZEmcr86oR2Ky8uJseHuw
            source_type: api_record
            title: 中国历代人物传记资料库：王守節（CBDB 143031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143031&o=json
            external_identifier: CBDB:143031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TaHeKWrsgnQb1CWkxyiCG8
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 675年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XdL15BanEGKxxUdARm7uvE
          claim_id: c_TaHeKWrsgnQb1CWkxyiCG8
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zQCcKKRNiUjbZU9MZKgiyL
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 752年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTXNK8BLiPyTN5x1WvGiBA
          claim_id: c_zQCcKKRNiUjbZU9MZKgiyL
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
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
        id: c_KTLPgBisRMH72CtpHK42c7
        subject_person_id: p_bupKiVr68PqXVERhZYa1QZ
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
        - id: cs_fiiEaKYaN6GwYrY1mjriKi
          claim_id: c_KTLPgBisRMH72CtpHK42c7
          source_id: s_gfZEmcr86oR2Ky8uJseHuw
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

# 王守節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王守節 | accepted |
| birth.date | 675年 | accepted |
| death.date | 752年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王守節（CBDB 143031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143031&o=json)
