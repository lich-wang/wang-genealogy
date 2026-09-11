---
schema: wang-person/v1
id: p_zZeinJXVeQXMXbEWLdyEVq
status: active
merged_into: null
display_name: 王景
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jnq1PVK7s3kgoGfDDLLmbU
        subject_person_id: p_zZeinJXVeQXMXbEWLdyEVq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LK4M7V4BYYYhpaiBCtxRNR
          claim_id: c_Jnq1PVK7s3kgoGfDDLLmbU
          source_id: s_A4935EHiVyjCQUR3ko2MDL
          stance: supports
          locator: CBDB:23283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23283）
          source: &a1
            id: s_A4935EHiVyjCQUR3ko2MDL
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 23283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23283&o=json
            external_identifier: CBDB:23283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hhbHiaftuNCLwAo491TbKV
        subject_person_id: p_zZeinJXVeQXMXbEWLdyEVq
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
        - id: cs_9rnsuX7cRLSq6CQP82TNeD
          claim_id: c_hhbHiaftuNCLwAo491TbKV
          source_id: s_A4935EHiVyjCQUR3ko2MDL
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
        id: c_NbSHiQxR6TnSPTHuvyTX8z
        subject_person_id: p_rqJN44ei4bMM6aRHMpn2ZJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zZeinJXVeQXMXbEWLdyEVq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cpbyTztYM8_0qlabt5a1Yy
          claim_id: c_NbSHiQxR6TnSPTHuvyTX8z
          source_id: s_2FmT9D5q1tK14hs3zMx7mf
          stance: supports
          locator: CBDB 双向互证（子 王景 ⇄ 父 王保）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2FmT9D5q1tK14hs3zMx7mf
            source_type: api_record
            title: 中国历代人物传记资料库：王保（CBDB 23282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23282&o=json
            external_identifier: CBDB:23282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rqJN44ei4bMM6aRHMpn2ZJ
        status: active
        display_name: 王保
        merged_into_person_id: null
  children:
    - claim:
        id: c_a645ZmBeWdSEqXXbwBDX1k
        subject_person_id: p_zZeinJXVeQXMXbEWLdyEVq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rm6oKrAkrVnsCbZoyo9ArH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WF4YaZzAzHu79o6sHmXyjD
          claim_id: c_a645ZmBeWdSEqXXbwBDX1k
          source_id: s_A4935EHiVyjCQUR3ko2MDL
          stance: supports
          locator: CBDB 双向互证（子 王利正 ⇄ 父 王景）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_rm6oKrAkrVnsCbZoyo9ArH
        status: active
        display_name: 王利正
        merged_into_person_id: null
    - claim:
        id: c_ItnFql4-Sxo8VfjpgbWHzh
        subject_person_id: p_zZeinJXVeQXMXbEWLdyEVq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Uk1sTpuAhJTFEFkNaNbJ1J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YUU450FlxncZrQJeAev6DP
          claim_id: c_ItnFql4-Sxo8VfjpgbWHzh
          source_id: s_A4935EHiVyjCQUR3ko2MDL
          stance: supports
          locator: CBDB 双向互证（子 王承議 ⇄ 父 王景）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Uk1sTpuAhJTFEFkNaNbJ1J
        status: active
        display_name: 王承議
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_77E64vbYdf0unWdLlmW2T5
        subject_person_id: p_zZeinJXVeQXMXbEWLdyEVq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_id8ayN6J8o1n8Hf98x4Vi1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tyG1aN_wbGBPiaxni8CL7l
          claim_id: c_77E64vbYdf0unWdLlmW2T5
          source_id: s_1SwMLcx8yBd6sDBPwrYvP5
          stance: supports
          locator: 紹興十八年同年小錄，282：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SwMLcx8yBd6sDBPwrYvP5
            source_type: api_record
            title: 中国历代人物传记资料库：王昉（CBDB 23286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23286&o=json
            external_identifier: CBDB:23286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_id8ayN6J8o1n8Hf98x4Vi1
        status: active
        display_name: 王昉
        merged_into_person_id: null
  other: []
---

# 王景

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王景 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rqJN44ei4bMM6aRHMpn2ZJ | 王保 | accepted |
| children | p_rm6oKrAkrVnsCbZoyo9ArH | 王利正 | accepted |
| children | p_Uk1sTpuAhJTFEFkNaNbJ1J | 王承議 | accepted |
| descendants | p_id8ayN6J8o1n8Hf98x4Vi1 | 王昉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保（CBDB 23282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23282&o=json)
- [中国历代人物传记资料库：王昉（CBDB 23286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23286&o=json)
- [中国历代人物传记资料库：王景（CBDB 23283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23283&o=json)
