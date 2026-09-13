---
schema: wang-person/v1
id: p_aFuSKNvByaJGAkgoYggDkg
status: active
merged_into: null
display_name: 王金甌
cbdb_id: 415529
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2jXMAgyPLy96zFNAJkshjd
        subject_person_id: p_aFuSKNvByaJGAkgoYggDkg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金甌，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415529）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vPWi6qW9w2fkRn2Jk5Im12
          claim_id: c_2jXMAgyPLy96zFNAJkshjd
          source_id: s_d7AWBhaHMZLCHfRiBUngMg
          stance: supports
          locator: CBDB:415529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_d7AWBhaHMZLCHfRiBUngMg
            source_type: api_record
            title: 中国历代人物传记资料库：王金甌（CBDB 415529）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415529&o=json
            external_identifier: CBDB:415529
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:03.710Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZWFkmaET15gWyLp7Z2G1hC
        subject_person_id: p_aFuSKNvByaJGAkgoYggDkg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金甌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5g61rHS3DJDCQ9pXyMKdt9
          claim_id: c_ZWFkmaET15gWyLp7Z2G1hC
          source_id: s_d7AWBhaHMZLCHfRiBUngMg
          stance: supports
          locator: CBDB:415529
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6401-6500）｜历史性依据：CBDB 朝代 = 清
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

# 王金甌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王金甌，清人物。曾任教諭。（中国历代人物传记资料库 CBDB 415529） | accepted |
| name.primary | 王金甌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金甌（CBDB 415529）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415529&o=json)
