---
schema: wang-person/v1
id: p_xBW1ogj6ARr6cywSv1Y65v
status: active
merged_into: null
display_name: 王光蘊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wMC49E6h2Gs4GCd6DANfGy
        subject_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光蘊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QvMtvN64df4Qzmk2eWZzT8
          claim_id: c_wMC49E6h2Gs4GCd6DANfGy
          source_id: s_x7V5Kme4NiSuc5PP7CWvDB
          stance: supports
          locator: CBDB:215083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（215083）
          source: &a1
            id: s_x7V5Kme4NiSuc5PP7CWvDB
            source_type: api_record
            title: 中国历代人物传记资料库：王光蘊（CBDB 215083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json
            external_identifier: CBDB:215083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.182Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtrNCKWaUoEBiAwQc9Aqdj
        subject_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光蘊，明人物。萬曆二年進士，籍贯永嘉，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 215083）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5tCFTWyeAeJXT4M1Ecs2t3
          claim_id: c_EtrNCKWaUoEBiAwQc9Aqdj
          source_id: s_x7V5Kme4NiSuc5PP7CWvDB
          stance: supports
          locator: CBDB:215083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_II8QisbTWXk-_XAs9plvHK
        subject_person_id: p_5sMmYXtRexRwYuYUk2GvGP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQ4yngDGImu-Tw1e-fH5-H
          claim_id: c_II8QisbTWXk-_XAs9plvHK
          source_id: s_DYLFXkqexIqKtxeWnxCAK6
          stance: supports
          locator: CBDB：兄弟 王繼明（126880）之父／母 王允文
          quotation: null
          interpretation_note: 由兄弟关系推断：王光蘊 与 王繼明 为同胞（CBDB 记「弟」），王繼明 之父／母即 王光蘊 之父／母。
          source:
            id: s_DYLFXkqexIqKtxeWnxCAK6
            source_type: api_record
            title: 中国历代人物传记资料库：王光蘊（CBDB 215083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json
            external_identifier: CBDB:215083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5sMmYXtRexRwYuYUk2GvGP
        status: active
        display_name: 王允文
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_n7QVYsJg3hWoI-ppfdI2J5
        subject_person_id: p_Uu3PhDPTRD4oQGaMJP7i1y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xBW1ogj6ARr6cywSv1Y65v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WqAp4A9_tkyClm03wgXI4M
          claim_id: c_n7QVYsJg3hWoI-ppfdI2J5
          source_id: s_DYLFXkqexIqKtxeWnxCAK6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126880 王繼明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DYLFXkqexIqKtxeWnxCAK6
            source_type: api_record
            title: 中国历代人物传记资料库：王光蘊（CBDB 215083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json
            external_identifier: CBDB:215083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uu3PhDPTRD4oQGaMJP7i1y
        status: active
        display_name: 王繼明
        merged_into_person_id: null
---

# 王光蘊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光蘊 | accepted |
| bio.summary | 王光蘊，明人物。萬曆二年進士，籍贯永嘉，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 215083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5sMmYXtRexRwYuYUk2GvGP | 王允文 | accepted |
| other | p_Uu3PhDPTRD4oQGaMJP7i1y | 王繼明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光蘊（CBDB 215083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=215083&o=json)
