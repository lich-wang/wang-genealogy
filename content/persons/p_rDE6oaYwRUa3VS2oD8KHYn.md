---
schema: wang-person/v1
id: p_rDE6oaYwRUa3VS2oD8KHYn
status: active
merged_into: null
display_name: 王貫
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_197GtSyHCe5Hp8TJnn5XRi
        subject_person_id: p_rDE6oaYwRUa3VS2oD8KHYn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HWRM2mPJt9Jh8FGSGL4wbE
          claim_id: c_197GtSyHCe5Hp8TJnn5XRi
          source_id: s_1oTDoA5Nw4TRLjQL23j8WH
          stance: supports
          locator: CBDB:136420
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（136420）
          source: &a1
            id: s_1oTDoA5Nw4TRLjQL23j8WH
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 136420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136420&o=json
            external_identifier: CBDB:136420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.345Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4oaqAKvAir98MsHJK77pZN
        subject_person_id: p_rDE6oaYwRUa3VS2oD8KHYn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQaP7PqLeJ1ChMkAh7mwCT
          claim_id: c_4oaqAKvAir98MsHJK77pZN
          source_id: s_1oTDoA5Nw4TRLjQL23j8WH
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
  ancestors:
    - claim:
        id: c_3R-UTjIda9Na_p1WHsBTZG
        subject_person_id: p_eV5c7tC3nbgohQT5xf6PWJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rDE6oaYwRUa3VS2oD8KHYn
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-Fythts-NSwbUc__qKwTs
          claim_id: c_3R-UTjIda9Na_p1WHsBTZG
          source_id: s_NNHUWydD1VEuUatqYXhomq
          stance: supports
          locator: 寶祐登科錄：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NNHUWydD1VEuUatqYXhomq
            source_type: api_record
            title: 中国历代人物传记资料库：王仲元（CBDB 137881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137881&o=json
            external_identifier: CBDB:137881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eV5c7tC3nbgohQT5xf6PWJ
        status: active
        display_name: 王仲元
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_eV5c7tC3nbgohQT5xf6PWJ | 王仲元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 136420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136420&o=json)
- [中国历代人物传记资料库：王仲元（CBDB 137881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137881&o=json)
