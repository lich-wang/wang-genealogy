---
schema: wang-person/v1
id: p_sYAGJBkToGXPpNaqpnLgsK
status: active
merged_into: null
display_name: 王頒
cbdb_id: 415602
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QWrN1rgYVajjixW8PqXYip
        subject_person_id: p_sYAGJBkToGXPpNaqpnLgsK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頒，字景彥，太原祁人，梁太尉王僧辯之子。隋開皇中自請伐陳，以父仇掘陳高祖陵，拜代州刺史，後為齊州刺史（《隋書·王頒傳》）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_jZCqAeADf6ap_9yE0oc0oy
          claim_id: c_QWrN1rgYVajjixW8PqXYip
          source_id: s_wPYT-T4MjdIjdqf3UntMG7
          stance: supports
          locator: 隋書/卷72·王頒傳
          quotation: null
          interpretation_note: 依正史列传原文重写简介。
          source:
            id: s_wPYT-T4MjdIjdqf3UntMG7
            source_type: website
            title: 维基文库：隋書/卷72·王頒
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/隋書/卷72
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:01:15.894Z
            metadata_json: null
        - id: cs_Wr6-1Vnrqt-XnBtUoDhj67
          claim_id: c_QWrN1rgYVajjixW8PqXYip
          source_id: s_mASRoL5xst2D4pn2st1inP
          stance: supports
          locator: CBDB:415602
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mASRoL5xst2D4pn2st1inP
            source_type: api_record
            title: 中国历代人物传记资料库：王頒（CBDB 415602）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415602&o=json
            external_identifier: CBDB:415602
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:03.710Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wps76Qsv1SeMe5KLK76zPd
        subject_person_id: p_sYAGJBkToGXPpNaqpnLgsK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王頒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nEj9YgP24FHouzVWK3rvk6
          claim_id: c_Wps76Qsv1SeMe5KLK76zPd
          source_id: s_mASRoL5xst2D4pn2st1inP
          stance: supports
          locator: CBDB:415602
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6401-6500）｜历史性依据：CBDB 朝代 = 北周
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王頒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王頒，字景彥，太原祁人，梁太尉王僧辯之子。隋開皇中自請伐陳，以父仇掘陳高祖陵，拜代州刺史，後為齊州刺史（《隋書·王頒傳》）。 | accepted |
| name.primary | 王頒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基文库：隋書/卷72·王頒](https://zh.wikisource.org/wiki/隋書/卷72)
- [中国历代人物传记资料库：王頒（CBDB 415602）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415602&o=json)
