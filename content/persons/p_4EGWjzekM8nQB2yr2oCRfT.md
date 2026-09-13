---
schema: wang-person/v1
id: p_4EGWjzekM8nQB2yr2oCRfT
status: active
merged_into: null
display_name: 王瑞璋
cbdb_id: 526801
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_S2sbgxLr2snyBMFDYs4qie
        subject_person_id: p_4EGWjzekM8nQB2yr2oCRfT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞璋，史料所见人物。本项目依据《中国历代人物传记资料库：王瑞璋（CBDB 526801）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_6BxS5YdXQ_I1_7m1qd98Cf
          claim_id: c_S2sbgxLr2snyBMFDYs4qie
          source_id: s_5QChDyVvbYRfFZFyjeARDz
          stance: supports
          locator: CBDB:526801
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5QChDyVvbYRfFZFyjeARDz
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞璋（CBDB 526801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526801&o=json
            external_identifier: CBDB:526801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:18.829Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wysu15dmP3h3kLPHvLd9J7
        subject_person_id: p_4EGWjzekM8nQB2yr2oCRfT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞璋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QMWSKBr7P7AsvFNGr6v7Gd
          claim_id: c_Wysu15dmP3h3kLPHvLd9J7
          source_id: s_5QChDyVvbYRfFZFyjeARDz
          stance: supports
          locator: CBDB:526801
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7101-7200）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_MMO-88u-3ZKJ76e0ArEi5K
        subject_person_id: p_4EGWjzekM8nQB2yr2oCRfT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_afPNNs5ZnKkGi8uzmbG1Wn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UgPP2EaysYCxjBiDpuZRh1
          claim_id: c_MMO-88u-3ZKJ76e0ArEi5K
          source_id: s_rTuc5S99rm8FC13m7vE1Te
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），12963：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rTuc5S99rm8FC13m7vE1Te
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 69262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json
            external_identifier: CBDB:69262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_afPNNs5ZnKkGi8uzmbG1Wn
        status: active
        display_name: 王昊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑞璋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王瑞璋，史料所见人物。本项目依据《中国历代人物传记资料库：王瑞璋（CBDB 526801）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王瑞璋 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_afPNNs5ZnKkGi8uzmbG1Wn | 王昊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昊（CBDB 69262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69262&o=json)
- [中国历代人物传记资料库：王瑞璋（CBDB 526801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526801&o=json)
