---
schema: wang-person/v1
id: p_7JLmg2prJ3YdMcEXWFLKXR
status: active
merged_into: null
display_name: 王學古
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T5iT8MH7NmvdzvgepWn6XL
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學古
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_id4bVMut289Q2uuWSnDFen
          claim_id: c_T5iT8MH7NmvdzvgepWn6XL
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: CBDB:244147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244147）
          source: &a1
            id: s_B6dLHtmv2bcXri1aDmor2m
            source_type: api_record
            title: 中国历代人物传记资料库：王學古（CBDB 244147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json
            external_identifier: CBDB:244147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.021Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w6nbDCrRkLUncit5krNKeD
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
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
        - id: cs_ef7LpdfP9EDAyLgMiqHFMs
          claim_id: c_w6nbDCrRkLUncit5krNKeD
          source_id: s_B6dLHtmv2bcXri1aDmor2m
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
        id: c_Xq08cFhoQkVg3b57GbX7x6
        subject_person_id: p_7JLmg2prJ3YdMcEXWFLKXR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BENHjYLLrgUUA56P1EQsxJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_87QZIJS8MzfjT5qOqs8lgh
          claim_id: c_Xq08cFhoQkVg3b57GbX7x6
          source_id: s_B6dLHtmv2bcXri1aDmor2m
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BENHjYLLrgUUA56P1EQsxJ
        status: active
        display_name: 王京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王學古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學古 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_BENHjYLLrgUUA56P1EQsxJ | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王學古（CBDB 244147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244147&o=json)
