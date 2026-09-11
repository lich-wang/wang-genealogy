---
schema: wang-person/v1
id: p_PETdD8Jz2DJR4mSmHcNTrv
status: active
merged_into: null
display_name: 王仲舉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BfJTNFY35TQe5oGPg5wZF
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EM3acQohe9RJsHnrvybKPP
          claim_id: c_1BfJTNFY35TQe5oGPg5wZF
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
          stance: supports
          locator: CBDB:10337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10337）
          source: &a1
            id: s_Uuj1nLRNJwBg8b5b2msGq7
            source_type: api_record
            title: 中国历代人物传记资料库：王仲舉（CBDB 10337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json
            external_identifier: CBDB:10337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h38tyy6Kbdge2Lb6XStoSH
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1044年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i469Ao5289wz1GZbEQtgtB
          claim_id: c_h38tyy6Kbdge2Lb6XStoSH
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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
        id: c_8tFgiYMM8ooyKvLP6T17Vd
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1111年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3DNAeaVTHZ1KvMu7smPLY
          claim_id: c_8tFgiYMM8ooyKvLP6T17Vd
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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
        id: c_JVXg24G1uNC9TwmbPf6ZhH
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
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
        - id: cs_YunWB1C4rtvpgmFDdLedpv
          claim_id: c_JVXg24G1uNC9TwmbPf6ZhH
          source_id: s_Uuj1nLRNJwBg8b5b2msGq7
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
        id: c_PvnfspcLUenNvnAjRNGZ9T
        subject_person_id: p_4H6hmNE3a7KsJizuXuhwwM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2eWQr4wyrtSdKl26s6PIn7
          claim_id: c_PvnfspcLUenNvnAjRNGZ9T
          source_id: s_Yic4HWUmUS3sWTFBmHNmnx
          stance: supports
          locator: CBDB 双向互证（子 王仲舉 ⇄ 父 王礎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Yic4HWUmUS3sWTFBmHNmnx
            source_type: api_record
            title: 中国历代人物传记资料库：王礎（CBDB 10336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json
            external_identifier: CBDB:10336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.527Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4H6hmNE3a7KsJizuXuhwwM
        status: active
        display_name: 王礎
        merged_into_person_id: null
  children:
    - claim:
        id: c_Rp1ShREXduZmsuASWya6p8
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bZcZfxCHimqNMGao1LQfLN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEyL5yddorE6UTRhworqWg
          claim_id: c_Rp1ShREXduZmsuASWya6p8
          source_id: s_LofCYCda2stWd8D7hGgchb
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1595：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LofCYCda2stWd8D7hGgchb
            source_type: api_record
            title: 中国历代人物传记资料库：王蘋（CBDB 7381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json
            external_identifier: CBDB:7381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.483Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bZcZfxCHimqNMGao1LQfLN
        status: active
        display_name: 王蘋
        merged_into_person_id: null
    - claim:
        id: c_xxsL6UEKkuZV2pkcpg4l17
        subject_person_id: p_PETdD8Jz2DJR4mSmHcNTrv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQ27N3xzy-TddeT8nq_RyJ
          claim_id: c_xxsL6UEKkuZV2pkcpg4l17
          source_id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
          stance: supports
          locator: CBDB 双向互证（父 王仲舉 ⇄ 子 王蘊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Hpvy4Q9DgNbYJ7v6vcdLK4
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊（CBDB 25232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json
            external_identifier: CBDB:25232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GYzrQ2BLrYSPJE8qZpwK3Z
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲舉 | accepted |
| birth.date | 1044年 | accepted |
| death.date | 1111年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H6hmNE3a7KsJizuXuhwwM | 王礎 | accepted |
| children | p_bZcZfxCHimqNMGao1LQfLN | 王蘋 | accepted |
| children | p_GYzrQ2BLrYSPJE8qZpwK3Z | 王蘊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王礎（CBDB 10336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10336&o=json)
- [中国历代人物传记资料库：王蘋（CBDB 7381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7381&o=json)
- [中国历代人物传记资料库：王蘊（CBDB 25232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25232&o=json)
- [中国历代人物传记资料库：王仲舉（CBDB 10337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10337&o=json)
