---
schema: wang-person/v1
id: p_y8qq6ZZQLo2v36rcUxxeFP
status: active
merged_into: null
display_name: 王民戴
cbdb_id: 210127
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WdmQauUiHDa9sdYWDGVh2o
        subject_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民戴，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2Uy1bJuOxGfInduiSv8WJy
          claim_id: c_WdmQauUiHDa9sdYWDGVh2o
          source_id: s_J5137RB5XBBfH1NcWZvEBK
          stance: supports
          locator: CBDB:210127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_J5137RB5XBBfH1NcWZvEBK
            source_type: api_record
            title: 中国历代人物传记资料库：王民戴（CBDB 210127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json
            external_identifier: CBDB:210127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yrkg59jvbZBLtHfReKmtBF
        subject_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民戴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CGLd4oYHVwnbLnfjRKt2KR
          claim_id: c_yrkg59jvbZBLtHfReKmtBF
          source_id: s_J5137RB5XBBfH1NcWZvEBK
          stance: supports
          locator: CBDB:210127
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_I2ZhPfMeCrenGO1M-X-PtA
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K14ezBAzqieZowO69E5dtN
          claim_id: c_I2ZhPfMeCrenGO1M-X-PtA
          source_id: s_Au797MFLNHN0Up2ZjduvTx
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民戴 与 王民順 为同胞（CBDB 记「兄」），王民順 之父／母即 王民戴 之父／母。
          source:
            id: s_Au797MFLNHN0Up2ZjduvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王民戴（CBDB 210127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json
            external_identifier: CBDB:210127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7UQV2iHh1D4beyCGzjD1-R
        subject_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8qq6ZZQLo2v36rcUxxeFP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EE0fH2qrl3ZqLsXekHj3sC
          claim_id: c_7UQV2iHh1D4beyCGzjD1-R
          source_id: s_Au797MFLNHN0Up2ZjduvTx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Au797MFLNHN0Up2ZjduvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王民戴（CBDB 210127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json
            external_identifier: CBDB:210127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
---

# 王民戴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民戴，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210127） | accepted |
| name.primary | 王民戴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| other | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民戴（CBDB 210127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210127&o=json)
