---
schema: wang-person/v1
id: p_AxGKebPJ8nSzqUKDzS1Lwr
status: active
merged_into: null
display_name: 王藺
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKa8he9hdaoCTg7ou2VR55
        subject_person_id: p_AxGKebPJ8nSzqUKDzS1Lwr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WMKPodMFAXNmHm8HqaBnGT
          claim_id: c_DKa8he9hdaoCTg7ou2VR55
          source_id: s_9g9DGB2AT8isaCKdwTBw4Q
          stance: supports
          locator: CBDB:3966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3966）
          source: &a1
            id: s_9g9DGB2AT8isaCKdwTBw4Q
            source_type: api_record
            title: 中国历代人物传记资料库：王藺（CBDB 3966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3966&o=json
            external_identifier: CBDB:3966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.436Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BV1sJ4gtCVoCKPPy1KwMEJ
        subject_person_id: p_AxGKebPJ8nSzqUKDzS1Lwr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKmx2QA6bz2LYB4gQJnDFY
          claim_id: c_BV1sJ4gtCVoCKPPy1KwMEJ
          source_id: s_9g9DGB2AT8isaCKdwTBw4Q
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_O__DXaeixibuBQUc81u5l5
        subject_person_id: p_AxGKebPJ8nSzqUKDzS1Lwr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RaXE2CnKeHQXnUh8331Wv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XwfDYPcoonRTsKtsm22qNV
          claim_id: c_O__DXaeixibuBQUc81u5l5
          source_id: s_VsVR67nj1BFG1cUkNQLuXB
          stance: supports
          locator: 宋人傳記資料索引(電子版)，652：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VsVR67nj1BFG1cUkNQLuXB
            source_type: api_record
            title: 中国历代人物传记资料库：王杆（CBDB 38994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38994&o=json
            external_identifier: CBDB:38994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.579Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4RaXE2CnKeHQXnUh8331Wv
        status: active
        display_name: 王杆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藺 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4RaXE2CnKeHQXnUh8331Wv | 王杆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杆（CBDB 38994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38994&o=json)
- [中国历代人物传记资料库：王藺（CBDB 3966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3966&o=json)
