---
schema: wang-person/v1
id: p_TGnpXHeKWR8xDVyC1G6MTX
status: active
merged_into: null
display_name: 王侃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BF74HDG2EHW1m1rYc5aHZP
        subject_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Spqp57v2HzHB1V8cz32EHF
          claim_id: c_BF74HDG2EHW1m1rYc5aHZP
          source_id: s_DH29oZA6bZBnLtHLAGoyZD
          stance: supports
          locator: CBDB:245008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（245008）
          source: &a1
            id: s_DH29oZA6bZBnLtHLAGoyZD
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json
            external_identifier: CBDB:245008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_roJBqx6W1nCpqJYdAKfLQC
        subject_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 245008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PNNXyqVkWuqYYNdhRD3ny1
          claim_id: c_roJBqx6W1nCpqJYdAKfLQC
          source_id: s_DH29oZA6bZBnLtHLAGoyZD
          stance: supports
          locator: CBDB:245008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ifaiv4lK8s3gWBCzA3sqXQ
        subject_person_id: p_HCpgr1W9LMF6eGEBW7wXTQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sE431nitWDZknRmucImq__
          claim_id: c_Ifaiv4lK8s3gWBCzA3sqXQ
          source_id: s_kxSQCIkvrM0rsGed9ILV9H
          stance: supports
          locator: CBDB：兄弟 王儀（198242）之父／母 王以誠
          quotation: null
          interpretation_note: 由兄弟关系推断：王侃 与 王儀 为同胞（CBDB 记「兄」），王儀 之父／母即 王侃 之父／母。
          source:
            id: s_kxSQCIkvrM0rsGed9ILV9H
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json
            external_identifier: CBDB:245008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HCpgr1W9LMF6eGEBW7wXTQ
        status: active
        display_name: 王以誠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_O3iXCGnOEiXsExDbcRQzAo
        subject_person_id: p_CJ4VyLGZZgJRk8JF6RcE65
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TGnpXHeKWR8xDVyC1G6MTX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dw3nY-qogKp0lzyIM8cxb6
          claim_id: c_O3iXCGnOEiXsExDbcRQzAo
          source_id: s_kxSQCIkvrM0rsGed9ILV9H
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198242 王儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kxSQCIkvrM0rsGed9ILV9H
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 245008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json
            external_identifier: CBDB:245008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CJ4VyLGZZgJRk8JF6RcE65
        status: active
        display_name: 王儀
        merged_into_person_id: null
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，明人物。景泰二年進士，籍贯常熟。（中国历代人物传记资料库 CBDB 245008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HCpgr1W9LMF6eGEBW7wXTQ | 王以誠 | accepted |
| other | p_CJ4VyLGZZgJRk8JF6RcE65 | 王儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 245008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=245008&o=json)
