---
schema: wang-person/v1
id: p_CHADHJsq81rcmswZHVVcRf
status: active
merged_into: null
display_name: 王連第
cbdb_id: 228979
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qbKqMAYCN4BBJmev4Jju5E
        subject_person_id: p_CHADHJsq81rcmswZHVVcRf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連第，明人物。中国历代人物传记资料库（CBDB）以人物编号 228979 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_UpiboH0vrYyUMP0I29MHtx
          claim_id: c_qbKqMAYCN4BBJmev4Jju5E
          source_id: s_tXekDi2cj1q1F9k5r86CTt
          stance: supports
          locator: CBDB:228979
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_tXekDi2cj1q1F9k5r86CTt
            source_type: api_record
            title: 中国历代人物传记资料库：王連第（CBDB 228979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228979&o=json
            external_identifier: CBDB:228979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_go1i4AR3HAdKrdJZvLj67n
        subject_person_id: p_CHADHJsq81rcmswZHVVcRf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連第
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9Dd7EJTfF6MFbb8ahVzxJF
          claim_id: c_go1i4AR3HAdKrdJZvLj67n
          source_id: s_tXekDi2cj1q1F9k5r86CTt
          stance: supports
          locator: CBDB:228979
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_tXekDi2cj1q1F9k5r86CTt
            source_type: api_record
            title: 中国历代人物传记资料库：王連第（CBDB 228979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228979&o=json
            external_identifier: CBDB:228979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CCplSWOLQZUz1WfHmxqhPO
        subject_person_id: p_RmcPLrzSEzw9YLSpR61Aoj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CHADHJsq81rcmswZHVVcRf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XKPXDB43hD5Ltiok9R-7e7
          claim_id: c_CCplSWOLQZUz1WfHmxqhPO
          source_id: s_tXekDi2cj1q1F9k5r86CTt
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第二甲第六十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RmcPLrzSEzw9YLSpR61Aoj
        status: active
        display_name: 王志
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王連第

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王連第，明人物。中国历代人物传记资料库（CBDB）以人物编号 228979 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王連第 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RmcPLrzSEzw9YLSpR61Aoj | 王志 | accepted |

## 外部来源

- [中国历代人物传记资料库：王連第（CBDB 228979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228979&o=json)
