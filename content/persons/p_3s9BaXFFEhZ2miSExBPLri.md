---
schema: wang-person/v1
id: p_3s9BaXFFEhZ2miSExBPLri
status: active
merged_into: null
display_name: 王燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SDCMRVWppeGGr2W85Bcao5
        subject_person_id: p_3s9BaXFFEhZ2miSExBPLri
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BAeGkAfMPwWGdis4QDwGTx
          claim_id: c_SDCMRVWppeGGr2W85Bcao5
          source_id: s_ceLvLEGeS1k5WL7ssg56Nx
          stance: supports
          locator: CBDB:71292
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71292）
          source: &a1
            id: s_ceLvLEGeS1k5WL7ssg56Nx
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 71292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71292&o=json
            external_identifier: CBDB:71292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.575Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KEXZMXLmegnGsBwPLbXH8F
        subject_person_id: p_3s9BaXFFEhZ2miSExBPLri
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1827年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DiU1GNSHTFhCB2wC7t8QMN
          claim_id: c_KEXZMXLmegnGsBwPLbXH8F
          source_id: s_ceLvLEGeS1k5WL7ssg56Nx
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
        id: c_13hmUiMoJrKq6rwKo5tUZH
        subject_person_id: p_3s9BaXFFEhZ2miSExBPLri
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FH1r56vVXjhgf75xtq9NBV
          claim_id: c_13hmUiMoJrKq6rwKo5tUZH
          source_id: s_ceLvLEGeS1k5WL7ssg56Nx
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
        id: c_oK2zMAZdkJETcPALsJZKDe
        subject_person_id: p_3s9BaXFFEhZ2miSExBPLri
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮（1827年—1855年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71292）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7cMMc6QB6BE7yttzJjTAk8
          claim_id: c_oK2zMAZdkJETcPALsJZKDe
          source_id: s_ceLvLEGeS1k5WL7ssg56Nx
          stance: supports
          locator: CBDB:71292
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

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| birth.date | 1827年 | accepted |
| death.date | 1855年 | accepted |
| bio.summary | 王燮（1827年—1855年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71292） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 71292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71292&o=json)
