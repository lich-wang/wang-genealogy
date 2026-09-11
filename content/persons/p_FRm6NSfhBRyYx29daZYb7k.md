---
schema: wang-person/v1
id: p_FRm6NSfhBRyYx29daZYb7k
status: active
merged_into: null
display_name: 王文達
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2YV4Bdv5HMCL4BSJiyhhW
        subject_person_id: p_FRm6NSfhBRyYx29daZYb7k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NaNVitsiKyFVixDgALoDYU
          claim_id: c_K2YV4Bdv5HMCL4BSJiyhhW
          source_id: s_7AxHhh7vjDKHUHNn9qLrCV
          stance: supports
          locator: CBDB:233434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233434）
          source: &a1
            id: s_7AxHhh7vjDKHUHNn9qLrCV
            source_type: api_record
            title: 中国历代人物传记资料库：王文達（CBDB 233434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233434&o=json
            external_identifier: CBDB:233434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.715Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BMx17TAvJG3wtZCNueX8CN
        subject_person_id: p_FRm6NSfhBRyYx29daZYb7k
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
        - id: cs_evga8o6BGvsSha2vXNsoT8
          claim_id: c_BMx17TAvJG3wtZCNueX8CN
          source_id: s_7AxHhh7vjDKHUHNn9qLrCV
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
        id: c_zUfmXdWDVFWr1Oj2k77Djc
        subject_person_id: p_FRm6NSfhBRyYx29daZYb7k
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iWr0h_yTA6xQ2e-vdTuIZ9
          claim_id: c_zUfmXdWDVFWr1Oj2k77Djc
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
  other: []
---

# 王文達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文達 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王文達（CBDB 233434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233434&o=json)
