---
schema: wang-person/v1
id: p_oJbqhM4toqrLyVqzdxD4jD
status: active
merged_into: null
display_name: 王命官
cbdb_id: 216551
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_K4WFXoHXXr3NKT6V1KK6yp
        subject_person_id: p_oJbqhM4toqrLyVqzdxD4jD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命官，明人物。萬曆五年進士，籍贯廬陵，入仕監生。（中国历代人物传记资料库 CBDB 216551）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tK455-e-73OLVFv3H7oMMd
          claim_id: c_K4WFXoHXXr3NKT6V1KK6yp
          source_id: s_X42gD2bjMeiNXGQa1kBkn4
          stance: supports
          locator: CBDB:216551
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_X42gD2bjMeiNXGQa1kBkn4
            source_type: api_record
            title: 中国历代人物传记资料库：王命官（CBDB 216551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216551&o=json
            external_identifier: CBDB:216551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FfFBZJ9cs1YLqcJmAxgdNM
        subject_person_id: p_oJbqhM4toqrLyVqzdxD4jD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王命官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Y4hUX95W6178LHLvEGSGF2
          claim_id: c_FfFBZJ9cs1YLqcJmAxgdNM
          source_id: s_X42gD2bjMeiNXGQa1kBkn4
          stance: supports
          locator: CBDB:216551
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6hYNbe-7YPQw96Z8yeoR1d
        subject_person_id: p_F6K893ZAWfJwH2zn9PeMz7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oJbqhM4toqrLyVqzdxD4jD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_shqydHFTGXA22vILy8QwM5
          claim_id: c_6hYNbe-7YPQw96Z8yeoR1d
          source_id: s_t2X7tBmP5fJGcRZni3Y-3p
          stance: supports
          locator: CBDB：兄弟 王命爵（206334）之父／母 王文炳
          quotation: null
          interpretation_note: 由兄弟关系推断：王命官 与 王命爵 为同胞（CBDB 记「弟」），王命爵 之父／母即 王命官 之父／母。
          source:
            id: s_t2X7tBmP5fJGcRZni3Y-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王命官（CBDB 216551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216551&o=json
            external_identifier: CBDB:216551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F6K893ZAWfJwH2zn9PeMz7
        status: active
        display_name: 王文炳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RfZ0P83HtyDvGvf_ozBK3e
        subject_person_id: p_fSRoLzmGTyVibfPFCP5xFh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oJbqhM4toqrLyVqzdxD4jD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSBoRNHs3FU3ZwQBrthjr7
          claim_id: c_RfZ0P83HtyDvGvf_ozBK3e
          source_id: s_t2X7tBmP5fJGcRZni3Y-3p
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206334 王命爵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t2X7tBmP5fJGcRZni3Y-3p
            source_type: api_record
            title: 中国历代人物传记资料库：王命官（CBDB 216551）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216551&o=json
            external_identifier: CBDB:216551
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fSRoLzmGTyVibfPFCP5xFh
        status: active
        display_name: 王命爵
        merged_into_person_id: null
---

# 王命官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王命官，明人物。萬曆五年進士，籍贯廬陵，入仕監生。（中国历代人物传记资料库 CBDB 216551） | accepted |
| name.primary | 王命官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F6K893ZAWfJwH2zn9PeMz7 | 王文炳 | accepted |
| other | p_fSRoLzmGTyVibfPFCP5xFh | 王命爵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王命官（CBDB 216551）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216551&o=json)
