---
schema: wang-person/v1
id: p_dGuAVLco7EADQ1XGJAMxiy
status: active
merged_into: null
display_name: 王獻民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R1LZmY9RpmQZVRjM9T1Bok
        subject_person_id: p_dGuAVLco7EADQ1XGJAMxiy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZcCxioSBLXutciAmpQLAm
          claim_id: c_R1LZmY9RpmQZVRjM9T1Bok
          source_id: s_xHWoiKENDFthT4syDUPhdk
          stance: supports
          locator: CBDB:317548
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317548）
          source: &a1
            id: s_xHWoiKENDFthT4syDUPhdk
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 317548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json
            external_identifier: CBDB:317548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UjBXZzNG74fDBPR7BJCrvx
        subject_person_id: p_dGuAVLco7EADQ1XGJAMxiy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317548）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CWg8YoNqeLWxVgDv16enWf
          claim_id: c_UjBXZzNG74fDBPR7BJCrvx
          source_id: s_xHWoiKENDFthT4syDUPhdk
          stance: supports
          locator: CBDB:317548
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bAxTdm6tfnhl9LzKhrT4_C
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGuAVLco7EADQ1XGJAMxiy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_doBsvyjkrg7dE4AocL9g1c
          claim_id: c_bAxTdm6tfnhl9LzKhrT4_C
          source_id: s_ntTkxeA0B0pks4yWNhys0O
          stance: supports
          locator: CBDB：兄弟 王彥民（204329）之父／母 王宗周
          quotation: null
          interpretation_note: 由兄弟关系推断：王獻民 与 王彥民 为同胞（CBDB 记「弟」），王彥民 之父／母即 王獻民 之父／母。
          source:
            id: s_ntTkxeA0B0pks4yWNhys0O
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 317548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json
            external_identifier: CBDB:317548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N5iAhWP4KE2AcDLMVJFVJe
        status: active
        display_name: 王宗周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NVnNqgsNjesmNtdu385-4o
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dGuAVLco7EADQ1XGJAMxiy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b8pjmnL7xY5tEs7Hkw9PoC
          claim_id: c_NVnNqgsNjesmNtdu385-4o
          source_id: s_ntTkxeA0B0pks4yWNhys0O
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ntTkxeA0B0pks4yWNhys0O
            source_type: api_record
            title: 中国历代人物传记资料库：王獻民（CBDB 317548）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json
            external_identifier: CBDB:317548
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
---

# 王獻民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻民 | accepted |
| bio.summary | 王獻民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317548） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5iAhWP4KE2AcDLMVJFVJe | 王宗周 | accepted |
| other | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王獻民（CBDB 317548）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317548&o=json)
