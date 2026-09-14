---
schema: wang-person/v1
id: p_eeT9SQ93RGpf2B6Bihu6TP
status: active
merged_into: null
display_name: 王臣
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jNjeMxnjqr9LgKtmAujbJx
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F81cyob73SPnHD85QKhGsy
          claim_id: c_jNjeMxnjqr9LgKtmAujbJx
          source_id: s_4ppYc3MC1VehURmcY3ZM2d
          stance: supports
          locator: CBDB:199309
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199309）
          source: &a1
            id: s_4ppYc3MC1VehURmcY3ZM2d
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 199309）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199309&o=json
            external_identifier: CBDB:199309
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.539Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_euZSBngwXb2hGQYD4msmQW
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1454年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV2huouzAAy1Vdc2KCsXvf
          claim_id: c_euZSBngwXb2hGQYD4msmQW
          source_id: s_4ppYc3MC1VehURmcY3ZM2d
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
        id: c_BSbtuuGdbBWUmY7EHVPq6b
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣（生于1454年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任侍講。（中国历代人物传记资料库 CBDB 199309）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OTI6WpX3izitgaRrc-TtUp
          claim_id: c_BSbtuuGdbBWUmY7EHVPq6b
          source_id: s_4ppYc3MC1VehURmcY3ZM2d
          stance: supports
          locator: CBDB:199309
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NQnMJj5ZaJzs9qR-FkXWX9
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGwQmGOY3QRm1tvDcsTfI4
          claim_id: c_NQnMJj5ZaJzs9qR-FkXWX9
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 江西通志，lgid=1197568：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B3XTLgN9zUiELnRumuLQTn
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 126810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json
            external_identifier: CBDB:126810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_15cqO9uv_THXj465autTnJ
        subject_person_id: p_jqEiBuqNdYKWEF4cuEvm5K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n950vCw_HAxxJ0Q2Yqc45-
          claim_id: c_15cqO9uv_THXj465autTnJ
          source_id: s_3D9ntfS2FZTVD5F1LYL8Mt
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第六十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3D9ntfS2FZTVD5F1LYL8Mt
            source_type: api_record
            title: 中国历代人物传记资料库：王子善（CBDB 243236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243236&o=json
            external_identifier: CBDB:243236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jqEiBuqNdYKWEF4cuEvm5K
        status: active
        display_name: 王子善
        merged_into_person_id: null
    - claim:
        id: c_yYV0lJtl1C2DRlK028hX8b
        subject_person_id: p_TLfa1FjrG1yPPr6LYNqiLH
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tblBFDngiLvwMce8hBbFRO
          claim_id: c_yYV0lJtl1C2DRlK028hX8b
          source_id: s_kMf4TzTHvQP5gWnruJA5xc
          stance: supports
          locator: 成化五年進士登科錄:一卷，第二甲第六十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kMf4TzTHvQP5gWnruJA5xc
            source_type: api_record
            title: 中国历代人物传记资料库：王仲起（CBDB 243237）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243237&o=json
            external_identifier: CBDB:243237
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TLfa1FjrG1yPPr6LYNqiLH
        status: active
        display_name: 王仲起
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_GeTNUz53if1TFG6QDkBOKK
        subject_person_id: p_TY7MjXr4s5SC39efDYBfgC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Orb7KW50sMMm_k6G5OkTBY
          claim_id: c_GeTNUz53if1TFG6QDkBOKK
          source_id: s_gT0CTtEd2aAVgcWlSX3YP-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gT0CTtEd2aAVgcWlSX3YP-
            source_type: api_record
            title: 中国历代人物传记资料库：王世選（CBDB 243245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243245&o=json
            external_identifier: CBDB:243245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TY7MjXr4s5SC39efDYBfgC
        status: active
        display_name: 王世選
        merged_into_person_id: null
    - claim:
        id: c_WMUHySsXQ9VMTQlkB5Z9ZB
        subject_person_id: p_cVXAZf35EZ1jSuNPUED9jR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRJOrLQr4UyR834k2jpghw
          claim_id: c_WMUHySsXQ9VMTQlkB5Z9ZB
          source_id: s_K48UECCDA-0lItLwDGxw2k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_K48UECCDA-0lItLwDGxw2k
            source_type: api_record
            title: 中国历代人物传记资料库：王世用（CBDB 243246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json
            external_identifier: CBDB:243246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cVXAZf35EZ1jSuNPUED9jR
        status: active
        display_name: 王世用
        merged_into_person_id: null
    - claim:
        id: c_9ngIiGVzPijwA5Uk4NwUDD
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hqqkT8oG6jaNFG2415Y6zw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6LNH6rZDuG-oh5FCqJnEQ8
          claim_id: c_9ngIiGVzPijwA5Uk4NwUDD
          source_id: s_dW_iBmkfUxeLrkB5NYR2qK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dW_iBmkfUxeLrkB5NYR2qK
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 243247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json
            external_identifier: CBDB:243247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hqqkT8oG6jaNFG2415Y6zw
        status: active
        display_name: 王世卿
        merged_into_person_id: null
    - claim:
        id: c_bq8qX80aEwVp75Gx_a0gju
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pwNKXWHUKXAwmdBehWSMKM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-fF8dtR35qvd4n2RdHh2_D
          claim_id: c_bq8qX80aEwVp75Gx_a0gju
          source_id: s_-1daMuSJRsrvVBU8XB22a3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-1daMuSJRsrvVBU8XB22a3
            source_type: api_record
            title: 中国历代人物传记资料库：王世弼（CBDB 243243）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243243&o=json
            external_identifier: CBDB:243243
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pwNKXWHUKXAwmdBehWSMKM
        status: active
        display_name: 王世弼
        merged_into_person_id: null
    - claim:
        id: c_0mnkmPEg2jx4LDq7tMaCE7
        subject_person_id: p_eeT9SQ93RGpf2B6Bihu6TP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r4ijWCDx3yMAGT9efG6AvN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yzSkexHBgf3aMJR4ekPnao
          claim_id: c_0mnkmPEg2jx4LDq7tMaCE7
          source_id: s_7OZSjczXGmGlvF_qVo2vl-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199309 王臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7OZSjczXGmGlvF_qVo2vl-
            source_type: api_record
            title: 中国历代人物传记资料库：王世延（CBDB 243244）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json
            external_identifier: CBDB:243244
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4ijWCDx3yMAGT9efG6AvN
        status: active
        display_name: 王世延
        merged_into_person_id: null
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | 王臣（生于1454年），明人物。明清進士進士，籍贯廬陵，入仕進士，曾任侍講。（中国历代人物传记资料库 CBDB 199309） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |
| ancestors | p_jqEiBuqNdYKWEF4cuEvm5K | 王子善 | accepted |
| ancestors | p_TLfa1FjrG1yPPr6LYNqiLH | 王仲起 | accepted |
| other | p_TY7MjXr4s5SC39efDYBfgC | 王世選 | accepted |
| other | p_cVXAZf35EZ1jSuNPUED9jR | 王世用 | accepted |
| other | p_hqqkT8oG6jaNFG2415Y6zw | 王世卿 | accepted |
| other | p_pwNKXWHUKXAwmdBehWSMKM | 王世弼 | accepted |
| other | p_r4ijWCDx3yMAGT9efG6AvN | 王世延 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 199309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199309&o=json)
- [中国历代人物传记资料库：王槩（CBDB 126810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json)
- [中国历代人物传记资料库：王世弼（CBDB 243243）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243243&o=json)
- [中国历代人物传记资料库：王世卿（CBDB 243247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243247&o=json)
- [中国历代人物传记资料库：王世選（CBDB 243245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243245&o=json)
- [中国历代人物传记资料库：王世延（CBDB 243244）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243244&o=json)
- [中国历代人物传记资料库：王世用（CBDB 243246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243246&o=json)
- [中国历代人物传记资料库：王仲起（CBDB 243237）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243237&o=json)
- [中国历代人物传记资料库：王子善（CBDB 243236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243236&o=json)
