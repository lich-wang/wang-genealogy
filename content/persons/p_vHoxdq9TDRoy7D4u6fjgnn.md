---
schema: wang-person/v1
id: p_vHoxdq9TDRoy7D4u6fjgnn
status: active
merged_into: null
display_name: 王邦達
cbdb_id: 222825
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sZYdJDcD8h2P6o4DrXRnMh
        subject_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦達，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222825）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_0ukRTbpnsKguBsDqLZj_9S
          claim_id: c_sZYdJDcD8h2P6o4DrXRnMh
          source_id: s_AX63GcScNMDjLf7cLk6vV7
          stance: supports
          locator: CBDB:222825
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AX63GcScNMDjLf7cLk6vV7
            source_type: api_record
            title: 中国历代人物传记资料库：王邦達（CBDB 222825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json
            external_identifier: CBDB:222825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zLr217fkxMWn4zfKcMb1hC
        subject_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JTkQFwpmX794AUEM1zNzN7
          claim_id: c_zLr217fkxMWn4zfKcMb1hC
          source_id: s_AX63GcScNMDjLf7cLk6vV7
          stance: supports
          locator: CBDB:222825
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_IQbCsudl9a4PCZPrc3JQf4
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SOWmfvphPgjKmkrk-3Idor
          claim_id: c_IQbCsudl9a4PCZPrc3JQf4
          source_id: s_4ECyIRN-Y3d6HZO31Osszt
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王邦達 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王邦達 之父／母。
          source:
            id: s_4ECyIRN-Y3d6HZO31Osszt
            source_type: api_record
            title: 中国历代人物传记资料库：王邦達（CBDB 222825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json
            external_identifier: CBDB:222825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DPrBzdmFIYCB6DMOTfbsFU
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vr-Nzx4N4fYKDYXlDXCu7O
          claim_id: c_DPrBzdmFIYCB6DMOTfbsFU
          source_id: s_4ECyIRN-Y3d6HZO31Osszt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4ECyIRN-Y3d6HZO31Osszt
            source_type: api_record
            title: 中国历代人物传记资料库：王邦達（CBDB 222825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json
            external_identifier: CBDB:222825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王邦達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王邦達，明人物。萬曆十一年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 222825） | accepted |
| name.primary | 王邦達 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦達（CBDB 222825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json)
