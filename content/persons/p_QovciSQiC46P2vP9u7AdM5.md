---
schema: wang-person/v1
id: p_QovciSQiC46P2vP9u7AdM5
status: active
merged_into: null
display_name: 王廷舉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9TPrJHV838fnAznyLgC64
        subject_person_id: p_QovciSQiC46P2vP9u7AdM5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6awMJufcjwKJ5H42UUYDnD
          claim_id: c_J9TPrJHV838fnAznyLgC64
          source_id: s_WDJmADuaUEahWruYeXcPvN
          stance: supports
          locator: CBDB:698635
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（698635）
          source: &a1
            id: s_WDJmADuaUEahWruYeXcPvN
            source_type: api_record
            title: 中国历代人物传记资料库：王廷舉（CBDB 698635）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698635&o=json
            external_identifier: CBDB:698635
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.744Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_E2Cyv3QDRidgF169Yakh8d
        subject_person_id: p_QovciSQiC46P2vP9u7AdM5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷舉，明人物。籍贯婺源，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 698635）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qOl0wQc1yZxvCW6IDAhlpC
          claim_id: c_E2Cyv3QDRidgF169Yakh8d
          source_id: s_WDJmADuaUEahWruYeXcPvN
          stance: supports
          locator: CBDB:698635
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vRdmg51ng1nYPu9IJWymFX
        subject_person_id: p_J9HTReJX5rcNdqUdmEC8QA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QovciSQiC46P2vP9u7AdM5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nbZqnXipbPoi4a-dXf5-1f
          claim_id: c_vRdmg51ng1nYPu9IJWymFX
          source_id: s_r5PNHNvH9PP9UQyyHrftxQ
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160972：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_r5PNHNvH9PP9UQyyHrftxQ
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 698634）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698634&o=json
            external_identifier: CBDB:698634
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J9HTReJX5rcNdqUdmEC8QA
        status: active
        display_name: 王僖
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷舉 | accepted |
| bio.summary | 王廷舉，明人物。籍贯婺源，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 698635） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J9HTReJX5rcNdqUdmEC8QA | 王僖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷舉（CBDB 698635）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698635&o=json)
- [中国历代人物传记资料库：王僖（CBDB 698634）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=698634&o=json)
