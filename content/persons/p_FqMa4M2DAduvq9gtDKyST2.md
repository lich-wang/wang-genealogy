---
schema: wang-person/v1
id: p_FqMa4M2DAduvq9gtDKyST2
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5EHDhuNERPhBneD8QjB1mQ
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TT8ZMSqCSkGa9rH8JMeqrJ
          claim_id: c_5EHDhuNERPhBneD8QjB1mQ
          source_id: s_jgS2wM9ChQCSKTbp1QvjnE
          stance: supports
          locator: CBDB:295379
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295379）
          source: &a1
            id: s_jgS2wM9ChQCSKTbp1QvjnE
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 295379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295379&o=json
            external_identifier: CBDB:295379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.490Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAQy4BKv4TcoruY6CAMDaa
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
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
        - id: cs_hSPhD9thzfR9eCLp5nhjpX
          claim_id: c_ZAQy4BKv4TcoruY6CAMDaa
          source_id: s_jgS2wM9ChQCSKTbp1QvjnE
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
        id: c_5PrwlHKYhV1mFA-aDI31WI
        subject_person_id: p_FqMa4M2DAduvq9gtDKyST2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BUKVfjLttuBq79dFrNbRz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_576BAbjIh_DBMcs88UNJdp
          claim_id: c_5PrwlHKYhV1mFA-aDI31WI
          source_id: s_rSpqfo8s5BJMrtNFtFPgJQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第二甲第三十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rSpqfo8s5BJMrtNFtFPgJQ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 202833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json
            external_identifier: CBDB:202833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BUKVfjLttuBq79dFrNbRz
        status: active
        display_name: 王崇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2BUKVfjLttuBq79dFrNbRz | 王崇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 202833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202833&o=json)
- [中国历代人物传记资料库：王釗（CBDB 295379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295379&o=json)
