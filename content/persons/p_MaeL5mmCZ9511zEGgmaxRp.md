---
schema: wang-person/v1
id: p_MaeL5mmCZ9511zEGgmaxRp
status: active
merged_into: null
display_name: 王德榮
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMRa1zMyE72nEk9xZ1m4n7
        subject_person_id: p_MaeL5mmCZ9511zEGgmaxRp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CQ2Zi5j9vcmevj2JJ1jDTk
          claim_id: c_AMRa1zMyE72nEk9xZ1m4n7
          source_id: s_cDfhq2nvNb9k56DiS5o184
          stance: supports
          locator: CBDB:261592
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261592）
          source: &a1
            id: s_cDfhq2nvNb9k56DiS5o184
            source_type: api_record
            title: 中国历代人物传记资料库：王德榮（CBDB 261592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261592&o=json
            external_identifier: CBDB:261592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dh6EMdNZnHro1MrZj1LF2P
        subject_person_id: p_MaeL5mmCZ9511zEGgmaxRp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德榮，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261592）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y-HL6SShcqnyiwpYw30wvh
          claim_id: c_Dh6EMdNZnHro1MrZj1LF2P
          source_id: s_cDfhq2nvNb9k56DiS5o184
          stance: supports
          locator: CBDB:261592
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-us8CK276L7iIq8SscQaHZ
        subject_person_id: p_SeER6gzsJFyEjnyJm77Ynj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MaeL5mmCZ9511zEGgmaxRp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NfQyiVgruStI1Y7LixfpDb
          claim_id: c_-us8CK276L7iIq8SscQaHZ
          source_id: s_nC2nIRxyTAPmxuXZGyZECw
          stance: supports
          locator: CBDB：兄弟 王常（198354）之父／母 王有問
          quotation: null
          interpretation_note: 由兄弟关系推断：王德榮 与 王常 为同胞（CBDB 记「兄」），王常 之父／母即 王德榮 之父／母。
          source:
            id: s_nC2nIRxyTAPmxuXZGyZECw
            source_type: api_record
            title: 中国历代人物传记资料库：王德榮（CBDB 261592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261592&o=json
            external_identifier: CBDB:261592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SeER6gzsJFyEjnyJm77Ynj
        status: active
        display_name: 王有問
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Ur_tXmroO6PphWTetxrCyj
        subject_person_id: p_99gNXAHSy7CHUSg6MDVZmM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MaeL5mmCZ9511zEGgmaxRp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VC5f62xOJ_xY9mAXwg47KM
          claim_id: c_Ur_tXmroO6PphWTetxrCyj
          source_id: s_nC2nIRxyTAPmxuXZGyZECw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198354 王常）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nC2nIRxyTAPmxuXZGyZECw
            source_type: api_record
            title: 中国历代人物传记资料库：王德榮（CBDB 261592）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261592&o=json
            external_identifier: CBDB:261592
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_99gNXAHSy7CHUSg6MDVZmM
        status: active
        display_name: 王常
        merged_into_person_id: null
---

# 王德榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德榮 | accepted |
| bio.summary | 王德榮，明人物。景泰五年進士，籍贯平夷長官司。（中国历代人物传记资料库 CBDB 261592） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeER6gzsJFyEjnyJm77Ynj | 王有問 | accepted |
| other | p_99gNXAHSy7CHUSg6MDVZmM | 王常 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德榮（CBDB 261592）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261592&o=json)
