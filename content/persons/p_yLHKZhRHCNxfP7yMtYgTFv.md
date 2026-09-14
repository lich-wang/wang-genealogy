---
schema: wang-person/v1
id: p_yLHKZhRHCNxfP7yMtYgTFv
status: active
merged_into: null
display_name: 王塈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GmWwma5TA7eJNHWoHyc3tj
        subject_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王塈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N5jEAGr81QgRND8g5czdKp
          claim_id: c_GmWwma5TA7eJNHWoHyc3tj
          source_id: s_7gTHHVehJzdA8tgNhppLQ3
          stance: supports
          locator: CBDB:222815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222815）
          source: &a1
            id: s_7gTHHVehJzdA8tgNhppLQ3
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 222815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json
            external_identifier: CBDB:222815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pwoRXpJfy6afxFUeEfUYcG
        subject_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王塈，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222815）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a_-JVZyMCacFCvmaTnijEp
          claim_id: c_pwoRXpJfy6afxFUeEfUYcG
          source_id: s_7gTHHVehJzdA8tgNhppLQ3
          stance: supports
          locator: CBDB:222815
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aLdJTv2Myu3Iny1X2VB_YN
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Kz4Rk_Ent7doug064tkPyI
          claim_id: c_aLdJTv2Myu3Iny1X2VB_YN
          source_id: s_WalMDWXHyGfo9_qMAWbLdd
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王塈 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王塈 之父／母。
          source:
            id: s_WalMDWXHyGfo9_qMAWbLdd
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 222815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json
            external_identifier: CBDB:222815
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
        id: c_0rSU5Gdn7yDEaHwDnly8K8
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vC61VJHIYKZ66n40fEi_Tb
          claim_id: c_0rSU5Gdn7yDEaHwDnly8K8
          source_id: s_WalMDWXHyGfo9_qMAWbLdd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WalMDWXHyGfo9_qMAWbLdd
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 222815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json
            external_identifier: CBDB:222815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王塈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王塈 | accepted |
| bio.summary | 王塈，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王塈（CBDB 222815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json)
