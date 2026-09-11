---
schema: wang-person/v1
id: p_RDkkPEePKGnQq2PT6dhmD7
status: active
merged_into: null
display_name: 王代鈞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ahE4An1NCuiPJpnyQcgNNX
        subject_person_id: p_RDkkPEePKGnQq2PT6dhmD7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王代鈞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HYiX41SvkXXtjZVjQiKS3N
          claim_id: c_ahE4An1NCuiPJpnyQcgNNX
          source_id: s_nyiDEnzgivf1GzHh1yxDR3
          stance: supports
          locator: CBDB:526950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526950）
          source: &a1
            id: s_nyiDEnzgivf1GzHh1yxDR3
            source_type: api_record
            title: 中国历代人物传记资料库：王代鈞（CBDB 526950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526950&o=json
            external_identifier: CBDB:526950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hYJ9FHACiabzbafuBMsnuJ
        subject_person_id: p_RDkkPEePKGnQq2PT6dhmD7
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
        - id: cs_PG3GRUGkimzK4UktPq83aM
          claim_id: c_hYJ9FHACiabzbafuBMsnuJ
          source_id: s_nyiDEnzgivf1GzHh1yxDR3
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
        id: c_afBY4Lf0znjsEfnZsH-1l8
        subject_person_id: p_9XtatSzbUAUbGKWh823XDp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RDkkPEePKGnQq2PT6dhmD7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2B31X488RkzMci1gI4D7zT
          claim_id: c_afBY4Lf0znjsEfnZsH-1l8
          source_id: s_AR6R7vvgs7N84GQDgobf6U
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13128：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AR6R7vvgs7N84GQDgobf6U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 69422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json
            external_identifier: CBDB:69422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.265Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9XtatSzbUAUbGKWh823XDp
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王代鈞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王代鈞 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9XtatSzbUAUbGKWh823XDp | 王瑤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王代鈞（CBDB 526950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526950&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 69422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69422&o=json)
