---
schema: wang-person/v1
id: p_eGwj2kV1qTWNvDXuDqBhQ5
status: active
merged_into: null
display_name: 王希逸
cbdb_id: 13794
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bMbJMLYudVZuu25Rq8ZgK6
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希逸
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jxsThKgYVefXDsEbNRBEsa
          claim_id: c_bMbJMLYudVZuu25Rq8ZgK6
          source_id: s_2j4BogSGxZFwE5R5xB27EN
          stance: supports
          locator: Q45378723
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_2j4BogSGxZFwE5R5xB27EN
            source_type: api_record
            title: 维基数据：王希逸（Q45378723）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378723
            external_identifier: Q45378723
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_L7MKRjHH6PXLE9qveDnpLU
          claim_id: c_bMbJMLYudVZuu25Rq8ZgK6
          source_id: s_jxpJBLi36Q4xQhDKSJ5WoL
          stance: supports
          locator: CBDB:13794
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_jxpJBLi36Q4xQhDKSJ5WoL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王希逸（13794）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13794&o=json
            external_identifier: CBDB:13794
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d6a62jUwnPBDUA18Zm5h8E
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希逸，宋人物。籍贯開封，身份为好學，入仕恩蔭、蔭補，曾任殿中省丞、供奉官、尚書省禮部祠部司員外郎。（中国历代人物传记资料库 CBDB 13794）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Bo6UhtNK6yNB4pvocZqxBu
          claim_id: c_d6a62jUwnPBDUA18Zm5h8E
          source_id: s_2j4BogSGxZFwE5R5xB27EN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_0uuIFVInhiWXK4mKvsv2J-
          claim_id: c_d6a62jUwnPBDUA18Zm5h8E
          source_id: s_jxpJBLi36Q4xQhDKSJ5WoL
          stance: supports
          locator: CBDB:13794
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_TFQ3F43J5UPfXBicuWsnVj
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4JXdLGzMSVWRt7DgGNQQq2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w3tE2FJFoDJqiJhj3AhYFz
          claim_id: c_TFQ3F43J5UPfXBicuWsnVj
          source_id: s_MHUANk8LX5MLkNEYCEfoM2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MHUANk8LX5MLkNEYCEfoM2
            source_type: api_record
            title: 维基数据：王仁（Q45378726）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378726
            external_identifier: Q45378726
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_7DJ714AUH1mEzST46mY29f
          claim_id: c_TFQ3F43J5UPfXBicuWsnVj
          source_id: s_2j4BogSGxZFwE5R5xB27EN
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_4JXdLGzMSVWRt7DgGNQQq2
        status: active
        display_name: 王仁
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_iC5KUwetaAtrSOLTzgrgAc
        subject_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_DtK5LjCJnBrfLHceVPHiRT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OMybS1GUSL6ySozaX73c_x
          claim_id: c_iC5KUwetaAtrSOLTzgrgAc
          source_id: s_F_8IKkG0EOD6SdFIVc-U0O
          stance: supports
          locator: CBDB 双向互证（妻子 符氏(符昭愿女)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_F_8IKkG0EOD6SdFIVc-U0O
            source_type: api_record
            title: 中国历代人物传记资料库：符氏(符昭愿女)（CBDB 573071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573071&o=json
            external_identifier: CBDB:573071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DtK5LjCJnBrfLHceVPHiRT
        status: active
        display_name: 符氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PIBBEVZtl03omhqG8MJsa3
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5n4eC1IPdZ6GxZ9bUQxUIs
          claim_id: c_PIBBEVZtl03omhqG8MJsa3
          source_id: s_jGm5MAeMsbMIblY_-hIEHX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 13794 王希逸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jGm5MAeMsbMIblY_-hIEHX
            source_type: api_record
            title: 中国历代人物传记资料库：王希範（CBDB 13795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json
            external_identifier: CBDB:13795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KrkcMBUwoQAFc2edZWGbBh
        status: active
        display_name: 王希範
        merged_into_person_id: null
---

# 王希逸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希逸 | accepted |
| bio.summary | 王希逸，宋人物。籍贯開封，身份为好學，入仕恩蔭、蔭補，曾任殿中省丞、供奉官、尚書省禮部祠部司員外郎。（中国历代人物传记资料库 CBDB 13794） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4JXdLGzMSVWRt7DgGNQQq2 | 王仁 | accepted |
| spouses | p_DtK5LjCJnBrfLHceVPHiRT | 符氏 | accepted |
| other | p_KrkcMBUwoQAFc2edZWGbBh | 王希範 | accepted |

## 外部来源

- [维基数据：王仁（Q45378726）](https://www.wikidata.org/wiki/Q45378726)
- [维基数据：王希逸（Q45378723）](https://www.wikidata.org/wiki/Q45378723)
- [中国历代人物传记资料库：符氏(符昭愿女)（CBDB 573071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=573071&o=json)
- [中国历代人物传记资料库：王希範（CBDB 13795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json)
- [CBDB 中国历代人物传记资料库：王希逸（13794）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13794&o=json)
