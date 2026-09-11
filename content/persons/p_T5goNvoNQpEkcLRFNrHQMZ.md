---
schema: wang-person/v1
id: p_T5goNvoNQpEkcLRFNrHQMZ
status: active
merged_into: null
display_name: 王同京
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oAmcMFLjG23NedWnM21mj6
        subject_person_id: p_T5goNvoNQpEkcLRFNrHQMZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同京
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rCz3BmSG9B2CPGCC32Rb4w
          claim_id: c_oAmcMFLjG23NedWnM21mj6
          source_id: s_2jGDLbf7NG2QmdCSnfsUV7
          stance: supports
          locator: CBDB:230472
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（230472）
          source: &a1
            id: s_2jGDLbf7NG2QmdCSnfsUV7
            source_type: api_record
            title: 中国历代人物传记资料库：王同京（CBDB 230472）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230472&o=json
            external_identifier: CBDB:230472
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o4f44wrPJ471AALGBbXTLz
        subject_person_id: p_T5goNvoNQpEkcLRFNrHQMZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2UNq5Vw7ktDsEPdWKrix1G
          claim_id: c_o4f44wrPJ471AALGBbXTLz
          source_id: s_2jGDLbf7NG2QmdCSnfsUV7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_t-8aQjzQ9qSwO3e4KZq57v
        subject_person_id: p_T5goNvoNQpEkcLRFNrHQMZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oYShNGR9e2YVy71LdVhQbQ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cmodu3518kBrCfqEVsayw
          claim_id: c_t-8aQjzQ9qSwO3e4KZq57v
          source_id: s_Mrpj37C8DH4qVHGNGQntYM
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第七十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Mrpj37C8DH4qVHGNGQntYM
            source_type: api_record
            title: 中国历代人物传记资料库：王一鳴（CBDB 207264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json
            external_identifier: CBDB:207264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.915Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oYShNGR9e2YVy71LdVhQbQ
        status: active
        display_name: 王一鳴
        merged_into_person_id: null
  other: []
---

# 王同京

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同京 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oYShNGR9e2YVy71LdVhQbQ | 王一鳴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同京（CBDB 230472）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=230472&o=json)
- [中国历代人物传记资料库：王一鳴（CBDB 207264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207264&o=json)
