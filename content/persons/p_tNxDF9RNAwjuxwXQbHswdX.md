---
schema: wang-person/v1
id: p_tNxDF9RNAwjuxwXQbHswdX
status: active
merged_into: null
display_name: 王適
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ApLa7VvaDA3UTAQgX1pLLn
        subject_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UvU9x2LU5ePGJuiJFAyRqP
          claim_id: c_ApLa7VvaDA3UTAQgX1pLLn
          source_id: s_RupQmYq6XJuF2vexT3Cb38
          stance: supports
          locator: CBDB:22214
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22214）
          source: &a1
            id: s_RupQmYq6XJuF2vexT3Cb38
            source_type: api_record
            title: 中国历代人物传记资料库：王適（CBDB 22214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22214&o=json
            external_identifier: CBDB:22214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.849Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rQwEZJWeKVW46UU3irkYrg
        subject_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1055年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2fF4gyv4kwKFpR3pXezsh
          claim_id: c_rQwEZJWeKVW46UU3irkYrg
          source_id: s_RupQmYq6XJuF2vexT3Cb38
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
        id: c_GRF3vikguBG6jekWM2wR43
        subject_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1089年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sNhnuBt7nCQFW5BPdXR2Vf
          claim_id: c_GRF3vikguBG6jekWM2wR43
          source_id: s_RupQmYq6XJuF2vexT3Cb38
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
        id: c_a5uwHb51NJvMbJn7sGQDQb
        subject_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王適（1055年—1089年），宋人物。籍贯臨城，身份为士人。（中国历代人物传记资料库 CBDB 22214）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y5r59LjuFxVy9JldBOlHdc
          claim_id: c_a5uwHb51NJvMbJn7sGQDQb
          source_id: s_RupQmYq6XJuF2vexT3Cb38
          stance: supports
          locator: CBDB:22214
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PnVKLZzQf_ZA3jP20SDFvT
        subject_person_id: p_iLUdeieVQDb1mxk8x28Vj3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H-h0fN1l2wCpAflqVD9U5F
          claim_id: c_PnVKLZzQf_ZA3jP20SDFvT
          source_id: s_RupQmYq6XJuF2vexT3Cb38
          stance: supports
          locator: CBDB 双向互证（父 王正路 ⇄ 子 王適）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iLUdeieVQDb1mxk8x28Vj3
        status: active
        display_name: 王正路
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JR8o3Q19zqvKW1Qug3Sm6O
        subject_person_id: p_9epbfLViLxzdJRKQE2V4dh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tNxDF9RNAwjuxwXQbHswdX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yk4rr15f3kmydcoCJZuBp-
          claim_id: c_JR8o3Q19zqvKW1Qug3Sm6O
          source_id: s_RupQmYq6XJuF2vexT3Cb38
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9epbfLViLxzdJRKQE2V4dh
        status: active
        display_name: 王鬷
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王適

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王適 | accepted |
| birth.date | 1055年 | accepted |
| death.date | 1089年 | accepted |
| bio.summary | 王適（1055年—1089年），宋人物。籍贯臨城，身份为士人。（中国历代人物传记资料库 CBDB 22214） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iLUdeieVQDb1mxk8x28Vj3 | 王正路 | accepted |
| ancestors | p_9epbfLViLxzdJRKQE2V4dh | 王鬷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王適（CBDB 22214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22214&o=json)
