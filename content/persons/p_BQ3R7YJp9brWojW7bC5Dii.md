---
schema: wang-person/v1
id: p_BQ3R7YJp9brWojW7bC5Dii
status: active
merged_into: null
display_name: 王其窿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rbcBGmh1H866Lg9QtvS3s4
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其窿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NekVMT5CMcvAduKaLeWmH
          claim_id: c_rbcBGmh1H866Lg9QtvS3s4
          source_id: s_Aa7keEJuow15ngyt7sD5ZG
          stance: supports
          locator: CBDB:556811
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556811）
          source: &a1
            id: s_Aa7keEJuow15ngyt7sD5ZG
            source_type: api_record
            title: 中国历代人物传记资料库：王其窿（CBDB 556811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json
            external_identifier: CBDB:556811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.533Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EK5QiGW6W58GkB5V5KohAn
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王其窿，史料所见人物。本项目依据《中国历代人物传记资料库：王其窿（CBDB 556811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IAIbgK6MgaVtr49SKz-gJY
          claim_id: c_EK5QiGW6W58GkB5V5KohAn
          source_id: s_Aa7keEJuow15ngyt7sD5ZG
          stance: supports
          locator: CBDB:556811
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9wj48CkqlhGyDuiMVGriIH
        subject_person_id: p_sKBWFhRDMwVtBQhCnhiP5H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dUB17JLeaTxLWlx8MIHTuR
          claim_id: c_9wj48CkqlhGyDuiMVGriIH
          source_id: s_I2SJj3FmEaHTdZTps0-z7J
          stance: supports
          locator: CBDB：兄弟 王其宖（556806）之父／母 王績燦
          quotation: null
          interpretation_note: 由兄弟关系推断：王其窿 与 王其宖 为同胞（CBDB 记「兄」），王其宖 之父／母即 王其窿 之父／母。
          source:
            id: s_I2SJj3FmEaHTdZTps0-z7J
            source_type: api_record
            title: 中国历代人物传记资料库：王其窿（CBDB 556811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json
            external_identifier: CBDB:556811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sKBWFhRDMwVtBQhCnhiP5H
        status: active
        display_name: 王績燦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_yNxsBzkpL7xUKC62qcmf7J
        subject_person_id: p_BQ3R7YJp9brWojW7bC5Dii
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kWSA4pVK578quoZM6ya5Ji
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yGjcH-wvLKYycCSkRZUr-G
          claim_id: c_yNxsBzkpL7xUKC62qcmf7J
          source_id: s_I2SJj3FmEaHTdZTps0-z7J
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 556806 王其宖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I2SJj3FmEaHTdZTps0-z7J
            source_type: api_record
            title: 中国历代人物传记资料库：王其窿（CBDB 556811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json
            external_identifier: CBDB:556811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kWSA4pVK578quoZM6ya5Ji
        status: active
        display_name: 王其宖
        merged_into_person_id: null
---

# 王其窿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王其窿 | accepted |
| bio.summary | 王其窿，史料所见人物。本项目依据《中国历代人物传记资料库：王其窿（CBDB 556811）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sKBWFhRDMwVtBQhCnhiP5H | 王績燦 | accepted |
| other | p_kWSA4pVK578quoZM6ya5Ji | 王其宖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王其窿（CBDB 556811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556811&o=json)
