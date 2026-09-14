---
schema: wang-person/v1
id: p_7mN7AeFFAa3arb9bQ1QBHw
status: active
merged_into: null
display_name: 王同仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_97dgZZKKUX9cGbo2MQevy6
        subject_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gcEG7Fj3LUbLoUG48B4XCF
          claim_id: c_97dgZZKKUX9cGbo2MQevy6
          source_id: s_gqXD9Ue8x3PFGx1FKhRJp8
          stance: supports
          locator: CBDB:237757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237757）
          source: &a1
            id: s_gqXD9Ue8x3PFGx1FKhRJp8
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WKfmHV8GDqKneuLTG5PbPf
        subject_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同仁，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237757）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NEJ90ioDH4w4TNN687RxjT
          claim_id: c_WKfmHV8GDqKneuLTG5PbPf
          source_id: s_gqXD9Ue8x3PFGx1FKhRJp8
          stance: supports
          locator: CBDB:237757
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5xWpG-aHSgY9ELP-VQI1uz
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJZaRSyPJxEDzmCXgzht7m
          claim_id: c_5xWpG-aHSgY9ELP-VQI1uz
          source_id: s_s2UFYgkRrlksRks0APk4Lq
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同仁 与 王槩 为同胞（CBDB 记「兄」），王槩 之父／母即 王同仁 之父／母。
          source:
            id: s_s2UFYgkRrlksRks0APk4Lq
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_H7kYUAXL18KkgnTsd1b4rh
        status: active
        display_name: 王仲起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GOXq0uwEH4n5GOm92uUcxT
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yShDGLbKnrGb_IhDH36qvx
          claim_id: c_GOXq0uwEH4n5GOm92uUcxT
          source_id: s_s2UFYgkRrlksRks0APk4Lq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_s2UFYgkRrlksRks0APk4Lq
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
---

# 王同仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同仁 | accepted |
| bio.summary | 王同仁，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237757） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7kYUAXL18KkgnTsd1b4rh | 王仲起 | accepted |
| other | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同仁（CBDB 237757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json)
