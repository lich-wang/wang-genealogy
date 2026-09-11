---
schema: wang-person/v1
id: p_3qLC2oeE1HhZa2mfE2D9n7
status: active
merged_into: null
display_name: 王聚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LiL7mmD3EKG4zmubBgY4Kn
        subject_person_id: p_3qLC2oeE1HhZa2mfE2D9n7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_77CskbGfXLUWi5ij8yvzeS
          claim_id: c_LiL7mmD3EKG4zmubBgY4Kn
          source_id: s_AuaTr2LbeA8Hf2j8SNgdaM
          stance: supports
          locator: CBDB:282721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282721）
          source: &a1
            id: s_AuaTr2LbeA8Hf2j8SNgdaM
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 282721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json
            external_identifier: CBDB:282721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oAidvA4bBNL7cWaDRA4DRZ
        subject_person_id: p_3qLC2oeE1HhZa2mfE2D9n7
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
        - id: cs_osyxpKTbkRWxnjLSX8BBCj
          claim_id: c_oAidvA4bBNL7cWaDRA4DRZ
          source_id: s_AuaTr2LbeA8Hf2j8SNgdaM
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
        id: c_-Nsnw0xoyCqSEREvUPgnWH
        subject_person_id: p_3qLC2oeE1HhZa2mfE2D9n7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Frvy4tyGj0dF5SvbrzCVSV
          claim_id: c_-Nsnw0xoyCqSEREvUPgnWH
          source_id: s_AuaTr2LbeA8Hf2j8SNgdaM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ARBsKDMivmjbBTxJiQz7Aa
        status: active
        display_name: 王朝瑬
        merged_into_person_id: null
  other: []
---

# 王聚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聚 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ARBsKDMivmjbBTxJiQz7Aa | 王朝瑬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王聚（CBDB 282721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json)
