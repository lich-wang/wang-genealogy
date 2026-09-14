---
schema: wang-person/v1
id: p_1y18Ba6vJZgtotJSEi5dQB
status: active
merged_into: null
display_name: 王應春
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iv1VfknatYRZzS9hG5q7bZ
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukTrPd4GjNFKLLK93BPFSq
          claim_id: c_iv1VfknatYRZzS9hG5q7bZ
          source_id: s_d9jBCe1HeBSMRp6ibqUWEH
          stance: supports
          locator: CBDB:212304
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212304）
          source: &a1
            id: s_d9jBCe1HeBSMRp6ibqUWEH
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.081Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qbsg6PZf598x25PogLAh7E
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應春，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212304）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XvCVnlR8NrusShBZJgJc_g
          claim_id: c_Qbsg6PZf598x25PogLAh7E
          source_id: s_d9jBCe1HeBSMRp6ibqUWEH
          stance: supports
          locator: CBDB:212304
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_742aoHCI03fI6cADXSArIf
        subject_person_id: p_ihrtmmYxDE76Umzs4UE6Cs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyxSDrli-2HfCMjXubDEb4
          claim_id: c_742aoHCI03fI6cADXSArIf
          source_id: s_Vva3psO_cBw6sfCqCvEqPR
          stance: supports
          locator: CBDB：兄弟 王應選（206025）之父／母 王亮采
          quotation: null
          interpretation_note: 由兄弟关系推断：王應春 与 王應選 为同胞（CBDB 记「弟」），王應選 之父／母即 王應春 之父／母。
          source:
            id: s_Vva3psO_cBw6sfCqCvEqPR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ihrtmmYxDE76Umzs4UE6Cs
        status: active
        display_name: 王亮采
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_uWPl8rP_ZUVNCLFWkuxNru
        subject_person_id: p_1y18Ba6vJZgtotJSEi5dQB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DVj3x7bTLNfdzZiuwDwTNz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_73P334QscL-CO_fadfNWWn
          claim_id: c_uWPl8rP_ZUVNCLFWkuxNru
          source_id: s_Vva3psO_cBw6sfCqCvEqPR
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206025 王應選）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Vva3psO_cBw6sfCqCvEqPR
            source_type: api_record
            title: 中国历代人物传记资料库：王應春（CBDB 212304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json
            external_identifier: CBDB:212304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DVj3x7bTLNfdzZiuwDwTNz
        status: active
        display_name: 王應選
        merged_into_person_id: null
---

# 王應春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應春 | accepted |
| bio.summary | 王應春，明人物。萬曆二年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 212304） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ihrtmmYxDE76Umzs4UE6Cs | 王亮采 | accepted |
| other | p_DVj3x7bTLNfdzZiuwDwTNz | 王應選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應春（CBDB 212304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212304&o=json)
