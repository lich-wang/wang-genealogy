---
schema: wang-person/v1
id: p_2UaPva3PJ4SimEwsC8AKh3
status: active
merged_into: null
display_name: 王謙
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6GEkZJxzEcAkp283ogted5
        subject_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AcH1yJVHsM2YRwwnZcUJpZ
          claim_id: c_6GEkZJxzEcAkp283ogted5
          source_id: s_GWGCSzDcB1hkqh8enPXj77
          stance: supports
          locator: CBDB:290823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290823）
          source: &a1
            id: s_GWGCSzDcB1hkqh8enPXj77
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VqvoVrVp35E6FS5bnKGZhZ
        subject_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290823）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pJI2Wz1p_WMujeUqnQ7rW4
          claim_id: c_VqvoVrVp35E6FS5bnKGZhZ
          source_id: s_GWGCSzDcB1hkqh8enPXj77
          stance: supports
          locator: CBDB:290823
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_npr5KYdyjldzM9IxNwpIH5
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ySAdUyrOWU1H2_eY8317XF
          claim_id: c_npr5KYdyjldzM9IxNwpIH5
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王謙 之父／母。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
    - claim:
        id: c_kAsXHxYlH56PtbJSuxcoph
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ucnxt8oaV5Rolmq4DEO7yV
          claim_id: c_kAsXHxYlH56PtbJSuxcoph
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王謙 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王謙 之父／母。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Tlfx0FBXkttelI9oCATORE
        subject_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W3abO-FxBAgoT6aKaYLowr
          claim_id: c_Tlfx0FBXkttelI9oCATORE
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_OW5tVc8nqJ0x12-M55kAhl
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_no2LnfHA9MSduSjmZNtQB_
          claim_id: c_OW5tVc8nqJ0x12-M55kAhl
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| other | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| other | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王謙（CBDB 290823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json)
