---
schema: wang-person/v1
id: p_WLx3Kf78a9Boh4RiRRgyWy
status: active
merged_into: null
display_name: 王遇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ojiEX55btS5yjA6TJsQHH
        subject_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YdS4gReZwVtUQSBzkVqcw5
          claim_id: c_8ojiEX55btS5yjA6TJsQHH
          source_id: s_7GBfTiLCbfsPVCE6F2BnhV
          stance: supports
          locator: CBDB:276422
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276422）
          source: &a1
            id: s_7GBfTiLCbfsPVCE6F2BnhV
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 276422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json
            external_identifier: CBDB:276422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ak7aLimSt4HtHhu1gPg1Lh
        subject_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276422）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FZEM3vUcZm2vrxpfCYNsfs
          claim_id: c_Ak7aLimSt4HtHhu1gPg1Lh
          source_id: s_7GBfTiLCbfsPVCE6F2BnhV
          stance: supports
          locator: CBDB:276422
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oGZZBGqY9lLARJRGxIbESb
        subject_person_id: p_BGL1HFsgeWYQ3VFWBGSemb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LMX65bjryiqUBkfPUW8EZA
          claim_id: c_oGZZBGqY9lLARJRGxIbESb
          source_id: s_fCwtL4ANei3r_MW0D_IWuG
          stance: supports
          locator: CBDB：兄弟 王道（126743）之父／母 王琮
          quotation: null
          interpretation_note: 由兄弟关系推断：王遇 与 王道 为同胞（CBDB 记「兄」），王道 之父／母即 王遇 之父／母。
          source:
            id: s_fCwtL4ANei3r_MW0D_IWuG
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 276422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json
            external_identifier: CBDB:276422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BGL1HFsgeWYQ3VFWBGSemb
        status: active
        display_name: 王琮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cCVd628Nd-rWCI068hkbeb
        subject_person_id: p_WLx3Kf78a9Boh4RiRRgyWy
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQSeau4TnN2P1YHAKu1a3t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IFTlvGnWjMaATAOdkjOYbI
          claim_id: c_cCVd628Nd-rWCI068hkbeb
          source_id: s_fCwtL4ANei3r_MW0D_IWuG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126743 王道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fCwtL4ANei3r_MW0D_IWuG
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 276422）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json
            external_identifier: CBDB:276422
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQSeau4TnN2P1YHAKu1a3t
        status: active
        display_name: 王道
        merged_into_person_id: null
---

# 王遇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇 | accepted |
| bio.summary | 王遇，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276422） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGL1HFsgeWYQ3VFWBGSemb | 王琮 | accepted |
| other | p_eQSeau4TnN2P1YHAKu1a3t | 王道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遇（CBDB 276422）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276422&o=json)
