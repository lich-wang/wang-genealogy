---
schema: wang-person/v1
id: p_vHxGMJM43NcWPazz5BoCUS
status: active
merged_into: null
display_name: 王易
cbdb_id: 226559
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K1YjeVWuhYb6XV6FJMfDnQ
        subject_person_id: p_vHxGMJM43NcWPazz5BoCUS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_arzYaERK5N53BUTUudREzq
          claim_id: c_K1YjeVWuhYb6XV6FJMfDnQ
          source_id: s_hvAgjm9vMEKS19BtHNyBcU
          stance: supports
          locator: Q45528290
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_hvAgjm9vMEKS19BtHNyBcU
            source_type: api_record
            title: 维基数据：王易（Q45528290）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528290
            external_identifier: Q45528290
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_2BTcn3g7GPi4U4yyxhqJpC
          claim_id: c_K1YjeVWuhYb6XV6FJMfDnQ
          source_id: s_PTxFC8aGUYqqpkPNQDT597
          stance: supports
          locator: CBDB:226559
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_PTxFC8aGUYqqpkPNQDT597
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王易（226559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226559&o=json
            external_identifier: CBDB:226559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XYBJfqb1BkR2xCKMCGnnHo
        subject_person_id: p_vHxGMJM43NcWPazz5BoCUS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 311226
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tyER2fBmJ1j3XneS82zNUz
          claim_id: c_XYBJfqb1BkR2xCKMCGnnHo
          source_id: s_hvAgjm9vMEKS19BtHNyBcU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GRSq63ZFtB3CJb2a6XGnvH
        subject_person_id: p_vHxGMJM43NcWPazz5BoCUS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b4bisUW9C7vmM7GVAbGAqe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBzC7LaBMPFrFXXte3kqcV
          claim_id: c_GRSq63ZFtB3CJb2a6XGnvH
          source_id: s_hvAgjm9vMEKS19BtHNyBcU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_iGYvPh6TtFDokerJ6c6nHD
          claim_id: c_GRSq63ZFtB3CJb2a6XGnvH
          source_id: s_F5JzhaMa2TmiGmre4CPs6s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_F5JzhaMa2TmiGmre4CPs6s
            source_type: api_record
            title: 维基数据：王大韶（Q45528350）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45528350
            external_identifier: Q45528350
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.882Z
            metadata_json: null
      object_person:
        id: p_b4bisUW9C7vmM7GVAbGAqe
        status: active
        display_name: 王大韶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_R4tPICYINqDDM1alXeJdF6
        subject_person_id: p_vHxGMJM43NcWPazz5BoCUS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YcgZGHB8b41JUksSD6hCbG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l0SPlAnmy4rklaCX1cRvWJ
          claim_id: c_R4tPICYINqDDM1alXeJdF6
          source_id: s_PTxFC8aGUYqqpkPNQDT597
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第二百三十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
  other: []
---

# 王易

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易 | accepted |
| bio.summary | Ming dynasty person CBDB = 311226 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_b4bisUW9C7vmM7GVAbGAqe | 王大韶 | accepted |
| descendants | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [维基数据：王大韶（Q45528350）](https://www.wikidata.org/wiki/Q45528350)
- [维基数据：王易（Q45528290）](https://www.wikidata.org/wiki/Q45528290)
- [CBDB 中国历代人物传记资料库：王易（226559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226559&o=json)
