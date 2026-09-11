---
schema: wang-person/v1
id: p_1Yww3BArYHAwhUU3c4fhMK
status: active
merged_into: null
display_name: 王遘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eZ1NMPFGPK8LL5uaC2CeKj
        subject_person_id: p_1Yww3BArYHAwhUU3c4fhMK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Kc5CdwHXchb6YotVyGE5Qr
          claim_id: c_eZ1NMPFGPK8LL5uaC2CeKj
          source_id: s_r9EM8Km6cyZtg8KGJ7yJ1g
          stance: supports
          locator: CBDB:155482
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（155482）
          source: &a1
            id: s_r9EM8Km6cyZtg8KGJ7yJ1g
            source_type: api_record
            title: 中国历代人物传记资料库：王遘（CBDB 155482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json
            external_identifier: CBDB:155482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oKidZhtThqsyQ8KXCYj6Nb
        subject_person_id: p_1Yww3BArYHAwhUU3c4fhMK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hyciLMkt2tzHJZ4m6RAdzc
          claim_id: c_oKidZhtThqsyQ8KXCYj6Nb
          source_id: s_r9EM8Km6cyZtg8KGJ7yJ1g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BHFpjbImT4jzHaZJusWntV
        subject_person_id: p_sSM4LF9AAPNVQ51D7otD4r
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Yww3BArYHAwhUU3c4fhMK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mkdOsScTv-cPYir85mSLwH
          claim_id: c_BHFpjbImT4jzHaZJusWntV
          source_id: s_r9EM8Km6cyZtg8KGJ7yJ1g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Zhenyuan 21：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sSM4LF9AAPNVQ51D7otD4r
        status: active
        display_name: 王郅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王遘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遘 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sSM4LF9AAPNVQ51D7otD4r | 王郅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遘（CBDB 155482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155482&o=json)
