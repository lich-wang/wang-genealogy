---
schema: wang-person/v1
id: p_pebpi3PGKLwZ11MfeomHpy
status: active
merged_into: null
display_name: 王昭誨
cbdb_id: 190462
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v2mo23zsDS2d7xDuNycqEN
        subject_person_id: p_pebpi3PGKLwZ11MfeomHpy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭誨（卒于958年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 190462 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nv4xg-CEA0TrWW0VhSZcYX
          claim_id: c_v2mo23zsDS2d7xDuNycqEN
          source_id: s_F5g7UYv1CyS5jeqMFKytgZ
          stance: supports
          locator: CBDB:190462
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_F5g7UYv1CyS5jeqMFKytgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭誨（CBDB 190462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190462&o=json
            external_identifier: CBDB:190462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NBM2uQSnTcy8gTpi7AMXrT
        subject_person_id: p_pebpi3PGKLwZ11MfeomHpy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 958年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0958-01-01
            latest: 0958-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4L45Kzuwi7rApLwEm6SsBU
          claim_id: c_NBM2uQSnTcy8gTpi7AMXrT
          source_id: s_F5g7UYv1CyS5jeqMFKytgZ
          stance: supports
          locator: CBDB:190462
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 958
          source:
            id: s_F5g7UYv1CyS5jeqMFKytgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭誨（CBDB 190462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190462&o=json
            external_identifier: CBDB:190462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXt8JFkoLh4C5FYg2peoja
        subject_person_id: p_pebpi3PGKLwZ11MfeomHpy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PKkDm1DkSwKMb4HCWMfss6
          claim_id: c_mXt8JFkoLh4C5FYg2peoja
          source_id: s_F5g7UYv1CyS5jeqMFKytgZ
          stance: supports
          locator: CBDB:190462
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 958
          source:
            id: s_F5g7UYv1CyS5jeqMFKytgZ
            source_type: api_record
            title: 中国历代人物传记资料库：王昭誨（CBDB 190462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190462&o=json
            external_identifier: CBDB:190462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i96_bp4Z5lsdQZhFoGI3hS
        subject_person_id: p_qTHZVE85zKMHBCYt3CAjW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pebpi3PGKLwZ11MfeomHpy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3enwSmLhLIy9AI2MBy2-ax
          claim_id: c_i96_bp4Z5lsdQZhFoGI3hS
          source_id: s_VdJ8ABfSKq3J5M323rRp5R
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VdJ8ABfSKq3J5M323rRp5R
            source_type: api_record
            title: 中国历代人物传记资料库：王鎔（CBDB 92111）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json
            external_identifier: CBDB:92111
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qTHZVE85zKMHBCYt3CAjW2
        status: active
        display_name: 王鎔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昭誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昭誨（卒于958年），五代人物。中国历代人物传记资料库（CBDB）以人物编号 190462 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 958年 | accepted |
| name.primary | 王昭誨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qTHZVE85zKMHBCYt3CAjW2 | 王鎔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎔（CBDB 92111）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92111&o=json)
- [中国历代人物传记资料库：王昭誨（CBDB 190462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190462&o=json)
