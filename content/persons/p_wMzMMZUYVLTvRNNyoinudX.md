---
schema: wang-person/v1
id: p_wMzMMZUYVLTvRNNyoinudX
status: active
merged_into: null
display_name: 王檢
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rCfXVLJXXGKJ9Mtn9d8k7N
        subject_person_id: p_wMzMMZUYVLTvRNNyoinudX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b3jno6ZQzDBhFWc3K1Ax6y
          claim_id: c_rCfXVLJXXGKJ9Mtn9d8k7N
          source_id: s_EHDESTiq8s2BPbwzx11enQ
          stance: supports
          locator: CBDB:26353
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26353）
          source: &a1
            id: s_EHDESTiq8s2BPbwzx11enQ
            source_type: api_record
            title: 中国历代人物传记资料库：王檢（CBDB 26353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26353&o=json
            external_identifier: CBDB:26353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.932Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PABL8uw86wyyT26ufh1mYu
        subject_person_id: p_wMzMMZUYVLTvRNNyoinudX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1056年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4mexJuePKGXtz3tXYki4V
          claim_id: c_PABL8uw86wyyT26ufh1mYu
          source_id: s_EHDESTiq8s2BPbwzx11enQ
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
        id: c_3yzG1vuwobbYK56F1t6ymg
        subject_person_id: p_wMzMMZUYVLTvRNNyoinudX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1104年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiDd2W3j8DZKbU1e7EYukT
          claim_id: c_3yzG1vuwobbYK56F1t6ymg
          source_id: s_EHDESTiq8s2BPbwzx11enQ
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
        id: c_1LKMiLLo2fpJ1brU5zRxt3
        subject_person_id: p_wMzMMZUYVLTvRNNyoinudX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王檢（1056年—1104年），宋人物。籍贯臨川，入仕恩蔭、蔭補，曾任承奉郎、縣尉、齋郎。（中国历代人物传记资料库 CBDB 26353）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1RHNFAzetAMSRwOW6DYkUa
          claim_id: c_1LKMiLLo2fpJ1brU5zRxt3
          source_id: s_EHDESTiq8s2BPbwzx11enQ
          stance: supports
          locator: CBDB:26353
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yF4i1EQY1v_f9cgnehUHF5
        subject_person_id: p_gkheh2H38pxtSB6bw2FeUY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wMzMMZUYVLTvRNNyoinudX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8ShS2O9ZS8yqf5xfUMUbie
          claim_id: c_yF4i1EQY1v_f9cgnehUHF5
          source_id: s_EHDESTiq8s2BPbwzx11enQ
          stance: supports
          locator: CBDB 双向互证（父 王正辭 ⇄ 子 王檢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_gkheh2H38pxtSB6bw2FeUY
        status: active
        display_name: 王正辭
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王檢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王檢 | accepted |
| birth.date | 1056年 | accepted |
| death.date | 1104年 | accepted |
| bio.summary | 王檢（1056年—1104年），宋人物。籍贯臨川，入仕恩蔭、蔭補，曾任承奉郎、縣尉、齋郎。（中国历代人物传记资料库 CBDB 26353） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gkheh2H38pxtSB6bw2FeUY | 王正辭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王檢（CBDB 26353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26353&o=json)
