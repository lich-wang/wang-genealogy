---
schema: wang-person/v1
id: p_PASiCHQs3ZcH2e9PXEScwH
status: active
merged_into: null
display_name: 王效
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xZBAZVadSaTf1pApWZfyRK
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王效
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ntU9bz1pyQjCTxiYxksBDD
          claim_id: c_xZBAZVadSaTf1pApWZfyRK
          source_id: s_Lh1LGFfF1AXhe6KWLNQsWi
          stance: supports
          locator: CBDB:247208
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247208）
          source: &a1
            id: s_Lh1LGFfF1AXhe6KWLNQsWi
            source_type: api_record
            title: 中国历代人物传记资料库：王效（CBDB 247208）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247208&o=json
            external_identifier: CBDB:247208
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LzKcyEcz6qFMVzYPCNQYc5
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
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
        - id: cs_6NeubnPy8YHZuFy1Q6AtZ4
          claim_id: c_LzKcyEcz6qFMVzYPCNQYc5
          source_id: s_Lh1LGFfF1AXhe6KWLNQsWi
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
        id: c_aOPTdJe1WBJi8giMHfMCCi
        subject_person_id: p_PASiCHQs3ZcH2e9PXEScwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aoocqwv9rrDDvPqTtq5ozW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tusdwtb3ytyb2RY3bSMNmt
          claim_id: c_aOPTdJe1WBJi8giMHfMCCi
          source_id: s_44ZRSw7JUzZCzrKFGDptvb
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百三十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_44ZRSw7JUzZCzrKFGDptvb
            source_type: api_record
            title: 中国历代人物传记资料库：王弁（CBDB 199608）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json
            external_identifier: CBDB:199608
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aoocqwv9rrDDvPqTtq5ozW
        status: active
        display_name: 王弁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王效

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王效 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aoocqwv9rrDDvPqTtq5ozW | 王弁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弁（CBDB 199608）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199608&o=json)
- [中国历代人物传记资料库：王效（CBDB 247208）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247208&o=json)
