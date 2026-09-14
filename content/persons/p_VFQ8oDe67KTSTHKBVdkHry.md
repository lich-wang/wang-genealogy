---
schema: wang-person/v1
id: p_VFQ8oDe67KTSTHKBVdkHry
status: active
merged_into: null
display_name: 王惟翰
cbdb_id: 336619
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AmcwnVsqAVU5ebkZZixBWQ
        subject_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟翰，明人物。隆慶二年進士，籍贯文安，曾任通判。（中国历代人物传记资料库 CBDB 336619）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_w42ALwJUSaAuzgTL1FCFPJ
          claim_id: c_AmcwnVsqAVU5ebkZZixBWQ
          source_id: s_Eub5FQhVfMEHvC7n58gTMm
          stance: supports
          locator: CBDB:336619
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Eub5FQhVfMEHvC7n58gTMm
            source_type: api_record
            title: 中国历代人物传记资料库：王惟翰（CBDB 336619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json
            external_identifier: CBDB:336619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9jGEcofqJBgiik9pkRNxTm
        subject_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AHX4KQ1a9tBuAAsVU1mFiA
          claim_id: c_9jGEcofqJBgiik9pkRNxTm
          source_id: s_Eub5FQhVfMEHvC7n58gTMm
          stance: supports
          locator: CBDB:336619
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rxXhSn1YzD4bFlVCI7QVfh
        subject_person_id: p_ftDTX1CGK9535aJ5ssi8pm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBHYdiV089oTjMlPPUMDBy
          claim_id: c_rxXhSn1YzD4bFlVCI7QVfh
          source_id: s_IFPep_qOa6AAYkZp_mV-0B
          stance: supports
          locator: CBDB：兄弟 王惟幾（205658）之父／母 王佩
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟翰 与 王惟幾 为同胞（CBDB 记「兄」），王惟幾 之父／母即 王惟翰 之父／母。
          source:
            id: s_IFPep_qOa6AAYkZp_mV-0B
            source_type: api_record
            title: 中国历代人物传记资料库：王惟翰（CBDB 336619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json
            external_identifier: CBDB:336619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ftDTX1CGK9535aJ5ssi8pm
        status: active
        display_name: 王佩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_w3nvVJgyKUWphRjkA343-9
        subject_person_id: p_VFQ8oDe67KTSTHKBVdkHry
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kUCuDeuG8a7t95vC5CL3P3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gKfsdxicVWBKYDSRBv-2i9
          claim_id: c_w3nvVJgyKUWphRjkA343-9
          source_id: s_IFPep_qOa6AAYkZp_mV-0B
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205658 王惟幾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IFPep_qOa6AAYkZp_mV-0B
            source_type: api_record
            title: 中国历代人物传记资料库：王惟翰（CBDB 336619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json
            external_identifier: CBDB:336619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kUCuDeuG8a7t95vC5CL3P3
        status: active
        display_name: 王惟幾
        merged_into_person_id: null
---

# 王惟翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟翰，明人物。隆慶二年進士，籍贯文安，曾任通判。（中国历代人物传记资料库 CBDB 336619） | accepted |
| name.primary | 王惟翰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftDTX1CGK9535aJ5ssi8pm | 王佩 | accepted |
| other | p_kUCuDeuG8a7t95vC5CL3P3 | 王惟幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟翰（CBDB 336619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336619&o=json)
