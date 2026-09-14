---
schema: wang-person/v1
id: p_BmRjLDb7r4C5D13YYkJXJP
status: active
merged_into: null
display_name: 王朝聘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VDd6pVeR18kvh2mNbAJUg6
        subject_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KjisR8a69FLKiwmwy59hTS
          claim_id: c_VDd6pVeR18kvh2mNbAJUg6
          source_id: s_sFJQTXUFu6v81FQm4JYm8G
          stance: supports
          locator: CBDB:295494
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295494）
          source: &a1
            id: s_sFJQTXUFu6v81FQm4JYm8G
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 295494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json
            external_identifier: CBDB:295494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hr5Qvz6e2VG9yNS1GDaVWb
        subject_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝聘，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295494）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_lXAlS5cnauCN8URFmcAv
          claim_id: c_hr5Qvz6e2VG9yNS1GDaVWb
          source_id: s_sFJQTXUFu6v81FQm4JYm8G
          stance: supports
          locator: CBDB:295494
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__j4WN1RvEMOBKmMxtrM-Zc
        subject_person_id: p_AX7eQXpp32FZKNQ3efJdUf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RXRKIstX2oKankQsAfhCPc
          claim_id: c__j4WN1RvEMOBKmMxtrM-Zc
          source_id: s_dgUNQjBB_NEeQmlV9QR1vg
          stance: supports
          locator: CBDB：兄弟 王朝相（202839）之父／母 王翮
          quotation: null
          interpretation_note: 由兄弟关系推断：王朝聘 与 王朝相 为同胞（CBDB 记「兄」），王朝相 之父／母即 王朝聘 之父／母。
          source:
            id: s_dgUNQjBB_NEeQmlV9QR1vg
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 295494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json
            external_identifier: CBDB:295494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AX7eQXpp32FZKNQ3efJdUf
        status: active
        display_name: 王翮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HZRXEzKfK_mlshaMCfMBUn
        subject_person_id: p_AQPzHURj5Q55p8A3sruTTG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_BmRjLDb7r4C5D13YYkJXJP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKX7l7YAAx1zcx1fRJZml-
          claim_id: c_HZRXEzKfK_mlshaMCfMBUn
          source_id: s_dgUNQjBB_NEeQmlV9QR1vg
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202839 王朝相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dgUNQjBB_NEeQmlV9QR1vg
            source_type: api_record
            title: 中国历代人物传记资料库：王朝聘（CBDB 295494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json
            external_identifier: CBDB:295494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AQPzHURj5Q55p8A3sruTTG
        status: active
        display_name: 王朝相
        merged_into_person_id: null
---

# 王朝聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝聘 | accepted |
| bio.summary | 王朝聘，明人物。嘉靖十四年進士，籍贯永年。（中国历代人物传记资料库 CBDB 295494） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AX7eQXpp32FZKNQ3efJdUf | 王翮 | accepted |
| other | p_AQPzHURj5Q55p8A3sruTTG | 王朝相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝聘（CBDB 295494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295494&o=json)
