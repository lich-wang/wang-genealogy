---
schema: wang-person/v1
id: p_Gk21g7E82LeFqiSW4yWrxd
status: active
merged_into: null
display_name: 王臻祜
cbdb_id: 526853
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Az2rhQx5xDnVEj4JeWHeGT
        subject_person_id: p_Gk21g7E82LeFqiSW4yWrxd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻祜，清人物。中国历代人物传记资料库（CBDB）以人物编号 526853 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_NjlImUoC1_anQw1TRKG_M1
          claim_id: c_Az2rhQx5xDnVEj4JeWHeGT
          source_id: s_aP8kA2gJ8pv6F9v83wG6i4
          stance: supports
          locator: CBDB:526853
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_aP8kA2gJ8pv6F9v83wG6i4
            source_type: api_record
            title: 中国历代人物传记资料库：王臻祜（CBDB 526853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526853&o=json
            external_identifier: CBDB:526853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_P6ydhERoj9sfaDkzHhhxWy
        subject_person_id: p_Gk21g7E82LeFqiSW4yWrxd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臻祜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sGkSwKwPyAKd8CYymSUag7
          claim_id: c_P6ydhERoj9sfaDkzHhhxWy
          source_id: s_aP8kA2gJ8pv6F9v83wG6i4
          stance: supports
          locator: CBDB:526853
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7201-7229）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_aP8kA2gJ8pv6F9v83wG6i4
            source_type: api_record
            title: 中国历代人物传记资料库：王臻祜（CBDB 526853）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526853&o=json
            external_identifier: CBDB:526853
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:19.665Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4nAQzTNI0A1CXZVvXHnp7G
        subject_person_id: p_Gaw82eLMUREL4otcCy8uLm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gk21g7E82LeFqiSW4yWrxd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GwshBhRQw6aapkbwR7VcRm
          claim_id: c_4nAQzTNI0A1CXZVvXHnp7G
          source_id: s_peiEiEziXw9q7UdS1GCKzj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13034：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_peiEiEziXw9q7UdS1GCKzj
            source_type: api_record
            title: 中国历代人物传记资料库：王國華（CBDB 69330）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json
            external_identifier: CBDB:69330
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.211Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Gaw82eLMUREL4otcCy8uLm
        status: active
        display_name: 王國華
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臻祜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王臻祜，清人物。中国历代人物传记资料库（CBDB）以人物编号 526853 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王臻祜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Gaw82eLMUREL4otcCy8uLm | 王國華 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國華（CBDB 69330）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69330&o=json)
- [中国历代人物传记资料库：王臻祜（CBDB 526853）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526853&o=json)
