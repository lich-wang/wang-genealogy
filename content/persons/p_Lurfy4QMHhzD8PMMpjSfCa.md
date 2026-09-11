---
schema: wang-person/v1
id: p_Lurfy4QMHhzD8PMMpjSfCa
status: active
merged_into: null
display_name: 王宗會
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1YBJW4wGGDG87H7zJG2rG1
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗會
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9bp1VeE83QmDRnf5Ztu1Bd
          claim_id: c_1YBJW4wGGDG87H7zJG2rG1
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
          stance: supports
          locator: CBDB:204306
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204306）
          source: &a1
            id: s_8FmYQpg2YQmE9T4qGDeQ4D
            source_type: api_record
            title: 中国历代人物传记资料库：王宗會（CBDB 204306）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204306&o=json
            external_identifier: CBDB:204306
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rhxvvNFhBAXpnzEBwkRN4g
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CevCCSaeAN6h88ed5gtYHo
          claim_id: c_rhxvvNFhBAXpnzEBwkRN4g
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R1Bis1m1h4VfPusLUMCN98
        subject_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗會（生于1517年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 204306）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TslMf3rVc1CSvcsyQL9FYz
          claim_id: c_R1Bis1m1h4VfPusLUMCN98
          source_id: s_8FmYQpg2YQmE9T4qGDeQ4D
          stance: supports
          locator: CBDB:204306
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qrxt9EarVj29lpEEobGpsD
        subject_person_id: p_ZPFLk4wbXyzPE5F5zCLZaL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_77EPp49RSnoFMo__mLp5Rb
          claim_id: c_Qrxt9EarVj29lpEEobGpsD
          source_id: s_vTVSbWUBwEMFVypTmGHdWd
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百二十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vTVSbWUBwEMFVypTmGHdWd
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 317279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317279&o=json
            external_identifier: CBDB:317279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZPFLk4wbXyzPE5F5zCLZaL
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_JMw2K2ycbZoRG5gRFeuq06
        subject_person_id: p_5p9v79QfKWB44J7p15t9Pi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hOMBfO-Ng7jVZdPdSltnUj
          claim_id: c_JMw2K2ycbZoRG5gRFeuq06
          source_id: s_HgXvLSw7i2CSHf88M1TqhG
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百二十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HgXvLSw7i2CSHf88M1TqhG
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 317277）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317277&o=json
            external_identifier: CBDB:317277
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5p9v79QfKWB44J7p15t9Pi
        status: active
        display_name: 王惠
        merged_into_person_id: null
    - claim:
        id: c_Coo78k0WQ-JU4KxmofZqQ8
        subject_person_id: p_LFu2y755pp4NNJLFkoYcBx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cpLl73Vounk6heWeL8gsVY
          claim_id: c_Coo78k0WQ-JU4KxmofZqQ8
          source_id: s_4eN9gAChxmF3Pnp6sQmAFg
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百二十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4eN9gAChxmF3Pnp6sQmAFg
            source_type: api_record
            title: 中国历代人物传记资料库：王寶（CBDB 317278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317278&o=json
            external_identifier: CBDB:317278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LFu2y755pp4NNJLFkoYcBx
        status: active
        display_name: 王寶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王宗會

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗會 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | 王宗會（生于1517年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 204306） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPFLk4wbXyzPE5F5zCLZaL | 王綱 | accepted |
| ancestors | p_5p9v79QfKWB44J7p15t9Pi | 王惠 | accepted |
| ancestors | p_LFu2y755pp4NNJLFkoYcBx | 王寶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寶（CBDB 317278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317278&o=json)
- [中国历代人物传记资料库：王綱（CBDB 317279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317279&o=json)
- [中国历代人物传记资料库：王惠（CBDB 317277）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317277&o=json)
- [中国历代人物传记资料库：王宗會（CBDB 204306）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204306&o=json)
