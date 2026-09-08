---
schema: wang-person/v1
id: p_9bZbYkH5RjL9GBaT5uVJBX
status: active
merged_into: null
display_name: 王屴
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b2BhGiW7fRBaTX3Cd98bix
        subject_person_id: p_9bZbYkH5RjL9GBaT5uVJBX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屴（卒于761年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_oDMQ8FnBi3JfCsyvqCVkZx
          claim_id: c_b2BhGiW7fRBaTX3Cd98bix
          source_id: s_DFM58ihqeA5HAa4rYM7wsa
          stance: supports
          locator: CBDB:175876
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_DFM58ihqeA5HAa4rYM7wsa
            source_type: api_record
            title: 中国历代人物传记资料库：王屴（CBDB 175876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175876&o=json
            external_identifier: CBDB:175876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_K8mk6uN3yW6mR7GYGfW7zM
        subject_person_id: p_9bZbYkH5RjL9GBaT5uVJBX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 761年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0761-01-01
            latest: 0761-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dh7p6aSAMw4MBqhgTyj6WR
          claim_id: c_K8mk6uN3yW6mR7GYGfW7zM
          source_id: s_DFM58ihqeA5HAa4rYM7wsa
          stance: supports
          locator: CBDB:175876
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 761
          source:
            id: s_DFM58ihqeA5HAa4rYM7wsa
            source_type: api_record
            title: 中国历代人物传记资料库：王屴（CBDB 175876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175876&o=json
            external_identifier: CBDB:175876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_RuRfLyijR5bkYr91LDUdGs
        subject_person_id: p_9bZbYkH5RjL9GBaT5uVJBX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E59UJbRABTz719tGYUTa96
          claim_id: c_RuRfLyijR5bkYr91LDUdGs
          source_id: s_DFM58ihqeA5HAa4rYM7wsa
          stance: supports
          locator: CBDB:175876
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 761
          source:
            id: s_DFM58ihqeA5HAa4rYM7wsa
            source_type: api_record
            title: 中国历代人物传记资料库：王屴（CBDB 175876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175876&o=json
            external_identifier: CBDB:175876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xwT1cdhBh3NcXwE4g65TdM
        subject_person_id: p_QkhCaGoZhcyF2De4tN5s15
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9bZbYkH5RjL9GBaT5uVJBX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hj3PRtwkG21E1d2bsB9bEm
          claim_id: c_xwT1cdhBh3NcXwE4g65TdM
          source_id: s_XWWJ8icSstrGKhd5mUjJqm
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_XWWJ8icSstrGKhd5mUjJqm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王文濟（175869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json
            external_identifier: CBDB:175869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_QkhCaGoZhcyF2De4tN5s15
        status: active
        display_name: 王文济
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王屴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王屴（卒于761年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 175876 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 761年 | accepted |
| name.primary | 王屴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QkhCaGoZhcyF2De4tN5s15 | 王文济 | accepted |

## 外部来源

- [中国历代人物传记资料库：王屴（CBDB 175876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175876&o=json)
- [CBDB 中国历代人物传记资料库：王文濟（175869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175869&o=json)
