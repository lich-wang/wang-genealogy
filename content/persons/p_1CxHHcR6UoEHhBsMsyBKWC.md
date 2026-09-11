---
schema: wang-person/v1
id: p_1CxHHcR6UoEHhBsMsyBKWC
status: active
merged_into: null
display_name: 王蘋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_68ayDV57ton9c4gqs8xTMA
        subject_person_id: p_1CxHHcR6UoEHhBsMsyBKWC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hbUhkPKXMG7EgsycGYfEK8
          claim_id: c_68ayDV57ton9c4gqs8xTMA
          source_id: s_um3xNPxhCKhr2A2e22SZL5
          stance: supports
          locator: CBDB:175921
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175921）
          source: &a1
            id: s_um3xNPxhCKhr2A2e22SZL5
            source_type: api_record
            title: 中国历代人物传记资料库：王蘋（CBDB 175921）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175921&o=json
            external_identifier: CBDB:175921
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_18rfT1ad3jpg78FYa7BhH3
        subject_person_id: p_1CxHHcR6UoEHhBsMsyBKWC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fePoZKLMy7k4a9Wd6CWrv8
          claim_id: c_18rfT1ad3jpg78FYa7BhH3
          source_id: s_um3xNPxhCKhr2A2e22SZL5
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
        id: c_5x6a5q8hrQ51ebDQHMzdKu
        subject_person_id: p_1CxHHcR6UoEHhBsMsyBKWC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘋（卒于917年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175921）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vBdXmgTsBa_fGmQ-HWgJr3
          claim_id: c_5x6a5q8hrQ51ebDQHMzdKu
          source_id: s_um3xNPxhCKhr2A2e22SZL5
          stance: supports
          locator: CBDB:175921
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YZze7Lln_GN2wsOdsqsm49
        subject_person_id: p_eReJ1uLz4wXetehw7XVZ4d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1CxHHcR6UoEHhBsMsyBKWC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__c4MekaBnRKw_o1H-cIRjY
          claim_id: c_YZze7Lln_GN2wsOdsqsm49
          source_id: s_um3xNPxhCKhr2A2e22SZL5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 8326：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eReJ1uLz4wXetehw7XVZ4d
        status: active
        display_name: 王鐐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王蘋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘋 | accepted |
| death.date | 917年 | accepted |
| bio.summary | 王蘋（卒于917年），唐人物。籍贯太原。（中国历代人物传记资料库 CBDB 175921） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eReJ1uLz4wXetehw7XVZ4d | 王鐐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王蘋（CBDB 175921）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175921&o=json)
