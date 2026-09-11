---
schema: wang-person/v1
id: p_sziDCoXrKTUefCn4kaJ4E8
status: active
merged_into: null
display_name: 王坊京
cbdb_id: 294722
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VaC3EFFt4iPL235Rx7t2eJ
        subject_person_id: p_sziDCoXrKTUefCn4kaJ4E8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坊京，明人物。中国历代人物传记资料库（CBDB）以人物编号 294722 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs__i7Be9fDJD9627r8mwAIAr
          claim_id: c_VaC3EFFt4iPL235Rx7t2eJ
          source_id: s_akrNxoN4sE8z3CwMFAqxAQ
          stance: supports
          locator: CBDB:294722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_akrNxoN4sE8z3CwMFAqxAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坊京（CBDB 294722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294722&o=json
            external_identifier: CBDB:294722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_i8Y7TZuyhrWdgt7svy3PFP
        subject_person_id: p_sziDCoXrKTUefCn4kaJ4E8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坊京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mkmht7Pw7jCs9iSgyAjz4o
          claim_id: c_i8Y7TZuyhrWdgt7svy3PFP
          source_id: s_akrNxoN4sE8z3CwMFAqxAQ
          stance: supports
          locator: CBDB:294722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_akrNxoN4sE8z3CwMFAqxAQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坊京（CBDB 294722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294722&o=json
            external_identifier: CBDB:294722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_b22sBrTSXCA62CWhkous34
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sziDCoXrKTUefCn4kaJ4E8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZEnpoL0sZ6T0_s-K-aV3P1
          claim_id: c_b22sBrTSXCA62CWhkous34
          source_id: s_akrNxoN4sE8z3CwMFAqxAQ
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二百一十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_35PzL233nqJ85Q2BX1Q5dA
        status: active
        display_name: 王良柱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王坊京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王坊京，明人物。中国历代人物传记资料库（CBDB）以人物编号 294722 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王坊京 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_35PzL233nqJ85Q2BX1Q5dA | 王良柱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坊京（CBDB 294722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294722&o=json)
