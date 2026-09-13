---
schema: wang-person/v1
id: p_D7dK1u4GKLagJY81LcTNi5
status: active
merged_into: null
display_name: 王用謨
cbdb_id: 207571
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NPgb9o1NpdCM9otnTsGhN2
        subject_person_id: p_D7dK1u4GKLagJY81LcTNi5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用謨（生于1554年），史料所见人物。本项目依据《中国历代人物传记资料库：王用謨（CBDB 207571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_d2cd9VMHD85AjJEj8YvG-4
          claim_id: c_NPgb9o1NpdCM9otnTsGhN2
          source_id: s_uv6P6axWx95MjT7zSG4P8S
          stance: supports
          locator: CBDB:207571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uv6P6axWx95MjT7zSG4P8S
            source_type: api_record
            title: 中国历代人物传记资料库：王用謨（CBDB 207571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207571&o=json
            external_identifier: CBDB:207571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RRDzgbKJBGwZBcSKYVmpHY
        subject_person_id: p_D7dK1u4GKLagJY81LcTNi5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1554年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1554-01-01
            latest: 1554-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PRhi4aBa9a1TJJgKngmocz
          claim_id: c_RRDzgbKJBGwZBcSKYVmpHY
          source_id: s_uv6P6axWx95MjT7zSG4P8S
          stance: supports
          locator: CBDB:207571
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1554
          source:
            id: s_uv6P6axWx95MjT7zSG4P8S
            source_type: api_record
            title: 中国历代人物传记资料库：王用謨（CBDB 207571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207571&o=json
            external_identifier: CBDB:207571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3gQKM4DZqaFAJG9EwnkhC2
        subject_person_id: p_D7dK1u4GKLagJY81LcTNi5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hdhqhv8pShUgCg262WFHd8
          claim_id: c_3gQKM4DZqaFAJG9EwnkhC2
          source_id: s_uv6P6axWx95MjT7zSG4P8S
          stance: supports
          locator: CBDB:207571
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1554
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e_x7o-44gAmrfqdmeJ66EB
        subject_person_id: p_b6w6en5bMsXhtNVTcf96XT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D7dK1u4GKLagJY81LcTNi5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XBpcoWhZ6W40flfsKWXWZO
          claim_id: c_e_x7o-44gAmrfqdmeJ66EB
          source_id: s_EkBeFR4VnwLhK1bjD74rsy
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EkBeFR4VnwLhK1bjD74rsy
            source_type: api_record
            title: 中国历代人物传记资料库：王九經（CBDB 232586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232586&o=json
            external_identifier: CBDB:232586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_b6w6en5bMsXhtNVTcf96XT
        status: active
        display_name: 王九經
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-EwUTu6jFHNFMZleWTg5VV
        subject_person_id: p_e3xVMXrvD7f81LuaK78bKW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D7dK1u4GKLagJY81LcTNi5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U1S_b-B_bMOrlh2NQbmq_7
          claim_id: c_-EwUTu6jFHNFMZleWTg5VV
          source_id: s_brDB3HUKfuJfMmCz3kPVvw
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百七十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_brDB3HUKfuJfMmCz3kPVvw
            source_type: api_record
            title: 中国历代人物传记资料库：王舜弼（CBDB 232584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232584&o=json
            external_identifier: CBDB:232584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e3xVMXrvD7f81LuaK78bKW
        status: active
        display_name: 王舜弼
        merged_into_person_id: null
    - claim:
        id: c_nxpFQjEqgkOvWhHtDp_ZMN
        subject_person_id: p_oj18J3GUscD3eikPn8iEvA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D7dK1u4GKLagJY81LcTNi5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__GwDwQPJYQR05amTeEaTHg
          claim_id: c_nxpFQjEqgkOvWhHtDp_ZMN
          source_id: s_Dtiq7d8844nb974skyqNFr
          stance: supports
          locator: 萬曆二十年壬辰科進士歷履便覽:一卷，第三甲第一百七十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dtiq7d8844nb974skyqNFr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗儒（CBDB 232585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232585&o=json
            external_identifier: CBDB:232585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oj18J3GUscD3eikPn8iEvA
        status: active
        display_name: 王宗儒
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王用謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用謨（生于1554年），史料所见人物。本项目依据《中国历代人物传记资料库：王用謨（CBDB 207571）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1554年 | accepted |
| name.primary | 王用謨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_b6w6en5bMsXhtNVTcf96XT | 王九經 | accepted |
| ancestors | p_e3xVMXrvD7f81LuaK78bKW | 王舜弼 | accepted |
| ancestors | p_oj18J3GUscD3eikPn8iEvA | 王宗儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九經（CBDB 232586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232586&o=json)
- [中国历代人物传记资料库：王舜弼（CBDB 232584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232584&o=json)
- [中国历代人物传记资料库：王用謨（CBDB 207571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207571&o=json)
- [中国历代人物传记资料库：王宗儒（CBDB 232585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=232585&o=json)
