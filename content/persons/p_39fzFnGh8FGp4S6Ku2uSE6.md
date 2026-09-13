---
schema: wang-person/v1
id: p_39fzFnGh8FGp4S6Ku2uSE6
status: active
merged_into: null
display_name: 王潣
cbdb_id: 276558
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5muEiU4tSCf6R5xoBE9H5
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潣，史料所见人物。本项目依据《中国历代人物传记资料库：王潣（CBDB 276558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_0DLAkHeLGGrYbxQDQB3Fsu
          claim_id: c_Q5muEiU4tSCf6R5xoBE9H5
          source_id: s_9PD54p4stijxXvHv5LyEPH
          stance: supports
          locator: CBDB:276558
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_9PD54p4stijxXvHv5LyEPH
            source_type: api_record
            title: 中国历代人物传记资料库：王潣（CBDB 276558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276558&o=json
            external_identifier: CBDB:276558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_JFVznxVTU65cwMb7hDWzix
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wdPSnQB5nA1ZU3kDGZoPqW
          claim_id: c_JFVznxVTU65cwMb7hDWzix
          source_id: s_9PD54p4stijxXvHv5LyEPH
          stance: supports
          locator: CBDB:276558
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ymzzasFyzVfuab3ybBXqHP
        subject_person_id: p_39fzFnGh8FGp4S6Ku2uSE6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f8i9p9JzFPTMv3CWRTDLAz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WA8J2WDe58Pe5liOvS8_s1
          claim_id: c_ymzzasFyzVfuab3ybBXqHP
          source_id: s_jzgtJjtpFDj5d79TQgELye
          stance: supports
          locator: 正德六年進士登科錄:一卷，第二甲第七十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jzgtJjtpFDj5d79TQgELye
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 126900）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json
            external_identifier: CBDB:126900
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.294Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f8i9p9JzFPTMv3CWRTDLAz
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王潣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王潣，史料所见人物。本项目依据《中国历代人物传记资料库：王潣（CBDB 276558）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王潣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_f8i9p9JzFPTMv3CWRTDLAz | 王鑾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑾（CBDB 126900）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126900&o=json)
- [中国历代人物传记资料库：王潣（CBDB 276558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276558&o=json)
