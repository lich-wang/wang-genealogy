---
schema: wang-person/v1
id: p_EPa4mGvnNFxVG6U2bdfUUq
status: active
merged_into: null
display_name: 王絡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Wq7cDMZHapwcQwZe4Urwx
        subject_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mpThoxHGP6c7DY234tq2fn
          claim_id: c_9Wq7cDMZHapwcQwZe4Urwx
          source_id: s_ZTutiw5QHiVLB21FqttBTM
          stance: supports
          locator: CBDB:209211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209211）
          source: &a1
            id: s_ZTutiw5QHiVLB21FqttBTM
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 209211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json
            external_identifier: CBDB:209211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HQvY9FTRrF5WmGWyNGtg7H
        subject_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王絡，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PKc9K2Qr-97qelouGggZrF
          claim_id: c_HQvY9FTRrF5WmGWyNGtg7H
          source_id: s_ZTutiw5QHiVLB21FqttBTM
          stance: supports
          locator: CBDB:209211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KDVbU3ky0P6VcjZFhG3RBh
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78JqWXG78hGTYd8F6PN4Tg
          claim_id: c_KDVbU3ky0P6VcjZFhG3RBh
          source_id: s_cUmEu0kwrFVPqPo4r-pfeT
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王絡 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王絡 之父／母。
          source:
            id: s_cUmEu0kwrFVPqPo4r-pfeT
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 209211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json
            external_identifier: CBDB:209211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_9IaxxZHSsUKPFaojRB8Bhe
        subject_person_id: p_EPa4mGvnNFxVG6U2bdfUUq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BxIv6eq6kBCRifwM2m_W9K
          claim_id: c_9IaxxZHSsUKPFaojRB8Bhe
          source_id: s_cUmEu0kwrFVPqPo4r-pfeT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cUmEu0kwrFVPqPo4r-pfeT
            source_type: api_record
            title: 中国历代人物传记资料库：王絡（CBDB 209211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json
            external_identifier: CBDB:209211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ux2gsGHcSC8JtKGeSs9ttp
        status: active
        display_name: 王緘
        merged_into_person_id: null
---

# 王絡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王絡 | accepted |
| bio.summary | 王絡，明人物。隆慶五年進士，籍贯文安。（中国历代人物传记资料库 CBDB 209211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| other | p_Ux2gsGHcSC8JtKGeSs9ttp | 王緘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王絡（CBDB 209211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209211&o=json)
