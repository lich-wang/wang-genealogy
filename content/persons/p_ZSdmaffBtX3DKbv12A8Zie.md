---
schema: wang-person/v1
id: p_ZSdmaffBtX3DKbv12A8Zie
status: active
merged_into: null
display_name: 王輝
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zNbjEsEbEGDFh9E2suVN6L
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G4sRV6WxHiUURrmQMjQct1
          claim_id: c_zNbjEsEbEGDFh9E2suVN6L
          source_id: s_b9Fk2CCtttY3pUV4gR1mV7
          stance: supports
          locator: CBDB:242210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242210）
          source: &a1
            id: s_b9Fk2CCtttY3pUV4gR1mV7
            source_type: api_record
            title: 中国历代人物传记资料库：王輝（CBDB 242210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242210&o=json
            external_identifier: CBDB:242210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FPC1QNMQHitxQof3fuqcUX
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輝，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242210）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n3zvPJwWSDxOeBuXp2VGFN
          claim_id: c_FPC1QNMQHitxQof3fuqcUX
          source_id: s_b9Fk2CCtttY3pUV4gR1mV7
          stance: supports
          locator: CBDB:242210
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wEExksD47eEVF-MrHpYvO2
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9NadhxFwxWfp7AyRarwGS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qaApADrzH27KZtwE8mT8aA
          claim_id: c_wEExksD47eEVF-MrHpYvO2
          source_id: s_bbRqnXQuKPo1U93iT5YxWY
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第二百零九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bbRqnXQuKPo1U93iT5YxWY
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 199241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json
            external_identifier: CBDB:199241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J9NadhxFwxWfp7AyRarwGS
        status: active
        display_name: 王義
        merged_into_person_id: null
    - claim:
        id: c_WQGKujvQtNtdhpdil1pp95
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TtM_bwarqZF8y2HXouGJ7S
          claim_id: c_WQGKujvQtNtdhpdil1pp95
          source_id: s_YTck9oFpxjwPryux56cxNS
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王志 与 王義 为同胞（CBDB 记「弟」），王義 之父／母即 王志 之父／母。
          source:
            id: s_YTck9oFpxjwPryux56cxNS
            source_type: api_record
            title: 中国历代人物传记资料库：王志（CBDB 242213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json
            external_identifier: CBDB:242213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NJ1FnMUfkBY1Q2LFwCXEzP
        status: active
        display_name: 王志
        merged_into_person_id: null
    - claim:
        id: c_Fv28FviKeQq158ZsigOc60
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMTVa24vHbR4amGvDqLboM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xKVhaBZGySB4WvZCxo2jjA
          claim_id: c_Fv28FviKeQq158ZsigOc60
          source_id: s_JQP_a4FEbcSUbXp0cG08YA
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王勇 与 王義 为同胞（CBDB 记「弟」），王義 之父／母即 王勇 之父／母。
          source:
            id: s_JQP_a4FEbcSUbXp0cG08YA
            source_type: api_record
            title: 中国历代人物传记资料库：王勇（CBDB 242215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json
            external_identifier: CBDB:242215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NMTVa24vHbR4amGvDqLboM
        status: active
        display_name: 王勇
        merged_into_person_id: null
    - claim:
        id: c_GWdwVsrkbOJ_HF-G3m0Y6x
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o8mnqwhxLHXVyozNvVaaCQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wfZlklzugEUjZP0rt1pccd
          claim_id: c_GWdwVsrkbOJ_HF-G3m0Y6x
          source_id: s_CP0qYXJIKUvv7bPJkEne2f
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王順 与 王義 为同胞（CBDB 记「兄」），王義 之父／母即 王順 之父／母。
          source:
            id: s_CP0qYXJIKUvv7bPJkEne2f
            source_type: api_record
            title: 中国历代人物传记资料库：王順（CBDB 242216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json
            external_identifier: CBDB:242216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o8mnqwhxLHXVyozNvVaaCQ
        status: active
        display_name: 王順
        merged_into_person_id: null
    - claim:
        id: c_NtJA_WOIMLfYYfLG3TlIO3
        subject_person_id: p_ZSdmaffBtX3DKbv12A8Zie
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vHq5ZkAmuwCp4xKcq1eqBa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0-0QZu-ZRNXxUYhStleXb
          claim_id: c_NtJA_WOIMLfYYfLG3TlIO3
          source_id: s_Ghe_73pGqf_H4XerkY1736
          stance: supports
          locator: CBDB：兄弟 王義（199241）之父／母 王輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王全 与 王義 为同胞（CBDB 记「弟」），王義 之父／母即 王全 之父／母。
          source:
            id: s_Ghe_73pGqf_H4XerkY1736
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 242214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242214&o=json
            external_identifier: CBDB:242214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vHq5ZkAmuwCp4xKcq1eqBa
        status: active
        display_name: 王全
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王輝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輝 | accepted |
| bio.summary | 王輝，明人物。成化二年進士，籍贯洛川。（中国历代人物传记资料库 CBDB 242210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_J9NadhxFwxWfp7AyRarwGS | 王義 | accepted |
| children | p_NJ1FnMUfkBY1Q2LFwCXEzP | 王志 | accepted |
| children | p_NMTVa24vHbR4amGvDqLboM | 王勇 | accepted |
| children | p_o8mnqwhxLHXVyozNvVaaCQ | 王順 | accepted |
| children | p_vHq5ZkAmuwCp4xKcq1eqBa | 王全 | accepted |

## 外部来源

- [中国历代人物传记资料库：王輝（CBDB 242210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242210&o=json)
- [中国历代人物传记资料库：王全（CBDB 242214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242214&o=json)
- [中国历代人物传记资料库：王順（CBDB 242216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242216&o=json)
- [中国历代人物传记资料库：王義（CBDB 199241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199241&o=json)
- [中国历代人物传记资料库：王勇（CBDB 242215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242215&o=json)
- [中国历代人物传记资料库：王志（CBDB 242213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242213&o=json)
