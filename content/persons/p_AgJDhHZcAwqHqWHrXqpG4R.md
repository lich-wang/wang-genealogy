---
schema: wang-person/v1
id: p_AgJDhHZcAwqHqWHrXqpG4R
status: active
merged_into: null
display_name: 王自立
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eX8ABbY5EGYPTWc1HVvUZs
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自立
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KEQUXd6ngP7FtZB1fTtPBs
          claim_id: c_eX8ABbY5EGYPTWc1HVvUZs
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
          stance: supports
          locator: CBDB:175953
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175953）
          source: &a1
            id: s_QpbBrvUHacE3xHPqNt3wLD
            source_type: api_record
            title: 中国历代人物传记资料库：王自立（CBDB 175953）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175953&o=json
            external_identifier: CBDB:175953
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.216Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sMJJqRtGTUtA3wY54J2gVQ
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3um8edrh5igeDTPsD3aZJ
          claim_id: c_sMJJqRtGTUtA3wY54J2gVQ
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
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
        id: c_Z3p5W7BCQXPtM7XwRhFp1R
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自立（卒于853年），唐人物。籍贯杜陵，曾任令。（中国历代人物传记资料库 CBDB 175953）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GTBZS-aOBI9HdR62_qtyV0
          claim_id: c_Z3p5W7BCQXPtM7XwRhFp1R
          source_id: s_QpbBrvUHacE3xHPqNt3wLD
          stance: supports
          locator: CBDB:175953
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_itxVYVp8ZLRYVkGVgKkMUM
        subject_person_id: p_9GLd9Perr5iNSkDQLQhB21
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1bn6SMvjoCFSZissbBmVzi
          claim_id: c_itxVYVp8ZLRYVkGVgKkMUM
          source_id: s_AfinoeDHqwKerF7A5FERYE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AfinoeDHqwKerF7A5FERYE
            source_type: api_record
            title: 中国历代人物传记资料库：王察（CBDB 175952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json
            external_identifier: CBDB:175952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.215Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9GLd9Perr5iNSkDQLQhB21
        status: active
        display_name: 王察
        merged_into_person_id: null
  children:
    - claim:
        id: c_os8CfK2LYAkJDT-66d6xNq
        subject_person_id: p_AgJDhHZcAwqHqWHrXqpG4R
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KXeybJ73LDv1DLLTr6v2Ev
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vplJVSsPTvzqL9Wn7XgW5w
          claim_id: c_os8CfK2LYAkJDT-66d6xNq
          source_id: s_Rg6P3qTXSH7GMSGxrhF1Hx
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Rg6P3qTXSH7GMSGxrhF1Hx
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 175954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json
            external_identifier: CBDB:175954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.217Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KXeybJ73LDv1DLLTr6v2Ev
        status: active
        display_name: 王徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王自立

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自立 | accepted |
| death.date | 853年 | accepted |
| bio.summary | 王自立（卒于853年），唐人物。籍贯杜陵，曾任令。（中国历代人物传记资料库 CBDB 175953） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9GLd9Perr5iNSkDQLQhB21 | 王察 | accepted |
| children | p_KXeybJ73LDv1DLLTr6v2Ev | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王察（CBDB 175952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175952&o=json)
- [中国历代人物传记资料库：王徽（CBDB 175954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175954&o=json)
- [中国历代人物传记资料库：王自立（CBDB 175953）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175953&o=json)
