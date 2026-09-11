---
schema: wang-person/v1
id: p_f9DmRms8APfAby8NBxEDgt
status: active
merged_into: null
display_name: 王子揆
cbdb_id: 23702
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MZddq23ywTL4J4bTDn7by3
        subject_person_id: p_f9DmRms8APfAby8NBxEDgt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子揆，宋人物。中国历代人物传记资料库（CBDB）以人物编号 23702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_nDaxPuuwg_Sdm2pKVm_CC0
          claim_id: c_MZddq23ywTL4J4bTDn7by3
          source_id: s_xqivDVQ91NDJhyt6x4JrT6
          stance: supports
          locator: CBDB:23702
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_xqivDVQ91NDJhyt6x4JrT6
            source_type: api_record
            title: 中国历代人物传记资料库：王子揆（CBDB 23702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23702&o=json
            external_identifier: CBDB:23702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_c1jNa5c4Nw6cRtbDuXfnP8
        subject_person_id: p_f9DmRms8APfAby8NBxEDgt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子揆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ANeBrKdaHNNQBshLr96Phe
          claim_id: c_c1jNa5c4Nw6cRtbDuXfnP8
          source_id: s_xqivDVQ91NDJhyt6x4JrT6
          stance: supports
          locator: CBDB:23702
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source:
            id: s_xqivDVQ91NDJhyt6x4JrT6
            source_type: api_record
            title: 中国历代人物传记资料库：王子揆（CBDB 23702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23702&o=json
            external_identifier: CBDB:23702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_50De_zOkXvBp94plP8l6dD
        subject_person_id: p_f9DmRms8APfAby8NBxEDgt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EnaqHvpCLMTKCVDb1FEE8E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZWQ6v5UHD667rKriJs1jy
          claim_id: c_50De_zOkXvBp94plP8l6dD
          source_id: s_dHNmd8vz6QMm535P3sZ5NH
          stance: supports
          locator: CBDB 双向互证（父 王子揆 ⇄ 子 王公詔）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_dHNmd8vz6QMm535P3sZ5NH
            source_type: api_record
            title: 中国历代人物传记资料库：王公詔（CBDB 23703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23703&o=json
            external_identifier: CBDB:23703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EnaqHvpCLMTKCVDb1FEE8E
        status: active
        display_name: 王公詔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子揆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王子揆，宋人物。中国历代人物传记资料库（CBDB）以人物编号 23702 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王子揆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EnaqHvpCLMTKCVDb1FEE8E | 王公詔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公詔（CBDB 23703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23703&o=json)
- [中国历代人物传记资料库：王子揆（CBDB 23702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23702&o=json)
