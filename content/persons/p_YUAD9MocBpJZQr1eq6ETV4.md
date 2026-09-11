---
schema: wang-person/v1
id: p_YUAD9MocBpJZQr1eq6ETV4
status: active
merged_into: null
display_name: 王伯臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrS2iUQKvryzFH6wz4jiUo
        subject_person_id: p_YUAD9MocBpJZQr1eq6ETV4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iCW9HCvhEFx7hkvtt4NMyi
          claim_id: c_nrS2iUQKvryzFH6wz4jiUo
          source_id: s_rX2KgVopF5j1a9w6zb2H9b
          stance: supports
          locator: CBDB:522573
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（522573）
          source: &a1
            id: s_rX2KgVopF5j1a9w6zb2H9b
            source_type: api_record
            title: 中国历代人物传记资料库：王伯臣（CBDB 522573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522573&o=json
            external_identifier: CBDB:522573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZW8trRDaFVQHrSz9pbJ3pb
        subject_person_id: p_YUAD9MocBpJZQr1eq6ETV4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gp3q911XQcFH1Ev1DXz6fr
          claim_id: c_ZW8trRDaFVQHrSz9pbJ3pb
          source_id: s_rX2KgVopF5j1a9w6zb2H9b
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
        id: c_3VvPh0tvH7iFd4kvRn_u7K
        subject_person_id: p_YUAD9MocBpJZQr1eq6ETV4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HT1byH8rxSEHoPMAFQo6uz
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A60uxdwhPEMnq3x092Jq-y
          claim_id: c_3VvPh0tvH7iFd4kvRn_u7K
          source_id: s_JsaeHJVJrAG3MBSN1CqeX7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），9371：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JsaeHJVJrAG3MBSN1CqeX7
            source_type: api_record
            title: 中国历代人物传记资料库：王翬（CBDB 65886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json
            external_identifier: CBDB:65886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HT1byH8rxSEHoPMAFQo6uz
        status: active
        display_name: 王翬
        merged_into_person_id: null
  other: []
---

# 王伯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯臣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HT1byH8rxSEHoPMAFQo6uz | 王翬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯臣（CBDB 522573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=522573&o=json)
- [中国历代人物传记资料库：王翬（CBDB 65886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=65886&o=json)
