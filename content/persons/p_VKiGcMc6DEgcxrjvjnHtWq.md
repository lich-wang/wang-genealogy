---
schema: wang-person/v1
id: p_VKiGcMc6DEgcxrjvjnHtWq
status: active
merged_into: null
display_name: 王燿
cbdb_id: 526746
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P5Ab9h6PvWKmKfFQt28Eqs
        subject_person_id: p_VKiGcMc6DEgcxrjvjnHtWq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燿，史料所见人物。本项目依据《中国历代人物传记资料库：王燿（CBDB 526746）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_vxdVQesQ8r_6-kK-YTkMvd
          claim_id: c_P5Ab9h6PvWKmKfFQt28Eqs
          source_id: s_BBeTswr1C1Cvq1AXaGVfSN
          stance: supports
          locator: CBDB:526746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BBeTswr1C1Cvq1AXaGVfSN
            source_type: api_record
            title: 中国历代人物传记资料库：王燿（CBDB 526746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526746&o=json
            external_identifier: CBDB:526746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PicNi4mAuGvK3nxSXL4F8t
        subject_person_id: p_VKiGcMc6DEgcxrjvjnHtWq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RkVw4Nwsonk2seW2aNn6CH
          claim_id: c_PicNi4mAuGvK3nxSXL4F8t
          source_id: s_BBeTswr1C1Cvq1AXaGVfSN
          stance: supports
          locator: CBDB:526746
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XW2tUNxyLHDiZfxC76YDMy
        subject_person_id: p_VKiGcMc6DEgcxrjvjnHtWq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EuT4tpymKZYJEcDcNQPzbH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w8_dlN0UAzIDEYL2ivJTrt
          claim_id: c_XW2tUNxyLHDiZfxC76YDMy
          source_id: s_rdsVWAczDb24U5Bdo6pQT6
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12866：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rdsVWAczDb24U5Bdo6pQT6
            source_type: api_record
            title: 中国历代人物传记资料库：王世德（CBDB 69168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69168&o=json
            external_identifier: CBDB:69168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.133Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EuT4tpymKZYJEcDcNQPzbH
        status: active
        display_name: 王世德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王燿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王燿，史料所见人物。本项目依据《中国历代人物传记资料库：王燿（CBDB 526746）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王燿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EuT4tpymKZYJEcDcNQPzbH | 王世德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世德（CBDB 69168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69168&o=json)
- [中国历代人物传记资料库：王燿（CBDB 526746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526746&o=json)
