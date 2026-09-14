---
schema: wang-person/v1
id: p_1SxoGRV8Yp3LatzhzJbJq5
status: active
merged_into: null
display_name: 王梓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xzMwVCe9Bj8L1RNoR5MYkJ
        subject_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RQJAinXqHDCCWh1EePZP8w
          claim_id: c_xzMwVCe9Bj8L1RNoR5MYkJ
          source_id: s_1nPWEgWsKb752jpnCvEVQh
          stance: supports
          locator: CBDB:212038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212038）
          source: &a1
            id: s_1nPWEgWsKb752jpnCvEVQh
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 212038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json
            external_identifier: CBDB:212038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.055Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zwqRN16jushNsdf6nzNBGi
        subject_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王梓，明人物。隆慶五年進士，籍贯商城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 212038）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5d-RslQFzcquMc_J1_Ys7y
          claim_id: c_zwqRN16jushNsdf6nzNBGi
          source_id: s_1nPWEgWsKb752jpnCvEVQh
          stance: supports
          locator: CBDB:212038
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_34iUXz6jAAMojbbrBBaaXv
        subject_person_id: p_FjEtN9HHE5cWHWRD9ddU2X
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l-R94yAqZvPhsIuznr-6gE
          claim_id: c_34iUXz6jAAMojbbrBBaaXv
          source_id: s_FlIJ9ZFjtU9HBqb6drlc1y
          stance: supports
          locator: CBDB：兄弟 王莚（206009）之父／母 王浙
          quotation: null
          interpretation_note: 由兄弟关系推断：王梓 与 王莚 为同胞（CBDB 记「兄」），王莚 之父／母即 王梓 之父／母。
          source:
            id: s_FlIJ9ZFjtU9HBqb6drlc1y
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 212038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json
            external_identifier: CBDB:212038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FjEtN9HHE5cWHWRD9ddU2X
        status: active
        display_name: 王浙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kSEPO9jK35GJpKa_JzhJ80
        subject_person_id: p_1SxoGRV8Yp3LatzhzJbJq5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RvVueiXkPRQ3GnRokiv2tg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fkaIFSsAWZX0ltIFwjBaz7
          claim_id: c_kSEPO9jK35GJpKa_JzhJ80
          source_id: s_FlIJ9ZFjtU9HBqb6drlc1y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206009 王莚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FlIJ9ZFjtU9HBqb6drlc1y
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 212038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json
            external_identifier: CBDB:212038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RvVueiXkPRQ3GnRokiv2tg
        status: active
        display_name: 王莚
        merged_into_person_id: null
---

# 王梓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王梓 | accepted |
| bio.summary | 王梓，明人物。隆慶五年進士，籍贯商城，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 212038） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FjEtN9HHE5cWHWRD9ddU2X | 王浙 | accepted |
| other | p_RvVueiXkPRQ3GnRokiv2tg | 王莚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王梓（CBDB 212038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212038&o=json)
