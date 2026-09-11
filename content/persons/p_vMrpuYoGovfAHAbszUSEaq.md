---
schema: wang-person/v1
id: p_vMrpuYoGovfAHAbszUSEaq
status: active
merged_into: null
display_name: 王模
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ok53BKpbWREjarF6MUcC7K
        subject_person_id: p_vMrpuYoGovfAHAbszUSEaq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zTQNMpcQR1E6zies1dL25F
          claim_id: c_ok53BKpbWREjarF6MUcC7K
          source_id: s_NaehmAqKvAkA1prP94tyS4
          stance: supports
          locator: CBDB:551505
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（551505）
          source: &a1
            id: s_NaehmAqKvAkA1prP94tyS4
            source_type: api_record
            title: 中国历代人物传记资料库：王模（CBDB 551505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551505&o=json
            external_identifier: CBDB:551505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SDsCAkjytoGKFCB4R7mD8Q
        subject_person_id: p_vMrpuYoGovfAHAbszUSEaq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王模，明人物。籍贯南陽。（中国历代人物传记资料库 CBDB 551505）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KAf7N_TR_dXrMRO9o-DHgI
          claim_id: c_SDsCAkjytoGKFCB4R7mD8Q
          source_id: s_NaehmAqKvAkA1prP94tyS4
          stance: supports
          locator: CBDB:551505
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FbP5KYDk-t9rs2UKDK3cCN
        subject_person_id: p_BoQ3bxPTXeG24V1AJeLzEL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vMrpuYoGovfAHAbszUSEaq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KXCerkWwV-0yVSmLJ6eNK9
          claim_id: c_FbP5KYDk-t9rs2UKDK3cCN
          source_id: s_iZzws7ey8SoQwoXQxk9z5Q
          stance: supports
          locator: 南陽府志，lgid=878671：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iZzws7ey8SoQwoXQxk9z5Q
            source_type: api_record
            title: 中国历代人物传记资料库：王沂若（CBDB 551503）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551503&o=json
            external_identifier: CBDB:551503
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BoQ3bxPTXeG24V1AJeLzEL
        status: active
        display_name: 王沂若
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王模 | accepted |
| bio.summary | 王模，明人物。籍贯南陽。（中国历代人物传记资料库 CBDB 551505） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BoQ3bxPTXeG24V1AJeLzEL | 王沂若 | accepted |

## 外部来源

- [中国历代人物传记资料库：王模（CBDB 551505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551505&o=json)
- [中国历代人物传记资料库：王沂若（CBDB 551503）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=551503&o=json)
