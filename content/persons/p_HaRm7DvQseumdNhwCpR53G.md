---
schema: wang-person/v1
id: p_HaRm7DvQseumdNhwCpR53G
status: active
merged_into: null
display_name: 王德文
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mAfDbYHDfD3WYhs66mGzw
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MZioAfR9xDeEsHs8WgGZ1p
          claim_id: c_7mAfDbYHDfD3WYhs66mGzw
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
          stance: supports
          locator: CBDB:10343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10343）
          source: &a1
            id: s_WLoPrJqMGjCTJDYh91J6Q6
            source_type: api_record
            title: 中国历代人物传记资料库：王德文（CBDB 10343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10343&o=json
            external_identifier: CBDB:10343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.534Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_oP2gpGXBadUu9AZH8Wfpsi
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1190年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4fKGbzPgmxcSFwPUCcC4i
          claim_id: c_oP2gpGXBadUu9AZH8Wfpsi
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
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
        id: c_PxEB9dSDkKaFau15naMUfM
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1246年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VMYZbezebxYTB13ZP9dFT
          claim_id: c_PxEB9dSDkKaFau15naMUfM
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
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
        id: c_59j2213NaqwEp2M1SMCSUg
        subject_person_id: p_HaRm7DvQseumdNhwCpR53G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wzaasq1ocqa2HVBgud33xC
          claim_id: c_59j2213NaqwEp2M1SMCSUg
          source_id: s_WLoPrJqMGjCTJDYh91J6Q6
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

# 王德文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德文 | accepted |
| birth.date | 1190年 | accepted |
| death.date | 1246年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德文（CBDB 10343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10343&o=json)
