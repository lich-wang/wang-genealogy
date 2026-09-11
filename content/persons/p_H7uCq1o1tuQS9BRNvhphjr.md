---
schema: wang-person/v1
id: p_H7uCq1o1tuQS9BRNvhphjr
status: active
merged_into: null
display_name: 王吳兒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2HVT6ordRJr5c2vhgpV3mf
        subject_person_id: p_H7uCq1o1tuQS9BRNvhphjr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王吳兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxws3VjJoNJe85tad1e3ZL
          claim_id: c_2HVT6ordRJr5c2vhgpV3mf
          source_id: s_7fYWb3YH7c8G5EzFEfDmYJ
          stance: supports
          locator: CBDB:689333
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689333）
          source: &a1
            id: s_7fYWb3YH7c8G5EzFEfDmYJ
            source_type: api_record
            title: 中国历代人物传记资料库：王吳兒（CBDB 689333）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689333&o=json
            external_identifier: CBDB:689333
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nPmDCnksxxsPsvdMGi7zTD
        subject_person_id: p_H7uCq1o1tuQS9BRNvhphjr
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
        - id: cs_rs7sScbBdV3RGwLo3yn2kb
          claim_id: c_nPmDCnksxxsPsvdMGi7zTD
          source_id: s_7fYWb3YH7c8G5EzFEfDmYJ
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
        id: c_i82uoVJsRlCUoI8kRHiRs2
        subject_person_id: p_s2Ci3S96sKz8q9W2YdX1pM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_H7uCq1o1tuQS9BRNvhphjr
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YDzw3_xpKOz4Z3v_Ccr46q
          claim_id: c_i82uoVJsRlCUoI8kRHiRs2
          source_id: s_7fYWb3YH7c8G5EzFEfDmYJ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，40/王審瓊墓誌：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_s2Ci3S96sKz8q9W2YdX1pM
        status: active
        display_name: 王審瓊
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王吳兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王吳兒 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_s2Ci3S96sKz8q9W2YdX1pM | 王審瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王吳兒（CBDB 689333）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689333&o=json)
