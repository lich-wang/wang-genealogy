---
schema: wang-person/v1
id: p_DLyb3C62rdLYmnJuC3XQzP
status: active
merged_into: null
display_name: 王渭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YDvTgNFNBAKCut5PH6jC36
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qGhnKXLaeA1vcJDwCxMF3x
          claim_id: c_YDvTgNFNBAKCut5PH6jC36
          source_id: s_XoJh6rBfvoTxS7GeYruFWu
          stance: supports
          locator: CBDB:237842
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237842）
          source: &a1
            id: s_XoJh6rBfvoTxS7GeYruFWu
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 237842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json
            external_identifier: CBDB:237842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7vstDHCfGzNvT3ViabQbXz
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渭，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237842）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xEtEUiOKFdzrb87BtlqzYD
          claim_id: c_7vstDHCfGzNvT3ViabQbXz
          source_id: s_XoJh6rBfvoTxS7GeYruFWu
          stance: supports
          locator: CBDB:237842
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hr3MoF4OCq7Md0rhovysdF
        subject_person_id: p_13RmhF22e6LFRmpmecd8LK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_--TTt6MPvLqZCzT37yi_72
          claim_id: c_hr3MoF4OCq7Md0rhovysdF
          source_id: s_v2I3dAT52sKz9Og9hKZaSo
          stance: supports
          locator: CBDB：兄弟 王浩（199153）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王渭 与 王浩 为同胞（CBDB 记「兄」），王浩 之父／母即 王渭 之父／母。
          source:
            id: s_v2I3dAT52sKz9Og9hKZaSo
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 237842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json
            external_identifier: CBDB:237842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_13RmhF22e6LFRmpmecd8LK
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MvUFMIpV5nyELK6l_CIcRn
        subject_person_id: p_DLyb3C62rdLYmnJuC3XQzP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rEM4FmnErK6MdZnXyWnxsa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y79rZeZvJwewvdpSgZP214
          claim_id: c_MvUFMIpV5nyELK6l_CIcRn
          source_id: s_v2I3dAT52sKz9Og9hKZaSo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199153 王浩）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v2I3dAT52sKz9Og9hKZaSo
            source_type: api_record
            title: 中国历代人物传记资料库：王渭（CBDB 237842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json
            external_identifier: CBDB:237842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rEM4FmnErK6MdZnXyWnxsa
        status: active
        display_name: 王浩
        merged_into_person_id: null
---

# 王渭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渭 | accepted |
| bio.summary | 王渭，明人物。成化二年進士，籍贯上元。（中国历代人物传记资料库 CBDB 237842） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_13RmhF22e6LFRmpmecd8LK | 王忠 | accepted |
| other | p_rEM4FmnErK6MdZnXyWnxsa | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王渭（CBDB 237842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237842&o=json)
