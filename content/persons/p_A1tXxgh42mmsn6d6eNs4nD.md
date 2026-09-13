---
schema: wang-person/v1
id: p_A1tXxgh42mmsn6d6eNs4nD
status: active
merged_into: null
display_name: 王奉忠
cbdb_id: 158747
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bF7SqGmChCQ5vuGKeJBvqN
        subject_person_id: p_A1tXxgh42mmsn6d6eNs4nD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉忠，史料所见人物。本项目依据《中国历代人物传记资料库：王奉忠（CBDB 158747）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_fczrUpZ3UbaKD1S3WslJq7
          claim_id: c_bF7SqGmChCQ5vuGKeJBvqN
          source_id: s_wfMJV9c3y3EUCMyNCj4o5B
          stance: supports
          locator: CBDB:158747
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_wfMJV9c3y3EUCMyNCj4o5B
            source_type: api_record
            title: 中国历代人物传记资料库：王奉忠（CBDB 158747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158747&o=json
            external_identifier: CBDB:158747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ey65EeAEC9Gv8itC1oDHsJ
        subject_person_id: p_A1tXxgh42mmsn6d6eNs4nD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奉忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xo4TrmyZvN3tpNu4oN3LKc
          claim_id: c_Ey65EeAEC9Gv8itC1oDHsJ
          source_id: s_wfMJV9c3y3EUCMyNCj4o5B
          stance: supports
          locator: CBDB:158747
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_S_EINfaV6tEGcnT4Z3NLN0
        subject_person_id: p_A1tXxgh42mmsn6d6eNs4nD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eqTLPp4L1yE8imCTDAgei5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YBvTvwUI8BVymC7d2RIHlQ
          claim_id: c_S_EINfaV6tEGcnT4Z3NLN0
          source_id: s_wfMJV9c3y3EUCMyNCj4o5B
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wfMJV9c3y3EUCMyNCj4o5B
            source_type: api_record
            title: 中国历代人物传记资料库：王奉忠（CBDB 158747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158747&o=json
            external_identifier: CBDB:158747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eqTLPp4L1yE8imCTDAgei5
        status: active
        display_name: 王英進
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_4PqXQF4-uVoMIWO6uNiQpB
        subject_person_id: p_A1tXxgh42mmsn6d6eNs4nD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHlCDaTV-yakvThoX9_bWG
          claim_id: c_4PqXQF4-uVoMIWO6uNiQpB
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SQTm9bfti1Cf4E7AWrBph
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 141823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json
            external_identifier: CBDB:141823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xT91PgYZaQ28ZWS5H1F1Pb
        status: active
        display_name: 王文幹
        merged_into_person_id: null
  other: []
---

# 王奉忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王奉忠，史料所见人物。本项目依据《中国历代人物传记资料库：王奉忠（CBDB 158747）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王奉忠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_eqTLPp4L1yE8imCTDAgei5 | 王英進 | accepted |
| descendants | p_xT91PgYZaQ28ZWS5H1F1Pb | 王文幹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奉忠（CBDB 158747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158747&o=json)
- [中国历代人物传记资料库：王文幹（CBDB 141823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json)
