---
schema: wang-person/v1
id: p_UHWBWX4Z5omFgARChps5w5
status: active
merged_into: null
display_name: 王隨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AvQt4f8BnsCCfMsWGWYCVd
        subject_person_id: p_UHWBWX4Z5omFgARChps5w5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X8c5wrdUFSD6Z5oZyeqaxa
          claim_id: c_AvQt4f8BnsCCfMsWGWYCVd
          source_id: s_2YRKjNezpRc87x9ZUH17KA
          stance: supports
          locator: CBDB:215746
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215746）
          source: &a1
            id: s_2YRKjNezpRc87x9ZUH17KA
            source_type: api_record
            title: 中国历代人物传记资料库：王隨（CBDB 215746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json
            external_identifier: CBDB:215746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n4RcPopkAjmUZXWigYRGhq
        subject_person_id: p_UHWBWX4Z5omFgARChps5w5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王隨，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215746）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bm9LYxX9Dcs6gJg2AlkVk_
          claim_id: c_n4RcPopkAjmUZXWigYRGhq
          source_id: s_2YRKjNezpRc87x9ZUH17KA
          stance: supports
          locator: CBDB:215746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ADC7K3yn1xhFn4sa6jiMjj
        subject_person_id: p_X44YhNxEhhrLSWmgtLLBJw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UHWBWX4Z5omFgARChps5w5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ItVnyqUIF4v9ho5o4k3mKe
          claim_id: c_ADC7K3yn1xhFn4sa6jiMjj
          source_id: s_IybXQgWjrp65nb-SpuFM58
          stance: supports
          locator: CBDB：兄弟 王豫（206279）之父／母 王來聘
          quotation: null
          interpretation_note: 由兄弟关系推断：王隨 与 王豫 为同胞（CBDB 记「兄」），王豫 之父／母即 王隨 之父／母。
          source:
            id: s_IybXQgWjrp65nb-SpuFM58
            source_type: api_record
            title: 中国历代人物传记资料库：王隨（CBDB 215746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json
            external_identifier: CBDB:215746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_X44YhNxEhhrLSWmgtLLBJw
        status: active
        display_name: 王來聘
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_scjpdUPdws-Xlu-H_E5NJG
        subject_person_id: p_UHWBWX4Z5omFgARChps5w5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dJSjDNjDHVG2RbXzuMWW8y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dpf1xcMZkvkM-5o7alRIsJ
          claim_id: c_scjpdUPdws-Xlu-H_E5NJG
          source_id: s_IybXQgWjrp65nb-SpuFM58
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206279 王豫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IybXQgWjrp65nb-SpuFM58
            source_type: api_record
            title: 中国历代人物传记资料库：王隨（CBDB 215746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json
            external_identifier: CBDB:215746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dJSjDNjDHVG2RbXzuMWW8y
        status: active
        display_name: 王豫
        merged_into_person_id: null
---

# 王隨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王隨 | accepted |
| bio.summary | 王隨，明人物。萬曆五年進士，籍贯烏程。（中国历代人物传记资料库 CBDB 215746） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_X44YhNxEhhrLSWmgtLLBJw | 王來聘 | accepted |
| other | p_dJSjDNjDHVG2RbXzuMWW8y | 王豫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王隨（CBDB 215746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215746&o=json)
