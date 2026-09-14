---
schema: wang-person/v1
id: p_ifLLBKzA4dDTF7QaxtVFF9
status: active
merged_into: null
display_name: 王子英
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5WtWXkJCCQzhBV21JEKSsF
        subject_person_id: p_ifLLBKzA4dDTF7QaxtVFF9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Gjmg8pCd45NR8CJeKjrpf7
          claim_id: c_5WtWXkJCCQzhBV21JEKSsF
          source_id: s_QyCSGte4VJMLfxdrh6bJnG
          stance: supports
          locator: CBDB:265621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265621）
          source: &a1
            id: s_QyCSGte4VJMLfxdrh6bJnG
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 265621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json
            external_identifier: CBDB:265621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SjjxiyEGTh1ajpFLHNmLtT
        subject_person_id: p_ifLLBKzA4dDTF7QaxtVFF9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子英，明人物。弘治六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 265621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CfuPAauXMsKfcZyb1OAqVk
          claim_id: c_SjjxiyEGTh1ajpFLHNmLtT
          source_id: s_QyCSGte4VJMLfxdrh6bJnG
          stance: supports
          locator: CBDB:265621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FCx2QzuzrxiduttwdO1dAk
        subject_person_id: p_NoQErvZxoB9KT1iHrT84WN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ifLLBKzA4dDTF7QaxtVFF9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APD9xOg7YvKpH22G18vXlB
          claim_id: c_FCx2QzuzrxiduttwdO1dAk
          source_id: s_eO7-5HXyQHGaOvOcJtzefi
          stance: supports
          locator: CBDB：兄弟 王子成（200985）之父／母 王紹
          quotation: null
          interpretation_note: 由兄弟关系推断：王子英 与 王子成 为同胞（CBDB 记「兄」），王子成 之父／母即 王子英 之父／母。
          source:
            id: s_eO7-5HXyQHGaOvOcJtzefi
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 265621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json
            external_identifier: CBDB:265621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NoQErvZxoB9KT1iHrT84WN
        status: active
        display_name: 王紹
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0-AABRs26W_WZiBFteqRkD
        subject_person_id: p_akpqJMSSGZNHLkzngCE1Qi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ifLLBKzA4dDTF7QaxtVFF9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0s3H93myUKORZD7Y-6XPlN
          claim_id: c_0-AABRs26W_WZiBFteqRkD
          source_id: s_eO7-5HXyQHGaOvOcJtzefi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200985 王子成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eO7-5HXyQHGaOvOcJtzefi
            source_type: api_record
            title: 中国历代人物传记资料库：王子英（CBDB 265621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json
            external_identifier: CBDB:265621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_akpqJMSSGZNHLkzngCE1Qi
        status: active
        display_name: 王子成
        merged_into_person_id: null
---

# 王子英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子英 | accepted |
| bio.summary | 王子英，明人物。弘治六年進士，籍贯咸寧。（中国历代人物传记资料库 CBDB 265621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NoQErvZxoB9KT1iHrT84WN | 王紹 | accepted |
| other | p_akpqJMSSGZNHLkzngCE1Qi | 王子成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子英（CBDB 265621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265621&o=json)
