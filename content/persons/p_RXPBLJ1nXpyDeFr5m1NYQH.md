---
schema: wang-person/v1
id: p_RXPBLJ1nXpyDeFr5m1NYQH
status: active
merged_into: null
display_name: 王君顯
cbdb_id: 26172
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H7mJM4r65XLEMmkmHrDbVk
        subject_person_id: p_RXPBLJ1nXpyDeFr5m1NYQH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君顯，明人物。籍贯長洲。（中国历代人物传记资料库 CBDB 26172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hnuA-5iA15U6tykaBuV8vK
          claim_id: c_H7mJM4r65XLEMmkmHrDbVk
          source_id: s_6AmhdAcymXCwSthH42WmaM
          stance: supports
          locator: CBDB:26172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6AmhdAcymXCwSthH42WmaM
            source_type: api_record
            title: 中国历代人物传记资料库：王君顯（CBDB 26172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26172&o=json
            external_identifier: CBDB:26172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d53E5ay4h8V9zKq4RBgAWt
        subject_person_id: p_RXPBLJ1nXpyDeFr5m1NYQH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王君顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_k3csUECtfkKVGTCnZuXitN
          claim_id: c_d53E5ay4h8V9zKq4RBgAWt
          source_id: s_6AmhdAcymXCwSthH42WmaM
          stance: supports
          locator: CBDB:26172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DgnqwmOp3jleSDDES3Iw6t
        subject_person_id: p_RXPBLJ1nXpyDeFr5m1NYQH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ggJDft9r982tVSqV1i5GfJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fvdGbZJxI7k9tVjoN4oOOg
          claim_id: c_DgnqwmOp3jleSDDES3Iw6t
          source_id: s_YfdhrCBaz7C52LFc2MA5KE
          stance: supports
          locator: CBDB 双向互证（父 王君顯 ⇄ 子 王彥常）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_YfdhrCBaz7C52LFc2MA5KE
            source_type: api_record
            title: 中国历代人物传记资料库：王彥常（CBDB 26173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26173&o=json
            external_identifier: CBDB:26173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.928Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ggJDft9r982tVSqV1i5GfJ
        status: active
        display_name: 王彥常
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王君顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王君顯，明人物。籍贯長洲。（中国历代人物传记资料库 CBDB 26172） | accepted |
| name.primary | 王君顯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ggJDft9r982tVSqV1i5GfJ | 王彥常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王君顯（CBDB 26172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26172&o=json)
- [中国历代人物传记资料库：王彥常（CBDB 26173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26173&o=json)
