---
schema: wang-person/v1
id: p_THQx38bKosUpdXRAkw2R2w
status: active
merged_into: null
display_name: 王世貞
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DdBKF6Pd4JD5PUAYbPHAft
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世貞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X1dYs9U3WJyDNTUnsjMn2N
          claim_id: c_DdBKF6Pd4JD5PUAYbPHAft
          source_id: s_uSHuPzixSKvk8Qise4xPpW
          stance: supports
          locator: CBDB:34717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34717）
          source: &a1
            id: s_uSHuPzixSKvk8Qise4xPpW
            source_type: api_record
            title: 中国历代人物传记资料库：王世貞（CBDB 34717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json
            external_identifier: CBDB:34717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.095Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DmzHQyo14ogZi7NS4MRorE
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4TA2dZfFkRqr9C5QsMj1mf
          claim_id: c_DmzHQyo14ogZi7NS4MRorE
          source_id: s_uSHuPzixSKvk8Qise4xPpW
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
        id: c_FzaWjxwc3mpNvjFF42X9T2
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1590年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xuJiWgAQ3cQ3VbhT6xgGnN
          claim_id: c_FzaWjxwc3mpNvjFF42X9T2
          source_id: s_uSHuPzixSKvk8Qise4xPpW
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
        id: c_9ZzGntT45kQV29DoLg4oan
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世貞（1526年—1590年），明人物。明清進士進士，籍贯太倉州，身份为以疾廢、詩人，入仕進士。（中国历代人物传记资料库 CBDB 34717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J_NHWjiNtU-2GrTaEo44zm
          claim_id: c_9ZzGntT45kQV29DoLg4oan
          source_id: s_uSHuPzixSKvk8Qise4xPpW
          stance: supports
          locator: CBDB:34717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wCyvr4itBFQwQSLKU_IaX2
        subject_person_id: p_ssAqXP1XN82W3Z1XD178zK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CLA9dpQvvkP6iYCMVvO0dF
          claim_id: c_wCyvr4itBFQwQSLKU_IaX2
          source_id: s_EGYNzhpNhAqJTrdrD1CqfF
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EGYNzhpNhAqJTrdrD1CqfF
            source_type: api_record
            title: 中国历代人物传记资料库：王忬（CBDB 309375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309375&o=json
            external_identifier: CBDB:309375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.811Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ssAqXP1XN82W3Z1XD178zK
        status: active
        display_name: 王忬
        merged_into_person_id: null
  children:
    - claim:
        id: c_L17epIaSnULnveN2D6Ib1G
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JmAYb8swKSWn43Xra4JyV8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2F42SDiRtx3GEiNcESHvLX
          claim_id: c_L17epIaSnULnveN2D6Ib1G
          source_id: s_1q5Ub591q252o6rMGKeYAj
          stance: supports
          locator: 明史，vol.288：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1q5Ub591q252o6rMGKeYAj
            source_type: api_record
            title: 中国历代人物传记资料库：王士驌（CBDB 134660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json
            external_identifier: CBDB:134660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JmAYb8swKSWn43Xra4JyV8
        status: active
        display_name: 王士驌
        merged_into_person_id: null
    - claim:
        id: c_gA7StOl9b-FeEy1Cil8Yc9
        subject_person_id: p_THQx38bKosUpdXRAkw2R2w
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hK8MQg1VHThMWPaSJ1KJ6o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oixnRjGf6WIxCIjyRlUV7O
          claim_id: c_gA7StOl9b-FeEy1Cil8Yc9
          source_id: s_xHX4UjybTyBqEq5VSuoCuT
          stance: supports
          locator: CBDB 双向互证（父 王世貞 ⇄ 子 王士騏）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_xHX4UjybTyBqEq5VSuoCuT
            source_type: api_record
            title: 中国历代人物传记资料库：王士騏（CBDB 34736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34736&o=json
            external_identifier: CBDB:34736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hK8MQg1VHThMWPaSJ1KJ6o
        status: active
        display_name: 王士騏
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DlTFW9Lzub2YG2w9q2tUSc
        subject_person_id: p_zeZuZNMwnhZ83ze1SKiLnN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qE81ZsYL_gvZf3UYbyzwos
          claim_id: c_DlTFW9Lzub2YG2w9q2tUSc
          source_id: s_s4udXjXLp9PL5w2fMFPSWd
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s4udXjXLp9PL5w2fMFPSWd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：魏氏（309377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309377&o=json
            external_identifier: CBDB:309377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:33.024Z
            metadata_json: null
      object_person:
        id: p_zeZuZNMwnhZ83ze1SKiLnN
        status: active
        display_name: 魏氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_PT-JrbfjrB0pErdAGN0xgG
        subject_person_id: p_Myxv48wyKA3EhwRsziJopB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_It2CjD7_NNMd_GtUFVg-rk
          claim_id: c_PT-JrbfjrB0pErdAGN0xgG
          source_id: s_ykRECbMUZEggZEk7anueVi
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ykRECbMUZEggZEk7anueVi
            source_type: api_record
            title: 中国历代人物传记资料库：王輅（CBDB 309372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309372&o=json
            external_identifier: CBDB:309372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Myxv48wyKA3EhwRsziJopB
        status: active
        display_name: 王輅
        merged_into_person_id: null
    - claim:
        id: c_jFmopXLje6SrH-DPHONDQ0
        subject_person_id: p_qHVPmDLgLbn56ct3eKkqpM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_THQx38bKosUpdXRAkw2R2w
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UrUr65nJy9ZzVygPKzZr1U
          claim_id: c_jFmopXLje6SrH-DPHONDQ0
          source_id: s_yEFCfmWVRTNcRsLHFE4J6J
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第八十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yEFCfmWVRTNcRsLHFE4J6J
            source_type: api_record
            title: 中国历代人物传记资料库：王倬（CBDB 309373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309373&o=json
            external_identifier: CBDB:309373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qHVPmDLgLbn56ct3eKkqpM
        status: active
        display_name: 王倬
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世貞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世貞 | accepted |
| birth.date | 1526年 | accepted |
| death.date | 1590年 | accepted |
| bio.summary | 王世貞（1526年—1590年），明人物。明清進士進士，籍贯太倉州，身份为以疾廢、詩人，入仕進士。（中国历代人物传记资料库 CBDB 34717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ssAqXP1XN82W3Z1XD178zK | 王忬 | accepted |
| children | p_JmAYb8swKSWn43Xra4JyV8 | 王士驌 | accepted |
| children | p_hK8MQg1VHThMWPaSJ1KJ6o | 王士騏 | accepted |
| spouses | p_zeZuZNMwnhZ83ze1SKiLnN | 魏氏 | accepted |
| ancestors | p_Myxv48wyKA3EhwRsziJopB | 王輅 | accepted |
| ancestors | p_qHVPmDLgLbn56ct3eKkqpM | 王倬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輅（CBDB 309372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309372&o=json)
- [中国历代人物传记资料库：王士騏（CBDB 34736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34736&o=json)
- [中国历代人物传记资料库：王士驌（CBDB 134660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134660&o=json)
- [中国历代人物传记资料库：王世貞（CBDB 34717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34717&o=json)
- [中国历代人物传记资料库：王忬（CBDB 309375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309375&o=json)
- [中国历代人物传记资料库：王倬（CBDB 309373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309373&o=json)
- [CBDB 中国历代人物传记资料库：魏氏（309377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309377&o=json)
