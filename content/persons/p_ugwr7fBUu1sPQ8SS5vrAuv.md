---
schema: wang-person/v1
id: p_ugwr7fBUu1sPQ8SS5vrAuv
status: active
merged_into: null
display_name: 王間
cbdb_id: 233809
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3F6hC3MPpCcFnk8WvxC24W
        subject_person_id: p_ugwr7fBUu1sPQ8SS5vrAuv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王間，明人物。籍贯南充。（中国历代人物传记资料库 CBDB 233809）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_33GU91hiAiaafj0-_4dm8x
          claim_id: c_3F6hC3MPpCcFnk8WvxC24W
          source_id: s_s8n1iF617ei2G4MxZU9k5j
          stance: supports
          locator: CBDB:233809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s8n1iF617ei2G4MxZU9k5j
            source_type: api_record
            title: 中国历代人物传记资料库：王間（CBDB 233809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233809&o=json
            external_identifier: CBDB:233809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZL7QjJvh8usKSSjdMZ9JdR
        subject_person_id: p_ugwr7fBUu1sPQ8SS5vrAuv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王間
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GCZmYQUy7yMA23QAhMKqxy
          claim_id: c_ZL7QjJvh8usKSSjdMZ9JdR
          source_id: s_s8n1iF617ei2G4MxZU9k5j
          stance: supports
          locator: CBDB:233809
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HaDYYgRWOQBBYefnrwP4l2
        subject_person_id: p_Rv5ych5iExch2twdfSXkLP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ugwr7fBUu1sPQ8SS5vrAuv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9G-iY2Zq3LSPw56mTQEkyA
          claim_id: c_HaDYYgRWOQBBYefnrwP4l2
          source_id: s_s8n1iF617ei2G4MxZU9k5j
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第三甲第三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s8n1iF617ei2G4MxZU9k5j
            source_type: api_record
            title: 中国历代人物传记资料库：王間（CBDB 233809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233809&o=json
            external_identifier: CBDB:233809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王間

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王間，明人物。籍贯南充。（中国历代人物传记资料库 CBDB 233809） | accepted |
| name.primary | 王間 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王間（CBDB 233809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233809&o=json)
