---
schema: wang-person/v1
id: p_9eCcDpeVkEgC9tqMMZEZWG
status: active
merged_into: null
display_name: 王忠
cbdb_id: 35273
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_94FYbAxKQ6aBtdV6vVj4vc
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BLM2vCw9G9DkXYUo4eCqq
          claim_id: c_94FYbAxKQ6aBtdV6vVj4vc
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: Q45426092
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_DoBjWv3uiE5kRTQKLU6pMe
            source_type: api_record
            title: 维基数据：王忠（Q45426092）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426092
            external_identifier: Q45426092
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_JNNrEQNVyXYULdzzQhyML6
          claim_id: c_94FYbAxKQ6aBtdV6vVj4vc
          source_id: s_rLvRBHHt6cqbCWBnxQXHBu
          stance: supports
          locator: CBDB:35273
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_rLvRBHHt6cqbCWBnxQXHBu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王忠政（35273）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35273&o=json
            external_identifier: CBDB:35273
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JLHYA6XDyJHB2kBjB1uW6t
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王忠，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 35273）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TM5HZTpAxgemTnk7Hk7cL4
          claim_id: c_JLHYA6XDyJHB2kBjB1uW6t
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_lPu56eqxtwrd9p00GoC_4v
          claim_id: c_JLHYA6XDyJHB2kBjB1uW6t
          source_id: s_rLvRBHHt6cqbCWBnxQXHBu
          stance: supports
          locator: CBDB:35273
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SsP1w8WP_TAqRB5UTMmyj6
        subject_person_id: p_EZ3srBdiXSE6J75Wn5u1sb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U04L91DRnuf32oi5Vhv6cq
          claim_id: c_SsP1w8WP_TAqRB5UTMmyj6
          source_id: s_MThndogaedxdmxCGFsxadv
          stance: supports
          locator: CBDB 双向互证（子 王忠政 ⇄ 父 王廷）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_MThndogaedxdmxCGFsxadv
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 35274）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35274&o=json
            external_identifier: CBDB:35274
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EZ3srBdiXSE6J75Wn5u1sb
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children:
    - claim:
        id: c_J7pQ7fuFxJxLTd81GAHNKQ
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yv85iMSEixKWR4Bwa93MTf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_if7mfVMgC7MfduyYuPWXdX
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_yJrmajipRuAV1QZPatauhk
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_yJrmajipRuAV1QZPatauhk
            source_type: api_record
            title: 维基数据：王朝用（Q45426051）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426051
            external_identifier: Q45426051
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_He7adhF56nziofDuPL9FLp
          claim_id: c_J7pQ7fuFxJxLTd81GAHNKQ
          source_id: s_DoBjWv3uiE5kRTQKLU6pMe
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_yv85iMSEixKWR4Bwa93MTf
        status: active
        display_name: 王朝用
        merged_into_person_id: null
    - claim:
        id: c_rIjkh5XWrC_s9s3nU62yfl
        subject_person_id: p_9eCcDpeVkEgC9tqMMZEZWG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fBDFmpqAfPU4EztdEtani6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lft3h92wYRdeSkUnRwMtYB
          claim_id: c_rIjkh5XWrC_s9s3nU62yfl
          source_id: s_72EJznLo4C5LLDFqb9gr5c
          stance: supports
          locator: CBDB 双向互证（父 王忠政 ⇄ 子 王朝達）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_72EJznLo4C5LLDFqb9gr5c
            source_type: api_record
            title: 中国历代人物传记资料库：王朝達（CBDB 563195）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563195&o=json
            external_identifier: CBDB:563195
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.566Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fBDFmpqAfPU4EztdEtani6
        status: active
        display_name: 王朝達
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王忠 | accepted |
| bio.summary | 王忠，宋人物。籍贯安福。（中国历代人物传记资料库 CBDB 35273） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EZ3srBdiXSE6J75Wn5u1sb | 王廷 | accepted |
| children | p_yv85iMSEixKWR4Bwa93MTf | 王朝用 | accepted |
| children | p_fBDFmpqAfPU4EztdEtani6 | 王朝達 | accepted |

## 外部来源

- [维基数据：王朝用（Q45426051）](https://www.wikidata.org/wiki/Q45426051)
- [维基数据：王忠（Q45426092）](https://www.wikidata.org/wiki/Q45426092)
- [中国历代人物传记资料库：王朝達（CBDB 563195）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563195&o=json)
- [中国历代人物传记资料库：王廷（CBDB 35274）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35274&o=json)
- [CBDB 中国历代人物传记资料库：王忠政（35273）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35273&o=json)
