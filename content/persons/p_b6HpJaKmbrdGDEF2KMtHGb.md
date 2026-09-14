---
schema: wang-person/v1
id: p_b6HpJaKmbrdGDEF2KMtHGb
status: active
merged_into: null
display_name: 王曰可
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xAvdpA8k3DSjCMSwUWLMfg
        subject_person_id: p_b6HpJaKmbrdGDEF2KMtHGb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wkfwCZ8wZt6Ns5e4UoBGud
          claim_id: c_xAvdpA8k3DSjCMSwUWLMfg
          source_id: s_D4AMDr13Amyq32yNhMGVh5
          stance: supports
          locator: CBDB:304959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304959）
          source: &a1
            id: s_D4AMDr13Amyq32yNhMGVh5
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 304959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304959&o=json
            external_identifier: CBDB:304959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_txtnGoSsKPay9MZut1qLQH
        subject_person_id: p_b6HpJaKmbrdGDEF2KMtHGb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王曰可，明人物。嘉靖二十年進士，籍贯河南衛。（中国历代人物传记资料库 CBDB 304959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TSfEp0njdA8t20jbKKtMuI
          claim_id: c_txtnGoSsKPay9MZut1qLQH
          source_id: s_D4AMDr13Amyq32yNhMGVh5
          stance: supports
          locator: CBDB:304959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dy8vZVPJWl982tb6A2Dymc
        subject_person_id: p_vV52ECfgKpenuD9v8Dh9jq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b6HpJaKmbrdGDEF2KMtHGb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JLBrItSuhziAKVfH1XEMzm
          claim_id: c_dy8vZVPJWl982tb6A2Dymc
          source_id: s_D2V_sjlc8UgETOPWp2xPvG
          stance: supports
          locator: CBDB：兄弟 王曰然（203455）之父／母 王施恩
          quotation: null
          interpretation_note: 由兄弟关系推断：王曰可 与 王曰然 为同胞（CBDB 记「兄」），王曰然 之父／母即 王曰可 之父／母。
          source:
            id: s_D2V_sjlc8UgETOPWp2xPvG
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 304959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304959&o=json
            external_identifier: CBDB:304959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vV52ECfgKpenuD9v8Dh9jq
        status: active
        display_name: 王施恩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JdY2s9MMWVdH47WX0ojpeG
        subject_person_id: p_GMiqJBh7YQ1MMn468wZyQK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b6HpJaKmbrdGDEF2KMtHGb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXex0_uJ0fgvbxVbqgVg0S
          claim_id: c_JdY2s9MMWVdH47WX0ojpeG
          source_id: s_D2V_sjlc8UgETOPWp2xPvG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203455 王曰然）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_D2V_sjlc8UgETOPWp2xPvG
            source_type: api_record
            title: 中国历代人物传记资料库：王曰可（CBDB 304959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304959&o=json
            external_identifier: CBDB:304959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GMiqJBh7YQ1MMn468wZyQK
        status: active
        display_name: 王曰然
        merged_into_person_id: null
---

# 王曰可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王曰可 | accepted |
| bio.summary | 王曰可，明人物。嘉靖二十年進士，籍贯河南衛。（中国历代人物传记资料库 CBDB 304959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vV52ECfgKpenuD9v8Dh9jq | 王施恩 | accepted |
| other | p_GMiqJBh7YQ1MMn468wZyQK | 王曰然 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曰可（CBDB 304959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304959&o=json)
