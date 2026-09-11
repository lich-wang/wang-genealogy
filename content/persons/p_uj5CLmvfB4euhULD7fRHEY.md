---
schema: wang-person/v1
id: p_uj5CLmvfB4euhULD7fRHEY
status: active
merged_into: null
display_name: 王寅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrFiPx2ZKpFc84PUGc6PRy
        subject_person_id: p_uj5CLmvfB4euhULD7fRHEY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vtvfRBdzJJ3NHPhYRw4tXH
          claim_id: c_PrFiPx2ZKpFc84PUGc6PRy
          source_id: s_kiqn23QJcx2STKA6tty74J
          stance: supports
          locator: CBDB:386578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386578）
          source: &a1
            id: s_kiqn23QJcx2STKA6tty74J
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 386578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386578&o=json
            external_identifier: CBDB:386578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BBzzsMJMt1vgg4NmZkfJDx
        subject_person_id: p_uj5CLmvfB4euhULD7fRHEY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dk2tDNMAazNcQS3N2pYXw
          claim_id: c_BBzzsMJMt1vgg4NmZkfJDx
          source_id: s_kiqn23QJcx2STKA6tty74J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jinGuvdNbLY_zXqFIsgKnN
        subject_person_id: p_spLcNFvqSKmQAtJPr23JgF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FZKEm1VHlVJcOD9ZHYWOQR
          claim_id: c_jinGuvdNbLY_zXqFIsgKnN
          source_id: s_LDR381h4r4qkwzASGbKEcf
          stance: supports
          locator: CBDB 双向互证（子 王寅 ⇄ 父 王鑄）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_LDR381h4r4qkwzASGbKEcf
            source_type: api_record
            title: 中国历代人物传记资料库：王鑄（CBDB 17657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17657&o=json
            external_identifier: CBDB:17657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_spLcNFvqSKmQAtJPr23JgF
        status: active
        display_name: 王鑄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_42oIxqBpg2FgHweFIrGy-5
        subject_person_id: p_77KUt4ppLcUYh3H4mPAVZk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1TszWjwd_qjhu2_ZFoHW4C
          claim_id: c_42oIxqBpg2FgHweFIrGy-5
          source_id: s_5VTGNfEy8REeuKx7zm9KHZ
          stance: supports
          locator: CBDB 双向互证（曾孫; 重孫 王寅 ⇄ 曾祖 王悅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_5VTGNfEy8REeuKx7zm9KHZ
            source_type: api_record
            title: 中国历代人物传记资料库：王悅（CBDB 437522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json
            external_identifier: CBDB:437522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.044Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_77KUt4ppLcUYh3H4mPAVZk
        status: active
        display_name: 王悅
        merged_into_person_id: null
    - claim:
        id: c_ews3al3PCEnQ83qosRagQZ
        subject_person_id: p_TXTXwSryWLUp2Edx6YAYPe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uj5CLmvfB4euhULD7fRHEY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8LYKG9rf1lMJF-fVHf7kh
          claim_id: c_ews3al3PCEnQ83qosRagQZ
          source_id: s_GzuwDJtuZq25gZiJYdCJcE
          stance: supports
          locator: CBDB 双向互证（孫 王寅 ⇄ 祖父 王永年）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_GzuwDJtuZq25gZiJYdCJcE
            source_type: api_record
            title: 中国历代人物传记资料库：王永年（CBDB 17656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json
            external_identifier: CBDB:17656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.664Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_TXTXwSryWLUp2Edx6YAYPe
        status: active
        display_name: 王永年
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_spLcNFvqSKmQAtJPr23JgF | 王鑄 | accepted |
| ancestors | p_77KUt4ppLcUYh3H4mPAVZk | 王悅 | accepted |
| ancestors | p_TXTXwSryWLUp2Edx6YAYPe | 王永年 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 386578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386578&o=json)
- [中国历代人物传记资料库：王永年（CBDB 17656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17656&o=json)
- [中国历代人物传记资料库：王悅（CBDB 437522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437522&o=json)
- [中国历代人物传记资料库：王鑄（CBDB 17657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17657&o=json)
