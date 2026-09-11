---
schema: wang-person/v1
id: p_Hhzh7V8sMBU5tcPq9vyNMA
status: active
merged_into: null
display_name: 王琦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Cc2bJR1jcd3tjXPRtNsy29
        subject_person_id: p_Hhzh7V8sMBU5tcPq9vyNMA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnimHHCQnWXopep642DtNh
          claim_id: c_Cc2bJR1jcd3tjXPRtNsy29
          source_id: s_6QbKQHMosTSnQY1dTkoF5F
          stance: supports
          locator: CBDB:69421
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69421）
          source: &a1
            id: s_6QbKQHMosTSnQY1dTkoF5F
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 69421）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69421&o=json
            external_identifier: CBDB:69421
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.264Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_wGDAkGiyvv1pCifLo6fkef
        subject_person_id: p_Hhzh7V8sMBU5tcPq9vyNMA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1696年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RSJsvc9rCwxbWVbZdGpXcJ
          claim_id: c_wGDAkGiyvv1pCifLo6fkef
          source_id: s_6QbKQHMosTSnQY1dTkoF5F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8xxNC3A5BMQughECe4DHbj
        subject_person_id: p_Hhzh7V8sMBU5tcPq9vyNMA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琦（生于1696年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 69421）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_b3qNZn_Svy67mXiKUxkdWP
          claim_id: c_8xxNC3A5BMQughECe4DHbj
          source_id: s_6QbKQHMosTSnQY1dTkoF5F
          stance: supports
          locator: CBDB:69421
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

# 王琦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琦 | accepted |
| birth.date | 1696年 | accepted |
| bio.summary | 王琦（生于1696年），清人物。籍贯錢塘。（中国历代人物传记资料库 CBDB 69421） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琦（CBDB 69421）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69421&o=json)
