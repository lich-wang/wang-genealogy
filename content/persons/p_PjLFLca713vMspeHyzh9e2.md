---
schema: wang-person/v1
id: p_PjLFLca713vMspeHyzh9e2
status: active
merged_into: null
display_name: 王叔果
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJUfZTARSJQWWDgWZQ3TW4
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9vUFfmuAY79mZDRfgYQ1C
          claim_id: c_qJUfZTARSJQWWDgWZQ3TW4
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
          stance: supports
          locator: CBDB:126578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126578）
          source: &a1
            id: s_Zcf1n9yz4QFE95Fq23RHz6
            source_type: api_record
            title: 中国历代人物传记资料库：王叔果（CBDB 126578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126578&o=json
            external_identifier: CBDB:126578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.037Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CQ6H7nTvMKW8AMFnDyksNb
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1516年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GC4uHUzQKvfCdPLr7vXi8t
          claim_id: c_CQ6H7nTvMKW8AMFnDyksNb
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
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
        id: c_NLP24DuNCXYMacYNcBRtKp
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1588年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FzrTbFm83Ms9PMpP8yk6bQ
          claim_id: c_NLP24DuNCXYMacYNcBRtKp
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
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
        id: c_PTYxCrtuZRAyLwgsvmKYPs
        subject_person_id: p_PjLFLca713vMspeHyzh9e2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔果（1516年—1588年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 126578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B68Z8SGfGClW4Bjy_ljAv-
          claim_id: c_PTYxCrtuZRAyLwgsvmKYPs
          source_id: s_Zcf1n9yz4QFE95Fq23RHz6
          stance: supports
          locator: CBDB:126578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UHPlLUpDxrKqHwJbwJ4uBz
        subject_person_id: p_VyeEwdePu6TAbdxcb873Rk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PjLFLca713vMspeHyzh9e2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbF0wFPJAPinBlNTV15y1C
          claim_id: c_UHPlLUpDxrKqHwJbwJ4uBz
          source_id: s_1cACCg7bfEgWMGgbe2bmhq
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第七十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1cACCg7bfEgWMGgbe2bmhq
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 312427）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312427&o=json
            external_identifier: CBDB:312427
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_VyeEwdePu6TAbdxcb873Rk
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1UMMXsB9E2N3N71DqHFO05
        subject_person_id: p_7KqNoDrVhMseAaCM8ihtV4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PjLFLca713vMspeHyzh9e2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_etkQg2HP1fjEEbwIrgqead
          claim_id: c_1UMMXsB9E2N3N71DqHFO05
          source_id: s_a4f26DUPpK7GoHpTftvQFp
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第七十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_a4f26DUPpK7GoHpTftvQFp
            source_type: api_record
            title: 中国历代人物传记资料库：王鉦（CBDB 312426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312426&o=json
            external_identifier: CBDB:312426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7KqNoDrVhMseAaCM8ihtV4
        status: active
        display_name: 王鉦
        merged_into_person_id: null
    - claim:
        id: c_Kcy9pf5i2k-a5awAUBtuta
        subject_person_id: p_HULtXBFHQGnNAhDKAXq6rV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PjLFLca713vMspeHyzh9e2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9kfLAwg_E3se32lFJ_BQLa
          claim_id: c_Kcy9pf5i2k-a5awAUBtuta
          source_id: s_1A6jfpc7Gt2fqV24jEdWnM
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第七十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1A6jfpc7Gt2fqV24jEdWnM
            source_type: api_record
            title: 中国历代人物传记资料库：王封（CBDB 312425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312425&o=json
            external_identifier: CBDB:312425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HULtXBFHQGnNAhDKAXq6rV
        status: active
        display_name: 王封
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王叔果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔果 | accepted |
| birth.date | 1516年 | accepted |
| death.date | 1588年 | accepted |
| bio.summary | 王叔果（1516年—1588年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 126578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VyeEwdePu6TAbdxcb873Rk | 王澈 | accepted |
| ancestors | p_7KqNoDrVhMseAaCM8ihtV4 | 王鉦 | accepted |
| ancestors | p_HULtXBFHQGnNAhDKAXq6rV | 王封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 312427）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312427&o=json)
- [中国历代人物传记资料库：王封（CBDB 312425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312425&o=json)
- [中国历代人物传记资料库：王叔果（CBDB 126578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126578&o=json)
- [中国历代人物传记资料库：王鉦（CBDB 312426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312426&o=json)
