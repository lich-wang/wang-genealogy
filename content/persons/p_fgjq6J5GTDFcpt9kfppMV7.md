---
schema: wang-person/v1
id: p_fgjq6J5GTDFcpt9kfppMV7
status: active
merged_into: null
display_name: 王國俊
cbdb_id: 214958
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JYeXDW1DsF5nKiBy9KHKun
        subject_person_id: p_fgjq6J5GTDFcpt9kfppMV7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國俊，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214958）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_W1MQxc9FEChtN5GB03zYxR
          claim_id: c_JYeXDW1DsF5nKiBy9KHKun
          source_id: s_1zrankryq267d19ppyd8fz
          stance: supports
          locator: CBDB:214958
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1zrankryq267d19ppyd8fz
            source_type: api_record
            title: 中国历代人物传记资料库：王國俊（CBDB 214958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json
            external_identifier: CBDB:214958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHjExT6aV21X3unxRj6N1D
        subject_person_id: p_fgjq6J5GTDFcpt9kfppMV7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y4C6fqHfSpo2PKzkGHGZxK
          claim_id: c_GHjExT6aV21X3unxRj6N1D
          source_id: s_1zrankryq267d19ppyd8fz
          stance: supports
          locator: CBDB:214958
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DtzaB_y0YC3qup033bYUyz
        subject_person_id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fgjq6J5GTDFcpt9kfppMV7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4ESAUQT15ds1NsEhF3oQt
          claim_id: c_DtzaB_y0YC3qup033bYUyz
          source_id: s_Os-hMlrvIRQ1vC_cc6gGYC
          stance: supports
          locator: CBDB：兄弟 王國祚（206219）之父／母 王勉學
          quotation: null
          interpretation_note: 由兄弟关系推断：王國俊 与 王國祚 为同胞（CBDB 记「兄」），王國祚 之父／母即 王國俊 之父／母。
          source:
            id: s_Os-hMlrvIRQ1vC_cc6gGYC
            source_type: api_record
            title: 中国历代人物传记资料库：王國俊（CBDB 214958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json
            external_identifier: CBDB:214958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jJ8CBW1eQx8HAeDCP6Kxoi
        status: active
        display_name: 王勉學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EPlB5GG6z8OlXEDGGBDPd7
        subject_person_id: p_fgjq6J5GTDFcpt9kfppMV7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hCaEhKRsvc7eH6eDHWHssK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yA839O-O_7cOuR5isifIwB
          claim_id: c_EPlB5GG6z8OlXEDGGBDPd7
          source_id: s_Os-hMlrvIRQ1vC_cc6gGYC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206219 王國祚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Os-hMlrvIRQ1vC_cc6gGYC
            source_type: api_record
            title: 中国历代人物传记资料库：王國俊（CBDB 214958）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json
            external_identifier: CBDB:214958
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hCaEhKRsvc7eH6eDHWHssK
        status: active
        display_name: 王國祚
        merged_into_person_id: null
---

# 王國俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王國俊，明人物。萬曆二年進士，籍贯滄州。（中国历代人物传记资料库 CBDB 214958） | accepted |
| name.primary | 王國俊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jJ8CBW1eQx8HAeDCP6Kxoi | 王勉學 | accepted |
| other | p_hCaEhKRsvc7eH6eDHWHssK | 王國祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國俊（CBDB 214958）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214958&o=json)
