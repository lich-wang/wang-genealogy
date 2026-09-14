---
schema: wang-person/v1
id: p_t5w9aLHR6A5gdUHq2nzVCC
status: active
merged_into: null
display_name: 王珤
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HvUcsry9HcaoYZCNbMGiZk
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkFXfc7fCyL1TnsXxsfTCy
          claim_id: c_HvUcsry9HcaoYZCNbMGiZk
          source_id: s_tBHSi3aSPRVhGHHRuUMNXX
          stance: supports
          locator: CBDB:282954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（282954）
          source: &a1
            id: s_tBHSi3aSPRVhGHHRuUMNXX
            source_type: api_record
            title: 中国历代人物传记资料库：王珤（CBDB 282954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282954&o=json
            external_identifier: CBDB:282954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yPPNA7KGTX1fbBapmvVTd1
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珤，明人物。正德十二年進士，籍贯白水，曾任戶部主事。（中国历代人物传记资料库 CBDB 282954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OYfo2T-HUtwQ-HmnKv9X0s
          claim_id: c_yPPNA7KGTX1fbBapmvVTd1
          source_id: s_tBHSi3aSPRVhGHHRuUMNXX
          stance: supports
          locator: CBDB:282954
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_2ai_amlQ_KX-KOD-XItpRi
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cojJSQjAH97J8dPWYrRzuD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dkDCA7uDnZSUIq2gIc1sB6
          claim_id: c_2ai_amlQ_KX-KOD-XItpRi
          source_id: s_tBHSi3aSPRVhGHHRuUMNXX
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百二十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cojJSQjAH97J8dPWYrRzuD
        status: active
        display_name: 王謳
        merged_into_person_id: null
    - claim:
        id: c_-9GK-4Yx-MTaLHgoJB9NT8
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Rrpr8NgWXNBcaG4e9FxoE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_baMnuAK-4-vVSIlv4SVizs
          claim_id: c_-9GK-4Yx-MTaLHgoJB9NT8
          source_id: s_zaj_3fjurdwqIoXYSlepno
          stance: supports
          locator: CBDB：兄弟 王謳（126857）之父／母 王珤
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王謳 为同胞（CBDB 记「弟」），王謳 之父／母即 王誥 之父／母。
          source:
            id: s_zaj_3fjurdwqIoXYSlepno
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 282958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282958&o=json
            external_identifier: CBDB:282958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Rrpr8NgWXNBcaG4e9FxoE
        status: active
        display_name: 王誥
        merged_into_person_id: null
    - claim:
        id: c_gjfd7edPGXUg-kZUqiu381
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TrKq9YDk8kFuZXHSDcPH1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUKh2a-qxURAxy9xwalzkK
          claim_id: c_gjfd7edPGXUg-kZUqiu381
          source_id: s_t6FTaLaWitKTsd_9-CMi97
          stance: supports
          locator: CBDB：兄弟 王謳（126857）之父／母 王珤
          quotation: null
          interpretation_note: 由兄弟关系推断：王詔 与 王謳 为同胞（CBDB 记「弟」），王謳 之父／母即 王詔 之父／母。
          source:
            id: s_t6FTaLaWitKTsd_9-CMi97
            source_type: api_record
            title: 中国历代人物传记资料库：王詔（CBDB 282959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json
            external_identifier: CBDB:282959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TrKq9YDk8kFuZXHSDcPH1C
        status: active
        display_name: 王詔
        merged_into_person_id: null
    - claim:
        id: c_OaNMti3DtkzZi1T2QmZdsc
        subject_person_id: p_t5w9aLHR6A5gdUHq2nzVCC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xQozRkdJWcKmdRdE64oc7E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bnTA7hgDck766MBHeuY2uN
          claim_id: c_OaNMti3DtkzZi1T2QmZdsc
          source_id: s_fY6pwnJodIewuByeUkxNw0
          stance: supports
          locator: CBDB：兄弟 王謳（126857）之父／母 王珤
          quotation: null
          interpretation_note: 由兄弟关系推断：王諤 与 王謳 为同胞（CBDB 记「弟」），王謳 之父／母即 王諤 之父／母。
          source:
            id: s_fY6pwnJodIewuByeUkxNw0
            source_type: api_record
            title: 中国历代人物传记资料库：王諤（CBDB 282957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282957&o=json
            external_identifier: CBDB:282957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xQozRkdJWcKmdRdE64oc7E
        status: active
        display_name: 王諤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珤 | accepted |
| bio.summary | 王珤，明人物。正德十二年進士，籍贯白水，曾任戶部主事。（中国历代人物传记资料库 CBDB 282954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cojJSQjAH97J8dPWYrRzuD | 王謳 | accepted |
| children | p_2Rrpr8NgWXNBcaG4e9FxoE | 王誥 | accepted |
| children | p_TrKq9YDk8kFuZXHSDcPH1C | 王詔 | accepted |
| children | p_xQozRkdJWcKmdRdE64oc7E | 王諤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珤（CBDB 282954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282954&o=json)
- [中国历代人物传记资料库：王諤（CBDB 282957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282957&o=json)
- [中国历代人物传记资料库：王誥（CBDB 282958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282958&o=json)
- [中国历代人物传记资料库：王詔（CBDB 282959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282959&o=json)
