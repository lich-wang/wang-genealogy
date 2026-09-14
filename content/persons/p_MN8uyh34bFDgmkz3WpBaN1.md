---
schema: wang-person/v1
id: p_MN8uyh34bFDgmkz3WpBaN1
status: active
merged_into: null
display_name: 王三顧
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MD7EXJeCNCNCHncUnFP8t5
        subject_person_id: p_MN8uyh34bFDgmkz3WpBaN1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6c3DhTKS9PCukdhpmDwq47
          claim_id: c_MD7EXJeCNCNCHncUnFP8t5
          source_id: s_ZfQhGeYEoreoKDG7CF2esW
          stance: supports
          locator: CBDB:316194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316194）
          source: &a1
            id: s_ZfQhGeYEoreoKDG7CF2esW
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 316194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316194&o=json
            external_identifier: CBDB:316194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.957Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kfDN9HCQY1PXU2Ly5uPohs
        subject_person_id: p_MN8uyh34bFDgmkz3WpBaN1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三顧，明人物。嘉靖三十二年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 316194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nw7eXnd85QRX6fZIUWw5m0
          claim_id: c_kfDN9HCQY1PXU2Ly5uPohs
          source_id: s_ZfQhGeYEoreoKDG7CF2esW
          stance: supports
          locator: CBDB:316194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g-k-muPWgdRSudLzgs85Hm
        subject_person_id: p_9RFe9RzCfLtq53n3raxU8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MN8uyh34bFDgmkz3WpBaN1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-Ote4HPECFFjReLQw4sLB
          claim_id: c_g-k-muPWgdRSudLzgs85Hm
          source_id: s_-5BJEvy8b9x_6Gyvc_pFS0
          stance: supports
          locator: CBDB：兄弟 王三錫（204223）之父／母 王綬
          quotation: null
          interpretation_note: 由兄弟关系推断：王三顧 与 王三錫 为同胞（CBDB 记「兄」），王三錫 之父／母即 王三顧 之父／母。
          source:
            id: s_-5BJEvy8b9x_6Gyvc_pFS0
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 316194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316194&o=json
            external_identifier: CBDB:316194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9RFe9RzCfLtq53n3raxU8d
        status: active
        display_name: 王綬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__ZEGX8GheBnYCc_KhSwkIu
        subject_person_id: p_MN8uyh34bFDgmkz3WpBaN1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KUzIkaq2LRbUOHwqU42KDa
          claim_id: c__ZEGX8GheBnYCc_KhSwkIu
          source_id: s_-5BJEvy8b9x_6Gyvc_pFS0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204223 王三錫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-5BJEvy8b9x_6Gyvc_pFS0
            source_type: api_record
            title: 中国历代人物传记资料库：王三顧（CBDB 316194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316194&o=json
            external_identifier: CBDB:316194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dq3acFriL2Ls2rg2CVb8Es
        status: active
        display_name: 王三錫
        merged_into_person_id: null
---

# 王三顧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三顧 | accepted |
| bio.summary | 王三顧，明人物。嘉靖三十二年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 316194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9RFe9RzCfLtq53n3raxU8d | 王綬 | accepted |
| other | p_dq3acFriL2Ls2rg2CVb8Es | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三顧（CBDB 316194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316194&o=json)
