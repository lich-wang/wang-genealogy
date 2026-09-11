---
schema: wang-person/v1
id: p_FqUud2w7N1wezRTEw6MRZ4
status: active
merged_into: null
display_name: 王說
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2zL5DtQvTxPwzFh74cA2UF
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王說
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WyN6KKgZaMkpHuBQequ5AS
          claim_id: c_2zL5DtQvTxPwzFh74cA2UF
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: CBDB:19870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（19870）
          source: &a1
            id: s_Kt2AfBh7fKuTLiRwHyCwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CsSxzFEQHxBQn4JFfCNCYS
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1010年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u4txb3fzA6D7P99Vyand6L
          claim_id: c_CsSxzFEQHxBQn4JFfCNCYS
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_4YgRkz7dwTkaBa55wqsiw7
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1085年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zCKsYJz9YoHNaj8t37DvmE
          claim_id: c_4YgRkz7dwTkaBa55wqsiw7
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
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
        id: c_9HUWqZBcQFHbgQc8D17fFY
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FNNkC8LQ5GJNMANCbEDErP
          claim_id: c_9HUWqZBcQFHbgQc8D17fFY
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
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
        id: c_jZoqUSVB4MhQwnTd2TGwxJ
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42szA6CsjsGEHtctBDvhPe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3oKKlXPkZi1EPB-HA22X1P
          claim_id: c_jZoqUSVB4MhQwnTd2TGwxJ
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: CBDB 双向互证（子 王玩 ⇄ 父 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_42szA6CsjsGEHtctBDvhPe
        status: active
        display_name: 王玩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_7qWdVTXEXKZ5dG59swInbD
        subject_person_id: p_TDUFAo3WDTpskSeRuBH9PB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mAafjEhInFNU2prrSEFWij
          claim_id: c_7qWdVTXEXKZ5dG59swInbD
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: CBDB 双向互证（曾祖 王仁鎬 ⇄ 曾孫; 重孫 王說）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TDUFAo3WDTpskSeRuBH9PB
        status: active
        display_name: 王仁鎬
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_o59oD6MVVvOKIutED9Q1pB
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LMN8U3w7r8FiSU2N778GMc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gs2KV_37Kl2m0HCPO1C6EX
          claim_id: c_o59oD6MVVvOKIutED9Q1pB
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1234：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LMN8U3w7r8FiSU2N778GMc
        status: active
        display_name: 王勳
        merged_into_person_id: null
  other: []
---

# 王說

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王說 | accepted |
| birth.date | 1010年 | accepted |
| death.date | 1085年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_42szA6CsjsGEHtctBDvhPe | 王玩 | accepted |
| ancestors | p_TDUFAo3WDTpskSeRuBH9PB | 王仁鎬 | accepted |
| descendants | p_LMN8U3w7r8FiSU2N778GMc | 王勳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王說（CBDB 19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
