---
schema: wang-person/v1
id: p_NxhVtsQFEKS3B7HARgTqxM
status: active
merged_into: null
display_name: 王褘
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5kQK4cmBLH54r3ELA2LYa7
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王褘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YBwWBwx4YcdKSpAtVNjTa4
          claim_id: c_5kQK4cmBLH54r3ELA2LYa7
          source_id: s_nRKzNVQ9oTG8FF9mPH1XTe
          stance: supports
          locator: CBDB:10726
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10726）
          source: &a1
            id: s_nRKzNVQ9oTG8FF9mPH1XTe
            source_type: api_record
            title: 中国历代人物传记资料库：王褘（CBDB 10726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json
            external_identifier: CBDB:10726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_d5a9UbtVSKZavhUEdswDu6
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1322年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tTyfh9W8GMJr4LfjsJa1wj
          claim_id: c_d5a9UbtVSKZavhUEdswDu6
          source_id: s_nRKzNVQ9oTG8FF9mPH1XTe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5q5deRHH4ZJnRQwFQ9KFeN
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1373年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9fkHMVMw2DwkY6juCNn7kS
          claim_id: c_5q5deRHH4ZJnRQwFQ9KFeN
          source_id: s_nRKzNVQ9oTG8FF9mPH1XTe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_723rUGaGkroEAaNmGB7rS8
        subject_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_btX2RXaKnd8EWh8QUL3WTa
          claim_id: c_723rUGaGkroEAaNmGB7rS8
          source_id: s_nRKzNVQ9oTG8FF9mPH1XTe
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K_85h8SymJNKwNmSC4vGlv
        subject_person_id: p_mgxHev7zFTwcmkSJE7CaXn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zV3xYYvS_EPPIlKZ6Q-et-
          claim_id: c_K_85h8SymJNKwNmSC4vGlv
          source_id: s_BAjxo671XMFTkByAe6GdPY
          stance: supports
          locator: 元人傳記資料索引，18636：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BAjxo671XMFTkByAe6GdPY
            source_type: api_record
            title: 中国历代人物传记资料库：王良玉（CBDB 10725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json
            external_identifier: CBDB:10725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.563Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mgxHev7zFTwcmkSJE7CaXn
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_aJyF2i3w22xS1WeXUmR8qI
        subject_person_id: p_mp9fqPLVqRaYj9MBorGs2H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_NxhVtsQFEKS3B7HARgTqxM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yxCdVWc9K0RZRCfEdVfdaa
          claim_id: c_aJyF2i3w22xS1WeXUmR8qI
          source_id: s_uzCPGMUpAMX6b1wjW5hE99
          stance: supports
          locator: 元人傳記資料索引，773：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzCPGMUpAMX6b1wjW5hE99
            source_type: api_record
            title: 中国历代人物传记资料库：王炎澤（CBDB 10724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json
            external_identifier: CBDB:10724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mp9fqPLVqRaYj9MBorGs2H
        status: active
        display_name: 王炎澤
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王褘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王褘 | accepted |
| birth.date | 1322年 | accepted |
| death.date | 1373年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mgxHev7zFTwcmkSJE7CaXn | 王良玉 | accepted |
| ancestors | p_mp9fqPLVqRaYj9MBorGs2H | 王炎澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王褘（CBDB 10726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10726&o=json)
- [中国历代人物传记资料库：王良玉（CBDB 10725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10725&o=json)
- [中国历代人物传记资料库：王炎澤（CBDB 10724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10724&o=json)
