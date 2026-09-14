---
schema: wang-person/v1
id: p_aGdGkp2dMBSExgBGBbzFsu
status: active
merged_into: null
display_name: 王光儒
cbdb_id: 275622
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TEQSU9Lm9cq6fyofkY8WMp
        subject_person_id: p_aGdGkp2dMBSExgBGBbzFsu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光儒，明人物。弘治十八年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 275622）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_lPHmXYspJKoklpy3IN9-wP
          claim_id: c_TEQSU9Lm9cq6fyofkY8WMp
          source_id: s_4NHQ2ctHU1kZ5fBDnDcJ6K
          stance: supports
          locator: CBDB:275622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4NHQ2ctHU1kZ5fBDnDcJ6K
            source_type: api_record
            title: 中国历代人物传记资料库：王光儒（CBDB 275622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json
            external_identifier: CBDB:275622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YoJNoSAVMKyFsNfAPMCK14
        subject_person_id: p_aGdGkp2dMBSExgBGBbzFsu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qttwcGprbdLcEpApk9S61g
          claim_id: c_YoJNoSAVMKyFsNfAPMCK14
          source_id: s_4NHQ2ctHU1kZ5fBDnDcJ6K
          stance: supports
          locator: CBDB:275622
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mOPaT5D7qm_dyyA2YpI8HX
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aGdGkp2dMBSExgBGBbzFsu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A9X5tyg3mvAjb1m2xd9-EO
          claim_id: c_mOPaT5D7qm_dyyA2YpI8HX
          source_id: s_rNfgx8CCm8YL4LGTebqwLV
          stance: supports
          locator: CBDB：兄弟 王光佐（201648）之父／母 王京幾
          quotation: null
          interpretation_note: 由兄弟关系推断：王光儒 与 王光佐 为同胞（CBDB 记「兄」），王光佐 之父／母即 王光儒 之父／母。
          source:
            id: s_rNfgx8CCm8YL4LGTebqwLV
            source_type: api_record
            title: 中国历代人物传记资料库：王光儒（CBDB 275622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json
            external_identifier: CBDB:275622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3pGecEKBQ7L7i74yoHX3og
        status: active
        display_name: 王京幾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0-BXLj3Hly0xn9SJAtgd7v
        subject_person_id: p_aGdGkp2dMBSExgBGBbzFsu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4qLMjHqaI3cxhc87wv94D
          claim_id: c_0-BXLj3Hly0xn9SJAtgd7v
          source_id: s_rNfgx8CCm8YL4LGTebqwLV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201648 王光佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rNfgx8CCm8YL4LGTebqwLV
            source_type: api_record
            title: 中国历代人物传记资料库：王光儒（CBDB 275622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json
            external_identifier: CBDB:275622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hgNMo84ydGRxnNtLqHjNYL
        status: active
        display_name: 王光佐
        merged_into_person_id: null
---

# 王光儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光儒，明人物。弘治十八年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 275622） | accepted |
| name.primary | 王光儒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3pGecEKBQ7L7i74yoHX3og | 王京幾 | accepted |
| other | p_hgNMo84ydGRxnNtLqHjNYL | 王光佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光儒（CBDB 275622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275622&o=json)
