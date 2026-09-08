---
schema: wang-person/v1
id: p_RjENWQr8d6VRj3m6fLhm2i
status: active
merged_into: null
display_name: 王啟涫
cbdb_id: 526681
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9Si6FGjtpmpqPFJU5uPUu2
        subject_person_id: p_RjENWQr8d6VRj3m6fLhm2i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟涫，清人物。中国历代人物传记资料库（CBDB）以人物编号 526681 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ztnmMDntlypQu6PbXPHOFH
          claim_id: c_9Si6FGjtpmpqPFJU5uPUu2
          source_id: s_Ra5iWqm1AwyxPB4BrBBVYB
          stance: supports
          locator: CBDB:526681
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_Ra5iWqm1AwyxPB4BrBBVYB
            source_type: api_record
            title: 中国历代人物传记资料库：王啟涫（CBDB 526681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526681&o=json
            external_identifier: CBDB:526681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1CTKsosVsW1pVqVscKmUuq
        subject_person_id: p_RjENWQr8d6VRj3m6fLhm2i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟涫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9bkrFaTzeLAXrR21FWwS9g
          claim_id: c_1CTKsosVsW1pVqVscKmUuq
          source_id: s_Ra5iWqm1AwyxPB4BrBBVYB
          stance: supports
          locator: CBDB:526681
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_Ra5iWqm1AwyxPB4BrBBVYB
            source_type: api_record
            title: 中国历代人物传记资料库：王啟涫（CBDB 526681）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526681&o=json
            external_identifier: CBDB:526681
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_A91ZSqK5BFgZ6h321GbbnV
        subject_person_id: p_PqJivP1sBKeAv7sst51d32
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_RjENWQr8d6VRj3m6fLhm2i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jck9cDBcGeSCNrsr5NTarJ
          claim_id: c_A91ZSqK5BFgZ6h321GbbnV
          source_id: s_FRxccvFRg6gk5acJEUQ2R5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：人名權威資料（中央研究院歷史語言研究所）
          source:
            id: s_FRxccvFRg6gk5acJEUQ2R5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士祜（35062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35062&o=json
            external_identifier: CBDB:35062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:06.972Z
            metadata_json: null
      object_person:
        id: p_PqJivP1sBKeAv7sst51d32
        status: active
        display_name: 王士祜
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王啟涫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟涫，清人物。中国历代人物传记资料库（CBDB）以人物编号 526681 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王啟涫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PqJivP1sBKeAv7sst51d32 | 王士祜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟涫（CBDB 526681）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526681&o=json)
- [CBDB 中国历代人物传记资料库：王士祜（35062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35062&o=json)
