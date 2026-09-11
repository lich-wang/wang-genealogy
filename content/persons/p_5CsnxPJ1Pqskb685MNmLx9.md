---
schema: wang-person/v1
id: p_5CsnxPJ1Pqskb685MNmLx9
status: active
merged_into: null
display_name: 王鎬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7i1SUi3n6vsNeNAzyRNctk
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L7x8qFjNqveNzoG4M7s1BR
          claim_id: c_7i1SUi3n6vsNeNAzyRNctk
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: CBDB:241137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241137）
          source: &a1
            id: s_HnV2yB88d2LDzZ44BKY5Y3
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 241137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json
            external_identifier: CBDB:241137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.945Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eDfUuEFbHiUAu2oPsvHE9Z
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎬，明人物。正統十三年進士，籍贯和州，曾任戶部員外郎。（中国历代人物传记资料库 CBDB 241137）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_kTAVyPhRpAGUXAbo22n_Ey
          claim_id: c_eDfUuEFbHiUAu2oPsvHE9Z
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: CBDB:241137
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_LfEinVRzYAVCn_mf5oHGD-
        subject_person_id: p_5CsnxPJ1Pqskb685MNmLx9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bF6WY3wgJWVigFgpBLaV3H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UAY42Qb6NjwF-Mt8z5hFeq
          claim_id: c_LfEinVRzYAVCn_mf5oHGD-
          source_id: s_HnV2yB88d2LDzZ44BKY5Y3
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bF6WY3wgJWVigFgpBLaV3H
        status: active
        display_name: 王璽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎬 | accepted |
| bio.summary | 王鎬，明人物。正統十三年進士，籍贯和州，曾任戶部員外郎。（中国历代人物传记资料库 CBDB 241137） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_bF6WY3wgJWVigFgpBLaV3H | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎬（CBDB 241137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241137&o=json)
