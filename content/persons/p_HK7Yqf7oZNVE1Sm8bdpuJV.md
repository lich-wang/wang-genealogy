---
schema: wang-person/v1
id: p_HK7Yqf7oZNVE1Sm8bdpuJV
status: active
merged_into: null
display_name: 王文藝
cbdb_id: 210434
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dv2uMG7C2xF2FtfKLUAW4Z
        subject_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文藝，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210434）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TUa53yafMYpTpTlW1QYOpq
          claim_id: c_Dv2uMG7C2xF2FtfKLUAW4Z
          source_id: s_hK3LbXYAXsB69iYNfwRzCx
          stance: supports
          locator: CBDB:210434
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hK3LbXYAXsB69iYNfwRzCx
            source_type: api_record
            title: 中国历代人物传记资料库：王文藝（CBDB 210434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json
            external_identifier: CBDB:210434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_EqPWiuJQKeVghsSYpZnTh5
        subject_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文藝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Q89K6j9VttZFW7gzcmxm1U
          claim_id: c_EqPWiuJQKeVghsSYpZnTh5
          source_id: s_hK3LbXYAXsB69iYNfwRzCx
          stance: supports
          locator: CBDB:210434
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8fJl0bKW_GGcyEfdzH5mr6
        subject_person_id: p_cJPjdNwsR6729BhxkY9bu9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yuiodw_2E2ZxJyZfcgIRUF
          claim_id: c_8fJl0bKW_GGcyEfdzH5mr6
          source_id: s_2EySgIHreaqR0TYHNPNSt3
          stance: supports
          locator: CBDB：兄弟 王蔚（205903）之父／母 王撫民
          quotation: null
          interpretation_note: 由兄弟关系推断：王文藝 与 王蔚 为同胞（CBDB 记「兄」），王蔚 之父／母即 王文藝 之父／母。
          source:
            id: s_2EySgIHreaqR0TYHNPNSt3
            source_type: api_record
            title: 中国历代人物传记资料库：王文藝（CBDB 210434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json
            external_identifier: CBDB:210434
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
        id: c_qaklc_Er8gbIOzwXhC3cl1
        subject_person_id: p_HK7Yqf7oZNVE1Sm8bdpuJV
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
        - id: cs_TUcAByfF5PRDFU3JLepzCW
          claim_id: c_qaklc_Er8gbIOzwXhC3cl1
          source_id: s_2EySgIHreaqR0TYHNPNSt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205903 王蔚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2EySgIHreaqR0TYHNPNSt3
            source_type: api_record
            title: 中国历代人物传记资料库：王文藝（CBDB 210434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json
            external_identifier: CBDB:210434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_k3fw4jn7UF1hujd81L3vBe
        status: active
        display_name: 王蔚
        merged_into_person_id: null
---

# 王文藝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文藝，明人物。隆慶五年進士，籍贯清源。（中国历代人物传记资料库 CBDB 210434） | accepted |
| name.primary | 王文藝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cJPjdNwsR6729BhxkY9bu9 | 王撫民 | accepted |
| other | p_k3fw4jn7UF1hujd81L3vBe | 王蔚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文藝（CBDB 210434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210434&o=json)
