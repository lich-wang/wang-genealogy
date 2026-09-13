---
schema: wang-person/v1
id: p_prHqmerzCM6YpbMCaZuJpq
status: active
merged_into: null
display_name: 王茂績
cbdb_id: 221817
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JEjtAiAjmDC19QXcEvrQ7q
        subject_person_id: p_prHqmerzCM6YpbMCaZuJpq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂績，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221817）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_69NvSSvReKV9n3rf2TRQDu
          claim_id: c_JEjtAiAjmDC19QXcEvrQ7q
          source_id: s_etdr5hy5MsgFdQm5GjQVGJ
          stance: supports
          locator: CBDB:221817
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_etdr5hy5MsgFdQm5GjQVGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王茂績（CBDB 221817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221817&o=json
            external_identifier: CBDB:221817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zi5SqjpjGNLmjMBMpYWcDH
        subject_person_id: p_prHqmerzCM6YpbMCaZuJpq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iGQ7SfucSGV5MbEpoHfXND
          claim_id: c_zi5SqjpjGNLmjMBMpYWcDH
          source_id: s_etdr5hy5MsgFdQm5GjQVGJ
          stance: supports
          locator: CBDB:221817
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iL1-NfsXR5wrZXw3J4mNyw
        subject_person_id: p_prHqmerzCM6YpbMCaZuJpq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rVpm0ImIpweJgomDCsUZ08
          claim_id: c_iL1-NfsXR5wrZXw3J4mNyw
          source_id: s_etdr5hy5MsgFdQm5GjQVGJ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_etdr5hy5MsgFdQm5GjQVGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王茂績（CBDB 221817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221817&o=json
            external_identifier: CBDB:221817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_qMg6Q8CEPodQMPp2EgjAAi
        status: active
        display_name: 王以通
        merged_into_person_id: null
  other: []
---

# 王茂績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王茂績，明人物。萬曆八年進士。（中国历代人物传记资料库 CBDB 221817） | accepted |
| name.primary | 王茂績 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_qMg6Q8CEPodQMPp2EgjAAi | 王以通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂績（CBDB 221817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221817&o=json)
