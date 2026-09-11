---
schema: wang-person/v1
id: p_XLANjjKCBK7qVKBrPKgEcS
status: active
merged_into: null
display_name: 王堅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qtn53aQvpnLMg9CTWvnz8k
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jKiDPB51NCBpGUBk4r2HvD
          claim_id: c_qtn53aQvpnLMg9CTWvnz8k
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
          stance: supports
          locator: CBDB:186733
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（186733）
          source: &a1
            id: s_ECj7QkZf2eqrd31bgGYu9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 186733）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json
            external_identifier: CBDB:186733
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.284Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_j2rvKbc4jCebzPL5M8G5mF
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 803年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Biyc3fi9pWbBBJLWNqDf5B
          claim_id: c_j2rvKbc4jCebzPL5M8G5mF
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
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
        id: c_cZvLgZkZcxxNH75B2yZNW1
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kfPzkA4HKkq9eSPDWD2rd9
          claim_id: c_cZvLgZkZcxxNH75B2yZNW1
          source_id: s_ECj7QkZf2eqrd31bgGYu9Z
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
        id: c_gm5EHxrIV6e_yP1YUN8j-Q
        subject_person_id: p_XLANjjKCBK7qVKBrPKgEcS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nLiT1zEiwV2dsUPbDKdS49
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t1Umf4q2L330SrEve4sD1z
          claim_id: c_gm5EHxrIV6e_yP1YUN8j-Q
          source_id: s_GcteQKM4PHg5fMVxee24tt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GcteQKM4PHg5fMVxee24tt
            source_type: api_record
            title: 中国历代人物传记资料库：王岳（CBDB 186737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json
            external_identifier: CBDB:186737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.285Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nLiT1zEiwV2dsUPbDKdS49
        status: active
        display_name: 王岳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堅 | accepted |
| death.date | 803年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nLiT1zEiwV2dsUPbDKdS49 | 王岳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堅（CBDB 186733）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186733&o=json)
- [中国历代人物传记资料库：王岳（CBDB 186737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=186737&o=json)
