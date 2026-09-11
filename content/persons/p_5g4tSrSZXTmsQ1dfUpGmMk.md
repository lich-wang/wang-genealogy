---
schema: wang-person/v1
id: p_5g4tSrSZXTmsQ1dfUpGmMk
status: active
merged_into: null
display_name: 王保舜
cbdb_id: 514370
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F6Ee9YrzcVfoVFY7pWHL72
        subject_person_id: p_5g4tSrSZXTmsQ1dfUpGmMk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保舜，清人物。中国历代人物传记资料库（CBDB）以人物编号 514370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_k0UDNi4AI_nlTUsrAgGHz7
          claim_id: c_F6Ee9YrzcVfoVFY7pWHL72
          source_id: s_eCQApAQiLUnr6SPLQa736i
          stance: supports
          locator: CBDB:514370
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_eCQApAQiLUnr6SPLQa736i
            source_type: api_record
            title: 中国历代人物传记资料库：王保舜（CBDB 514370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514370&o=json
            external_identifier: CBDB:514370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qGn5a2DRspvuxnByebqeTd
        subject_person_id: p_5g4tSrSZXTmsQ1dfUpGmMk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_6Ne1NzkjidNSR2dLEwx35J
          claim_id: c_qGn5a2DRspvuxnByebqeTd
          source_id: s_eCQApAQiLUnr6SPLQa736i
          stance: supports
          locator: CBDB:514370
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_eCQApAQiLUnr6SPLQa736i
            source_type: api_record
            title: 中国历代人物传记资料库：王保舜（CBDB 514370）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514370&o=json
            external_identifier: CBDB:514370
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s_6uIwYMAX9iFTdxukmTFn
        subject_person_id: p_PjGqvu9o7MybC5QxmLcjhr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5g4tSrSZXTmsQ1dfUpGmMk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EHCpNiTY57OfUb1GIJxT8_
          claim_id: c_s_6uIwYMAX9iFTdxukmTFn
          source_id: s_sZhSLMdd31VDU78gLiFgJq
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），380：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sZhSLMdd31VDU78gLiFgJq
            source_type: api_record
            title: 中国历代人物传记资料库：王柄（CBDB 57161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57161&o=json
            external_identifier: CBDB:57161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PjGqvu9o7MybC5QxmLcjhr
        status: active
        display_name: 王柄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王保舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保舜，清人物。中国历代人物传记资料库（CBDB）以人物编号 514370 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王保舜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PjGqvu9o7MybC5QxmLcjhr | 王柄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保舜（CBDB 514370）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=514370&o=json)
- [中国历代人物传记资料库：王柄（CBDB 57161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57161&o=json)
