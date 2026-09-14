---
schema: wang-person/v1
id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
status: active
merged_into: null
display_name: 王同求
cbdb_id: 237754
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2De2VvfXSftrNo7V7mYDJC
        subject_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同求，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_oAAtrY8-8VNDiWMmBGlfXD
          claim_id: c_2De2VvfXSftrNo7V7mYDJC
          source_id: s_Fkr8NUABgENtFKKBKYEb6y
          stance: supports
          locator: CBDB:237754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fkr8NUABgENtFKKBKYEb6y
            source_type: api_record
            title: 中国历代人物传记资料库：王同求（CBDB 237754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json
            external_identifier: CBDB:237754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_57bQfmVKsbHwx472k4h1wD
        subject_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同求
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_66BYA81qGd4heJob3MCUUP
          claim_id: c_57bQfmVKsbHwx472k4h1wD
          source_id: s_Fkr8NUABgENtFKKBKYEb6y
          stance: supports
          locator: CBDB:237754
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_acxembDOn4YVUolHZaeqI_
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgB2H5vCowZaD12axzIXIT
          claim_id: c_acxembDOn4YVUolHZaeqI_
          source_id: s_gUTYmzO2jgWqThLhEtffgD
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同求 与 王槩 为同胞（CBDB 记「弟」），王槩 之父／母即 王同求 之父／母。
          source:
            id: s_gUTYmzO2jgWqThLhEtffgD
            source_type: api_record
            title: 中国历代人物传记资料库：王同求（CBDB 237754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json
            external_identifier: CBDB:237754
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
        id: c_VlVPREdkQW6TbrlgUBhwo5
        subject_person_id: p_2N77V679N67chKYe7DivHB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQMHr31FYDmDxffryye-Dn
          claim_id: c_VlVPREdkQW6TbrlgUBhwo5
          source_id: s_gUTYmzO2jgWqThLhEtffgD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126810 王槩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gUTYmzO2jgWqThLhEtffgD
            source_type: api_record
            title: 中国历代人物传记资料库：王同求（CBDB 237754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json
            external_identifier: CBDB:237754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
---

# 王同求

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同求，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237754） | accepted |
| name.primary | 王同求 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_H7kYUAXL18KkgnTsd1b4rh | 王仲起 | accepted |
| other | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同求（CBDB 237754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json)
