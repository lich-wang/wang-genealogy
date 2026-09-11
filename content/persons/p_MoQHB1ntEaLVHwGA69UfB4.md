---
schema: wang-person/v1
id: p_MoQHB1ntEaLVHwGA69UfB4
status: active
merged_into: null
display_name: 王士任
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YguQnQvp9QKHt6SFCtn7qa
        subject_person_id: p_MoQHB1ntEaLVHwGA69UfB4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntdw9Gysj5M6V7jYJKd8DX
          claim_id: c_YguQnQvp9QKHt6SFCtn7qa
          source_id: s_YD41KMizWSFcCP7GAYRxAw
          stance: supports
          locator: CBDB:57114
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57114）
          source: &a1
            id: s_YD41KMizWSFcCP7GAYRxAw
            source_type: api_record
            title: 中国历代人物传记资料库：王士任（CBDB 57114）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57114&o=json
            external_identifier: CBDB:57114
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.780Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SpT6hPDq9JM3pB5zEZjUmP
        subject_person_id: p_MoQHB1ntEaLVHwGA69UfB4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1746年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gf2zSHAUfxeMhsnuB2NzCi
          claim_id: c_SpT6hPDq9JM3pB5zEZjUmP
          source_id: s_YD41KMizWSFcCP7GAYRxAw
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
        id: c_Jdba9HDEQ2NgMsNcLsvi3b
        subject_person_id: p_MoQHB1ntEaLVHwGA69UfB4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士任（卒于1746年），清人物。明清進士進士，籍贯文登，入仕進士，曾任縣知縣、訓導、知府。（中国历代人物传记资料库 CBDB 57114）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bBNJm6gGci4ME2ROdfApU2
          claim_id: c_Jdba9HDEQ2NgMsNcLsvi3b
          source_id: s_YD41KMizWSFcCP7GAYRxAw
          stance: supports
          locator: CBDB:57114
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

# 王士任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王士任 | accepted |
| death.date | 1746年 | accepted |
| bio.summary | 王士任（卒于1746年），清人物。明清進士進士，籍贯文登，入仕進士，曾任縣知縣、訓導、知府。（中国历代人物传记资料库 CBDB 57114） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王士任（CBDB 57114）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57114&o=json)
