---
schema: wang-person/v1
id: p_r88nPKCqjVcvF1LAPaAHNc
status: active
merged_into: null
display_name: 王南仲
cbdb_id: 526733
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L6NRyq1sUuUP5E7G59hkBs
        subject_person_id: p_r88nPKCqjVcvF1LAPaAHNc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南仲，史料所见人物。本项目依据《中国历代人物传记资料库：王南仲（CBDB 526733）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_tgW3CyK4StjwD89CBe34ei
          claim_id: c_L6NRyq1sUuUP5E7G59hkBs
          source_id: s_ij5eitt8bidiD7qRLb8yqD
          stance: supports
          locator: CBDB:526733
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_ij5eitt8bidiD7qRLb8yqD
            source_type: api_record
            title: 中国历代人物传记资料库：王南仲（CBDB 526733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526733&o=json
            external_identifier: CBDB:526733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LWcitHD7vFBHuJgCgVSrEB
        subject_person_id: p_r88nPKCqjVcvF1LAPaAHNc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王南仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_gJiH6Hc69wNrZ9KsUoSBnP
          claim_id: c_LWcitHD7vFBHuJgCgVSrEB
          source_id: s_ij5eitt8bidiD7qRLb8yqD
          stance: supports
          locator: CBDB:526733
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_mZmK2MXfGrDzIaaYSmwLJg
        subject_person_id: p_r88nPKCqjVcvF1LAPaAHNc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y3Y6HkmzixiBERDAuwhHZ6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7zdyOnDlROnv_vKlrdrUXh
          claim_id: c_mZmK2MXfGrDzIaaYSmwLJg
          source_id: s_ozqQVWwuJxzAFq8sSYvE1j
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12857：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ozqQVWwuJxzAFq8sSYvE1j
            source_type: api_record
            title: 中国历代人物传记资料库：王用汝（CBDB 69159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json
            external_identifier: CBDB:69159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.132Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Y3Y6HkmzixiBERDAuwhHZ6
        status: active
        display_name: 王用汝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王南仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王南仲，史料所见人物。本项目依据《中国历代人物传记资料库：王南仲（CBDB 526733）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王南仲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Y3Y6HkmzixiBERDAuwhHZ6 | 王用汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王南仲（CBDB 526733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526733&o=json)
- [中国历代人物传记资料库：王用汝（CBDB 69159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69159&o=json)
