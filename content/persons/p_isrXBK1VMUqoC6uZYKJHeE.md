---
schema: wang-person/v1
id: p_isrXBK1VMUqoC6uZYKJHeE
status: active
merged_into: null
display_name: 王讓
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L6QeAgawvZLdTYLsEpCjQR
        subject_person_id: p_isrXBK1VMUqoC6uZYKJHeE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_srpoyD1V55nJnjAukB4DbL
          claim_id: c_L6QeAgawvZLdTYLsEpCjQR
          source_id: s_NAmJk7QBq9kgAC1xMNywB6
          stance: supports
          locator: CBDB:330008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（330008）
          source: &a1
            id: s_NAmJk7QBq9kgAC1xMNywB6
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 330008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330008&o=json
            external_identifier: CBDB:330008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ppKtXW7TvaMA9s2EvEtvc7
        subject_person_id: p_isrXBK1VMUqoC6uZYKJHeE
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
        - id: cs_AL5R3YJZGwetoxbeykMHbH
          claim_id: c_ppKtXW7TvaMA9s2EvEtvc7
          source_id: s_NAmJk7QBq9kgAC1xMNywB6
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
        id: c_gk4rq9EakKiUqH5u8lsjfT
        subject_person_id: p_isrXBK1VMUqoC6uZYKJHeE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_aPcrqB9XkxSACSANyGxVsW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RF8D6q_rSGft7-ZrADqRJv
          claim_id: c_gk4rq9EakKiUqH5u8lsjfT
          source_id: s_DjdLKPpkYfPVp98V5ZvCZr
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第二甲第五十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DjdLKPpkYfPVp98V5ZvCZr
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 205226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json
            external_identifier: CBDB:205226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aPcrqB9XkxSACSANyGxVsW
        status: active
        display_name: 王軒
        merged_into_person_id: null
  other: []
---

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_aPcrqB9XkxSACSANyGxVsW | 王軒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 330008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=330008&o=json)
- [中国历代人物传记资料库：王軒（CBDB 205226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205226&o=json)
