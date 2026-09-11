---
schema: wang-person/v1
id: p_VYLdp3SMRk2fp4poRrCNVP
status: active
merged_into: null
display_name: 王雲清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u3e6TKQadNDaofKGpg47oj
        subject_person_id: p_VYLdp3SMRk2fp4poRrCNVP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NcQ87eSd8Ci7BQg8QGmaNe
          claim_id: c_u3e6TKQadNDaofKGpg47oj
          source_id: s_pey1ri4q3WmDjRRcJs8iwk
          stance: supports
          locator: CBDB:71387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71387）
          source: &a1
            id: s_pey1ri4q3WmDjRRcJs8iwk
            source_type: api_record
            title: 中国历代人物传记资料库：王雲清（CBDB 71387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71387&o=json
            external_identifier: CBDB:71387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RG9RdF1hHjg8gUtFx6Tsk1
        subject_person_id: p_VYLdp3SMRk2fp4poRrCNVP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1852年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYqv8uDyhTYLJuD8iRcP24
          claim_id: c_RG9RdF1hHjg8gUtFx6Tsk1
          source_id: s_pey1ri4q3WmDjRRcJs8iwk
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
        id: c_5nf2YcfYZ4BRVR5DJfYYZU
        subject_person_id: p_VYLdp3SMRk2fp4poRrCNVP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲清（生于1852年），清人物。籍贯儋州。（中国历代人物传记资料库 CBDB 71387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OegA8bux5olB926uhWiiSe
          claim_id: c_5nf2YcfYZ4BRVR5DJfYYZU
          source_id: s_pey1ri4q3WmDjRRcJs8iwk
          stance: supports
          locator: CBDB:71387
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

# 王雲清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲清 | accepted |
| birth.date | 1852年 | accepted |
| bio.summary | 王雲清（生于1852年），清人物。籍贯儋州。（中国历代人物传记资料库 CBDB 71387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲清（CBDB 71387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71387&o=json)
