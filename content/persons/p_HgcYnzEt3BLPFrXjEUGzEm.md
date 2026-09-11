---
schema: wang-person/v1
id: p_HgcYnzEt3BLPFrXjEUGzEm
status: active
merged_into: null
display_name: 王玶
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dLofaqH3KnuGKcekaf384L
        subject_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AdrRoVkVDA3ooM57YTPF4V
          claim_id: c_dLofaqH3KnuGKcekaf384L
          source_id: s_4Dkc1pLbi8ZrCQF8FUtVFT
          stance: supports
          locator: CBDB:199032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199032）
          source: &a1
            id: s_4Dkc1pLbi8ZrCQF8FUtVFT
            source_type: api_record
            title: 中国历代人物传记资料库：王玶（CBDB 199032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199032&o=json
            external_identifier: CBDB:199032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.525Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_owXyYzQ6QPzi5XLQdoJkhL
        subject_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1433年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_19x53XsJm32FS7rbhDKUuG
          claim_id: c_owXyYzQ6QPzi5XLQdoJkhL
          source_id: s_4Dkc1pLbi8ZrCQF8FUtVFT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F5ziKCNeTMQ9M4MfyHVEar
        subject_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
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
        - id: cs_E9uk1Qnub6SQE5uSowjETh
          claim_id: c_F5ziKCNeTMQ9M4MfyHVEar
          source_id: s_4Dkc1pLbi8ZrCQF8FUtVFT
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ewn0f7H0bNF6AKRqCEaKiw
        subject_person_id: p_LMg2m36RyXES2Bxat6rQQ2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t9UaCXaJaTmj1YgVoNBE3L
          claim_id: c_Ewn0f7H0bNF6AKRqCEaKiw
          source_id: s_3xZh4dDATnFFcmFeRS9Z4f
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xZh4dDATnFFcmFeRS9Z4f
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 221894）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221894&o=json
            external_identifier: CBDB:221894
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LMg2m36RyXES2Bxat6rQQ2
        status: active
        display_name: 王勛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_At4N7vkTH4lwYJQ_ijko-1
        subject_person_id: p_29R4vA9uRF259ojqPZ9p7K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aagqj9-eMuOz_Y9xPuVN_B
          claim_id: c_At4N7vkTH4lwYJQ_ijko-1
          source_id: s_RmEHB7edaUfVQ1CQQUVuS7
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RmEHB7edaUfVQ1CQQUVuS7
            source_type: api_record
            title: 中国历代人物传记资料库：王成（CBDB 221871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221871&o=json
            external_identifier: CBDB:221871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.347Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_29R4vA9uRF259ojqPZ9p7K
        status: active
        display_name: 王成
        merged_into_person_id: null
    - claim:
        id: c_CkvhYiLcf-e8JfIMobQABJ
        subject_person_id: p_3juG8zad23EGDynEbaqSWE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HgcYnzEt3BLPFrXjEUGzEm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k23Kjo46Gkm_VtGufJQxwY
          claim_id: c_CkvhYiLcf-e8JfIMobQABJ
          source_id: s_JkKhHdc143didXU83hjLjU
          stance: supports
          locator: 成化二年進士登科錄:一卷，第二甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JkKhHdc143didXU83hjLjU
            source_type: api_record
            title: 中国历代人物传记资料库：王福順（CBDB 221883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221883&o=json
            external_identifier: CBDB:221883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3juG8zad23EGDynEbaqSWE
        status: active
        display_name: 王福順
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王玶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玶 | accepted |
| birth.date | 1433年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMg2m36RyXES2Bxat6rQQ2 | 王勛 | accepted |
| ancestors | p_29R4vA9uRF259ojqPZ9p7K | 王成 | accepted |
| ancestors | p_3juG8zad23EGDynEbaqSWE | 王福順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王成（CBDB 221871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221871&o=json)
- [中国历代人物传记资料库：王福順（CBDB 221883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221883&o=json)
- [中国历代人物传记资料库：王玶（CBDB 199032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199032&o=json)
- [中国历代人物传记资料库：王勛（CBDB 221894）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221894&o=json)
