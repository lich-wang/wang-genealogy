---
schema: wang-person/v1
id: p_H1xyKpfKKwUtC1UcZNSPpZ
status: active
merged_into: null
display_name: 王文薦
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pUEwVuecBy4mgBAA4x3XGY
        subject_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文薦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t125CCJbSQ75iKVN5bT4zj
          claim_id: c_pUEwVuecBy4mgBAA4x3XGY
          source_id: s_S9hr13AcV6gMRPDSE9q1Fi
          stance: supports
          locator: CBDB:210432
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210432）
          source: &a1
            id: s_S9hr13AcV6gMRPDSE9q1Fi
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 210432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json
            external_identifier: CBDB:210432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PPDARdioPUezab9vg3zN3i
        subject_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文薦，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210432）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_92ZRufNob5iF5W_QLEnwB0
          claim_id: c_PPDARdioPUezab9vg3zN3i
          source_id: s_S9hr13AcV6gMRPDSE9q1Fi
          stance: supports
          locator: CBDB:210432
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DzqI7lWVFlMa7mrAkq6GsI
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cE05HvBQeOTm5tCxtAbwdK
          claim_id: c_DzqI7lWVFlMa7mrAkq6GsI
          source_id: s_tLKvVMJr45JwzWM4cP01ow
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文薦 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文薦 之父／母。
          source:
            id: s_tLKvVMJr45JwzWM4cP01ow
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 210432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json
            external_identifier: CBDB:210432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cJPjdNwsR6729BhxkY9bu9
        status: active
        display_name: 王撫民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iczTsbn8s7mw3FRh-QFRZU
        subject_person_id: p_H1xyKpfKKwUtC1UcZNSPpZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k3fw4jn7UF1hujd81L3vBe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MlxXRsL3gfnzrWflIu1kva
          claim_id: c_iczTsbn8s7mw3FRh-QFRZU
          source_id: s_tLKvVMJr45JwzWM4cP01ow
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tLKvVMJr45JwzWM4cP01ow
            source_type: api_record
            title: 中国历代人物传记资料库：王文薦（CBDB 210432）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json
            external_identifier: CBDB:210432
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
---

# 王文薦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文薦 | accepted |
| bio.summary | 王文薦，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210432） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |
| other | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文薦（CBDB 210432）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210432&o=json)
