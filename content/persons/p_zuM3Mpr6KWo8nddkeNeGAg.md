---
schema: wang-person/v1
id: p_zuM3Mpr6KWo8nddkeNeGAg
status: active
merged_into: null
display_name: 王建初
cbdb_id: 185234
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xQirF4JZWy5fPBFsPX2JfJ
        subject_person_id: p_zuM3Mpr6KWo8nddkeNeGAg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建初（卒于866年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185234 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_rN4211Ex5JUD1hz4d_Syp3
          claim_id: c_xQirF4JZWy5fPBFsPX2JfJ
          source_id: s_hZJY1qcgQKknsE3rX9FwVh
          stance: supports
          locator: CBDB:185234
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_hZJY1qcgQKknsE3rX9FwVh
            source_type: api_record
            title: 中国历代人物传记资料库：王建初（CBDB 185234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185234&o=json
            external_identifier: CBDB:185234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_FZSsLHSiavvGytMB9ZhP2F
        subject_person_id: p_zuM3Mpr6KWo8nddkeNeGAg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 866年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0866-01-01
            latest: 0866-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ea4LcCv6aHjZQ5kX9KEthL
          claim_id: c_FZSsLHSiavvGytMB9ZhP2F
          source_id: s_hZJY1qcgQKknsE3rX9FwVh
          stance: supports
          locator: CBDB:185234
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 866
          source:
            id: s_hZJY1qcgQKknsE3rX9FwVh
            source_type: api_record
            title: 中国历代人物传记资料库：王建初（CBDB 185234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185234&o=json
            external_identifier: CBDB:185234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NZ5rP4qeT8UZbw761N5Ed
        subject_person_id: p_zuM3Mpr6KWo8nddkeNeGAg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王建初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oErJBkT6TKFMh6xKGjmZJa
          claim_id: c_3NZ5rP4qeT8UZbw761N5Ed
          source_id: s_hZJY1qcgQKknsE3rX9FwVh
          stance: supports
          locator: CBDB:185234
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 866
          source:
            id: s_hZJY1qcgQKknsE3rX9FwVh
            source_type: api_record
            title: 中国历代人物传记资料库：王建初（CBDB 185234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185234&o=json
            external_identifier: CBDB:185234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_amY2jNOycyDCzTmiHTJhca
        subject_person_id: p_MbxgwAf2NWWEn85CBY6PsB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zuM3Mpr6KWo8nddkeNeGAg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDsNyRYV_o_kPRkx2fO9-_
          claim_id: c_amY2jNOycyDCzTmiHTJhca
          source_id: s_Q1iPSuwmWyCAdnQoNLNRij
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q1iPSuwmWyCAdnQoNLNRij
            source_type: api_record
            title: 中国历代人物传记资料库：王叔寧（CBDB 145015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json
            external_identifier: CBDB:145015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.644Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MbxgwAf2NWWEn85CBY6PsB
        status: active
        display_name: 王叔寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王建初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王建初（卒于866年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 185234 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 866年 | accepted |
| name.primary | 王建初 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MbxgwAf2NWWEn85CBY6PsB | 王叔寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王建初（CBDB 185234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185234&o=json)
- [中国历代人物传记资料库：王叔寧（CBDB 145015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145015&o=json)
