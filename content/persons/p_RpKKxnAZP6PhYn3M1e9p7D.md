---
schema: wang-person/v1
id: p_RpKKxnAZP6PhYn3M1e9p7D
status: active
merged_into: null
display_name: 王湛初
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DiCsrJjTc8cq7spbGANC1o
        subject_person_id: p_RpKKxnAZP6PhYn3M1e9p7D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王湛初
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AiGzqScEyia1aMGjX1P1sV
          claim_id: c_DiCsrJjTc8cq7spbGANC1o
          source_id: s_cyH9TQwNB5LHY1dPqTP1Hs
          stance: supports
          locator: CBDB:527383
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527383）
          source: &a1
            id: s_cyH9TQwNB5LHY1dPqTP1Hs
            source_type: api_record
            title: 中国历代人物传记资料库：王湛初（CBDB 527383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527383&o=json
            external_identifier: CBDB:527383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vvQBopx27GqvXQ24bksmJC
        subject_person_id: p_RpKKxnAZP6PhYn3M1e9p7D
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
        - id: cs_KXtrrpjeF4QmbX2nrqWR9R
          claim_id: c_vvQBopx27GqvXQ24bksmJC
          source_id: s_cyH9TQwNB5LHY1dPqTP1Hs
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
        id: c_PuLrybaLD2VUpKzmgFUREA
        subject_person_id: p_2LZsVShN931yXZMrQr8ka2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RpKKxnAZP6PhYn3M1e9p7D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JmVBVcWRIXxU28BMKIXRCB
          claim_id: c_PuLrybaLD2VUpKzmgFUREA
          source_id: s_eCqLAt765eqmLNLZCcUgSa
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13619：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eCqLAt765eqmLNLZCcUgSa
            source_type: api_record
            title: 中国历代人物传记资料库：王家屏（CBDB 123935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json
            external_identifier: CBDB:123935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2LZsVShN931yXZMrQr8ka2
        status: active
        display_name: 王家屏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王湛初

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王湛初 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2LZsVShN931yXZMrQr8ka2 | 王家屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家屏（CBDB 123935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123935&o=json)
- [中国历代人物传记资料库：王湛初（CBDB 527383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527383&o=json)
