---
schema: wang-person/v1
id: p_JhT8MPbcy6fqyD8xKqm8c7
status: active
merged_into: null
display_name: 王奎
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3PrpyPufnvGhD5SXX3D9Nc
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4g9ezXL4aDP5PVcaWrpLF
          claim_id: c_3PrpyPufnvGhD5SXX3D9Nc
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
          stance: supports
          locator: CBDB:200714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200714）
          source: &a1
            id: s_rr9Uzz7DZdA98zaMJkX9np
            source_type: api_record
            title: 中国历代人物传记资料库：王奎（CBDB 200714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200714&o=json
            external_identifier: CBDB:200714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.629Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_S7A1W3V3yddVqJ7G7d6ab4
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1459年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dE2PxZ3LyiFLyDMYVUb6tT
          claim_id: c_S7A1W3V3yddVqJ7G7d6ab4
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
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
        id: c_YpTzy6q4BNyiiiMUZWcy96
        subject_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奎（生于1459年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 200714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a2etK7SG3UvrYXGCJcEEHx
          claim_id: c_YpTzy6q4BNyiiiMUZWcy96
          source_id: s_rr9Uzz7DZdA98zaMJkX9np
          stance: supports
          locator: CBDB:200714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tB8SdzE3E62myebAkc8SnB
        subject_person_id: p_g6tTV8xspEG83C3EPVzpm7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VBJEyccXq232SQXp_4aKiX
          claim_id: c_tB8SdzE3E62myebAkc8SnB
          source_id: s_LAp2qEoFjsQzovLPCkWAeP
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAp2qEoFjsQzovLPCkWAeP
            source_type: api_record
            title: 中国历代人物传记资料库：王乾溥（CBDB 261841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261841&o=json
            external_identifier: CBDB:261841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_g6tTV8xspEG83C3EPVzpm7
        status: active
        display_name: 王乾溥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_dan2qIG0WGgQnvIwCy01dY
        subject_person_id: p_g8XCS3Mm7vNB6WdvCP6osQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6vmWvjdRx8zz48wQD64E8
          claim_id: c_dan2qIG0WGgQnvIwCy01dY
          source_id: s_jgPEMzVCRc2jSi7A5DKaxN
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jgPEMzVCRc2jSi7A5DKaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王思惠（CBDB 261840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261840&o=json
            external_identifier: CBDB:261840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g8XCS3Mm7vNB6WdvCP6osQ
        status: active
        display_name: 王思惠
        merged_into_person_id: null
    - claim:
        id: c_E2TMULANxk71TJry5dFxYj
        subject_person_id: p_MapFCRSj4F74rQYp7uGbuB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JhT8MPbcy6fqyD8xKqm8c7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bs8_Y757uiFcAtMDfjTkPP
          claim_id: c_E2TMULANxk71TJry5dFxYj
          source_id: s_5T5M1oyFcvp1AzkC7h7kez
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5T5M1oyFcvp1AzkC7h7kez
            source_type: api_record
            title: 中国历代人物传记资料库：王仲超（CBDB 261839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261839&o=json
            external_identifier: CBDB:261839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_MapFCRSj4F74rQYp7uGbuB
        status: active
        display_name: 王仲超
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奎 | accepted |
| birth.date | 1459年 | accepted |
| bio.summary | 王奎（生于1459年），明人物。明清進士進士，籍贯安福，入仕進士。（中国历代人物传记资料库 CBDB 200714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g6tTV8xspEG83C3EPVzpm7 | 王乾溥 | accepted |
| ancestors | p_g8XCS3Mm7vNB6WdvCP6osQ | 王思惠 | accepted |
| ancestors | p_MapFCRSj4F74rQYp7uGbuB | 王仲超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奎（CBDB 200714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200714&o=json)
- [中国历代人物传记资料库：王乾溥（CBDB 261841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261841&o=json)
- [中国历代人物传记资料库：王思惠（CBDB 261840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261840&o=json)
- [中国历代人物传记资料库：王仲超（CBDB 261839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261839&o=json)
