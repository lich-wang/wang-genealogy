---
schema: wang-person/v1
id: p_MCd4K9PZMg29mQ8yEPM4LA
status: active
merged_into: null
display_name: 王廷相
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k3CyLVtzecXPTy1FdTjxot
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷相
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KFYbKbPi6F5mY4x1zNT98K
          claim_id: c_k3CyLVtzecXPTy1FdTjxot
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: CBDB:58606
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（58606）
          source: &a1
            id: s_D22BhvSM8bKdiDH8P5NwM7
            source_type: api_record
            title: 中国历代人物传记资料库：王廷相（CBDB 58606）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58606&o=json
            external_identifier: CBDB:58606
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6ths9yp2eAboF2miYGtBM6
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1851年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5UQRhGx4QvLm3LRevqg3Zk
          claim_id: c_6ths9yp2eAboF2miYGtBM6
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Z4yaF7vPkBHvHu7MoeTsDG
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1900年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W5VncbbiLjoACZUNHgS3Hn
          claim_id: c_Z4yaF7vPkBHvHu7MoeTsDG
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qa2s4D7F13QjeeSQri9aJd
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
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
        - id: cs_qG6NNVe3W6xFKf7vYENYFA
          claim_id: c_qa2s4D7F13QjeeSQri9aJd
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ozFvgQcj88UHoDEvI6VpVE
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TRtJneYSY8YR9kEAnqFWse
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9cr4x0zklFE9E0eLKuTpI
          claim_id: c_ozFvgQcj88UHoDEvI6VpVE
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1867：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TRtJneYSY8YR9kEAnqFWse
        status: active
        display_name: 王晉豐
        merged_into_person_id: null
    - claim:
        id: c_FbL7vxP89AGgNf329CliM2
        subject_person_id: p_MCd4K9PZMg29mQ8yEPM4LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eX4figeaUfQvW3nH6pwLG5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gw2wfpgpbnS-ZYWpGgy5Ze
          claim_id: c_FbL7vxP89AGgNf329CliM2
          source_id: s_D22BhvSM8bKdiDH8P5NwM7
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1867：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eX4figeaUfQvW3nH6pwLG5
        status: active
        display_name: 王履豐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷相

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷相 | accepted |
| birth.date | 1851年 | accepted |
| death.date | 1900年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TRtJneYSY8YR9kEAnqFWse | 王晉豐 | accepted |
| children | p_eX4figeaUfQvW3nH6pwLG5 | 王履豐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷相（CBDB 58606）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=58606&o=json)
