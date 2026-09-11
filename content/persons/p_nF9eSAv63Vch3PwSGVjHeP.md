---
schema: wang-person/v1
id: p_nF9eSAv63Vch3PwSGVjHeP
status: active
merged_into: null
display_name: 王璧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r14SWcVigXM5qERAnm81De
        subject_person_id: p_nF9eSAv63Vch3PwSGVjHeP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K9kMU8CCJPMBcUxWGHeAsa
          claim_id: c_r14SWcVigXM5qERAnm81De
          source_id: s_nQ3T8ajEmMX2wxisG4Pyyc
          stance: supports
          locator: CBDB:231819
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231819）
          source: &a1
            id: s_nQ3T8ajEmMX2wxisG4Pyyc
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 231819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231819&o=json
            external_identifier: CBDB:231819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AHQEogB2qzcxkMjBoXGU82
        subject_person_id: p_nF9eSAv63Vch3PwSGVjHeP
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
        - id: cs_544xFFQB5JVjaxQrrUpF3j
          claim_id: c_AHQEogB2qzcxkMjBoXGU82
          source_id: s_nQ3T8ajEmMX2wxisG4Pyyc
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
        id: c_Bgt7CjFyFNf2dCG1Afy3oT
        subject_person_id: p_nF9eSAv63Vch3PwSGVjHeP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ojf36Ko9wQJ75BMAk9xQXN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tEd7Uj6yd2TgC3KTeDla5x
          claim_id: c_Bgt7CjFyFNf2dCG1Afy3oT
          source_id: s_nQ3T8ajEmMX2wxisG4Pyyc
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第二百十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ojf36Ko9wQJ75BMAk9xQXN
        status: active
        display_name: 王應元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ojf36Ko9wQJ75BMAk9xQXN | 王應元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 231819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231819&o=json)
