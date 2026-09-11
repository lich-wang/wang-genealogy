---
schema: wang-person/v1
id: p_eeT9SQ93RGpf2B6Bihu6TP
status: active
merged_into: null
display_name: 王臣
revision: 3
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NA2BJgn585RJ3P9NEQNU5H
          claim_id: c_BSbtuuGdbBWUmY7EHVPq6b
          source_id: s_4ppYc3MC1VehURmcY3ZM2d
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
  descendants: []
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| birth.date | 1454年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |
| ancestors | p_jqEiBuqNdYKWEF4cuEvm5K | 王子善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 199309）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199309&o=json)
- [中国历代人物传记资料库：王槩（CBDB 126810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json)
- [中国历代人物传记资料库：王子善（CBDB 243236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243236&o=json)
