---
schema: wang-person/v1
id: p_6zT1sia2P7t8yDmtCBoxUW
status: active
merged_into: null
display_name: 王彥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FdD6fRKyJiyZeBZVqz8u6W
        subject_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tdhbYeBsnUerD4PBkN33jU
          claim_id: c_FdD6fRKyJiyZeBZVqz8u6W
          source_id: s_3TtrFzzNQVMPDLS6kZ54vR
          stance: supports
          locator: CBDB:304538
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304538）
          source: &a1
            id: s_3TtrFzzNQVMPDLS6kZ54vR
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 304538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json
            external_identifier: CBDB:304538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.725Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JpHG9GbbLhxnBWR2KGJTS6
        subject_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O2qItK76-xA0CVcPixzum3
          claim_id: c_JpHG9GbbLhxnBWR2KGJTS6
          source_id: s_3TtrFzzNQVMPDLS6kZ54vR
          stance: supports
          locator: CBDB:304538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_x84E4rnITFR0QRcG1vIEfC
        subject_person_id: p_zsVFNTYzGiADoYvqX8wVfc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F51MRLBrxArvGNVubKEQML
          claim_id: c_x84E4rnITFR0QRcG1vIEfC
          source_id: s_B6JFJ-nuQuste-niwlwZdF
          stance: supports
          locator: CBDB：兄弟 王交（126505）之父／母 王嵱
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥 与 王交 为同胞（CBDB 记「兄」），王交 之父／母即 王彥 之父／母。
          source:
            id: s_B6JFJ-nuQuste-niwlwZdF
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 304538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json
            external_identifier: CBDB:304538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zsVFNTYzGiADoYvqX8wVfc
        status: active
        display_name: 王嵱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_89r3LwyhcbgZICe1Kq8tiG
        subject_person_id: p_6zT1sia2P7t8yDmtCBoxUW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JML3zLgbrajmhN4fDU1Pka
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_71oPUMq6fu_6WKzAZtCfFW
          claim_id: c_89r3LwyhcbgZICe1Kq8tiG
          source_id: s_B6JFJ-nuQuste-niwlwZdF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126505 王交）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B6JFJ-nuQuste-niwlwZdF
            source_type: api_record
            title: 中国历代人物传记资料库：王彥（CBDB 304538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json
            external_identifier: CBDB:304538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JML3zLgbrajmhN4fDU1Pka
        status: active
        display_name: 王交
        merged_into_person_id: null
---

# 王彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥 | accepted |
| bio.summary | 王彥，明人物。嘉靖二十年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 304538） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zsVFNTYzGiADoYvqX8wVfc | 王嵱 | accepted |
| other | p_JML3zLgbrajmhN4fDU1Pka | 王交 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥（CBDB 304538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304538&o=json)
