---
schema: wang-person/v1
id: p_1z83GLfcsWE9Kuamp9WTj3
status: active
merged_into: null
display_name: 王世某
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDb1brG4t2LSMPNuXSduD3
        subject_person_id: p_1z83GLfcsWE9Kuamp9WTj3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dAFpCfLRa2GC3ZnpBs9dQz
          claim_id: c_hDb1brG4t2LSMPNuXSduD3
          source_id: s_Wahgm1PRjLxw1Nqrjp2cTM
          stance: supports
          locator: CBDB:517434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（517434）
          source: &a1
            id: s_Wahgm1PRjLxw1Nqrjp2cTM
            source_type: api_record
            title: 中国历代人物传记资料库：王世某（CBDB 517434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517434&o=json
            external_identifier: CBDB:517434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.311Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AGD5e7i6UNbnTBzB9mXPdU
        subject_person_id: p_1z83GLfcsWE9Kuamp9WTj3
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
        - id: cs_rbNMi3SsZPM4Yqn443sPQe
          claim_id: c_AGD5e7i6UNbnTBzB9mXPdU
          source_id: s_Wahgm1PRjLxw1Nqrjp2cTM
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
        id: c_EEZZ-hfHlIDfAJQy7gkI1y
        subject_person_id: p_Q7ggBttVytDDHAgopL9CKb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1z83GLfcsWE9Kuamp9WTj3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_frrsaJkyvrIhrJYOLfXRjB
          claim_id: c_EEZZ-hfHlIDfAJQy7gkI1y
          source_id: s_Wahgm1PRjLxw1Nqrjp2cTM
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1887：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q7ggBttVytDDHAgopL9CKb
        status: active
        display_name: 王鳳生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王世某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世某 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Q7ggBttVytDDHAgopL9CKb | 王鳳生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世某（CBDB 517434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=517434&o=json)
