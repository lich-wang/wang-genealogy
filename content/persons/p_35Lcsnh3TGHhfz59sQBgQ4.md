---
schema: wang-person/v1
id: p_35Lcsnh3TGHhfz59sQBgQ4
status: active
merged_into: null
display_name: 王坊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sL7A16pHWyc4XinX5PRsvD
        subject_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mJ9jPHUR3Nco3kBKtEsLpi
          claim_id: c_sL7A16pHWyc4XinX5PRsvD
          source_id: s_YPdytLahN3c292siKnBfDQ
          stance: supports
          locator: CBDB:222814
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（222814）
          source: &a1
            id: s_YPdytLahN3c292siKnBfDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 222814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json
            external_identifier: CBDB:222814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.394Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XG2t1NbiCTx6PNBucR5h8e
        subject_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王坊，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222814）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R_LOF57SiNl-t8hL37d6Wp
          claim_id: c_XG2t1NbiCTx6PNBucR5h8e
          source_id: s_YPdytLahN3c292siKnBfDQ
          stance: supports
          locator: CBDB:222814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__eaMxMsv42aLFigtH3RNiU
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TT9MBbEvZhRCfAQd9eI7Ub
          claim_id: c__eaMxMsv42aLFigtH3RNiU
          source_id: s_VulNBV7PgVTUkn1YOZu1qr
          stance: supports
          locator: CBDB：兄弟 王堯封（126717）之父／母 王維熊
          quotation: null
          interpretation_note: 由兄弟关系推断：王坊 与 王堯封 为同胞（CBDB 记「弟」），王堯封 之父／母即 王坊 之父／母。
          source:
            id: s_VulNBV7PgVTUkn1YOZu1qr
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 222814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json
            external_identifier: CBDB:222814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kEF8cr9zNscjB1VF88oWU3
        subject_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHZReQTguj8mGdLH9uTXVZ
          claim_id: c_kEF8cr9zNscjB1VF88oWU3
          source_id: s_VulNBV7PgVTUkn1YOZu1qr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VulNBV7PgVTUkn1YOZu1qr
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 222814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json
            external_identifier: CBDB:222814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpuSp4mmLYMfmUMioXctjR
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王坊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坊 | accepted |
| bio.summary | 王坊，明人物。萬曆十一年進士，籍贯金壇，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 222814） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| other | p_DpuSp4mmLYMfmUMioXctjR | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坊（CBDB 222814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json)
