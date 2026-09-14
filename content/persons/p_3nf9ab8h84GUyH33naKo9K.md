---
schema: wang-person/v1
id: p_3nf9ab8h84GUyH33naKo9K
status: active
merged_into: null
display_name: 王良采
cbdb_id: 294716
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gwNCE6os9hopWh7LMwgC1T
        subject_person_id: p_3nf9ab8h84GUyH33naKo9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良采，明人物。嘉靖十一年進士，籍贯南安。（中国历代人物传记资料库 CBDB 294716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_n8esrdotQ0zg9rafFLx5MB
          claim_id: c_gwNCE6os9hopWh7LMwgC1T
          source_id: s_mgApvH8dmx2iQ4WE18FuqH
          stance: supports
          locator: CBDB:294716
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mgApvH8dmx2iQ4WE18FuqH
            source_type: api_record
            title: 中国历代人物传记资料库：王良采（CBDB 294716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json
            external_identifier: CBDB:294716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kJN7mu54sHAFWvEXU4TfRZ
        subject_person_id: p_3nf9ab8h84GUyH33naKo9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_eWB3Rgn2Niz7VQG7HPu4H4
          claim_id: c_kJN7mu54sHAFWvEXU4TfRZ
          source_id: s_mgApvH8dmx2iQ4WE18FuqH
          stance: supports
          locator: CBDB:294716
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fcymRgaQ8A5Dg2ZnumAcI6
        subject_person_id: p_9nEN1wcMurxxo4Z5YaVJEh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3nf9ab8h84GUyH33naKo9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WrCmYFnlRQhwxvfMNIBPSX
          claim_id: c_fcymRgaQ8A5Dg2ZnumAcI6
          source_id: s_OWh19CuAF--cZS5qVZI2BR
          stance: supports
          locator: CBDB：兄弟 王良柱（202803）之父／母 王海
          quotation: null
          interpretation_note: 由兄弟关系推断：王良采 与 王良柱 为同胞（CBDB 记「兄」），王良柱 之父／母即 王良采 之父／母。
          source:
            id: s_OWh19CuAF--cZS5qVZI2BR
            source_type: api_record
            title: 中国历代人物传记资料库：王良采（CBDB 294716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json
            external_identifier: CBDB:294716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9nEN1wcMurxxo4Z5YaVJEh
        status: active
        display_name: 王海
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c__4XWiB9wOXJzg4avATlSg4
        subject_person_id: p_35PzL233nqJ85Q2BX1Q5dA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3nf9ab8h84GUyH33naKo9K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rX2_xvQEDIFgPzCm85TN7k
          claim_id: c__4XWiB9wOXJzg4avATlSg4
          source_id: s_OWh19CuAF--cZS5qVZI2BR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202803 王良柱）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OWh19CuAF--cZS5qVZI2BR
            source_type: api_record
            title: 中国历代人物传记资料库：王良采（CBDB 294716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json
            external_identifier: CBDB:294716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_35PzL233nqJ85Q2BX1Q5dA
        status: active
        display_name: 王良柱
        merged_into_person_id: null
---

# 王良采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王良采，明人物。嘉靖十一年進士，籍贯南安。（中国历代人物传记资料库 CBDB 294716） | accepted |
| name.primary | 王良采 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9nEN1wcMurxxo4Z5YaVJEh | 王海 | accepted |
| other | p_35PzL233nqJ85Q2BX1Q5dA | 王良柱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王良采（CBDB 294716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294716&o=json)
