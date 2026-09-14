---
schema: wang-person/v1
id: p_G5x61NsvfMQAvzBmPKJw9K
status: active
merged_into: null
display_name: 王之臣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qoKLp7oZeQqzB25HRNmvVo
        subject_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VTdqWpQo6FdpU6NcbmrdCd
          claim_id: c_qoKLp7oZeQqzB25HRNmvVo
          source_id: s_axrbSA3BuqVmDieQ82TYUT
          stance: supports
          locator: CBDB:227713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227713）
          source: &a1
            id: s_axrbSA3BuqVmDieQ82TYUT
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 227713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json
            external_identifier: CBDB:227713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GmavJ2nPwPpYNR5QKtyvZj
        subject_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王之臣，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 227713）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1wW8cyhQTR61lVVUhHvBpG
          claim_id: c_GmavJ2nPwPpYNR5QKtyvZj
          source_id: s_axrbSA3BuqVmDieQ82TYUT
          stance: supports
          locator: CBDB:227713
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4ZtadL0bJgifjoa4pIhHjV
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aJsw3vXlt-zbI47g30K-CE
          claim_id: c_4ZtadL0bJgifjoa4pIhHjV
          source_id: s_gXHubR_XCTdA_hbCb8njyj
          stance: supports
          locator: CBDB：兄弟 王之翰（207104）之父／母 王崇
          quotation: null
          interpretation_note: 由兄弟关系推断：王之臣 与 王之翰 为同胞（CBDB 记「弟」），王之翰 之父／母即 王之臣 之父／母。
          source:
            id: s_gXHubR_XCTdA_hbCb8njyj
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 227713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json
            external_identifier: CBDB:227713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LCwgEkUXsd-1-QiYoheC8C
        subject_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qmaTKGNumam5C8PU1hoqz
          claim_id: c_LCwgEkUXsd-1-QiYoheC8C
          source_id: s_gXHubR_XCTdA_hbCb8njyj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gXHubR_XCTdA_hbCb8njyj
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 227713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json
            external_identifier: CBDB:227713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UehS2yfTZaFGBh7uxhHFCE
        status: active
        display_name: 王之翰
        merged_into_person_id: null
---

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| bio.summary | 王之臣，明人物。萬曆丙戌科進士進士，籍贯蒙陰，入仕貢生: 歲貢、常貢、挨貢。（中国历代人物传记资料库 CBDB 227713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| other | p_UehS2yfTZaFGBh7uxhHFCE | 王之翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之臣（CBDB 227713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json)
