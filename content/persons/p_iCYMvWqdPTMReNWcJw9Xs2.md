---
schema: wang-person/v1
id: p_iCYMvWqdPTMReNWcJw9Xs2
status: active
merged_into: null
display_name: 王臣端
cbdb_id: 158749
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CN845GLSghWqu4UJhF8EUP
        subject_person_id: p_iCYMvWqdPTMReNWcJw9Xs2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣端，唐人物。籍贯萬年，曾任殿中監。（中国历代人物传记资料库 CBDB 158749）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_c51_38s_ZF_qg5lEXz4qoC
          claim_id: c_CN845GLSghWqu4UJhF8EUP
          source_id: s_WoddVbbdoor9xHssXQ8nA1
          stance: supports
          locator: CBDB:158749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WoddVbbdoor9xHssXQ8nA1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣端（CBDB 158749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158749&o=json
            external_identifier: CBDB:158749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kiy2CJX9P6Huye8M94hHY1
        subject_person_id: p_iCYMvWqdPTMReNWcJw9Xs2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣端
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FxXgnA8EKyzMfZmc7Rjz9c
          claim_id: c_Kiy2CJX9P6Huye8M94hHY1
          source_id: s_WoddVbbdoor9xHssXQ8nA1
          stance: supports
          locator: CBDB:158749
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2201-2300）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8e2-XFzZaObfRik2QSlfoE
        subject_person_id: p_eqTLPp4L1yE8imCTDAgei5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iCYMvWqdPTMReNWcJw9Xs2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zg491P7XEECb6pxg3p-pZK
          claim_id: c_8e2-XFzZaObfRik2QSlfoE
          source_id: s_WoddVbbdoor9xHssXQ8nA1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WoddVbbdoor9xHssXQ8nA1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣端（CBDB 158749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158749&o=json
            external_identifier: CBDB:158749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.122Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_eqTLPp4L1yE8imCTDAgei5
        status: active
        display_name: 王英進
        merged_into_person_id: null
  children:
    - claim:
        id: c_ir-oL7xtpfxED2_WxYhG5u
        subject_person_id: p_iCYMvWqdPTMReNWcJw9Xs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rkD97HRVO-sf3ZTh_PHAuJ
          claim_id: c_ir-oL7xtpfxED2_WxYhG5u
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1SQTm9bfti1Cf4E7AWrBph
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 141823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json
            external_identifier: CBDB:141823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xT91PgYZaQ28ZWS5H1F1Pb
        status: active
        display_name: 王文幹
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臣端

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王臣端，唐人物。籍贯萬年，曾任殿中監。（中国历代人物传记资料库 CBDB 158749） | accepted |
| name.primary | 王臣端 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eqTLPp4L1yE8imCTDAgei5 | 王英進 | accepted |
| children | p_xT91PgYZaQ28ZWS5H1F1Pb | 王文幹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣端（CBDB 158749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158749&o=json)
- [中国历代人物传记资料库：王文幹（CBDB 141823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json)
