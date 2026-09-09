---
schema: wang-person/v1
id: p_Q2Eqa4eDze4R8WYCpPMdxa
status: active
merged_into: null
display_name: 王宫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5pQoHpNnVD9SNDXoz661Hi
        subject_person_id: p_Q2Eqa4eDze4R8WYCpPMdxa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MjF1x789RNhTumkrU6fbxD
          claim_id: c_5pQoHpNnVD9SNDXoz661Hi
          source_id: s_nWae35K3KXqFGM5bfSUzgf
          stance: supports
          locator: CBDB:494181
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（494181）
          source: &a1
            id: s_nWae35K3KXqFGM5bfSUzgf
            source_type: api_record
            title: 中国历代人物传记资料库：王宫（CBDB 494181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494181&o=json
            external_identifier: CBDB:494181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q4Kczvc3JmohftSBM8TYZw
        subject_person_id: p_Q2Eqa4eDze4R8WYCpPMdxa
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
        - id: cs_t62DRGpyD153CfcutvsT1j
          claim_id: c_q4Kczvc3JmohftSBM8TYZw
          source_id: s_nWae35K3KXqFGM5bfSUzgf
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
  descendants: []
  other: []
---

# 王宫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宫（CBDB 494181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=494181&o=json)
