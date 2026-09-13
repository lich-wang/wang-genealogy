---
schema: wang-person/v1
id: p_Tffvt8PaRx7qSEiYdDgfFH
status: active
merged_into: null
display_name: 王淑陵
cbdb_id: 205297
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9FgvLP2WSZho19AqKFgVDx
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑陵（生于1535年），明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 205297）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_qOmFgWBPY8yt6b4AXR0qGg
          claim_id: c_9FgvLP2WSZho19AqKFgVDx
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r8oM3YSLG8TCQ2P7Wgo1PP
            source_type: api_record
            title: 中国历代人物传记资料库：王淑陵（CBDB 205297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json
            external_identifier: CBDB:205297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jq3cZNJNbevCdwjVVBPx73
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1535年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1535-01-01
            latest: 1535-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mr8wfcZCnDPp4QEV7z1XMJ
          claim_id: c_jq3cZNJNbevCdwjVVBPx73
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1535
          source:
            id: s_r8oM3YSLG8TCQ2P7Wgo1PP
            source_type: api_record
            title: 中国历代人物传记资料库：王淑陵（CBDB 205297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json
            external_identifier: CBDB:205297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_TVB59DPBxq6Pn4K5fkjrW2
        subject_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑陵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U7HbSiQJBeoJjxgtGGmRHz
          claim_id: c_TVB59DPBxq6Pn4K5fkjrW2
          source_id: s_r8oM3YSLG8TCQ2P7Wgo1PP
          stance: supports
          locator: CBDB:205297
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1535
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SvIybh73tngXBriaj4CYRm
        subject_person_id: p_vQ7CxFfVeDD5gVP5SnofRA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3aefzIfXLT6Q2rRdzM-G32
          claim_id: c_SvIybh73tngXBriaj4CYRm
          source_id: s_bdh78hDyKTZYMt8wkfB4ky
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bdh78hDyKTZYMt8wkfB4ky
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 331186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json
            external_identifier: CBDB:331186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vQ7CxFfVeDD5gVP5SnofRA
        status: active
        display_name: 王言
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BlRSeRVZoFmEfVqjrYxfuR
        subject_person_id: p_DuKTEEgBLTiBiRuzsJ8s2i
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VR3VEhfYXXuGV9ZTVOMbFE
          claim_id: c_BlRSeRVZoFmEfVqjrYxfuR
          source_id: s_jHS5dQwUjNtmXJKj18PLYB
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jHS5dQwUjNtmXJKj18PLYB
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 331184）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331184&o=json
            external_identifier: CBDB:331184
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DuKTEEgBLTiBiRuzsJ8s2i
        status: active
        display_name: 王鼎
        merged_into_person_id: null
    - claim:
        id: c_KxWji4RfP-XIhpMq_GzCcs
        subject_person_id: p_U7StYZwmqTXFLDijuCwzNA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Tffvt8PaRx7qSEiYdDgfFH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jm6Rzv0iJKUzEFn9sHh5Xr
          claim_id: c_KxWji4RfP-XIhpMq_GzCcs
          source_id: s_hWqCjA5UKaMR9kVjegp6Vn
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hWqCjA5UKaMR9kVjegp6Vn
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 331185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json
            external_identifier: CBDB:331185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_U7StYZwmqTXFLDijuCwzNA
        status: active
        display_name: 王緯
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王淑陵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑陵（生于1535年），明人物。明清進士進士，籍贯陽城，入仕進士。（中国历代人物传记资料库 CBDB 205297） | accepted |
| birth.date | 1535年 | accepted |
| name.primary | 王淑陵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vQ7CxFfVeDD5gVP5SnofRA | 王言 | accepted |
| ancestors | p_DuKTEEgBLTiBiRuzsJ8s2i | 王鼎 | accepted |
| ancestors | p_U7StYZwmqTXFLDijuCwzNA | 王緯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 331184）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331184&o=json)
- [中国历代人物传记资料库：王淑陵（CBDB 205297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205297&o=json)
- [中国历代人物传记资料库：王緯（CBDB 331185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331185&o=json)
- [中国历代人物传记资料库：王言（CBDB 331186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331186&o=json)
