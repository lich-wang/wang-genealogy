---
schema: wang-person/v1
id: p_SkMrroZMaVf8SVRNciaEtD
status: active
merged_into: null
display_name: 王從善
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uVsWr53KuT6bwCiKcdH6HR
        subject_person_id: p_SkMrroZMaVf8SVRNciaEtD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XzkAhDDQfA8mWS932DuVft
          claim_id: c_uVsWr53KuT6bwCiKcdH6HR
          source_id: s_vhotgxw8U2ZgBKtQtnoUPm
          stance: supports
          locator: CBDB:280177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（280177）
          source: &a1
            id: s_vhotgxw8U2ZgBKtQtnoUPm
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 280177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json
            external_identifier: CBDB:280177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.997Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qgBkgXsHzSVQEb3F2KRBFT
        subject_person_id: p_SkMrroZMaVf8SVRNciaEtD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王從善，明人物。正德十二年進士，籍贯襄陽衛，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 280177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBFCs3IT2a-GAzKa23IQVE
          claim_id: c_qgBkgXsHzSVQEb3F2KRBFT
          source_id: s_vhotgxw8U2ZgBKtQtnoUPm
          stance: supports
          locator: CBDB:280177
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fuZugImLr7wV3MuOARwxu_
        subject_person_id: p_1N7Z4wmfmL9xzTY7zGpnMb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SkMrroZMaVf8SVRNciaEtD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qceI11FkZdSLtsEpJ8rPBI
          claim_id: c_fuZugImLr7wV3MuOARwxu_
          source_id: s_B3WPBrJ0PJhwJkoGa7IZ9x
          stance: supports
          locator: CBDB：兄弟 王至善（201900）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王從善 与 王至善 为同胞（CBDB 记「弟」），王至善 之父／母即 王從善 之父／母。
          source:
            id: s_B3WPBrJ0PJhwJkoGa7IZ9x
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 280177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json
            external_identifier: CBDB:280177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1N7Z4wmfmL9xzTY7zGpnMb
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jVpc53G_nM0CTPyd12Bknc
        subject_person_id: p_691jukaqPqsQGsFHBsNzWD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SkMrroZMaVf8SVRNciaEtD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rxtzTreIizstb7h1Qlceyi
          claim_id: c_jVpc53G_nM0CTPyd12Bknc
          source_id: s_B3WPBrJ0PJhwJkoGa7IZ9x
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201900 王至善）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B3WPBrJ0PJhwJkoGa7IZ9x
            source_type: api_record
            title: 中国历代人物传记资料库：王從善（CBDB 280177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json
            external_identifier: CBDB:280177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_691jukaqPqsQGsFHBsNzWD
        status: active
        display_name: 王至善
        merged_into_person_id: null
---

# 王從善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王從善 | accepted |
| bio.summary | 王從善，明人物。正德十二年進士，籍贯襄陽衛，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 280177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1N7Z4wmfmL9xzTY7zGpnMb | 王信 | accepted |
| other | p_691jukaqPqsQGsFHBsNzWD | 王至善 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從善（CBDB 280177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280177&o=json)
