---
schema: wang-person/v1
id: p_39GWjbzJQtkejPEWb4G4LN
status: active
merged_into: null
display_name: 陈树勷
cbdb_id: 55734
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4U91sVb0vovUS3k68BGStw
        subject_person_id: p_39GWjbzJQtkejPEWb4G4LN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈树勷，史料所见人物。本项目依据《陈树勷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lKTCxEF44JrQy7xzKPS9xe
          claim_id: c_4U91sVb0vovUS3k68BGStw
          source_id: s_TeSZTvrheVTa7PgrrzU9ny
          stance: supports
          locator: Q45486010
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TeSZTvrheVTa7PgrrzU9ny
            source_type: api_record
            title: 维基数据：陈树勷（Q45486010）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45486010
            external_identifier: Q45486010
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:17.760Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c9caDXVe69JwDEVmsCo8cG
        subject_person_id: p_39GWjbzJQtkejPEWb4G4LN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陈树勷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_JyCm8ghwTFBQ3xHHMDTkFb
          claim_id: c_c9caDXVe69JwDEVmsCo8cG
          source_id: s_TeSZTvrheVTa7PgrrzU9ny
          stance: supports
          locator: Q45486010
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_YBrgRmM39qx5xG8zfB8hFo
          claim_id: c_c9caDXVe69JwDEVmsCo8cG
          source_id: s_gJ5QQs2J1za1EPMkDa5BLa
          stance: supports
          locator: Q45486010
          quotation: null
          interpretation_note: null
          source:
            id: s_gJ5QQs2J1za1EPMkDa5BLa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：陳樹勷（55734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55734&o=json
            external_identifier: CBDB:55734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:17.951Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_7xxw84zVT6EJNbZH8bDPzz
        subject_person_id: p_39GWjbzJQtkejPEWb4G4LN
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_K3V5746zGx9VVTC42VpP31
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QFNEB37LMBkKbJkK9jP8EC
          claim_id: c_7xxw84zVT6EJNbZH8bDPzz
          source_id: s_dZPTaHr6jaic2aGU4hDfRM
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_dZPTaHr6jaic2aGU4hDfRM
            source_type: api_record
            title: 维基数据：王静淑（Q45485756）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45485756
            external_identifier: Q45485756
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:10.748Z
            metadata_json: null
        - id: cs_ugcV1LD6iejcpE7g7viePg
          claim_id: c_7xxw84zVT6EJNbZH8bDPzz
          source_id: s_TeSZTvrheVTa7PgrrzU9ny
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_L3CcLZQ7AuoTvL56Pt7FJk
          claim_id: c_7xxw84zVT6EJNbZH8bDPzz
          source_id: s_HFWp7igmPi2rYKAePKgRuC
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_HFWp7igmPi2rYKAePKgRuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王靜淑（55730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55730&o=json
            external_identifier: CBDB:55730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.921Z
            metadata_json: null
      object_person:
        id: p_K3V5746zGx9VVTC42VpP31
        status: active
        display_name: 王静淑
        merged_into_person_id: null
    - claim:
        id: c_ntpdye7VqV21an580SmDn3
        subject_person_id: p_K3V5746zGx9VVTC42VpP31
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_39GWjbzJQtkejPEWb4G4LN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G8njSp2A2dJBjilaQAB-XS
          claim_id: c_ntpdye7VqV21an580SmDn3
          source_id: s_HFWp7igmPi2rYKAePKgRuC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #684, HuWenKai #255：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HFWp7igmPi2rYKAePKgRuC
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王靜淑（55730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55730&o=json
            external_identifier: CBDB:55730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:10.921Z
            metadata_json: null
      object_person:
        id: p_K3V5746zGx9VVTC42VpP31
        status: active
        display_name: 王静淑
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陈树勷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 陈树勷，史料所见人物。本项目依据《陈树勷》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 陈树勷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_K3V5746zGx9VVTC42VpP31 | 王静淑 | accepted |
| spouses | p_K3V5746zGx9VVTC42VpP31 | 王静淑 | accepted |

## 外部来源

- [维基数据：陈树勷（Q45486010）](https://www.wikidata.org/wiki/Q45486010)
- [维基数据：王静淑（Q45485756）](https://www.wikidata.org/wiki/Q45485756)
- [CBDB 中国历代人物传记资料库：陳樹勷（55734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55734&o=json)
- [CBDB 中国历代人物传记资料库：王靜淑（55730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55730&o=json)
