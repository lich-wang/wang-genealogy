---
schema: wang-person/v1
id: p_u7GXw3v5n3G5GWaLFES7Kq
status: active
merged_into: null
display_name: 王綰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qWZupby23bBs8drEg7e9uu
        subject_person_id: p_u7GXw3v5n3G5GWaLFES7Kq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Aodi7mp1WNuLvCYFN7SHo8
          claim_id: c_qWZupby23bBs8drEg7e9uu
          source_id: s_dz6RvC58hBSCnNzp8gPyT5
          stance: supports
          locator: CBDB:145430
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145430）
          source: &a1
            id: s_dz6RvC58hBSCnNzp8gPyT5
            source_type: api_record
            title: 中国历代人物传记资料库：王綰（CBDB 145430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145430&o=json
            external_identifier: CBDB:145430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6zPFfuQNAS57t5MMzuUgix
        subject_person_id: p_u7GXw3v5n3G5GWaLFES7Kq
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1C4q8CEZXsb6Dkiwmfy5bC
          claim_id: c_6zPFfuQNAS57t5MMzuUgix
          source_id: s_dz6RvC58hBSCnNzp8gPyT5
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
        id: c_7M7MohJ8JJwTKCg2fgoWZw
        subject_person_id: p_u7GXw3v5n3G5GWaLFES7Kq
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
        - id: cs_cEcD3w3Uze3ne6M6BDe7BS
          claim_id: c_7M7MohJ8JJwTKCg2fgoWZw
          source_id: s_dz6RvC58hBSCnNzp8gPyT5
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

# 王綰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綰 | accepted |
| death.date | 797年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綰（CBDB 145430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145430&o=json)
